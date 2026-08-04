---
favicon: https://upload.wikimedia.org/wikipedia/commons/3/3e/Icon_Loupe_256x256.png
avatar: https://upload.wikimedia.org/wikipedia/commons/3/3e/Icon_Loupe_256x256.png
variablesDynamiques: true
plugins: readcsv
style: |
    .admonition a {border:none}
---

# Retrouver les informations d'un établissement scolaire

Indique le code UAI d'un établissement et je te donnerai plus d'informations


`@UAI = @INPUT : Informations établissement`


\`:::info
Ce chatbot réutilise les données publiées sur la *Plateforme ouverte des données Éducation, Sports et Jeunesse* [:link:](https://data.education.gouv.fr).


Plus précisément les données proviennent de l'*Annuaire de l'éducation* [:link:](https://data.education.gouv.fr/explore/dataset/fr-en-annuaire-education/table/?disjunctive.type_etablissement&disjunctive.libelle_academie&disjunctive.libelle_departement&disjunctive.libelle_region&disjunctive.ministere_tutelle&disjunctive.appartenance_education_prioritaire&disjunctive.nom_commune&disjunctive.code_postal&disjunctive.code_departement).
:::
\`


1. [Je n'ai que le nom de l'établissement](Recherche par le nom de l'établissement)
2. [Je n'ai que la ville](Recherche par la ville)



## Informations établissement


`@UAIpurified = calc(@UAI.trim().toUpperCase())`

`@isUAI = calc(@UAIpurified.length)`

`if !@UAI || @isUAI != 8`
D'accord, donne-moi l'UAI de l'établissement
`endif`



`if @isUAI==8`

```readcsv https://data.education.gouv.fr/api/explore/v2.1/catalog/datasets/fr-en-annuaire-education/records?select=identifiant_de_l_etablissement%2C%20nom_etablissement%2Cstatut_public_prive%2Cadresse_1%2Cadresse_2%2Cadresse_3%2Ccode_postal%2Cnom_commune%2Ctelephone%2Cmail%2Clibelle_departement%2Clatitude%2Clongitude&where=identifiant_de_l_etablissement%20like%20%22`@UAIpurified`%22
condition: $1.startsWith("`@UAIpurified`")

**$2**

Il s'agit d'un établissement $3

Dans le département : $11

Voici son adresse précise : 
$4
$5
$6
$7 $8

Téléphone : $9
Mail : $10


[Voir sur la carte](https://www.openstreetmap.org/?#map=18/$12/$13)

```




`@UAI = undefined`
`@isUAI = undefined`
`@UAIpurified = undefined`

`@UAI = @INPUT : Informations établissement`


1. [Je veux faire une nouvelle recherche à partir du nom de l'établissement](Recherche par le nom de l'établissement)
2. [Je veux faire une nouvelle recherche à partir de la ville](Recherche par la ville)
3. [Je veux faire une nouvelle recherche à partir de l'UAI](Informations établissement)

`endif`

## Recherche par le nom de l'établissement


`if !@schoolName`
D'accord, donne-moi un mot clé présent dans le nom de l'établissement
`endif`




`if @schoolName`

`@schoolNamepurified = calc(@schoolName.trim())`

```readcsv https://data.education.gouv.fr/api/explore/v2.1/catalog/datasets/fr-en-annuaire-education/records?select=identifiant_de_l_etablissement%2C%20nom_etablissement%2Cstatut_public_prive%2Cadresse_1%2Cadresse_2%2Cadresse_3%2Ccode_postal%2Cnom_commune%2Ctelephone%2Cmail%2Clibelle_departement%2Clatitude%2Clongitude&where=nom_etablissement%20like%20%22`@schoolNamepurified`%22
condition: $2.toLowerCase().includes("`@schoolNamepurified`".toLowerCase())

**$2**

Il s'agit d'un établissement $3

Dans le département : $11

Voici son adresse précise : 
$4
$5
$6
$7 $8

Téléphone : $9
Mail : $10


[Voir sur la carte](https://www.openstreetmap.org/?#map=18/$12/$13)

<br>

```



`@schoolName = undefined`

`@schoolName = @INPUT : Recherche par le nom de l'établissement`

1. [Je veux faire une nouvelle recherche à partir du nom de l'établissement](Recherche par le nom de l'établissement)
2. [Je veux faire une nouvelle recherche à partir de la ville](Recherche par la ville)
3. [Je veux faire une nouvelle recherche à partir de l'UAI](Informations établissement)

`endif`

## Recherche par la ville


`if !@schoolLocation`
D'accord, donne-moi le nom de la ville, ou juste un des mots clés présents dans le nom de la ville
`endif`




`if @schoolLocation`

`@schoolLocationpurified = calc(@schoolLocation.trim())`

```readcsv https://data.education.gouv.fr/api/explore/v2.1/catalog/datasets/fr-en-annuaire-education/records?select=identifiant_de_l_etablissement%2C%20nom_etablissement%2Cstatut_public_prive%2Cadresse_1%2Cadresse_2%2Cadresse_3%2Ccode_postal%2Cnom_commune%2Ctelephone%2Cmail%2Clibelle_departement%2Clatitude%2Clongitude&where=nom_commune%20like%20%22`@schoolLocationpurified`%22
condition: $8.toLowerCase().includes("`@schoolLocationpurified`".toLowerCase())

**$2**

Il s'agit d'un établissement $3

Dans le département : $11

Voici son adresse précise : 
$4
$5
$6
$7 $8

Téléphone : $9
Mail : $10


[Voir sur la carte](https://www.openstreetmap.org/?#map=18/$12/$13)

<br>

```


`@schoolLocation = undefined`

`@schoolLocation = @INPUT : Recherche par la ville`

1. [Je veux faire une nouvelle recherche à partir du nom de l'établissement](Recherche par le nom de l'établissement)
2. [Je veux faire une nouvelle recherche à partir de la ville](Recherche par la ville)
3. [Je veux faire une nouvelle recherche à partir de l'UAI](Informations établissement)

`endif`