# CiviCoach — mise à jour v23

## Mettre en service dans Moodle

1. Décompresser le ZIP et remplacer les fichiers correspondants dans le dépôt GitHub existant, sans supprimer son dossier `.git`.
2. Effectuer le commit et le Push dans GitHub Desktop, puis attendre la réussite de GitHub Pages.
3. Ouvrir `moodle/INTEGRATION_PIED_DE_PAGE.html` avec Bloc-notes ou Visual Studio Code. Copier tout son contenu dans la zone HTML administrateur du pied de page Moodle, en remplacement du code de la bulle précédente. Publier les fichiers GitHub ne remplace pas ce code Moodle.
4. Recharger la page Moodle avec Ctrl + F5. Cliquer sur la bulle CiviCoach, terminer un entraînement et ouvrir les résultats sauvegardés.

Le code fourni affiche immédiatement la mascotte, trois points animés et « CiviCoach arrive ! Patientez quelques secondes… ». Il charge la page GitHub `/chatbot/?integration=moodle&v=23` et conserve le chatbot quand la bulle est réduite.

## Navigation

Les quatre boutons de retour et d’accès du pied des activités utilisent désormais la navigation interne. Si le lien avec le chatbot n’est pas encore confirmé, ils attendent cette confirmation et redemandent le retour. Aucun retour d’une activité intégrée ne remplace la page Moodle par le plein écran.

Le retour de la carte des fleuves et massifs reste également interne, y compris lorsque cette carte est imbriquée dans une activité. Seul le bouton explicite d’ouverture en grand ouvre volontairement un autre onglet.

## Parcours entre les fenêtres

L’ouverture des résultats ou du chatbot en grand transmet directement le parcours au nouvel onglet. Cette transmission ne dépend pas d’un stockage commun entre l’iframe Moodle et la page plein écran. Les trois historiques (bilans, entraînements, examens blancs) sont fusionnés, sans supprimer les anciennes tentatives.

Les résultats terminés sont transmis aux fenêtres déjà ouvertes et alimentent leur parcours personnalisé ainsi que le PDF. Les compteurs de tentatives, les corrigés et les données des activités sont conservés. L’import/export JSON reste masqué pour l’apprenant.

Le bouton « Revenir à CiviCoach sur NovaFrate » ramène à la page Moodle qui a ouvert le chatbot, réaffiche la bulle et transmet les nouveaux résultats. Si le navigateur a coupé le lien entre fenêtres, ce bouton recharge cette page NovaFrate dans l’onglet courant avec le parcours transmis ; cette reprise nécessite le nouveau code de pied de page. Les autres fenêtres Moodle du même navigateur reprennent également les résultats transmis à leur stockage.

La sauvegarde reste locale au navigateur, sans association au compte Moodle ni envoi des notes au serveur Moodle. Changer de navigateur ou effacer son stockage ne conserve pas automatiquement le parcours. Les anciennes sessions dont les résultats n’ont jamais été enregistrés ne peuvent pas être reconstituées.

## Questions

Toute question saisie affiche trois points et « Réponse en cours de chargement… ». L’indicateur reste présent jusqu’à la fin de l’affichage de la réponse et des suggestions, y compris avec l’animation de texte. « Poser une autre question » conserve la consigne courte de la v22.

## Contrôles

- 76 boutons dans les 19 chapitres : retours sans quitter Moodle, y compris un clic avant confirmation de la liaison.
- Deux entraînements réellement terminés dans le chatbot, entre l’iframe et le plein écran, avec conservation après retour et rechargement.
- Simulation de deux sites distincts pour Moodle et CiviCoach : transfert des trois catégories d’historique, mise à jour d’onglets déjà ouverts et restitution dans le PDF.
- Ouverture sans lien avec la fenêtre d’origine : transmission du parcours et reprise sur la page NovaFrate exacte.
- Questions avec animation normale : attente visible jusqu’aux suggestions.
- Conservation des anciennes sauvegardes et validation de toutes les destinations Markdown.

Les tests utilisent une simulation navigateur de Moodle ; aucun déploiement sur GitHub ni modification du serveur Moodle réel n’a été effectué.
