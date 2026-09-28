#!/usr/bin/env node
'use strict';

const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const vm=require('node:vm');
const {loadSiteData,validateSiteData}=require('./validate-site-data.cjs');

const root=path.resolve(__dirname,'..');
const data=loadSiteData(path.join(root,'site-data.js'));
assert.deepEqual(validateSiteData(data,{rootDir:root}),[],'the distributed template must satisfy its schema');

const starter=loadSiteData(path.join(root,'site-data.blank.js'));
assert.equal(starter.mode,'template','blank starter cannot be published by accident');
assert.deepEqual([...starter.services],[],'new customer sites must start without example services');
assert.deepEqual(validateSiteData(starter,{rootDir:root}),[],'blank starter must have valid schema');

const unsafe=structuredClone(data);
unsafe.mode='production';
const unsafeErrors=validateSiteData(unsafe,{rootDir:root});
assert(unsafeErrors.some(error=>error.includes('production placeholder')),'production mode must reject demo copy');
assert(unsafeErrors.some(error=>error.includes('placeholder media')),'production mode must reject placeholder media');
assert(unsafeErrors.some(error=>error.includes('booking method')),'production mode must require a booking method');

const ready=loadSiteData(path.join(root,'tests/fixtures/site-data.production.js'));
assert.deepEqual(validateSiteData(ready,{rootDir:root,allowTestDomains:true}),[],'a complete production fixture must pass');
assert(validateSiteData(ready,{rootDir:root}).some(error=>error.includes('test domain')),'test domains must never pass a real client release');
// A Russian salon must not need Armenian; Uzbek and Tajik salons must supply their own third language.
for(const [country,locales] of Object.entries({RU:['ru','en'],AM:['ru','en','hy'],UZ:['ru','en','uz'],TJ:['ru','en','tg']})){
  const sample=structuredClone(ready);
  sample.country=country;sample.locales=locales;
  const augment=value=>{
    if(!value||typeof value!=='object')return;
    if(typeof value.ru==='string'&&typeof value.en==='string'){
      if(country==='UZ')value.uz=value.en;
      if(country==='TJ')value.tg=value.en;
      return;
    }
    if(Array.isArray(value))value.forEach(augment);
    else Object.values(value).forEach(augment);
  };
  augment(sample);
  assert.deepEqual(validateSiteData(sample,{rootDir:root,allowTestDomains:true}),[],`${country} locale schema should accept its supported languages`);
  const context={window:{TANEM_SITE_DATA:sample}};
  vm.runInNewContext(fs.readFileSync(path.join(root,'site-regions.js'),'utf8'),context);
  assert.deepEqual(Array.from(context.window.TANEM_REGION.locales),locales,`${country} switcher languages`);
  assert.equal(context.window.TANEM_REGION.teamHeading('ru'),'Наша команда');
  assert.equal(context.window.TANEM_REGION.teamHeading(locales.at(-1)),locales.at(-1)==='ru'?'Наша команда':'Our Team');
  if(country==='RU'){
    const invalid=structuredClone(sample);invalid.locales=['ru','en','hy'];
    assert(validateSiteData(invalid,{rootDir:root,allowTestDomains:true}).some(e=>e.includes('exactly ru, en')),'Russia must not expose HY');
  }
  if(country==='UZ'||country==='TJ'){
    const invalid=structuredClone(sample);invalid.salon.name[locales[2]]='';
    assert(validateSiteData(invalid,{rootDir:root,allowTestDomains:true}).some(e=>e.includes(`salon.name.${locales[2]}`)),'Missing regional salon name must fail release');
  }
}
ready.reviews[0].rating=4;
assert(validateSiteData(ready,{rootDir:root,allowTestDomains:true}).some(error=>error.includes('only five-star reviews')),'non-five-star reviews must be rejected');

const index=fs.readFileSync(path.join(root,'index.html'),'utf8');
const desktop=fs.readFileSync(path.join(root,'desktop.js'),'utf8');
const mobile=fs.readFileSync(path.join(root,'mobile.js'),'utf8');
assert(index.indexOf('site-data.js')<index.indexOf("desktop?'desktop.js"),'site-data.js must load before either UI bundle');
assert(index.includes('site-runtime.js'),'the production hydration runtime must load');
assert(index.includes("matchMedia('(min-width:1024px)').matches"),'wide touch devices must use the desktop layout');
assert(index.includes('(hover:hover) and (pointer:fine), (min-width:1024px)'),'wide touch devices must receive desktop styles');
assert(desktop.includes('SITE.services.filter'),'desktop services must come from the unified source');
assert(mobile.includes('SITE.services.map'),'mobile services must come from the unified source');

console.log('PASS: schema, release blockers, unified services, and wide-touch routing are enforced');
