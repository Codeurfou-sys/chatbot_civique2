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
