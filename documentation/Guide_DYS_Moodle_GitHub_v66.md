# CiviCoach · Accessibilité DYS, suivi Moodle et transfert GitHub

Version 66 · 21 octobre 2026

## 1. Ce qui est livré et ce qui reste à connecter

| Élément | État de cette livraison |
| --- | --- |
| Section DYS dans les réglages du haut et latéraux | Ajoutée au panneau commun. Les deux accès partagent les mêmes choix. |
| Lecture des échanges, activités, fiches et enregistrements | Style DYS personnalisable, actif sur le contenu chargé ensuite. |
| PDF générés : fiches et parcours | Nouveau rendu aéré, police de lecture, pagination dynamique et palettes compatibles. Le réglage courant est utilisé lors du téléchargement. |
| Automatisation des sessions d’examen | Fichier existant `update-examens.yml` récupéré sur le dépôt public, conservé avec son horaire et ses contrôles. |
| Publication du site après les sessions | Ajout d’un déclenchement `workflow_run` à la publication Pages, après réussite de l’action des sessions. |
| Suivi nominatif dans Moodle | Faisabilité et architecture décrites ci-dessous. Aucun collecteur ni rapport nominatif n’est activé par cette livraison. |
| Mise en ligne | Les fichiers doivent être intégrés au dépôt puis publiés. Aucun changement n’a été effectué sur le compte GitHub ou Moodle. |

## 2. Utiliser les aides DYS

1. Ouvrir « Réglages d’accessibilité » en haut du chatbot, ou « Paramètres » dans la barre latérale.
2. Dans « DYS · Confort de lecture », cocher « Activer mes aides de lecture ».
3. Choisir la police de lecture, l’espacement des lettres/mots, l’interligne et le fond de lecture.
4. L’option « Affichage calme, en une colonne » limite les animations et simplifie les colonnes des fiches. Le texte reste aligné à gauche, sans italique imposée.
5. Ajouter au besoin le texte agrandi, la palette pour daltonisme et la lecture audio déjà disponibles. Le mode DYS ne lance pas automatiquement une lecture sonore.
6. Télécharger une fiche depuis le bilan, l’examen, les révisions ou les enregistrements : le PDF utilise les choix du moment, même pour une ancienne tentative.
7. Décocher les aides DYS pour retrouver l’affichage habituel. « Réinitialiser les réglages » rétablit aussi les autres choix par défaut.

Les réglages sont conservés dans le navigateur, comme les autres préférences existantes. Ils sont transmis aux activités intégrées de même origine et aux pages de reprise. Un blocage du stockage par le navigateur peut limiter leur conservation. Ce dispositif ne demande pas de diagnostic médical.

Le guide DISIC fourni par l’utilisateur date du 21 février 2017. Il recommande notamment la personnalisation des polices, fonds et espacements, les lignes courtes, la lecture audio et l’aide au repérage. Il s’agit d’un guide informatif, qui n’établit pas à lui seul une conformité RGAA. Il ne définit pas un réglage universel adapté à toutes les personnes DYS. Les choix typographiques sont donc ajustables.

La police de lecture embarquée est DejaVu Sans, déjà présente dans le moteur PDF : les téléchargements ne dépendent pas d’un service de police externe. Le dessin des illustrations reste celui qui a été validé. Les textes déjà intégrés à une image ne peuvent pas être redistribués comme un paragraphe ; les deux encadrés pédagogiques restent de vrais textes sélectionnables dans le PDF. Les anciens PDF déjà téléchargés et les documents externes ne sont pas modifiés rétroactivement. Les nouvelles options ne constituent ni une certification FALC, ni un audit de conformité RGAA/PDF-UA. Les questions, les bonnes réponses, les barèmes et la durée de la simulation d’examen restent inchangés.

Sources : [guide DISIC](https://github.com/DISIC/guide-troubles_DYS/blob/master/Guide-des-troubles-DYS.pdf), [W3C : espacement du texte](https://www.w3.org/WAI/WCAG22/Understanding/text-spacing.html). Les valeurs du W3C décrivent la capacité à supporter une personnalisation, pas une prescription unique pour toutes les personnes.

## 3. Le suivi détaillé dans Moodle est possible

### Ce que permet l’intégration actuelle

Le chatbot est hébergé sur GitHub Pages et affiché dans une iframe du cours Moodle. Les journaux Moodle peuvent montrer qu’un utilisateur a consulté la page du cours ou la ressource. Ils ne connaissent pas automatiquement les clics, les résultats ou les demandes de téléchargement à l’intérieur de l’iframe. Si le widget est présent dans le pied de page, consulter le cours ne signifie pas nécessairement avoir ouvert ou utilisé le chatbot.

La sauvegarde locale actuelle appartient au navigateur. Ce n’est pas une base centralisée accessible au formateur. Un utilisateur peut changer de navigateur ou de poste ; plusieurs personnes peuvent aussi se succéder sur le même poste. Il ne faut pas attribuer un ancien résultat local à la personne actuellement connectée sans mécanisme de séparation des comptes.

GitHub Pages héberge des fichiers statiques. Il ne fournit pas à lui seul un serveur de collecte authentifié ni une base de résultats par apprenant. Les statistiques de trafic du dépôt GitHub ne donnent pas ce suivi pédagogique.

### Solution conseillée : un connecteur Moodle et un rapport réservé aux formateurs

Conserver l’iframe et ajouter un petit plugin Moodle, par exemple un plugin local CiviCoach. Le chemin « Rapports > CiviCoach » serait créé par ce développement ; il n’existe pas aujourd’hui dans Moodle standard.

Fonctionnement proposé :

1. Moodle ouvre le chatbot sans placer le nom, l’adresse électronique ou un jeton administrateur dans l’URL de l’iframe.
2. Le chatbot émet des événements pédagogiques structurés vers la page Moodle par `postMessage`. La page vérifie strictement l’origine et la fenêtre émettrice.
3. Un service côté Moodle reçoit ces événements sous la session authentifiée. Le serveur détermine lui-même l’utilisateur et vérifie son inscription au cours ; il n’accepte pas un simple identifiant d’utilisateur fourni par le chatbot comme preuve d’identité.
4. Les événements sont enregistrés dans Moodle, avec contrôle des permissions, validation des champs, identifiants uniques pour éviter les doublons, gestion des erreurs et des reprises.
5. Les formateurs habilités consultent un rapport filtrable par cours, groupe, apprenant, période, type d’activité et version du chatbot. Ils exportent le rapport en CSV, exploitable dans Excel. Un export XLSX ou PDF peut ensuite être ajouté.
6. Le changement d’utilisateur Moodle doit isoler la progression locale de chaque apprenant. Les utilisations en dehors de Moodle restent distinctes tant qu’aucune authentification ne les relie.

Le rapport n’apparaît pas dans l’interface de conversation de l’apprenant. Une information sur le suivi doit cependant être accessible dans Moodle : finalité pédagogique, données collectées, personnes autorisées et durée de conservation. Les réglages DYS/daltonisme et les questions libres ne sont pas nécessaires à ce suivi proposé et ne sont pas collectés.

### Événements et champs proposés

| Action | Données utiles | Limite d’interprétation |
| --- | --- | --- |
| Ouverture du chatbot | Date, cours, session, version | Différente d’une simple visite de la page Moodle. |
| Début d’activité | Type, thème/chapitre, tentative | Une activité commencée peut rester inachevée. |
| Résultat enregistré | Score obtenu ET maximum réel, durée active estimée, type de bilan/examen/entraînement | Un score transmis par un navigateur n’est pas une note d’examen officiel certifiée. |
| Révision poursuivie/terminée | Chapitre, étape, résultat si disponible | Conserver les tentatives distinctes. |
| Fonction utilisée | Révision, audio, parcours, recherche de centre, ouverture en grand | Ne pas enregistrer les données médicales ou le texte libre par défaut. |
| Fiche consultée | Identifiants des notions, tentative associée | Ne prouve pas que la fiche a été lue en entier. |
| PDF généré/téléchargement demandé | Type de document, notions, horodatage, version | Le navigateur ne garantit pas que le fichier a été effectivement enregistré sur le disque ou ouvert. |

Un CSV de synthèse pourrait comporter : identifiant Moodle, nom (joint côté Moodle selon les droits), cours, groupe, date, session, tentative, activité, thème, score, score maximum, statut, durée active estimée, nombre de fiches générées et version. Un second CSV conserverait le journal détaillé des événements. Ce sont des formats à développer, pas des données déjà disponibles dans le ZIP.

Ne pas envoyer ces résultats nominatifs dans un dépôt GitHub public. La durée de conservation et les droits d’accès sont à fixer par votre organisme avec la personne compétente pour les données personnelles. Les traces d’accessibilité restent locales. Sources : [journaux Moodle](https://docs.moodle.org/en/Logs), [API Moodle](https://moodledev.io/docs/5.2/apis/subsystems/external/writing-a-service), [règles des plugins Moodle](https://moodledev.io/general/community/plugincontribution/checklist), [communication entre fenêtres](https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage), [minimisation CNIL](https://www.cnil.fr/fr/minimiser-les-donnees-collectees), [conservation CNIL](https://www.cnil.fr/fr/passer-laction/les-durees-de-conservation-des-donnees).

### Alternative si aucun plugin ne peut être installé

Un paquet SCORM 1.2 correctement instrumenté, ajouté comme activité Moodle, permet de remonter des scores, états et interactions aux rapports SCORM. Il faut adapter le chatbot au lancement SCORM ; déposer le ZIP actuel en SCORM ne suffit pas. L’iframe actuelle de pied de page n’acquiert pas ces fonctions automatiquement. Le suivi de toutes les actions et les multiples bilans/examens d’un chatbot permanent s’intègrent moins naturellement dans une seule tentative SCORM. Une solution xAPI avec LRS est également possible, mais ajoute un serveur et une intégration supplémentaires.

Recommandation pour votre usage actuel : privilégier le connecteur Moodle. Pour le développer et le tester dans votre environnement, il faudra connaître la version de Moodle, l’URL du site et du cours, la possibilité d’installer un plugin et les rôles autorisés à consulter les résultats. Aucune de ces informations n’est nécessaire pour essayer dès maintenant les aides DYS.

Sources : [rapports SCORM](https://docs.moodle.org/en/Using_SCORM), [versions SCORM prises en charge](https://docs.moodle.org/4x/fr/FAQ_SCORM).

## 4. Transférer le chatbot vers un autre compte GitHub

### Étape 1 — Choisir entre transfert et copie

Pour déplacer le même projet en conservant son historique, utiliser le transfert de dépôt. Pour garder deux projets indépendants, créer une copie avec Git ou l’import GitHub. Une copie ne reprend pas automatiquement tous les réglages, secrets, environnements, déploiements ou historiques d’Actions. Un fork peut aussi nécessiter la réactivation explicite des tâches planifiées.

Avant toute opération, télécharger une sauvegarde et conserver une copie du HTML Moodle actuel. Installer la v66 dans le dépôt de départ avant transfert, ou dans le dépôt cible après copie. Décompresser le ZIP et déposer son contenu à la racine : ne pas déposer le ZIP lui-même et ne pas ajouter un niveau de dossier supplémentaire. Conserver le dossier caché `.github`, `sources`, `scripts`, `modules`, `chatbot`, les médias et les fichiers de dépendances.

### Étape 2 — Transférer le dépôt existant (méthode conseillée pour un déménagement)

1. Se connecter avec un compte autorisé à administrer `Codeurfou-sys/chatbot_civique2` et disposer des droits nécessaires chez le destinataire.
2. Ouvrir le dépôt puis **Settings > General > Danger Zone > Transfer ownership**.
3. Renseigner le nouveau propriétaire et confirmer le nom du dépôt. Si GitHub demande l’acceptation du destinataire, terminer cette acceptation.
4. Vérifier le nom et la branche par défaut du dépôt transféré. Les workflows fournis ciblent `main` ; conserver ce nom ou adapter `branches: [main]` si vous choisissez un autre nom.
5. Vérifier les droits des personnes et de l’organisation destinataire. Vérifier les éventuels secrets ou variables existants ; ne pas supposer qu’une copie les aurait transportés.

La redirection du dépôt ne constitue pas une garantie de maintien de l’ancienne adresse du site Pages. Récupérer l’adresse publiée sur le nouveau dépôt et mettre Moodle à jour.

### Étape 3 — Activer GitHub Actions et Pages

1. Aller dans **Settings > Actions > General** et autoriser les actions nécessaires. Une politique d’organisation peut restreindre ce choix.
2. Les fichiers déclarent leurs permissions : `contents: write` et `pages: write` pour les sessions ; `contents: read`, `pages: write` et `id-token: write` pour la publication. Vérifier qu’aucune règle supérieure ne bloque ces permissions ou le push automatique sur la branche par défaut.
3. Aller dans **Settings > Pages** et sélectionner **Source : GitHub Actions** pour cette version. L’environnement de déploiement s’appelle `github-pages` ; vérifier ses éventuelles règles d’approbation.
4. Pour un dépôt public, GitHub Pages est disponible avec GitHub Free. Un dépôt privé nécessite une offre compatible. Vérifier ce point si le dépôt change de visibilité ou d’organisation.
5. Si vous utilisez un domaine personnalisé, reconfigurer le domaine et le DNS. Définir la variable de dépôt `CIVICOACH_SITE_URL` avec l’URL HTTPS complète du site, par exemple `https://civicoach.exemple.fr/`. Pour une URL GitHub Pages classique, cette variable peut rester absente.

### Étape 4 — Vérifier les DEUX actions conservées

| Fichier | Rôle | Déclenchement dans la v66 |
| --- | --- | --- |
| `.github/workflows/update-examens.yml` | Récupère FRATE, élimine les dates passées, garde au plus trois dates par centre, contrôle les modifications et pousse les fichiers si nécessaire. | Chaque jour à **03 h 15 UTC** (`15 3 * * *`) et manuellement. Soit 05 h 15 en heure d’été à Paris, 04 h 15 en heure d’hiver ; GitHub peut retarder l’exécution. |
| `.github/workflows/civicoach-pages.yml` | Compile les bases Excel, vérifie les parcours, prépare puis publie le site. | Push sur `main`, lancement manuel et fin réussie de « Actualiser les sessions d’examen » sur la branche par défaut. |

Pourquoi cette liaison : un push réalisé avec `GITHUB_TOKEN` ne déclenche pas normalement un nouveau workflow `push`. La v66 utilise donc `workflow_run` après l’actualisation, au lieu de compter sur ce push. L’ancien appel à `/pages/builds` a été retiré du workflow des dates : la publication est assurée par le workflow Pages, adapté à la source **GitHub Actions**. Cela conserve une seule récupération planifiée des dates.

Le nom **« Actualiser les sessions d’examen »** doit rester identique dans les deux fichiers. En cas de renommage, modifier aussi la liste `workflow_run.workflows`. Les fichiers des actions doivent être présents sur la branche par défaut. Dans un dépôt public sans activité pendant 60 jours, GitHub peut désactiver les workflows planifiés ; contrôler leur activation dans l’onglet **Actions**. Les exécutions dans un fork sont désactivées par défaut pour les horaires planifiés.

### Étape 5 — Premier lancement dans le nouveau dépôt

1. Dans **Actions**, ouvrir **« Actualiser les sessions d’examen »**, puis **Run workflow** et choisir la branche par défaut.
2. Vérifier les étapes de récupération, contrôles et publication des fichiers. Une exécution réussie confirme ces traitements ; ouvrir les fichiers de sessions pour vérifier les dates par ville. Un site FRATE inaccessible ou sans sessions identifiables doit faire échouer ce traitement plutôt que publier des dates inventées.
3. Attendre ensuite l’action **« Actualiser les bases Excel et publier CiviCoach »**. Vérifier les deux jobs `build` et `deploy`.
4. Ouvrir **Settings > Pages > Visit site**. L’adresse habituelle est `https://NOUVEAU-COMPTE.github.io/NOM-DU-DEPOT/`, et le lecteur est dans `chatbot/`.
5. Tester l’accueil, un bilan, une révision, un examen, l’enregistrement et les PDF DYS avec une palette pour daltonisme. Vérifier aussi quelques villes et leurs dates.
6. Modifier une information de test dans une copie de la base Excel, pousser et vérifier que la nouvelle compilation la reprend ; annuler cette modification de test après contrôle.

La v66 adapte les anciens liens internes absolus dans l’artefact publié selon `GITHUB_REPOSITORY` : lecteurs, images, minuteurs, recherches et liens du parcours PDF suivent le nouveau site. Les adresses externes FRATE et Microsoft Forms restent celles de vos services.

### Étape 6 — Mettre à jour Moodle

1. Dans votre HTML Moodle, remplacer les occurrences de `https://codeurfou-sys.github.io/chatbot_civique2/` par la nouvelle base du site.
2. Remplacer aussi l’origine de confiance `https://codeurfou-sys.github.io` par la nouvelle origine `https://NOUVEAU-COMPTE.github.io` (ou celle de votre domaine personnalisé). Elle intervient dans les vérifications `postMessage`.
3. Avec le modèle multi-cours, adapter `CIVICOACH_ORIGIN` et `CIVICOACH_BASE`. Conserver les conditions de cours voulues (le modèle fourni affecte CiviCoach au cours 92 ; les autres assistants des cours 162 et 233 sont indépendants).
4. Avec le modèle simple de pied de page, adapter les images, la variable `host` et le chemin `'/chatbot_civique2/chatbot/'` vers le nouveau dépôt.
5. Enregistrer, vider les caches Moodle si nécessaire et recharger le cours. Ouvrir/réduire le chatbot, tester l’ouverture en grand et le retour au cours. Un changement d’origine ne transfère pas automatiquement la progression stockée dans le navigateur vers le nouveau site.
6. Une fois les tests terminés, retirer l’ancien widget pour ne pas laisser deux chatbots visibles.

Les modèles à modifier sont dans `moodle/INTEGRATION_PIED_DE_PAGE.html` et `moodle/INTEGRATION_BODY_MULTI_COURS.html`. Ils ne se mettent pas à jour automatiquement dans Moodle quand on pousse le dépôt GitHub. Le rapport de suivi nominatif, lorsqu’il sera développé, devra aussi accepter la nouvelle origine du chatbot.

### Étape 7 — Entretien courant

- Questions et mises en situation : modifier les fichiers Excel dans `sources`, pousser sur `main`, attendre le workflow de compilation/publication.
- Dates d’examen : laisser tourner `update-examens.yml`, vérifier régulièrement les dernières exécutions et tester ponctuellement une date sur le site FRATE.
- Dessins/fiches : modifier les fichiers source appropriés, pousser et attendre la compilation.
- En cas d’échec : ouvrir la première étape rouge dans **Actions**. Pour l’actualisation FRATE, télécharger l’artefact `diagnostic-sessions` lorsqu’il a été produit. Ne pas remplacer des dates manquantes par des dates supposées.

Sources officielles consultées le 21 octobre 2026 : [transfert de dépôt](https://docs.github.com/en/repositories/creating-and-managing-repositories/transferring-a-repository), [publication Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site), [événements Actions](https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows), [désactivation des workflows](https://docs.github.com/actions/managing-workflow-runs/disabling-and-enabling-a-workflow), [GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages), [déclenchement depuis un workflow](https://docs.github.com/en/actions/how-tos/writing-workflows/choosing-when-your-workflow-runs/triggering-a-workflow).

Fichier existant vérifié directement : [update-examens.yml](https://github.com/Codeurfou-sys/chatbot_civique2/blob/main/.github/workflows/update-examens.yml). La capture fournie confirme plusieurs exécutions planifiées réussies. Cette livraison ne prouve pas que le nouveau dépôt est déjà configuré : les tests de mise en ligne sont à effectuer après installation.
