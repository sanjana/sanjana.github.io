#!/usr/bin/env python3
"""Regenerate favicon/icon/OG-image assets from Ref-Docs/Anj-Img.png.

Run from the repo root:
    python3 scripts/generate-brand-assets.py

Requires: Pillow (`pip install pillow`) and internet access (to fetch the
Fraunces/Inter font files used to render the Open Graph card text).
"""

import os
import urllib.request

from PIL import Image, ImageDraw, ImageFont, ImageOps

REPO = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC = os.path.join(REPO, "..", "Ref-Docs", "Anj-Img.png")
FONT_DIR = "/tmp/sanjana-site-fonts"

FONT_URLS = {
    "Fraunces-Bold.ttf": "https://raw.githubusercontent.com/google/fonts/main/ofl/fraunces/Fraunces%5BSOFT%2CWONK%2Copsz%2Cwght%5D.ttf",
    "Inter-Bold.ttf": "https://raw.githubusercontent.com/google/fonts/main/ofl/inter/Inter%5Bopsz%2Cwght%5D.ttf",
}

NAVY = (12, 20, 38)
AMBER = (245, 176, 65)
MUTED = (163, 177, 201)
WHITE = (245, 247, 250)

# Square crop box (left, top, right, bottom) isolating the face in the source
# illustration. Adjust if you swap in a different source image.
FACE_BOX = (250, 10, 800, 560)


def ensure_fonts():
    os.makedirs(FONT_DIR, exist_ok=True)
    for name, url in FONT_URLS.items():
        path = os.path.join(FONT_DIR, name)
        if not os.path.exists(path):
            urllib.request.urlretrieve(url, path)
    return {name: os.path.join(FONT_DIR, name) for name in FONT_URLS}


def font(path, size, variation=None):
    f = ImageFont.truetype(path, size)
    if variation:
        try:
            f.set_variation_by_name(variation)
        except Exception:
            pass
    return f


def main():
    img = Image.open(SRC).convert("RGB")
    face_rgba = img.convert("RGBA").crop(FACE_BOX)
    face = face_rgba.convert("RGB")

    images_dir = os.path.join(REPO, "public", "images")
    app_dir = os.path.join(REPO, "src", "app")
    os.makedirs(images_dir, exist_ok=True)

    # Hero illustration (full scene)
    img.save(os.path.join(images_dir, "hero.jpg"), quality=90, optimize=True)
    img.resize((640, 640), Image.LANCZOS).save(
        os.path.join(images_dir, "hero-sm.jpg"), quality=88, optimize=True
    )

    # Avatar bubble crops
    for size, name in [(256, "avatar-256.png"), (128, "avatar-128.png")]:
        face.resize((size, size), Image.LANCZOS).save(os.path.join(images_dir, name))

    # favicon.ico (multi-resolution, must be RGBA)
    favicon_sizes = [16, 24, 32, 48, 64]
    favicon_src = face_rgba.resize((256, 256), Image.LANCZOS)
    favicon_src.save(
        os.path.join(app_dir, "favicon.ico"),
        format="ICO",
        sizes=[(s, s) for s in favicon_sizes],
    )

    # apple-icon.png
    face.resize((180, 180), Image.LANCZOS).save(os.path.join(app_dir, "apple-icon.png"))

    # icon-512.png
    face.resize((512, 512), Image.LANCZOS).save(os.path.join(images_dir, "icon-512.png"))

    # Open Graph card (1200x630)
    fonts = ensure_fonts()
    og_w, og_h = 1200, 630
    bg = Image.new("RGB", (og_w, og_h), NAVY)
    draw = ImageDraw.Draw(bg)

    side = og_h
    hero_cover = ImageOps.fit(img, (side, side), Image.LANCZOS, centering=(0.5, 0.32))
    bg.paste(hero_cover, (og_w - side, 0))

    fade_w = 140
    fade_x0 = og_w - side
    for i in range(fade_w):
        t = i / fade_w
        alpha = 1 - t
        x = fade_x0 + i
        col = tuple(
            int(NAVY[c] * alpha + hero_cover.getpixel((i, 0))[c] * (1 - alpha))
            for c in range(3)
        )
        draw.line([(x, 0), (x, og_h)], fill=col)

    draw.rectangle([0, 0, 10, og_h], fill=AMBER)

    fraunces_black = font(fonts["Fraunces-Bold.ttf"], 64, "Black")
    inter_semibold = font(fonts["Inter-Bold.ttf"], 30, "SemiBold")
    inter_medium = font(fonts["Inter-Bold.ttf"], 24, "Medium")

    pad_x = 72
    y = 150
    draw.text((pad_x, y), "Anjana", font=fraunces_black, fill=WHITE)
    y += 76
    draw.text((pad_x, y), "Sivanandan", font=fraunces_black, fill=WHITE)
    y += 100
    draw.text(
        (pad_x, y),
        "Software Engineer & Independent Researcher",
        font=inter_semibold,
        fill=AMBER,
    )
    y += 46
    draw.text(
        (pad_x, y),
        "Quantum Computing · Machine Learning · Cybersecurity",
        font=inter_medium,
        fill=MUTED,
    )

    bg.save(os.path.join(images_dir, "og-image.jpg"), quality=92, optimize=True)
    print("Brand assets regenerated.")


if __name__ == "__main__":
    main()
