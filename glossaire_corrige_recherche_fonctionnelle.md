---
clavier: true
obfuscate: true
contenuDynamique: true
variablesDynamiques: true
---

# 📖 Glossaire civique

Retrouvez les mots importants du parcours civique et leurs définitions.

1. [🔍 Rechercher un mot](SCR_GLO_SEARCH)
2. [🔤 Parcourir par ordre alphabétique](SCR_GLO_ALPHA_MENU)
3. [📚 Parcourir par thème](SCR_GLO_THEME_MENU)

## SCR_GLO_MENU

### 📖 Glossaire civique

1. [🔍 Rechercher un mot](SCR_GLO_SEARCH)
2. [🔤 Parcourir par ordre alphabétique](SCR_GLO_ALPHA_MENU)
3. [📚 Parcourir par thème](SCR_GLO_THEME_MENU)

## SCR_GLO_SEARCH

### 🔍 Rechercher un mot

Écrivez un seul mot ou une expression du glossaire, puis validez avec la touche **Entrée**.

!Next: SCR_GLO_SEARCH_RESULT / ignoreKeywords

1. [🔤 Parcourir par ordre alphabétique](SCR_GLO_ALPHA_MENU)
2. [📚 Parcourir par thème](SCR_GLO_THEME_MENU)

## SCR_GLO_SEARCH_RESULT

### 🔎 Résultat de la recherche

`@mot_glossaire = calc(@INPUT)`

`@mot_glossaire_trouve = 0`

`if (("" + @mot_glossaire).toLowerCase().trim() == "abstention") || (("" + @mot_glossaire).toLowerCase().trim() == "la abstention") || (("" + @mot_glossaire).toLowerCase().trim() == "le abstention") || (("" + @mot_glossaire).toLowerCase().trim() == "les abstention")`
`@mot_glossaire_trouve = 1`

✅ **Mot trouvé.**

1. [Afficher la définition de « Abstention »](SCR_GLO_0001)

`endif`

`if (("" + @mot_glossaire).toLowerCase().trim() == "alpes") || (("" + @mot_glossaire).toLowerCase().trim() == "la alpes") || (("" + @mot_glossaire).toLowerCase().trim() == "le alpes") || (("" + @mot_glossaire).toLowerCase().trim() == "les alpes")`
`@mot_glossaire_trouve = 1`

✅ **Mot trouvé.**

1. [Afficher la définition de « Alpes »](SCR_GLO_0002)

`endif`

`if (("" + @mot_glossaire).toLowerCase().trim() == "apl") || (("" + @mot_glossaire).toLowerCase().trim() == "la apl") || (("" + @mot_glossaire).toLowerCase().trim() == "le apl") || (("" + @mot_glossaire).toLowerCase().trim() == "les apl")`
`@mot_glossaire_trouve = 1`

✅ **Mot trouvé.**

1. [Afficher la définition de « APL »](SCR_GLO_0003)

`endif`

`if (("" + @mot_glossaire).toLowerCase().trim() == "assemblee nationale") || (("" + @mot_glossaire).toLowerCase().trim() == "assemblée nationale") || (("" + @mot_glossaire).toLowerCase().trim() == "la assemblee nationale") || (("" + @mot_glossaire).toLowerCase().trim() == "la assemblée nationale") || (("" + @mot_glossaire).toLowerCase().trim() == "le assemblee nationale") || (("" + @mot_glossaire).toLowerCase().trim() == "le assemblée nationale") || (("" + @mot_glossaire).toLowerCase().trim() == "les assemblee nationale") || (("" + @mot_glossaire).toLowerCase().trim() == "les assemblée nationale")`
`@mot_glossaire_trouve = 1`

✅ **Mot trouvé.**

1. [Afficher la définition de « Assemblée nationale »](SCR_GLO_0004)

`endif`

`if (("" + @mot_glossaire).toLowerCase().trim() == "assistance a personne en danger") || (("" + @mot_glossaire).toLowerCase().trim() == "assistance à personne en danger") || (("" + @mot_glossaire).toLowerCase().trim() == "la assistance a personne en danger") || (("" + @mot_glossaire).toLowerCase().trim() == "la assistance à personne en danger") || (("" + @mot_glossaire).toLowerCase().trim() == "le assistance a personne en danger") || (("" + @mot_glossaire).toLowerCase().trim() == "le assistance à personne en danger") || (("" + @mot_glossaire).toLowerCase().trim() == "les assistance a personne en danger") || (("" + @mot_glossaire).toLowerCase().trim() == "les assistance à personne en danger")`
`@mot_glossaire_trouve = 1`

✅ **Mot trouvé.**

1. [Afficher la définition de « Assistance à personne en danger »](SCR_GLO_0005)

`endif`

`if (("" + @mot_glossaire).toLowerCase().trim() == "assurance maladie") || (("" + @mot_glossaire).toLowerCase().trim() == "la assurance maladie") || (("" + @mot_glossaire).toLowerCase().trim() == "le assurance maladie") || (("" + @mot_glossaire).toLowerCase().trim() == "les assurance maladie")`
`@mot_glossaire_trouve = 1`

✅ **Mot trouvé.**

1. [Afficher la définition de « Assurance maladie »](SCR_GLO_0006)

`endif`

`if (("" + @mot_glossaire).toLowerCase().trim() == "bail") || (("" + @mot_glossaire).toLowerCase().trim() == "la bail") || (("" + @mot_glossaire).toLowerCase().trim() == "le bail") || (("" + @mot_glossaire).toLowerCase().trim() == "les bail")`
`@mot_glossaire_trouve = 1`

✅ **Mot trouvé.**

1. [Afficher la définition de « Bail »](SCR_GLO_0007)

`endif`

`if (("" + @mot_glossaire).toLowerCase().trim() == "bretagne") || (("" + @mot_glossaire).toLowerCase().trim() == "la bretagne") || (("" + @mot_glossaire).toLowerCase().trim() == "le bretagne") || (("" + @mot_glossaire).toLowerCase().trim() == "les bretagne")`
`@mot_glossaire_trouve = 1`

✅ **Mot trouvé.**

1. [Afficher la définition de « Bretagne »](SCR_GLO_0008)

`endif`

`if (("" + @mot_glossaire).toLowerCase().trim() == "caf") || (("" + @mot_glossaire).toLowerCase().trim() == "la caf") || (("" + @mot_glossaire).toLowerCase().trim() == "le caf") || (("" + @mot_glossaire).toLowerCase().trim() == "les caf")`
`@mot_glossaire_trouve = 1`

✅ **Mot trouvé.**

1. [Afficher la définition de « CAF »](SCR_GLO_0009)

`endif`

`if (("" + @mot_glossaire).toLowerCase().trim() == "carte de resident") || (("" + @mot_glossaire).toLowerCase().trim() == "carte de résident") || (("" + @mot_glossaire).toLowerCase().trim() == "la carte de resident") || (("" + @mot_glossaire).toLowerCase().trim() == "la carte de résident") || (("" + @mot_glossaire).toLowerCase().trim() == "le carte de resident") || (("" + @mot_glossaire).toLowerCase().trim() == "le carte de résident") || (("" + @mot_glossaire).toLowerCase().trim() == "les carte de resident") || (("" + @mot_glossaire).toLowerCase().trim() == "les carte de résident")`
`@mot_glossaire_trouve = 1`

✅ **Mot trouvé.**

1. [Afficher la définition de « Carte de résident »](SCR_GLO_0010)

`endif`

`if (("" + @mot_glossaire).toLowerCase().trim() == "carte vitale") || (("" + @mot_glossaire).toLowerCase().trim() == "la carte vitale") || (("" + @mot_glossaire).toLowerCase().trim() == "le carte vitale") || (("" + @mot_glossaire).toLowerCase().trim() == "les carte vitale")`
`@mot_glossaire_trouve = 1`

✅ **Mot trouvé.**

1. [Afficher la définition de « Carte Vitale »](SCR_GLO_0011)

`endif`

`if (("" + @mot_glossaire).toLowerCase().trim() == "cdd") || (("" + @mot_glossaire).toLowerCase().trim() == "la cdd") || (("" + @mot_glossaire).toLowerCase().trim() == "le cdd") || (("" + @mot_glossaire).toLowerCase().trim() == "les cdd")`
`@mot_glossaire_trouve = 1`

✅ **Mot trouvé.**

1. [Afficher la définition de « CDD »](SCR_GLO_0012)

`endif`

`if (("" + @mot_glossaire).toLowerCase().trim() == "cdi") || (("" + @mot_glossaire).toLowerCase().trim() == "la cdi") || (("" + @mot_glossaire).toLowerCase().trim() == "le cdi") || (("" + @mot_glossaire).toLowerCase().trim() == "les cdi")`
`@mot_glossaire_trouve = 1`

✅ **Mot trouvé.**

1. [Afficher la définition de « CDI »](SCR_GLO_0013)

`endif`

`if (("" + @mot_glossaire).toLowerCase().trim() == "celtes") || (("" + @mot_glossaire).toLowerCase().trim() == "la celtes") || (("" + @mot_glossaire).toLowerCase().trim() == "le celtes") || (("" + @mot_glossaire).toLowerCase().trim() == "les celtes")`
`@mot_glossaire_trouve = 1`

✅ **Mot trouvé.**

1. [Afficher la définition de « Celtes »](SCR_GLO_0014)

`endif`

`if (("" + @mot_glossaire).toLowerCase().trim() == "charlemagne") || (("" + @mot_glossaire).toLowerCase().trim() == "la charlemagne") || (("" + @mot_glossaire).toLowerCase().trim() == "le charlemagne") || (("" + @mot_glossaire).toLowerCase().trim() == "les charlemagne")`
`@mot_glossaire_trouve = 1`

✅ **Mot trouvé.**

1. [Afficher la définition de « Charlemagne »](SCR_GLO_0015)

`endif`

`if (("" + @mot_glossaire).toLowerCase().trim() == "charte de l environnement") || (("" + @mot_glossaire).toLowerCase().trim() == "charte de l'environnement") || (("" + @mot_glossaire).toLowerCase().trim() == "la charte de l environnement") || (("" + @mot_glossaire).toLowerCase().trim() == "la charte de l'environnement") || (("" + @mot_glossaire).toLowerCase().trim() == "le charte de l environnement") || (("" + @mot_glossaire).toLowerCase().trim() == "le charte de l'environnement") || (("" + @mot_glossaire).toLowerCase().trim() == "les charte de l environnement") || (("" + @mot_glossaire).toLowerCase().trim() == "les charte de l'environnement")`
`@mot_glossaire_trouve = 1`

✅ **Mot trouvé.**

1. [Afficher la définition de « Charte de l'environnement »](SCR_GLO_0016)

`endif`

`if (("" + @mot_glossaire).toLowerCase().trim() == "chateau de versailles") || (("" + @mot_glossaire).toLowerCase().trim() == "château de versailles") || (("" + @mot_glossaire).toLowerCase().trim() == "la chateau de versailles") || (("" + @mot_glossaire).toLowerCase().trim() == "la château de versailles") || (("" + @mot_glossaire).toLowerCase().trim() == "le chateau de versailles") || (("" + @mot_glossaire).toLowerCase().trim() == "le château de versailles") || (("" + @mot_glossaire).toLowerCase().trim() == "les chateau de versailles") || (("" + @mot_glossaire).toLowerCase().trim() == "les château de versailles")`
`@mot_glossaire_trouve = 1`

✅ **Mot trouvé.**

1. [Afficher la définition de « Château de Versailles »](SCR_GLO_0017)

`endif`

`if (("" + @mot_glossaire).toLowerCase().trim() == "cinquieme republique") || (("" + @mot_glossaire).toLowerCase().trim() == "cinquième république") || (("" + @mot_glossaire).toLowerCase().trim() == "la cinquieme republique") || (("" + @mot_glossaire).toLowerCase().trim() == "la cinquième république") || (("" + @mot_glossaire).toLowerCase().trim() == "le cinquieme republique") || (("" + @mot_glossaire).toLowerCase().trim() == "le cinquième république") || (("" + @mot_glossaire).toLowerCase().trim() == "les cinquieme republique") || (("" + @mot_glossaire).toLowerCase().trim() == "les cinquième république")`
`@mot_glossaire_trouve = 1`

✅ **Mot trouvé.**

1. [Afficher la définition de « Cinquième République »](SCR_GLO_0018)

`endif`

`if (("" + @mot_glossaire).toLowerCase().trim() == "citoyen") || (("" + @mot_glossaire).toLowerCase().trim() == "la citoyen") || (("" + @mot_glossaire).toLowerCase().trim() == "le citoyen") || (("" + @mot_glossaire).toLowerCase().trim() == "les citoyen")`
`@mot_glossaire_trouve = 1`

✅ **Mot trouvé.**

1. [Afficher la définition de « Citoyen »](SCR_GLO_0019)

`endif`

`if (("" + @mot_glossaire).toLowerCase().trim() == "citoyennete") || (("" + @mot_glossaire).toLowerCase().trim() == "citoyenneté") || (("" + @mot_glossaire).toLowerCase().trim() == "la citoyennete") || (("" + @mot_glossaire).toLowerCase().trim() == "la citoyenneté") || (("" + @mot_glossaire).toLowerCase().trim() == "le citoyennete") || (("" + @mot_glossaire).toLowerCase().trim() == "le citoyenneté") || (("" + @mot_glossaire).toLowerCase().trim() == "les citoyennete") || (("" + @mot_glossaire).toLowerCase().trim() == "les citoyenneté")`
`@mot_glossaire_trouve = 1`

✅ **Mot trouvé.**

1. [Afficher la définition de « Citoyenneté »](SCR_GLO_0020)

`endif`

`if (("" + @mot_glossaire).toLowerCase().trim() == "clovis") || (("" + @mot_glossaire).toLowerCase().trim() == "la clovis") || (("" + @mot_glossaire).toLowerCase().trim() == "le clovis") || (("" + @mot_glossaire).toLowerCase().trim() == "les clovis")`
`@mot_glossaire_trouve = 1`

✅ **Mot trouvé.**

1. [Afficher la définition de « Clovis »](SCR_GLO_0021)

`endif`

`if (("" + @mot_glossaire).toLowerCase().trim() == "college") || (("" + @mot_glossaire).toLowerCase().trim() == "collège") || (("" + @mot_glossaire).toLowerCase().trim() == "la college") || (("" + @mot_glossaire).toLowerCase().trim() == "la collège") || (("" + @mot_glossaire).toLowerCase().trim() == "le college") || (("" + @mot_glossaire).toLowerCase().trim() == "le collège") || (("" + @mot_glossaire).toLowerCase().trim() == "les college") || (("" + @mot_glossaire).toLowerCase().trim() == "les collège")`
`@mot_glossaire_trouve = 1`

✅ **Mot trouvé.**

1. [Afficher la définition de « Collège »](SCR_GLO_0022)

`endif`

`if (("" + @mot_glossaire).toLowerCase().trim() == "commission europeenne") || (("" + @mot_glossaire).toLowerCase().trim() == "commission européenne") || (("" + @mot_glossaire).toLowerCase().trim() == "la commission europeenne") || (("" + @mot_glossaire).toLowerCase().trim() == "la commission européenne") || (("" + @mot_glossaire).toLowerCase().trim() == "le commission europeenne") || (("" + @mot_glossaire).toLowerCase().trim() == "le commission européenne") || (("" + @mot_glossaire).toLowerCase().trim() == "les commission europeenne") || (("" + @mot_glossaire).toLowerCase().trim() == "les commission européenne")`
`@mot_glossaire_trouve = 1`

✅ **Mot trouvé.**

1. [Afficher la définition de « Commission européenne »](SCR_GLO_0023)

`endif`

`if (("" + @mot_glossaire).toLowerCase().trim() == "commune") || (("" + @mot_glossaire).toLowerCase().trim() == "la commune") || (("" + @mot_glossaire).toLowerCase().trim() == "le commune") || (("" + @mot_glossaire).toLowerCase().trim() == "les commune")`
`@mot_glossaire_trouve = 1`

✅ **Mot trouvé.**

1. [Afficher la définition de « Commune »](SCR_GLO_0024)

`endif`

`if (("" + @mot_glossaire).toLowerCase().trim() == "conseil constitutionnel") || (("" + @mot_glossaire).toLowerCase().trim() == "la conseil constitutionnel") || (("" + @mot_glossaire).toLowerCase().trim() == "le conseil constitutionnel") || (("" + @mot_glossaire).toLowerCase().trim() == "les conseil constitutionnel")`
`@mot_glossaire_trouve = 1`

✅ **Mot trouvé.**

1. [Afficher la définition de « Conseil constitutionnel »](SCR_GLO_0025)

`endif`

`if (("" + @mot_glossaire).toLowerCase().trim() == "conseil de l union europeenne") || (("" + @mot_glossaire).toLowerCase().trim() == "conseil de l'union européenne") || (("" + @mot_glossaire).toLowerCase().trim() == "la conseil de l union europeenne") || (("" + @mot_glossaire).toLowerCase().trim() == "la conseil de l'union européenne") || (("" + @mot_glossaire).toLowerCase().trim() == "le conseil de l union europeenne") || (("" + @mot_glossaire).toLowerCase().trim() == "le conseil de l'union européenne") || (("" + @mot_glossaire).toLowerCase().trim() == "les conseil de l union europeenne") || (("" + @mot_glossaire).toLowerCase().trim() == "les conseil de l'union européenne")`
`@mot_glossaire_trouve = 1`

✅ **Mot trouvé.**

1. [Afficher la définition de « Conseil de l'Union européenne »](SCR_GLO_0026)

`endif`

`if (("" + @mot_glossaire).toLowerCase().trim() == "conseil departemental") || (("" + @mot_glossaire).toLowerCase().trim() == "conseil départemental") || (("" + @mot_glossaire).toLowerCase().trim() == "la conseil departemental") || (("" + @mot_glossaire).toLowerCase().trim() == "la conseil départemental") || (("" + @mot_glossaire).toLowerCase().trim() == "le conseil departemental") || (("" + @mot_glossaire).toLowerCase().trim() == "le conseil départemental") || (("" + @mot_glossaire).toLowerCase().trim() == "les conseil departemental") || (("" + @mot_glossaire).toLowerCase().trim() == "les conseil départemental")`
`@mot_glossaire_trouve = 1`

✅ **Mot trouvé.**

1. [Afficher la définition de « Conseil départemental »](SCR_GLO_0027)

`endif`

`if (("" + @mot_glossaire).toLowerCase().trim() == "conseil europeen") || (("" + @mot_glossaire).toLowerCase().trim() == "conseil européen") || (("" + @mot_glossaire).toLowerCase().trim() == "la conseil europeen") || (("" + @mot_glossaire).toLowerCase().trim() == "la conseil européen") || (("" + @mot_glossaire).toLowerCase().trim() == "le conseil europeen") || (("" + @mot_glossaire).toLowerCase().trim() == "le conseil européen") || (("" + @mot_glossaire).toLowerCase().trim() == "les conseil europeen") || (("" + @mot_glossaire).toLowerCase().trim() == "les conseil européen")`
`@mot_glossaire_trouve = 1`

✅ **Mot trouvé.**

1. [Afficher la définition de « Conseil européen »](SCR_GLO_0028)

`endif`

`if (("" + @mot_glossaire).toLowerCase().trim() == "conseil municipal") || (("" + @mot_glossaire).toLowerCase().trim() == "la conseil municipal") || (("" + @mot_glossaire).toLowerCase().trim() == "le conseil municipal") || (("" + @mot_glossaire).toLowerCase().trim() == "les conseil municipal")`
`@mot_glossaire_trouve = 1`

✅ **Mot trouvé.**

1. [Afficher la définition de « Conseil municipal »](SCR_GLO_0029)

`endif`

`if (("" + @mot_glossaire).toLowerCase().trim() == "conseil regional") || (("" + @mot_glossaire).toLowerCase().trim() == "conseil régional") || (("" + @mot_glossaire).toLowerCase().trim() == "la conseil regional") || (("" + @mot_glossaire).toLowerCase().trim() == "la conseil régional") || (("" + @mot_glossaire).toLowerCase().trim() == "le conseil regional") || (("" + @mot_glossaire).toLowerCase().trim() == "le conseil régional") || (("" + @mot_glossaire).toLowerCase().trim() == "les conseil regional") || (("" + @mot_glossaire).toLowerCase().trim() == "les conseil régional")`
`@mot_glossaire_trouve = 1`

✅ **Mot trouvé.**

1. [Afficher la définition de « Conseil régional »](SCR_GLO_0030)

`endif`

`if (("" + @mot_glossaire).toLowerCase().trim() == "consentement") || (("" + @mot_glossaire).toLowerCase().trim() == "la consentement") || (("" + @mot_glossaire).toLowerCase().trim() == "le consentement") || (("" + @mot_glossaire).toLowerCase().trim() == "les consentement")`
`@mot_glossaire_trouve = 1`

✅ **Mot trouvé.**

1. [Afficher la définition de « Consentement »](SCR_GLO_0031)

`endif`

`if (("" + @mot_glossaire).toLowerCase().trim() == "constitution") || (("" + @mot_glossaire).toLowerCase().trim() == "la constitution") || (("" + @mot_glossaire).toLowerCase().trim() == "le constitution") || (("" + @mot_glossaire).toLowerCase().trim() == "les constitution")`
`@mot_glossaire_trouve = 1`

✅ **Mot trouvé.**

1. [Afficher la définition de « Constitution »](SCR_GLO_0032)

`endif`

`if (("" + @mot_glossaire).toLowerCase().trim() == "contrat d engagement a respecter les principes de la republique") || (("" + @mot_glossaire).toLowerCase().trim() == "contrat d'engagement à respecter les principes de la république") || (("" + @mot_glossaire).toLowerCase().trim() == "la contrat d engagement a respecter les principes de la republique") || (("" + @mot_glossaire).toLowerCase().trim() == "la contrat d'engagement à respecter les principes de la république") || (("" + @mot_glossaire).toLowerCase().trim() == "le contrat d engagement a respecter les principes de la republique") || (("" + @mot_glossaire).toLowerCase().trim() == "le contrat d'engagement à respecter les principes de la république") || (("" + @mot_glossaire).toLowerCase().trim() == "les contrat d engagement a respecter les principes de la republique") || (("" + @mot_glossaire).toLowerCase().trim() == "les contrat d'engagement à respecter les principes de la république")`
`@mot_glossaire_trouve = 1`

✅ **Mot trouvé.**

1. [Afficher la définition de « Contrat d'engagement à respecter les principes de la République »](SCR_GLO_0033)

`endif`

`if (("" + @mot_glossaire).toLowerCase().trim() == "contrat de travail") || (("" + @mot_glossaire).toLowerCase().trim() == "la contrat de travail") || (("" + @mot_glossaire).toLowerCase().trim() == "le contrat de travail") || (("" + @mot_glossaire).toLowerCase().trim() == "les contrat de travail")`
`@mot_glossaire_trouve = 1`

✅ **Mot trouvé.**

1. [Afficher la définition de « Contrat de travail »](SCR_GLO_0034)

`endif`

`if (("" + @mot_glossaire).toLowerCase().trim() == "contravention") || (("" + @mot_glossaire).toLowerCase().trim() == "la contravention") || (("" + @mot_glossaire).toLowerCase().trim() == "le contravention") || (("" + @mot_glossaire).toLowerCase().trim() == "les contravention")`
`@mot_glossaire_trouve = 1`

✅ **Mot trouvé.**

1. [Afficher la définition de « Contravention »](SCR_GLO_0035)

`endif`

`if (("" + @mot_glossaire).toLowerCase().trim() == "cpam") || (("" + @mot_glossaire).toLowerCase().trim() == "la cpam") || (("" + @mot_glossaire).toLowerCase().trim() == "le cpam") || (("" + @mot_glossaire).toLowerCase().trim() == "les cpam")`
`@mot_glossaire_trouve = 1`

✅ **Mot trouvé.**

1. [Afficher la définition de « CPAM »](SCR_GLO_0036)

`endif`

`if (("" + @mot_glossaire).toLowerCase().trim() == "crime") || (("" + @mot_glossaire).toLowerCase().trim() == "la crime") || (("" + @mot_glossaire).toLowerCase().trim() == "le crime") || (("" + @mot_glossaire).toLowerCase().trim() == "les crime")`
`@mot_glossaire_trouve = 1`

✅ **Mot trouvé.**

1. [Afficher la définition de « Crime »](SCR_GLO_0037)

`endif`

`if (("" + @mot_glossaire).toLowerCase().trim() == "declaration des droits de l homme et du citoyen") || (("" + @mot_glossaire).toLowerCase().trim() == "déclaration des droits de l'homme et du citoyen") || (("" + @mot_glossaire).toLowerCase().trim() == "la declaration des droits de l homme et du citoyen") || (("" + @mot_glossaire).toLowerCase().trim() == "la déclaration des droits de l'homme et du citoyen") || (("" + @mot_glossaire).toLowerCase().trim() == "le declaration des droits de l homme et du citoyen") || (("" + @mot_glossaire).toLowerCase().trim() == "le déclaration des droits de l'homme et du citoyen") || (("" + @mot_glossaire).toLowerCase().trim() == "les declaration des droits de l homme et du citoyen") || (("" + @mot_glossaire).toLowerCase().trim() == "les déclaration des droits de l'homme et du citoyen")`
`@mot_glossaire_trouve = 1`

✅ **Mot trouvé.**

1. [Afficher la définition de « Déclaration des droits de l'homme et du citoyen »](SCR_GLO_0038)

`endif`

`if (("" + @mot_glossaire).toLowerCase().trim() == "delit") || (("" + @mot_glossaire).toLowerCase().trim() == "délit") || (("" + @mot_glossaire).toLowerCase().trim() == "la delit") || (("" + @mot_glossaire).toLowerCase().trim() == "la délit") || (("" + @mot_glossaire).toLowerCase().trim() == "le delit") || (("" + @mot_glossaire).toLowerCase().trim() == "le délit") || (("" + @mot_glossaire).toLowerCase().trim() == "les delit") || (("" + @mot_glossaire).toLowerCase().trim() == "les délit")`
`@mot_glossaire_trouve = 1`

✅ **Mot trouvé.**

1. [Afficher la définition de « Délit »](SCR_GLO_0039)

`endif`

`if (("" + @mot_glossaire).toLowerCase().trim() == "democratie") || (("" + @mot_glossaire).toLowerCase().trim() == "démocratie") || (("" + @mot_glossaire).toLowerCase().trim() == "la democratie") || (("" + @mot_glossaire).toLowerCase().trim() == "la démocratie") || (("" + @mot_glossaire).toLowerCase().trim() == "le democratie") || (("" + @mot_glossaire).toLowerCase().trim() == "le démocratie") || (("" + @mot_glossaire).toLowerCase().trim() == "les democratie") || (("" + @mot_glossaire).toLowerCase().trim() == "les démocratie")`
`@mot_glossaire_trouve = 1`

✅ **Mot trouvé.**

1. [Afficher la définition de « Démocratie »](SCR_GLO_0040)

`endif`

`if (("" + @mot_glossaire).toLowerCase().trim() == "departement") || (("" + @mot_glossaire).toLowerCase().trim() == "département") || (("" + @mot_glossaire).toLowerCase().trim() == "la departement") || (("" + @mot_glossaire).toLowerCase().trim() == "la département") || (("" + @mot_glossaire).toLowerCase().trim() == "le departement") || (("" + @mot_glossaire).toLowerCase().trim() == "le département") || (("" + @mot_glossaire).toLowerCase().trim() == "les departement") || (("" + @mot_glossaire).toLowerCase().trim() == "les département")`
`@mot_glossaire_trouve = 1`

✅ **Mot trouvé.**

1. [Afficher la définition de « Département »](SCR_GLO_0041)

`endif`

`if (("" + @mot_glossaire).toLowerCase().trim() == "depute") || (("" + @mot_glossaire).toLowerCase().trim() == "député") || (("" + @mot_glossaire).toLowerCase().trim() == "la depute") || (("" + @mot_glossaire).toLowerCase().trim() == "la député") || (("" + @mot_glossaire).toLowerCase().trim() == "le depute") || (("" + @mot_glossaire).toLowerCase().trim() == "le député") || (("" + @mot_glossaire).toLowerCase().trim() == "les depute") || (("" + @mot_glossaire).toLowerCase().trim() == "les député")`
`@mot_glossaire_trouve = 1`

✅ **Mot trouvé.**

1. [Afficher la définition de « Député »](SCR_GLO_0042)

`endif`

`if (("" + @mot_glossaire).toLowerCase().trim() == "depute europeen") || (("" + @mot_glossaire).toLowerCase().trim() == "député européen") || (("" + @mot_glossaire).toLowerCase().trim() == "la depute europeen") || (("" + @mot_glossaire).toLowerCase().trim() == "la député européen") || (("" + @mot_glossaire).toLowerCase().trim() == "le depute europeen") || (("" + @mot_glossaire).toLowerCase().trim() == "le député européen") || (("" + @mot_glossaire).toLowerCase().trim() == "les depute europeen") || (("" + @mot_glossaire).toLowerCase().trim() == "les député européen")`
`@mot_glossaire_trouve = 1`

✅ **Mot trouvé.**

1. [Afficher la définition de « Député européen »](SCR_GLO_0043)

`endif`

`if (("" + @mot_glossaire).toLowerCase().trim() == "devise de la republique") || (("" + @mot_glossaire).toLowerCase().trim() == "devise de la république") || (("" + @mot_glossaire).toLowerCase().trim() == "la devise de la republique") || (("" + @mot_glossaire).toLowerCase().trim() == "la devise de la république") || (("" + @mot_glossaire).toLowerCase().trim() == "le devise de la republique") || (("" + @mot_glossaire).toLowerCase().trim() == "le devise de la république") || (("" + @mot_glossaire).toLowerCase().trim() == "les devise de la republique") || (("" + @mot_glossaire).toLowerCase().trim() == "les devise de la république")`
`@mot_glossaire_trouve = 1`

✅ **Mot trouvé.**

1. [Afficher la définition de « Devise de la République »](SCR_GLO_0044)

`endif`

`if (("" + @mot_glossaire).toLowerCase().trim() == "dignite humaine") || (("" + @mot_glossaire).toLowerCase().trim() == "dignité humaine") || (("" + @mot_glossaire).toLowerCase().trim() == "la dignite humaine") || (("" + @mot_glossaire).toLowerCase().trim() == "la dignité humaine") || (("" + @mot_glossaire).toLowerCase().trim() == "le dignite humaine") || (("" + @mot_glossaire).toLowerCase().trim() == "le dignité humaine") || (("" + @mot_glossaire).toLowerCase().trim() == "les dignite humaine") || (("" + @mot_glossaire).toLowerCase().trim() == "les dignité humaine")`
`@mot_glossaire_trouve = 1`

✅ **Mot trouvé.**

1. [Afficher la définition de « Dignité humaine »](SCR_GLO_0045)

`endif`

`if (("" + @mot_glossaire).toLowerCase().trim() == "drapeau francais") || (("" + @mot_glossaire).toLowerCase().trim() == "drapeau français") || (("" + @mot_glossaire).toLowerCase().trim() == "la drapeau francais") || (("" + @mot_glossaire).toLowerCase().trim() == "la drapeau français") || (("" + @mot_glossaire).toLowerCase().trim() == "le drapeau francais") || (("" + @mot_glossaire).toLowerCase().trim() == "le drapeau français") || (("" + @mot_glossaire).toLowerCase().trim() == "les drapeau francais") || (("" + @mot_glossaire).toLowerCase().trim() == "les drapeau français")`
`@mot_glossaire_trouve = 1`

✅ **Mot trouvé.**

1. [Afficher la définition de « Drapeau français »](SCR_GLO_0046)

`endif`

`if (("" + @mot_glossaire).toLowerCase().trim() == "droits fondamentaux") || (("" + @mot_glossaire).toLowerCase().trim() == "la droits fondamentaux") || (("" + @mot_glossaire).toLowerCase().trim() == "le droits fondamentaux") || (("" + @mot_glossaire).toLowerCase().trim() == "les droits fondamentaux")`
`@mot_glossaire_trouve = 1`

✅ **Mot trouvé.**

1. [Afficher la définition de « Droits fondamentaux »](SCR_GLO_0047)

`endif`

`if (("" + @mot_glossaire).toLowerCase().trim() == "ecole") || (("" + @mot_glossaire).toLowerCase().trim() == "la ecole") || (("" + @mot_glossaire).toLowerCase().trim() == "la école") || (("" + @mot_glossaire).toLowerCase().trim() == "le ecole") || (("" + @mot_glossaire).toLowerCase().trim() == "le école") || (("" + @mot_glossaire).toLowerCase().trim() == "les ecole") || (("" + @mot_glossaire).toLowerCase().trim() == "les école") || (("" + @mot_glossaire).toLowerCase().trim() == "école")`
`@mot_glossaire_trouve = 1`

✅ **Mot trouvé.**

1. [Afficher la définition de « École »](SCR_GLO_0048)

`endif`

`if (("" + @mot_glossaire).toLowerCase().trim() == "egalite") || (("" + @mot_glossaire).toLowerCase().trim() == "la egalite") || (("" + @mot_glossaire).toLowerCase().trim() == "la égalité") || (("" + @mot_glossaire).toLowerCase().trim() == "le egalite") || (("" + @mot_glossaire).toLowerCase().trim() == "le égalité") || (("" + @mot_glossaire).toLowerCase().trim() == "les egalite") || (("" + @mot_glossaire).toLowerCase().trim() == "les égalité") || (("" + @mot_glossaire).toLowerCase().trim() == "égalité")`
`@mot_glossaire_trouve = 1`

✅ **Mot trouvé.**

1. [Afficher la définition de « Égalité »](SCR_GLO_0049)

`endif`

`if (("" + @mot_glossaire).toLowerCase().trim() == "election") || (("" + @mot_glossaire).toLowerCase().trim() == "la election") || (("" + @mot_glossaire).toLowerCase().trim() == "la élection") || (("" + @mot_glossaire).toLowerCase().trim() == "le election") || (("" + @mot_glossaire).toLowerCase().trim() == "le élection") || (("" + @mot_glossaire).toLowerCase().trim() == "les election") || (("" + @mot_glossaire).toLowerCase().trim() == "les élection") || (("" + @mot_glossaire).toLowerCase().trim() == "élection")`
`@mot_glossaire_trouve = 1`

✅ **Mot trouvé.**

1. [Afficher la définition de « Élection »](SCR_GLO_0050)

`endif`

`if (("" + @mot_glossaire).toLowerCase().trim() == "employeur") || (("" + @mot_glossaire).toLowerCase().trim() == "la employeur") || (("" + @mot_glossaire).toLowerCase().trim() == "le employeur") || (("" + @mot_glossaire).toLowerCase().trim() == "les employeur")`
`@mot_glossaire_trouve = 1`

✅ **Mot trouvé.**

1. [Afficher la définition de « Employeur »](SCR_GLO_0051)

`endif`

`if (("" + @mot_glossaire).toLowerCase().trim() == "environnement") || (("" + @mot_glossaire).toLowerCase().trim() == "la environnement") || (("" + @mot_glossaire).toLowerCase().trim() == "le environnement") || (("" + @mot_glossaire).toLowerCase().trim() == "les environnement")`
`@mot_glossaire_trouve = 1`

✅ **Mot trouvé.**

1. [Afficher la définition de « Environnement »](SCR_GLO_0052)

`endif`

`if (("" + @mot_glossaire).toLowerCase().trim() == "espace schengen") || (("" + @mot_glossaire).toLowerCase().trim() == "la espace schengen") || (("" + @mot_glossaire).toLowerCase().trim() == "le espace schengen") || (("" + @mot_glossaire).toLowerCase().trim() == "les espace schengen")`
`@mot_glossaire_trouve = 1`

✅ **Mot trouvé.**

1. [Afficher la définition de « Espace Schengen »](SCR_GLO_0053)

`endif`

`if (("" + @mot_glossaire).toLowerCase().trim() == "etat") || (("" + @mot_glossaire).toLowerCase().trim() == "la etat") || (("" + @mot_glossaire).toLowerCase().trim() == "la état") || (("" + @mot_glossaire).toLowerCase().trim() == "le etat") || (("" + @mot_glossaire).toLowerCase().trim() == "le état") || (("" + @mot_glossaire).toLowerCase().trim() == "les etat") || (("" + @mot_glossaire).toLowerCase().trim() == "les état") || (("" + @mot_glossaire).toLowerCase().trim() == "état")`
`@mot_glossaire_trouve = 1`

✅ **Mot trouvé.**

1. [Afficher la définition de « État »](SCR_GLO_0054)

`endif`

`if (("" + @mot_glossaire).toLowerCase().trim() == "euro") || (("" + @mot_glossaire).toLowerCase().trim() == "la euro") || (("" + @mot_glossaire).toLowerCase().trim() == "le euro") || (("" + @mot_glossaire).toLowerCase().trim() == "les euro")`
`@mot_glossaire_trouve = 1`

✅ **Mot trouvé.**

1. [Afficher la définition de « Euro »](SCR_GLO_0055)

`endif`

`if (("" + @mot_glossaire).toLowerCase().trim() == "fete de la musique") || (("" + @mot_glossaire).toLowerCase().trim() == "fête de la musique") || (("" + @mot_glossaire).toLowerCase().trim() == "la fete de la musique") || (("" + @mot_glossaire).toLowerCase().trim() == "la fête de la musique") || (("" + @mot_glossaire).toLowerCase().trim() == "le fete de la musique") || (("" + @mot_glossaire).toLowerCase().trim() == "le fête de la musique") || (("" + @mot_glossaire).toLowerCase().trim() == "les fete de la musique") || (("" + @mot_glossaire).toLowerCase().trim() == "les fête de la musique")`
`@mot_glossaire_trouve = 1`

✅ **Mot trouvé.**

1. [Afficher la définition de « Fête de la Musique »](SCR_GLO_0056)

`endif`

`if (("" + @mot_glossaire).toLowerCase().trim() == "fete nationale") || (("" + @mot_glossaire).toLowerCase().trim() == "fête nationale") || (("" + @mot_glossaire).toLowerCase().trim() == "la fete nationale") || (("" + @mot_glossaire).toLowerCase().trim() == "la fête nationale") || (("" + @mot_glossaire).toLowerCase().trim() == "le fete nationale") || (("" + @mot_glossaire).toLowerCase().trim() == "le fête nationale") || (("" + @mot_glossaire).toLowerCase().trim() == "les fete nationale") || (("" + @mot_glossaire).toLowerCase().trim() == "les fête nationale")`
`@mot_glossaire_trouve = 1`

✅ **Mot trouvé.**

1. [Afficher la définition de « Fête nationale »](SCR_GLO_0057)

`endif`

`if (("" + @mot_glossaire).toLowerCase().trim() == "france metropolitaine") || (("" + @mot_glossaire).toLowerCase().trim() == "france métropolitaine") || (("" + @mot_glossaire).toLowerCase().trim() == "la france metropolitaine") || (("" + @mot_glossaire).toLowerCase().trim() == "la france métropolitaine") || (("" + @mot_glossaire).toLowerCase().trim() == "le france metropolitaine") || (("" + @mot_glossaire).toLowerCase().trim() == "le france métropolitaine") || (("" + @mot_glossaire).toLowerCase().trim() == "les france metropolitaine") || (("" + @mot_glossaire).toLowerCase().trim() == "les france métropolitaine")`
`@mot_glossaire_trouve = 1`

✅ **Mot trouvé.**

1. [Afficher la définition de « France métropolitaine »](SCR_GLO_0058)

`endif`

`if (("" + @mot_glossaire).toLowerCase().trim() == "france services") || (("" + @mot_glossaire).toLowerCase().trim() == "la france services") || (("" + @mot_glossaire).toLowerCase().trim() == "le france services") || (("" + @mot_glossaire).toLowerCase().trim() == "les france services")`
`@mot_glossaire_trouve = 1`

✅ **Mot trouvé.**

1. [Afficher la définition de « France Services »](SCR_GLO_0059)

`endif`

`if (("" + @mot_glossaire).toLowerCase().trim() == "france travail") || (("" + @mot_glossaire).toLowerCase().trim() == "la france travail") || (("" + @mot_glossaire).toLowerCase().trim() == "le france travail") || (("" + @mot_glossaire).toLowerCase().trim() == "les france travail")`
`@mot_glossaire_trouve = 1`

✅ **Mot trouvé.**

1. [Afficher la définition de « France Travail »](SCR_GLO_0060)

`endif`

`if (("" + @mot_glossaire).toLowerCase().trim() == "francophonie") || (("" + @mot_glossaire).toLowerCase().trim() == "la francophonie") || (("" + @mot_glossaire).toLowerCase().trim() == "le francophonie") || (("" + @mot_glossaire).toLowerCase().trim() == "les francophonie")`
`@mot_glossaire_trouve = 1`

✅ **Mot trouvé.**

1. [Afficher la définition de « Francophonie »](SCR_GLO_0061)

`endif`

`if (("" + @mot_glossaire).toLowerCase().trim() == "fraternite") || (("" + @mot_glossaire).toLowerCase().trim() == "fraternité") || (("" + @mot_glossaire).toLowerCase().trim() == "la fraternite") || (("" + @mot_glossaire).toLowerCase().trim() == "la fraternité") || (("" + @mot_glossaire).toLowerCase().trim() == "le fraternite") || (("" + @mot_glossaire).toLowerCase().trim() == "le fraternité") || (("" + @mot_glossaire).toLowerCase().trim() == "les fraternite") || (("" + @mot_glossaire).toLowerCase().trim() == "les fraternité")`
`@mot_glossaire_trouve = 1`

✅ **Mot trouvé.**

1. [Afficher la définition de « Fraternité »](SCR_GLO_0062)

`endif`

`if (("" + @mot_glossaire).toLowerCase().trim() == "gastronomie francaise") || (("" + @mot_glossaire).toLowerCase().trim() == "gastronomie française") || (("" + @mot_glossaire).toLowerCase().trim() == "la gastronomie francaise") || (("" + @mot_glossaire).toLowerCase().trim() == "la gastronomie française") || (("" + @mot_glossaire).toLowerCase().trim() == "le gastronomie francaise") || (("" + @mot_glossaire).toLowerCase().trim() == "le gastronomie française") || (("" + @mot_glossaire).toLowerCase().trim() == "les gastronomie francaise") || (("" + @mot_glossaire).toLowerCase().trim() == "les gastronomie française")`
`@mot_glossaire_trouve = 1`

✅ **Mot trouvé.**

1. [Afficher la définition de « Gastronomie française »](SCR_GLO_0063)

`endif`

`if (("" + @mot_glossaire).toLowerCase().trim() == "gaule") || (("" + @mot_glossaire).toLowerCase().trim() == "la gaule") || (("" + @mot_glossaire).toLowerCase().trim() == "le gaule") || (("" + @mot_glossaire).toLowerCase().trim() == "les gaule")`
`@mot_glossaire_trouve = 1`

✅ **Mot trouvé.**

1. [Afficher la définition de « Gaule »](SCR_GLO_0064)

`endif`

`if (("" + @mot_glossaire).toLowerCase().trim() == "gendarmerie") || (("" + @mot_glossaire).toLowerCase().trim() == "la gendarmerie") || (("" + @mot_glossaire).toLowerCase().trim() == "le gendarmerie") || (("" + @mot_glossaire).toLowerCase().trim() == "les gendarmerie")`
`@mot_glossaire_trouve = 1`

✅ **Mot trouvé.**

1. [Afficher la définition de « Gendarmerie »](SCR_GLO_0065)

`endif`

`if (("" + @mot_glossaire).toLowerCase().trim() == "gouvernement") || (("" + @mot_glossaire).toLowerCase().trim() == "la gouvernement") || (("" + @mot_glossaire).toLowerCase().trim() == "le gouvernement") || (("" + @mot_glossaire).toLowerCase().trim() == "les gouvernement")`
`@mot_glossaire_trouve = 1`

✅ **Mot trouvé.**

1. [Afficher la définition de « Gouvernement »](SCR_GLO_0066)

`endif`

`if (("" + @mot_glossaire).toLowerCase().trim() == "guadeloupe") || (("" + @mot_glossaire).toLowerCase().trim() == "la guadeloupe") || (("" + @mot_glossaire).toLowerCase().trim() == "le guadeloupe") || (("" + @mot_glossaire).toLowerCase().trim() == "les guadeloupe")`
`@mot_glossaire_trouve = 1`

✅ **Mot trouvé.**

1. [Afficher la définition de « Guadeloupe »](SCR_GLO_0067)

`endif`

`if (("" + @mot_glossaire).toLowerCase().trim() == "guyane") || (("" + @mot_glossaire).toLowerCase().trim() == "la guyane") || (("" + @mot_glossaire).toLowerCase().trim() == "le guyane") || (("" + @mot_glossaire).toLowerCase().trim() == "les guyane")`
`@mot_glossaire_trouve = 1`

✅ **Mot trouvé.**

1. [Afficher la définition de « Guyane »](SCR_GLO_0068)

`endif`

`if (("" + @mot_glossaire).toLowerCase().trim() == "harcelement") || (("" + @mot_glossaire).toLowerCase().trim() == "harcèlement") || (("" + @mot_glossaire).toLowerCase().trim() == "la harcelement") || (("" + @mot_glossaire).toLowerCase().trim() == "la harcèlement") || (("" + @mot_glossaire).toLowerCase().trim() == "le harcelement") || (("" + @mot_glossaire).toLowerCase().trim() == "le harcèlement") || (("" + @mot_glossaire).toLowerCase().trim() == "les harcelement") || (("" + @mot_glossaire).toLowerCase().trim() == "les harcèlement")`
`@mot_glossaire_trouve = 1`

✅ **Mot trouvé.**

1. [Afficher la définition de « Harcèlement »](SCR_GLO_0069)

`endif`

`if (("" + @mot_glossaire).toLowerCase().trim() == "harcelement scolaire") || (("" + @mot_glossaire).toLowerCase().trim() == "harcèlement scolaire") || (("" + @mot_glossaire).toLowerCase().trim() == "la harcelement scolaire") || (("" + @mot_glossaire).toLowerCase().trim() == "la harcèlement scolaire") || (("" + @mot_glossaire).toLowerCase().trim() == "le harcelement scolaire") || (("" + @mot_glossaire).toLowerCase().trim() == "le harcèlement scolaire") || (("" + @mot_glossaire).toLowerCase().trim() == "les harcelement scolaire") || (("" + @mot_glossaire).toLowerCase().trim() == "les harcèlement scolaire")`
`@mot_glossaire_trouve = 1`

✅ **Mot trouvé.**

1. [Afficher la définition de « Harcèlement scolaire »](SCR_GLO_0070)

`endif`

`if (("" + @mot_glossaire).toLowerCase().trim() == "hopital") || (("" + @mot_glossaire).toLowerCase().trim() == "hôpital") || (("" + @mot_glossaire).toLowerCase().trim() == "la hopital") || (("" + @mot_glossaire).toLowerCase().trim() == "la hôpital") || (("" + @mot_glossaire).toLowerCase().trim() == "le hopital") || (("" + @mot_glossaire).toLowerCase().trim() == "le hôpital") || (("" + @mot_glossaire).toLowerCase().trim() == "les hopital") || (("" + @mot_glossaire).toLowerCase().trim() == "les hôpital")`
`@mot_glossaire_trouve = 1`

✅ **Mot trouvé.**

1. [Afficher la définition de « Hôpital »](SCR_GLO_0071)

`endif`

`if (("" + @mot_glossaire).toLowerCase().trim() == "ile de france") || (("" + @mot_glossaire).toLowerCase().trim() == "la ile de france") || (("" + @mot_glossaire).toLowerCase().trim() == "la île-de-france") || (("" + @mot_glossaire).toLowerCase().trim() == "le ile de france") || (("" + @mot_glossaire).toLowerCase().trim() == "le île-de-france") || (("" + @mot_glossaire).toLowerCase().trim() == "les ile de france") || (("" + @mot_glossaire).toLowerCase().trim() == "les île-de-france") || (("" + @mot_glossaire).toLowerCase().trim() == "île-de-france")`
`@mot_glossaire_trouve = 1`

✅ **Mot trouvé.**

1. [Afficher la définition de « Île-de-France »](SCR_GLO_0072)

`endif`

`if (("" + @mot_glossaire).toLowerCase().trim() == "impot") || (("" + @mot_glossaire).toLowerCase().trim() == "impôt") || (("" + @mot_glossaire).toLowerCase().trim() == "la impot") || (("" + @mot_glossaire).toLowerCase().trim() == "la impôt") || (("" + @mot_glossaire).toLowerCase().trim() == "le impot") || (("" + @mot_glossaire).toLowerCase().trim() == "le impôt") || (("" + @mot_glossaire).toLowerCase().trim() == "les impot") || (("" + @mot_glossaire).toLowerCase().trim() == "les impôt")`
`@mot_glossaire_trouve = 1`

✅ **Mot trouvé.**

1. [Afficher la définition de « Impôt »](SCR_GLO_0073)

`endif`

`if (("" + @mot_glossaire).toLowerCase().trim() == "infraction") || (("" + @mot_glossaire).toLowerCase().trim() == "la infraction") || (("" + @mot_glossaire).toLowerCase().trim() == "le infraction") || (("" + @mot_glossaire).toLowerCase().trim() == "les infraction")`
`@mot_glossaire_trouve = 1`

✅ **Mot trouvé.**

1. [Afficher la définition de « Infraction »](SCR_GLO_0074)

`endif`

`if (("" + @mot_glossaire).toLowerCase().trim() == "integrite de la personne") || (("" + @mot_glossaire).toLowerCase().trim() == "intégrité de la personne") || (("" + @mot_glossaire).toLowerCase().trim() == "la integrite de la personne") || (("" + @mot_glossaire).toLowerCase().trim() == "la intégrité de la personne") || (("" + @mot_glossaire).toLowerCase().trim() == "le integrite de la personne") || (("" + @mot_glossaire).toLowerCase().trim() == "le intégrité de la personne") || (("" + @mot_glossaire).toLowerCase().trim() == "les integrite de la personne") || (("" + @mot_glossaire).toLowerCase().trim() == "les intégrité de la personne")`
`@mot_glossaire_trouve = 1`

✅ **Mot trouvé.**

1. [Afficher la définition de « Intégrité de la personne »](SCR_GLO_0075)

`endif`

`if (("" + @mot_glossaire).toLowerCase().trim() == "journees europeennes du patrimoine") || (("" + @mot_glossaire).toLowerCase().trim() == "journées européennes du patrimoine") || (("" + @mot_glossaire).toLowerCase().trim() == "la journees europeennes du patrimoine") || (("" + @mot_glossaire).toLowerCase().trim() == "la journées européennes du patrimoine") || (("" + @mot_glossaire).toLowerCase().trim() == "le journees europeennes du patrimoine") || (("" + @mot_glossaire).toLowerCase().trim() == "le journées européennes du patrimoine") || (("" + @mot_glossaire).toLowerCase().trim() == "les journees europeennes du patrimoine") || (("" + @mot_glossaire).toLowerCase().trim() == "les journées européennes du patrimoine")`
`@mot_glossaire_trouve = 1`

✅ **Mot trouvé.**

1. [Afficher la définition de « Journées européennes du patrimoine »](SCR_GLO_0076)

`endif`

`if (("" + @mot_glossaire).toLowerCase().trim() == "justice") || (("" + @mot_glossaire).toLowerCase().trim() == "la justice") || (("" + @mot_glossaire).toLowerCase().trim() == "le justice") || (("" + @mot_glossaire).toLowerCase().trim() == "les justice")`
`@mot_glossaire_trouve = 1`

✅ **Mot trouvé.**

1. [Afficher la définition de « Justice »](SCR_GLO_0077)

`endif`

`if (("" + @mot_glossaire).toLowerCase().trim() == "la la marseillaise") || (("" + @mot_glossaire).toLowerCase().trim() == "la marseillaise") || (("" + @mot_glossaire).toLowerCase().trim() == "le la marseillaise") || (("" + @mot_glossaire).toLowerCase().trim() == "les la marseillaise")`
`@mot_glossaire_trouve = 1`

✅ **Mot trouvé.**

1. [Afficher la définition de « La Marseillaise »](SCR_GLO_0078)

`endif`

`if (("" + @mot_glossaire).toLowerCase().trim() == "la la reunion") || (("" + @mot_glossaire).toLowerCase().trim() == "la la réunion") || (("" + @mot_glossaire).toLowerCase().trim() == "la reunion") || (("" + @mot_glossaire).toLowerCase().trim() == "la réunion") || (("" + @mot_glossaire).toLowerCase().trim() == "le la reunion") || (("" + @mot_glossaire).toLowerCase().trim() == "le la réunion") || (("" + @mot_glossaire).toLowerCase().trim() == "les la reunion") || (("" + @mot_glossaire).toLowerCase().trim() == "les la réunion")`
`@mot_glossaire_trouve = 1`

✅ **Mot trouvé.**

1. [Afficher la définition de « La Réunion »](SCR_GLO_0079)

`endif`

`if (("" + @mot_glossaire).toLowerCase().trim() == "la laicite") || (("" + @mot_glossaire).toLowerCase().trim() == "la laïcité") || (("" + @mot_glossaire).toLowerCase().trim() == "laicite") || (("" + @mot_glossaire).toLowerCase().trim() == "laïcité") || (("" + @mot_glossaire).toLowerCase().trim() == "le laicite") || (("" + @mot_glossaire).toLowerCase().trim() == "le laïcité") || (("" + @mot_glossaire).toLowerCase().trim() == "les laicite") || (("" + @mot_glossaire).toLowerCase().trim() == "les laïcité")`
`@mot_glossaire_trouve = 1`

✅ **Mot trouvé.**

1. [Afficher la définition de « Laïcité »](SCR_GLO_0080)

`endif`

`if (("" + @mot_glossaire).toLowerCase().trim() == "la langue de la republique") || (("" + @mot_glossaire).toLowerCase().trim() == "la langue de la république") || (("" + @mot_glossaire).toLowerCase().trim() == "langue de la republique") || (("" + @mot_glossaire).toLowerCase().trim() == "langue de la république") || (("" + @mot_glossaire).toLowerCase().trim() == "le langue de la republique") || (("" + @mot_glossaire).toLowerCase().trim() == "le langue de la république") || (("" + @mot_glossaire).toLowerCase().trim() == "les langue de la republique") || (("" + @mot_glossaire).toLowerCase().trim() == "les langue de la république")`
`@mot_glossaire_trouve = 1`

✅ **Mot trouvé.**

1. [Afficher la définition de « Langue de la République »](SCR_GLO_0081)

`endif`

`if (("" + @mot_glossaire).toLowerCase().trim() == "la liberte") || (("" + @mot_glossaire).toLowerCase().trim() == "la liberté") || (("" + @mot_glossaire).toLowerCase().trim() == "le liberte") || (("" + @mot_glossaire).toLowerCase().trim() == "le liberté") || (("" + @mot_glossaire).toLowerCase().trim() == "les liberte") || (("" + @mot_glossaire).toLowerCase().trim() == "les liberté") || (("" + @mot_glossaire).toLowerCase().trim() == "liberte") || (("" + @mot_glossaire).toLowerCase().trim() == "liberté")`
`@mot_glossaire_trouve = 1`

✅ **Mot trouvé.**

1. [Afficher la définition de « Liberté »](SCR_GLO_0082)

`endif`

`if (("" + @mot_glossaire).toLowerCase().trim() == "la liberte de conscience") || (("" + @mot_glossaire).toLowerCase().trim() == "la liberté de conscience") || (("" + @mot_glossaire).toLowerCase().trim() == "le liberte de conscience") || (("" + @mot_glossaire).toLowerCase().trim() == "le liberté de conscience") || (("" + @mot_glossaire).toLowerCase().trim() == "les liberte de conscience") || (("" + @mot_glossaire).toLowerCase().trim() == "les liberté de conscience") || (("" + @mot_glossaire).toLowerCase().trim() == "liberte de conscience") || (("" + @mot_glossaire).toLowerCase().trim() == "liberté de conscience")`
`@mot_glossaire_trouve = 1`

✅ **Mot trouvé.**

1. [Afficher la définition de « Liberté de conscience »](SCR_GLO_0083)

`endif`

`if (("" + @mot_glossaire).toLowerCase().trim() == "la locataire") || (("" + @mot_glossaire).toLowerCase().trim() == "le locataire") || (("" + @mot_glossaire).toLowerCase().trim() == "les locataire") || (("" + @mot_glossaire).toLowerCase().trim() == "locataire")`
`@mot_glossaire_trouve = 1`

✅ **Mot trouvé.**

1. [Afficher la définition de « Locataire »](SCR_GLO_0084)

`endif`

`if (("" + @mot_glossaire).toLowerCase().trim() == "la loi") || (("" + @mot_glossaire).toLowerCase().trim() == "le loi") || (("" + @mot_glossaire).toLowerCase().trim() == "les loi") || (("" + @mot_glossaire).toLowerCase().trim() == "loi")`
`@mot_glossaire_trouve = 1`

✅ **Mot trouvé.**

1. [Afficher la définition de « Loi »](SCR_GLO_0085)

`endif`

`if (("" + @mot_glossaire).toLowerCase().trim() == "la lycee") || (("" + @mot_glossaire).toLowerCase().trim() == "la lycée") || (("" + @mot_glossaire).toLowerCase().trim() == "le lycee") || (("" + @mot_glossaire).toLowerCase().trim() == "le lycée") || (("" + @mot_glossaire).toLowerCase().trim() == "les lycee") || (("" + @mot_glossaire).toLowerCase().trim() == "les lycée") || (("" + @mot_glossaire).toLowerCase().trim() == "lycee") || (("" + @mot_glossaire).toLowerCase().trim() == "lycée")`
`@mot_glossaire_trouve = 1`

✅ **Mot trouvé.**

1. [Afficher la définition de « Lycée »](SCR_GLO_0086)

`endif`

`if (("" + @mot_glossaire).toLowerCase().trim() == "la maire") || (("" + @mot_glossaire).toLowerCase().trim() == "le maire") || (("" + @mot_glossaire).toLowerCase().trim() == "les maire") || (("" + @mot_glossaire).toLowerCase().trim() == "maire")`
`@mot_glossaire_trouve = 1`

✅ **Mot trouvé.**

1. [Afficher la définition de « Maire »](SCR_GLO_0087)

`endif`

`if (("" + @mot_glossaire).toLowerCase().trim() == "la mairie") || (("" + @mot_glossaire).toLowerCase().trim() == "le mairie") || (("" + @mot_glossaire).toLowerCase().trim() == "les mairie") || (("" + @mot_glossaire).toLowerCase().trim() == "mairie")`
`@mot_glossaire_trouve = 1`

✅ **Mot trouvé.**

1. [Afficher la définition de « Mairie »](SCR_GLO_0088)

`endif`

`if (("" + @mot_glossaire).toLowerCase().trim() == "la marianne") || (("" + @mot_glossaire).toLowerCase().trim() == "le marianne") || (("" + @mot_glossaire).toLowerCase().trim() == "les marianne") || (("" + @mot_glossaire).toLowerCase().trim() == "marianne")`
`@mot_glossaire_trouve = 1`

✅ **Mot trouvé.**

1. [Afficher la définition de « Marianne »](SCR_GLO_0089)

`endif`

`if (("" + @mot_glossaire).toLowerCase().trim() == "la martinique") || (("" + @mot_glossaire).toLowerCase().trim() == "le martinique") || (("" + @mot_glossaire).toLowerCase().trim() == "les martinique") || (("" + @mot_glossaire).toLowerCase().trim() == "martinique")`
`@mot_glossaire_trouve = 1`

✅ **Mot trouvé.**

1. [Afficher la définition de « Martinique »](SCR_GLO_0090)

`endif`

`if (("" + @mot_glossaire).toLowerCase().trim() == "la mayotte") || (("" + @mot_glossaire).toLowerCase().trim() == "le mayotte") || (("" + @mot_glossaire).toLowerCase().trim() == "les mayotte") || (("" + @mot_glossaire).toLowerCase().trim() == "mayotte")`
`@mot_glossaire_trouve = 1`

✅ **Mot trouvé.**

1. [Afficher la définition de « Mayotte »](SCR_GLO_0091)

`endif`

`if (("" + @mot_glossaire).toLowerCase().trim() == "la medecin traitant") || (("" + @mot_glossaire).toLowerCase().trim() == "la médecin traitant") || (("" + @mot_glossaire).toLowerCase().trim() == "le medecin traitant") || (("" + @mot_glossaire).toLowerCase().trim() == "le médecin traitant") || (("" + @mot_glossaire).toLowerCase().trim() == "les medecin traitant") || (("" + @mot_glossaire).toLowerCase().trim() == "les médecin traitant") || (("" + @mot_glossaire).toLowerCase().trim() == "medecin traitant") || (("" + @mot_glossaire).toLowerCase().trim() == "médecin traitant")`
`@mot_glossaire_trouve = 1`

✅ **Mot trouvé.**

1. [Afficher la définition de « Médecin traitant »](SCR_GLO_0092)

`endif`

`if (("" + @mot_glossaire).toLowerCase().trim() == "la ministre") || (("" + @mot_glossaire).toLowerCase().trim() == "le ministre") || (("" + @mot_glossaire).toLowerCase().trim() == "les ministre") || (("" + @mot_glossaire).toLowerCase().trim() == "ministre")`
`@mot_glossaire_trouve = 1`

✅ **Mot trouvé.**

1. [Afficher la définition de « Ministre »](SCR_GLO_0093)

`endif`

`if (("" + @mot_glossaire).toLowerCase().trim() == "la mont saint michel") || (("" + @mot_glossaire).toLowerCase().trim() == "la mont-saint-michel") || (("" + @mot_glossaire).toLowerCase().trim() == "le mont saint michel") || (("" + @mot_glossaire).toLowerCase().trim() == "le mont-saint-michel") || (("" + @mot_glossaire).toLowerCase().trim() == "les mont saint michel") || (("" + @mot_glossaire).toLowerCase().trim() == "les mont-saint-michel") || (("" + @mot_glossaire).toLowerCase().trim() == "mont saint michel") || (("" + @mot_glossaire).toLowerCase().trim() == "mont-saint-michel")`
`@mot_glossaire_trouve = 1`

✅ **Mot trouvé.**

1. [Afficher la définition de « Mont-Saint-Michel »](SCR_GLO_0094)

`endif`

`if (("" + @mot_glossaire).toLowerCase().trim() == "la musee du louvre") || (("" + @mot_glossaire).toLowerCase().trim() == "la musée du louvre") || (("" + @mot_glossaire).toLowerCase().trim() == "le musee du louvre") || (("" + @mot_glossaire).toLowerCase().trim() == "le musée du louvre") || (("" + @mot_glossaire).toLowerCase().trim() == "les musee du louvre") || (("" + @mot_glossaire).toLowerCase().trim() == "les musée du louvre") || (("" + @mot_glossaire).toLowerCase().trim() == "musee du louvre") || (("" + @mot_glossaire).toLowerCase().trim() == "musée du louvre")`
`@mot_glossaire_trouve = 1`

✅ **Mot trouvé.**

1. [Afficher la définition de « Musée du Louvre »](SCR_GLO_0095)

`endif`

`if (("" + @mot_glossaire).toLowerCase().trim() == "la mutilations sexuelles feminines") || (("" + @mot_glossaire).toLowerCase().trim() == "la mutilations sexuelles féminines") || (("" + @mot_glossaire).toLowerCase().trim() == "le mutilations sexuelles feminines") || (("" + @mot_glossaire).toLowerCase().trim() == "le mutilations sexuelles féminines") || (("" + @mot_glossaire).toLowerCase().trim() == "les mutilations sexuelles feminines") || (("" + @mot_glossaire).toLowerCase().trim() == "les mutilations sexuelles féminines") || (("" + @mot_glossaire).toLowerCase().trim() == "mutilations sexuelles feminines") || (("" + @mot_glossaire).toLowerCase().trim() == "mutilations sexuelles féminines")`
`@mot_glossaire_trouve = 1`

✅ **Mot trouvé.**

1. [Afficher la définition de « Mutilations sexuelles féminines »](SCR_GLO_0096)

`endif`

`if (("" + @mot_glossaire).toLowerCase().trim() == "la naturalisation") || (("" + @mot_glossaire).toLowerCase().trim() == "le naturalisation") || (("" + @mot_glossaire).toLowerCase().trim() == "les naturalisation") || (("" + @mot_glossaire).toLowerCase().trim() == "naturalisation")`
`@mot_glossaire_trouve = 1`

✅ **Mot trouvé.**

1. [Afficher la définition de « Naturalisation »](SCR_GLO_0097)

`endif`

`if (("" + @mot_glossaire).toLowerCase().trim() == "la neutralite") || (("" + @mot_glossaire).toLowerCase().trim() == "la neutralité") || (("" + @mot_glossaire).toLowerCase().trim() == "le neutralite") || (("" + @mot_glossaire).toLowerCase().trim() == "le neutralité") || (("" + @mot_glossaire).toLowerCase().trim() == "les neutralite") || (("" + @mot_glossaire).toLowerCase().trim() == "les neutralité") || (("" + @mot_glossaire).toLowerCase().trim() == "neutralite") || (("" + @mot_glossaire).toLowerCase().trim() == "neutralité")`
`@mot_glossaire_trouve = 1`

✅ **Mot trouvé.**

1. [Afficher la définition de « Neutralité »](SCR_GLO_0098)

`endif`

`if (("" + @mot_glossaire).toLowerCase().trim() == "la ordre public") || (("" + @mot_glossaire).toLowerCase().trim() == "le ordre public") || (("" + @mot_glossaire).toLowerCase().trim() == "les ordre public") || (("" + @mot_glossaire).toLowerCase().trim() == "ordre public")`
`@mot_glossaire_trouve = 1`

✅ **Mot trouvé.**

1. [Afficher la définition de « Ordre public »](SCR_GLO_0099)

`endif`

`if (("" + @mot_glossaire).toLowerCase().trim() == "la outre mer") || (("" + @mot_glossaire).toLowerCase().trim() == "la outre-mer") || (("" + @mot_glossaire).toLowerCase().trim() == "le outre mer") || (("" + @mot_glossaire).toLowerCase().trim() == "le outre-mer") || (("" + @mot_glossaire).toLowerCase().trim() == "les outre mer") || (("" + @mot_glossaire).toLowerCase().trim() == "les outre-mer") || (("" + @mot_glossaire).toLowerCase().trim() == "outre mer") || (("" + @mot_glossaire).toLowerCase().trim() == "outre-mer")`
`@mot_glossaire_trouve = 1`

✅ **Mot trouvé.**

1. [Afficher la définition de « Outre-mer »](SCR_GLO_0100)

`endif`

`if (("" + @mot_glossaire).toLowerCase().trim() == "la parlement") || (("" + @mot_glossaire).toLowerCase().trim() == "le parlement") || (("" + @mot_glossaire).toLowerCase().trim() == "les parlement") || (("" + @mot_glossaire).toLowerCase().trim() == "parlement")`
`@mot_glossaire_trouve = 1`

✅ **Mot trouvé.**

1. [Afficher la définition de « Parlement »](SCR_GLO_0101)

`endif`

`if (("" + @mot_glossaire).toLowerCase().trim() == "la parlement europeen") || (("" + @mot_glossaire).toLowerCase().trim() == "la parlement européen") || (("" + @mot_glossaire).toLowerCase().trim() == "le parlement europeen") || (("" + @mot_glossaire).toLowerCase().trim() == "le parlement européen") || (("" + @mot_glossaire).toLowerCase().trim() == "les parlement europeen") || (("" + @mot_glossaire).toLowerCase().trim() == "les parlement européen") || (("" + @mot_glossaire).toLowerCase().trim() == "parlement europeen") || (("" + @mot_glossaire).toLowerCase().trim() == "parlement européen")`
`@mot_glossaire_trouve = 1`

✅ **Mot trouvé.**

1. [Afficher la définition de « Parlement européen »](SCR_GLO_0102)

`endif`

`if (("" + @mot_glossaire).toLowerCase().trim() == "la patrimoine") || (("" + @mot_glossaire).toLowerCase().trim() == "le patrimoine") || (("" + @mot_glossaire).toLowerCase().trim() == "les patrimoine") || (("" + @mot_glossaire).toLowerCase().trim() == "patrimoine")`
`@mot_glossaire_trouve = 1`

✅ **Mot trouvé.**

1. [Afficher la définition de « Patrimoine »](SCR_GLO_0103)

`endif`

`if (("" + @mot_glossaire).toLowerCase().trim() == "la police") || (("" + @mot_glossaire).toLowerCase().trim() == "le police") || (("" + @mot_glossaire).toLowerCase().trim() == "les police") || (("" + @mot_glossaire).toLowerCase().trim() == "police")`
`@mot_glossaire_trouve = 1`

✅ **Mot trouvé.**

1. [Afficher la définition de « Police »](SCR_GLO_0104)

`endif`

`if (("" + @mot_glossaire).toLowerCase().trim() == "la prefecture") || (("" + @mot_glossaire).toLowerCase().trim() == "la préfecture") || (("" + @mot_glossaire).toLowerCase().trim() == "le prefecture") || (("" + @mot_glossaire).toLowerCase().trim() == "le préfecture") || (("" + @mot_glossaire).toLowerCase().trim() == "les prefecture") || (("" + @mot_glossaire).toLowerCase().trim() == "les préfecture") || (("" + @mot_glossaire).toLowerCase().trim() == "prefecture") || (("" + @mot_glossaire).toLowerCase().trim() == "préfecture")`
`@mot_glossaire_trouve = 1`

✅ **Mot trouvé.**

1. [Afficher la définition de « Préfecture »](SCR_GLO_0105)

`endif`

`if (("" + @mot_glossaire).toLowerCase().trim() == "la prefet") || (("" + @mot_glossaire).toLowerCase().trim() == "la préfet") || (("" + @mot_glossaire).toLowerCase().trim() == "le prefet") || (("" + @mot_glossaire).toLowerCase().trim() == "le préfet") || (("" + @mot_glossaire).toLowerCase().trim() == "les prefet") || (("" + @mot_glossaire).toLowerCase().trim() == "les préfet") || (("" + @mot_glossaire).toLowerCase().trim() == "prefet") || (("" + @mot_glossaire).toLowerCase().trim() == "préfet")`
`@mot_glossaire_trouve = 1`

✅ **Mot trouvé.**

1. [Afficher la définition de « Préfet »](SCR_GLO_0106)

`endif`

`if (("" + @mot_glossaire).toLowerCase().trim() == "la premier ministre") || (("" + @mot_glossaire).toLowerCase().trim() == "le premier ministre") || (("" + @mot_glossaire).toLowerCase().trim() == "les premier ministre") || (("" + @mot_glossaire).toLowerCase().trim() == "premier ministre")`
`@mot_glossaire_trouve = 1`

✅ **Mot trouvé.**

1. [Afficher la définition de « Premier ministre »](SCR_GLO_0107)

`endif`

`if (("" + @mot_glossaire).toLowerCase().trim() == "la premiere guerre mondiale") || (("" + @mot_glossaire).toLowerCase().trim() == "la première guerre mondiale") || (("" + @mot_glossaire).toLowerCase().trim() == "le premiere guerre mondiale") || (("" + @mot_glossaire).toLowerCase().trim() == "le première guerre mondiale") || (("" + @mot_glossaire).toLowerCase().trim() == "les premiere guerre mondiale") || (("" + @mot_glossaire).toLowerCase().trim() == "les première guerre mondiale") || (("" + @mot_glossaire).toLowerCase().trim() == "premiere guerre mondiale") || (("" + @mot_glossaire).toLowerCase().trim() == "première guerre mondiale")`
`@mot_glossaire_trouve = 1`

✅ **Mot trouvé.**

1. [Afficher la définition de « Première Guerre mondiale »](SCR_GLO_0108)

`endif`

`if (("" + @mot_glossaire).toLowerCase().trim() == "la president de la republique") || (("" + @mot_glossaire).toLowerCase().trim() == "la président de la république") || (("" + @mot_glossaire).toLowerCase().trim() == "le president de la republique") || (("" + @mot_glossaire).toLowerCase().trim() == "le président de la république") || (("" + @mot_glossaire).toLowerCase().trim() == "les president de la republique") || (("" + @mot_glossaire).toLowerCase().trim() == "les président de la république") || (("" + @mot_glossaire).toLowerCase().trim() == "president de la republique") || (("" + @mot_glossaire).toLowerCase().trim() == "président de la république")`
`@mot_glossaire_trouve = 1`

✅ **Mot trouvé.**

1. [Afficher la définition de « Président de la République »](SCR_GLO_0109)

`endif`

`if (("" + @mot_glossaire).toLowerCase().trim() == "la presomption d innocence") || (("" + @mot_glossaire).toLowerCase().trim() == "la présomption d'innocence") || (("" + @mot_glossaire).toLowerCase().trim() == "le presomption d innocence") || (("" + @mot_glossaire).toLowerCase().trim() == "le présomption d'innocence") || (("" + @mot_glossaire).toLowerCase().trim() == "les presomption d innocence") || (("" + @mot_glossaire).toLowerCase().trim() == "les présomption d'innocence") || (("" + @mot_glossaire).toLowerCase().trim() == "presomption d innocence") || (("" + @mot_glossaire).toLowerCase().trim() == "présomption d'innocence")`
`@mot_glossaire_trouve = 1`

✅ **Mot trouvé.**

1. [Afficher la définition de « Présomption d'innocence »](SCR_GLO_0110)

`endif`

`if (("" + @mot_glossaire).toLowerCase().trim() == "la procuration") || (("" + @mot_glossaire).toLowerCase().trim() == "le procuration") || (("" + @mot_glossaire).toLowerCase().trim() == "les procuration") || (("" + @mot_glossaire).toLowerCase().trim() == "procuration")`
`@mot_glossaire_trouve = 1`

✅ **Mot trouvé.**

1. [Afficher la définition de « Procuration »](SCR_GLO_0111)

`endif`

`if (("" + @mot_glossaire).toLowerCase().trim() == "la proprietaire") || (("" + @mot_glossaire).toLowerCase().trim() == "la propriétaire") || (("" + @mot_glossaire).toLowerCase().trim() == "le proprietaire") || (("" + @mot_glossaire).toLowerCase().trim() == "le propriétaire") || (("" + @mot_glossaire).toLowerCase().trim() == "les proprietaire") || (("" + @mot_glossaire).toLowerCase().trim() == "les propriétaire") || (("" + @mot_glossaire).toLowerCase().trim() == "proprietaire") || (("" + @mot_glossaire).toLowerCase().trim() == "propriétaire")`
`@mot_glossaire_trouve = 1`

✅ **Mot trouvé.**

1. [Afficher la définition de « Propriétaire »](SCR_GLO_0112)

`endif`

`if (("" + @mot_glossaire).toLowerCase().trim() == "la prostitution") || (("" + @mot_glossaire).toLowerCase().trim() == "le prostitution") || (("" + @mot_glossaire).toLowerCase().trim() == "les prostitution") || (("" + @mot_glossaire).toLowerCase().trim() == "prostitution")`
`@mot_glossaire_trouve = 1`

✅ **Mot trouvé.**

1. [Afficher la définition de « Prostitution »](SCR_GLO_0113)

`endif`

`if (("" + @mot_glossaire).toLowerCase().trim() == "la provence alpes cote d azur") || (("" + @mot_glossaire).toLowerCase().trim() == "la provence-alpes-côte d'azur") || (("" + @mot_glossaire).toLowerCase().trim() == "le provence alpes cote d azur") || (("" + @mot_glossaire).toLowerCase().trim() == "le provence-alpes-côte d'azur") || (("" + @mot_glossaire).toLowerCase().trim() == "les provence alpes cote d azur") || (("" + @mot_glossaire).toLowerCase().trim() == "les provence-alpes-côte d'azur") || (("" + @mot_glossaire).toLowerCase().trim() == "provence alpes cote d azur") || (("" + @mot_glossaire).toLowerCase().trim() == "provence-alpes-côte d'azur")`
`@mot_glossaire_trouve = 1`

✅ **Mot trouvé.**

1. [Afficher la définition de « Provence-Alpes-Côte d'Azur »](SCR_GLO_0114)

`endif`

`if (("" + @mot_glossaire).toLowerCase().trim() == "la pyrenees") || (("" + @mot_glossaire).toLowerCase().trim() == "la pyrénées") || (("" + @mot_glossaire).toLowerCase().trim() == "le pyrenees") || (("" + @mot_glossaire).toLowerCase().trim() == "le pyrénées") || (("" + @mot_glossaire).toLowerCase().trim() == "les pyrenees") || (("" + @mot_glossaire).toLowerCase().trim() == "les pyrénées") || (("" + @mot_glossaire).toLowerCase().trim() == "pyrenees") || (("" + @mot_glossaire).toLowerCase().trim() == "pyrénées")`
`@mot_glossaire_trouve = 1`

✅ **Mot trouvé.**

1. [Afficher la définition de « Pyrénées »](SCR_GLO_0115)

`endif`

`if (("" + @mot_glossaire).toLowerCase().trim() == "la referendum") || (("" + @mot_glossaire).toLowerCase().trim() == "la référendum") || (("" + @mot_glossaire).toLowerCase().trim() == "le referendum") || (("" + @mot_glossaire).toLowerCase().trim() == "le référendum") || (("" + @mot_glossaire).toLowerCase().trim() == "les referendum") || (("" + @mot_glossaire).toLowerCase().trim() == "les référendum") || (("" + @mot_glossaire).toLowerCase().trim() == "referendum") || (("" + @mot_glossaire).toLowerCase().trim() == "référendum")`
`@mot_glossaire_trouve = 1`

✅ **Mot trouvé.**

1. [Afficher la définition de « Référendum »](SCR_GLO_0116)

`endif`

`if (("" + @mot_glossaire).toLowerCase().trim() == "la region") || (("" + @mot_glossaire).toLowerCase().trim() == "la région") || (("" + @mot_glossaire).toLowerCase().trim() == "le region") || (("" + @mot_glossaire).toLowerCase().trim() == "le région") || (("" + @mot_glossaire).toLowerCase().trim() == "les region") || (("" + @mot_glossaire).toLowerCase().trim() == "les région") || (("" + @mot_glossaire).toLowerCase().trim() == "region") || (("" + @mot_glossaire).toLowerCase().trim() == "région")`
`@mot_glossaire_trouve = 1`

✅ **Mot trouvé.**

1. [Afficher la définition de « Région »](SCR_GLO_0117)

`endif`

`if (("" + @mot_glossaire).toLowerCase().trim() == "la republique") || (("" + @mot_glossaire).toLowerCase().trim() == "la république") || (("" + @mot_glossaire).toLowerCase().trim() == "le republique") || (("" + @mot_glossaire).toLowerCase().trim() == "le république") || (("" + @mot_glossaire).toLowerCase().trim() == "les republique") || (("" + @mot_glossaire).toLowerCase().trim() == "les république") || (("" + @mot_glossaire).toLowerCase().trim() == "republique") || (("" + @mot_glossaire).toLowerCase().trim() == "république")`
`@mot_glossaire_trouve = 1`

✅ **Mot trouvé.**

1. [Afficher la définition de « République »](SCR_GLO_0118)

`endif`

`if (("" + @mot_glossaire).toLowerCase().trim() == "la revolution francaise") || (("" + @mot_glossaire).toLowerCase().trim() == "la révolution française") || (("" + @mot_glossaire).toLowerCase().trim() == "le revolution francaise") || (("" + @mot_glossaire).toLowerCase().trim() == "le révolution française") || (("" + @mot_glossaire).toLowerCase().trim() == "les revolution francaise") || (("" + @mot_glossaire).toLowerCase().trim() == "les révolution française") || (("" + @mot_glossaire).toLowerCase().trim() == "revolution francaise") || (("" + @mot_glossaire).toLowerCase().trim() == "révolution française")`
`@mot_glossaire_trouve = 1`

✅ **Mot trouvé.**

1. [Afficher la définition de « Révolution française »](SCR_GLO_0119)

`endif`

`if (("" + @mot_glossaire).toLowerCase().trim() == "la salaire") || (("" + @mot_glossaire).toLowerCase().trim() == "le salaire") || (("" + @mot_glossaire).toLowerCase().trim() == "les salaire") || (("" + @mot_glossaire).toLowerCase().trim() == "salaire")`
`@mot_glossaire_trouve = 1`

✅ **Mot trouvé.**

1. [Afficher la définition de « Salaire »](SCR_GLO_0120)

`endif`

`if (("" + @mot_glossaire).toLowerCase().trim() == "la seconde guerre mondiale") || (("" + @mot_glossaire).toLowerCase().trim() == "le seconde guerre mondiale") || (("" + @mot_glossaire).toLowerCase().trim() == "les seconde guerre mondiale") || (("" + @mot_glossaire).toLowerCase().trim() == "seconde guerre mondiale")`
`@mot_glossaire_trouve = 1`

✅ **Mot trouvé.**

1. [Afficher la définition de « Seconde Guerre mondiale »](SCR_GLO_0121)

`endif`

`if (("" + @mot_glossaire).toLowerCase().trim() == "la seine") || (("" + @mot_glossaire).toLowerCase().trim() == "le seine") || (("" + @mot_glossaire).toLowerCase().trim() == "les seine") || (("" + @mot_glossaire).toLowerCase().trim() == "seine")`
`@mot_glossaire_trouve = 1`

✅ **Mot trouvé.**

1. [Afficher la définition de « Seine »](SCR_GLO_0122)

`endif`

`if (("" + @mot_glossaire).toLowerCase().trim() == "la senat") || (("" + @mot_glossaire).toLowerCase().trim() == "la sénat") || (("" + @mot_glossaire).toLowerCase().trim() == "le senat") || (("" + @mot_glossaire).toLowerCase().trim() == "le sénat") || (("" + @mot_glossaire).toLowerCase().trim() == "les senat") || (("" + @mot_glossaire).toLowerCase().trim() == "les sénat") || (("" + @mot_glossaire).toLowerCase().trim() == "senat") || (("" + @mot_glossaire).toLowerCase().trim() == "sénat")`
`@mot_glossaire_trouve = 1`

✅ **Mot trouvé.**

1. [Afficher la définition de « Sénat »](SCR_GLO_0123)

`endif`

`if (("" + @mot_glossaire).toLowerCase().trim() == "la senateur") || (("" + @mot_glossaire).toLowerCase().trim() == "la sénateur") || (("" + @mot_glossaire).toLowerCase().trim() == "le senateur") || (("" + @mot_glossaire).toLowerCase().trim() == "le sénateur") || (("" + @mot_glossaire).toLowerCase().trim() == "les senateur") || (("" + @mot_glossaire).toLowerCase().trim() == "les sénateur") || (("" + @mot_glossaire).toLowerCase().trim() == "senateur") || (("" + @mot_glossaire).toLowerCase().trim() == "sénateur")`
`@mot_glossaire_trouve = 1`

✅ **Mot trouvé.**

1. [Afficher la définition de « Sénateur »](SCR_GLO_0124)

`endif`

`if (("" + @mot_glossaire).toLowerCase().trim() == "la service public") || (("" + @mot_glossaire).toLowerCase().trim() == "le service public") || (("" + @mot_glossaire).toLowerCase().trim() == "les service public") || (("" + @mot_glossaire).toLowerCase().trim() == "service public")`
`@mot_glossaire_trouve = 1`

✅ **Mot trouvé.**

1. [Afficher la définition de « Service public »](SCR_GLO_0125)

`endif`

`if (("" + @mot_glossaire).toLowerCase().trim() == "la souverainete nationale") || (("" + @mot_glossaire).toLowerCase().trim() == "la souveraineté nationale") || (("" + @mot_glossaire).toLowerCase().trim() == "le souverainete nationale") || (("" + @mot_glossaire).toLowerCase().trim() == "le souveraineté nationale") || (("" + @mot_glossaire).toLowerCase().trim() == "les souverainete nationale") || (("" + @mot_glossaire).toLowerCase().trim() == "les souveraineté nationale") || (("" + @mot_glossaire).toLowerCase().trim() == "souverainete nationale") || (("" + @mot_glossaire).toLowerCase().trim() == "souveraineté nationale")`
`@mot_glossaire_trouve = 1`

✅ **Mot trouvé.**

1. [Afficher la définition de « Souveraineté nationale »](SCR_GLO_0126)

`endif`

`if (("" + @mot_glossaire).toLowerCase().trim() == "la suffrage universel") || (("" + @mot_glossaire).toLowerCase().trim() == "le suffrage universel") || (("" + @mot_glossaire).toLowerCase().trim() == "les suffrage universel") || (("" + @mot_glossaire).toLowerCase().trim() == "suffrage universel")`
`@mot_glossaire_trouve = 1`

✅ **Mot trouvé.**

1. [Afficher la définition de « Suffrage universel »](SCR_GLO_0127)

`endif`

`if (("" + @mot_glossaire).toLowerCase().trim() == "la surete") || (("" + @mot_glossaire).toLowerCase().trim() == "la sûreté") || (("" + @mot_glossaire).toLowerCase().trim() == "le surete") || (("" + @mot_glossaire).toLowerCase().trim() == "le sûreté") || (("" + @mot_glossaire).toLowerCase().trim() == "les surete") || (("" + @mot_glossaire).toLowerCase().trim() == "les sûreté") || (("" + @mot_glossaire).toLowerCase().trim() == "surete") || (("" + @mot_glossaire).toLowerCase().trim() == "sûreté")`
`@mot_glossaire_trouve = 1`

✅ **Mot trouvé.**

1. [Afficher la définition de « Sûreté »](SCR_GLO_0128)

`endif`

`if (("" + @mot_glossaire).toLowerCase().trim() == "la titre de sejour") || (("" + @mot_glossaire).toLowerCase().trim() == "la titre de séjour") || (("" + @mot_glossaire).toLowerCase().trim() == "le titre de sejour") || (("" + @mot_glossaire).toLowerCase().trim() == "le titre de séjour") || (("" + @mot_glossaire).toLowerCase().trim() == "les titre de sejour") || (("" + @mot_glossaire).toLowerCase().trim() == "les titre de séjour") || (("" + @mot_glossaire).toLowerCase().trim() == "titre de sejour") || (("" + @mot_glossaire).toLowerCase().trim() == "titre de séjour")`
`@mot_glossaire_trouve = 1`

✅ **Mot trouvé.**

1. [Afficher la définition de « Titre de séjour »](SCR_GLO_0129)

`endif`

`if (("" + @mot_glossaire).toLowerCase().trim() == "la tour eiffel") || (("" + @mot_glossaire).toLowerCase().trim() == "le tour eiffel") || (("" + @mot_glossaire).toLowerCase().trim() == "les tour eiffel") || (("" + @mot_glossaire).toLowerCase().trim() == "tour eiffel")`
`@mot_glossaire_trouve = 1`

✅ **Mot trouvé.**

1. [Afficher la définition de « Tour Eiffel »](SCR_GLO_0130)

`endif`

`if (("" + @mot_glossaire).toLowerCase().trim() == "la traite des etres humains") || (("" + @mot_glossaire).toLowerCase().trim() == "la traite des êtres humains") || (("" + @mot_glossaire).toLowerCase().trim() == "le traite des etres humains") || (("" + @mot_glossaire).toLowerCase().trim() == "le traite des êtres humains") || (("" + @mot_glossaire).toLowerCase().trim() == "les traite des etres humains") || (("" + @mot_glossaire).toLowerCase().trim() == "les traite des êtres humains") || (("" + @mot_glossaire).toLowerCase().trim() == "traite des etres humains") || (("" + @mot_glossaire).toLowerCase().trim() == "traite des êtres humains")`
`@mot_glossaire_trouve = 1`

✅ **Mot trouvé.**

1. [Afficher la définition de « Traite des êtres humains »](SCR_GLO_0131)

`endif`

`if (("" + @mot_glossaire).toLowerCase().trim() == "la unesco") || (("" + @mot_glossaire).toLowerCase().trim() == "le unesco") || (("" + @mot_glossaire).toLowerCase().trim() == "les unesco") || (("" + @mot_glossaire).toLowerCase().trim() == "unesco")`
`@mot_glossaire_trouve = 1`

✅ **Mot trouvé.**

1. [Afficher la définition de « UNESCO »](SCR_GLO_0132)

`endif`

`if (("" + @mot_glossaire).toLowerCase().trim() == "la union europeenne") || (("" + @mot_glossaire).toLowerCase().trim() == "la union européenne") || (("" + @mot_glossaire).toLowerCase().trim() == "le union europeenne") || (("" + @mot_glossaire).toLowerCase().trim() == "le union européenne") || (("" + @mot_glossaire).toLowerCase().trim() == "les union europeenne") || (("" + @mot_glossaire).toLowerCase().trim() == "les union européenne") || (("" + @mot_glossaire).toLowerCase().trim() == "union europeenne") || (("" + @mot_glossaire).toLowerCase().trim() == "union européenne")`
`@mot_glossaire_trouve = 1`

✅ **Mot trouvé.**

1. [Afficher la définition de « Union européenne »](SCR_GLO_0133)

`endif`

`if (("" + @mot_glossaire).toLowerCase().trim() == "la urgences") || (("" + @mot_glossaire).toLowerCase().trim() == "le urgences") || (("" + @mot_glossaire).toLowerCase().trim() == "les urgences") || (("" + @mot_glossaire).toLowerCase().trim() == "urgences")`
`@mot_glossaire_trouve = 1`

✅ **Mot trouvé.**

1. [Afficher la définition de « Urgences »](SCR_GLO_0134)

`endif`

`if (("" + @mot_glossaire).toLowerCase().trim() == "la vercingetorix") || (("" + @mot_glossaire).toLowerCase().trim() == "la vercingétorix") || (("" + @mot_glossaire).toLowerCase().trim() == "le vercingetorix") || (("" + @mot_glossaire).toLowerCase().trim() == "le vercingétorix") || (("" + @mot_glossaire).toLowerCase().trim() == "les vercingetorix") || (("" + @mot_glossaire).toLowerCase().trim() == "les vercingétorix") || (("" + @mot_glossaire).toLowerCase().trim() == "vercingetorix") || (("" + @mot_glossaire).toLowerCase().trim() == "vercingétorix")`
`@mot_glossaire_trouve = 1`

✅ **Mot trouvé.**

1. [Afficher la définition de « Vercingétorix »](SCR_GLO_0135)

`endif`

`if (("" + @mot_glossaire).toLowerCase().trim() == "la violence") || (("" + @mot_glossaire).toLowerCase().trim() == "le violence") || (("" + @mot_glossaire).toLowerCase().trim() == "les violence") || (("" + @mot_glossaire).toLowerCase().trim() == "violence")`
`@mot_glossaire_trouve = 1`

✅ **Mot trouvé.**

1. [Afficher la définition de « Violence »](SCR_GLO_0136)

`endif`

`if (("" + @mot_glossaire).toLowerCase().trim() == "la vote") || (("" + @mot_glossaire).toLowerCase().trim() == "le vote") || (("" + @mot_glossaire).toLowerCase().trim() == "les vote") || (("" + @mot_glossaire).toLowerCase().trim() == "vote")`
`@mot_glossaire_trouve = 1`

✅ **Mot trouvé.**

1. [Afficher la définition de « Vote »](SCR_GLO_0137)

`endif`

`if @mot_glossaire_trouve == 0`

❌ **Ce mot n’a pas été trouvé dans le glossaire.**

Vérifiez son orthographe ou parcourez les listes.

`endif`

1. [🔍 Faire une nouvelle recherche](SCR_GLO_SEARCH)
2. [🔤 Parcourir par ordre alphabétique](SCR_GLO_ALPHA_MENU)
3. [📚 Parcourir par thème](SCR_GLO_THEME_MENU)

## SCR_GLO_ALPHA_MENU

### 🔤 Parcourir par ordre alphabétique

1. [A–C](SCR_GLO_ALPHA_AC)
2. [D–F](SCR_GLO_ALPHA_DF)
3. [G–L](SCR_GLO_ALPHA_GL)
4. [M–P](SCR_GLO_ALPHA_MP)
5. [Q–S](SCR_GLO_ALPHA_QS)
6. [T–Z](SCR_GLO_ALPHA_TZ)
7. [↩️ Retour au glossaire](SCR_GLO_MENU)

## SCR_GLO_ALPHA_AC

### Mots de A–C

1. [Abstention](SCR_GLO_0001)
2. [Alpes](SCR_GLO_0002)
3. [APL](SCR_GLO_0003)
4. [Assemblée nationale](SCR_GLO_0004)
5. [Assistance à personne en danger](SCR_GLO_0005)
6. [Assurance maladie](SCR_GLO_0006)
7. [Bail](SCR_GLO_0007)
8. [Bretagne](SCR_GLO_0008)
9. [CAF](SCR_GLO_0009)
10. [Carte de résident](SCR_GLO_0010)
11. [Carte Vitale](SCR_GLO_0011)
12. [CDD](SCR_GLO_0012)
13. [CDI](SCR_GLO_0013)
14. [Celtes](SCR_GLO_0014)
15. [Charlemagne](SCR_GLO_0015)
16. [Charte de l'environnement](SCR_GLO_0016)
17. [Château de Versailles](SCR_GLO_0017)
18. [Cinquième République](SCR_GLO_0018)
19. [Citoyen](SCR_GLO_0019)
20. [Citoyenneté](SCR_GLO_0020)
21. [Clovis](SCR_GLO_0021)
22. [Collège](SCR_GLO_0022)
23. [Commission européenne](SCR_GLO_0023)
24. [Commune](SCR_GLO_0024)
25. [Conseil constitutionnel](SCR_GLO_0025)
26. [Conseil de l'Union européenne](SCR_GLO_0026)
27. [Conseil départemental](SCR_GLO_0027)
28. [Conseil européen](SCR_GLO_0028)
29. [Conseil municipal](SCR_GLO_0029)
30. [Conseil régional](SCR_GLO_0030)
31. [Consentement](SCR_GLO_0031)
32. [Constitution](SCR_GLO_0032)
33. [Contrat d'engagement à respecter les principes de la République](SCR_GLO_0033)
34. [Contrat de travail](SCR_GLO_0034)
35. [Contravention](SCR_GLO_0035)
36. [CPAM](SCR_GLO_0036)
37. [Crime](SCR_GLO_0037)
38. [↩️ Retour aux lettres](SCR_GLO_ALPHA_MENU)

## SCR_GLO_ALPHA_DF

### Mots de D–F

1. [Déclaration des droits de l'homme et du citoyen](SCR_GLO_0038)
2. [Délit](SCR_GLO_0039)
3. [Démocratie](SCR_GLO_0040)
4. [Département](SCR_GLO_0041)
5. [Député](SCR_GLO_0042)
6. [Député européen](SCR_GLO_0043)
7. [Devise de la République](SCR_GLO_0044)
8. [Dignité humaine](SCR_GLO_0045)
9. [Drapeau français](SCR_GLO_0046)
10. [Droits fondamentaux](SCR_GLO_0047)
11. [École](SCR_GLO_0048)
12. [Égalité](SCR_GLO_0049)
13. [Élection](SCR_GLO_0050)
14. [Employeur](SCR_GLO_0051)
15. [Environnement](SCR_GLO_0052)
16. [Espace Schengen](SCR_GLO_0053)
17. [État](SCR_GLO_0054)
18. [Euro](SCR_GLO_0055)
19. [Fête de la Musique](SCR_GLO_0056)
20. [Fête nationale](SCR_GLO_0057)
21. [France métropolitaine](SCR_GLO_0058)
22. [France Services](SCR_GLO_0059)
23. [France Travail](SCR_GLO_0060)
24. [Francophonie](SCR_GLO_0061)
25. [Fraternité](SCR_GLO_0062)
26. [↩️ Retour aux lettres](SCR_GLO_ALPHA_MENU)

## SCR_GLO_ALPHA_GL

### Mots de G–L

1. [Gastronomie française](SCR_GLO_0063)
2. [Gaule](SCR_GLO_0064)
3. [Gendarmerie](SCR_GLO_0065)
4. [Gouvernement](SCR_GLO_0066)
5. [Guadeloupe](SCR_GLO_0067)
6. [Guyane](SCR_GLO_0068)
7. [Harcèlement](SCR_GLO_0069)
8. [Harcèlement scolaire](SCR_GLO_0070)
9. [Hôpital](SCR_GLO_0071)
10. [Île-de-France](SCR_GLO_0072)
11. [Impôt](SCR_GLO_0073)
12. [Infraction](SCR_GLO_0074)
13. [Intégrité de la personne](SCR_GLO_0075)
14. [Journées européennes du patrimoine](SCR_GLO_0076)
15. [Justice](SCR_GLO_0077)
16. [La Marseillaise](SCR_GLO_0078)
17. [La Réunion](SCR_GLO_0079)
18. [Laïcité](SCR_GLO_0080)
19. [Langue de la République](SCR_GLO_0081)
20. [Liberté](SCR_GLO_0082)
21. [Liberté de conscience](SCR_GLO_0083)
22. [Locataire](SCR_GLO_0084)
23. [Loi](SCR_GLO_0085)
24. [Lycée](SCR_GLO_0086)
25. [↩️ Retour aux lettres](SCR_GLO_ALPHA_MENU)

## SCR_GLO_ALPHA_MP

### Mots de M–P

1. [Maire](SCR_GLO_0087)
2. [Mairie](SCR_GLO_0088)
3. [Marianne](SCR_GLO_0089)
4. [Martinique](SCR_GLO_0090)
5. [Mayotte](SCR_GLO_0091)
6. [Médecin traitant](SCR_GLO_0092)
7. [Ministre](SCR_GLO_0093)
8. [Mont-Saint-Michel](SCR_GLO_0094)
9. [Musée du Louvre](SCR_GLO_0095)
10. [Mutilations sexuelles féminines](SCR_GLO_0096)
11. [Naturalisation](SCR_GLO_0097)
12. [Neutralité](SCR_GLO_0098)
13. [Ordre public](SCR_GLO_0099)
14. [Outre-mer](SCR_GLO_0100)
15. [Parlement](SCR_GLO_0101)
16. [Parlement européen](SCR_GLO_0102)
17. [Patrimoine](SCR_GLO_0103)
18. [Police](SCR_GLO_0104)
19. [Préfecture](SCR_GLO_0105)
20. [Préfet](SCR_GLO_0106)
21. [Premier ministre](SCR_GLO_0107)
22. [Première Guerre mondiale](SCR_GLO_0108)
23. [Président de la République](SCR_GLO_0109)
24. [Présomption d'innocence](SCR_GLO_0110)
25. [Procuration](SCR_GLO_0111)
26. [Propriétaire](SCR_GLO_0112)
27. [Prostitution](SCR_GLO_0113)
28. [Provence-Alpes-Côte d'Azur](SCR_GLO_0114)
29. [Pyrénées](SCR_GLO_0115)
30. [↩️ Retour aux lettres](SCR_GLO_ALPHA_MENU)

## SCR_GLO_ALPHA_QS

### Mots de Q–S

1. [Référendum](SCR_GLO_0116)
2. [Région](SCR_GLO_0117)
3. [République](SCR_GLO_0118)
4. [Révolution française](SCR_GLO_0119)
5. [Salaire](SCR_GLO_0120)
6. [Seconde Guerre mondiale](SCR_GLO_0121)
7. [Seine](SCR_GLO_0122)
8. [Sénat](SCR_GLO_0123)
9. [Sénateur](SCR_GLO_0124)
10. [Service public](SCR_GLO_0125)
11. [Souveraineté nationale](SCR_GLO_0126)
12. [Suffrage universel](SCR_GLO_0127)
13. [Sûreté](SCR_GLO_0128)
14. [↩️ Retour aux lettres](SCR_GLO_ALPHA_MENU)

## SCR_GLO_ALPHA_TZ

### Mots de T–Z

1. [Titre de séjour](SCR_GLO_0129)
2. [Tour Eiffel](SCR_GLO_0130)
3. [Traite des êtres humains](SCR_GLO_0131)
4. [UNESCO](SCR_GLO_0132)
5. [Union européenne](SCR_GLO_0133)
6. [Urgences](SCR_GLO_0134)
7. [Vercingétorix](SCR_GLO_0135)
8. [Violence](SCR_GLO_0136)
9. [Vote](SCR_GLO_0137)
10. [↩️ Retour aux lettres](SCR_GLO_ALPHA_MENU)

## SCR_GLO_THEME_MENU

### 📚 Parcourir par thème

1. [Principes et valeurs de la République](SCR_GLO_THEME_T1)
2. [Système institutionnel et politique](SCR_GLO_THEME_T2)
3. [Droits et devoirs](SCR_GLO_THEME_T3)
4. [Histoire, géographie et culture](SCR_GLO_THEME_T4)
5. [Vivre dans la société française](SCR_GLO_THEME_T5)
6. [↩️ Retour au glossaire](SCR_GLO_MENU)

## SCR_GLO_THEME_T1

### Principes et valeurs de la République

1. [Citoyen](SCR_GLO_0019)
2. [Constitution](SCR_GLO_0032)
3. [Contrat d'engagement à respecter les principes de la République](SCR_GLO_0033)
4. [Démocratie](SCR_GLO_0040)
5. [Devise de la République](SCR_GLO_0044)
6. [Drapeau français](SCR_GLO_0046)
7. [Égalité](SCR_GLO_0049)
8. [Fête nationale](SCR_GLO_0057)
9. [Fraternité](SCR_GLO_0062)
10. [La Marseillaise](SCR_GLO_0078)
11. [Laïcité](SCR_GLO_0080)
12. [Langue de la République](SCR_GLO_0081)
13. [Liberté](SCR_GLO_0082)
14. [Liberté de conscience](SCR_GLO_0083)
15. [Marianne](SCR_GLO_0089)
16. [Neutralité](SCR_GLO_0098)
17. [République](SCR_GLO_0118)
18. [Souveraineté nationale](SCR_GLO_0126)
19. [↩️ Retour aux thèmes](SCR_GLO_THEME_MENU)

## SCR_GLO_THEME_T2

### Système institutionnel et politique

1. [Abstention](SCR_GLO_0001)
2. [Assemblée nationale](SCR_GLO_0004)
3. [Commission européenne](SCR_GLO_0023)
4. [Commune](SCR_GLO_0024)
5. [Conseil constitutionnel](SCR_GLO_0025)
6. [Conseil de l'Union européenne](SCR_GLO_0026)
7. [Conseil départemental](SCR_GLO_0027)
8. [Conseil européen](SCR_GLO_0028)
9. [Conseil municipal](SCR_GLO_0029)
10. [Conseil régional](SCR_GLO_0030)
11. [Département](SCR_GLO_0041)
12. [Député](SCR_GLO_0042)
13. [Député européen](SCR_GLO_0043)
14. [Élection](SCR_GLO_0050)
15. [Espace Schengen](SCR_GLO_0053)
16. [État](SCR_GLO_0054)
17. [Euro](SCR_GLO_0055)
18. [Gouvernement](SCR_GLO_0066)
19. [Justice](SCR_GLO_0077)
20. [Maire](SCR_GLO_0087)
21. [Ministre](SCR_GLO_0093)
22. [Parlement](SCR_GLO_0101)
23. [Parlement européen](SCR_GLO_0102)
24. [Préfet](SCR_GLO_0106)
25. [Premier ministre](SCR_GLO_0107)
26. [Président de la République](SCR_GLO_0109)
27. [Procuration](SCR_GLO_0111)
28. [Référendum](SCR_GLO_0116)
29. [Région](SCR_GLO_0117)
30. [Sénat](SCR_GLO_0123)
31. [Sénateur](SCR_GLO_0124)
32. [Suffrage universel](SCR_GLO_0127)
33. [Union européenne](SCR_GLO_0133)
34. [Vote](SCR_GLO_0137)
35. [↩️ Retour aux thèmes](SCR_GLO_THEME_MENU)

## SCR_GLO_THEME_T3

### Droits et devoirs

1. [Assistance à personne en danger](SCR_GLO_0005)
2. [Charte de l'environnement](SCR_GLO_0016)
3. [Citoyenneté](SCR_GLO_0020)
4. [Consentement](SCR_GLO_0031)
5. [Contravention](SCR_GLO_0035)
6. [Crime](SCR_GLO_0037)
7. [Déclaration des droits de l'homme et du citoyen](SCR_GLO_0038)
8. [Délit](SCR_GLO_0039)
9. [Dignité humaine](SCR_GLO_0045)
10. [Droits fondamentaux](SCR_GLO_0047)
11. [Égalité](SCR_GLO_0049)
12. [Environnement](SCR_GLO_0052)
13. [Gendarmerie](SCR_GLO_0065)
14. [Harcèlement](SCR_GLO_0069)
15. [Harcèlement scolaire](SCR_GLO_0070)
16. [Impôt](SCR_GLO_0073)
17. [Infraction](SCR_GLO_0074)
18. [Intégrité de la personne](SCR_GLO_0075)
19. [Liberté](SCR_GLO_0082)
20. [Loi](SCR_GLO_0085)
21. [Mutilations sexuelles féminines](SCR_GLO_0096)
22. [Ordre public](SCR_GLO_0099)
23. [Police](SCR_GLO_0104)
24. [Présomption d'innocence](SCR_GLO_0110)
25. [Prostitution](SCR_GLO_0113)
26. [Sûreté](SCR_GLO_0128)
27. [Traite des êtres humains](SCR_GLO_0131)
28. [Violence](SCR_GLO_0136)
29. [↩️ Retour aux thèmes](SCR_GLO_THEME_MENU)

## SCR_GLO_THEME_T4

### Histoire, géographie et culture

1. [Alpes](SCR_GLO_0002)
2. [Bretagne](SCR_GLO_0008)
3. [Celtes](SCR_GLO_0014)
4. [Charlemagne](SCR_GLO_0015)
5. [Château de Versailles](SCR_GLO_0017)
6. [Cinquième République](SCR_GLO_0018)
7. [Clovis](SCR_GLO_0021)
8. [Fête de la Musique](SCR_GLO_0056)
9. [France métropolitaine](SCR_GLO_0058)
10. [Francophonie](SCR_GLO_0061)
11. [Gastronomie française](SCR_GLO_0063)
12. [Gaule](SCR_GLO_0064)
13. [Guadeloupe](SCR_GLO_0067)
14. [Guyane](SCR_GLO_0068)
15. [Île-de-France](SCR_GLO_0072)
16. [Journées européennes du patrimoine](SCR_GLO_0076)
17. [La Réunion](SCR_GLO_0079)
18. [Martinique](SCR_GLO_0090)
19. [Mayotte](SCR_GLO_0091)
20. [Mont-Saint-Michel](SCR_GLO_0094)
21. [Musée du Louvre](SCR_GLO_0095)
22. [Outre-mer](SCR_GLO_0100)
23. [Patrimoine](SCR_GLO_0103)
24. [Première Guerre mondiale](SCR_GLO_0108)
25. [Provence-Alpes-Côte d'Azur](SCR_GLO_0114)
26. [Pyrénées](SCR_GLO_0115)
27. [Révolution française](SCR_GLO_0119)
28. [Seconde Guerre mondiale](SCR_GLO_0121)
29. [Seine](SCR_GLO_0122)
30. [Tour Eiffel](SCR_GLO_0130)
31. [UNESCO](SCR_GLO_0132)
32. [Vercingétorix](SCR_GLO_0135)
33. [↩️ Retour aux thèmes](SCR_GLO_THEME_MENU)

## SCR_GLO_THEME_T5

### Vivre dans la société française

1. [APL](SCR_GLO_0003)
2. [Assurance maladie](SCR_GLO_0006)
3. [Bail](SCR_GLO_0007)
4. [CAF](SCR_GLO_0009)
5. [Carte de résident](SCR_GLO_0010)
6. [Carte Vitale](SCR_GLO_0011)
7. [CDD](SCR_GLO_0012)
8. [CDI](SCR_GLO_0013)
9. [Collège](SCR_GLO_0022)
10. [Contrat de travail](SCR_GLO_0034)
11. [CPAM](SCR_GLO_0036)
12. [École](SCR_GLO_0048)
13. [Employeur](SCR_GLO_0051)
14. [France Services](SCR_GLO_0059)
15. [France Travail](SCR_GLO_0060)
16. [Hôpital](SCR_GLO_0071)
17. [Locataire](SCR_GLO_0084)
18. [Lycée](SCR_GLO_0086)
19. [Mairie](SCR_GLO_0088)
20. [Médecin traitant](SCR_GLO_0092)
21. [Naturalisation](SCR_GLO_0097)
22. [Préfecture](SCR_GLO_0105)
23. [Propriétaire](SCR_GLO_0112)
24. [Salaire](SCR_GLO_0120)
25. [Service public](SCR_GLO_0125)
26. [Titre de séjour](SCR_GLO_0129)
27. [Urgences](SCR_GLO_0134)
28. [↩️ Retour aux thèmes](SCR_GLO_THEME_MENU)

## SCR_GLO_0001

### 📘 Abstention

**Définition**

Fait de ne pas participer à une élection.

💡 **À retenir**

L'abstention est différente du vote blanc.

🔗 **Voir aussi**

1. [Vote](SCR_GLO_0137)

2. [🔍 Rechercher un autre mot](SCR_GLO_SEARCH)
3. [📚 Retour au thème](SCR_GLO_THEME_T2)
4. [📖 Retour au glossaire](SCR_GLO_MENU)

## SCR_GLO_0002

### 📘 Alpes

**Définition**

Massif montagneux situé à l'est de la France.

💡 **À retenir**

Le Mont Blanc est le plus haut sommet d'Europe occidentale.

🔗 **Voir aussi**

1. [Pyrénées](SCR_GLO_0115)

2. [🔍 Rechercher un autre mot](SCR_GLO_SEARCH)
3. [📚 Retour au thème](SCR_GLO_THEME_T4)
4. [📖 Retour au glossaire](SCR_GLO_MENU)

## SCR_GLO_0003

### 📘 APL

**Définition**

Aide personnalisée au logement versée sous certaines conditions.

💡 **À retenir**

Elle permet de réduire le montant du loyer.

🔗 **Voir aussi**

1. [CAF](SCR_GLO_0009)

2. [🔍 Rechercher un autre mot](SCR_GLO_SEARCH)
3. [📚 Retour au thème](SCR_GLO_THEME_T5)
4. [📖 Retour au glossaire](SCR_GLO_MENU)

## SCR_GLO_0004

### 📘 Assemblée nationale

**Définition**

L'Assemblée nationale est composée des députés.

💡 **À retenir**

Les députés sont élus directement par les citoyens.

🔗 **Voir aussi**

1. [Député](SCR_GLO_0042)
2. [Parlement](SCR_GLO_0101)

3. [🔍 Rechercher un autre mot](SCR_GLO_SEARCH)
4. [📚 Retour au thème](SCR_GLO_THEME_T2)
5. [📖 Retour au glossaire](SCR_GLO_MENU)

## SCR_GLO_0005

### 📘 Assistance à personne en danger

**Définition**

Obligation d'aider une personne en danger ou d'alerter les secours lorsqu'il est possible de le faire sans risque.

💡 **À retenir**

Ne pas porter assistance peut être puni par la loi.

1. [🔍 Rechercher un autre mot](SCR_GLO_SEARCH)
2. [📚 Retour au thème](SCR_GLO_THEME_T3)
3. [📖 Retour au glossaire](SCR_GLO_MENU)

## SCR_GLO_0006

### 📘 Assurance maladie

**Définition**

Système de protection sociale qui rembourse tout ou partie des dépenses de santé.

💡 **À retenir**

Toute personne résidant régulièrement en France peut bénéficier d'une couverture maladie selon sa situation.

🔗 **Voir aussi**

1. [Carte Vitale](SCR_GLO_0011)
2. [CPAM](SCR_GLO_0036)
3. [Médecin traitant](SCR_GLO_0092)

4. [🔍 Rechercher un autre mot](SCR_GLO_SEARCH)
5. [📚 Retour au thème](SCR_GLO_THEME_T5)
6. [📖 Retour au glossaire](SCR_GLO_MENU)

## SCR_GLO_0007

### 📘 Bail

**Définition**

Contrat de location entre un propriétaire et un locataire.

💡 **À retenir**

Le bail fixe les droits et obligations de chacun.

1. [🔍 Rechercher un autre mot](SCR_GLO_SEARCH)
2. [📚 Retour au thème](SCR_GLO_THEME_T5)
3. [📖 Retour au glossaire](SCR_GLO_MENU)

## SCR_GLO_0008

### 📘 Bretagne

**Définition**

Région située à l'ouest de la France métropolitaine.

💡 **À retenir**

La Bretagne est connue pour son littoral, sa culture bretonne, ses ports de pêche, ses phares et ses spécialités culinaires comme les crêpes et le kouign-amann.

🔗 **Voir aussi**

1. [Région](SCR_GLO_0117)

2. [🔍 Rechercher un autre mot](SCR_GLO_SEARCH)
3. [📚 Retour au thème](SCR_GLO_THEME_T4)
4. [📖 Retour au glossaire](SCR_GLO_MENU)

## SCR_GLO_0009

### 📘 CAF

**Définition**

La Caisse d'allocations familiales verse différentes aides aux familles et aux personnes selon leur situation.

💡 **À retenir**

La CAF peut aider au paiement du logement.

🔗 **Voir aussi**

1. [APL](SCR_GLO_0003)

2. [🔍 Rechercher un autre mot](SCR_GLO_SEARCH)
3. [📚 Retour au thème](SCR_GLO_THEME_T5)
4. [📖 Retour au glossaire](SCR_GLO_MENU)

## SCR_GLO_0010

### 📘 Carte de résident

**Définition**

Titre de séjour permettant de résider durablement en France.

💡 **À retenir**

Sa durée de validité est généralement de dix ans.

🔗 **Voir aussi**

1. [Titre de séjour](SCR_GLO_0129)

2. [🔍 Rechercher un autre mot](SCR_GLO_SEARCH)
3. [📚 Retour au thème](SCR_GLO_THEME_T5)
4. [📖 Retour au glossaire](SCR_GLO_MENU)

## SCR_GLO_0011

### 📘 Carte Vitale

**Définition**

Carte personnelle permettant de justifier ses droits à l'Assurance maladie.

💡 **À retenir**

Elle facilite le remboursement des soins.

🔗 **Voir aussi**

1. [Assurance maladie](SCR_GLO_0006)
2. [CPAM](SCR_GLO_0036)

3. [🔍 Rechercher un autre mot](SCR_GLO_SEARCH)
4. [📚 Retour au thème](SCR_GLO_THEME_T5)
5. [📖 Retour au glossaire](SCR_GLO_MENU)

## SCR_GLO_0012

### 📘 CDD

**Définition**

Contrat à durée déterminée.

💡 **À retenir**

Il prévoit une date de fin.

⚠️ **À ne pas confondre**

CDD ≠ CDI.

🔗 **Voir aussi**

1. [Contrat de travail](SCR_GLO_0034)
2. [CDI](SCR_GLO_0013)

3. [🔍 Rechercher un autre mot](SCR_GLO_SEARCH)
4. [📚 Retour au thème](SCR_GLO_THEME_T5)
5. [📖 Retour au glossaire](SCR_GLO_MENU)

## SCR_GLO_0013

### 📘 CDI

**Définition**

Contrat à durée indéterminée.

💡 **À retenir**

Il ne prévoit pas de date de fin.

⚠️ **À ne pas confondre**

CDI ≠ CDD.

🔗 **Voir aussi**

1. [Contrat de travail](SCR_GLO_0034)
2. [CDD](SCR_GLO_0012)

3. [🔍 Rechercher un autre mot](SCR_GLO_SEARCH)
4. [📚 Retour au thème](SCR_GLO_THEME_T5)
5. [📖 Retour au glossaire](SCR_GLO_MENU)

## SCR_GLO_0014

### 📘 Celtes

**Définition**

Peuples installés en Gaule avant la conquête romaine.

💡 **À retenir**

Les Gaulois étaient des peuples celtes.

🔗 **Voir aussi**

1. [Gaule](SCR_GLO_0064)

2. [🔍 Rechercher un autre mot](SCR_GLO_SEARCH)
3. [📚 Retour au thème](SCR_GLO_THEME_T4)
4. [📖 Retour au glossaire](SCR_GLO_MENU)

## SCR_GLO_0015

### 📘 Charlemagne

**Définition**

Empereur d'Occident couronné en l'an 800.

💡 **À retenir**

Il a contribué au développement de l'éducation et de l'organisation de son empire.

1. [🔍 Rechercher un autre mot](SCR_GLO_SEARCH)
2. [📚 Retour au thème](SCR_GLO_THEME_T4)
3. [📖 Retour au glossaire](SCR_GLO_MENU)

## SCR_GLO_0016

### 📘 Charte de l'environnement

**Définition**

Texte à valeur constitutionnelle qui reconnaît le droit à un environnement équilibré.

💡 **À retenir**

La protection de l'environnement est un principe constitutionnel.

🔗 **Voir aussi**

1. [Environnement](SCR_GLO_0052)

2. [🔍 Rechercher un autre mot](SCR_GLO_SEARCH)
3. [📚 Retour au thème](SCR_GLO_THEME_T3)
4. [📖 Retour au glossaire](SCR_GLO_MENU)

## SCR_GLO_0017

### 📘 Château de Versailles

**Définition**

Ancienne résidence des rois de France située près de Paris.

💡 **À retenir**

Il est célèbre pour son architecture et ses jardins.

1. [🔍 Rechercher un autre mot](SCR_GLO_SEARCH)
2. [📚 Retour au thème](SCR_GLO_THEME_T4)
3. [📖 Retour au glossaire](SCR_GLO_MENU)

## SCR_GLO_0018

### 📘 Cinquième République

**Définition**

Régime politique actuel de la France, instauré en 1958.

💡 **À retenir**

La Constitution de 1958 est toujours en vigueur.

🔗 **Voir aussi**

1. [Constitution](SCR_GLO_0032)

2. [🔍 Rechercher un autre mot](SCR_GLO_SEARCH)
3. [📚 Retour au thème](SCR_GLO_THEME_T4)
4. [📖 Retour au glossaire](SCR_GLO_MENU)

## SCR_GLO_0019

### 📘 Citoyen

**Définition**

Personne possédant la nationalité française et bénéficiant des droits civiques et politiques.

💡 **À retenir**

Le citoyen participe à la vie démocratique.

1. [🔍 Rechercher un autre mot](SCR_GLO_SEARCH)
2. [📚 Retour au thème](SCR_GLO_THEME_T1)
3. [📖 Retour au glossaire](SCR_GLO_MENU)

## SCR_GLO_0020

### 📘 Citoyenneté

**Définition**

Lien juridique entre une personne et un État, donnant des droits mais aussi des devoirs.

💡 **À retenir**

Tous les résidents ne sont pas citoyens français.

⚠️ **À ne pas confondre**

Citoyenneté ≠ résidence.

1. [🔍 Rechercher un autre mot](SCR_GLO_SEARCH)
2. [📚 Retour au thème](SCR_GLO_THEME_T3)
3. [📖 Retour au glossaire](SCR_GLO_MENU)

## SCR_GLO_0021

### 📘 Clovis

**Définition**

Premier roi des Francs à s'être converti au christianisme.

💡 **À retenir**

Son règne marque le début de la dynastie mérovingienne.

🔗 **Voir aussi**

1. [Charlemagne](SCR_GLO_0015)

2. [🔍 Rechercher un autre mot](SCR_GLO_SEARCH)
3. [📚 Retour au thème](SCR_GLO_THEME_T4)
4. [📖 Retour au glossaire](SCR_GLO_MENU)

## SCR_GLO_0022

### 📘 Collège

**Définition**

Établissement accueillant les élèves après l'école primaire.

💡 **À retenir**

Le collège est obligatoire.

🔗 **Voir aussi**

1. [Lycée](SCR_GLO_0086)

2. [🔍 Rechercher un autre mot](SCR_GLO_SEARCH)
3. [📚 Retour au thème](SCR_GLO_THEME_T5)
4. [📖 Retour au glossaire](SCR_GLO_MENU)

## SCR_GLO_0023

### 📘 Commission européenne

**Définition**

Institution chargée de proposer les lois européennes et de veiller à leur application.

💡 **À retenir**

Elle défend l'intérêt général de l'Union européenne.

🔗 **Voir aussi**

1. [Union européenne](SCR_GLO_0133)

2. [🔍 Rechercher un autre mot](SCR_GLO_SEARCH)
3. [📚 Retour au thème](SCR_GLO_THEME_T2)
4. [📖 Retour au glossaire](SCR_GLO_MENU)

## SCR_GLO_0024

### 📘 Commune

**Définition**

La commune est la plus petite collectivité territoriale.

💡 **À retenir**

Elle est administrée par un maire.

🔗 **Voir aussi**

1. [Maire](SCR_GLO_0087)

2. [🔍 Rechercher un autre mot](SCR_GLO_SEARCH)
3. [📚 Retour au thème](SCR_GLO_THEME_T2)
4. [📖 Retour au glossaire](SCR_GLO_MENU)

## SCR_GLO_0025

### 📘 Conseil constitutionnel

**Définition**

Le Conseil constitutionnel vérifie que les lois respectent la Constitution.

💡 **À retenir**

Il protège la Constitution.

🔗 **Voir aussi**

1. [Constitution](SCR_GLO_0032)

2. [🔍 Rechercher un autre mot](SCR_GLO_SEARCH)
3. [📚 Retour au thème](SCR_GLO_THEME_T2)
4. [📖 Retour au glossaire](SCR_GLO_MENU)

## SCR_GLO_0026

### 📘 Conseil de l'Union européenne

**Définition**

Institution où siègent les ministres des États membres.

💡 **À retenir**

Il participe au vote des lois européennes.

🔗 **Voir aussi**

1. [Commission européenne](SCR_GLO_0023)

2. [🔍 Rechercher un autre mot](SCR_GLO_SEARCH)
3. [📚 Retour au thème](SCR_GLO_THEME_T2)
4. [📖 Retour au glossaire](SCR_GLO_MENU)

## SCR_GLO_0027

### 📘 Conseil départemental

**Définition**

Assemblée qui administre le département.

💡 **À retenir**

Ses membres sont les conseillers départementaux.

🔗 **Voir aussi**

1. [Département](SCR_GLO_0041)

2. [🔍 Rechercher un autre mot](SCR_GLO_SEARCH)
3. [📚 Retour au thème](SCR_GLO_THEME_T2)
4. [📖 Retour au glossaire](SCR_GLO_MENU)

## SCR_GLO_0028

### 📘 Conseil européen

**Définition**

Réunion des chefs d'État ou de gouvernement des pays membres.

💡 **À retenir**

Il fixe les grandes orientations politiques de l'Union européenne.

🔗 **Voir aussi**

1. [Union européenne](SCR_GLO_0133)

2. [🔍 Rechercher un autre mot](SCR_GLO_SEARCH)
3. [📚 Retour au thème](SCR_GLO_THEME_T2)
4. [📖 Retour au glossaire](SCR_GLO_MENU)

## SCR_GLO_0029

### 📘 Conseil municipal

**Définition**

Assemblée élue qui administre la commune.

💡 **À retenir**

Les conseillers municipaux élisent le maire.

🔗 **Voir aussi**

1. [Maire](SCR_GLO_0087)

2. [🔍 Rechercher un autre mot](SCR_GLO_SEARCH)
3. [📚 Retour au thème](SCR_GLO_THEME_T2)
4. [📖 Retour au glossaire](SCR_GLO_MENU)

## SCR_GLO_0030

### 📘 Conseil régional

**Définition**

Assemblée qui administre la région.

💡 **À retenir**

Ses membres sont les conseillers régionaux.

🔗 **Voir aussi**

1. [Région](SCR_GLO_0117)

2. [🔍 Rechercher un autre mot](SCR_GLO_SEARCH)
3. [📚 Retour au thème](SCR_GLO_THEME_T2)
4. [📖 Retour au glossaire](SCR_GLO_MENU)

## SCR_GLO_0031

### 📘 Consentement

**Définition**

Accord libre et volontaire donné par une personne.

💡 **À retenir**

Sans consentement, un acte peut constituer une infraction.

1. [🔍 Rechercher un autre mot](SCR_GLO_SEARCH)
2. [📚 Retour au thème](SCR_GLO_THEME_T3)
3. [📖 Retour au glossaire](SCR_GLO_MENU)

## SCR_GLO_0032

### 📘 Constitution

**Définition**

Texte fondamental qui organise les institutions françaises et garantit les droits et libertés.

💡 **À retenir**

Toutes les lois doivent respecter la Constitution.

🔗 **Voir aussi**

1. [République](SCR_GLO_0118)
2. [Loi](SCR_GLO_0085)

3. [🔍 Rechercher un autre mot](SCR_GLO_SEARCH)
4. [📚 Retour au thème](SCR_GLO_THEME_T1)
5. [📖 Retour au glossaire](SCR_GLO_MENU)

## SCR_GLO_0033

### 📘 Contrat d'engagement à respecter les principes de la République

**Définition**

Engagement consistant à respecter les valeurs et les principes de la République française.

💡 **À retenir**

Le respect des principes républicains est attendu dans certains parcours administratifs.

🔗 **Voir aussi**

1. [République](SCR_GLO_0118)
2. [Laïcité](SCR_GLO_0080)

3. [🔍 Rechercher un autre mot](SCR_GLO_SEARCH)
4. [📚 Retour au thème](SCR_GLO_THEME_T1)
5. [📖 Retour au glossaire](SCR_GLO_MENU)

## SCR_GLO_0034

### 📘 Contrat de travail

**Définition**

Accord entre un employeur et un salarié définissant les conditions de travail.

💡 **À retenir**

Le contrat précise les droits et les obligations de chacun.

🔗 **Voir aussi**

1. [CDI](SCR_GLO_0013)
2. [CDD](SCR_GLO_0012)

3. [🔍 Rechercher un autre mot](SCR_GLO_SEARCH)
4. [📚 Retour au thème](SCR_GLO_THEME_T5)
5. [📖 Retour au glossaire](SCR_GLO_MENU)

## SCR_GLO_0035

### 📘 Contravention

**Définition**

Infraction la moins grave.

💡 **À retenir**

Elle est généralement punie d'une amende.

🔗 **Voir aussi**

1. [Délit](SCR_GLO_0039)
2. [Crime](SCR_GLO_0037)

3. [🔍 Rechercher un autre mot](SCR_GLO_SEARCH)
4. [📚 Retour au thème](SCR_GLO_THEME_T3)
5. [📖 Retour au glossaire](SCR_GLO_MENU)

## SCR_GLO_0036

### 📘 CPAM

**Définition**

La Caisse primaire d'assurance maladie gère l'Assurance maladie dans chaque département.

💡 **À retenir**

Elle accompagne les assurés dans leurs démarches de santé.

🔗 **Voir aussi**

1. [Carte Vitale](SCR_GLO_0011)
2. [Assurance maladie](SCR_GLO_0006)

3. [🔍 Rechercher un autre mot](SCR_GLO_SEARCH)
4. [📚 Retour au thème](SCR_GLO_THEME_T5)
5. [📖 Retour au glossaire](SCR_GLO_MENU)

## SCR_GLO_0037

### 📘 Crime

**Définition**

Infraction la plus grave prévue par la loi.

💡 **À retenir**

Les crimes sont jugés par une cour d'assises.

🔗 **Voir aussi**

1. [Délit](SCR_GLO_0039)

2. [🔍 Rechercher un autre mot](SCR_GLO_SEARCH)
3. [📚 Retour au thème](SCR_GLO_THEME_T3)
4. [📖 Retour au glossaire](SCR_GLO_MENU)

## SCR_GLO_0038

### 📘 Déclaration des droits de l'homme et du citoyen

**Définition**

Texte adopté en 1789 qui affirme les droits et libertés fondamentaux.

💡 **À retenir**

C'est l'un des textes fondateurs de la République française.

🔗 **Voir aussi**

1. [Constitution](SCR_GLO_0032)

2. [🔍 Rechercher un autre mot](SCR_GLO_SEARCH)
3. [📚 Retour au thème](SCR_GLO_THEME_T3)
4. [📖 Retour au glossaire](SCR_GLO_MENU)

## SCR_GLO_0039

### 📘 Délit

**Définition**

Infraction plus grave qu'une contravention.

💡 **À retenir**

Il peut être puni d'une peine de prison.

🔗 **Voir aussi**

1. [Crime](SCR_GLO_0037)

2. [🔍 Rechercher un autre mot](SCR_GLO_SEARCH)
3. [📚 Retour au thème](SCR_GLO_THEME_T3)
4. [📖 Retour au glossaire](SCR_GLO_MENU)

## SCR_GLO_0040

### 📘 Démocratie

**Définition**

Régime politique dans lequel les citoyens participent à la vie publique par le vote ou le référendum.

💡 **À retenir**

La démocratie permet au peuple de participer aux décisions publiques.

⚠️ **À ne pas confondre**

Démocratie ≠ République.

🔗 **Voir aussi**

1. [République](SCR_GLO_0118)
2. [Élection](SCR_GLO_0050)

3. [🔍 Rechercher un autre mot](SCR_GLO_SEARCH)
4. [📚 Retour au thème](SCR_GLO_THEME_T1)
5. [📖 Retour au glossaire](SCR_GLO_MENU)

## SCR_GLO_0041

### 📘 Département

**Définition**

Le département est une collectivité territoriale située entre la région et la commune.

💡 **À retenir**

La France compte 101 départements.

🔗 **Voir aussi**

1. [Région](SCR_GLO_0117)
2. [Commune](SCR_GLO_0024)

3. [🔍 Rechercher un autre mot](SCR_GLO_SEARCH)
4. [📚 Retour au thème](SCR_GLO_THEME_T2)
5. [📖 Retour au glossaire](SCR_GLO_MENU)

## SCR_GLO_0042

### 📘 Député

**Définition**

Le député représente les citoyens à l'Assemblée nationale.

💡 **À retenir**

Il vote les lois.

🔗 **Voir aussi**

1. [Assemblée nationale](SCR_GLO_0004)

2. [🔍 Rechercher un autre mot](SCR_GLO_SEARCH)
3. [📚 Retour au thème](SCR_GLO_THEME_T2)
4. [📖 Retour au glossaire](SCR_GLO_MENU)

## SCR_GLO_0043

### 📘 Député européen

**Définition**

Représentant élu des citoyens au Parlement européen.

💡 **À retenir**

Les députés européens sont élus tous les cinq ans.

🔗 **Voir aussi**

1. [Parlement européen](SCR_GLO_0102)

2. [🔍 Rechercher un autre mot](SCR_GLO_SEARCH)
3. [📚 Retour au thème](SCR_GLO_THEME_T2)
4. [📖 Retour au glossaire](SCR_GLO_MENU)

## SCR_GLO_0044

### 📘 Devise de la République

**Définition**

La devise officielle de la République française est :

Liberté, Égalité, Fraternité.

💡 **À retenir**

Elle représente les trois valeurs fondamentales de la République.

🔗 **Voir aussi**

1. [Liberté](SCR_GLO_0082)
2. [Égalité](SCR_GLO_0049)
3. [Fraternité](SCR_GLO_0062)

4. [🔍 Rechercher un autre mot](SCR_GLO_SEARCH)
5. [📚 Retour au thème](SCR_GLO_THEME_T1)
6. [📖 Retour au glossaire](SCR_GLO_MENU)

## SCR_GLO_0045

### 📘 Dignité humaine

**Définition**

Principe selon lequel chaque personne doit être respectée et ne jamais être traitée comme un objet.

💡 **À retenir**

La dignité humaine est protégée par la loi.

🔗 **Voir aussi**

1. [Droits fondamentaux](SCR_GLO_0047)

2. [🔍 Rechercher un autre mot](SCR_GLO_SEARCH)
3. [📚 Retour au thème](SCR_GLO_THEME_T3)
4. [📖 Retour au glossaire](SCR_GLO_MENU)

## SCR_GLO_0046

### 📘 Drapeau français

**Définition**

Le drapeau national est composé de trois bandes verticales bleue, blanche et rouge.

💡 **À retenir**

Il est l'un des symboles officiels de la République.

🔗 **Voir aussi**

1. [La Marseillaise](SCR_GLO_0078)

2. [🔍 Rechercher un autre mot](SCR_GLO_SEARCH)
3. [📚 Retour au thème](SCR_GLO_THEME_T1)
4. [📖 Retour au glossaire](SCR_GLO_MENU)

## SCR_GLO_0047

### 📘 Droits fondamentaux

**Définition**

Ensemble des droits et libertés reconnus à toute personne et garantis par la Constitution et les textes fondamentaux.

💡 **À retenir**

Ils protègent la dignité, la liberté et l'égalité de chacun.

🔗 **Voir aussi**

1. [Constitution](SCR_GLO_0032)
2. [Liberté](SCR_GLO_0082)
3. [Égalité](SCR_GLO_0049)

4. [🔍 Rechercher un autre mot](SCR_GLO_SEARCH)
5. [📚 Retour au thème](SCR_GLO_THEME_T3)
6. [📖 Retour au glossaire](SCR_GLO_MENU)

## SCR_GLO_0048

### 📘 École

**Définition**

Établissement où les enfants reçoivent un enseignement.

💡 **À retenir**

L'instruction est obligatoire de 3 à 16 ans.

🔗 **Voir aussi**

1. [Collège](SCR_GLO_0022)
2. [Lycée](SCR_GLO_0086)

3. [🔍 Rechercher un autre mot](SCR_GLO_SEARCH)
4. [📚 Retour au thème](SCR_GLO_THEME_T5)
5. [📖 Retour au glossaire](SCR_GLO_MENU)

## SCR_GLO_0049

### 📘 Égalité

**Définition**

Principe selon lequel toutes les personnes disposent des mêmes droits devant la loi.

Principe selon lequel toutes les personnes bénéficient des mêmes droits devant la loi.

💡 **À retenir**

La loi est la même pour tous.

Aucune discrimination n'est autorisée.

🔗 **Voir aussi**

1. [Liberté](SCR_GLO_0082)

2. [🔍 Rechercher un autre mot](SCR_GLO_SEARCH)
3. [📚 Retour au thème](SCR_GLO_THEME_T1)
4. [📖 Retour au glossaire](SCR_GLO_MENU)

## SCR_GLO_0050

### 📘 Élection

**Définition**

Procédure permettant aux citoyens de choisir leurs représentants.

💡 **À retenir**

Les élections sont au cœur de la démocratie.

🔗 **Voir aussi**

1. [Suffrage universel](SCR_GLO_0127)

2. [🔍 Rechercher un autre mot](SCR_GLO_SEARCH)
3. [📚 Retour au thème](SCR_GLO_THEME_T2)
4. [📖 Retour au glossaire](SCR_GLO_MENU)

## SCR_GLO_0051

### 📘 Employeur

**Définition**

Personne ou entreprise qui embauche un salarié.

💡 **À retenir**

L'employeur doit respecter le Code du travail.

1. [🔍 Rechercher un autre mot](SCR_GLO_SEARCH)
2. [📚 Retour au thème](SCR_GLO_THEME_T5)
3. [📖 Retour au glossaire](SCR_GLO_MENU)

## SCR_GLO_0052

### 📘 Environnement

**Définition**

Ensemble des éléments naturels que chacun doit protéger.

💡 **À retenir**

La protection de l'environnement est une responsabilité collective.

🔗 **Voir aussi**

1. [Charte de l'environnement](SCR_GLO_0016)

2. [🔍 Rechercher un autre mot](SCR_GLO_SEARCH)
3. [📚 Retour au thème](SCR_GLO_THEME_T3)
4. [📖 Retour au glossaire](SCR_GLO_MENU)

## SCR_GLO_0053

### 📘 Espace Schengen

**Définition**

Espace dans lequel les contrôles aux frontières intérieures sont supprimés entre les États participants.

💡 **À retenir**

La France fait partie de l'espace Schengen.

🔗 **Voir aussi**

1. [Union européenne](SCR_GLO_0133)

2. [🔍 Rechercher un autre mot](SCR_GLO_SEARCH)
3. [📚 Retour au thème](SCR_GLO_THEME_T2)
4. [📖 Retour au glossaire](SCR_GLO_MENU)

## SCR_GLO_0054

### 📘 État

**Définition**

L'État est l'organisation politique qui exerce son autorité sur le territoire français et garantit le respect des lois.

💡 **À retenir**

L'État assure les services publics et protège les citoyens.

🔗 **Voir aussi**

1. [République](SCR_GLO_0118)
2. [Gouvernement](SCR_GLO_0066)
3. [Préfet](SCR_GLO_0106)

4. [🔍 Rechercher un autre mot](SCR_GLO_SEARCH)
5. [📚 Retour au thème](SCR_GLO_THEME_T2)
6. [📖 Retour au glossaire](SCR_GLO_MENU)

## SCR_GLO_0055

### 📘 Euro

**Définition**

Monnaie utilisée par plusieurs pays de l'Union européenne.

💡 **À retenir**

L'euro est la monnaie officielle de la France.

🔗 **Voir aussi**

1. [Union européenne](SCR_GLO_0133)

2. [🔍 Rechercher un autre mot](SCR_GLO_SEARCH)
3. [📚 Retour au thème](SCR_GLO_THEME_T2)
4. [📖 Retour au glossaire](SCR_GLO_MENU)

## SCR_GLO_0056

### 📘 Fête de la Musique

**Définition**

Manifestation culturelle organisée chaque année le 21 juin.

💡 **À retenir**

Elle permet à tous de partager la musique gratuitement.

1. [🔍 Rechercher un autre mot](SCR_GLO_SEARCH)
2. [📚 Retour au thème](SCR_GLO_THEME_T4)
3. [📖 Retour au glossaire](SCR_GLO_MENU)

## SCR_GLO_0057

### 📘 Fête nationale

**Définition**

La fête nationale française est célébrée chaque année le 14 juillet.

💡 **À retenir**

Elle commémore la prise de la Bastille et la Fête de la Fédération.

🔗 **Voir aussi**

1. [République](SCR_GLO_0118)

2. [🔍 Rechercher un autre mot](SCR_GLO_SEARCH)
3. [📚 Retour au thème](SCR_GLO_THEME_T1)
4. [📖 Retour au glossaire](SCR_GLO_MENU)

## SCR_GLO_0058

### 📘 France métropolitaine

**Définition**

Partie du territoire français située en Europe.

💡 **À retenir**

Elle est composée de 13 régions.

🔗 **Voir aussi**

1. [Outre-mer](SCR_GLO_0100)

2. [🔍 Rechercher un autre mot](SCR_GLO_SEARCH)
3. [📚 Retour au thème](SCR_GLO_THEME_T4)
4. [📖 Retour au glossaire](SCR_GLO_MENU)

## SCR_GLO_0059

### 📘 France Services

**Définition**

Réseau de guichets de proximité permettant d'effectuer de nombreuses démarches administratives.

💡 **À retenir**

France Services accompagne les usagers gratuitement.

1. [🔍 Rechercher un autre mot](SCR_GLO_SEARCH)
2. [📚 Retour au thème](SCR_GLO_THEME_T5)
3. [📖 Retour au glossaire](SCR_GLO_MENU)

## SCR_GLO_0060

### 📘 France Travail

**Définition**

Établissement public qui accompagne les personnes dans leur recherche d'emploi.

💡 **À retenir**

France Travail remplace Pôle emploi.

1. [🔍 Rechercher un autre mot](SCR_GLO_SEARCH)
2. [📚 Retour au thème](SCR_GLO_THEME_T5)
3. [📖 Retour au glossaire](SCR_GLO_MENU)

## SCR_GLO_0061

### 📘 Francophonie

**Définition**

Ensemble des personnes et des pays qui utilisent la langue française.

💡 **À retenir**

Le français est parlé sur les cinq continents.

1. [🔍 Rechercher un autre mot](SCR_GLO_SEARCH)
2. [📚 Retour au thème](SCR_GLO_THEME_T4)
3. [📖 Retour au glossaire](SCR_GLO_MENU)

## SCR_GLO_0062

### 📘 Fraternité

**Définition**

Valeur qui encourage la solidarité, l'entraide et le respect entre les personnes.

💡 **À retenir**

La fraternité favorise le vivre ensemble.

1. [🔍 Rechercher un autre mot](SCR_GLO_SEARCH)
2. [📚 Retour au thème](SCR_GLO_THEME_T1)
3. [📖 Retour au glossaire](SCR_GLO_MENU)

## SCR_GLO_0063

### 📘 Gastronomie française

**Définition**

Ensemble des traditions culinaires françaises.

💡 **À retenir**

Le repas gastronomique des Français est inscrit au patrimoine culturel immatériel de l'UNESCO.

🔗 **Voir aussi**

1. [UNESCO](SCR_GLO_0132)

2. [🔍 Rechercher un autre mot](SCR_GLO_SEARCH)
3. [📚 Retour au thème](SCR_GLO_THEME_T4)
4. [📖 Retour au glossaire](SCR_GLO_MENU)

## SCR_GLO_0064

### 📘 Gaule

**Définition**

Nom donné au territoire de la France actuelle avant la conquête romaine.

💡 **À retenir**

La Gaule était peuplée de peuples celtes.

🔗 **Voir aussi**

1. [Celtes](SCR_GLO_0014)
2. [Vercingétorix](SCR_GLO_0135)

3. [🔍 Rechercher un autre mot](SCR_GLO_SEARCH)
4. [📚 Retour au thème](SCR_GLO_THEME_T4)
5. [📖 Retour au glossaire](SCR_GLO_MENU)

## SCR_GLO_0065

### 📘 Gendarmerie

**Définition**

Force militaire chargée de missions de sécurité publique.

💡 **À retenir**

Elle intervient principalement en zone rurale.

🔗 **Voir aussi**

1. [Police](SCR_GLO_0104)

2. [🔍 Rechercher un autre mot](SCR_GLO_SEARCH)
3. [📚 Retour au thème](SCR_GLO_THEME_T3)
4. [📖 Retour au glossaire](SCR_GLO_MENU)

## SCR_GLO_0066

### 📘 Gouvernement

**Définition**

Le Gouvernement conduit la politique de la Nation.

Il est composé du Premier ministre et des ministres.

💡 **À retenir**

Il prépare les projets de loi et applique les lois.

⚠️ **À ne pas confondre**

Le Gouvernement propose les lois.

Le Parlement les vote.

🔗 **Voir aussi**

1. [Premier ministre](SCR_GLO_0107)
2. [Parlement](SCR_GLO_0101)

3. [🔍 Rechercher un autre mot](SCR_GLO_SEARCH)
4. [📚 Retour au thème](SCR_GLO_THEME_T2)
5. [📖 Retour au glossaire](SCR_GLO_MENU)

## SCR_GLO_0067

### 📘 Guadeloupe

**Définition**

Département et région d'outre-mer situé dans les Caraïbes.

💡 **À retenir**

Elle est connue pour ses plages, son volcan de la Soufrière et sa biodiversité.

🔗 **Voir aussi**

1. [Outre-mer](SCR_GLO_0100)

2. [🔍 Rechercher un autre mot](SCR_GLO_SEARCH)
3. [📚 Retour au thème](SCR_GLO_THEME_T4)
4. [📖 Retour au glossaire](SCR_GLO_MENU)

## SCR_GLO_0068

### 📘 Guyane

**Définition**

Département et région d'outre-mer situé en Amérique du Sud.

💡 **À retenir**

La Guyane accueille le Centre spatial guyanais de Kourou et possède une vaste forêt amazonienne.

🔗 **Voir aussi**

1. [Outre-mer](SCR_GLO_0100)

2. [🔍 Rechercher un autre mot](SCR_GLO_SEARCH)
3. [📚 Retour au thème](SCR_GLO_THEME_T4)
4. [📖 Retour au glossaire](SCR_GLO_MENU)

## SCR_GLO_0069

### 📘 Harcèlement

**Définition**

Violences ou comportements répétés ayant pour effet de dégrader les conditions de vie d'une personne.

💡 **À retenir**

Le harcèlement est puni par la loi.

🔗 **Voir aussi**

1. [Harcèlement scolaire](SCR_GLO_0070)

2. [🔍 Rechercher un autre mot](SCR_GLO_SEARCH)
3. [📚 Retour au thème](SCR_GLO_THEME_T3)
4. [📖 Retour au glossaire](SCR_GLO_MENU)

## SCR_GLO_0070

### 📘 Harcèlement scolaire

**Définition**

Violences répétées subies par un élève de la part d'autres élèves.

💡 **À retenir**

Il s'agit d'un délit.

🔗 **Voir aussi**

1. [Violence](SCR_GLO_0136)

2. [🔍 Rechercher un autre mot](SCR_GLO_SEARCH)
3. [📚 Retour au thème](SCR_GLO_THEME_T3)
4. [📖 Retour au glossaire](SCR_GLO_MENU)

## SCR_GLO_0071

### 📘 Hôpital

**Définition**

Établissement de santé où sont assurés les soins médicaux et chirurgicaux.

💡 **À retenir**

Les hôpitaux publics accueillent tous les patients.

🔗 **Voir aussi**

1. [Urgences](SCR_GLO_0134)

2. [🔍 Rechercher un autre mot](SCR_GLO_SEARCH)
3. [📚 Retour au thème](SCR_GLO_THEME_T5)
4. [📖 Retour au glossaire](SCR_GLO_MENU)

## SCR_GLO_0072

### 📘 Île-de-France

**Définition**

Région où se situe Paris, capitale de la France.

💡 **À retenir**

Elle est la région la plus peuplée du pays et concentre de nombreuses institutions nationales.

1. [🔍 Rechercher un autre mot](SCR_GLO_SEARCH)
2. [📚 Retour au thème](SCR_GLO_THEME_T4)
3. [📖 Retour au glossaire](SCR_GLO_MENU)

## SCR_GLO_0073

### 📘 Impôt

**Définition**

Somme versée à l'État ou aux collectivités pour financer les services publics.

💡 **À retenir**

Le paiement des impôts est une obligation.

1. [🔍 Rechercher un autre mot](SCR_GLO_SEARCH)
2. [📚 Retour au thème](SCR_GLO_THEME_T3)
3. [📖 Retour au glossaire](SCR_GLO_MENU)

## SCR_GLO_0074

### 📘 Infraction

**Définition**

Acte interdit par la loi.

💡 **À retenir**

Une infraction peut être sanctionnée.

🔗 **Voir aussi**

1. [Contravention](SCR_GLO_0035)
2. [Délit](SCR_GLO_0039)
3. [Crime](SCR_GLO_0037)

4. [🔍 Rechercher un autre mot](SCR_GLO_SEARCH)
5. [📚 Retour au thème](SCR_GLO_THEME_T3)
6. [📖 Retour au glossaire](SCR_GLO_MENU)

## SCR_GLO_0075

### 📘 Intégrité de la personne

**Définition**

Droit de chacun à la protection de son corps et de son esprit.

💡 **À retenir**

Toute atteinte injustifiée à l'intégrité est interdite.

🔗 **Voir aussi**

1. [Dignité humaine](SCR_GLO_0045)

2. [🔍 Rechercher un autre mot](SCR_GLO_SEARCH)
3. [📚 Retour au thème](SCR_GLO_THEME_T3)
4. [📖 Retour au glossaire](SCR_GLO_MENU)

## SCR_GLO_0076

### 📘 Journées européennes du patrimoine

**Définition**

Événement annuel permettant de découvrir gratuitement de nombreux lieux patrimoniaux.

💡 **À retenir**

Elles ont lieu chaque année en septembre.

🔗 **Voir aussi**

1. [Patrimoine](SCR_GLO_0103)

2. [🔍 Rechercher un autre mot](SCR_GLO_SEARCH)
3. [📚 Retour au thème](SCR_GLO_THEME_T4)
4. [📖 Retour au glossaire](SCR_GLO_MENU)

## SCR_GLO_0077

### 📘 Justice

**Définition**

La justice règle les conflits et sanctionne les infractions.

💡 **À retenir**

Elle est indépendante.

1. [🔍 Rechercher un autre mot](SCR_GLO_SEARCH)
2. [📚 Retour au thème](SCR_GLO_THEME_T2)
3. [📖 Retour au glossaire](SCR_GLO_MENU)

## SCR_GLO_0078

### 📘 La Marseillaise

**Définition**

La Marseillaise est l'hymne national français.

💡 **À retenir**

Elle est chantée lors des cérémonies officielles.

🔗 **Voir aussi**

1. [Drapeau français](SCR_GLO_0046)

2. [🔍 Rechercher un autre mot](SCR_GLO_SEARCH)
3. [📚 Retour au thème](SCR_GLO_THEME_T1)
4. [📖 Retour au glossaire](SCR_GLO_MENU)

## SCR_GLO_0079

### 📘 La Réunion

**Définition**

Département et région d'outre-mer situé dans l'océan Indien.

💡 **À retenir**

L'île est connue pour ses cirques, son volcan actif et ses paysages naturels.

🔗 **Voir aussi**

1. [Outre-mer](SCR_GLO_0100)

2. [🔍 Rechercher un autre mot](SCR_GLO_SEARCH)
3. [📚 Retour au thème](SCR_GLO_THEME_T4)
4. [📖 Retour au glossaire](SCR_GLO_MENU)

## SCR_GLO_0080

### 📘 Laïcité

**Définition**

Principe garantissant la liberté de conscience, la neutralité de l'État et le respect de toutes les convictions.

💡 **À retenir**

La République respecte toutes les croyances et garantit la liberté de religion ou de ne pas avoir de religion.

⚠️ **À ne pas confondre**

La laïcité n'interdit pas les religions.

Elle garantit leur libre exercice dans le respect de la loi.

🔗 **Voir aussi**

1. [Neutralité](SCR_GLO_0098)
2. [Liberté de conscience](SCR_GLO_0083)

3. [🔍 Rechercher un autre mot](SCR_GLO_SEARCH)
4. [📚 Retour au thème](SCR_GLO_THEME_T1)
5. [📖 Retour au glossaire](SCR_GLO_MENU)

## SCR_GLO_0081

### 📘 Langue de la République

**Définition**

Le français est la langue officielle de la République française.

💡 **À retenir**

Le français est utilisé dans les administrations, les écoles et les services publics.

🔗 **Voir aussi**

1. [République](SCR_GLO_0118)

2. [🔍 Rechercher un autre mot](SCR_GLO_SEARCH)
3. [📚 Retour au thème](SCR_GLO_THEME_T1)
4. [📖 Retour au glossaire](SCR_GLO_MENU)

## SCR_GLO_0082

### 📘 Liberté

**Définition**

Valeur qui permet à chacun de penser, de s'exprimer et d'agir dans le respect de la loi et des autres.

Droit reconnu à chacun de penser, de s'exprimer et d'agir dans le respect de la loi.

💡 **À retenir**

La liberté s'exerce dans le respect des droits d'autrui.

La liberté est un droit fondamental.

⚠️ **À ne pas confondre**

Liberté ≠ absence de règles.

La liberté ne permet pas de porter atteinte aux droits des autres.

🔗 **Voir aussi**

1. [Égalité](SCR_GLO_0049)
2. [Fraternité](SCR_GLO_0062)

3. [🔍 Rechercher un autre mot](SCR_GLO_SEARCH)
4. [📚 Retour au thème](SCR_GLO_THEME_T1)
5. [📖 Retour au glossaire](SCR_GLO_MENU)

## SCR_GLO_0083

### 📘 Liberté de conscience

**Définition**

Droit de choisir librement ses convictions religieuses, philosophiques ou de ne pas en avoir.

💡 **À retenir**

Cette liberté est protégée par la République.

🔗 **Voir aussi**

1. [Laïcité](SCR_GLO_0080)

2. [🔍 Rechercher un autre mot](SCR_GLO_SEARCH)
3. [📚 Retour au thème](SCR_GLO_THEME_T1)
4. [📖 Retour au glossaire](SCR_GLO_MENU)

## SCR_GLO_0084

### 📘 Locataire

**Définition**

Personne qui loue un logement.

💡 **À retenir**

Le locataire doit payer son loyer et entretenir le logement.

🔗 **Voir aussi**

1. [Bail](SCR_GLO_0007)

2. [🔍 Rechercher un autre mot](SCR_GLO_SEARCH)
3. [📚 Retour au thème](SCR_GLO_THEME_T5)
4. [📖 Retour au glossaire](SCR_GLO_MENU)

## SCR_GLO_0085

### 📘 Loi

**Définition**

Règle votée par le Parlement qui s'impose à tous.

💡 **À retenir**

Toute personne vivant en France doit respecter la loi.

🔗 **Voir aussi**

1. [Parlement](SCR_GLO_0101)

2. [🔍 Rechercher un autre mot](SCR_GLO_SEARCH)
3. [📚 Retour au thème](SCR_GLO_THEME_T3)
4. [📖 Retour au glossaire](SCR_GLO_MENU)

## SCR_GLO_0086

### 📘 Lycée

**Définition**

Établissement préparant les élèves au baccalauréat ou à une formation professionnelle.

💡 **À retenir**

Il existe des lycées généraux, technologiques et professionnels.

1. [🔍 Rechercher un autre mot](SCR_GLO_SEARCH)
2. [📚 Retour au thème](SCR_GLO_THEME_T5)
3. [📖 Retour au glossaire](SCR_GLO_MENU)

## SCR_GLO_0087

### 📘 Maire

**Définition**

Le maire dirige une commune.

💡 **À retenir**

Il est élu par le conseil municipal.

⚠️ **À ne pas confondre**

Le maire dirige une commune.

Le préfet représente l'État.

🔗 **Voir aussi**

1. [Commune](SCR_GLO_0024)
2. [Préfet](SCR_GLO_0106)

3. [🔍 Rechercher un autre mot](SCR_GLO_SEARCH)
4. [📚 Retour au thème](SCR_GLO_THEME_T2)
5. [📖 Retour au glossaire](SCR_GLO_MENU)

## SCR_GLO_0088

### 📘 Mairie

**Définition**

Administration de la commune dirigée par le maire.

💡 **À retenir**

De nombreuses démarches administratives y sont réalisées.

🔗 **Voir aussi**

1. [Commune](SCR_GLO_0024)
2. [Maire](SCR_GLO_0087)

3. [🔍 Rechercher un autre mot](SCR_GLO_SEARCH)
4. [📚 Retour au thème](SCR_GLO_THEME_T5)
5. [📖 Retour au glossaire](SCR_GLO_MENU)

## SCR_GLO_0089

### 📘 Marianne

**Définition**

Marianne est la représentation symbolique de la République française.

💡 **À retenir**

Elle symbolise la liberté et la République.

🔗 **Voir aussi**

1. [République](SCR_GLO_0118)

2. [🔍 Rechercher un autre mot](SCR_GLO_SEARCH)
3. [📚 Retour au thème](SCR_GLO_THEME_T1)
4. [📖 Retour au glossaire](SCR_GLO_MENU)

## SCR_GLO_0090

### 📘 Martinique

**Définition**

Département et région d'outre-mer situé dans les Caraïbes.

💡 **À retenir**

La Martinique est célèbre pour la montagne Pelée et son patrimoine culturel.

🔗 **Voir aussi**

1. [Outre-mer](SCR_GLO_0100)

2. [🔍 Rechercher un autre mot](SCR_GLO_SEARCH)
3. [📚 Retour au thème](SCR_GLO_THEME_T4)
4. [📖 Retour au glossaire](SCR_GLO_MENU)

## SCR_GLO_0091

### 📘 Mayotte

**Définition**

Département et région d'outre-mer situé dans l'océan Indien.

💡 **À retenir**

Mayotte est le département le plus récent de la République française.

🔗 **Voir aussi**

1. [Outre-mer](SCR_GLO_0100)

2. [🔍 Rechercher un autre mot](SCR_GLO_SEARCH)
3. [📚 Retour au thème](SCR_GLO_THEME_T4)
4. [📖 Retour au glossaire](SCR_GLO_MENU)

## SCR_GLO_0092

### 📘 Médecin traitant

**Définition**

Médecin choisi par le patient pour assurer son suivi médical.

💡 **À retenir**

Le déclarer permet un meilleur remboursement des soins.

🔗 **Voir aussi**

1. [Assurance maladie](SCR_GLO_0006)

2. [🔍 Rechercher un autre mot](SCR_GLO_SEARCH)
3. [📚 Retour au thème](SCR_GLO_THEME_T5)
4. [📖 Retour au glossaire](SCR_GLO_MENU)

## SCR_GLO_0093

### 📘 Ministre

**Définition**

Un ministre est membre du Gouvernement.

Il est responsable d'un domaine particulier (éducation, santé, intérieur...).

💡 **À retenir**

Chaque ministre dirige un ministère.

🔗 **Voir aussi**

1. [Gouvernement](SCR_GLO_0066)

2. [🔍 Rechercher un autre mot](SCR_GLO_SEARCH)
3. [📚 Retour au thème](SCR_GLO_THEME_T2)
4. [📖 Retour au glossaire](SCR_GLO_MENU)

## SCR_GLO_0094

### 📘 Mont-Saint-Michel

**Définition**

Îlot rocheux situé en Normandie sur lequel est construite une abbaye.

💡 **À retenir**

Il est inscrit au patrimoine mondial de l'UNESCO.

🔗 **Voir aussi**

1. [UNESCO](SCR_GLO_0132)

2. [🔍 Rechercher un autre mot](SCR_GLO_SEARCH)
3. [📚 Retour au thème](SCR_GLO_THEME_T4)
4. [📖 Retour au glossaire](SCR_GLO_MENU)

## SCR_GLO_0095

### 📘 Musée du Louvre

**Définition**

Plus grand musée d'art de France situé à Paris.

💡 **À retenir**

Il abrite notamment la Joconde.

1. [🔍 Rechercher un autre mot](SCR_GLO_SEARCH)
2. [📚 Retour au thème](SCR_GLO_THEME_T4)
3. [📖 Retour au glossaire](SCR_GLO_MENU)

## SCR_GLO_0096

### 📘 Mutilations sexuelles féminines

**Définition**

Interventions consistant à retirer partiellement ou totalement les organes génitaux féminins sans raison médicale.

💡 **À retenir**

Elles sont interdites et sévèrement punies en France.

🔗 **Voir aussi**

1. [Violence](SCR_GLO_0136)

2. [🔍 Rechercher un autre mot](SCR_GLO_SEARCH)
3. [📚 Retour au thème](SCR_GLO_THEME_T3)
4. [📖 Retour au glossaire](SCR_GLO_MENU)

## SCR_GLO_0097

### 📘 Naturalisation

**Définition**

Procédure permettant à un étranger d'acquérir la nationalité française sous certaines conditions.

💡 **À retenir**

La naturalisation n'est pas automatique.

1. [🔍 Rechercher un autre mot](SCR_GLO_SEARCH)
2. [📚 Retour au thème](SCR_GLO_THEME_T5)
3. [📖 Retour au glossaire](SCR_GLO_MENU)

## SCR_GLO_0098

### 📘 Neutralité

**Définition**

Obligation pour les services publics de traiter chacun de manière égale sans favoriser une religion ou une conviction.

💡 **À retenir**

La neutralité concerne principalement les institutions et les agents publics.

🔗 **Voir aussi**

1. [Laïcité](SCR_GLO_0080)

2. [🔍 Rechercher un autre mot](SCR_GLO_SEARCH)
3. [📚 Retour au thème](SCR_GLO_THEME_T1)
4. [📖 Retour au glossaire](SCR_GLO_MENU)

## SCR_GLO_0099

### 📘 Ordre public

**Définition**

Ensemble des règles garantissant la sécurité, la tranquillité et la salubrité publiques.

💡 **À retenir**

L'ordre public permet le bon fonctionnement de la société.

🔗 **Voir aussi**

1. [Police](SCR_GLO_0104)
2. [Gendarmerie](SCR_GLO_0065)

3. [🔍 Rechercher un autre mot](SCR_GLO_SEARCH)
4. [📚 Retour au thème](SCR_GLO_THEME_T3)
5. [📖 Retour au glossaire](SCR_GLO_MENU)

## SCR_GLO_0100

### 📘 Outre-mer

**Définition**

Ensemble des territoires français situés hors du continent européen.

💡 **À retenir**

Ils font pleinement partie de la République française.

🔗 **Voir aussi**

1. [Guyane](SCR_GLO_0068)
2. [Guadeloupe](SCR_GLO_0067)
3. [Martinique](SCR_GLO_0090)
4. [La Réunion](SCR_GLO_0079)
5. [Mayotte](SCR_GLO_0091)

6. [🔍 Rechercher un autre mot](SCR_GLO_SEARCH)
7. [📚 Retour au thème](SCR_GLO_THEME_T4)
8. [📖 Retour au glossaire](SCR_GLO_MENU)

## SCR_GLO_0101

### 📘 Parlement

**Définition**

Le Parlement vote les lois et contrôle l'action du Gouvernement.

💡 **À retenir**

Il comprend deux assemblées.

🔗 **Voir aussi**

1. [Assemblée nationale](SCR_GLO_0004)
2. [Sénat](SCR_GLO_0123)

3. [🔍 Rechercher un autre mot](SCR_GLO_SEARCH)
4. [📚 Retour au thème](SCR_GLO_THEME_T2)
5. [📖 Retour au glossaire](SCR_GLO_MENU)

## SCR_GLO_0102

### 📘 Parlement européen

**Définition**

Institution européenne composée de députés élus par les citoyens des États membres.

💡 **À retenir**

Il participe à l'adoption des lois européennes.

🔗 **Voir aussi**

1. [Député européen](SCR_GLO_0043)

2. [🔍 Rechercher un autre mot](SCR_GLO_SEARCH)
3. [📚 Retour au thème](SCR_GLO_THEME_T2)
4. [📖 Retour au glossaire](SCR_GLO_MENU)

## SCR_GLO_0103

### 📘 Patrimoine

**Définition**

Ensemble des biens culturels, historiques et naturels transmis de génération en génération.

💡 **À retenir**

Le patrimoine est protégé et valorisé.

🔗 **Voir aussi**

1. [UNESCO](SCR_GLO_0132)

2. [🔍 Rechercher un autre mot](SCR_GLO_SEARCH)
3. [📚 Retour au thème](SCR_GLO_THEME_T4)
4. [📖 Retour au glossaire](SCR_GLO_MENU)

## SCR_GLO_0104

### 📘 Police

**Définition**

Force civile chargée de protéger les personnes et de faire respecter la loi.

💡 **À retenir**

Elle intervient principalement dans les villes.

🔗 **Voir aussi**

1. [Gendarmerie](SCR_GLO_0065)

2. [🔍 Rechercher un autre mot](SCR_GLO_SEARCH)
3. [📚 Retour au thème](SCR_GLO_THEME_T3)
4. [📖 Retour au glossaire](SCR_GLO_MENU)

## SCR_GLO_0105

### 📘 Préfecture

**Définition**

Administration représentant l'État dans un département.

💡 **À retenir**

Elle traite notamment certaines démarches liées au séjour des étrangers.

🔗 **Voir aussi**

1. [Préfet](SCR_GLO_0106)

2. [🔍 Rechercher un autre mot](SCR_GLO_SEARCH)
3. [📚 Retour au thème](SCR_GLO_THEME_T5)
4. [📖 Retour au glossaire](SCR_GLO_MENU)

## SCR_GLO_0106

### 📘 Préfet

**Définition**

Le préfet représente l'État dans un département ou une région.

💡 **À retenir**

Il est nommé par le Gouvernement.

⚠️ **À ne pas confondre**

Le préfet n'est pas élu.

🔗 **Voir aussi**

1. [État](SCR_GLO_0054)
2. [Maire](SCR_GLO_0087)

3. [🔍 Rechercher un autre mot](SCR_GLO_SEARCH)
4. [📚 Retour au thème](SCR_GLO_THEME_T2)
5. [📖 Retour au glossaire](SCR_GLO_MENU)

## SCR_GLO_0107

### 📘 Premier ministre

**Définition**

Le Premier ministre dirige l'action du Gouvernement.

💡 **À retenir**

Il coordonne le travail des ministres.

⚠️ **À ne pas confondre**

Le Président dirige l'État.

Le Premier ministre dirige le Gouvernement.

🔗 **Voir aussi**

1. [Gouvernement](SCR_GLO_0066)

2. [🔍 Rechercher un autre mot](SCR_GLO_SEARCH)
3. [📚 Retour au thème](SCR_GLO_THEME_T2)
4. [📖 Retour au glossaire](SCR_GLO_MENU)

## SCR_GLO_0108

### 📘 Première Guerre mondiale

**Définition**

Conflit mondial de 1914 à 1918.

💡 **À retenir**

La France fait partie des pays vainqueurs.

🔗 **Voir aussi**

1. [Seconde Guerre mondiale](SCR_GLO_0121)

2. [🔍 Rechercher un autre mot](SCR_GLO_SEARCH)
3. [📚 Retour au thème](SCR_GLO_THEME_T4)
4. [📖 Retour au glossaire](SCR_GLO_MENU)

## SCR_GLO_0109

### 📘 Président de la République

**Définition**

Le Président de la République est le chef de l'État.

💡 **À retenir**

Il est élu au suffrage universel direct pour cinq ans.

⚠️ **À ne pas confondre**

Le Président est le chef de l'État.

Le Premier ministre dirige l'action du Gouvernement.

🔗 **Voir aussi**

1. [Gouvernement](SCR_GLO_0066)
2. [Premier ministre](SCR_GLO_0107)

3. [🔍 Rechercher un autre mot](SCR_GLO_SEARCH)
4. [📚 Retour au thème](SCR_GLO_THEME_T2)
5. [📖 Retour au glossaire](SCR_GLO_MENU)

## SCR_GLO_0110

### 📘 Présomption d'innocence

**Définition**

Toute personne est considérée innocente tant qu'elle n'a pas été reconnue coupable par un tribunal.

💡 **À retenir**

La culpabilité doit être prouvée.

🔗 **Voir aussi**

1. [Justice](SCR_GLO_0077)

2. [🔍 Rechercher un autre mot](SCR_GLO_SEARCH)
3. [📚 Retour au thème](SCR_GLO_THEME_T3)
4. [📖 Retour au glossaire](SCR_GLO_MENU)

## SCR_GLO_0111

### 📘 Procuration

**Définition**

Autorisation donnée à une autre personne pour voter à sa place.

💡 **À retenir**

Elle permet de voter en cas d'absence.

🔗 **Voir aussi**

1. [Vote](SCR_GLO_0137)

2. [🔍 Rechercher un autre mot](SCR_GLO_SEARCH)
3. [📚 Retour au thème](SCR_GLO_THEME_T2)
4. [📖 Retour au glossaire](SCR_GLO_MENU)

## SCR_GLO_0112

### 📘 Propriétaire

**Définition**

Personne qui possède un logement.

💡 **À retenir**

Le propriétaire peut louer son logement.

🔗 **Voir aussi**

1. [Bail](SCR_GLO_0007)

2. [🔍 Rechercher un autre mot](SCR_GLO_SEARCH)
3. [📚 Retour au thème](SCR_GLO_THEME_T5)
4. [📖 Retour au glossaire](SCR_GLO_MENU)

## SCR_GLO_0113

### 📘 Prostitution

**Définition**

Échange d'un acte sexuel contre une rémunération.

💡 **À retenir**

Le proxénétisme et le recours à la prostitution sont encadrés par la loi.

🔗 **Voir aussi**

1. [Traite des êtres humains](SCR_GLO_0131)

2. [🔍 Rechercher un autre mot](SCR_GLO_SEARCH)
3. [📚 Retour au thème](SCR_GLO_THEME_T3)
4. [📖 Retour au glossaire](SCR_GLO_MENU)

## SCR_GLO_0114

### 📘 Provence-Alpes-Côte d'Azur

**Définition**

Région située dans le sud-est de la France.

💡 **À retenir**

Elle est réputée pour la Méditerranée, les Alpes, Marseille, Nice et la lavande.

1. [🔍 Rechercher un autre mot](SCR_GLO_SEARCH)
2. [📚 Retour au thème](SCR_GLO_THEME_T4)
3. [📖 Retour au glossaire](SCR_GLO_MENU)

## SCR_GLO_0115

### 📘 Pyrénées

**Définition**

Chaîne de montagnes séparant la France et l'Espagne.

💡 **À retenir**

Elles forment une frontière naturelle.

🔗 **Voir aussi**

1. [Alpes](SCR_GLO_0002)

2. [🔍 Rechercher un autre mot](SCR_GLO_SEARCH)
3. [📚 Retour au thème](SCR_GLO_THEME_T4)
4. [📖 Retour au glossaire](SCR_GLO_MENU)

## SCR_GLO_0116

### 📘 Référendum

**Définition**

Consultation permettant au peuple de répondre directement à une question.

💡 **À retenir**

Les citoyens répondent généralement par "Oui" ou "Non".

🔗 **Voir aussi**

1. [Souveraineté nationale](SCR_GLO_0126)

2. [🔍 Rechercher un autre mot](SCR_GLO_SEARCH)
3. [📚 Retour au thème](SCR_GLO_THEME_T2)
4. [📖 Retour au glossaire](SCR_GLO_MENU)

## SCR_GLO_0117

### 📘 Région

**Définition**

La région est une collectivité territoriale regroupant plusieurs départements.

💡 **À retenir**

La France compte 18 régions.

🔗 **Voir aussi**

1. [Département](SCR_GLO_0041)

2. [🔍 Rechercher un autre mot](SCR_GLO_SEARCH)
3. [📚 Retour au thème](SCR_GLO_THEME_T2)
4. [📖 Retour au glossaire](SCR_GLO_MENU)

## SCR_GLO_0118

### 📘 République

**Définition**

Organisation politique dans laquelle le pouvoir appartient au peuple et s'exerce conformément à la Constitution.

💡 **À retenir**

La France est une République indivisible, laïque, démocratique et sociale.

⚠️ **À ne pas confondre**

République ≠ démocratie.

La République est une forme d'organisation de l'État.

La démocratie est une manière d'exercer le pouvoir.

🔗 **Voir aussi**

1. [Constitution](SCR_GLO_0032)
2. [Démocratie](SCR_GLO_0040)
3. [Souveraineté nationale](SCR_GLO_0126)

4. [🔍 Rechercher un autre mot](SCR_GLO_SEARCH)
5. [📚 Retour au thème](SCR_GLO_THEME_T1)
6. [📖 Retour au glossaire](SCR_GLO_MENU)

## SCR_GLO_0119

### 📘 Révolution française

**Définition**

Période commencée en 1789 qui met fin à la monarchie absolue et fonde de nouveaux principes politiques.

💡 **À retenir**

Elle marque la naissance des valeurs républicaines modernes.

🔗 **Voir aussi**

1. [Déclaration des droits de l'homme et du citoyen](SCR_GLO_0038)

2. [🔍 Rechercher un autre mot](SCR_GLO_SEARCH)
3. [📚 Retour au thème](SCR_GLO_THEME_T4)
4. [📖 Retour au glossaire](SCR_GLO_MENU)

## SCR_GLO_0120

### 📘 Salaire

**Définition**

Somme versée par l'employeur en contrepartie du travail effectué.

💡 **À retenir**

Le salaire est indiqué sur la fiche de paie.

🔗 **Voir aussi**

1. [Employeur](SCR_GLO_0051)

2. [🔍 Rechercher un autre mot](SCR_GLO_SEARCH)
3. [📚 Retour au thème](SCR_GLO_THEME_T5)
4. [📖 Retour au glossaire](SCR_GLO_MENU)

## SCR_GLO_0121

### 📘 Seconde Guerre mondiale

**Définition**

Conflit mondial de 1939 à 1945.

💡 **À retenir**

La Résistance a joué un rôle important dans la libération de la France.

1. [🔍 Rechercher un autre mot](SCR_GLO_SEARCH)
2. [📚 Retour au thème](SCR_GLO_THEME_T4)
3. [📖 Retour au glossaire](SCR_GLO_MENU)

## SCR_GLO_0122

### 📘 Seine

**Définition**

Fleuve qui traverse notamment Paris avant de se jeter dans la Manche.

💡 **À retenir**

La Seine est l'un des principaux fleuves français.

1. [🔍 Rechercher un autre mot](SCR_GLO_SEARCH)
2. [📚 Retour au thème](SCR_GLO_THEME_T4)
3. [📖 Retour au glossaire](SCR_GLO_MENU)

## SCR_GLO_0123

### 📘 Sénat

**Définition**

Le Sénat est la seconde assemblée du Parlement.

💡 **À retenir**

Les sénateurs représentent les collectivités territoriales.

⚠️ **À ne pas confondre**

Assemblée nationale ≠ Sénat.

🔗 **Voir aussi**

1. [Sénateur](SCR_GLO_0124)
2. [Parlement](SCR_GLO_0101)

3. [🔍 Rechercher un autre mot](SCR_GLO_SEARCH)
4. [📚 Retour au thème](SCR_GLO_THEME_T2)
5. [📖 Retour au glossaire](SCR_GLO_MENU)

## SCR_GLO_0124

### 📘 Sénateur

**Définition**

Le sénateur siège au Sénat.

💡 **À retenir**

Il participe au vote des lois.

🔗 **Voir aussi**

1. [Sénat](SCR_GLO_0123)

2. [🔍 Rechercher un autre mot](SCR_GLO_SEARCH)
3. [📚 Retour au thème](SCR_GLO_THEME_T2)
4. [📖 Retour au glossaire](SCR_GLO_MENU)

## SCR_GLO_0125

### 📘 Service public

**Définition**

Service assuré par une administration pour répondre aux besoins de la population.

💡 **À retenir**

Les services publics garantissent l'égalité d'accès pour tous.

🔗 **Voir aussi**

1. [Mairie](SCR_GLO_0088)
2. [Préfecture](SCR_GLO_0105)

3. [🔍 Rechercher un autre mot](SCR_GLO_SEARCH)
4. [📚 Retour au thème](SCR_GLO_THEME_T5)
5. [📖 Retour au glossaire](SCR_GLO_MENU)

## SCR_GLO_0126

### 📘 Souveraineté nationale

**Définition**

Principe selon lequel le pouvoir appartient au peuple.

💡 **À retenir**

Le peuple exerce sa souveraineté par ses représentants élus et par référendum.

⚠️ **À ne pas confondre**

La souveraineté appartient au peuple et non au Président de la République.

🔗 **Voir aussi**

1. [République](SCR_GLO_0118)
2. [Référendum](SCR_GLO_0116)
3. [Citoyen](SCR_GLO_0019)

4. [🔍 Rechercher un autre mot](SCR_GLO_SEARCH)
5. [📚 Retour au thème](SCR_GLO_THEME_T1)
6. [📖 Retour au glossaire](SCR_GLO_MENU)

## SCR_GLO_0127

### 📘 Suffrage universel

**Définition**

Mode d'élection dans lequel tous les citoyens remplissant les conditions peuvent voter.

💡 **À retenir**

En France, le vote est universel, égal et secret.

🔗 **Voir aussi**

1. [Vote](SCR_GLO_0137)

2. [🔍 Rechercher un autre mot](SCR_GLO_SEARCH)
3. [📚 Retour au thème](SCR_GLO_THEME_T2)
4. [📖 Retour au glossaire](SCR_GLO_MENU)

## SCR_GLO_0128

### 📘 Sûreté

**Définition**

Droit d'être protégé contre les arrestations arbitraires et de bénéficier d'un procès équitable.

💡 **À retenir**

La justice protège les libertés individuelles.

🔗 **Voir aussi**

1. [Présomption d'innocence](SCR_GLO_0110)
2. [Justice](SCR_GLO_0077)

3. [🔍 Rechercher un autre mot](SCR_GLO_SEARCH)
4. [📚 Retour au thème](SCR_GLO_THEME_T3)
5. [📖 Retour au glossaire](SCR_GLO_MENU)

## SCR_GLO_0129

### 📘 Titre de séjour

**Définition**

Document autorisant un ressortissant étranger à séjourner en France pendant une durée déterminée.

💡 **À retenir**

Il doit être renouvelé avant sa date d'expiration.

🔗 **Voir aussi**

1. [Préfecture](SCR_GLO_0105)

2. [🔍 Rechercher un autre mot](SCR_GLO_SEARCH)
3. [📚 Retour au thème](SCR_GLO_THEME_T5)
4. [📖 Retour au glossaire](SCR_GLO_MENU)

## SCR_GLO_0130

### 📘 Tour Eiffel

**Définition**

Monument emblématique situé à Paris, construit pour l'Exposition universelle de 1889.

💡 **À retenir**

Elle est l'un des symboles les plus connus de la France.

1. [🔍 Rechercher un autre mot](SCR_GLO_SEARCH)
2. [📚 Retour au thème](SCR_GLO_THEME_T4)
3. [📖 Retour au glossaire](SCR_GLO_MENU)

## SCR_GLO_0131

### 📘 Traite des êtres humains

**Définition**

Exploitation d'une personne par la contrainte, la menace ou la tromperie.

💡 **À retenir**

La traite des êtres humains est un crime.

1. [🔍 Rechercher un autre mot](SCR_GLO_SEARCH)
2. [📚 Retour au thème](SCR_GLO_THEME_T3)
3. [📖 Retour au glossaire](SCR_GLO_MENU)

## SCR_GLO_0132

### 📘 UNESCO

**Définition**

Organisation des Nations unies chargée notamment de protéger le patrimoine mondial.

💡 **À retenir**

Plusieurs sites français sont inscrits au patrimoine mondial de l'UNESCO.

🔗 **Voir aussi**

1. [Patrimoine](SCR_GLO_0103)

2. [🔍 Rechercher un autre mot](SCR_GLO_SEARCH)
3. [📚 Retour au thème](SCR_GLO_THEME_T4)
4. [📖 Retour au glossaire](SCR_GLO_MENU)

## SCR_GLO_0133

### 📘 Union européenne

**Définition**

Organisation regroupant plusieurs États européens qui coopèrent dans de nombreux domaines.

💡 **À retenir**

La France est membre de l'Union européenne.

🔗 **Voir aussi**

1. [Parlement européen](SCR_GLO_0102)
2. [Euro](SCR_GLO_0055)

3. [🔍 Rechercher un autre mot](SCR_GLO_SEARCH)
4. [📚 Retour au thème](SCR_GLO_THEME_T2)
5. [📖 Retour au glossaire](SCR_GLO_MENU)

## SCR_GLO_0134

### 📘 Urgences

**Définition**

Situation nécessitant une prise en charge médicale immédiate.

💡 **À retenir**

En cas d'urgence médicale, composez le 15.

🔗 **Voir aussi**

1. [Hôpital](SCR_GLO_0071)

2. [🔍 Rechercher un autre mot](SCR_GLO_SEARCH)
3. [📚 Retour au thème](SCR_GLO_THEME_T5)
4. [📖 Retour au glossaire](SCR_GLO_MENU)

## SCR_GLO_0135

### 📘 Vercingétorix

**Définition**

Chef gaulois qui s'est opposé à Jules César.

💡 **À retenir**

Il est devenu un symbole de la résistance gauloise.

🔗 **Voir aussi**

1. [Gaule](SCR_GLO_0064)

2. [🔍 Rechercher un autre mot](SCR_GLO_SEARCH)
3. [📚 Retour au thème](SCR_GLO_THEME_T4)
4. [📖 Retour au glossaire](SCR_GLO_MENU)

## SCR_GLO_0136

### 📘 Violence

**Définition**

Acte portant atteinte à une personne, physiquement, psychologiquement, sexuellement ou économiquement.

💡 **À retenir**

Toutes les formes de violence sont interdites.

🔗 **Voir aussi**

1. [Consentement](SCR_GLO_0031)

2. [🔍 Rechercher un autre mot](SCR_GLO_SEARCH)
3. [📚 Retour au thème](SCR_GLO_THEME_T3)
4. [📖 Retour au glossaire](SCR_GLO_MENU)

## SCR_GLO_0137

### 📘 Vote

**Définition**

Action qui consiste à choisir un candidat ou répondre à une question lors d'un référendum.

💡 **À retenir**

Le vote est un droit civique.

🔗 **Voir aussi**

1. [Élection](SCR_GLO_0050)

2. [🔍 Rechercher un autre mot](SCR_GLO_SEARCH)
3. [📚 Retour au thème](SCR_GLO_THEME_T2)
4. [📖 Retour au glossaire](SCR_GLO_MENU)
