# CiviCoach — Version 39

Cette archive complète reprend la version 38, ses banques et ses activités. Elle doit remplacer les fichiers du dépôt GitHub ; aucun déploiement n’a été effectué automatiquement.

## Installer la mise à jour

1. Décompressez le ZIP et remplacez les fichiers correspondants du dépôt, puis publiez avec votre procédure habituelle.
2. Dans Moodle, utilisez le code complet de `moodle/INTEGRATION_BODY_MULTI_COURS.html` dans « Quand la balise BODY est ouverte ». Le cours 92 utilise le lecteur CiviCoach de ce dépôt, avec le paramètre de version 39. Les autres cours et leurs assistants sont conservés.
3. Fermez les anciennes fenêtres du chatbot, puis ouvrez CiviCoach dans Moodle et utilisez son lien « Cliquez pour agrandir CiviCoach ». Cette ouverture établit la liaison entre les fenêtres.

Adresse du lecteur : https://codeurfou-sys.github.io/chatbot_civique2/chatbot/?v=39

Les fonctionnalités de lecture audio, de synchronisation et de parcours utilisent le lecteur fourni dans `chatbot/`. Le lecteur ChatMD public ne charge pas automatiquement ces extensions.

## Conversation et résultats

- Le lien plein écran apparaît en gras dans un encart coloré, avec une indication du nouvel onglet.
- « Une question ? » permet de demander une aide sans modifier les réponses du bilan, de l’entraînement ou de l’activité. La barre habituelle reconnaît aussi les demandes d’aide ; dans une question de connaissances, une réponse courte reste une réponse à l’exercice.
- Les réponses utilisent la banque pédagogique existante. Une demande ambiguë entraîne une demande de précision, plutôt qu’une réponse inventée.
- Le moteur évite une attente de données CSV lorsqu’une réponse n’utilise pas ces données, ce qui accélère l’affichage.
- Les conversations et le contexte de saisie sont transmis dans les deux sens entre les fenêtres liées. Une réponse achevée est transmise après un court délai technique, sans rechargement manuel. Les deux fenêtres partagent la même conversation : utilisez alternativement l’une ou l’autre.
- Les fenêtres doivent rester ouvertes et liées via le lien de CiviCoach. Le navigateur peut ralentir les onglets en arrière-plan ; une synchronisation à la milliseconde ne peut pas être garantie. Une fenêtre ouverte séparément, sans liaison, ne bénéficie pas du pont entre les stockages séparés de Moodle et du plein écran.
- Les résultats restent conservés après fermeture de Moodle, sur le même appareil, le même navigateur et dans le même contexte d’intégration, tant que son stockage est autorisé et conservé. Il n’y a pas de sauvegarde serveur associée au compte Moodle ni de transfert automatique entre appareils.
- « Mon parcours personnalisé » est disponible dès l’accueil. « Mes révisions » présente les activités et les questions de connaissances, puis les thématiques et les chapitres, avec l’avancement et le dernier score disponible.

## Lecture et activités accessibles

- Deux réglages : « Lecture audio des réponses » et « Lire au survol ou au focus ».
- Commandes pour lire la réponse, mettre en pause/reprendre et arrêter ; Échap arrête la lecture. Le focus clavier offre l’équivalent du survol.
- La voix dépend des voix françaises disponibles dans le navigateur et le système. Si le navigateur bloque la lecture automatique, utilisez « Lire la réponse ». Cette fonction ne requiert pas le microphone et complète un lecteur d’écran ; elle ne constitue pas une certification RGAA.
- En mode audio ou survol, les tableaux sont dévoilés sans grattage et accompagnés d’une description qui ne donne pas l’artiste. Sans ces modes, l’activité de grattage est conservée.
- La carte des fleuves comporte des descriptions de position et de trajet, ainsi qu’une liste de zones sélectionnables au clavier. Les massifs ont aussi des descriptions.
- Les options sont transmises aux activités intégrées ; les descriptions, libellés et boutons restent disponibles au clavier.

## Feedbacks et PDF

- Traçage des questions manquées et de la réponse choisie pour les nouvelles tentatives. Les anciennes tentatives ne peuvent pas récupérer un choix qui n’avait pas été enregistré.
- Les 855 questions de la base de feedback disposent désormais de leur réponse correcte ; 8 750 écrans de questions sont identifiés pour les bilans, entraînements et examens blancs.
- Les plans montrent les erreurs de la thématique, orientent vers les notions concernées et proposent des méthodes distinctes : laïcité, institutions, vote, symboles, culture, histoire, géographie, emploi, santé, famille et droits.
- Six bandes de score relatif, de 0–1/10 à 10/10, avec des objectifs différents. Exemple : à 1/5, le plan vise d’abord 5/10, puis propose de comparer les nouvelles erreurs avant de viser 8/10. Un score maximal conduit à un défi de transfert et à une vérification différée.
- Le PDF et le chatbot utilisent les mêmes icônes vectorielles pour les repères communs, avec une palette adaptée au profil choisi. Le logo FRATE conserve ses couleurs.
- Le PDF reprend uniquement la dernière tentative de chaque catégorie, classe les thématiques du score relatif le plus faible au plus élevé et conserve le parcours de révisions. Un exemple d’erreur par thématique est détaillé ; toutes les erreurs identifiées restent consultables dans CiviCoach.
- Les feedbacks des tableaux comportent un contexte pédagogique, sans mention « reproduction extraite de la page… ».

## Sources du contexte des œuvres

- Delacroix : https://www.louvre.fr/decouvrir/les-parcours-de-visite/chefs-d-oeuvre-du-louvre/romantisme-actualite-et-sensualite
- Monet : https://www.musee-orsay.fr/fr/oeuvres/nympheas-bleus-1172
- Cézanne : https://www.musee-orsay.fr/fr/oeuvres/les-joueurs-de-cartes-1312
- Renoir : https://www.phillipscollection.org/collection/luncheon-boating-party

## Vérifications

Contrôle de tous les écrans et destinations ; génération du PDF avec les quatre palettes ; contrôle visuel et des marges du PDF ; tests du véritable moteur ChatMD dans un DOM de test pour les questions, la conservation du contexte, la restauration des résultats et la communication entre deux fenêtres, y compris la question et sa réponse dans la rubrique dédiée et la reprise de la saisie. Les échanges trop anciens sont rejetés pour éviter un retour à une conversation dépassée. Tests des activités accessibles.

Les commandes de validation sont dans `scripts/validate_runtime_v39.cjs`, `scripts/validate_activities_access_v39.cjs`, `scripts/validate_feedback_v39.cjs` et `scripts/validate_chatbot_final.py`. Les tests DOM nécessitent jsdom, avec `CIVICOACH_JSDOM_PATH` pour fournir son emplacement.

Le son réel, les gestes sur téléphone et l’intégration dans votre instance Moodle doivent être vérifiés sur vos appareils après publication : ces tests ne remplacent pas une revue dans votre Moodle ni un audit d’accessibilité.
