# Mise à jour v18

## Activités et réponses

- Laïcité : consigne de classement précisée et six situations plus exigeantes, avec des réponses distinctes et un corrigé argumenté.
- Langue officielle : une seule activité.
- Symboles : dix illustrations à sélectionner. La consigne demande les quatre symboles institutionnels étudiés dans ce chapitre : drapeau, Marianne, devise et Marseillaise. Le corrigé distingue le coq et le bonnet phrygien, symboles historiques, des références culturelles. La question écrite sur le coq porte explicitement sur l’emblème défini par la Constitution.
- Culture : troisième activité avec huit couvertures pédagogiques originales portant uniquement le titre ; choix de l’auteur parmi les propositions.
- Emploi : décisions contextualisées, puis lecture interactive d’un bulletin fictif. Sept valeurs à localiser et deux calculs : 2 000 − 400 = 1 600 euros ; 1 600 − (1 650 × 5 %) = 1 517,50 euros. Les taux sont choisis pour l’apprentissage et ne représentent pas un barème réel.
- Situations, événements et propositions mélangés à chaque nouvelle tentative. Les repères de la frise restent chronologiques.
- Reconnaissance des 62 réponses écrites élargie : accents, synonymes, notions essentielles, ordre libre des quatre principes. « 3 ans », « neutralité de l’État », l’accompagnement et l’éducation des enfants et « fête nationale » sont acceptés dans leurs questions respectives. Les valeurs numériques sont comparées comme des nombres ou des mots complets, pour éviter de confondre 3 et 13.

## Navigation et sauvegarde

La progression tient compte du nombre réel d’activités (une, deux ou trois). Le score, le corrigé et l’accès aux questions restent disponibles dans la page du chatbot. Les liens d’ouverture dans un nouvel onglet sont conservés. Les résultats enregistrés et l’export/import du parcours sont conservés ; les nouvelles activités utilisent une nouvelle version de sauvegarde pour éviter de reprendre une ancienne étape incompatible.

Adresse à utiliser pour le test complet et l’intégration Moodle : https://codeurfou-sys.github.io/chatbot_civique2/chatbot/

## Actualisation des dates

Le workflow quotidien et manuel conserve les autres modules et les banques. Il demande désormais explicitement une reconstruction GitHub Pages après la mise à jour : les commits réalisés avec GITHUB_TOKEN ne déclenchent pas seuls une reconstruction Pages. La permission `pages: write` est incluse. Le workflow vérifie que la construction du commit actualisé est terminée et signale un échec ou un délai dépassé.

Après avoir copié les fichiers, effectué le commit et Push origin, lancer une fois le workflow d’actualisation dans GitHub Actions et vérifier la réussite de l’étape « Reconstruire GitHub Pages et confirmer la publication ». La publication distante ne peut être confirmée avant ce Push. Le site doit être configuré dans Settings > Pages pour publier depuis la branche du dépôt.

Documentation : https://docs.github.com/en/actions/security-for-github-actions/security-guides/automatic-token-authentication et https://docs.github.com/en/rest/pages/pages#request-a-github-pages-build

## Contrôles et maintenance

Les banques des trois examens, les liens du chatbot et les corrections sont vérifiés par les scripts existants. Les contrôles v18 portent sur les réponses du moteur ChatMD, les 24 ordres possibles des principes, la sauvegarde, les exercices, les couvertures et les clics/calculs du bulletin. Les 38 activités sont aussi vérifiées sur une largeur de 390 pixels.

Les règles de reconnaissance sont dans `data/revision_reconnaissance_v18.json`. Après modification, exécuter `python scripts/build_revision_feedbacks.py`, puis `python scripts/ameliorer_presentation.py`. Les sources restent dans `modules/` ; `chat_bot.md` est le fichier compilé.

Tests : `node scripts/validate_revision_v18_runtime.js`, `node scripts/validate_sauvegarde_v18.js`, `python scripts/validate_banques_examens.py`, `python scripts/validate_chatbot_final.py`. Le test navigateur `scripts/validate_ui_v18.cjs` utilise Playwright et les variables NOVA_PLAYWRIGHT_MODULE et PLAYWRIGHT_EXECUTABLE_PATH.

Cette archive est complète. Aucun fichier n’a été poussé sur GitHub automatiquement.
