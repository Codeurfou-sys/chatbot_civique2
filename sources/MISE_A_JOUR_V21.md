# CiviCoach — mise à jour v21

## Activités en grand

Le lien d’ouverture est désormais dans l’activité, au-dessus de l’exercice. Il transmet l’activité en cours, les scores des activités terminées et la progression des spécialités régionales. Le lien externe fixe qui repartait du début est supprimé. Les progrès réalisés dans le nouvel onglet sont transmis à l’activité d’origine tant que celle-ci reste ouverte.

## Spécialités régionales

Une seule étiquette est proposée à la fois, dans un ordre mélangé. Cliquez sur l’étiquette puis sur une région ou faites-la glisser. Une réponse juste présente automatiquement la suivante, sans bouton de validation ni retour en haut de la page. Une erreur conserve l’étiquette. Les cinq territoires ultramarins restent présents avec leurs contours. La progression est reprise après rechargement ou ouverture en grand.

## Présentation

Le titre du chatbot et des pages est CiviCoach. La page en grand affiche un en-tête blanc centré et le chat rose. Elle ne présente plus les deux boutons d’en-tête. Le lien « Ouvrir le chatbot en grand » reste visible dans le chatbot intégré et dans le service public ChatMD ; il est masqué dans la page CiviCoach déjà ouverte en grand. Le PDF affiche un lien intitulé « Ouvrir CiviCoach », sans adresse GitHub écrite en clair. L’adresse d’hébergement reste la même.

## Résultats

« Ouvrir mes résultats sauvegardés » est un vrai lien qui ouvre directement une page d’historique et d’export, sans deuxième clic. Les résultats de la page CiviCoach sont transmis à ce nouvel onglet, y compris lorsque le chatbot est intégré dans Moodle. Les exports PDF et JSON restent proposés. Sélectionner une tentative ramène à son parcours personnalisé.

Le service public ChatMD ne charge pas la fonction de sauvegarde du dépôt : ses anciens bilans et examens ne peuvent pas être récupérés rétroactivement. Pour enregistrer les prochaines tentatives, utiliser la page CiviCoach hébergée : https://codeurfou-sys.github.io/chatbot_civique2/chatbot/ . C’est aussi cette adresse qu’il faut intégrer dans Moodle.

## Contrôles

Le test Chromium scripts/validate_ui_v21.cjs vérifie le passage de l’activité 1 à l’activité 2, l’ouverture en grand sans retour au début, la reprise de progression, les 18 placements automatiques, les cinq territoires ultramarins, la synchronisation avec l’onglet d’origine, le nouveau titre, l’absence de doublons, la page de résultats et le téléchargement du PDF. Les tests de sauvegarde v14/v19 et de compilation sont conservés.

Publication : remplacer les fichiers du dépôt, Commit puis Push origin. Aucune publication distante n’a été effectuée automatiquement.
