# Mise en service de l’actualisation automatique

## Fonctionnement

Chaque jour, GitHub récupère les sessions publiées sur la page FRATE, retire les dates strictement antérieures à la date du jour, conserve les trois prochaines dates par centre, régénère le module ChatMD puis publie les fichiers actualisés.

Si la page FRATE ne fournit plus aucune session exploitable, la publication est interrompue. L’ancienne version fonctionnelle reste alors en ligne au lieu d’être remplacée par un module vide.

## Activation dans GitHub

1. Déposer tous les fichiers de ce dossier à la racine du dépôt.
2. Ouvrir **Settings → Actions → General**.
3. Dans **Workflow permissions**, choisir **Read and write permissions**.
4. Ouvrir l’onglet **Actions** du dépôt.
5. Sélectionner **Actualiser les sessions d’examen** puis **Run workflow** pour effectuer le premier test.
6. Vérifier que l’exécution est verte et que `modules/07_passer_examen.md` contient les prochaines dates.

L’exécution planifiée a lieu chaque nuit. GitHub utilise l’heure UTC ; l’heure exacte peut varier légèrement selon la charge du service.

## Adresse à donner à ChatMD

Utiliser l’adresse brute du fichier publié :

`https://raw.githubusercontent.com/UTILISATEUR/DEPOT/main/chat_bot.md`

Remplacer `UTILISATEUR/DEPOT` par le propriétaire et le nom réels du dépôt.

## Limite de la recherche géographique

Le script utilise le service officiel de géocodage de la Géoplateforme pour géocoder les centres et tester une localisation en maintenance. ChatMD reste un fichier Markdown autonome : il ne peut pas appeler ce service en direct à chaque message d’un apprenant. La recherche opérationnelle dans ChatMD porte donc sur les centres, régions et départements prévus dans le module.
