"""Contrôle structurel de la version finale du chatbot ChatMD."""

from collections import Counter
from pathlib import Path
import re
import sys


path = Path(sys.argv[1] if len(sys.argv) > 1 else "chat_bot.md")
text = path.read_text(encoding="utf-8")
screen_ids = re.findall(r"(?m)^## ([A-Za-z0-9_À-ÿ-]+)\s*$", text)
counts = Counter(screen_ids)
duplicates = sorted(screen for screen, count in counts.items() if count > 1)

targets = re.findall(r"\]\(([^)]+)\)", text)
internal = []
for target in targets:
    target = target.strip()
    if target.startswith(("http://", "https://", "#", "mailto:", "@")):
        continue
    internal.append(target)
missing = sorted(set(internal) - set(screen_ids) - {"START"})

required = {
    "MENU_PRINCIPAL",
    "SCR_BIL_MENU",
    "SCR_REV_MENU",
    "SCR_GLO_MENU",
    "SCR_PREP_MENU",
    "SCR_ENT_MENU",
    "SCR_PASS_MENU",
    "SCR_CONS_MENU",
    "SCR_FAQ_MENU",
    "SCR_QL_MENU",
    "SCR_QL_INPUT",
    "SCR_QL_RETOUR",
}
absent = sorted(required - set(screen_ids))

errors = []
if duplicates:
    errors.append(f"Identifiants en double : {duplicates[:20]}")
if missing:
    errors.append(f"Destinations manquantes : {missing[:20]}")
if absent:
    errors.append(f"Écrans essentiels absents : {absent}")
if "@{screen_id_faq}" in text:
    errors.append("Ancienne destination dynamique non résolue dans la FAQ")
if text.count("❓ Poser une question") < 18000:
    errors.append("Accès global aux questions libres incomplet hors examen blanc")
if "❓ Poser une question" in Path("modules/05_preparer_examen.md").read_text(encoding="utf-8"):
    errors.append("Le bouton Poser une question doit être absent de l'examen blanc")
if text.count('<ul class="messageOptions">') < 24:
    errors.append("Les boutons externes d'inscription du module 07 sont incomplets")

if errors:
    raise SystemExit("\n".join(errors))

print(f"OK — {len(screen_ids)} écrans, {len(targets)} liens, aucun doublon, aucune destination manquante.")
print(f"Accès ‘Poser une question’ hors examen blanc : {text.count('❓ Poser une question')} occurrences.")
