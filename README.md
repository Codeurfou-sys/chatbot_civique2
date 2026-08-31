# Chatbot civique NovaFrate

Ce dépôt contient la version publiée du chatbot ChatMD de préparation à
l’examen civique, ses modules de maintenance et les ressources web utilisées
par le minuteur et la recherche de centres.

## Fichier utilisé par ChatMD

Le chatbot public lit uniquement `chat_bot.md` :

`https://raw.githubusercontent.com/Codeurfou-sys/chatbot_civique2/main/chat_bot.md`

Adresse d’ouverture dans ChatMD :

`https://chatmd.forge.apps.education.fr/#https://raw.githubusercontent.com/Codeurfou-sys/chatbot_civique2/main/chat_bot.md`

## Organisation du dépôt

- `chat_bot.md` : version complète lue par ChatMD ;
- `modules/` : sources Markdown séparées pour la maintenance ;
- `sources/` : classeur moteur et banques Naturalisation ;
- `scripts/` : génération, synchronisation et contrôles ;
- `assets/` : cartes utilisées dans les révisions ;
- `minuteur-examen/` : minuteur de 45 minutes publié par GitHub Pages ;
- `recherche-centres/` : recherche géographique et données des centres ;
- `.github/workflows/` : actualisation quotidienne des sessions FRATE.

## Naturalisation

La banque officielle de 251 questions alimente les 280 emplacements des dix
examens blancs : chaque question est utilisée au moins une fois. La banque de
251 mises en situation alimente 120 scénarios, soit les douze
emplacements prévus dans chacune des dix séries.

Pour régénérer ces séries après modification d’une banque :

```bash
python scripts/integrer_banques_naturalisation.py
python scripts/sync_module_into_chatbot.py chat_bot.md modules/05_preparer_examen.md
python scripts/validate_naturalisation.py
python scripts/validate_chatbot_final.py
```

## Publication

Copier le contenu de ce dossier à la racine du dépôt existant. Ne jamais
remplacer ni copier le dossier caché `.git`. Après le commit et le push,
attendre la fin du déploiement GitHub Pages avant de tester le minuteur et la
recherche de centres.
