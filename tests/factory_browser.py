#!/usr/bin/env python3
"""Browser contract for a fully populated production configuration."""

import os
from playwright.sync_api import sync_playwright


BASE_URL = os.environ.get("FACTORY_SITE_URL", "http://127.0.0.1:4175")


def expect_text(locator, expected, label):
    actual = (locator.text_content() or "").strip()
    assert actual == expected, f"{label}: expected {expected!r}, got {actual!r}"


def wait_for_app(page, root):
    errors = []
    page.on("pageerror", lambda error: errors.append(str(error)))
    page.goto(BASE_URL, wait_until="domcontentloaded")
    page.wait_for_selector(root, state="visible", timeout=10_000)
    page.wait_for_function("!document.documentElement.classList.contains('br-booting')")
    page.wait_for_timeout(900)
    assert not errors, f"browser errors: {errors}"


def check_desktop(browser):
    page = browser.new_page(viewport={"width": 1366, "height": 900}, locale="ru-RU")
    wait_for_app(page, "#salon-desktop-v1")
    page.locator('[data-desktop-lang="ru"]').first.click()
    page.wait_for_timeout(150)
    expect_text(page.locator(".std-header-brand-main"), "Люмен", "desktop header text brand")
    assert page.locator(".std-header-brand-main img").count() == 0, "desktop header must not inject the client logo"
    assert page.locator("#stdHeroMedia").first.get_attribute("src") == "tests/fixtures/photo.svg", "desktop hero media is not applied"
    assert page.locator("#stdServiceList .dct-service-card").count() == 3
    assert not page.locator("#salonDesktopTeam").is_hidden()
    expect_text(page.locator("#salonDesktopTeam .std-team-subtitle"), "Команда салона", "desktop empty team state")
    assert page.locator("#salonDesktopTeam .std-master.is-placeholder").count() == 4, "desktop empty team must keep four visual master cards"
    assert page.locator("#salonDesktopPortfolio").is_hidden()
    expect_text(page.locator(".std-reviews-score strong"), "5", "desktop rating")
    expect_text(page.locator(".std-review-meta").first, "Google", "desktop review source")
    assert page.locator(".std-phone").get_attribute("href") == "tel:+37410555555"
    page.locator("#stdHeaderBookBtn").click()
    assert page.locator("#stdBookOverlay .std-book-options a").count() == 4
    assert page.locator("#stdBookOverlay .std-book-options a").first.get_attribute("href") == "tel:+37410555555"
    page.locator("#stdBookClose").click()
    assert page.locator(".std-address").inner_text().strip().startswith("Ереван")
    expect_text(page.locator('#salonDesktopContacts [data-contact-type="phone"] .std-contact-card-title'), "+374 10 555 555", "desktop phone title")
    expect_text(page.locator('#salonDesktopContacts [data-contact-type="phone"] .std-contact-card-sub'), "Позвонить", "desktop phone subtitle")
    expect_text(page.locator('#salonDesktopContacts [data-contact-type="messenger"] .std-contact-card-title'), "Telegram", "desktop messenger title")
    expect_text(page.locator('#salonDesktopContacts [data-contact-type="address"] .std-contact-card-sub'), "Открыть в Google Maps", "desktop map action")
    expect_text(page.locator("#stdServiceList .dct-service-card-title").first, "Стрижка", "desktop service in Russian")
    page.locator('[data-desktop-lang="en"]').first.click()
    page.wait_for_timeout(150)
    assert page.locator(".std-address").inner_text().strip().startswith("Yerevan")
    expect_text(page.locator("#stdServiceList .dct-service-card-title").first, "Haircut", "desktop service in English")
    page.close()


def check_mobile(browser):
    context = browser.new_context(viewport={"width": 390, "height": 844}, is_mobile=True, has_touch=True, locale="ru-RU")
    page = context.new_page()
    wait_for_app(page, "#salon-mobile")
    page.locator('[data-lang="ru"]').click()
    page.wait_for_timeout(150)
    expect_text(page.locator(".tn22-title"), "Люмен", "mobile brand in Russian")
    assert "is-single-line" in (page.locator(".tn22-title").get_attribute("class") or ""), "one-word mobile name must reserve the two-line hero zone"
    top_logo = page.locator(".tn22-brand img")
    assert top_logo.count() == 1 and top_logo.first.get_attribute("src") == "tests/fixtures/logo.svg", "mobile top brand should use a real client logo"
    header_geometry = page.locator("#tn13Top .tn22-top").evaluate("""top => {
        const logo=top.querySelector('.tn22-brand img').getBoundingClientRect();
        const menu=top.querySelector('.tn22-menu').getBoundingClientRect();
        const topRect=top.getBoundingClientRect();
        return {
            logoLeft:logo.left-topRect.left,
            menuRight:topRect.right-menu.right,
            transform:getComputedStyle(top.querySelector('.tn22-brand img')).transform
        };
    }""")
    assert abs(header_geometry["logoLeft"]-20) <= 1.25, f"mobile logo left inset is wrong: {header_geometry}"
    assert abs(header_geometry["menuRight"]-20) <= 1.25, f"mobile menu right inset is wrong: {header_geometry}"
    assert header_geometry["transform"] == "none", f"mobile logo must not keep a legacy translate: {header_geometry}"
    assert page.locator("#tn13Services .tn31-service-row").count() == 3
    assert not page.locator("#tn13Team").is_hidden()
    assert page.locator("#tn13Team .tn22-master-card.is-placeholder").count() == 4, "mobile empty team must keep four visual master cards"
    assert page.locator("#tn13Portfolio").is_hidden()
    assert page.locator("#tn13Reviews .br-review-card").count() >= 3
    expect_text(page.locator("#tn13Reviews .br-review-meta span").first, "Google", "mobile review source")
    page.locator(".tn22-cta").click()
    assert page.locator("#tn13BookSheet .tn50-book-option").count() == 4
    page.locator("#tn13BookClose").click()
    page.locator('[data-lang="en"]').click()
    page.wait_for_timeout(150)
    assert page.locator(".tn37-location .tn37-info-copy").inner_text().strip().startswith("Yerevan")
    expect_text(page.locator('#tn13Visit [data-contact-type="address"] strong'), "Yerevan, 12 Abovyan St", "mobile short address")
    expect_text(page.locator('#tn13Visit [data-contact-type="address"] strong+span'), "Open in Google Maps", "mobile map action")
    expect_text(page.locator("#tn13Services .tn31-service-name").first, "Haircut", "mobile service in English")
    context.close()


def check_wide_touch(browser):
    context = browser.new_context(viewport={"width": 1180, "height": 820}, is_mobile=True, has_touch=True)
    page = context.new_page()
    wait_for_app(page, "#salon-desktop-v1")
    assert page.locator("#salon-mobile").count() == 0
    context.close()


def main():
    with sync_playwright() as playwright:
        browser = playwright.chromium.launch()
        try:
            check_desktop(browser)
            check_mobile(browser)
            check_wide_touch(browser)
        finally:
            browser.close()
    print("PASS: production data hydrates desktop, mobile, translations, booking, and wide touch")


if __name__ == "__main__":
    main()
