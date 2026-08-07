#!/usr/bin/env python3
"""Tests rapides du module 07 avant publication."""

import csv
import json
import math
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent


def distance(a, b):
    radius = 6371
    lat1, lon1, lat2, lon2 = map(
        math.radians,
        [float(a["latitude"]), float(a["longitude"]), float(b["latitude"]), float(b["longitude"])],
    )
    dlat, dlon = lat2 - lat1, lon2 - lon1
    value = math.sin(dlat / 2) ** 2 + math.cos(lat1) * math.cos(lat2) * math.sin(dlon / 2) ** 2
    return radius * 2 * math.atan2(math.sqrt(value), math.sqrt(1 - value))


communes = list(csv.DictReader((ROOT / "recherche-centres/data/communes_france.csv").open()))
centres = json.loads((ROOT / "recherche-centres/data/centres_frate.json").read_text())["centres"]
assert len(communes) > 35_000
assert len(centres) == 24

for code, commune, expected in (("67370", "Truchtersheim", "Strasbourg"), ("03200", "Vichy", "Vichy")):
    location = next(item for item in communes if item["code_postal"] == code and item["commune"] == commune)
    nearest = min(centres, key=lambda centre: distance(location, centre))
    assert nearest["ville"] == expected, (code, nearest["ville"])

vichy = next(item for item in centres if item["code_centre"] == "VICHY")
assert vichy["latitude"] == 46.131168 and vichy["longitude"] == 3.428025

for relative in ("modules/07_passer_examen.md", "chat_bot.md"):
    text = (ROOT / relative).read_text(encoding="utf-8")
    ids = set(re.findall(r"^##\s+([A-Z][A-Z0-9_]+)\s*$", text, re.MULTILINE))
    links = set(re.findall(r"\]\((SCR_[A-Z0-9_]+)\)", text))
    assert not (links - ids), (relative, sorted(links - ids))
    assert "SCR_PASS_CITY_*" not in text
    assert "SCR_PASS_BAN_RESOLVE" not in text

print("OK — 35 000+ correspondances, 24 centres, tests 67370/03200 et liens ChatMD valides.")
