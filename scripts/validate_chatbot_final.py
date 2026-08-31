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

revision_text = Path("modules/03_revisions.md").read_text(encoding="utf-8")
revision_results = re.findall(
    r"(?ms)^## (SCR_REV_[A-Z0-9_]+_VERIF_Q\d+_RESULT)\s*$\n(.*?)(?=^## |\Z)",
    revision_text,
)
if len(revision_results) != 62:
    errors.append(f"Nombre inattendu d'écrans de correction : {len(revision_results)} au lieu de 62")
if '("" + @' in revision_text:
    errors.append("Conversion JavaScript non compatible encore présente dans les révisions")
strict_numeric_conditions = {
    "SCR_REV_T4_CH01_VERIF_Q01_RESULT": (
        '@rep_t4_ch1_q1 == "1789"',
        '@rep_t4_ch1_q1 != "1789"',
    ),
    "SCR_REV_T4_CH01_VERIF_Q02_RESULT": (
        '@rep_t4_ch1_q2 == "1905"',
        '@rep_t4_ch1_q2 != "1905"',
    ),
    "SCR_REV_T5_CH02_VERIF_Q03_RESULT": (
        '@rep_t5_ch2_q3 == "15" || @rep_t5_ch2_q3 == "112"',
        '@rep_t5_ch2_q3 != "15" && @rep_t5_ch2_q3 != "112"',
    ),
    "SCR_REV_T5_CH04_VERIF_Q01_RESULT": (
        '@rep_t5_ch4_q1 == "3" || @rep_t5_ch4_q1 == "trois" || @rep_t5_ch4_q1 == "Trois"',
        '@rep_t5_ch4_q1 != "3" && @rep_t5_ch4_q1 != "trois" && @rep_t5_ch4_q1 != "Trois"',
    ),
}
for screen_id, body in revision_results:
    if screen_id in strict_numeric_conditions:
        conditions = re.findall(r"(?m)^`if (.+)`$", body)
        if conditions != list(strict_numeric_conditions[screen_id]):
            errors.append(f"Comparaison numérique stricte incorrecte dans {screen_id}")
        if "!Next:" in body or re.search(r"(?m)^-\s+(1789|1905|15|112|3|trois)\s*$", body):
            errors.append(f"Ancien déclencheur tolérant encore présent dans {screen_id}")
        continue
    if body.count("`if ") != 3 or body.count("`endif`") != 3:
        errors.append(f"Trois niveaux de feedback non garantis dans {screen_id}")
    for condition in re.findall(r"(?m)^`if (.+)`$", body):
        depth = 0
        in_string = False
        escaped = False
        for char in condition:
            if char == '"' and not escaped:
                in_string = not in_string
            elif not in_string and char == "(":
                depth += 1
            elif not in_string and char == ")":
                depth -= 1
                if depth < 0:
                    break
            escaped = char == "\\" and not escaped
        if depth != 0 or in_string:
            errors.append(f"Condition déséquilibrée dans {screen_id}")

faq_text = Path("modules/09_faq.md").read_text(encoding="utf-8")
if faq_text.count(":::info 💬 Réponse claire") != 71:
    errors.append("Les 71 réponses de la FAQ ne sont pas toutes mises en valeur")
if "### Reponse markdown" in faq_text:
    errors.append("Un ancien intertitre technique subsiste dans la FAQ")

if errors:
    raise SystemExit("\n".join(errors))

print(f"OK — {len(screen_ids)} écrans, {len(targets)} liens, aucun doublon, aucune destination manquante.")
print(f"Accès ‘Poser une question’ hors examen blanc : {text.count('❓ Poser une question')} occurrences.")
print(
    f"Révisions : {len(revision_results)} corrections contrôlées, dont "
    f"{len(strict_numeric_conditions)} réponses numériques comparées strictement."
)
print("FAQ : 71 réponses encadrées et navigation illustrée.")
