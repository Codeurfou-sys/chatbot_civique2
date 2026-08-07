# Installation du module 07

1. Copiez tous les fichiers et dossiers du paquet à la racine de
   `Chatbot_civique2`, puis acceptez le remplacement des fichiers existants.
2. Dans GitHub Desktop, créez un commit nommé
   `Ajout de la recherche de proximité du module 07`, puis cliquez sur
   **Push origin**.
3. Sur GitHub, ouvrez **Settings → Pages**. Dans **Build and deployment**,
   choisissez **Deploy from a branch**, la branche `main`, puis `/ (root)`.
4. Attendez la publication de :
   `https://codeurfou-sys.github.io/Chatbot_civique2/recherche-centres/`.
5. Lancez `python test_module07_search.py` pour refaire les contrôles locaux.
6. Dans ChatMD, rechargez l’URL brute de `chat_bot.md`, ouvrez
   **Passer mon examen**, puis **Trouver les centres proches de ma commune**.

Le workflow quotidien continue d’actualiser les sessions dans
`exports_chatmd/data/sessions.json`. La page de recherche les charge en priorité
et utilise sa copie locale seulement en secours.

Pour actualiser annuellement les communes et codes postaux :

```bash
python build_module07_search.py --refresh
```
