# CiviCoach — mise à jour v24

## Installer
Remplacer les fichiers du dépôt GitHub par ceux de cette archive, en conservant les dossiers et les fichiers `.github` et `.nojekyll`. Publier comme d’habitude avec GitHub Desktop, puis attendre la fin du déploiement GitHub Pages. Actualiser Moodle et la page CiviCoach (Ctrl+F5).

Le code BODY multi-cours transmis en v23 reste compatible et ne nécessite pas de changement : les cours 92, 162 et 233 conservent leur configuration.

## Changements
- Encadrés avec titres, couleurs, bordures arrondies et ombres discrètes.
- Tableaux lisibles sur ordinateur, tablette et téléphone. Sur les petits écrans, les colonnes se consultent par défilement horizontal, sans couper les mots.
- Recherche des centres en rouge ; suppression du titre « Module 07 · Passer mon examen » ; exemple « 25000 ou Besançon ».
- Mascotte CiviCoach pour l’icône de l’onglet.
- La page des résultats n’initialise plus un chatbot en arrière-plan. Cliquer sur une tentative conserve la page des résultats ouverte. Le PDF peut être téléchargé plusieurs fois.
- Le retour en plein écran depuis les résultats reprend la conversation et ses variables. Si l’onglet CiviCoach plein écran d’origine est toujours ouvert, il retrouve directement cet onglet, sans rejouer les réponses. Depuis Moodle, la conversation est transférée en plein écran. Les résultats des bilans, entraînements et examens restent synchronisés.

## Vérifications locales
- Tests navigateur : largeur 375, 768 et 1280 px, reprise du contenu et des variables, deux téléchargements PDF successifs, recherche rouge et nouvel exemple postal.
- Parcours Moodle simulé : deux entraînements complets de dix questions, transmission des résultats, retours Moodle/plein écran, synchronisation et conservation après rechargement.
- Contrôle des 33 152 écrans et 139 738 liens : aucune destination manquante.

Ces tests utilisent une simulation locale de Moodle. Le dépôt et votre Moodle ne sont pas modifiés automatiquement par cette archive.
