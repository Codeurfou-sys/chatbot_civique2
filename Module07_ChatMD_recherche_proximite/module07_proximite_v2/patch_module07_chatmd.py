#!/usr/bin/env python3
"""Applique le moteur externe au module 07 et reconstruit les fichiers complets."""

from pathlib import Path

from export_chatmd import patch_module07_search


ROOT = Path(__file__).resolve().parent


def patch(path: Path) -> None:
    if not path.exists():
        return
    original = path.read_text(encoding="utf-8")
    updated = patch_module07_search(original)
    path.write_text(updated, encoding="utf-8")


for relative in (
    "modules/07_passer_examen.md",
    "exports_chatmd/modules/07_passer_examen.md",
    "chat_bot.md",
    "exports_chatmd/chat_bot.md",
):
    patch(ROOT / relative)

print("Module 07 et fichiers ChatMD corrigés.")
