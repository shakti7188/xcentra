#!/usr/bin/env python3
"""
Build script for static site delivery.
- Runs Next.js build (static export)
- Creates delivery zip on Desktop

Usage: python3 scripts/build-static.py
"""

import os
import glob
import subprocess
import zipfile
from pathlib import Path

PROJECT_DIR = Path(__file__).parent.parent
OUT_DIR = PROJECT_DIR / "out"
ZIP_NAME = "xcentra-static-site.zip"
ZIP_PATH = Path.home() / "Desktop" / ZIP_NAME


def run_build():
    print("\n[1/3] Building Next.js static export...")
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


def create_zip():
    print(f"\n[2/3] Creating {ZIP_NAME}...")
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
    print(f"\n[3/3] Done!")
    print(f"  Pages: {html_count}")
    print(f"  Zip:   ~/Desktop/{ZIP_NAME}")
    print(f"\n  Ready to deliver to client.")


if __name__ == "__main__":
    run_build()
    create_zip()
    summary()
