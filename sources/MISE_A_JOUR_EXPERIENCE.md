# Installation

Copiez le contenu du dossier Chatbot_civique2 dans votre dépôt local, acceptez
les remplacements, puis faites Commit et Push origin dans GitHub Desktop.
Le fichier .nojekyll est inclus pour publier les pages sans convertir les gros Markdown.
Le fichier chargé par ChatMD reste chat_bot.md.

# Entraînement

- Entraînement par examen : choix de l'examen, puis questions officielles ou
  mises en situation, puis une thématique ou toutes les thématiques.
- Une thématique : 10 questions/situations ; toutes : 2 par thématique, soit 10.
- Entraînement complet par niveau : 10 questions officielles (2 par thématique),
  puis 5 situations pédagogiques (1 par thématique).
- Le niveau est respecté autant que les banques le permettent ; le niveau le
  plus proche complète uniquement les catégories insuffisantes.
- L'encadré d'information apparaît avant les mises en situation.
- Dix séries préparées sont proposées par parcours. ChatMD sélectionne une
  série aléatoire au démarrage ; il ne tire pas directement dans les Excel.
- Les scores incluent le détail connaissances/situations et les priorités par thématique.

# Navigation

Tous les écrans des modules proposent un accès au menu principal.
Les révisions proposent un retour à la thématique ; les autres modules un
retour à leur menu quand celui-ci manque. L'entraînement propose des retours
vers ses choix. Le retour à un menu pendant une série quitte cette série ; un
nouveau démarrage réinitialise son score. Aucun retour à une question déjà
corrigée n'a été ajouté, afin d'éviter de compter deux fois une réponse.

# Mise à jour des sources

Après modification des six Excel, régénérez les examens avec le script existant,
puis les entraînements avec synchroniser_entrainements.py. Appliquez ensuite
scripts/ajouter_retours.py et synchronisez les modules modifiés dans chat_bot.md.
Les contrôles :

```bash
python scripts/validate_banques_examens.py
python scripts/validate_entrainement_ux.py
python scripts/validate_chatbot_final.py
```

# Tests à réaliser dans ChatMD

Tester les retours dans chaque module ; un parcours par thématique et un
parcours toutes thématiques pour chaque examen ; une série par niveau ; les
15 réponses, les corrections, les scores et le nouveau démarrage.
Les contrôles fournis vérifient les fichiers ; ils ne remplacent pas ce test dans ChatMD.


## Version 3 — conseils et présentation

- Conseils adaptés au score : moins de 50 %, 50–79 %, 80–99 %, 100 %. Ces repères pédagogiques ne constituent pas un seuil officiel de réussite.
- Recommandations par thématique, connaissances et mises en situation.
- Barre de réussite et progression dans les séries d’entraînement.
- Icônes dans les choix, boutons arrondis, focus clavier visible et affichage mobile.
- Titres : « Passer un examen blanc » et « S’inscrire à l’examen civique ».

Après toute régénération, lancer `python scripts/ameliorer_presentation.py` pour réappliquer les icônes, les intitulés et compiler les modules. Le workflow quotidien le fait automatiquement.

Installation : remplacer les fichiers du dépôt avec le contenu du ZIP, puis Commit et Push. Pour une mise à jour ponctuelle de l’affichage uniquement, renommer le Markdown livré en `chat_bot.md` et remplacer le fichier à la racine.

Vérifier dans ChatMD : résultats faibles, moyens, élevés et parfaits ; conseils et barre ; menu principal ; inscription ; boutons sur mobile. Les contrôles locaux des sources, des scores et de la navigation ont passé. Le rendu ChatMD après déploiement reste à vérifier.


## Version 4 — retours après essais ChatMD

- Boutons en colonne sur tous les écrans.
- Cigogne pour Grand Est, volcan pour Auvergne.
- Pictogrammes de documents dessinés en SVG : séjour pluriannuel bleu, résident vert, naturalisation rose. Les couleurs servent à distinguer les parcours dans l’interface.
- Suppression des sous-scores redondants des résultats d’entraînement.
- Remplacement de « Construire les bases » par un défi concret adapté au score et aux thèmes.
- 30 paliers ludiques avec récit court pour les entraînements par thématique ; tous les textes figurent dans `PALIERS_ENTRAINEMENT.md`.
- Objectifs 6/10, puis 8/10 sur deux séries, puis 10/10 ; adaptation proportionnelle aux séries de 15 questions.

Publier le contenu du ZIP complet, y compris `assets/icons/`, pour que les nouvelles icônes soient disponibles. Après régénération : `python scripts/ameliorer_presentation.py`.

Les 480 séries, les conseils pour tous les scores, la compilation et la navigation ont passé les contrôles locaux. Vérifier le rendu ChatMD après publication.


## Version 5 — personnalisation et interconnexion

- « Vous avez atteint le rôle de… » et appréciations concrètes propres au thème et au score.
- Remplacement des drapeaux « FR » dans les choix de thèmes par le livre pour les questions et le masque pour les situations.
- Style de `Envoyer` séparé de celui des choix : hauteur et texte alignés, sans dépassement dû au padding global.
- Questions libres : 140 notions, 25 intentions, 363 alias, réponses directes, synonymes et fautes courantes.
- Normalisation compatible avec ChatMD et boutons filtrés sur une réponse stable.
- Liens vers les conseils de mémorisation et de mises en situation, les révisions ciblées et l’examen blanc.

Contrôles : 447 formulations, 480 séries, toutes les destinations internes, sources et scores ; reconnaissance des 140 notions et visibilité des boutons vérifiées avec le moteur de calcul et de rendu dynamique de ChatMD. Le rendu CSS de la barre de saisie devra être confirmé dans ChatMD après publication.

Publier le ZIP complet ; il contient le Markdown, les sources de génération, la base de réponses et les icônes. Pour un changement ponctuel, le Markdown seul met à jour la présentation et les réponses si les icônes de la version précédente sont déjà publiées.
