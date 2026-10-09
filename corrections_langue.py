"""Corrections linguistiques relues, appliquées uniquement aux textes affichés."""
import json
import re
from pathlib import Path
_RULES = json.loads((Path(__file__).resolve().parent / "data/corrections_langue_v49.json").read_text(encoding="utf-8"))
_WORD = re.compile(r"\b(?:" + "|".join(map(re.escape, _RULES["words"])) + r")\b")
_PHRASES = [(original, re.compile(re.escape(original) + (r"(?!\w)" if original[-1].isalnum() else "")), correction) for original, correction in _RULES["phrases"].items()]

def corriger_texte(value):
    if not isinstance(value, str):
        return value
    value = _WORD.sub(lambda match: _RULES["words"][match.group()], value)
    for original, pattern, correction in _PHRASES:
        if original in value:
            value = pattern.sub(lambda match: correction, value)
    return value
