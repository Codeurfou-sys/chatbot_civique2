#!/usr/bin/env python3
from __future__ import annotations

import re
import sys
from datetime import date, datetime
from pathlib import Path


def main() -> int:
    path = Path(sys.argv[1] if len(sys.argv) > 1 else "exports_chatmd/modules/07_passer_examen.md")
    if not path.exists():
        print(f"Fichier absent : {path}", file=sys.stderr)
        return 2

    text = path.read_text(encoding="utf-8")
    screens = re.findall(r"^##\s+(SCR_PASS_CITY_[A-Z0-9_]+)\s*$", text, re.MULTILINE)
    if len(set(screens)) < 24:
        print(f"Seulement {len(set(screens))} fiches centres trouvées.", file=sys.stderr)
        return 3

    dates = []
    months = {
        "janvier": 1, "février": 2, "mars": 3, "avril": 4, "mai": 5,
        "juin": 6, "juillet": 7, "août": 8, "septembre": 9,
        "octobre": 10, "novembre": 11, "décembre": 12,
    }
    pattern = r"^-\s+(\d{1,2})\s+(" + "|".join(months) + r")\s+(20\d{2})$"
    for match in re.finditer(pattern, text, re.MULTILINE | re.IGNORECASE):
        dates.append(date(int(match.group(3)), months[match.group(2).lower()], int(match.group(1))))

    if not dates:
        print("Aucune date visible dans le module généré.", file=sys.stderr)
        return 4
    past = [value for value in dates if value < date.today()]
    if past:
        print(f"Dates passées détectées : {past[:5]}", file=sys.stderr)
        return 5
    if "Ouvrir le formulaire d’inscription" not in text:
        print("Aucun lien d'inscription généré.", file=sys.stderr)
        return 6

    print(f"Validation réussie : {len(set(screens))} centres, {len(dates)} dates futures visibles.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
