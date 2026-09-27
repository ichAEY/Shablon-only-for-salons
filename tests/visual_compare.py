#!/usr/bin/env python3
"""Compare the cleaned salon template with the approved Git baseline in Chromium."""
from __future__ import annotations

import argparse
from pathlib import Path

from PIL import Image, ImageChops
from playwright.sync_api import sync_playwright

OUT = Path("test-artifacts/visual")
OUT.mkdir(parents=True, exist_ok=True)


def capture(browser, url: str, name: str, width: int, height: int, mobile: bool):
    context = browser.new_context(
        viewport={"width": width, "height": height},
        device_scale_factor=1,
        is_mobile=mobile,
        has_touch=mobile,
        reduced_motion="reduce",
        locale="ru-RU",
    )
    page = context.new_page()
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
    page.locator(section).evaluate("(el) => el.scrollIntoView({block:'start'})")
    page.wait_for_timeout(350)
    images["services"] = page.screenshot(animations="disabled")
    if not mobile and width == 1366:
        page.locator("#stdStickyGalleryOpen").hover(timeout=10000)
        page.wait_for_timeout(150)
        images["gallery-hover"] = page.locator("#stdStickyGalleryOpen").screenshot(
            animations="disabled"
        )
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
    if fraction > 0.003:
        raise AssertionError(f"{filename}: visible regression exceeds 0.3% of pixels")


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--baseline", default="http://127.0.0.1:4173/")
    parser.add_argument("--candidate", default="http://127.0.0.1:4174/")
    args = parser.parse_args()
    cases = [(1366, 900, False), (1440, 900, False),
             (390, 844, True), (360, 740, True)]
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        try:
            for w, h, mobile in cases:
                key = f"{'mobile' if mobile else 'desktop'}-{w}"
                baseline = capture(browser, args.baseline, key+"-approved", w, h, mobile)
                candidate = capture(browser, args.candidate, key+"-cleaned", w, h, mobile)
                for item in baseline:
                    compare(baseline[item], candidate[item], key+"-"+item)
        finally:
            browser.close()
    print("PASS: All visual regression snapshots match the approved template.")


if __name__ == "__main__":
    main()
