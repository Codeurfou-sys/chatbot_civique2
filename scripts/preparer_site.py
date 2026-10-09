"""Prepare l'artefact Pages avec les fichiers generes pendant ce build."""
from pathlib import Path
import shutil
root=Path(__file__).resolve().parents[1];destination=root/'_site'
if destination.exists():shutil.rmtree(destination)
destination.mkdir()
excluded={'_site','sources','scripts','reports','moodle','__pycache__'}
for path in root.iterdir():
 if path.name.startswith('.') or path.name in excluded:continue
 if path.is_dir():shutil.copytree(path,destination/path.name,ignore=shutil.ignore_patterns('__pycache__','*.pyc'))
 elif path.suffix.lower() not in {'.py','.xlsx','.zip','.txt'}:shutil.copy2(path,destination/path.name)
(destination/'.nojekyll').touch()
