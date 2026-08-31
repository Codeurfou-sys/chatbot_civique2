"""Harmonise le module 07 aprè sa régénération depuis Excel."""
from pathlib import Path
from datetime import datetime
import json
import re
import sys

TIP = """:::info ⌨️ Conseil de navigation
Pour faire défiler plus rapidement la réponse du chatbot, appuyez sur la touche **⏎ Entrée** de votre clavier.
:::
"""

MENU = f"""## SCR_PASS_MENU

### 🏛️ Passer mon examen civique

{TIP}
:::success 🧭 Votre parcours pratique
Retrouvez les réponses à vos questions, choisissez un centre et accédez au formulaire d'inscription.
:::

1. [❓ Questions sur l’examen](SCR_PASS_INFO_MENU)
2. [📍 Trouver une session d’examen](SCR_PASS_SEARCH_MENU)
3. [📝 M’inscrire à un examen](SCR_PASS_REGIONS)
4. [🏠 Retour au menu principal](MENU_PRINCIPAL)

<!-- Écran d’entrée -->
"""

SEARCH = """## SCR_PASS_SEARCH_MENU

### 📍 Trouver une session d’examen

Choisissez la recherche la plus adaptée à votre besoin.

:::info 🗺️ Par région
Consultez directement les centres et les prochaines sessions disponibles dans une région FRATE.
:::

1. [🗺️ Rechercher par région](SCR_PASS_REGIONS)

:::success 🧭 Près de chez moi
Indiquez une commune ou un code postal pour afficher automatiquement les trois centres les plus proches.
:::

2. [🧭 Rechercher un centre proche de chez moi](SCR_PASS_INPUT_COMMUNE)
3. [↩️ Retour au module](SCR_PASS_MENU)
"""

PROXIMITY = """## SCR_PASS_INPUT_COMMUNE

### 🧭 Centres proches de chez moi

Saisissez votre **commune** ou votre **code postal** dans le moteur ci-dessous.

<iframe
  src="https://codeurfou-sys.github.io/chatbot_civique2/recherche-centres/"
  title="Recherche des centres d’examen FRATE"
  width="100%"
  height="780"
  loading="lazy"
  style="border: 1px solid #cbd5e1; border-radius: 16px; background: #ffffff; box-shadow: 0 8px 24px rgba(15, 23, 42, 0.10);"
></iframe>

:::warning 💡 Si le moteur ne s’affiche pas
[Ouvrez la recherche dans un nouvel onglet](https://codeurfou-sys.github.io/chatbot_civique2/recherche-centres/), puis revenez au chatbot.
:::

1. [🗺️ Rechercher par région](SCR_PASS_REGIONS)
2. [↩️ Retour au module](SCR_PASS_MENU)
"""

REGIONS = """## SCR_PASS_REGIONS

### 🗺️ Choisir une région

Sélectionnez une région pour consulter ses centres et leurs prochaines dates disponibles.

1. [⛰️ Auvergne](SCR_PASS_REGION_AUVERGNE)
2. [🍇 Bourgogne](SCR_PASS_REGION_BOURGOGNE)
3. [🌿 Cher](SCR_PASS_REGION_CHER)
4. [🌲 Franche-Comté](SCR_PASS_REGION_FRANCHE_COMTE)
5. [🏰 Grand Est](SCR_PASS_REGION_GRAND_EST)
6. [🏔️ Rhône-Alpes](SCR_PASS_REGION_RHONE_ALPES)
7. [🧭 Rechercher un centre proche de chez moi](SCR_PASS_INPUT_COMMUNE)
8. [↩️ Retour au module](SCR_PASS_MENU)
"""

INFO_SCREENS = {
    "SCR_PASS_INFO_MENU": """## SCR_PASS_INFO_MENU

### ❓ Questions sur l’examen civique

Choisissez votre question. Chaque réponse vous donne les repères essentiels et vous oriente vers la prochaine étape utile.

1. [🎯 Pourquoi un examen civique ?](SCR_PASS_INFO_WHY)
2. [👤 Suis-je concerné ?](SCR_PASS_INFO_CONCERNE)
3. [🪪 Quel examen correspond à ma situation ?](SCR_PASS_INFO_MATCH)
4. [⏱️ Comment se présente l’examen ?](SCR_PASS_INFO_FORMAT)
5. [📚 Quelles sont les cinq thématiques ?](SCR_PASS_INFO_THEMES)
6. [🧠 Comment préparer l’examen ?](SCR_PASS_INFO_PREP)
7. [🤖 Comment le chatbot peut-il m’aider ?](SCR_PASS_INFO_HELP)
8. [⭐ Les informations essentielles à retenir](SCR_PASS_INFO_REMEMBER)
9. [↩️ Retour au module](SCR_PASS_MENU)
""",
    "SCR_PASS_INFO_WHY": """## SCR_PASS_INFO_WHY

### 🎯 Pourquoi un examen civique ?

L’examen civique vérifie que vous connaissez les principaux repères nécessaires pour comprendre la République française et vivre en France : ses valeurs, ses institutions, les droits et devoirs, son histoire, sa géographie et la vie quotidienne.

:::info 💡 L’objectif de l’épreuve
Il ne s’agit pas seulement de mémoriser des dates ou des définitions. Vous devez aussi savoir appliquer ces connaissances à des situations concrètes de la vie en France.
:::

1. [🪪 Vérifier quel examen me concerne](SCR_PASS_INFO_MATCH)
2. [📚 Découvrir les cinq thématiques](SCR_PASS_INFO_THEMES)
3. [❓ Voir une autre question](SCR_PASS_INFO_MENU)
4. [↩️ Retour au module](SCR_PASS_MENU)
""",
    "SCR_PASS_INFO_CONCERNE": """## SCR_PASS_INFO_CONCERNE

### 👤 Suis-je concerné ?

Vous êtes concerné si vous préparez l’une des démarches suivantes :

- une première demande de **carte de séjour pluriannuelle** ;
- une première demande de **carte de résident** ;
- une demande de **naturalisation française**.

:::warning 📌 En cas de doute
Votre situation administrative peut comporter des particularités. Vérifiez les indications reçues pour votre démarche ou demandez confirmation à l’organisme qui suit votre dossier.
:::

1. [🪪 Identifier l’examen correspondant à ma situation](SCR_PASS_INFO_MATCH)
2. [📍 Trouver une session d’examen](SCR_PASS_SEARCH_MENU)
3. [❓ Voir une autre question](SCR_PASS_INFO_MENU)
4. [↩️ Retour au module](SCR_PASS_MENU)
""",
    "SCR_PASS_INFO_MATCH": """## SCR_PASS_INFO_MATCH

### 🪪 Quel examen correspond à ma situation ?

- **Carte de séjour pluriannuelle (CSP)** : pour une première demande de carte de séjour pluriannuelle.
- **Carte de résident (CR)** : pour une première demande de carte de résident.
- **Naturalisation** : pour une demande d’acquisition de la nationalité française par naturalisation.

:::info ✅ Bon réflexe
Choisissez dans le chatbot le même parcours que celui indiqué pour votre démarche. Les questions d’entraînement seront ainsi adaptées à votre objectif.
:::

1. [⏱️ Voir le format de l’examen](SCR_PASS_INFO_FORMAT)
2. [🧠 Commencer un bilan](SCR_BIL_MENU)
3. [❓ Voir une autre question](SCR_PASS_INFO_MENU)
4. [↩️ Retour au module](SCR_PASS_MENU)
""",
    "SCR_PASS_INFO_FORMAT": """## SCR_PASS_INFO_FORMAT

### ⏱️ Comment se présente l’examen ?

L’épreuve comprend **40 questions à choix multiple** à réaliser en **45 minutes** :

- **28 questions de connaissances** ;
- **12 questions sous forme de mises en situation** ;
- **4 propositions** par question ;
- **une seule bonne réponse** à sélectionner.

La réussite est obtenue à partir de **32 bonnes réponses sur 40**, soit **80 %**.

:::info 🧮 Votre repère
Vous disposez en moyenne d’un peu plus d’une minute par question. Si vous hésitez, éliminez d’abord les réponses manifestement incorrectes.
:::

1. [🏛️ Faire un examen blanc](SCR_PREP_MENU)
2. [🧠 Voir comment me préparer](SCR_PASS_INFO_PREP)
3. [❓ Voir une autre question](SCR_PASS_INFO_MENU)
4. [↩️ Retour au module](SCR_PASS_MENU)
""",
    "SCR_PASS_INFO_THEMES": """## SCR_PASS_INFO_THEMES

### 📚 Quelles sont les cinq thématiques ?

Le programme est organisé autour de cinq grands thèmes :

1. 🇫🇷 **Principes et valeurs de la République** ;
2. 🏛️ **Système institutionnel et politique** ;
3. ⚖️ **Droits et devoirs** ;
4. 🗺️ **Histoire, géographie et culture** ;
5. 🤝 **Vivre dans la société française**.

:::success 🌱 Conseil de progression
Révisez un thème à la fois, puis vérifiez vos acquis avec un entraînement ciblé avant de passer au suivant.
:::

1. [📚 Accéder aux révisions](SCR_REV_MENU)
2. [🎯 Faire un entraînement ciblé](SCR_ENT_MENU)
3. [❓ Voir une autre question](SCR_PASS_INFO_MENU)
4. [↩️ Retour au module](SCR_PASS_MENU)
""",
    "SCR_PASS_INFO_PREP": """## SCR_PASS_INFO_PREP

### 🧠 Comment préparer l’examen ?

Une préparation efficace alterne quatre activités :

- **réviser** les notions essentielles des cinq thèmes ;
- **comprendre** les mots importants avec le glossaire ;
- **s’entraîner** régulièrement sur des QCM et des mises en situation ;
- **analyser ses erreurs** avant de refaire une nouvelle série.

:::success 📅 Une méthode simple
Travaillez par séances courtes et régulières. Lorsque vous obtenez des résultats stables, réalisez un examen blanc de 40 questions en 45 minutes.
:::

1. [📚 Réviser les cours](SCR_REV_MENU)
2. [📖 Consulter le glossaire](SCR_GLO_MENU)
3. [🎯 M’entraîner](SCR_ENT_MENU)
4. [🏛️ Faire un examen blanc](SCR_PREP_MENU)
5. [❓ Voir une autre question](SCR_PASS_INFO_MENU)
6. [↩️ Retour au module](SCR_PASS_MENU)
""",
    "SCR_PASS_INFO_HELP": """## SCR_PASS_INFO_HELP

### 🤖 Comment le chatbot peut-il m’aider ?

Le chatbot vous accompagne à chaque étape de votre préparation :

- un **bilan personnalisé** pour situer votre niveau ;
- des **cours de révision** structurés par thème et par chapitre ;
- un **glossaire** pour comprendre le vocabulaire civique ;
- des **entraînements ciblés** avec feedbacks ;
- des **examens blancs** proches des conditions réelles ;
- la recherche des **centres et sessions d’examen**.

1. [🧭 Faire mon bilan](SCR_BIL_MENU)
2. [📚 Commencer mes révisions](SCR_REV_MENU)
3. [🎯 M’entraîner](SCR_ENT_MENU)
4. [❓ Voir une autre question](SCR_PASS_INFO_MENU)
5. [↩️ Retour au module](SCR_PASS_MENU)
""",
    "SCR_PASS_INFO_REMEMBER": """## SCR_PASS_INFO_REMEMBER

### ⭐ Les informations essentielles à retenir

:::info 📝 Format
**40 QCM**, **45 minutes**, une seule bonne réponse parmi quatre.
:::

:::info 🎯 Réussite
Il faut obtenir au moins **32 bonnes réponses sur 40**, soit **80 %**.
:::

:::info 📚 Programme
L’épreuve porte sur cinq thèmes civiques et associe connaissances et situations concrètes.
:::

1. [🏛️ Faire un examen blanc](SCR_PREP_MENU)
2. [📍 Trouver une session](SCR_PASS_SEARCH_MENU)
3. [❓ Voir une autre question](SCR_PASS_INFO_MENU)
4. [↩️ Retour au module](SCR_PASS_MENU)
""",
}


def replace_block(text: str, screen: str, replacement: str) -> str:
    pattern = re.compile(rf"^## {re.escape(screen)}\n.*?(?=^## |\Z)", re.M | re.S)
    updated, count = pattern.subn(replacement.rstrip() + "\n\n", text, count=1)
    if count != 1:
        raise SystemExit(f"Écran introuvable: {screen}")
    return updated


path = Path(sys.argv[1])
text = path.read_text(encoding="utf-8").replace("\r\n", "\n")
text = replace_block(text, "SCR_PASS_MENU", MENU)
text = replace_block(text, "SCR_PASS_SEARCH_MENU", SEARCH)
text = replace_block(text, "SCR_PASS_INPUT_COMMUNE", PROXIMITY)
text = replace_block(text, "SCR_PASS_REGIONS", REGIONS)
for screen, replacement in INFO_SCREENS.items():
    text = replace_block(text, screen, replacement)
for screen in (
    "SCR_PASS_INPUT_ADDRESS", "SCR_PASS_NO_SESSION", "SCR_PASS_INPUT_CP",
    "SCR_PASS_DISTANCE", "SCR_PASS_INPUT_DEPT", "SCR_PASS_NO_RESULT",
    "SCR_PASS_BAN_CHOICE", "SCR_PASS_BAN_RESOLVE", "SCR_PASS_RESULTS_NEAR",
    "SCR_PASS_INPUT_CITY",
):
    text = re.sub(rf"^## {screen}\n.*?(?=^## |\Z)", "", text, flags=re.M | re.S)
text = re.sub(
    r"7\. \[Rechercher depuis ma commune\]\(SCR_PASS_INPUT_COMMUNE\)\n8\. \[Retour au module\]\(SCR_PASS_MENU\)",
    "7. [🧭 Rechercher un centre proche de chez moi](SCR_PASS_INPUT_COMMUNE)\n8. [↩️ Retour au module](SCR_PASS_MENU)",
    text,
)

# Nettoyage et harmonisation visuelle des fiches générées.
text = re.sub(r"^\*\*Réponse attendue\s*:\*\*.*\n+", "", text, flags=re.M)
text = re.sub(r"^(### )(Annecy|Annemasse|Auxerre|Besançon|Bourg-en-Bresse|Bourges|Chaumont|Clermont-Ferrand|Le Puy-en-Velay|Lons-le-Saunier|Montbéliard|Montceau-les-Mines|Mulhouse|Mâcon|Nevers|Reims|Saint-Dié-des-Vosges|Saint-Flour|Sens|Strasbourg|Troyes|Valserhône|Vichy)( \(\d{2}\))$", r"\1📍 \2\3", text, flags=re.M)
text = text.replace("### Prochaines sessions", "#### 📅 Prochaines sessions disponibles")
text = text.replace("[S’inscrire à une session]", "[📝 S’inscrire à une session]")

# Les liens externes écrits comme des listes Markdown affichent un numéro dans
# ChatMD. La classe messageOptions leur donne le rendu visuel des boutons.
registration_pattern = re.compile(
    r"^\d+\. \[(?:📝\s*)?S[’']inscrire à une session\]\((https?://[^\n)]+)\)$",
    re.M,
)
text = registration_pattern.sub(
    lambda match: (
        '<ul class="messageOptions">\n'
        f'  <li><a href="{match.group(1)}" target="_blank" rel="noopener noreferrer">📝 S’inscrire à une session</a></li>\n'
        '</ul>'
    ),
    text,
)
region_icons = {
    "Auvergne": "⛰️", "Bourgogne": "🍇", "Cher": "🌿",
    "Franche-Comté": "🌲", "Grand Est": "🏰", "Rhône-Alpes": "🏔️",
}
for region, icon in region_icons.items():
    text = re.sub(rf"(^## SCR_PASS_REGION_[A-Z_]+\n\n)### {re.escape(region)}$", rf"\1### {icon} {region}", text, flags=re.M)

# L'export générique connaît le nombre de sessions mais n'insère pas leurs
# dates dans les fiches. Les réinjecter depuis le JSON produit au même moment.
sessions_path = path.parent.parent / "data" / "sessions.json"
if not sessions_path.exists():
    raise SystemExit(f"Données de sessions introuvables : {sessions_path}")
sessions_doc = json.loads(sessions_path.read_text(encoding="utf-8"))
months = (
    "janvier", "février", "mars", "avril", "mai", "juin",
    "juillet", "août", "septembre", "octobre", "novembre", "décembre",
)
sessions_by_centre = {}
for item in sessions_doc.get("sessions", []):
    if item.get("actif") != "Oui" or item.get("statut") != "À venir":
        continue
    sessions_by_centre.setdefault(item.get("code_centre"), []).append(item.get("date_session"))
for code, raw_dates in sessions_by_centre.items():
    formatted = []
    for raw_date in sorted(set(raw_dates))[:3]:
        parsed = datetime.strptime(raw_date, "%Y-%m-%d").date()
        formatted.append(f"- {parsed.day} {months[parsed.month - 1]} {parsed.year}")
    if not formatted:
        continue
    screen_pattern = re.compile(
        rf"(?ms)(^## SCR_PASS_CITY_{re.escape(code)}\s*$\n.*?)(?=^## |\Z)"
    )
    match = screen_pattern.search(text)
    if not match:
        continue
    block = re.sub(
        r"(?ms)\n####? (?:📅 )?Prochaines sessions(?: disponibles)?\n\n(?:- .+\n)+",
        "\n",
        match.group(1),
    )
    dates_block = "#### 📅 Prochaines sessions disponibles\n\n" + "\n".join(formatted) + "\n\n"
    marker = "<!-- Condition métier :"
    if marker in block:
        block = block.replace(marker, dates_block + marker, 1)
    else:
        block = block.rstrip() + "\n\n" + dates_block
    text = text[:match.start()] + block + text[match.end():]

# Le module 07 est régénéré chaque jour. Réinjecter l'accès aux questions
# libres dans chaque écran évite qu'il disparaisse après l'actualisation.
question_button = "1. [❓ Poser une question @qlOrigine=SCR_PASS_MENU](SCR_QL_RESET)"
parts = re.split(r"(?=^## SCR_PASS_)", text, flags=re.M)
updated_parts = []
for part in parts:
    if not part.startswith("## SCR_PASS_") or "](SCR_QL_RESET)" in part:
        updated_parts.append(part)
        continue
    updated_parts.append(part.rstrip() + "\n\n" + question_button + "\n\n")
text = "".join(updated_parts).rstrip() + "\n"
path.write_text(text, encoding="utf-8", newline="\n")
