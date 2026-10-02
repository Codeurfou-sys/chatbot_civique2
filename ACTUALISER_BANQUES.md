# Mise à jour des banques CSP et Naturalisation

ChatMD affiche le Markdown généré : il ne lit pas les classeurs Excel en direct.
Les six fichiers Excel restent dans sources/. Les questions, choix A/B/C/D,
bonnes réponses, explications et contextes sont repris depuis ces fichiers.

## Installation de cette version

Copier le contenu de Chatbot_civique2 à la racine du dépôt local existant,
puis enregistrer les changements dans GitHub Desktop (Commit, Push origin).
Le fichier complet à charger dans ChatMD est chat_bot.md.
Tester un examen blanc et un entraînement pour chacun des trois examens.
Les vérifications fournies sont structurelles ; un test dans ChatMD reste nécessaire.

## Après modification des Excel

Depuis la racine du dépôt, avec Python et les dépendances requirements.txt :

```bash
python synchroniser_banques_examens.py --exam CSP
python synchroniser_banques_examens.py --exam NAT
python synchroniser_entrainements.py
python scripts/ajouter_retours.py
python synchroniser_module_dans_chatbot.py chat_bot.md modules/05_preparer_examen.md
python synchroniser_module_dans_chatbot.py chat_bot.md modules/06_entrainement.md
python scripts/validate_banques_examens.py
python scripts/validate_chatbot_final.py
```

La commande --exam CR permet également de régénérer les examens blancs Carte
de résident à partir de leurs sources si nécessaire. Dans la version livrée,
les écrans CR ont été conservés. Le bilan et les révisions restent inchangés.

## Sources disponibles dans ce ZIP

| Examen | Questions | Mises en situation |
|---|---:|---:|
| Carte de séjour pluriannuelle | 189 | 185 |
| Carte de résident | 204 | 204 |
| Naturalisation | 257 | 247 |

Les séries sont préparées à la génération et sélectionnées par ChatMD à leur
lancement. Chaque examen blanc conserve 28 questions puis 12 situations.
Les entraînements par examen proposent 10 questions sans doublon ; les parcours par niveau en proposent 15. Une série n'utilise
pas toute la banque. Les entraînements Naturalisation couvrent désormais
les cinq thématiques, les situations et les quatre choix de niveau existants.
L'actualisation quotidienne des sessions continue à ne remplacer que le module 07.
