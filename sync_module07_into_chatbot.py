"""Remplace uniquement la section 07 du chatbot complet."""
from pathlib import Path
import re
import sys

chatbot_path = Path(sys.argv[1])
module_path = Path(sys.argv[2])
chatbot = chatbot_path.read_text(encoding="utf-8")
module = module_path.read_text(encoding="utf-8").strip()
pattern = re.compile(
    r"(<!-- Début du fichier source : modules/07_passer_examen\.md -->).*?"
    r"(<!-- Fin du fichier source : modules/07_passer_examen\.md -->)",
    re.S,
)
updated, count = pattern.subn(rf"\1\n\n{module}\n\n\2", chatbot, count=1)
if count != 1:
    raise SystemExit("Section du module 07 introuvable dans le chatbot complet.")
chatbot_path.write_text(updated, encoding="utf-8", newline="\n")

