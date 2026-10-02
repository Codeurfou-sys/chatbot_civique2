# Poser une question — réponses et navigation

La base `data/question_libre.json` couvre 212 notions et 25 intentions. Elle contient 363 formulations de notions (noms, synonymes, pluriels, fautes courantes). Les réponses s’appuient sur le glossaire et les modules de révision et de conseils.

Les demandes d’aide ciblées sont prioritaires ; les notions précises sont prioritaires sur les mots généraux. Les accents, apostrophes et ponctuations courantes sont normalisés avec la fonction native de ChatMD. Les correspondances respectent les limites des mots.

| Question | Réponse et liens |
|---|---|
| Je ne comprends pas ce qu’est le gouvernement | Explication simple, glossaire et révisions des institutions |
| Quelle est la différence entre Gouvernement et Parlement ? | Comparaison des rôles et liens vers les deux notions |
| Comment mieux retenir les connaissances ? | Méthode courte et bouton « Mémoriser efficacement » |
| Comment réussir les mises en situation ? | Principe de la méthode et bouton « Réussir les mises en situation » |
| Je veux réviser les droits et les devoirs | Révisions de la thématique et entraînements |
| Où puis-je m’inscrire ? | Rubrique inscription et recherche de sessions |

Pour enrichir les réponses : modifier la base JSON, lancer `python scripts/enrichir_questions_libres.py`, puis `python scripts/ameliorer_presentation.py`. Tester avec `node scripts/validate_questions_libres.js`.

Les réponses sont déterministes : une formulation non couverte demande une reformulation et propose les menus utiles. Il n’y a pas d’IA générative dans ce module.
