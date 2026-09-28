#!/usr/bin/env node
'use strict';

const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const {loadSiteData,validateSiteData}=require('./validate-site-data.cjs');

const root=path.resolve(__dirname,'..');
const data=loadSiteData(path.join(root,'site-data.js'));
assert.deepEqual(validateSiteData(data,{rootDir:root}),[],'the distributed template must satisfy its schema');

const unsafe=structuredClone(data);
unsafe.mode='production';
const unsafeErrors=validateSiteData(unsafe,{rootDir:root});
assert(unsafeErrors.some(error=>error.includes('production placeholder')),'production mode must reject demo copy');
assert(unsafeErrors.some(error=>error.includes('placeholder media')),'production mode must reject placeholder media');
assert(unsafeErrors.some(error=>error.includes('booking method')),'production mode must require a booking method');

const ready=loadSiteData(path.join(root,'tests/fixtures/site-data.production.js'));
assert.deepEqual(validateSiteData(ready,{rootDir:root,allowTestDomains:true}),[],'a complete production fixture must pass');
assert(validateSiteData(ready,{rootDir:root}).some(error=>error.includes('test domain')),'test domains must never pass a real client release');
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
