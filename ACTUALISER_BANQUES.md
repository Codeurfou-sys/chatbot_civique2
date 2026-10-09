# Actualiser les bases Excel de CiviCoach

## Première installation

1. Copier tous les fichiers du ZIP à la racine du dépôt GitHub, y compris le dossier `.github/workflows`.
2. Faire un commit et un push sur la branche `main`.
3. Dans GitHub, ouvrir **Settings → Pages → Build and deployment → Source** et sélectionner **GitHub Actions**. Cette étape est nécessaire une seule fois pour activer le nouveau mode de publication.
4. Dans l’onglet **Actions**, attendre la réussite du workflow « Actualiser les bases Excel et publier CiviCoach ». Si besoin, utiliser **Run workflow** après avoir changé le réglage Pages.
5. Actualiser l’intégration Moodle avec `moodle/INTEGRATION_BODY_MULTI_COURS.html`, puis fermer les anciennes fenêtres et rouvrir CiviCoach.

Le workflow est fourni et testé localement. Sa publication sur votre dépôt nécessite cette installation ; elle n’a pas été exécutée depuis cette conversation.

## Pour les prochaines modifications

Modifier le fichier Excel concerné **dans `sources/`**, l’enregistrer, puis faire un commit et un push sur `main`. Le workflow relit les six classeurs, génère les bilans, entraînements, examens blancs et leurs corrections, puis publie le site si les contrôles passent. Aucun autre lancement manuel de script n’est nécessaire.

Attendre que le workflow soit vert avant de rouvrir CiviCoach. Une conversation déjà ouverte conserve son ancienne série ; rouvrir le chatbot pour utiliser la nouvelle version. Les anciens résultats restent des résultats de l’ancienne tentative.

## Fichiers faisant autorité

| Examen | Questions de connaissances | Mises en situation |
|---|---|---|
| CSP | BANQUE_OFFICIELLE_CSP.xlsx, onglet Banque_CSP_191 | MISES_EN_SITUATION_CSP.xlsx, onglet MS_CSP |
| Carte de résident | BANQUE_OFFICIELLE_NOVAFRATE_V2_CARTE_RESIDENT.xlsx, onglet Banque_CR | MISES_EN_SITUATION_CR_BANQUE_COMPLETE_204.xlsx, onglet Banque_MS_204 |
| Naturalisation | BANQUE_OFFICIELLE_NATURALISATION.xlsx, onglet Banque_NAT_Complete | MISES_EN_SITUATION_NATURALISATION.xlsx, onglet Banque_MS_NAT_251 |

Les nombres dans les noms de fichiers ou d’onglets peuvent être historiques. Garder ces noms : le script compte les lignes effectivement présentes.

Conserver les identifiants `ID`, les noms d’onglets et les en-têtes de colonnes. La colonne `Bonne réponse` doit contenir A, B, C ou D, et les quatre propositions doivent être renseignées. Une situation doit conserver un `ID question source` existant dans la banque de connaissances du même examen. Sa thématique et son chapitre suivent cette question source.

La colonne facultative `Notion` permet d’indiquer précisément le point évalué dans les feedbacks. Sans cette colonne, le libellé pédagogique connu est conservé quand le contenu correspond ; sinon, le chapitre sert de repère. Lors d’un changement de sujet, renseigner aussi `Notion` et `Chapitre`.

Les changements de question, contexte, propositions, bonne réponse, explication, astuce mémoire, difficulté et chapitre sont repris. Les ajouts de lignes sont acceptés si leur identifiant est unique et si chaque banque ciblée ne dépasse pas 100 lignes par thématique (capacité des dix variantes actuelles). Une suppression ou un changement d’identifiant nécessite de vérifier les anciennes références et peut bloquer les contrôles ; garder les ID pour les corrections ordinaires.

`FICHIER_EXCEL_MOTEUR_CHAT_BOT.xlsx` décrit le moteur historique et ne fait pas partie de ces six banques. Les cours, activités de révision, FAQ et réponses libres ont leurs propres fichiers : modifier une banque QCM ne réécrit pas ces contenus.

## Ce que publie le workflow

Le site utilise le `chat_bot.md` et les fichiers de feedback générés pendant le build, et non la copie Markdown restée dans le commit. Le build ne crée pas de commit automatique dans le dépôt. Les versions des ressources chargées changent avec le contenu pour éviter de réutiliser les anciennes questions en cache.

Les contrôles refusent les bonnes réponses invalides, les cellules requises vides, les sources absentes, les incohérences de corrections et les liens cassés. Si un contrôle échoue, la nouvelle version n’est pas déployée. Le détail est visible dans Actions. Le rapport de compilation est dans `reports/bases_excel.json` lors d’un build local.

## Vérifier localement (facultatif)

```bash
python -m pip install -r requirements-bases.txt
python scripts/actualiser_bases.py
python scripts/validate_banques_examens.py
python scripts/validate_bases_v45.py
python scripts/validate_chatbot_final.py
```

Ne pas utiliser les anciens scripts de régénération complète : ils peuvent rétablir les interfaces de versions précédentes.

Documentation GitHub : https://docs.github.com/fr/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages
