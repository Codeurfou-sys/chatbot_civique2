"""Harmonise le module 07 aprè sa régénération depuis Excel."""
from pathlib import Path
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
path.write_text(text, encoding="utf-8", newline="\n")

