"""Remplace un module balisé dans le fichier ChatMD compilé."""

from pathlib import Path
import argparse
import re


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("chatbot")
    parser.add_argument("module")
    args = parser.parse_args()
    chatbot_path = Path(args.chatbot)
    module_path = Path(args.module)
    relative = module_path.as_posix()
    if "modules/" in relative:
        relative = "modules/" + relative.split("modules/", 1)[1]
    chatbot = chatbot_path.read_text(encoding="utf-8")
    module = module_path.read_text(encoding="utf-8").strip()
    pattern = re.compile(
        rf"(<!-- Début du fichier source : {re.escape(relative)} -->).*?"
        rf"(<!-- Fin du fichier source : {re.escape(relative)} -->)",
        re.S,
    )
    updated, count = pattern.subn(lambda match: f"{match.group(1)}\n\n{module}\n\n{match.group(2)}", chatbot, count=1)
    if count != 1:
        raise SystemExit(f"Section introuvable dans le chatbot complet : {relative}")
    chatbot_path.write_text(updated, encoding="utf-8", newline="\n")
    print(f"Module synchronisé : {relative}")


if __name__ == "__main__":
    main()
