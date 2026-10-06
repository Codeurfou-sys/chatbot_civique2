# Chatbot civique NovaFrate — expérience v16

Version complète intégrant les demandes de « Chat bot v7.docx » et le cours « 2025 11 13 Support J3.pdf ».

## Ouvrir le chatbot

Utiliser **https://codeurfou-sys.github.io/chatbot_civique2/chatbot/**, notamment dans Moodle. Cette page héberge le moteur ChatMD et assure la navigation entre activités et chatbot ainsi que la sauvegarde.

`chat_bot.md` est le fichier compilé ; ses sources modifiables sont dans `modules/`. Les activités sont dans `activites-revision/` et les cartes des fleuves/massifs dans `activites-geographie/`.

## Publier cette mise à jour

1. Décompresser le ZIP.
2. Copier son contenu à la racine de votre dépôt existant en remplaçant les fichiers correspondants. Conserver le dossier `.git` de votre dépôt.
3. Dans GitHub Desktop : commit, puis Push origin.
4. Attendre la réussite du déploiement GitHub Pages.
5. Ouvrir l’adresse `/chatbot/` ci-dessus et actualiser avec Ctrl + F5.

Les fichiers de cette archive n’ont pas été poussés sur GitHub automatiquement.

## Nouveautés

Voir [MISE_A_JOUR_V16.md](MISE_A_JOUR_V16.md) pour le détail des 38 activités, les enrichissements et les contrôles.

- Notions utiles, activités et questions écrites sont séparées.
- Deux activités par chapitre, corrigé expliqué accessible à tout moment.
- Les cinq boutons de navigation suivent le même ordre.
- Les 62 questions ouvertes d’origine et leurs réponses attendues sont conservées. Six règles de reconnaissance trop restrictives ont été corrigées.
- Le chapitre culture intègre les artistes, œuvres, monuments et spécialités du support fourni.
- La progression des ateliers fait partie de l’export/import du parcours. Les étapes terminées sont conservées ; une activité en cours peut recommencer à son début.
- Les nouvelles activités v16 doivent être réalisées pour débloquer les questions : une validation des anciens ateliers ne vaut pas validation des nouveaux.

## Banques et maintenance

Les banques Excel des trois examens restent dans `sources/`. Voir [ACTUALISER_BANQUES.md](ACTUALISER_BANQUES.md). ChatMD lit le Markdown généré ; il ne lit pas directement les classeurs dans le navigateur.

Après modification d’un module, lancer à la racine du projet :

```sh
python scripts/ameliorer_presentation.py
```

Les activités se modifient dans `activites-revision/data.json` et leur interface dans `app.js`/`style.css`. La v16 ne contient pas de QCM de connaissances dans cette application : les questions écrites sont dans le module de révisions.

## Sauvegarde

Les résultats sont conservés sur le navigateur utilisé. Exporter le parcours pour le transférer sur un autre navigateur ou appareil. Il n’y a pas de synchronisation automatique avec le compte Moodle.

## Contrôles

```sh
python scripts/validate_chatbot_final.py
python scripts/validate_banques_examens.py
python scripts/validate_examens_distincts.py
node scripts/validate_activites_v16.js
node scripts/validate_revision_v16_runtime.js
node scripts/validate_sauvegarde_v16.js
node scripts/validate_integration_sauvegarde_v14.js
node scripts/validate_geographie.js
node scripts/validate_v13_runtime.js chatbot/chatmd.js
```

Les tests de l’interface exécutent les événements avec un DOM simulé. Le rendu réel sur ordinateur et téléphone reste à vérifier après publication ; l’installation d’un navigateur de test n’a pas abouti dans cet environnement.
