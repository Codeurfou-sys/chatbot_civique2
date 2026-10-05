# Version 12 — éviter les répétitions dans les examens blancs

Les 30 séries conservent leurs 28 questions de connaissances et leurs 12 mises en situation, réparties sur les cinq thématiques.

La sélection des situations exclut désormais :
- les situations issues d’une question de connaissances déjà posée dans la même série ;
- les sources dont la question est identique ou très proche d’une question déjà posée ;
- les mises en situation dont la question reprend directement une question de connaissances ;
- les réponses correctes identiques à celles des connaissances, y compris la réponse factuelle de la question source ;
- les répétitions de question source ou de réponse correcte entre les 12 situations.

Les thèmes civiques restent communs aux deux parties, mais les reprises directes qui permettent de retrouver une réponse déjà donnée sont écartées. Les situations et les réponses restent issues des fichiers Excel fournis, sans réécriture des banques.

Les corrigés, leurs liens de révision, les compteurs thématiques et les erreurs du dernier examen blanc ont été actualisés ensemble. Les fonctionnalités de la v11 et la banque carte de résident de 204 situations sont conservées.

Le générateur applique ces exclusions et signale une erreur si une banque ne permet plus de fournir assez de situations distinctes, au lieu de réintroduire une répétition. Le script scripts/corriger_examens_v12.py permet de refaire la sélection des situations dans un module v11/v12 tout en conservant son expérience utilisateur.

Vérifications : 30 séries, 360 emplacements de mises en situation, bonnes réponses conformes aux Excel, absence de reprises directes, questions de connaissances inchangées, répartition et compteurs thématiques, corrigés, liens et simulations du moteur ChatMD.

Publication : remplacer le contenu du dépôt par le contenu du dossier Chatbot_civique2, puis Commit et Push origin.
