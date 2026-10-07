# Chatbot civique NovaFrate — expérience v20

Version complète avec ouverture en grand, export PDF du parcours, nouvelle carte des langues régionales, symboles officiels illustrés et vraies couvertures de livres.

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

Voir [MISE_A_JOUR_V20.md](MISE_A_JOUR_V20.md) pour les dernières corrections. Les 39 activités et les fonctionnalités de la v19 sont conservées.

- Notions utiles, activités et questions écrites sont séparées.
- 39 activités : deux pour la langue officielle, trois pour la culture et deux pour les autres chapitres. Corrigé expliqué accessible à tout moment.
- Les cinq boutons de navigation suivent le même ordre.
- Les 62 questions ouvertes restent séparées des activités. Leur reconnaissance accepte les notions essentielles et les formulations équivalentes. La question sur le coq distingue désormais le symbole historique de l’emblème constitutionnel.
- Le chapitre culture intègre les artistes, œuvres, monuments et spécialités du support fourni.
- La progression des ateliers fait partie de l’export/import du parcours. Les étapes terminées sont conservées ; une activité en cours peut recommencer à son début.
- Les questions écrites restent accessibles directement, et après les activités.

## Banques et maintenance

Les banques Excel des trois examens restent dans `sources/`. Voir [ACTUALISER_BANQUES.md](ACTUALISER_BANQUES.md). ChatMD lit le Markdown généré ; il ne lit pas directement les classeurs dans le navigateur.

Après modification d’un module, lancer à la racine du projet :

```sh
python scripts/ameliorer_presentation.py
```

Les activités se modifient dans `activites-revision/data.json` et leur interface dans `app.js`/`style.css`. Cette version ne contient pas de QCM de connaissances dans cette application : les questions écrites sont dans le module de révisions.

## Sauvegarde

Les résultats sont conservés sur le navigateur utilisé. Exporter le parcours pour le transférer sur un autre navigateur ou appareil. Il n’y a pas de synchronisation automatique avec le compte Moodle.

## Contrôles

```sh
python scripts/validate_chatbot_final.py
python scripts/validate_banques_examens.py
python scripts/validate_examens_distincts.py
node scripts/validate_revision_v17_runtime.js
node scripts/validate_sauvegarde_v17.js
node scripts/validate_integration_sauvegarde_v14.js
node scripts/validate_geographie.js
node scripts/validate_v13_runtime.js chatbot/chatmd.js
```

Les activités ont été vérifiées dans Chromium, ainsi que les questions natives, la navigation et la sauvegarde. Vérifier aussi l’intégration dans le pied de page Moodle après publication.

Le test `scripts/validate_ui_v17.cjs` utilise Playwright et Chromium pour exercer les activités et la page intégrée. Il nécessite Playwright installé dans l’environnement de test. La variable `PLAYWRIGHT_EXECUTABLE_PATH` permet de choisir le navigateur. Les captures de test sont écrites dans `.build_ui/`.
