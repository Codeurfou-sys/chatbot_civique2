"""Compatibilité : lancer le contrôle dynamique des banques."""
import runpy
from pathlib import Path
runpy.run_path(str(Path(__file__).with_name("validate_banques_examens.py")), run_name="__main__")
