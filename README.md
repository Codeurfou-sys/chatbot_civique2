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

## Banques Excel et génération

Les six banques CSP, Carte de résident et Naturalisation sont dans `sources/`.
Consulter `ACTUALISER_BANQUES.md` pour les commandes de mise à jour.
Les examens et entraînements CSP/NAT ont été synchronisés avec les fichiers
présents ; les parcours Carte de résident sont conservés.
ChatMD lit `chat_bot.md`, après génération depuis les Excel.

## Publication

Copier le contenu de ce dossier à la racine du dépôt existant. Ne jamais
remplacer ni copier le dossier caché `.git`. Après le commit et le push,
attendre la fin du déploiement GitHub Pages avant de tester le minuteur et la
recherche de centres.
