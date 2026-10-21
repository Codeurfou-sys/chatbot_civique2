CiviCoach v66 — aides DYS et préparation du transfert GitHub

Lire documentation/Guide_DYS_Moodle_GitHub_v66.html pour la procédure complète.

Ajouts : section DYS dans le panneau commun du haut et de la barre latérale ; réglages de police, espacement, interligne, fond et affichage calme ; nouveaux rendus aérés des PDF de fiches et de parcours, combinables avec les cinq profils de couleurs et le texte agrandi. Les réglages courants s'appliquent aussi aux résultats sauvegardés.

Automatisation existante récupérée sur votre dépôt : .github/workflows/update-examens.yml, tous les jours à 03 h 15 UTC, avec récupération FRATE et contrôles existants. La publication Pages écoute désormais sa fin réussie (workflow_run) ; l'ancien appel pages/builds est remplacé par cette liaison. Une seule récupération quotidienne des sessions. Utiliser Settings > Pages > Source : GitHub Actions.

Les liens internes de l'artefact publié suivent le nouveau propriétaire/dépôt via GITHUB_REPOSITORY. Pour un domaine personnalisé, définir CIVICOACH_SITE_URL. Le HTML collé dans Moodle doit être modifié séparément (nouvelle base et nouvelle origine).

Le suivi Moodle détaillé est documenté, mais aucun suivi nominatif n'est activé dans cette version. Il nécessite un connecteur Moodle authentifié et un rapport réservé aux formateurs. Les données d'accessibilité restent locales.

Installation : décompresser puis placer le contenu à la racine du dépôt en conservant .github et sources. Ne pas déposer le ZIP lui-même. Après le push, attendre la publication et tester les réglages DYS, les PDF et les dates. Ne pas exécuter les anciens scripts d'amélioration historiques pour installer cette version.

Exemples DYS : dossier exemples, fichiers terminant par v66.pdf. Les exemples v65 illustrent le rendu habituel. Rapport : reports/validation_v66.json.
