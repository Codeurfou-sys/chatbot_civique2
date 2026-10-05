# CiviCoach — expérience v7

Cette version complète la v6 à partir du document « Amélioration chat bot V2 » et de ses 19 captures.

## Installation

Le ZIP contient le projet complet. Copier son contenu dans le dépôt GitHub : chat_bot.md, modules/, scripts/, data/, reports/, assets/ et les ressources web. Publier également les deux nouveaux pictogrammes csp-v7.svg et naturalisation-v7.svg. L’URL de ChatMD reste celle de chat_bot.md ; aucune nouvelle URL n’est nécessaire.

## Modifications

1. Couleurs inversées : carte de séjour pluriannuelle rose, naturalisation bleue ; carte de résident verte. Les noms de fichiers des deux icônes évoluent pour éviter l’affichage des anciennes couleurs en cache.
2. Bilans : les conseils sont accessibles après les résultats par thématique sous « Mes conseils personnalisés ». Les longues listes d’actions sont remplacées par un accès au parcours.
3. « Mon parcours personnalisé » : consultable depuis le menu principal, avec choix de thématique et étapes : revoir le cours, réaliser les deux types d’entraînement, atteindre les objectifs adaptés au score, puis refaire un bilan de progression. La rubrique « Réviser mes points faibles » filtre les scores inférieurs à 4/5.
4. Le parcours garde une copie indépendante des scores du dernier bilan terminé. Un entraînement ne l’efface pas. Un nouveau bilan terminé le remplace. Si aucun bilan n’a été terminé, un message propose d’en réaliser un.
5. Bilans tirés à la volée parmi les 650 questions des trois banques. Chaque bilan contient cinq questions par thématique, sans doublon. Les questions rencontrées auparavant sont écartées tant que des questions inédites restent disponibles dans cette thématique. Le niveau difficile est complété par l’intermédiaire, puis le facile si nécessaire. Lorsque toutes les questions inédites de la thématique ont été utilisées pendant une longue session, des questions anciennes peuvent être reprises, toujours sans répétition au sein du bilan.
6. Cercles ajoutés au bilan de progression : vert pour moins d’une semaine de révision, orange pour une à deux semaines, rouge pour plus de deux semaines, selon les profils de difficulté. Barres souples avec score et pourcentage sur une même ligne.
7. « Poser une question » retiré des entraînements, conseils et écrans FAQ concernés ; les choix de réponse des QCM sont conservés intégralement, même lorsqu’une proposition contient ces mots.
8. Glossaire : consigne affichée au démarrage du filtre uniquement. Après sélection de la première lettre, seuls le préfixe, les lettres possibles et les résultats restent affichés. Accès à l’alphabet et aux thèmes depuis la recherche.
9. Conseils : tableau des erreurs/bons réflexes avec bordures, espacements et alternance de fond. Retrait du lien « Revoir les droits et devoirs » dans les conseils sur les mises en situation.
10. FAQ : tarif 80 €, encarts « Thématique : … » avec une seule bulle, encarts des thèmes avec une seule boussole, « Retour aux questions du thème », suppression des retours redondants.
11. Questions libres : accès direct à la saisie, consigne simple et bouton Menu principal à l’accueil. 212 notions et 56 intentions. Les formulations pratiques sont traitées avant les définitions de notions. Les questions sur les points pour réussir obtiennent directement 32/40 et 80 %. D’autres formulations pratiques concernant le tarif, les résultats, les documents, l’échec, les centres et l’entretien sont reliées aux réponses existantes de la FAQ.
12. Mention « Créé avec ChatMD » et zone de saisie positionnées dans deux espaces distincts en bas de page.

## Limites de session

Aucune sauvegarde durable n’a été ajoutée. Fermer ou actualiser la page peut réinitialiser le parcours et l’historique des questions. Le chatbot utilise des réponses préparées et des règles de reconnaissance ; il ne garantit pas de comprendre toute formulation. En cas de sujet non reconnu dans la rubrique Questions libres, il demande une précision plutôt que de sélectionner automatiquement une fiche de glossaire sans rapport.

## Vérifications

- Structure compilée : aucun identifiant en double, aucun lien interne manquant.
- Contrôle des banques : textes, choix et bonnes réponses des examens et entraînements conservés.
- 480 séries d’entraînement et leurs conseils contrôlés.
- Simulation sur le moteur officiel ChatMD : 54 bilans, soit 1 350 réponses, sans répétition entre premier bilan et progression pour les trois examens et les trois profils. Contrôle des niveaux et des scores ; une correction déjà comptabilisée ne compte pas deux fois.
- Copie des résultats dans le parcours vérifiée après modification des scores par un entraînement.
- Cas « combien dois-je obtenir de points pour réussir mon examen ? » et variantes vérifiés.
- Glossaire : recherche sans accents, avec fautes courantes, filtre et réponses partielles de révision vérifiés avec le moteur ChatMD.
- L’affichage final sur votre instance en ligne, notamment sur mobile, reste à vérifier après publication.

## Maintenance

Les scripts v6 et les rapports correspondants documentent la version précédente ; pour conserver le tirage dynamique et le parcours, utiliser la chaîne v7 :

```sh
python scripts/ameliorations_v7.py
python scripts/questions_libres_v7.py
python scripts/ajouter_retours.py
python scripts/ameliorer_presentation.py
python scripts/validate_v7.py
python scripts/validate_chatbot_final.py
python scripts/validate_entrainement_ux.py
python scripts/validate_banques_examens.py
python scripts/validate_conseils.py
node scripts/validate_questions_libres.js
```

Après une régénération du glossaire, relancer les scripts v7 pour rétablir la consigne unique et les boutons de navigation.

Tests optionnels avec un exemplaire local du JavaScript officiel ChatMD :

```sh
node scripts/validate_v7_runtime.js /chemin/chatmd_runtime.js
node scripts/validate_glossaire_runtime.js /chemin/chatmd_runtime.js
```
