#!/usr/bin/env python3
"""Construit les données statiques du moteur de proximité du module 07."""

from __future__ import annotations

import csv
import json
import argparse
import urllib.request
from collections import defaultdict
from pathlib import Path


ROOT = Path(__file__).resolve().parent
SOURCE_LIEUX = ROOT / "lieux-dits-beta-france.csv"
SOURCE_POSTAUX = ROOT / "recherche-centres" / "source" / "base_codes_postaux.csv"
SOURCE_GEO = ROOT / "recherche-centres" / "source" / "communes_geo.json"
SOURCE_CENTRES = ROOT / "data" / "centres_geocodes.json"
SOURCE_SESSIONS = ROOT / "data" / "sessions.json"
OUTPUT = ROOT / "recherche-centres" / "data"

POSTAL_URL = "https://www.data.gouv.fr/api/1/datasets/r/008a2dda-2c60-4b63-b910-998f6f818089"
GEO_URL = "https://geo.api.gouv.fr/communes?fields=nom,code,centre&format=json&geometry=centre"


def download_sources() -> None:
    SOURCE_POSTAUX.parent.mkdir(parents=True, exist_ok=True)
    for url, target in ((POSTAL_URL, SOURCE_POSTAUX), (GEO_URL, SOURCE_GEO)):
        request = urllib.request.Request(url, headers={"User-Agent": "ChatbotCivique/1.0"})
        with urllib.request.urlopen(request, timeout=90) as response:
            target.write_bytes(response.read())


def build_communes() -> int:
    if SOURCE_POSTAUX.exists() and SOURCE_GEO.exists():
        geodata = json.loads(SOURCE_GEO.read_text(encoding="utf-8"))
        coords = {
            item["code"]: item.get("centre", {}).get("coordinates")
            for item in geodata
            if item.get("code") and item.get("centre")
        }
        names = {item["code"]: item.get("nom", "") for item in geodata if item.get("code")}
        rows: dict[tuple[str, str], tuple[str, float, float]] = {}
        with SOURCE_POSTAUX.open(encoding="cp1252", newline="") as handle:
            for item in csv.DictReader(handle, delimiter=";"):
                insee = (item.get("#Code_commune_INSEE") or "").strip()
                cp = (item.get("Code_postal") or "").strip().zfill(5)
                point = coords.get(insee)
                if len(cp) != 5 or not point:
                    continue
                geo_name = names.get(insee, "")
                rows[(cp, insee)] = (geo_name, float(point[1]), float(point[0]))
        OUTPUT.mkdir(parents=True, exist_ok=True)
        target = OUTPUT / "communes_france.csv"
        with target.open("w", encoding="utf-8", newline="") as handle:
            writer = csv.writer(handle)
            writer.writerow(["code_postal", "code_insee", "commune", "latitude", "longitude"])
            for (cp, insee), (commune, lat, lon) in sorted(rows.items()):
                writer.writerow([cp, insee, commune, f"{lat:.6f}", f"{lon:.6f}"])
        return len(rows)

    # Secours hors connexion : agrégation de la base locale des lieux-dits.
    aggregates: dict[tuple[str, str, str], list[float]] = defaultdict(
        lambda: [0.0, 0.0, 0.0]
    )
    with SOURCE_LIEUX.open(encoding="utf-8-sig", newline="") as handle:
        for row in csv.DictReader(handle, delimiter=";"):
            cp = (row.get("code_postal") or "").strip().zfill(5)
            insee = (row.get("code_insee") or "").strip()
            commune = (row.get("nom_commune") or "").strip()
            try:
                lon = float(row.get("lon") or "")
                lat = float(row.get("lat") or "")
            except ValueError:
                continue
            if len(cp) != 5 or not commune or not insee:
                continue
            item = aggregates[(cp, insee, commune)]
            item[0] += lat
            item[1] += lon
            item[2] += 1

    OUTPUT.mkdir(parents=True, exist_ok=True)
    target = OUTPUT / "communes_france.csv"
    with target.open("w", encoding="utf-8", newline="") as handle:
        writer = csv.writer(handle)
        writer.writerow(
            ["code_postal", "code_insee", "commune", "latitude", "longitude"]
        )
        for (cp, insee, commune), (sum_lat, sum_lon, count) in sorted(
            aggregates.items()
        ):
            writer.writerow(
                [cp, insee, commune, f"{sum_lat / count:.6f}", f"{sum_lon / count:.6f}"]
            )
    return len(aggregates)


def build_centres() -> int:
    geocodes = json.loads(SOURCE_CENTRES.read_text(encoding="utf-8"))
    sessions_doc = json.loads(SOURCE_SESSIONS.read_text(encoding="utf-8"))
    centres_source = sessions_doc.get("centres", [])
    sessions_source = sessions_doc.get("sessions", [])

    # Le géocodage BAN historique utilisait « Vichy 03 ». La commune est fixée
    # explicitement avec son vrai code postal afin de préserver le zéro initial.
    geocodes["VICHY"] = {
        "code_centre": "VICHY",
        "ville": "Vichy",
        "query": "Vichy 03200",
        "label": "Vichy 03200",
        "latitude": 46.131168,
        "longitude": 3.428025,
        "score": 1.0,
    }

    sessions_by_centre: dict[str, list[dict]] = defaultdict(list)
    for session in sessions_source:
        if session.get("actif") == "Oui" and session.get("statut") == "À venir":
            sessions_by_centre[session.get("code_centre", "")].append(session)

    centres = []
    for source in centres_source:
        code = source.get("code_centre", "")
        geo = geocodes.get(code)
        if not geo:
            continue
        future = sorted(
            sessions_by_centre.get(code, []), key=lambda item: item.get("date_session", "")
        )[:3]
        centres.append(
            {
                "code_centre": code,
                "ville": source.get("ville", ""),
                "departement": source.get("departement", ""),
                "region": source.get("region", ""),
                "latitude": geo["latitude"],
                "longitude": geo["longitude"],
                "lien_forms": source.get("lien_forms", ""),
                "ecran_chatmd": source.get("ecran_centre", ""),
                "sessions": [item.get("date_session", "") for item in future],
            }
        )

    payload = {
        "generated_at": sessions_doc.get("generated_at"),
        "centres": centres,
    }
    (OUTPUT / "centres_frate.json").write_text(
        json.dumps(payload, ensure_ascii=False, indent=2) + "\n", encoding="utf-8"
    )
    return len(centres)


if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument("--refresh", action="store_true", help="Télécharger les référentiels officiels")
    args = parser.parse_args()
    if args.refresh:
        download_sources()
    communes = build_communes()
    centres = build_centres()
    print(f"{communes} lignes communales et {centres} centres générés.")
