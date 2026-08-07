# Recherche des centres — module 07

Cette page statique recherche une commune ou un code postal dans
`data/communes_france.csv`, puis classe les 24 centres avec la formule de
Haversine. Elle ne nécessite ni IA, ni serveur, ni appel à la BAN.

Pour reconstruire les données après une mise à jour des sources :

```bash
python build_module07_search.py
```

Sur GitHub, activez Pages avec la branche `main` et le dossier `/ (root)`.
L’adresse attendue est :
`https://codeurfou-sys.github.io/Chatbot_civique2/recherche-centres/`.
