#!/usr/bin/env python3
"""
Build script for static site delivery.
- Runs Next.js build (static export)
- Removes static blog HTML (blog is now PHP-powered)
- Extracts CSS/font hashes for PHP config
- Creates delivery zip on Desktop

Usage: python3 scripts/build-static.py
"""

import os
import glob
import subprocess
import zipfile
import re
from pathlib import Path

PROJECT_DIR = Path(__file__).parent.parent
OUT_DIR = PROJECT_DIR / "out"
ZIP_NAME = "xcentra-static-site.zip"
ZIP_PATH = Path.home() / "Desktop" / ZIP_NAME


def run_build():
    print("\n[1/4] Building Next.js static export...")
    result = subprocess.run(
        ["npx", "next", "build"],
        cwd=PROJECT_DIR,
        capture_output=True,
        text=True,
    )
    if result.returncode != 0:
        print("BUILD FAILED:")
        print(result.stderr)
        exit(1)
    print("  Build successful.")


def cleanup_blog():
    """Clean up blog directory.
    Currently: keep static HTML (blog is served as static pages).
    When PHP blog is activated: uncomment the removal code below
    to remove static HTML and let PHP handle blog pages."""
    print("\n[2/4] Blog files check...")
    blog_dir = OUT_DIR / "blog"
    if blog_dir.exists():
        html_count = len(list(blog_dir.rglob("*.html")))
        php_count = len(list(blog_dir.rglob("*.php")))
        print(f"  Blog HTML pages: {html_count}")
        print(f"  Blog PHP files:  {php_count} (inactive until MySQL setup)")
        # ── UNCOMMENT BELOW when PHP blog is activated ──
        # removed = 0
        # for root, dirs, files in os.walk(blog_dir, topdown=False):
        #     for f in files:
        #         fpath = Path(root) / f
        #         if fpath.suffix in ('.php', '.htaccess', '.gitkeep'):
        #             continue
        #         if fpath.suffix in ('.html', '.txt') or f.startswith('__next'):
        #             fpath.unlink()
        #             removed += 1
        #     for d in dirs:
        #         dpath = Path(root) / d
        #         try:
        #             dpath.rmdir()
        #         except OSError:
        #             pass
        # print(f"  Removed {removed} static blog files.")
    else:
        print("  No blog directory found.")


def extract_asset_hashes():
    """Extract CSS and font filenames from build output for PHP config."""
    print("\n[3/4] Extracting asset hashes for PHP config...")
    chunks_dir = OUT_DIR / "_next" / "static" / "chunks"
    media_dir = OUT_DIR / "_next" / "static" / "media"

    css_files = sorted(chunks_dir.glob("*.css")) if chunks_dir.exists() else []
    font_files = sorted(media_dir.glob("*.woff2")) if media_dir.exists() else []

    if css_files:
        print(f"  CSS files: {', '.join(f.name for f in css_files)}")
    if font_files:
        print(f"  Font files: {', '.join(f.name for f in font_files)}")

    # Find the primary font (the one with .p. in the name is the primary weight)
    primary_font = next((f for f in font_files if '.p.' in f.name), font_files[0] if font_files else None)

    if css_files and primary_font:
        print(f"\n  Update includes/config.php with:")
        for i, css in enumerate(css_files[:2], 1):
            print(f"    CSS_FILE_{i} = '{css.name}'")
        print(f"    FONT_FILE  = '{primary_font.name}'")

    # Try to extract font class name from any HTML file
    html_files = list(OUT_DIR.glob("*.html")) + list(OUT_DIR.glob("**/index.html"))
    for hf in html_files[:3]:
        content = hf.read_text(errors='ignore')
        match = re.search(r'(plus_jakarta_sans_\w+-module__\w+__variable)', content)
        if match:
            print(f"    FONT_CLASS  = '{match.group(1)}'")
            break


def create_zip():
    print(f"\n[4/4] Creating {ZIP_NAME}...")
    if ZIP_PATH.exists():
        ZIP_PATH.unlink()

    with zipfile.ZipFile(ZIP_PATH, "w", zipfile.ZIP_DEFLATED) as zf:
        for root, dirs, files in os.walk(OUT_DIR):
            for file in files:
                if file == ".DS_Store":
                    continue
                file_path = Path(root) / file
                arcname = file_path.relative_to(OUT_DIR)
                zf.write(file_path, arcname)

    size_mb = ZIP_PATH.stat().st_size / (1024 * 1024)
    print(f"  Created: {ZIP_PATH} ({size_mb:.1f} MB)")


def summary():
    html_count = len(list(glob.glob(str(OUT_DIR / "**/*.html"), recursive=True)))
    php_count = len(list(glob.glob(str(OUT_DIR / "**/*.php"), recursive=True)))
    print(f"\n  Done!")
    print(f"  Static pages: {html_count}")
    print(f"  PHP files:    {php_count}")
    print(f"  Zip:          ~/Desktop/{ZIP_NAME}")
    print(f"\n  Ready to deliver to client.")


if __name__ == "__main__":
    run_build()
    cleanup_blog()
    extract_asset_hashes()
    create_zip()
    summary()
