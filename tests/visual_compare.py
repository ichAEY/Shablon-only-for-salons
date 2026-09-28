#!/usr/bin/env python3
"""Compare the cleaned salon template with the approved Git baseline in Chromium."""
from __future__ import annotations

import argparse
from pathlib import Path
import subprocess

from PIL import Image, ImageChops
from playwright.sync_api import sync_playwright

OUT = Path("test-artifacts/visual")
OUT.mkdir(parents=True, exist_ok=True)


def capture(browser, url: str, name: str, width: int, height: int, mobile: bool, approved_data: str | None = None):
    context = browser.new_context(
        viewport={"width": width, "height": height},
        device_scale_factor=1,
        is_mobile=mobile,
        has_touch=mobile,
        reduced_motion="reduce",
        locale="ru-RU",
    )
    page = context.new_page()
    # Render both revisions with identical approved demo content. This isolates
    # visual regressions from the deliberate reduction to four neutral cards.
    if approved_data is not None:
        # Keep the frozen-baseline pixel comparison focused on structure:
        # approved palette differences are verified separately below.
        page.route("**/salon-palette.css*", lambda route: route.fulfill(
            status=200, content_type="text/css", body=""
        ))
        page.route("**/site-data.js*", lambda route: route.fulfill(status=200, content_type="application/javascript", body=approved_data))
    page.goto(url, wait_until="domcontentloaded", timeout=30000)
    root = "#salon-mobile" if mobile else "#salon-desktop-v1"
    section = "#tn13Services" if mobile else "#salonDesktopServices"
    page.wait_for_selector(root, state="attached", timeout=20000)
    page.wait_for_function(
        "() => !document.documentElement.classList.contains('br-booting')",
        timeout=12000,
    )
    page.evaluate("() => document.fonts.ready")
    page.add_style_tag(content=(
        "*,*::before,*::after{animation:none!important;"
        "transition:none!important;caret-color:transparent!important}"
        "html,body{scroll-behavior:auto!important}"
    ))
    page.evaluate("window.scrollTo(0,0)")
    page.wait_for_timeout(350)
    images = {}
    if height >= 800:
        images["hero"] = page.screenshot(animations="disabled")
    if mobile:
        page.locator(section + ' [data-scat="Волосы"]').click(timeout=10000)
    else:
        page.locator(section + ' [data-service-category="Волосы"]').click(timeout=10000)
    page.locator(section).evaluate("(el) => el.scrollIntoView({behavior:'instant',block:'start'})")
    page.wait_for_timeout(700)
    page.evaluate("() => new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)))")
    section_y = page.locator(section).evaluate(
        "(el) => Math.max(0, Math.ceil(el.getBoundingClientRect().top))"
    )
    images["services"] = page.screenshot(
        clip={"x": 0, "y": section_y, "width": width, "height": height - section_y},
        animations="disabled",
    )
    if (not mobile and width == 1366) or (mobile and width == 390):
        expand = page.locator(section + (" .tn31-service-demo-more:visible" if mobile else " .dct-service-demo-more:visible")).first
        # Some approved descriptions fit within two lines: their More buttons are
        # intentionally hidden, so only exercise expansion when one is visible.
        if expand.count() > 0:
            expand.click(timeout=12000)
            if expand.get_attribute("aria-expanded") != "true":
                raise AssertionError(name + ": description did not expand")
            # Expansion is asserted functionally; the intermediate scroll-anchoring
            # frame is not a stable pixel snapshot on Chromium or WebKit.
            page.wait_for_timeout(350)
            expand.click(timeout=12000)
            if expand.get_attribute("aria-expanded") != "false":
                raise AssertionError(name + ": description did not collapse")

    if not mobile and width == 1366:
        page.locator("#stdStickyGalleryOpen").hover(timeout=10000)
        page.wait_for_timeout(150)
        images["gallery-hover"] = page.locator("#stdStickyGalleryOpen").screenshot(
            animations="disabled"
        )
        star_color = page.locator("#stdStickyGalleryOpen > span:last-child").evaluate(
            "(el) => getComputedStyle(el).color"
        )
        if star_color != "rgb(255, 255, 255)":
            raise AssertionError(name + ": gallery star lost its approved white hover")
        page.locator("#stdStickyGalleryOpen").click(timeout=12000)
        page.locator("#stdGalleryBrowser.open").wait_for(timeout=8000)
        # Lazy-loaded SVG tiles can be captured before their first decode on CI.
        # Wait for every gallery tile to paint before comparing pixels.
        page.locator("#stdGalleryBrowserGrid img").evaluate_all(
            "(imgs) => Promise.all(imgs.map(img => {img.loading = 'eager'; return img.decode().catch(() => {});} ))"
        )
        page.wait_for_timeout(250)
        images["gallery-open"] = page.screenshot(animations="disabled")

    if mobile and width == 390:
        page.locator(".tn22-worklink").click(timeout=12000)
        page.locator("#tn13Gallery.open").wait_for(timeout=8000)
        # Wait for gallery-specific fonts, lazy media and compositing to settle.
        # The open-overlay screenshot can otherwise capture subpixel text repainting.
        page.evaluate("() => document.fonts.ready")
        page.locator("#tn13Gallery img").first.evaluate(
            "(img) => img.decode().catch(() => {})"
        )
        page.wait_for_timeout(350)
        # The first open frame repaints glyphs asynchronously; compare the
        # stable gallery after a category selection instead.
        page.locator("#tn13Gallery [data-gcat='Волосы']").click(timeout=12000)
        page.wait_for_timeout(160)
        images["gallery-category"] = page.screenshot(animations="disabled")

    context.close()
    for label, data in images.items():
        (OUT / f"{name}-{label}.png").write_bytes(data)
    return images


def compare(a: bytes, b: bytes, filename: str):
    import io

    x = Image.open(io.BytesIO(a)).convert("RGB")
    y = Image.open(io.BytesIO(b)).convert("RGB")
    if x.size != y.size:
        raise AssertionError(f"{filename}: different image dimensions: {x.size} / {y.size}")
    diff = ImageChops.difference(x, y)
    if not diff.getbbox():
        print(f"PASS {filename}: pixel-identical")
        return
    changed = sum(1 for rgb in diff.getdata() if max(rgb) > 10)
    fraction = changed / (x.width * x.height)
    diff.save(OUT / f"{filename}-diff.png")
    print(f"{filename}: {changed} changed pixels / {fraction:.3%}")
    # The services section intentionally differs from the frozen baseline:
    # 1–4 categories now fill the available width and service titles are slightly
    # heavier. Keep the original strict threshold everywhere else.
    limit = 0.03 if filename.endswith("-services") else 0.003
    if fraction > limit:
        raise AssertionError(
            f"{filename}: visible regression exceeds {limit:.1%} of pixels"
        )


def verify_palette(browser, candidate: str):
    """Check the actual, palette-enabled browser cascade on both device UIs."""
    cases = [
        (1366, 900, False, {
            "#salon-desktop-v1": ("backgroundColor", "rgb(250, 249, 246)"),
            "#salonDesktopReviews": ("backgroundColor", "rgb(241, 236, 229)"),
            "#salonDesktopReviews .std-review-card": ("backgroundColor", "rgb(255, 255, 255)"),
            "#salon-desktop-v1 .std-header-book": ("backgroundColor", "rgb(37, 37, 37)"),
            "#salonDesktopTop .std-btn-primary": ("backgroundColor", "rgb(37, 37, 37)"),
            "#salonDesktopTop .std-btn:not(.std-btn-primary)": ("backgroundColor", "rgb(235, 229, 222)"),
            "#salonDesktopServices": ("backgroundColor", "rgb(36, 36, 36)"),
        }),
        (390, 844, True, {
            "#salon-mobile": ("backgroundColor", "rgb(250, 249, 246)"),
            "#tn13Top": ("backgroundColor", "rgb(250, 249, 246)"),
            "#tn13Portfolio": ("backgroundColor", "rgb(250, 249, 246)"),
            "#tn38About": ("backgroundColor", "rgb(250, 249, 246)"),
            "#tn38About .tn42-fact": ("backgroundColor", "rgb(248, 246, 242)"),
            "#tn13Reviews": ("backgroundColor", "rgb(241, 236, 229)"),
            "#tn13Visit": ("backgroundColor", "rgb(36, 36, 36)"),
            "#tn13Reviews .br-review-card": ("backgroundColor", "rgb(248, 246, 242)"),
            "#tn13Reviews .br-review-card": ("borderTopColor", "rgb(226, 218, 209)"),
            "#tn13Top .tn22-cta": ("backgroundColor", "rgb(37, 37, 37)"),
            "#tn13Top .tn22-worklink": ("backgroundColor", "rgb(235, 229, 222)"),
            "#tn13Services": ("backgroundColor", "rgb(36, 36, 36)"),
            "#tn13Gallery": ("backgroundColor", "rgb(241, 236, 229)"),
        }),
    ]
    for width, height, mobile, expected in cases:
        context = browser.new_context(
            viewport={"width": width, "height": height},
            is_mobile=mobile, has_touch=mobile, reduced_motion="reduce"
        )
        try:
            page = context.new_page()
            page.goto(candidate, wait_until="domcontentloaded", timeout=30000)
            page.wait_for_selector("#salon-mobile" if mobile else "#salon-desktop-v1", state="attached")
            page.wait_for_function("() => !document.documentElement.classList.contains('br-booting')")
            page.wait_for_function("() => !!document.styleSheets && Array.from(document.styleSheets).some(s => s.href && s.href.includes('salon-palette.css'))", timeout=12000)
            for selector, (prop, wanted) in expected.items():
                locator = page.locator(selector).first
                locator.wait_for(state="attached")
                got = locator.evaluate("(el, prop) => getComputedStyle(el)[prop]", prop)
                if got != wanted:
                    raise AssertionError(f"{width}px {selector} {prop}: {got}, expected {wanted}")
            if mobile:
                hero_color = page.locator("#tn13Top").evaluate("(el) => getComputedStyle(el).backgroundColor")
                portfolio_color = page.locator("#tn13Portfolio").evaluate("(el) => getComputedStyle(el).backgroundColor")
                if hero_color != portfolio_color:
                    raise AssertionError(f"Visible hero/portfolio seam: {hero_color} vs {portfolio_color}")
                fade = page.locator("#tn13Portfolio").evaluate("(el) => getComputedStyle(el, '::before').backgroundImage")
                if "250, 249, 246" not in fade:
                    raise AssertionError(f"Portfolio fade does not match hero: {fade}")
                hero_btn = page.locator("#tn13Top .tn22-cta")
                page.emulate_media(reduced_motion="no-preference")
                effect = hero_btn.evaluate("(el) => ({name: getComputedStyle(el, '::after').animationName, duration: getComputedStyle(el, '::after').animationDuration})")
                if effect["name"] != "tn22Shine" or effect["duration"] != "3.2s":
                    raise AssertionError(f"Hero booking shimmer differs from sticky: {effect}")
                page.emulate_media(reduced_motion="reduce")
                if hero_btn.evaluate("(el) => getComputedStyle(el, '::after').animationName") != "none":
                    raise AssertionError("Reduced-motion setting does not disable shimmer")
            if not mobile:
                # Hover animates over a few hundred milliseconds in the real UI.
                # Wait for the destination colour, not the initial transition frame.
                primary = page.locator("#salon-desktop-v1 .std-header-book").first
                primary.hover()
                page.wait_for_timeout(480)
                got = primary.evaluate("(el) => getComputedStyle(el).backgroundColor")
                if got != "rgb(66, 66, 66)":
                    hovered = primary.evaluate("(el) => el.matches(':hover')")
                    raise AssertionError(f"{width}px primary hover: {got}, :hover={hovered}, expected rgb(66, 66, 66)")
            print(f"PASS neutral palette: {width}px backgrounds, cards, buttons" + (" and hover" if not mobile else ""))
        finally:
            context.close()


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--baseline", default="http://127.0.0.1:4173/")
    parser.add_argument("--candidate", default="http://127.0.0.1:4174/")
    parser.add_argument("--engine", choices=("chromium", "webkit"), default="chromium")
    parser.add_argument("--quick", action="store_true")
    args = parser.parse_args()
    cases = [(1366, 900, False), (390, 844, True)] if args.quick else [
             (1024, 768, False), (1366, 900, False),
             (1440, 900, False), (1920, 1080, False),
             (360, 740, True), (375, 812, True),
             (390, 844, True), (414, 896, True)]
    errors = []
    # The historical approved baseline predates site-data.js. Obtain the
    # factory-approved dataset from the first published factory commit instead.
    approved_data = subprocess.check_output(
        ["git", "show", "4bf5f867c0217a4a478a6ab9a5d6b4aad49d4042:site-data.js"],
        text=True,
    )
    with sync_playwright() as p:
        browser = getattr(p, args.engine).launch(headless=True)
        try:
            for w, h, mobile in cases:
                key = f"{'mobile' if mobile else 'desktop'}-{w}"
                baseline = capture(browser, args.baseline, key+"-approved", w, h, mobile)
                candidate = capture(browser, args.candidate, key+"-cleaned", w, h, mobile, approved_data)
                for item in baseline:
                    try:
                        compare(baseline[item], candidate[item], key+"-"+item)
                    except AssertionError as exc:
                        errors.append(str(exc))
            verify_palette(browser, args.candidate)
        finally:
            browser.close()
    if errors:
        raise AssertionError("Visual regressions: " + "; ".join(errors))
    print("PASS: All visual regression snapshots match the approved template.")


if __name__ == "__main__":
    main()
