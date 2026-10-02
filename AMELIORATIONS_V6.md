# CiviCoach — expérience v6

Cette version reprend la v5 et intègre le document « Amélioration CHAT BOT ».

## Changements

- Bilans : cercles de couleur pour les délais, retrait des questions libres, retours au choix des bilans, réponses avec cercles gris et progression de 0 à 25.
- 90 séries de 25 questions, cinq par thématique. Chaque série utilise la banque de son examen ; les identifiants et les textes normalisés sont distincts. Le niveau le plus proche complète un niveau insuffisamment fourni.
- Après la correction de la question 25 : bouton « Voir mes résultats ».
- Résultats avec progression globale et par thématique ; comparaison au score précédent pour les bilans de progression.
- Conseils classés très haute, haute, moyenne, faible priorité. Liens vers le cours, les questions et les mises en situation de la thématique, ainsi que vers l’entraînement complet difficile pour les acquis solides.
- Le seuil de 80 % est présenté comme le résultat de la thématique dans ce bilan. Cinq questions ne permettent pas, à elles seules, de prédire le résultat d’un examen complet.
- Menu principal : « C’est CiviCoach, je suis de retour, que souhaitez-vous faire ? ».
- Révisions : accents et casse normalisés, équivalences lexicales élargies. Pour le bulletin de salaire, « salaire » et « contributions de l’employeur » donnent une réponse partielle ; brut, net et cotisations/contributions constituent les éléments d’une réponse complète.
- Glossaire : 211 fiches, soit 74 ajouts. Les mots-clés des six banques ont été analysés ; les chiffres isolés, variantes et mots de contexte ne deviennent pas systématiquement des fiches séparées. Les sources et correspondances sont conservées dans reports/glossaire_sources.json.
- Recherche du glossaire : titres et alias, accents/casse, tolérance à une insertion, suppression, substitution ou inversion adjacente, puis recherche approchée native ChatMD. Les résultats proches sont proposés à l’apprenant pour choisir la bonne fiche.
- Filtre CiviCoach : 26 lettres, restriction progressive du préfixe, lettres impossibles grisées, retour d’une lettre et réinitialisation.
- Questions libres : 212 notions et 25 intentions, avec des liens vers les fiches et les cours.
- Transitions : les écrans techniques de tirage ne montrent plus de boutons intermédiaires ; les questions gardent leurs retours.

## Installation

Le ZIP contient le projet complet. Remplacer les fichiers du dépôt par cette version, en conservant notamment chat_bot.md, modules/, scripts/, data/, reports/ et assets/. Les classeurs sources n’ont pas été modifiés. L’URL habituelle du chatbot continue à utiliser chat_bot.md. Le Markdown fourni séparément contient le même chatbot compilé.

## Contrôles effectués

Les contrôles de structure, des banques, des 480 séries d’entraînement, des conseils et des questions libres ont été exécutés. Les 90 bilans ont été contrôlés pour les doublons, la répartition et les compteurs. La recherche, le filtre et le cas du bulletin de salaire ont aussi été testés avec les fonctions du moteur officiel ChatMD. L’affichage visuel sur votre instance en ligne reste à vérifier après publication, notamment sur mobile.

## Actualisation future

Après modification des banques :

```sh
python scripts/ameliorations_v6.py
python scripts/enrichir_glossaire_v6.py
python scripts/enrichir_questions_libres.py
python scripts/ajouter_retours.py
python scripts/ameliorer_presentation.py
python scripts/validate_v6.py
python scripts/validate_chatbot_final.py
```

Les définitions supplémentaires sont rédigées et conservées dans data/glossaire_v6.json. L’ajout automatique de mots-clés ne remplace pas leur validation pédagogique. Les entraînements et examens blancs conservent leurs scripts de régénération ; lancer ensuite scripts/ameliorations_v6.py pour rétablir les transitions directes.

Le contrôle optionnel du moteur utilise le JavaScript officiel téléchargé séparément :

```sh
node scripts/validate_v6_runtime.js /chemin/chatmd_runtime.js
```
