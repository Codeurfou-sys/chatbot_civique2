# Mise à jour v17

Cette archive complète remplace la v16. Elle conserve les banques des trois examens, les 62 questions écrites et les corrections ciblées par notion.

- Suppression des boutons portant les noms d’artistes sous les notions utiles. Les notions et les liens pertinents des corrigés sont conservés.
- Accès aux questions écrites disponible depuis le chapitre et les activités ; intitulés simples « 1 question », « 3 questions », etc.
- Classements et frises : une situation à la fois, destinations lisibles et adaptées à la largeur du chat.
- Contrat : « Contrat d’engagement » et « Pas contrat d’engagement ».
- Classes scolaires rangées dans l’ordre pédagogique, quel que soit l’ordre des clics.
- Parentalité : tracé entre deux points à la souris ou au doigt, avec alternative par clic ou clavier.
- Carte Vitale : terminal de paiement illustré, clavier numérique, trois calculs guidés. Exemple fictif : 50 €, 60 % assurance maladie, 30 % complémentaire, 5 € restant.
- Secours : interface de smartphone avec pavé numérique et bouton d’appel simulé ; aucun appel réel.
- Recyclage : circuit illustré du carton avec les six étapes à retrouver.
- Fin de chapitre harmonisée : activités terminées, score x/x, invitation au corrigé, accès aux questions écrites. Corrigé des deux activités accessible après leur achèvement.
- Ouverture des activités en grand conservée dans un nouvel onglet.
- Sauvegarde, historique, export et import réunis sur la page du chatbot.
- Correction du style qui masquait toute la page lorsque le clavier était désactivé ; la sauvegarde reste accessible pendant les exercices.
- Liaison de sauvegarde ajoutée au parcours de rendu réellement utilisé par le moteur ChatMD.
- Dépendance Papa Parse du moteur ChatMD ajoutée : la page autonome démarre correctement.
- Actualisation des dates : suppression des liens « Poser une question » que la régénération réintroduisait dans le module 07 et qui faisaient échouer le contrôle du chatbot ; protection des autres rubriques, contrôles ciblés et diagnostic en cas d’échec. Les dates déjà passées ne sont plus proposées par la recherche de centres.

## Adresse à utiliser pour Moodle et les tests complets

https://codeurfou-sys.github.io/chatbot_civique2/chatbot/

Le site public ChatMD charge le Markdown, mais pas les fonctions JavaScript de ce dépôt qui assurent la sauvegarde et la communication avec les activités. Les boutons des activités proposent alors la page complète hébergée sur GitHub. Dans Moodle, intégrer la page complète dans une iframe : chat, activités et sauvegarde restent dans cette page, sans obligation d’ouvrir un autre onglet.

Les résultats sont locaux au navigateur. Leur persistance dans un pied de page Moodle dépend de l’autorisation du stockage par le navigateur ; l’export/import permet de conserver une copie. Aucun résultat n’est envoyé automatiquement au carnet de notes Moodle.

## Vérifications

Les 38 activités ont été chargées dans Chromium. Les classements séquentiels, les frises, le rangement des classes, le tracé de lignes, le TPE, le téléphone et le circuit du carton ont été exercés. Les 62 questions et réponses attendues sont contrôlées avec le moteur livré. Les banques, les destinations du chatbot, les historiques et l’export/import sont également contrôlés.

Le traitement des dates a été exécuté sur la page FRATE : 65 sessions extraites, 60 dates futures conservées (maximum 3 par centre), 24 centres. Le contrôle d’intégrité confirme que les autres rubriques restent identiques lors de cette actualisation.
