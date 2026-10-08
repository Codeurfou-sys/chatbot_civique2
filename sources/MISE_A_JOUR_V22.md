# CiviCoach — mise à jour v22

## Questions et chargement

« Poser une autre question » affiche uniquement une courte consigne, sans répéter les exemples. Trois points animés et un message restent visibles jusqu’au chargement de la réponse et des suggestions. Une mascotte accompagne le chargement initial.

## Tirages et réponses

Les 63 familles d’entraînement et les trois examens utilisent une mémoire locale des séries proposées. Les dix variantes sont renouvelées avant un nouveau cycle ; le choix privilégie les séries contenant le moins de questions de la précédente. L’ordre des quatre propositions change, y compris après rechargement, sans modifier la correction. Les bilans conservent leur tirage par thématique et leur mémoire des questions déjà vues.

Une banque limitée peut imposer de revoir certaines questions. La répartition et les niveaux existants sont conservés. Les sources Excel n’ont pas été modifiées.

## Parcours et PDF

Les résultats des bilans, entraînements et examens blancs terminés sont enregistrés automatiquement. Le parcours reste consultable et téléchargeable en PDF. Les commandes d’export et d’import JSON sont retirées de l’interface des apprenants.

L’ouverture des résultats et du plein écran transmet le parcours à la nouvelle fenêtre. Le retour « Revenir à CiviCoach sur NovaFrate » conserve les nouveaux résultats et active la page Moodle d’origine ; il nécessite que cette page soit encore ouverte. « Revenir à CiviCoach plein écran » ouvre directement le parcours personnalisé.

La sauvegarde automatique est liée au navigateur et à son stockage. Elle ne constitue pas une sauvegarde sur le compte Moodle ; effacer les données du navigateur peut la supprimer. Le PDF permet de conserver un document lisible, mais ne sert pas à restaurer un parcours.

## Intégration Moodle

1. Publier tout le contenu du ZIP dans le dépôt GitHub existant, puis attendre la réussite de GitHub Pages.
2. Tester https://codeurfou-sys.github.io/chatbot_civique2/chatbot/ .
3. Utiliser le code de `moodle/INTEGRATION_PIED_DE_PAGE.html` dans le pied de page HTML administrateur de Moodle : il affiche un bouton CiviCoach, une fenêtre avec mascotte de chargement et conserve la fenêtre lorsqu’elle est refermée. Un bloc de cours qui filtre les scripts ne convient pas.
4. Pour une intégration simple par iframe, la page https://codeurfou-sys.github.io/chatbot_civique2/moodle/ fournit aussi l’écran de chargement.

Le site public ChatMD charge le Markdown, mais pas les scripts ajoutés à cette version. La sauvegarde, la synchronisation entre fenêtres et les indicateurs visuels nécessitent la page hébergée `/chatbot/`. Les résultats d’anciennes sessions sur ChatMD public ne peuvent pas être récupérés rétroactivement.

## Vérification

Les contrôles portent sur les 66 groupes de séries, les propositions de réponses, deux entraînements terminés, deux bilans de 25 questions, deux examens de 40 questions, les questions écrites, la sauvegarde et une simulation navigateur de l’intégration Moodle. Aucun déploiement ni accès au serveur Moodle réel n’a été effectué.
