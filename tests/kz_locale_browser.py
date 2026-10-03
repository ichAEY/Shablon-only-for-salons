#!/usr/bin/env python3
"""Kazakhstan localization browser contract: KK/RU/EN with protected client content."""

import argparse
import os
from playwright.sync_api import sync_playwright

BASE_URL=os.environ.get("KZ_SITE_URL","http://127.0.0.1:4175")

def text(locator):
    return (locator.first.text_content() or "").strip()

def wait(page, root):
    errors=[]
    page.on("pageerror",lambda error: errors.append(str(error)))
    page.goto(BASE_URL,wait_until="domcontentloaded",timeout=30000)
    page.locator(root).wait_for(state="visible",timeout=18000)
    page.wait_for_function("!document.documentElement.classList.contains('br-booting')")
    page.wait_for_timeout(700)
    assert not errors, f"browser errors: {errors}"

def assert_no_x_overflow(page,label):
    metrics=page.evaluate("""() => ({
      inner: window.innerWidth,
      doc: document.documentElement.scrollWidth,
      body: document.body.scrollWidth
    })""")
    assert metrics["doc"] <= metrics["inner"]+2 and metrics["body"] <= metrics["inner"]+2, f"{label} horizontal overflow: {metrics}"

def desktop(browser):
    context=browser.new_context(viewport={"width":1366,"height":900},locale="kk-KZ")
    page=context.new_page()
    wait(page,"#salon-desktop-v1")
    assert page.locator('[data-desktop-lang="kk"]').count()>=1, "KK desktop switch is missing"
    page.locator('[data-desktop-lang="kk"]').first.click()
    page.wait_for_timeout(250)
    assert text(page.locator(".std-header-brand-main"))=="MONROE", "KZ brand must remain original"
    assert text(page.locator("#stdServiceList .dct-service-card-title").first)=="Зақымдалған шашты кешенді қалпына келтіру және кәсіби күтім", "desktop service must use KK"
    assert text(page.locator("#salonDesktopTeam .std-team-kicker"))=="Our Team", "desktop KK team heading must be English"
    assert text(page.locator("#salonDesktopTeam .std-master-name").first)=="Aruzhan", "person name must remain original"
    assert text(page.locator("#salonDesktopTeam .std-master-role").first)=="Hair stylist", "KK team role must be English"
    assert text(page.locator(".std-review-name").first)=="Айгерім", "review author must remain original"
    assert text(page.locator(".std-review-text").first)=="Керемет қызмет! Шебер өте мұқият жұмыс істеді.", "real review text must remain untouched"
    assert text(page.locator(".std-review-meta").first)=="2GIS", "review source must remain original"
    assert text(page.locator('#salonDesktopContacts [data-contact-type="address"] .std-contact-card-sub'))=="Google Maps-та ашу", "KK map action"
    assert "MONROE" in page.title() and "Алматы" in page.title(), "KZ title must keep brand and localized city"
    assert_no_x_overflow(page,"desktop KK")
    context.close()

def mobile(browser):
    context=browser.new_context(viewport={"width":390,"height":844},is_mobile=True,has_touch=True,locale="kk-KZ")
    page=context.new_page()
    wait(page,"#salon-mobile")
    # Phone/browser KK should select KK automatically when it is available.
    assert page.locator("body").get_attribute("data-br-lang")=="kk", "kk-KZ phone must auto-select KK"
    assert page.locator('[data-lang="kk"]').count()==1, "KK mobile switch is missing"
    assert text(page.locator(".tn22-title"))=="MONROE", "mobile KZ brand must remain original"
    assert text(page.locator("#tn13Services .tn31-service-name").first)=="Зақымдалған шашты кешенді қалпына келтіру және кәсіби күтім", "mobile service must use KK"
    assert text(page.locator("#tn13Team .tn22-kicker"))=="Our Team", "mobile KK team heading must be English"
    assert text(page.locator("#tn13Team .tn22-master-name").first)=="Aruzhan", "mobile person name must remain original"
    assert text(page.locator("#tn13Team .tn22-master-role").first)=="Hair stylist", "mobile team role must be English"
    assert text(page.locator("#tn13Reviews .br-review-name").first)=="Айгерім", "mobile review author must remain original"
    assert text(page.locator("#tn13Reviews .br-review-card p").first)=="Керемет қызмет! Шебер өте мұқият жұмыс істеді.", "mobile real review must remain untouched"
    assert text(page.locator("#tn13Reviews .br-review-meta span").first)=="2GIS", "mobile review source must remain original"
    assert text(page.locator('#tn13Visit [data-contact-type="address"] strong+span'))=="Google Maps-та ашу", "mobile KK map action"
    service=page.locator("#tn13Services .tn31-service-row").first.evaluate("""el=>({
      left:el.getBoundingClientRect().left,
      right:el.getBoundingClientRect().right,
      width:el.getBoundingClientRect().width,
      viewport:window.innerWidth
    })""")
    assert service["left"]>=-2 and service["right"]<=service["viewport"]+2, f"long KK service card overflows: {service}"
    assert_no_x_overflow(page,"mobile KK")
    context.close()

def main():
    p=argparse.ArgumentParser()
    p.add_argument("--engine",choices=["chromium","webkit"],default="chromium")
    args=p.parse_args()
    with sync_playwright() as pw:
      browser=getattr(pw,args.engine).launch(headless=True)
      try:
        desktop(browser)
        mobile(browser)
      finally:
        browser.close()
    print(f"PASS Kazakhstan KK protected-content and overflow contract ({args.engine})")

if __name__=="__main__":
    main()
