---
clavier: false
obfuscate: true
contenuDynamique: true
variablesDynamiques: true
plugins: readcsv
typewriter: false
---

# Test opérationnel — Bilan Coach Civique

Ce fichier permet de tester le **premier bilan adaptatif**.

1. [🧭 Commencer le bilan](SCR_BIL_MENU)

## SCR_BIL_MENU

### 🧭 Mon bilan

Le premier bilan comprend **25 questions** sélectionnées selon votre examen et votre scénario pédagogique.

1. [🌱 Faire mon premier bilan](SCR_BIL_EXAMEN)
2. [📈 Bilan de progression](SCR_BIL_PROG_INFO)
3. [🏠 Retour à l'accueil]()

## SCR_BIL_EXAMEN

### Quel examen préparez-vous ?

Cette réponse ne compte pas dans votre score.

1. [🪪 Carte de séjour pluriannuelle @type_examen=CSP](SCR_BIL_REVISION)
2. [🏡 Carte de résident @type_examen=CR](SCR_BIL_REVISION)
3. [🇫🇷 Naturalisation @type_examen=NAT](SCR_BIL_REVISION)

## SCR_BIL_REVISION

### Depuis quand révisez-vous ?

1. [Je commence aujourd'hui](SCR_BIL_DATE_R0)
2. [Depuis quelques jours](SCR_BIL_DATE_R1)
3. [Depuis quelques semaines](SCR_BIL_DATE_R2)
4. [Depuis plus d'un mois](SCR_BIL_DATE_R2)

## SCR_BIL_DATE_R0

### Quand pensez-vous passer votre examen ?

1. [Dans une semaine ou moins](SCR_BIL_DEJA_EQ)
2. [Dans deux semaines](SCR_BIL_DEJA_DEC)
3. [Dans un mois](SCR_BIL_DEJA_DEC)
4. [Plus tard](SCR_BIL_DEJA_DEC)

## SCR_BIL_DATE_R1

### Quand pensez-vous passer votre examen ?

1. [Dans une semaine ou moins](SCR_BIL_DEJA_INT)
2. [Dans deux semaines](SCR_BIL_DEJA_EQ)
3. [Dans un mois](SCR_BIL_DEJA_DEC)
4. [Plus tard](SCR_BIL_DEJA_DEC)

## SCR_BIL_DATE_R2

### Quand pensez-vous passer votre examen ?

1. [Dans une semaine ou moins](SCR_BIL_DEJA_INT)
2. [Dans deux semaines](SCR_BIL_DEJA_INT)
3. [Dans un mois](SCR_BIL_DEJA_EQ)
4. [Plus tard](SCR_BIL_DEJA_EQ)

## SCR_BIL_DEJA_DEC

### Avez-vous déjà réalisé un bilan sur NovaFrate ?

1. [Non, c'est mon premier bilan](SCR_BIL_SCENARIO_DEC)
2. [Oui, j'ai déjà un score](SCR_BIL_DEJA_FAIT)

## SCR_BIL_DEJA_EQ

### Avez-vous déjà réalisé un bilan sur NovaFrate ?

1. [Non, c'est mon premier bilan](SCR_BIL_SCENARIO_EQ)
2. [Oui, j'ai déjà un score](SCR_BIL_DEJA_FAIT)

## SCR_BIL_DEJA_INT

### Avez-vous déjà réalisé un bilan sur NovaFrate ?

1. [Non, c'est mon premier bilan](SCR_BIL_SCENARIO_INT)
2. [Oui, j'ai déjà un score](SCR_BIL_DEJA_FAIT)

## SCR_BIL_DEJA_FAIT

### 📈 Le bilan de progression est plus adapté

Vous pouvez mesurer votre évolution à partir de votre dernier score.

1. [Faire le bilan de progression](SCR_BIL_PROG_INFO)
2. [Refaire malgré tout un premier bilan](SCR_BIL_REVISION)
3. [Retour au bilan](SCR_BIL_MENU)

## SCR_BIL_SCENARIO_DEC

### Votre scénario : Découverte

`@score = 0`
`@score_t1 = 0`
`@score_t2 = 0`
`@score_t3 = 0`
`@score_t4 = 0`
`@score_t5 = 0`
Le parcours privilégie les questions faciles et intermédiaires.

Le bilan comporte 25 questions. Aucune correction ne sera affichée avant le résultat final.

`if @type_examen == "CSP"`
!SelectNext: BIL_CSP_DEC_Q01
`endif`
`if @type_examen == "CR"`
!SelectNext: BIL_CR_DEC_Q01
`endif`
`if @type_examen == "NAT"`
!SelectNext: BIL_NAT_DEC_Q01
`endif`

## SCR_BIL_SCENARIO_EQ

### Votre scénario : Équilibré

`@score = 0`
`@score_t1 = 0`
`@score_t2 = 0`
`@score_t3 = 0`
`@score_t4 = 0`
`@score_t5 = 0`
Le parcours propose un mélange progressif de questions faciles, intermédiaires et difficiles.

Le bilan comporte 25 questions. Aucune correction ne sera affichée avant le résultat final.

`if @type_examen == "CSP"`
!SelectNext: BIL_CSP_EQ_Q01
`endif`
`if @type_examen == "CR"`
!SelectNext: BIL_CR_EQ_Q01
`endif`
`if @type_examen == "NAT"`
!SelectNext: BIL_NAT_EQ_Q01
`endif`

## SCR_BIL_SCENARIO_INT

### Votre scénario : Intensif

`@score = 0`
`@score_t1 = 0`
`@score_t2 = 0`
`@score_t3 = 0`
`@score_t4 = 0`
`@score_t5 = 0`
Le parcours contient davantage de questions intermédiaires et difficiles.

Le bilan comporte 25 questions. Aucune correction ne sera affichée avant le résultat final.

`if @type_examen == "CSP"`
!SelectNext: BIL_CSP_INT_Q01
`endif`
`if @type_examen == "CR"`
!SelectNext: BIL_CR_INT_Q01
`endif`
`if @type_examen == "NAT"`
!SelectNext: BIL_NAT_INT_Q01
`endif`

## BIL_CSP_DEC_Q01

### Question 1 sur 25

**Quelle est la mer au sud de la France métropolitaine ?**

1) [La Manche.](BIL_CSP_DEC_Q02)
1) [La mer du Nord.](BIL_CSP_DEC_Q02)
1) [L'océan Atlantique.](BIL_CSP_DEC_Q02)
1) [La mer Méditerranée. @score=calc(@score+1) @score_t4=calc(@score_t4+1)](BIL_CSP_DEC_Q02)

## BIL_CSP_DEC_Q02

### Question 2 sur 25

**Quelle est la monnaie utilisée en France ?**

1) [Le franc.](BIL_CSP_DEC_Q03)
1) [Le dollar.](BIL_CSP_DEC_Q03)
1) [La livre.](BIL_CSP_DEC_Q03)
1) [L'euro. @score=calc(@score+1) @score_t2=calc(@score_t2+1)](BIL_CSP_DEC_Q03)

## BIL_CSP_DEC_Q03

### Question 3 sur 25

**Qu'est-ce qui est traditionnellement organisé sur les Champs-Élysées le 14 juillet pour célébrer la fête nationale ?**

1) [Un feu d'artifice.](BIL_CSP_DEC_Q04)
1) [Un concert public.](BIL_CSP_DEC_Q04)
1) [Le défilé militaire. @score=calc(@score+1) @score_t1=calc(@score_t1+1)](BIL_CSP_DEC_Q04)
1) [Une manifestation citoyenne.](BIL_CSP_DEC_Q04)

## BIL_CSP_DEC_Q04

### Question 4 sur 25

**A-t-on le droit de ne pas respecter une loi ?**

1) [Oui.](BIL_CSP_DEC_Q05)
1) [Oui, si l'on n'est pas d'accord.](BIL_CSP_DEC_Q05)
1) [Non, tout le monde doit respecter la loi. @score=calc(@score+1) @score_t2=calc(@score_t2+1)](BIL_CSP_DEC_Q05)
1) [Oui, selon sa religion.](BIL_CSP_DEC_Q05)

## BIL_CSP_DEC_Q05

### Question 5 sur 25

**« Liberté, Égalité, Fraternité », c'est :**

1) [L'hymne national.](BIL_CSP_DEC_Q06)
1) [La devise de la République française. @score=calc(@score+1) @score_t1=calc(@score_t1+1)](BIL_CSP_DEC_Q06)
1) [Le drapeau français.](BIL_CSP_DEC_Q06)
1) [La Constitution.](BIL_CSP_DEC_Q06)

## BIL_CSP_DEC_Q06

### Question 6 sur 25

**En quelle année a débuté la Révolution française ?**

1) [1792.](BIL_CSP_DEC_Q07)
1) [1789. @score=calc(@score+1) @score_t4=calc(@score_t4+1)](BIL_CSP_DEC_Q07)
1) [1815.](BIL_CSP_DEC_Q07)
1) [1848.](BIL_CSP_DEC_Q07)

## BIL_CSP_DEC_Q07

### Question 7 sur 25

**Quel numéro d'urgence permet d'appeler les pompiers ?**

1) [15.](BIL_CSP_DEC_Q08)
1) [17.](BIL_CSP_DEC_Q08)
1) [18. @score=calc(@score+1) @score_t5=calc(@score_t5+1)](BIL_CSP_DEC_Q08)
1) [114.](BIL_CSP_DEC_Q08)

## BIL_CSP_DEC_Q08

### Question 8 sur 25

**Lequel de ces pays est un pays fondateur de l'Union européenne ?**

1) [L'Espagne.](BIL_CSP_DEC_Q09)
1) [La Pologne.](BIL_CSP_DEC_Q09)
1) [La France. @score=calc(@score+1) @score_t2=calc(@score_t2+1)](BIL_CSP_DEC_Q09)
1) [La Roumanie.](BIL_CSP_DEC_Q09)

## BIL_CSP_DEC_Q09

### Question 9 sur 25

**Quel est l'un des symboles officiels de la République française ?**

1) [Le coq gaulois.](BIL_CSP_DEC_Q10)
1) [La tour Eiffel.](BIL_CSP_DEC_Q10)
1) [Marianne. @score=calc(@score+1) @score_t1=calc(@score_t1+1)](BIL_CSP_DEC_Q10)
1) [Le Louvre.](BIL_CSP_DEC_Q10)

## BIL_CSP_DEC_Q10

### Question 10 sur 25

**En France, est-ce légal d'être marié à plusieurs personnes en même temps ?**

1) [Oui.](BIL_CSP_DEC_Q11)
1) [Oui, avec l'accord des époux.](BIL_CSP_DEC_Q11)
1) [Oui, selon la religion.](BIL_CSP_DEC_Q11)
1) [Non. @score=calc(@score+1) @score_t3=calc(@score_t3+1)](BIL_CSP_DEC_Q11)

## BIL_CSP_DEC_Q11

### Question 11 sur 25

**Est-il toujours possible de divorcer ?**

1) [Non.](BIL_CSP_DEC_Q12)
1) [Seulement avec l'accord des enfants.](BIL_CSP_DEC_Q12)
1) [Seulement dans certains départements.](BIL_CSP_DEC_Q12)
1) [Oui. @score=calc(@score+1) @score_t3=calc(@score_t3+1)](BIL_CSP_DEC_Q12)

## BIL_CSP_DEC_Q12

### Question 12 sur 25

**Quelle proposition est correcte ? La liberté d'expression :**

1) [Permet de tout dire, sans aucune limite.](BIL_CSP_DEC_Q13)
1) [Permet d'exprimer ses idées et ses opinions, dans le respect de la loi et des droits des autres. @score=calc(@score+1) @score_t1=calc(@score_t1+1)](BIL_CSP_DEC_Q13)
1) [Permet d'insulter les autres librement.](BIL_CSP_DEC_Q13)
1) [Est réservée aux journalistes.](BIL_CSP_DEC_Q13)

## BIL_CSP_DEC_Q13

### Question 13 sur 25

**Quel océan borde la côte ouest française ?**

1) [L'océan Pacifique.](BIL_CSP_DEC_Q14)
1) [L'océan Indien.](BIL_CSP_DEC_Q14)
1) [L'océan Arctique.](BIL_CSP_DEC_Q14)
1) [L'océan Atlantique. @score=calc(@score+1) @score_t4=calc(@score_t4+1)](BIL_CSP_DEC_Q14)

## BIL_CSP_DEC_Q14

### Question 14 sur 25

**La peine de mort est :**

1) [Autorisée dans certains cas.](BIL_CSP_DEC_Q15)
1) [Interdite en France. @score=calc(@score+1) @score_t3=calc(@score_t3+1)](BIL_CSP_DEC_Q15)
1) [Décidée par le Président de la République.](BIL_CSP_DEC_Q15)
1) [Réservée aux crimes les plus graves.](BIL_CSP_DEC_Q15)

## BIL_CSP_DEC_Q15

### Question 15 sur 25

**Le régime politique de la France est :**

1) [Une monarchie.](BIL_CSP_DEC_Q16)
1) [Une République. @score=calc(@score+1) @score_t1=calc(@score_t1+1)](BIL_CSP_DEC_Q16)
1) [Une dictature.](BIL_CSP_DEC_Q16)
1) [Un empire.](BIL_CSP_DEC_Q16)

## BIL_CSP_DEC_Q16

### Question 16 sur 25

**Quelle est la première démarche à réaliser pour chercher un emploi ?**

1) [Aller directement à la mairie.](BIL_CSP_DEC_Q17)
1) [Demander un permis de conduire.](BIL_CSP_DEC_Q17)
1) [Ouvrir un compte bancaire.](BIL_CSP_DEC_Q17)
1) [S'inscrire à France Travail. @score=calc(@score+1) @score_t5=calc(@score_t5+1)](BIL_CSP_DEC_Q17)

## BIL_CSP_DEC_Q17

### Question 17 sur 25

**Quand célèbre-t-on Noël ?**

1) [Le 1er janvier.](BIL_CSP_DEC_Q18)
1) [Le 14 juillet.](BIL_CSP_DEC_Q18)
1) [Le 11 novembre.](BIL_CSP_DEC_Q18)
1) [Le 25 décembre. @score=calc(@score+1) @score_t4=calc(@score_t4+1)](BIL_CSP_DEC_Q18)

## BIL_CSP_DEC_Q18

### Question 18 sur 25

**Qu'est-ce que le SMIC ?**

1) [Une prime.](BIL_CSP_DEC_Q19)
1) [Une allocation.](BIL_CSP_DEC_Q19)
1) [Une retraite.](BIL_CSP_DEC_Q19)
1) [Le salaire minimum légal. @score=calc(@score+1) @score_t5=calc(@score_t5+1)](BIL_CSP_DEC_Q19)

## BIL_CSP_DEC_Q19

### Question 19 sur 25

**De quelle année date la Déclaration des droits de l'homme et du citoyen ?**

1) [1791.](BIL_CSP_DEC_Q20)
1) [1789. @score=calc(@score+1) @score_t3=calc(@score_t3+1)](BIL_CSP_DEC_Q20)
1) [1905.](BIL_CSP_DEC_Q20)
1) [1958.](BIL_CSP_DEC_Q20)

## BIL_CSP_DEC_Q20

### Question 20 sur 25

**Quelle liberté permet à une personne de ne pas avoir de religion ?**

1) [La liberté d'expression.](BIL_CSP_DEC_Q21)
1) [La liberté de circulation.](BIL_CSP_DEC_Q21)
1) [La liberté de conscience. @score=calc(@score+1) @score_t3=calc(@score_t3+1)](BIL_CSP_DEC_Q21)
1) [La liberté de réunion.](BIL_CSP_DEC_Q21)

## BIL_CSP_DEC_Q21

### Question 21 sur 25

**Qui est élu lors des élections municipales ?**

1) [Le maire.](BIL_CSP_DEC_Q22)
1) [Les députés.](BIL_CSP_DEC_Q22)
1) [Les sénateurs.](BIL_CSP_DEC_Q22)
1) [Les conseillers municipaux. @score=calc(@score+1) @score_t2=calc(@score_t2+1)](BIL_CSP_DEC_Q22)

## BIL_CSP_DEC_Q22

### Question 22 sur 25

**La séparation des pouvoirs est un principe fondamental. Quels sont les trois pouvoirs concernés ?**

1) [Le Président, le Sénat et les juges.](BIL_CSP_DEC_Q23)
1) [Le Gouvernement, les maires et les préfets.](BIL_CSP_DEC_Q23)
1) [Le pouvoir exécutif, le pouvoir législatif et le pouvoir judiciaire. @score=calc(@score+1) @score_t2=calc(@score_t2+1)](BIL_CSP_DEC_Q23)
1) [Les ministres, les députés et les policiers.](BIL_CSP_DEC_Q23)

## BIL_CSP_DEC_Q23

### Question 23 sur 25

**Quel numéro d'urgence permet d'appeler le SAMU ?**

1) [17.](BIL_CSP_DEC_Q24)
1) [18.](BIL_CSP_DEC_Q24)
1) [15. @score=calc(@score+1) @score_t5=calc(@score_t5+1)](BIL_CSP_DEC_Q24)
1) [112.](BIL_CSP_DEC_Q24)

## BIL_CSP_DEC_Q24

### Question 24 sur 25

**Qui était Molière ?**

1) [Un peintre.](BIL_CSP_DEC_Q25)
1) [Un roi.](BIL_CSP_DEC_Q25)
1) [Un musicien.](BIL_CSP_DEC_Q25)
1) [Un écrivain et dramaturge français. @score=calc(@score+1) @score_t4=calc(@score_t4+1)](BIL_CSP_DEC_Q25)

## BIL_CSP_DEC_Q25

### Question 25 sur 25

**Dans quels établissements scolaires vont les élèves après l'école élémentaire ?**

1) [Le lycée.](BIL_CSP_DEC_RESULT)
1) [L'université.](BIL_CSP_DEC_RESULT)
1) [L'école maternelle.](BIL_CSP_DEC_RESULT)
1) [Le collège. @score=calc(@score+1) @score_t5=calc(@score_t5+1)](BIL_CSP_DEC_RESULT)

## BIL_CSP_DEC_RESULT

`@pourcentage = calc(@score*4)`
### 🎉 Votre bilan est terminé

Vous avez obtenu **`@score` / 25**, soit **`@pourcentage` %**.

`if @score <= 9`
### 🌱 Profil 1 — Bases à construire
Commencez par les notions fondamentales et révisez régulièrement par courtes séances.
`endif`
`if @score >= 10 && @score <= 15`
### 🧱 Profil 2 — Connaissances en construction
Consolidez les thèmes les moins maîtrisés avant de réaliser un examen blanc.
`endif`
`if @score >= 16 && @score <= 20`
### 🚀 Profil 3 — Niveau encourageant
Poursuivez avec des entraînements ciblés et des mises en situation.
`endif`
`if @score >= 21`
### ⭐ Profil 4 — Très bonne préparation
Votre niveau est solide. Travaillez maintenant les pièges et les examens blancs.
`endif`

1. [Voir mes scores par thématique](BIL_CSP_DEC_THEMES)

## BIL_CSP_DEC_THEMES

### 📊 Résultats par thématique

- **Principes et valeurs de la République** : `@score_t1` / 5
- **Système institutionnel et politique français** : `@score_t2` / 5
- **Droits et devoirs** : `@score_t3` / 5
- **Histoire, géographie, patrimoine et culture** : `@score_t4` / 5
- **Vivre dans la société française** : `@score_t5` / 5

1. [Voir mes recommandations](BIL_CSP_DEC_RECO)

## BIL_CSP_DEC_RECO

### 🧭 Mes priorités de révision

`if @score_t1 <= 2`
- 📚 **Priorité : Principes et valeurs de la République**
`endif`
`if @score_t2 <= 2`
- 📚 **Priorité : Système institutionnel et politique français**
`endif`
`if @score_t3 <= 2`
- 📚 **Priorité : Droits et devoirs**
`endif`
`if @score_t4 <= 2`
- 📚 **Priorité : Histoire, géographie, patrimoine et culture**
`endif`
`if @score_t5 <= 2`
- 📚 **Priorité : Vivre dans la société française**
`endif`

Commencez par les priorités affichées, puis entraînez-vous à nouveau sur ces thèmes.

1. [📚 Commencer mes révisions](SCR_REV_MENU)
2. [📝 M'entraîner](SCR_ENT_MENU)
3. [🔄 Refaire le bilan](SCR_BIL_EXAMEN)
4. [🏠 Retour au menu principal](MENU_PRINCIPAL)

## BIL_CSP_EQ_Q01

### Question 1 sur 25

**Quel est le nom de l'hymne national français ?**

1) [Liberté, Égalité, Fraternité.](BIL_CSP_EQ_Q02)
1) [Le Chant du départ.](BIL_CSP_EQ_Q02)
1) [La Marseillaise. @score=calc(@score+1) @score_t1=calc(@score_t1+1)](BIL_CSP_EQ_Q02)
1) [Le drapeau tricolore.](BIL_CSP_EQ_Q02)

## BIL_CSP_EQ_Q02

### Question 2 sur 25

**Quel est le rôle de l'autorité judiciaire ?**

1) [Voter les lois.](BIL_CSP_EQ_Q03)
1) [Diriger le Gouvernement.](BIL_CSP_EQ_Q03)
1) [Rendre la justice et veiller au respect de la loi. @score=calc(@score+1) @score_t2=calc(@score_t2+1)](BIL_CSP_EQ_Q03)
1) [Organiser les élections.](BIL_CSP_EQ_Q03)

## BIL_CSP_EQ_Q03

### Question 3 sur 25

**Une femme peut-elle créer son entreprise ?**

1) [Non.](BIL_CSP_EQ_Q04)
1) [Seulement avec l'autorisation de son mari.](BIL_CSP_EQ_Q04)
1) [Seulement dans certains métiers.](BIL_CSP_EQ_Q04)
1) [Oui. @score=calc(@score+1) @score_t5=calc(@score_t5+1)](BIL_CSP_EQ_Q04)

## BIL_CSP_EQ_Q04

### Question 4 sur 25

**L'autorité parentale prévoit l'obligation :**

1) [D'assurer la protection, l'éducation et l'entretien de l'enfant. @score=calc(@score+1) @score_t5=calc(@score_t5+1)](BIL_CSP_EQ_Q05)
1) [De choisir la religion de l'enfant sans son avis.](BIL_CSP_EQ_Q05)
1) [De décider seul de l'avenir professionnel de l'enfant.](BIL_CSP_EQ_Q05)
1) [De représenter l'enfant dans tous les actes de la vie civile, sans aucune limite.](BIL_CSP_EQ_Q05)

## BIL_CSP_EQ_Q05

### Question 5 sur 25

**En quelle année la loi de séparation des Églises et de l'État a-t-elle été votée ?**

1) [1789.](BIL_CSP_EQ_Q06)
1) [1905. @score=calc(@score+1) @score_t1=calc(@score_t1+1)](BIL_CSP_EQ_Q06)
1) [1958.](BIL_CSP_EQ_Q06)
1) [1946.](BIL_CSP_EQ_Q06)

## BIL_CSP_EQ_Q06

### Question 6 sur 25

**« La France est une République indivisible, ..., démocratique et sociale. » Quel mot complète correctement l'article 1er de la Constitution ?**

1) [Fédérale.](BIL_CSP_EQ_Q07)
1) [Catholique.](BIL_CSP_EQ_Q07)
1) [Laïque. @score=calc(@score+1) @score_t1=calc(@score_t1+1)](BIL_CSP_EQ_Q07)
1) [Monarchique.](BIL_CSP_EQ_Q07)

## BIL_CSP_EQ_Q07

### Question 7 sur 25

**Quelle guerre a eu lieu entre 1914 et 1918 ?**

1) [La Seconde Guerre mondiale.](BIL_CSP_EQ_Q08)
1) [La guerre de Cent Ans.](BIL_CSP_EQ_Q08)
1) [La guerre d'Algérie.](BIL_CSP_EQ_Q08)
1) [La Première Guerre mondiale. @score=calc(@score+1) @score_t4=calc(@score_t4+1)](BIL_CSP_EQ_Q08)

## BIL_CSP_EQ_Q08

### Question 8 sur 25

**Quelle liberté permet à une personne de ne pas avoir de religion ?**

1) [La liberté d'expression.](BIL_CSP_EQ_Q09)
1) [La liberté de circulation.](BIL_CSP_EQ_Q09)
1) [La liberté de conscience. @score=calc(@score+1) @score_t3=calc(@score_t3+1)](BIL_CSP_EQ_Q09)
1) [La liberté de réunion.](BIL_CSP_EQ_Q09)

## BIL_CSP_EQ_Q09

### Question 9 sur 25

**Le régime politique de la France est :**

1) [Une monarchie.](BIL_CSP_EQ_Q10)
1) [Une République. @score=calc(@score+1) @score_t1=calc(@score_t1+1)](BIL_CSP_EQ_Q10)
1) [Une dictature.](BIL_CSP_EQ_Q10)
1) [Un empire.](BIL_CSP_EQ_Q10)

## BIL_CSP_EQ_Q10

### Question 10 sur 25

**Quel écrivain est français ?**

1) [William Shakespeare.](BIL_CSP_EQ_Q11)
1) [Miguel de Cervantes.](BIL_CSP_EQ_Q11)
1) [Victor Hugo. @score=calc(@score+1) @score_t4=calc(@score_t4+1)](BIL_CSP_EQ_Q11)
1) [Johann Wolfgang von Goethe.](BIL_CSP_EQ_Q11)

## BIL_CSP_EQ_Q11

### Question 11 sur 25

**Qu'est-ce que la liberté d'expression ?**

1) [Le droit de tout dire sans aucune limite.](BIL_CSP_EQ_Q12)
1) [Le droit d'exprimer ses idées et ses opinions dans le respect de la loi et des droits des autres. @score=calc(@score+1) @score_t3=calc(@score_t3+1)](BIL_CSP_EQ_Q12)
1) [Le droit d'insulter les autres.](BIL_CSP_EQ_Q12)
1) [Une liberté réservée aux journalistes.](BIL_CSP_EQ_Q12)

## BIL_CSP_EQ_Q12

### Question 12 sur 25

**Qu'est-ce que le pouvoir exécutif ?**

1) [Il vote les lois.](BIL_CSP_EQ_Q13)
1) [Il rend la justice.](BIL_CSP_EQ_Q13)
1) [Il met en œuvre les lois et dirige l'action du Gouvernement. @score=calc(@score+1) @score_t2=calc(@score_t2+1)](BIL_CSP_EQ_Q13)
1) [Il juge les citoyens.](BIL_CSP_EQ_Q13)

## BIL_CSP_EQ_Q13

### Question 13 sur 25

**En quelle année a débuté la Révolution française ?**

1) [1792.](BIL_CSP_EQ_Q14)
1) [1789. @score=calc(@score+1) @score_t4=calc(@score_t4+1)](BIL_CSP_EQ_Q14)
1) [1815.](BIL_CSP_EQ_Q14)
1) [1848.](BIL_CSP_EQ_Q14)

## BIL_CSP_EQ_Q14

### Question 14 sur 25

**Quel est l'un des symboles officiels de la République française ?**

1) [Le coq gaulois.](BIL_CSP_EQ_Q15)
1) [La tour Eiffel.](BIL_CSP_EQ_Q15)
1) [Marianne. @score=calc(@score+1) @score_t1=calc(@score_t1+1)](BIL_CSP_EQ_Q15)
1) [Le Louvre.](BIL_CSP_EQ_Q15)

## BIL_CSP_EQ_Q15

### Question 15 sur 25

**Qu'est-ce que le SMIC ?**

1) [Une prime.](BIL_CSP_EQ_Q16)
1) [Une allocation.](BIL_CSP_EQ_Q16)
1) [Une retraite.](BIL_CSP_EQ_Q16)
1) [Le salaire minimum légal. @score=calc(@score+1) @score_t5=calc(@score_t5+1)](BIL_CSP_EQ_Q16)

## BIL_CSP_EQ_Q16

### Question 16 sur 25

**Qu'est-ce qu'une infraction ?**

1) [Une simple erreur.](BIL_CSP_EQ_Q17)
1) [Un désaccord.](BIL_CSP_EQ_Q17)
1) [Un acte interdit par la loi et puni par la justice. @score=calc(@score+1) @score_t3=calc(@score_t3+1)](BIL_CSP_EQ_Q17)
1) [Une opinion.](BIL_CSP_EQ_Q17)

## BIL_CSP_EQ_Q17

### Question 17 sur 25

**Quel est le rôle du médecin traitant ?**

1) [Il réalise toutes les opérations chirurgicales.](BIL_CSP_EQ_Q18)
1) [Il remplace l'hôpital.](BIL_CSP_EQ_Q18)
1) [Il délivre les médicaments.](BIL_CSP_EQ_Q18)
1) [Il assure le suivi médical du patient et l'oriente vers un spécialiste si nécessaire. @score=calc(@score+1) @score_t5=calc(@score_t5+1)](BIL_CSP_EQ_Q18)

## BIL_CSP_EQ_Q18

### Question 18 sur 25

**Où se situe la Corse ?**

1) [Dans l'océan Atlantique.](BIL_CSP_EQ_Q19)
1) [Dans la Manche.](BIL_CSP_EQ_Q19)
1) [En mer Méditerranée. @score=calc(@score+1) @score_t4=calc(@score_t4+1)](BIL_CSP_EQ_Q19)
1) [Dans la mer du Nord.](BIL_CSP_EQ_Q19)

## BIL_CSP_EQ_Q19

### Question 19 sur 25

**Citez un fleuve qui coule en France.**

1) [La Tamise.](BIL_CSP_EQ_Q20)
1) [Le Nil.](BIL_CSP_EQ_Q20)
1) [L'Amazone.](BIL_CSP_EQ_Q20)
1) [La Seine. @score=calc(@score+1) @score_t4=calc(@score_t4+1)](BIL_CSP_EQ_Q20)

## BIL_CSP_EQ_Q20

### Question 20 sur 25

**Le Parlement est composé :**

1) [Du Président de la République et du Gouvernement.](BIL_CSP_EQ_Q21)
1) [De l'Assemblée nationale et du Sénat. @score=calc(@score+1) @score_t2=calc(@score_t2+1)](BIL_CSP_EQ_Q21)
1) [Des maires et des préfets.](BIL_CSP_EQ_Q21)
1) [Des juges et des avocats.](BIL_CSP_EQ_Q21)

## BIL_CSP_EQ_Q21

### Question 21 sur 25

**Quelle est la monnaie utilisée en France ?**

1) [Le franc.](BIL_CSP_EQ_Q22)
1) [Le dollar.](BIL_CSP_EQ_Q22)
1) [La livre.](BIL_CSP_EQ_Q22)
1) [L'euro. @score=calc(@score+1) @score_t2=calc(@score_t2+1)](BIL_CSP_EQ_Q22)

## BIL_CSP_EQ_Q22

### Question 22 sur 25

**Est-il toujours possible de divorcer ?**

1) [Non.](BIL_CSP_EQ_Q23)
1) [Seulement avec l'accord des enfants.](BIL_CSP_EQ_Q23)
1) [Seulement dans certains départements.](BIL_CSP_EQ_Q23)
1) [Oui. @score=calc(@score+1) @score_t3=calc(@score_t3+1)](BIL_CSP_EQ_Q23)

## BIL_CSP_EQ_Q23

### Question 23 sur 25

**Concernant les droits individuels, quelle proposition est correcte ?**

1) [Les droits individuels sont illimités et absolus.](BIL_CSP_EQ_Q24)
1) [Les droits individuels sont garantis à chacun dans le respect de la loi. @score=calc(@score+1) @score_t3=calc(@score_t3+1)](BIL_CSP_EQ_Q24)
1) [Les droits individuels ne concernent que les citoyens français.](BIL_CSP_EQ_Q24)
1) [Les droits individuels peuvent être supprimés par décision administrative.](BIL_CSP_EQ_Q24)

## BIL_CSP_EQ_Q24

### Question 24 sur 25

**À partir de quel âge un mineur peut-il travailler ?**

1) [14 ans.](BIL_CSP_EQ_Q25)
1) [18 ans.](BIL_CSP_EQ_Q25)
1) [Sans limite d'âge.](BIL_CSP_EQ_Q25)
1) [À partir de 16 ans. @score=calc(@score+1) @score_t5=calc(@score_t5+1)](BIL_CSP_EQ_Q25)

## BIL_CSP_EQ_Q25

### Question 25 sur 25

**Qui vote les lois ?**

1) [Le Président de la République.](BIL_CSP_EQ_RESULT)
1) [Les juges.](BIL_CSP_EQ_RESULT)
1) [Les préfets.](BIL_CSP_EQ_RESULT)
1) [Le Parlement. @score=calc(@score+1) @score_t2=calc(@score_t2+1)](BIL_CSP_EQ_RESULT)

## BIL_CSP_EQ_RESULT

`@pourcentage = calc(@score*4)`
### 🎉 Votre bilan est terminé

Vous avez obtenu **`@score` / 25**, soit **`@pourcentage` %**.

`if @score <= 9`
### 🌱 Profil 1 — Bases à construire
Commencez par les notions fondamentales et révisez régulièrement par courtes séances.
`endif`
`if @score >= 10 && @score <= 15`
### 🧱 Profil 2 — Connaissances en construction
Consolidez les thèmes les moins maîtrisés avant de réaliser un examen blanc.
`endif`
`if @score >= 16 && @score <= 20`
### 🚀 Profil 3 — Niveau encourageant
Poursuivez avec des entraînements ciblés et des mises en situation.
`endif`
`if @score >= 21`
### ⭐ Profil 4 — Très bonne préparation
Votre niveau est solide. Travaillez maintenant les pièges et les examens blancs.
`endif`

1. [Voir mes scores par thématique](BIL_CSP_EQ_THEMES)

## BIL_CSP_EQ_THEMES

### 📊 Résultats par thématique

- **Principes et valeurs de la République** : `@score_t1` / 5
- **Système institutionnel et politique français** : `@score_t2` / 5
- **Droits et devoirs** : `@score_t3` / 5
- **Histoire, géographie, patrimoine et culture** : `@score_t4` / 5
- **Vivre dans la société française** : `@score_t5` / 5

1. [Voir mes recommandations](BIL_CSP_EQ_RECO)

## BIL_CSP_EQ_RECO

### 🧭 Mes priorités de révision

`if @score_t1 <= 2`
- 📚 **Priorité : Principes et valeurs de la République**
`endif`
`if @score_t2 <= 2`
- 📚 **Priorité : Système institutionnel et politique français**
`endif`
`if @score_t3 <= 2`
- 📚 **Priorité : Droits et devoirs**
`endif`
`if @score_t4 <= 2`
- 📚 **Priorité : Histoire, géographie, patrimoine et culture**
`endif`
`if @score_t5 <= 2`
- 📚 **Priorité : Vivre dans la société française**
`endif`

Commencez par les priorités affichées, puis entraînez-vous à nouveau sur ces thèmes.

1. [📚 Commencer mes révisions](SCR_REV_MENU)
2. [📝 M'entraîner](SCR_ENT_MENU)
3. [🔄 Refaire le bilan](SCR_BIL_EXAMEN)
4. [🏠 Retour au menu principal](MENU_PRINCIPAL)

## BIL_CSP_INT_Q01

### Question 1 sur 25

**Le travail non déclaré est :**

1) [Autorisé si le salarié est d'accord.](BIL_CSP_INT_Q02)
1) [Interdit par la loi. @score=calc(@score+1) @score_t5=calc(@score_t5+1)](BIL_CSP_INT_Q02)
1) [Autorisé pour les petits emplois.](BIL_CSP_INT_Q02)
1) [Obligatoire pour les étudiants.](BIL_CSP_INT_Q02)

## BIL_CSP_INT_Q02

### Question 2 sur 25

**Quelle est la durée légale du temps de travail par semaine ?**

1) [30 heures.](BIL_CSP_INT_Q03)
1) [39 heures.](BIL_CSP_INT_Q03)
1) [40 heures.](BIL_CSP_INT_Q03)
1) [35 heures. @score=calc(@score+1) @score_t5=calc(@score_t5+1)](BIL_CSP_INT_Q03)

## BIL_CSP_INT_Q03

### Question 3 sur 25

**Quelle condition est nécessaire pour voter aux élections européennes ?**

1) [Avoir un passeport.](BIL_CSP_INT_Q04)
1) [Être propriétaire.](BIL_CSP_INT_Q04)
1) [Être salarié.](BIL_CSP_INT_Q04)
1) [Être inscrit sur les listes électorales. @score=calc(@score+1) @score_t2=calc(@score_t2+1)](BIL_CSP_INT_Q04)

## BIL_CSP_INT_Q04

### Question 4 sur 25

**Qu'est-ce que la laïcité ?**

1) [Un principe qui interdit toutes les religions.](BIL_CSP_INT_Q05)
1) [Un principe qui garantit la liberté de conscience, la neutralité de l'État et le respect de toutes les convictions. @score=calc(@score+1) @score_t1=calc(@score_t1+1)](BIL_CSP_INT_Q05)
1) [Un principe qui impose de pratiquer une religion.](BIL_CSP_INT_Q05)
1) [Un principe selon lequel l'État choisit une religion officielle.](BIL_CSP_INT_Q05)

## BIL_CSP_INT_Q05

### Question 5 sur 25

**Qu'est-ce que la Shoah ?**

1) [Une bataille.](BIL_CSP_INT_Q06)
1) [Une révolution.](BIL_CSP_INT_Q06)
1) [Une maladie.](BIL_CSP_INT_Q06)
1) [L'extermination des Juifs d'Europe par le régime nazi pendant la Seconde Guerre mondiale. @score=calc(@score+1) @score_t4=calc(@score_t4+1)](BIL_CSP_INT_Q06)

## BIL_CSP_INT_Q06

### Question 6 sur 25

**Quel diplôme obtient-on à la fin du lycée ?**

1) [Le brevet.](BIL_CSP_INT_Q07)
1) [La licence.](BIL_CSP_INT_Q07)
1) [Le CAP.](BIL_CSP_INT_Q07)
1) [Le baccalauréat. @score=calc(@score+1) @score_t5=calc(@score_t5+1)](BIL_CSP_INT_Q07)

## BIL_CSP_INT_Q07

### Question 7 sur 25

**Quel écrivain est français ?**

1) [William Shakespeare.](BIL_CSP_INT_Q08)
1) [Miguel de Cervantes.](BIL_CSP_INT_Q08)
1) [Victor Hugo. @score=calc(@score+1) @score_t4=calc(@score_t4+1)](BIL_CSP_INT_Q08)
1) [Johann Wolfgang von Goethe.](BIL_CSP_INT_Q08)

## BIL_CSP_INT_Q08

### Question 8 sur 25

**Certains métiers peuvent-ils être réservés aux hommes ?**

1) [Oui, tous les métiers physiques leur sont réservés.](BIL_CSP_INT_Q09)
1) [Oui, selon la tradition.](BIL_CSP_INT_Q09)
1) [Non, les femmes et les hommes ont les mêmes droits d'accès aux emplois, sauf exceptions prévues par la loi. @score=calc(@score+1) @score_t1=calc(@score_t1+1)](BIL_CSP_INT_Q09)
1) [Oui, dans tous les cas.](BIL_CSP_INT_Q09)

## BIL_CSP_INT_Q09

### Question 9 sur 25

**Qui était Napoléon Ier ?**

1) [Un roi.](BIL_CSP_INT_Q10)
1) [Un président.](BIL_CSP_INT_Q10)
1) [Un empereur français. @score=calc(@score+1) @score_t4=calc(@score_t4+1)](BIL_CSP_INT_Q10)
1) [Un écrivain.](BIL_CSP_INT_Q10)

## BIL_CSP_INT_Q10

### Question 10 sur 25

**Quel est l'objectif des vaccinations obligatoires ?**

1) [Guérir toutes les maladies.](BIL_CSP_INT_Q11)
1) [Remplacer les médicaments.](BIL_CSP_INT_Q11)
1) [Être dispensé de consulter un médecin.](BIL_CSP_INT_Q11)
1) [Protéger la personne vaccinée et la population contre certaines maladies. @score=calc(@score+1) @score_t5=calc(@score_t5+1)](BIL_CSP_INT_Q11)

## BIL_CSP_INT_Q11

### Question 11 sur 25

**Qui est le préfet ?**

1) [Le maire de la commune.](BIL_CSP_INT_Q12)
1) [Le président du conseil départemental.](BIL_CSP_INT_Q12)
1) [Un député local.](BIL_CSP_INT_Q12)
1) [Le représentant de l'État dans un département ou une région. @score=calc(@score+1) @score_t2=calc(@score_t2+1)](BIL_CSP_INT_Q12)

## BIL_CSP_INT_Q12

### Question 12 sur 25

**Parmi ces textes, lequel garantit les droits et libertés en France ?**

1) [Le Code civil.](BIL_CSP_INT_Q13)
1) [Le Code du travail.](BIL_CSP_INT_Q13)
1) [La Constitution et son bloc de constitutionnalité. @score=calc(@score+1) @score_t3=calc(@score_t3+1)](BIL_CSP_INT_Q13)
1) [Le Code pénal.](BIL_CSP_INT_Q13)

## BIL_CSP_INT_Q13

### Question 13 sur 25

**Qui représente l'État dans un département ?**

1) [Le maire.](BIL_CSP_INT_Q14)
1) [Le député.](BIL_CSP_INT_Q14)
1) [Le président du conseil départemental.](BIL_CSP_INT_Q14)
1) [Le préfet. @score=calc(@score+1) @score_t2=calc(@score_t2+1)](BIL_CSP_INT_Q14)

## BIL_CSP_INT_Q14

### Question 14 sur 25

**Déposer une machine à laver cassée sur le trottoir est :**

1) [Autorisé.](BIL_CSP_INT_Q15)
1) [Autorisé le week-end.](BIL_CSP_INT_Q15)
1) [Interdit. @score=calc(@score+1) @score_t3=calc(@score_t3+1)](BIL_CSP_INT_Q15)
1) [Obligatoire s'il n'y a pas de déchèterie à proximité.](BIL_CSP_INT_Q15)

## BIL_CSP_INT_Q15

### Question 15 sur 25

**Qui possède le pouvoir exécutif ?**

1) [Les députés.](BIL_CSP_INT_Q16)
1) [Les sénateurs.](BIL_CSP_INT_Q16)
1) [Le Parlement.](BIL_CSP_INT_Q16)
1) [Le Président de la République et le Gouvernement. @score=calc(@score+1) @score_t2=calc(@score_t2+1)](BIL_CSP_INT_Q16)

## BIL_CSP_INT_Q16

### Question 16 sur 25

**En quelle année la loi de séparation des Églises et de l'État a-t-elle été votée ?**

1) [1789.](BIL_CSP_INT_Q17)
1) [1905. @score=calc(@score+1) @score_t1=calc(@score_t1+1)](BIL_CSP_INT_Q17)
1) [1958.](BIL_CSP_INT_Q17)
1) [1946.](BIL_CSP_INT_Q17)

## BIL_CSP_INT_Q17

### Question 17 sur 25

**Concernant les limites aux libertés individuelles, quelle proposition est correcte ?**

1) [Les libertés individuelles sont absolues et ne connaissent aucune limite.](BIL_CSP_INT_Q18)
1) [Les libertés individuelles peuvent être limitées pour protéger les droits des autres, l'ordre public et la sécurité. @score=calc(@score+1) @score_t3=calc(@score_t3+1)](BIL_CSP_INT_Q18)
1) [Les libertés individuelles ne s'appliquent qu'aux citoyens français.](BIL_CSP_INT_Q18)
1) [Les libertés individuelles peuvent être supprimées sans motif.](BIL_CSP_INT_Q18)

## BIL_CSP_INT_Q18

### Question 18 sur 25

**Qui était Charles Baudelaire ?**

1) [Un peintre.](BIL_CSP_INT_Q19)
1) [Un homme politique.](BIL_CSP_INT_Q19)
1) [Un scientifique.](BIL_CSP_INT_Q19)
1) [Un poète français. @score=calc(@score+1) @score_t4=calc(@score_t4+1)](BIL_CSP_INT_Q19)

## BIL_CSP_INT_Q19

### Question 19 sur 25

**La peine de mort est :**

1) [Autorisée dans certains cas.](BIL_CSP_INT_Q20)
1) [Interdite en France. @score=calc(@score+1) @score_t3=calc(@score_t3+1)](BIL_CSP_INT_Q20)
1) [Décidée par le Président de la République.](BIL_CSP_INT_Q20)
1) [Réservée aux crimes les plus graves.](BIL_CSP_INT_Q20)

## BIL_CSP_INT_Q20

### Question 20 sur 25

**Qu'est-ce qui est traditionnellement organisé sur les Champs-Élysées le 14 juillet pour célébrer la fête nationale ?**

1) [Un feu d'artifice.](BIL_CSP_INT_Q21)
1) [Un concert public.](BIL_CSP_INT_Q21)
1) [Le défilé militaire. @score=calc(@score+1) @score_t1=calc(@score_t1+1)](BIL_CSP_INT_Q21)
1) [Une manifestation citoyenne.](BIL_CSP_INT_Q21)

## BIL_CSP_INT_Q21

### Question 21 sur 25

**Qu'est-ce que la liberté d'expression ?**

1) [Le droit de tout dire sans aucune limite.](BIL_CSP_INT_Q22)
1) [Le droit d'exprimer ses idées et ses opinions dans le respect de la loi et des droits des autres. @score=calc(@score+1) @score_t3=calc(@score_t3+1)](BIL_CSP_INT_Q22)
1) [Le droit d'insulter les autres.](BIL_CSP_INT_Q22)
1) [Une liberté réservée aux journalistes.](BIL_CSP_INT_Q22)

## BIL_CSP_INT_Q22

### Question 22 sur 25

**En cas de problème de santé non urgent, à qui faut-il s'adresser en premier ?**

1) [Les urgences.](BIL_CSP_INT_Q23)
1) [Les pompiers.](BIL_CSP_INT_Q23)
1) [La pharmacie uniquement.](BIL_CSP_INT_Q23)
1) [Son médecin traitant. @score=calc(@score+1) @score_t5=calc(@score_t5+1)](BIL_CSP_INT_Q23)

## BIL_CSP_INT_Q23

### Question 23 sur 25

**Qu'est-ce que le Louvre ?**

1) [Une école.](BIL_CSP_INT_Q24)
1) [Une gare.](BIL_CSP_INT_Q24)
1) [Un théâtre.](BIL_CSP_INT_Q24)
1) [Un grand musée situé à Paris. @score=calc(@score+1) @score_t4=calc(@score_t4+1)](BIL_CSP_INT_Q24)

## BIL_CSP_INT_Q24

### Question 24 sur 25

**Quelle proposition est correcte ? La liberté d'expression :**

1) [Permet de tout dire, sans aucune limite.](BIL_CSP_INT_Q25)
1) [Permet d'exprimer ses idées et ses opinions, dans le respect de la loi et des droits des autres. @score=calc(@score+1) @score_t1=calc(@score_t1+1)](BIL_CSP_INT_Q25)
1) [Permet d'insulter les autres librement.](BIL_CSP_INT_Q25)
1) [Est réservée aux journalistes.](BIL_CSP_INT_Q25)

## BIL_CSP_INT_Q25

### Question 25 sur 25

**Quelle est la monnaie utilisée en France ?**

1) [Le franc.](BIL_CSP_INT_RESULT)
1) [Le dollar.](BIL_CSP_INT_RESULT)
1) [La livre.](BIL_CSP_INT_RESULT)
1) [L'euro. @score=calc(@score+1) @score_t2=calc(@score_t2+1)](BIL_CSP_INT_RESULT)

## BIL_CSP_INT_RESULT

`@pourcentage = calc(@score*4)`
### 🎉 Votre bilan est terminé

Vous avez obtenu **`@score` / 25**, soit **`@pourcentage` %**.

`if @score <= 9`
### 🌱 Profil 1 — Bases à construire
Commencez par les notions fondamentales et révisez régulièrement par courtes séances.
`endif`
`if @score >= 10 && @score <= 15`
### 🧱 Profil 2 — Connaissances en construction
Consolidez les thèmes les moins maîtrisés avant de réaliser un examen blanc.
`endif`
`if @score >= 16 && @score <= 20`
### 🚀 Profil 3 — Niveau encourageant
Poursuivez avec des entraînements ciblés et des mises en situation.
`endif`
`if @score >= 21`
### ⭐ Profil 4 — Très bonne préparation
Votre niveau est solide. Travaillez maintenant les pièges et les examens blancs.
`endif`

1. [Voir mes scores par thématique](BIL_CSP_INT_THEMES)

## BIL_CSP_INT_THEMES

### 📊 Résultats par thématique

- **Principes et valeurs de la République** : `@score_t1` / 5
- **Système institutionnel et politique français** : `@score_t2` / 5
- **Droits et devoirs** : `@score_t3` / 5
- **Histoire, géographie, patrimoine et culture** : `@score_t4` / 5
- **Vivre dans la société française** : `@score_t5` / 5

1. [Voir mes recommandations](BIL_CSP_INT_RECO)

## BIL_CSP_INT_RECO

### 🧭 Mes priorités de révision

`if @score_t1 <= 2`
- 📚 **Priorité : Principes et valeurs de la République**
`endif`
`if @score_t2 <= 2`
- 📚 **Priorité : Système institutionnel et politique français**
`endif`
`if @score_t3 <= 2`
- 📚 **Priorité : Droits et devoirs**
`endif`
`if @score_t4 <= 2`
- 📚 **Priorité : Histoire, géographie, patrimoine et culture**
`endif`
`if @score_t5 <= 2`
- 📚 **Priorité : Vivre dans la société française**
`endif`

Commencez par les priorités affichées, puis entraînez-vous à nouveau sur ces thèmes.

1. [📚 Commencer mes révisions](SCR_REV_MENU)
2. [📝 M'entraîner](SCR_ENT_MENU)
3. [🔄 Refaire le bilan](SCR_BIL_EXAMEN)
4. [🏠 Retour au menu principal](MENU_PRINCIPAL)

## BIL_CR_DEC_Q01

### Question 1 sur 25

**Qui était Marguerite Yourcenar ?**

1) [Une chanteuse.](BIL_CR_DEC_Q02)
1) [Une peintre.](BIL_CR_DEC_Q02)
1) [Une scientifique.](BIL_CR_DEC_Q02)
1) [Une écrivaine française. @score=calc(@score+1) @score_t4=calc(@score_t4+1)](BIL_CR_DEC_Q02)

## BIL_CR_DEC_Q02

### Question 2 sur 25

**Quelle ville française fait partie des 10 plus grandes métropoles du pays ?**

1) [Lyon. @score=calc(@score+1) @score_t4=calc(@score_t4+1)](BIL_CR_DEC_Q03)
1) [Vichy.](BIL_CR_DEC_Q03)
1) [Lourdes.](BIL_CR_DEC_Q03)
1) [Colmar.](BIL_CR_DEC_Q03)

## BIL_CR_DEC_Q03

### Question 3 sur 25

**Comment s'appelle le diplôme passé par les élèves à la fin du collège ?**

1) [Le baccalauréat.](BIL_CR_DEC_Q04)
1) [Le CAP.](BIL_CR_DEC_Q04)
1) [La licence.](BIL_CR_DEC_Q04)
1) [Le diplôme national du brevet. @score=calc(@score+1) @score_t5=calc(@score_t5+1)](BIL_CR_DEC_Q04)

## BIL_CR_DEC_Q04

### Question 4 sur 25

**Combien de communes environ existe-t-il en France ?**

1) [1200.](BIL_CR_DEC_Q05)
1) [577.](BIL_CR_DEC_Q05)
1) [35000. @score=calc(@score+1) @score_t2=calc(@score_t2+1)](BIL_CR_DEC_Q05)
1) [3050.](BIL_CR_DEC_Q05)

## BIL_CR_DEC_Q05

### Question 5 sur 25

**Que garantit la liberté de la presse ?**

1) [Publier n'importe quoi.](BIL_CR_DEC_Q06)
1) [Le droit d'informer et d'être informé. @score=calc(@score+1) @score_t3=calc(@score_t3+1)](BIL_CR_DEC_Q06)
1) [Diffamer librement.](BIL_CR_DEC_Q06)
1) [Insulter les personnes.](BIL_CR_DEC_Q06)

## BIL_CR_DEC_Q06

### Question 6 sur 25

**À l'école publique, qui peut porter des signes religieux très visibles ?**

1) [Les élèves de primaire.](BIL_CR_DEC_Q07)
1) [Personne. @score=calc(@score+1) @score_t1=calc(@score_t1+1)](BIL_CR_DEC_Q07)
1) [Les élèves du collège.](BIL_CR_DEC_Q07)
1) [Les élèves du lycée avec accord préalable de leurs parents.](BIL_CR_DEC_Q07)

## BIL_CR_DEC_Q07

### Question 7 sur 25

**À qui est accessible la contraception ?**

1) [Seulement aux personnes mariées.](BIL_CR_DEC_Q08)
1) [Seulement aux femmes majeures.](BIL_CR_DEC_Q08)
1) [Seulement aux personnes ayant des enfants.](BIL_CR_DEC_Q08)
1) [À toute personne qui en a besoin. @score=calc(@score+1) @score_t5=calc(@score_t5+1)](BIL_CR_DEC_Q08)

## BIL_CR_DEC_Q08

### Question 8 sur 25

**Pourquoi doit-on trier ses déchets ?**

1) [Pour gagner de l'argent.](BIL_CR_DEC_Q09)
1) [Pour désencombrer la poubelle ménagère.](BIL_CR_DEC_Q09)
1) [Pour éviter de payer des impôts.](BIL_CR_DEC_Q09)
1) [Pour protéger l'environnement et favoriser le recyclage. @score=calc(@score+1) @score_t3=calc(@score_t3+1)](BIL_CR_DEC_Q09)

## BIL_CR_DEC_Q09

### Question 9 sur 25

**Quelles sont les conditions pour toucher les allocations chômage ?**

1) [Être simplement sans emploi.](BIL_CR_DEC_Q10)
1) [Avoir travaillé et remplir les conditions prévues par la réglementation. @score=calc(@score+1) @score_t5=calc(@score_t5+1)](BIL_CR_DEC_Q10)
1) [En faire la demande sans autre condition.](BIL_CR_DEC_Q10)
1) [Être de nationalité française.](BIL_CR_DEC_Q10)

## BIL_CR_DEC_Q10

### Question 10 sur 25

**Parmi les propositions suivantes, laquelle constitue une participation citoyenne ?**

1) [Obtenir une carte d'identité française.](BIL_CR_DEC_Q11)
1) [S'inscrire à la Sécurité sociale.](BIL_CR_DEC_Q11)
1) [Voter aux élections. @score=calc(@score+1) @score_t3=calc(@score_t3+1)](BIL_CR_DEC_Q11)
1) [Travailler dans une entreprise.](BIL_CR_DEC_Q11)

## BIL_CR_DEC_Q11

### Question 11 sur 25

**Concernant le droit de se marier, quelle proposition est correcte ?**

1) [Les parents choisissent le conjoint.](BIL_CR_DEC_Q12)
1) [Chacun est libre de choisir son conjoint. @score=calc(@score+1) @score_t3=calc(@score_t3+1)](BIL_CR_DEC_Q12)
1) [Le mariage est réservé aux personnes de la même religion.](BIL_CR_DEC_Q12)
1) [Le mariage est imposé par l'État.](BIL_CR_DEC_Q12)

## BIL_CR_DEC_Q12

### Question 12 sur 25

**Quelle est la place de la langue française dans la République ?**

1) [Chaque région choisit sa langue officielle.](BIL_CR_DEC_Q13)
1) [Le français est la langue de la République. @score=calc(@score+1) @score_t1=calc(@score_t1+1)](BIL_CR_DEC_Q13)
1) [Il existe plusieurs langues officielles.](BIL_CR_DEC_Q13)
1) [L'anglais est la langue officielle.](BIL_CR_DEC_Q13)

## BIL_CR_DEC_Q13

### Question 13 sur 25

**Que signifie la dignité humaine ?**

1) [Certaines personnes ont moins de droits.](BIL_CR_DEC_Q14)
1) [Que chaque personne doit être respectée et traitée avec respect. @score=calc(@score+1) @score_t3=calc(@score_t3+1)](BIL_CR_DEC_Q14)
1) [La dignité dépend de la nationalité.](BIL_CR_DEC_Q14)
1) [La dignité dépend de la religion.](BIL_CR_DEC_Q14)

## BIL_CR_DEC_Q14

### Question 14 sur 25

**Qu'est-ce que la France d'outre-mer ?**

1) [Les pays voisins de la France.](BIL_CR_DEC_Q15)
1) [Les territoires français situés en dehors de l'Europe. @score=calc(@score+1) @score_t4=calc(@score_t4+1)](BIL_CR_DEC_Q15)
1) [Les anciennes colonies françaises.](BIL_CR_DEC_Q15)
1) [Les régions situées au nord de la France.](BIL_CR_DEC_Q15)

## BIL_CR_DEC_Q15

### Question 15 sur 25

**Que garantit le principe de laïcité ?**

1) [L'interdiction des religions.](BIL_CR_DEC_Q16)
1) [La liberté de conscience et l'égalité de tous devant la loi. @score=calc(@score+1) @score_t1=calc(@score_t1+1)](BIL_CR_DEC_Q16)
1) [Une religion officielle.](BIL_CR_DEC_Q16)
1) [Le droit d'exprimer librement ses opinions dans le respect de la loi.](BIL_CR_DEC_Q16)

## BIL_CR_DEC_Q16

### Question 16 sur 25

**Qui peut voter aux élections en France ?**

1) [Toutes les personnes qui vivent en France.](BIL_CR_DEC_Q17)
1) [Toutes les personnes possédant un titre de séjour.](BIL_CR_DEC_Q17)
1) [Les citoyens français inscrits sur les listes électorales. @score=calc(@score+1) @score_t2=calc(@score_t2+1)](BIL_CR_DEC_Q17)
1) [Toutes les personnes âgées de plus de 18 ans.](BIL_CR_DEC_Q17)

## BIL_CR_DEC_Q17

### Question 17 sur 25

**Quel monument parisien est l'un des symboles de la France ?**

1) [Le Colisée.](BIL_CR_DEC_Q18)
1) [Big Ben.](BIL_CR_DEC_Q18)
1) [La tour Eiffel. @score=calc(@score+1) @score_t4=calc(@score_t4+1)](BIL_CR_DEC_Q18)
1) [La statue de la Liberté.](BIL_CR_DEC_Q18)

## BIL_CR_DEC_Q18

### Question 18 sur 25

**Est-ce que le président de la République a tous les pouvoirs ?**

1) [Oui mais il doit consulter ses ministres avant toutes décisions.](BIL_CR_DEC_Q19)
1) [Oui, il décide de tout.](BIL_CR_DEC_Q19)
1) [Oui, il peut modifier les lois seul.](BIL_CR_DEC_Q19)
1) [Non. @score=calc(@score+1) @score_t2=calc(@score_t2+1)](BIL_CR_DEC_Q19)

## BIL_CR_DEC_Q19

### Question 19 sur 25

**Que garantit la liberté d'expression ?**

1) [Le droit d'insulter les autres.](BIL_CR_DEC_Q20)
1) [Le droit de diffamer.](BIL_CR_DEC_Q20)
1) [Le droit d'exprimer librement ses opinions dans le respect de la loi. @score=calc(@score+1) @score_t1=calc(@score_t1+1)](BIL_CR_DEC_Q20)
1) [Le droit d'inciter à la haine.](BIL_CR_DEC_Q20)

## BIL_CR_DEC_Q20

### Question 20 sur 25

**Dans une entreprise, le droit syndical permet :**

1) [De refuser d'appliquer le contrat de travail.](BIL_CR_DEC_Q21)
1) [De créer un syndicat, d'y adhérer ou non, et d'exercer une activité syndicale dans le respect de la loi. @score=calc(@score+1) @score_t5=calc(@score_t5+1)](BIL_CR_DEC_Q21)
1) [D'imposer ses opinions politiques à ses collègues.](BIL_CR_DEC_Q21)
1) [De remplacer l'employeur.](BIL_CR_DEC_Q21)

## BIL_CR_DEC_Q21

### Question 21 sur 25

**L'inscription à l'Assurance maladie est :**

1) [Facultative.](BIL_CR_DEC_Q22)
1) [Obligatoire. @score=calc(@score+1) @score_t5=calc(@score_t5+1)](BIL_CR_DEC_Q22)
1) [Réservée aux salariés.](BIL_CR_DEC_Q22)
1) [Réservée aux personnes âgées.](BIL_CR_DEC_Q22)

## BIL_CR_DEC_Q22

### Question 22 sur 25

**Qui est le préfet ?**

1) [Un maire qui gère plusieurs communes](BIL_CR_DEC_Q23)
1) [Le représentant de l'État dans un département. @score=calc(@score+1) @score_t2=calc(@score_t2+1)](BIL_CR_DEC_Q23)
1) [Le président du département.](BIL_CR_DEC_Q23)
1) [Un député qui responsable de plusieurs départements.](BIL_CR_DEC_Q23)

## BIL_CR_DEC_Q23

### Question 23 sur 25

**Quel régime politique a été mis en place pendant la Révolution française en 1792 ?**

1) [La Ve République.](BIL_CR_DEC_Q24)
1) [L'Empire.](BIL_CR_DEC_Q24)
1) [La monarchie.](BIL_CR_DEC_Q24)
1) [La Première République. @score=calc(@score+1) @score_t4=calc(@score_t4+1)](BIL_CR_DEC_Q24)

## BIL_CR_DEC_Q24

### Question 24 sur 25

**Quel droit est garanti par la laïcité ?**

1) [Le droit d'imposer sa religion.](BIL_CR_DEC_Q25)
1) [La liberté de conscience. @score=calc(@score+1) @score_t1=calc(@score_t1+1)](BIL_CR_DEC_Q25)
1) [Le droit de ne pas respecter la loi.](BIL_CR_DEC_Q25)
1) [Voter aux élections.](BIL_CR_DEC_Q25)

## BIL_CR_DEC_Q25

### Question 25 sur 25

**Quel est le régime politique de la France aujourd'hui ?**

1) [Une monarchie.](BIL_CR_DEC_RESULT)
1) [Une République. @score=calc(@score+1) @score_t2=calc(@score_t2+1)](BIL_CR_DEC_RESULT)
1) [Un empire.](BIL_CR_DEC_RESULT)
1) [Une fédération.](BIL_CR_DEC_RESULT)

## BIL_CR_DEC_RESULT

`@pourcentage = calc(@score*4)`
### 🎉 Votre bilan est terminé

Vous avez obtenu **`@score` / 25**, soit **`@pourcentage` %**.

`if @score <= 9`
### 🌱 Profil 1 — Bases à construire
Commencez par les notions fondamentales et révisez régulièrement par courtes séances.
`endif`
`if @score >= 10 && @score <= 15`
### 🧱 Profil 2 — Connaissances en construction
Consolidez les thèmes les moins maîtrisés avant de réaliser un examen blanc.
`endif`
`if @score >= 16 && @score <= 20`
### 🚀 Profil 3 — Niveau encourageant
Poursuivez avec des entraînements ciblés et des mises en situation.
`endif`
`if @score >= 21`
### ⭐ Profil 4 — Très bonne préparation
Votre niveau est solide. Travaillez maintenant les pièges et les examens blancs.
`endif`

1. [Voir mes scores par thématique](BIL_CR_DEC_THEMES)

## BIL_CR_DEC_THEMES

### 📊 Résultats par thématique

- **Principes et valeurs de la République** : `@score_t1` / 5
- **Système institutionnel et politique français** : `@score_t2` / 5
- **Droits et devoirs** : `@score_t3` / 5
- **Histoire, géographie, patrimoine et culture** : `@score_t4` / 5
- **Vivre dans la société française** : `@score_t5` / 5

1. [Voir mes recommandations](BIL_CR_DEC_RECO)

## BIL_CR_DEC_RECO

### 🧭 Mes priorités de révision

`if @score_t1 <= 2`
- 📚 **Priorité : Principes et valeurs de la République**
`endif`
`if @score_t2 <= 2`
- 📚 **Priorité : Système institutionnel et politique français**
`endif`
`if @score_t3 <= 2`
- 📚 **Priorité : Droits et devoirs**
`endif`
`if @score_t4 <= 2`
- 📚 **Priorité : Histoire, géographie, patrimoine et culture**
`endif`
`if @score_t5 <= 2`
- 📚 **Priorité : Vivre dans la société française**
`endif`

Commencez par les priorités affichées, puis entraînez-vous à nouveau sur ces thèmes.

1. [📚 Commencer mes révisions](SCR_REV_MENU)
2. [📝 M'entraîner](SCR_ENT_MENU)
3. [🔄 Refaire le bilan](SCR_BIL_EXAMEN)
4. [🏠 Retour au menu principal](MENU_PRINCIPAL)

## BIL_CR_EQ_Q01

### Question 1 sur 25

**Quel continent a été le plus concerné par la décolonisation française après la Seconde Guerre mondiale ?**

1) [L'Europe.](BIL_CR_EQ_Q02)
1) [L'Amérique.](BIL_CR_EQ_Q02)
1) [L'Afrique. @score=calc(@score+1) @score_t4=calc(@score_t4+1)](BIL_CR_EQ_Q02)
1) [L'Océanie.](BIL_CR_EQ_Q02)

## BIL_CR_EQ_Q02

### Question 2 sur 25

**Qui peut voter aux élections en France ?**

1) [Toutes les personnes qui vivent en France.](BIL_CR_EQ_Q03)
1) [Toutes les personnes possédant un titre de séjour.](BIL_CR_EQ_Q03)
1) [Les citoyens français inscrits sur les listes électorales. @score=calc(@score+1) @score_t2=calc(@score_t2+1)](BIL_CR_EQ_Q03)
1) [Toutes les personnes âgées de plus de 18 ans.](BIL_CR_EQ_Q03)

## BIL_CR_EQ_Q03

### Question 3 sur 25

**Quel monument parisien est l'un des symboles de la France ?**

1) [Le Colisée.](BIL_CR_EQ_Q04)
1) [Big Ben.](BIL_CR_EQ_Q04)
1) [La tour Eiffel. @score=calc(@score+1) @score_t4=calc(@score_t4+1)](BIL_CR_EQ_Q04)
1) [La statue de la Liberté.](BIL_CR_EQ_Q04)

## BIL_CR_EQ_Q04

### Question 4 sur 25

**Que représente la laïcité ?**

1) [L'interdiction de toutes les religions.](BIL_CR_EQ_Q05)
1) [La séparation des Églises et de l'État, garantissant la liberté de conscience. @score=calc(@score+1) @score_t1=calc(@score_t1+1)](BIL_CR_EQ_Q05)
1) [L'obligation d'avoir une religion.](BIL_CR_EQ_Q05)
1) [La priorité donnée à une religion par l'État.](BIL_CR_EQ_Q05)

## BIL_CR_EQ_Q05

### Question 5 sur 25

**Est-ce que le président de la République a tous les pouvoirs ?**

1) [Oui mais il doit consulter ses ministres avant toutes décisions.](BIL_CR_EQ_Q06)
1) [Oui, il décide de tout.](BIL_CR_EQ_Q06)
1) [Oui, il peut modifier les lois seul.](BIL_CR_EQ_Q06)
1) [Non. @score=calc(@score+1) @score_t2=calc(@score_t2+1)](BIL_CR_EQ_Q06)

## BIL_CR_EQ_Q06

### Question 6 sur 25

**Le recours à l'avortement est-il autorisé ?**

1) [Non.](BIL_CR_EQ_Q07)
1) [Seulement avec l'accord du mari.](BIL_CR_EQ_Q07)
1) [Seulement avec l'accord du médecin.](BIL_CR_EQ_Q07)
1) [Oui. @score=calc(@score+1) @score_t3=calc(@score_t3+1)](BIL_CR_EQ_Q07)

## BIL_CR_EQ_Q07

### Question 7 sur 25

**L'État peut-il limiter les droits et libertés ?**

1) [Oui, dans les conditions prévues par la loi et pour protéger l'intérêt général. @score=calc(@score+1) @score_t3=calc(@score_t3+1)](BIL_CR_EQ_Q08)
1) [Non, jamais.](BIL_CR_EQ_Q08)
1) [Oui, sans raison.](BIL_CR_EQ_Q08)
1) [Oui, selon la volonté du Gouvernement.](BIL_CR_EQ_Q08)

## BIL_CR_EQ_Q08

### Question 8 sur 25

**Que signifie le droit de manifester ?**

1) [Faire ce que l'on veut.](BIL_CR_EQ_Q09)
1) [Détruire des biens.](BIL_CR_EQ_Q09)
1) [Le droit d'exprimer collectivement une opinion dans le respect de la loi. @score=calc(@score+1) @score_t3=calc(@score_t3+1)](BIL_CR_EQ_Q09)
1) [Être violent.](BIL_CR_EQ_Q09)

## BIL_CR_EQ_Q09

### Question 9 sur 25

**Quelle est la place de la langue française dans la République ?**

1) [Chaque région choisit sa langue officielle.](BIL_CR_EQ_Q10)
1) [Le français est la langue de la République. @score=calc(@score+1) @score_t1=calc(@score_t1+1)](BIL_CR_EQ_Q10)
1) [Il existe plusieurs langues officielles.](BIL_CR_EQ_Q10)
1) [L'anglais est la langue officielle.](BIL_CR_EQ_Q10)

## BIL_CR_EQ_Q10

### Question 10 sur 25

**Quel numéro d'urgence permet d'appeler la police ?**

1) [15.](BIL_CR_EQ_Q11)
1) [17. @score=calc(@score+1) @score_t5=calc(@score_t5+1)](BIL_CR_EQ_Q11)
1) [18.](BIL_CR_EQ_Q11)
1) [112.](BIL_CR_EQ_Q11)

## BIL_CR_EQ_Q11

### Question 11 sur 25

**En quelle année l'euro est-elle devenue la monnaie utilisée en France ?**

1) [2002. @score=calc(@score+1) @score_t4=calc(@score_t4+1)](BIL_CR_EQ_Q12)
1) [1992.](BIL_CR_EQ_Q12)
1) [1999.](BIL_CR_EQ_Q12)
1) [2005.](BIL_CR_EQ_Q12)

## BIL_CR_EQ_Q12

### Question 12 sur 25

**Quelle île française se trouve dans l'océan Indien ?**

1) [La Réunion. @score=calc(@score+1) @score_t4=calc(@score_t4+1)](BIL_CR_EQ_Q13)
1) [La Corse.](BIL_CR_EQ_Q13)
1) [La Guadeloupe.](BIL_CR_EQ_Q13)
1) [La Martinique.](BIL_CR_EQ_Q13)

## BIL_CR_EQ_Q13

### Question 13 sur 25

**Que dit l'article 1er de la Constitution française ?**

1) [La France est une République fédérale, religieuse, démocratique et sociale.](BIL_CR_EQ_Q14)
1) [La France est une République indivisible, catholique, démocratique et sociale.](BIL_CR_EQ_Q14)
1) [La France est une République indivisible, démocratique et monarchique.](BIL_CR_EQ_Q14)
1) [La France est une République indivisible, laïque, démocratique et sociale. @score=calc(@score+1) @score_t1=calc(@score_t1+1)](BIL_CR_EQ_Q14)

## BIL_CR_EQ_Q14

### Question 14 sur 25

**La séparation des pouvoirs est un principe fondamental. Quels sont les trois pouvoirs concernés ?**

1) [Le pouvoir présidentiel, le pouvoir gourvenemental et le pouvoir parlementaire.](BIL_CR_EQ_Q15)
1) [Le pouvoir policier, le pouvoir judiciaire et le pouvoir de l'armée.](BIL_CR_EQ_Q15)
1) [Le pouvoir exécutif, le pouvoir législatif et le pouvoir judiciaire. @score=calc(@score+1) @score_t2=calc(@score_t2+1)](BIL_CR_EQ_Q15)
1) [Le pouvoir de la justice, le pouvoir exécutif, le pouvoir du citoyen.](BIL_CR_EQ_Q15)

## BIL_CR_EQ_Q15

### Question 15 sur 25

**Dans une entreprise, le droit de grève autorise :**

1) [Les salariés à quitter définitivement leur emploi.](BIL_CR_EQ_Q16)
1) [Les salariés à dégrader leur entreprise.](BIL_CR_EQ_Q16)
1) [Les salariés à cesser collectivement le travail pour défendre leurs revendications professionnelles. @score=calc(@score+1) @score_t5=calc(@score_t5+1)](BIL_CR_EQ_Q16)
1) [Les salariés à ne plus respecter leur contrat de travail.](BIL_CR_EQ_Q16)

## BIL_CR_EQ_Q16

### Question 16 sur 25

**Qu'est-ce que le principe de confidentialité dans le domaine de la santé ?**

1) [Les informations sont publiques.](BIL_CR_EQ_Q17)
1) [Les médecins peuvent tout raconter.](BIL_CR_EQ_Q17)
1) [Les employeurs ont accès au dossier médical.](BIL_CR_EQ_Q17)
1) [Les informations médicales d'un patient sont protégées par le secret médical. @score=calc(@score+1) @score_t5=calc(@score_t5+1)](BIL_CR_EQ_Q17)

## BIL_CR_EQ_Q17

### Question 17 sur 25

**Laquelle de ces citations est inscrite dans la Déclaration des droits de l'homme et du citoyen de 1789 ?**

1) [« Nul n'est censé ignorer la loi. ».](BIL_CR_EQ_Q18)
1) [« Liberté, Travail, Solidarité. ».](BIL_CR_EQ_Q18)
1) [« La République protège toutes les religions. ».](BIL_CR_EQ_Q18)
1) [« Les hommes naissent et demeurent libres et égaux en droits. ». @score=calc(@score+1) @score_t3=calc(@score_t3+1)](BIL_CR_EQ_Q18)

## BIL_CR_EQ_Q18

### Question 18 sur 25

**Où est le siège du Parlement européen ?**

1) [Bruxelles.](BIL_CR_EQ_Q19)
1) [Luxembourg.](BIL_CR_EQ_Q19)
1) [Paris.](BIL_CR_EQ_Q19)
1) [Strasbourg. @score=calc(@score+1) @score_t2=calc(@score_t2+1)](BIL_CR_EQ_Q19)

## BIL_CR_EQ_Q19

### Question 19 sur 25

**Que fête-t-on le 8 mai ?**

1) [L'Armistice de 1918.](BIL_CR_EQ_Q20)
1) [La Révolution française.](BIL_CR_EQ_Q20)
1) [La fin de la seconde guerre mondiale. @score=calc(@score+1) @score_t4=calc(@score_t4+1)](BIL_CR_EQ_Q20)
1) [Le Débarquement des alliés en Normandie.](BIL_CR_EQ_Q20)

## BIL_CR_EQ_Q20

### Question 20 sur 25

**Qu'est-ce que le droit de grève ?**

1) [Refuser définitivement de travailler.](BIL_CR_EQ_Q21)
1) [Quitter son emploi.](BIL_CR_EQ_Q21)
1) [Ne plus respecter son contrat de travail.](BIL_CR_EQ_Q21)
1) [Le droit de cesser collectivement le travail pour défendre des revendications professionnelles. @score=calc(@score+1) @score_t5=calc(@score_t5+1)](BIL_CR_EQ_Q21)

## BIL_CR_EQ_Q21

### Question 21 sur 25

**Quel traité concerne la construction de l'Union européenne ?**

1) [Le traité de Maastricht. @score=calc(@score+1) @score_t2=calc(@score_t2+1)](BIL_CR_EQ_Q22)
1) [Le traité de Versailles.](BIL_CR_EQ_Q22)
1) [Le traité de Rome.](BIL_CR_EQ_Q22)
1) [Le traité de Paris.](BIL_CR_EQ_Q22)

## BIL_CR_EQ_Q22

### Question 22 sur 25

**Quel est le rôle de la police ?**

1) [Voter les lois.](BIL_CR_EQ_Q23)
1) [Rendre la justice.](BIL_CR_EQ_Q23)
1) [Protéger les personnes, faire respecter la loi et maintenir l'ordre public. @score=calc(@score+1) @score_t3=calc(@score_t3+1)](BIL_CR_EQ_Q23)
1) [Gouverner le pays.](BIL_CR_EQ_Q23)

## BIL_CR_EQ_Q23

### Question 23 sur 25

**Selon le principe de laïcité, que signifie la neutralité de l'État ?**

1) [L'État interdit les religions.](BIL_CR_EQ_Q24)
1) [L'État choisit une religion officielle.](BIL_CR_EQ_Q24)
1) [L'État ne favorise ni ne défavorise aucune religion. @score=calc(@score+1) @score_t1=calc(@score_t1+1)](BIL_CR_EQ_Q24)
1) [L'État finance une seule religion.](BIL_CR_EQ_Q24)

## BIL_CR_EQ_Q24

### Question 24 sur 25

**Quelles sont les affaires traitées par le conseil de prud'hommes ?**

1) [Les divorces.](BIL_CR_EQ_Q25)
1) [Les infractions pénales.](BIL_CR_EQ_Q25)
1) [Les conflits entre un salarié et son employeur. @score=calc(@score+1) @score_t5=calc(@score_t5+1)](BIL_CR_EQ_Q25)
1) [Les conflits entre voisins.](BIL_CR_EQ_Q25)

## BIL_CR_EQ_Q25

### Question 25 sur 25

**Que garantit la liberté d'expression ?**

1) [Le droit d'insulter les autres.](BIL_CR_EQ_RESULT)
1) [Le droit de diffamer.](BIL_CR_EQ_RESULT)
1) [Le droit d'exprimer librement ses opinions dans le respect de la loi. @score=calc(@score+1) @score_t1=calc(@score_t1+1)](BIL_CR_EQ_RESULT)
1) [Le droit d'inciter à la haine.](BIL_CR_EQ_RESULT)

## BIL_CR_EQ_RESULT

`@pourcentage = calc(@score*4)`
### 🎉 Votre bilan est terminé

Vous avez obtenu **`@score` / 25**, soit **`@pourcentage` %**.

`if @score <= 9`
### 🌱 Profil 1 — Bases à construire
Commencez par les notions fondamentales et révisez régulièrement par courtes séances.
`endif`
`if @score >= 10 && @score <= 15`
### 🧱 Profil 2 — Connaissances en construction
Consolidez les thèmes les moins maîtrisés avant de réaliser un examen blanc.
`endif`
`if @score >= 16 && @score <= 20`
### 🚀 Profil 3 — Niveau encourageant
Poursuivez avec des entraînements ciblés et des mises en situation.
`endif`
`if @score >= 21`
### ⭐ Profil 4 — Très bonne préparation
Votre niveau est solide. Travaillez maintenant les pièges et les examens blancs.
`endif`

1. [Voir mes scores par thématique](BIL_CR_EQ_THEMES)

## BIL_CR_EQ_THEMES

### 📊 Résultats par thématique

- **Principes et valeurs de la République** : `@score_t1` / 5
- **Système institutionnel et politique français** : `@score_t2` / 5
- **Droits et devoirs** : `@score_t3` / 5
- **Histoire, géographie, patrimoine et culture** : `@score_t4` / 5
- **Vivre dans la société française** : `@score_t5` / 5

1. [Voir mes recommandations](BIL_CR_EQ_RECO)

## BIL_CR_EQ_RECO

### 🧭 Mes priorités de révision

`if @score_t1 <= 2`
- 📚 **Priorité : Principes et valeurs de la République**
`endif`
`if @score_t2 <= 2`
- 📚 **Priorité : Système institutionnel et politique français**
`endif`
`if @score_t3 <= 2`
- 📚 **Priorité : Droits et devoirs**
`endif`
`if @score_t4 <= 2`
- 📚 **Priorité : Histoire, géographie, patrimoine et culture**
`endif`
`if @score_t5 <= 2`
- 📚 **Priorité : Vivre dans la société française**
`endif`

Commencez par les priorités affichées, puis entraînez-vous à nouveau sur ces thèmes.

1. [📚 Commencer mes révisions](SCR_REV_MENU)
2. [📝 M'entraîner](SCR_ENT_MENU)
3. [🔄 Refaire le bilan](SCR_BIL_EXAMEN)
4. [🏠 Retour au menu principal](MENU_PRINCIPAL)

## BIL_CR_INT_Q01

### Question 1 sur 25

**Que doit faire une victime de violences ?**

1) [Alerter la police ou la gendarmerie et demander de l'aide. @score=calc(@score+1) @score_t3=calc(@score_t3+1)](BIL_CR_INT_Q02)
1) [Ne rien dire pour éviter d'aggraver la situation.](BIL_CR_INT_Q02)
1) [Se faire justice soi-même.](BIL_CR_INT_Q02)
1) [Attendre sans rien faire.](BIL_CR_INT_Q02)

## BIL_CR_INT_Q02

### Question 2 sur 25

**Une femme majeure de nationalité française a-t-elle le droit de voter aux élections ?**

1) [Oui. @score=calc(@score+1) @score_t3=calc(@score_t3+1)](BIL_CR_INT_Q03)
1) [Non.](BIL_CR_INT_Q03)
1) [Seulement si elle est mariée.](BIL_CR_INT_Q03)
1) [Seulement si elle travaille.](BIL_CR_INT_Q03)

## BIL_CR_INT_Q03

### Question 3 sur 25

**Lequel de ces symboles est un symbole officiel de la République française ?**

1) [L'arc de triomphe.](BIL_CR_INT_Q04)
1) [La tour Eiffel.](BIL_CR_INT_Q04)
1) [Le coq.](BIL_CR_INT_Q04)
1) [Le bonnet prhygien. @score=calc(@score+1) @score_t1=calc(@score_t1+1)](BIL_CR_INT_Q04)

## BIL_CR_INT_Q04

### Question 4 sur 25

**Au nom de quoi l'État justifie-t-il la restriction des droits ?**

1) [De l'intérêt général. @score=calc(@score+1) @score_t3=calc(@score_t3+1)](BIL_CR_INT_Q05)
1) [De la volonté du Gouvernement.](BIL_CR_INT_Q05)
1) [De l'opinion de la majorité.](BIL_CR_INT_Q05)
1) [Des convictions religieuses.](BIL_CR_INT_Q05)

## BIL_CR_INT_Q05

### Question 5 sur 25

**Où a eu lieu le débarquement en 1944 ?**

1) [En Bretagne.](BIL_CR_INT_Q06)
1) [En Normandie. @score=calc(@score+1) @score_t4=calc(@score_t4+1)](BIL_CR_INT_Q06)
1) [À Paris.](BIL_CR_INT_Q06)
1) [En Aquitaine.](BIL_CR_INT_Q06)

## BIL_CR_INT_Q06

### Question 6 sur 25

**En application de la liberté individuelle, quelle proposition est correcte ? Une personne peut :**

1) [Refuser de respecter les lois si elles sont contraires à ses principes.](BIL_CR_INT_Q07)
1) [Imposer ses idées aux autres.](BIL_CR_INT_Q07)
1) [Choisir ses propres règles.](BIL_CR_INT_Q07)
1) [Choisir sa religion ou ne pas en avoir. @score=calc(@score+1) @score_t1=calc(@score_t1+1)](BIL_CR_INT_Q07)

## BIL_CR_INT_Q07

### Question 7 sur 25

**Quel monument parisien est l'un des symboles de la France ?**

1) [Le Colisée.](BIL_CR_INT_Q08)
1) [Big Ben.](BIL_CR_INT_Q08)
1) [La tour Eiffel. @score=calc(@score+1) @score_t4=calc(@score_t4+1)](BIL_CR_INT_Q08)
1) [La statue de la Liberté.](BIL_CR_INT_Q08)

## BIL_CR_INT_Q08

### Question 8 sur 25

**Qui nomme le Premier ministre ?**

1) [Le Parlement.](BIL_CR_INT_Q09)
1) [Le Président de la République. @score=calc(@score+1) @score_t2=calc(@score_t2+1)](BIL_CR_INT_Q09)
1) [Les députés.](BIL_CR_INT_Q09)
1) [Les électeurs.](BIL_CR_INT_Q09)

## BIL_CR_INT_Q09

### Question 9 sur 25

**A-t-on le droit de changer de religion ?**

1) [Seulement avec l'autorisation de l'Etat.](BIL_CR_INT_Q10)
1) [Seulement avec une autorisation.](BIL_CR_INT_Q10)
1) [Non c'est interdit par la loi.](BIL_CR_INT_Q10)
1) [Oui. @score=calc(@score+1) @score_t1=calc(@score_t1+1)](BIL_CR_INT_Q10)

## BIL_CR_INT_Q10

### Question 10 sur 25

**Combien de communes environ existe-t-il en France ?**

1) [1200.](BIL_CR_INT_Q11)
1) [577.](BIL_CR_INT_Q11)
1) [35000. @score=calc(@score+1) @score_t2=calc(@score_t2+1)](BIL_CR_INT_Q11)
1) [3050.](BIL_CR_INT_Q11)

## BIL_CR_INT_Q11

### Question 11 sur 25

**Un employeur refuse d'embaucher des femmes dans son entreprise. Que dit la loi ?**

1) [L'employeur choisit librement.](BIL_CR_INT_Q12)
1) [C'est autorisé.](BIL_CR_INT_Q12)
1) [Cela dépend de son règlement intérieur.](BIL_CR_INT_Q12)
1) [C'est interdit. La loi interdit les discriminations. @score=calc(@score+1) @score_t1=calc(@score_t1+1)](BIL_CR_INT_Q12)

## BIL_CR_INT_Q12

### Question 12 sur 25

**Qui peut voter aux élections en France ?**

1) [Toutes les personnes qui vivent en France.](BIL_CR_INT_Q13)
1) [Toutes les personnes possédant un titre de séjour.](BIL_CR_INT_Q13)
1) [Les citoyens français inscrits sur les listes électorales. @score=calc(@score+1) @score_t2=calc(@score_t2+1)](BIL_CR_INT_Q13)
1) [Toutes les personnes âgées de plus de 18 ans.](BIL_CR_INT_Q13)

## BIL_CR_INT_Q13

### Question 13 sur 25

**Quelle est la place de la langue française dans la République ?**

1) [Chaque région choisit sa langue officielle.](BIL_CR_INT_Q14)
1) [Le français est la langue de la République. @score=calc(@score+1) @score_t1=calc(@score_t1+1)](BIL_CR_INT_Q14)
1) [Il existe plusieurs langues officielles.](BIL_CR_INT_Q14)
1) [L'anglais est la langue officielle.](BIL_CR_INT_Q14)

## BIL_CR_INT_Q14

### Question 14 sur 25

**En quelle année le traité de Maastricht, qui marque la fondation de l'Union européenne, a-t-il été signé ?**

1) [1992. @score=calc(@score+1) @score_t2=calc(@score_t2+1)](BIL_CR_INT_Q15)
1) [1957.](BIL_CR_INT_Q15)
1) [2002.](BIL_CR_INT_Q15)
1) [1989.](BIL_CR_INT_Q15)

## BIL_CR_INT_Q15

### Question 15 sur 25

**Laquelle de ces citations est inscrite dans la Déclaration des droits de l'homme et du citoyen de 1789 ?**

1) [« Nul n'est censé ignorer la loi. ».](BIL_CR_INT_Q16)
1) [« Liberté, Travail, Solidarité. ».](BIL_CR_INT_Q16)
1) [« La République protège toutes les religions. ».](BIL_CR_INT_Q16)
1) [« Les hommes naissent et demeurent libres et égaux en droits. ». @score=calc(@score+1) @score_t3=calc(@score_t3+1)](BIL_CR_INT_Q16)

## BIL_CR_INT_Q16

### Question 16 sur 25

**Un bail locatif est valide s'il est :**

1) [Conclu uniquement à l'oral.](BIL_CR_INT_Q17)
1) [Écrit et signé par le propriétaire et le locataire. @score=calc(@score+1) @score_t5=calc(@score_t5+1)](BIL_CR_INT_Q17)
1) [Signé uniquement par le propriétaire.](BIL_CR_INT_Q17)
1) [Signé uniquement par le locataire.](BIL_CR_INT_Q17)

## BIL_CR_INT_Q17

### Question 17 sur 25

**Concernant l'utilisation des réseaux sociaux, quelle proposition est correcte ?**

1) [On peut tout publier sans limite.](BIL_CR_INT_Q18)
1) [Les réseaux sociaux sont soumis aux lois françaises. @score=calc(@score+1) @score_t3=calc(@score_t3+1)](BIL_CR_INT_Q18)
1) [Les insultes sont autorisées sur Internet.](BIL_CR_INT_Q18)
1) [Les propos discriminatoires sont permis s'ils sont publiés sur un compte privé.](BIL_CR_INT_Q18)

## BIL_CR_INT_Q18

### Question 18 sur 25

**Quelle est l'organisation administrative de la France ?**

1) [Cantons uniquement.](BIL_CR_INT_Q19)
1) [Provinces.](BIL_CR_INT_Q19)
1) [La France est organisée en communes, départements et régions. @score=calc(@score+1) @score_t2=calc(@score_t2+1)](BIL_CR_INT_Q19)
1) [États fédérés.](BIL_CR_INT_Q19)

## BIL_CR_INT_Q19

### Question 19 sur 25

**Que fête-t-on le 8 mai ?**

1) [L'Armistice de 1918.](BIL_CR_INT_Q20)
1) [La Révolution française.](BIL_CR_INT_Q20)
1) [La fin de la seconde guerre mondiale. @score=calc(@score+1) @score_t4=calc(@score_t4+1)](BIL_CR_INT_Q20)
1) [Le Débarquement des alliés en Normandie.](BIL_CR_INT_Q20)

## BIL_CR_INT_Q20

### Question 20 sur 25

**En quelle année l'euro est-elle devenue la monnaie utilisée en France ?**

1) [2002. @score=calc(@score+1) @score_t4=calc(@score_t4+1)](BIL_CR_INT_Q21)
1) [1992.](BIL_CR_INT_Q21)
1) [1999.](BIL_CR_INT_Q21)
1) [2005.](BIL_CR_INT_Q21)

## BIL_CR_INT_Q21

### Question 21 sur 25

**Qui peut manger à la cantine scolaire ?**

1) [Seulement les meilleurs élèves.](BIL_CR_INT_Q22)
1) [Tous les élèves inscrits, selon les règles de la commune ou de l'établissement. @score=calc(@score+1) @score_t5=calc(@score_t5+1)](BIL_CR_INT_Q22)
1) [Seulement les enfants français.](BIL_CR_INT_Q22)
1) [Seulement les élèves du primaire.](BIL_CR_INT_Q22)

## BIL_CR_INT_Q22

### Question 22 sur 25

**Qu'est-ce que le principe de confidentialité dans le domaine de la santé ?**

1) [Les informations sont publiques.](BIL_CR_INT_Q23)
1) [Les médecins peuvent tout raconter.](BIL_CR_INT_Q23)
1) [Les employeurs ont accès au dossier médical.](BIL_CR_INT_Q23)
1) [Les informations médicales d'un patient sont protégées par le secret médical. @score=calc(@score+1) @score_t5=calc(@score_t5+1)](BIL_CR_INT_Q23)

## BIL_CR_INT_Q23

### Question 23 sur 25

**Quel était le surnom de Louis XIV ?**

1) [Le Roi-Soleil. @score=calc(@score+1) @score_t4=calc(@score_t4+1)](BIL_CR_INT_Q24)
1) [Le Roi-Chevalier.](BIL_CR_INT_Q24)
1) [Le Roi-Soulier.](BIL_CR_INT_Q24)
1) [Le Roi-Majestueux.](BIL_CR_INT_Q24)

## BIL_CR_INT_Q24

### Question 24 sur 25

**Qui peut demander un congé parental d'éducation ?**

1) [Seulement la mère.](BIL_CR_INT_Q25)
1) [Seulement le père.](BIL_CR_INT_Q25)
1) [Le père ou la mère. @score=calc(@score+1) @score_t5=calc(@score_t5+1)](BIL_CR_INT_Q25)
1) [Les grands-parents.](BIL_CR_INT_Q25)

## BIL_CR_INT_Q25

### Question 25 sur 25

**Quel est l'âge de la majorité ?**

1) [18 ans. @score=calc(@score+1) @score_t5=calc(@score_t5+1)](BIL_CR_INT_RESULT)
1) [16 ans.](BIL_CR_INT_RESULT)
1) [17 ans.](BIL_CR_INT_RESULT)
1) [21 ans.](BIL_CR_INT_RESULT)

## BIL_CR_INT_RESULT

`@pourcentage = calc(@score*4)`
### 🎉 Votre bilan est terminé

Vous avez obtenu **`@score` / 25**, soit **`@pourcentage` %**.

`if @score <= 9`
### 🌱 Profil 1 — Bases à construire
Commencez par les notions fondamentales et révisez régulièrement par courtes séances.
`endif`
`if @score >= 10 && @score <= 15`
### 🧱 Profil 2 — Connaissances en construction
Consolidez les thèmes les moins maîtrisés avant de réaliser un examen blanc.
`endif`
`if @score >= 16 && @score <= 20`
### 🚀 Profil 3 — Niveau encourageant
Poursuivez avec des entraînements ciblés et des mises en situation.
`endif`
`if @score >= 21`
### ⭐ Profil 4 — Très bonne préparation
Votre niveau est solide. Travaillez maintenant les pièges et les examens blancs.
`endif`

1. [Voir mes scores par thématique](BIL_CR_INT_THEMES)

## BIL_CR_INT_THEMES

### 📊 Résultats par thématique

- **Principes et valeurs de la République** : `@score_t1` / 5
- **Système institutionnel et politique français** : `@score_t2` / 5
- **Droits et devoirs** : `@score_t3` / 5
- **Histoire, géographie, patrimoine et culture** : `@score_t4` / 5
- **Vivre dans la société française** : `@score_t5` / 5

1. [Voir mes recommandations](BIL_CR_INT_RECO)

## BIL_CR_INT_RECO

### 🧭 Mes priorités de révision

`if @score_t1 <= 2`
- 📚 **Priorité : Principes et valeurs de la République**
`endif`
`if @score_t2 <= 2`
- 📚 **Priorité : Système institutionnel et politique français**
`endif`
`if @score_t3 <= 2`
- 📚 **Priorité : Droits et devoirs**
`endif`
`if @score_t4 <= 2`
- 📚 **Priorité : Histoire, géographie, patrimoine et culture**
`endif`
`if @score_t5 <= 2`
- 📚 **Priorité : Vivre dans la société française**
`endif`

Commencez par les priorités affichées, puis entraînez-vous à nouveau sur ces thèmes.

1. [📚 Commencer mes révisions](SCR_REV_MENU)
2. [📝 M'entraîner](SCR_ENT_MENU)
3. [🔄 Refaire le bilan](SCR_BIL_EXAMEN)
4. [🏠 Retour au menu principal](MENU_PRINCIPAL)

## BIL_NAT_DEC_Q01

### Question 1 sur 25

**Quel prénom évoque un symbole de la République ?**

1) [Jeanne.](BIL_NAT_DEC_Q02)
1) [Marie.](BIL_NAT_DEC_Q02)
1) [Marianne. @score=calc(@score+1) @score_t1=calc(@score_t1+1)](BIL_NAT_DEC_Q02)
1) [Louise.](BIL_NAT_DEC_Q02)

## BIL_NAT_DEC_Q02

### Question 2 sur 25

**Comment la Constitution peut-elle être révisée ?**

1) [Par décret du Président.](BIL_NAT_DEC_Q03)
1) [Par décision du Premier ministre.](BIL_NAT_DEC_Q03)
1) [Par un tribunal.](BIL_NAT_DEC_Q03)
1) [Par référendum ou par le Parlement réuni en Congrès. @score=calc(@score+1) @score_t2=calc(@score_t2+1)](BIL_NAT_DEC_Q03)

## BIL_NAT_DEC_Q03

### Question 3 sur 25

**L'inscription sur les listes électorales est-elle... ?**

1) [Obligatoire pour pouvoir voter. @score=calc(@score+1) @score_t2=calc(@score_t2+1)](BIL_NAT_DEC_Q04)
1) [Facultative.](BIL_NAT_DEC_Q04)
1) [Réservée à certaines professions.](BIL_NAT_DEC_Q04)
1) [Automatique dès la naissance, sans démarche.](BIL_NAT_DEC_Q04)

## BIL_NAT_DEC_Q04

### Question 4 sur 25

**Citez un symbole qui représente officiellement la République française.**

1) [La tour Eiffel.](BIL_NAT_DEC_Q05)
1) [Le béret.](BIL_NAT_DEC_Q05)
1) [Marianne. @score=calc(@score+1) @score_t1=calc(@score_t1+1)](BIL_NAT_DEC_Q05)
1) [Le coq.](BIL_NAT_DEC_Q05)

## BIL_NAT_DEC_Q05

### Question 5 sur 25

**Qu'est-ce que la laïcité ?**

1) [L'interdiction des religions.](BIL_NAT_DEC_Q06)
1) [L'obligation de ne pas croire.](BIL_NAT_DEC_Q06)
1) [Une religion officielle.](BIL_NAT_DEC_Q06)
1) [La séparation des Églises et de l'État, garantissant la liberté de conscience et l'égalité de tous. @score=calc(@score+1) @score_t1=calc(@score_t1+1)](BIL_NAT_DEC_Q06)

## BIL_NAT_DEC_Q06

### Question 6 sur 25

**À partir de quel âge un mineur peut-il, en principe, s'inscrire seul sur un service en ligne utilisant ses données personnelles ?**

1) [13 ans.](BIL_NAT_DEC_Q07)
1) [15 ans. @score=calc(@score+1) @score_t3=calc(@score_t3+1)](BIL_NAT_DEC_Q07)
1) [16 ans.](BIL_NAT_DEC_Q07)
1) [18 ans.](BIL_NAT_DEC_Q07)

## BIL_NAT_DEC_Q07

### Question 7 sur 25

**Comment est composé le drapeau européen ?**

1) [Une étoile par État membre.](BIL_NAT_DEC_Q08)
1) [Vingt-sept étoiles.](BIL_NAT_DEC_Q08)
1) [Des bandes bleues et blanches.](BIL_NAT_DEC_Q08)
1) [Douze étoiles dorées sur fond bleu. @score=calc(@score+1) @score_t2=calc(@score_t2+1)](BIL_NAT_DEC_Q08)

## BIL_NAT_DEC_Q08

### Question 8 sur 25

**A-t-on l'obligation de porter assistance à une personne en danger ?**

1) [Non.](BIL_NAT_DEC_Q09)
1) [Seulement les médecins.](BIL_NAT_DEC_Q09)
1) [Seulement les policiers.](BIL_NAT_DEC_Q09)
1) [Oui, dans la mesure où cela ne met pas sa propre vie en danger. @score=calc(@score+1) @score_t3=calc(@score_t3+1)](BIL_NAT_DEC_Q09)

## BIL_NAT_DEC_Q09

### Question 9 sur 25

**À quel âge est fixée la majorité civile en France ?**

1) [16 ans.](BIL_NAT_DEC_Q10)
1) [17 ans.](BIL_NAT_DEC_Q10)
1) [18 ans. @score=calc(@score+1) @score_t3=calc(@score_t3+1)](BIL_NAT_DEC_Q10)
1) [21 ans.](BIL_NAT_DEC_Q10)

## BIL_NAT_DEC_Q10

### Question 10 sur 25

**Que commémore la fête nationale ?**

1) [La fin de la Seconde Guerre mondiale.](BIL_NAT_DEC_Q11)
1) [La signature de la Constitution.](BIL_NAT_DEC_Q11)
1) [La création de l'Union européenne.](BIL_NAT_DEC_Q11)
1) [La prise de la Bastille en 1789 et la Fête de la Fédération de 1790. @score=calc(@score+1) @score_t1=calc(@score_t1+1)](BIL_NAT_DEC_Q11)

## BIL_NAT_DEC_Q11

### Question 11 sur 25

**Quel traité a créé officiellement l'Union européenne ?**

1) [Le traité de Versailles.](BIL_NAT_DEC_Q12)
1) [Le traité de Rome.](BIL_NAT_DEC_Q12)
1) [Le traité de Lisbonne.](BIL_NAT_DEC_Q12)
1) [Le traité de Maastricht. @score=calc(@score+1) @score_t2=calc(@score_t2+1)](BIL_NAT_DEC_Q12)

## BIL_NAT_DEC_Q12

### Question 12 sur 25

**Doit-on déclarer ses revenus chaque année aux services fiscaux ?**

1) [Non.](BIL_NAT_DEC_Q13)
1) [Seulement si l'on paie des impôts.](BIL_NAT_DEC_Q13)
1) [Seulement les salariés.](BIL_NAT_DEC_Q13)
1) [Oui, c'est une obligation. @score=calc(@score+1) @score_t3=calc(@score_t3+1)](BIL_NAT_DEC_Q13)

## BIL_NAT_DEC_Q13

### Question 13 sur 25

**Peut-on brûler publiquement un drapeau français ?**

1) [Oui.](BIL_NAT_DEC_Q14)
1) [Oui, si c'est dans le cadre d'une manifestation.](BIL_NAT_DEC_Q14)
1) [Oui, au nom de la liberté d'expression.](BIL_NAT_DEC_Q14)
1) [Non, cet acte peut être sanctionné par la loi. @score=calc(@score+1) @score_t1=calc(@score_t1+1)](BIL_NAT_DEC_Q14)

## BIL_NAT_DEC_Q14

### Question 14 sur 25

**La liberté d'expression sur les réseaux sociaux en France est :**

1) [Totalement libre, sans aucune limite.](BIL_NAT_DEC_Q15)
1) [Interdite sur Internet.](BIL_NAT_DEC_Q15)
1) [Réservée aux journalistes.](BIL_NAT_DEC_Q15)
1) [Garantie mais encadrée par la loi (interdiction de la haine, de la diffamation, des injures...). @score=calc(@score+1) @score_t1=calc(@score_t1+1)](BIL_NAT_DEC_Q15)

## BIL_NAT_DEC_Q15

### Question 15 sur 25

**Un citoyen a-t-il le droit d'adhérer à un parti politique ?**

1) [Non.](BIL_NAT_DEC_Q16)
1) [Seulement les élus.](BIL_NAT_DEC_Q16)
1) [Seulement les fonctionnaires.](BIL_NAT_DEC_Q16)
1) [Oui, chacun est libre d'adhérer ou non. @score=calc(@score+1) @score_t2=calc(@score_t2+1)](BIL_NAT_DEC_Q16)

## BIL_NAT_DEC_Q16

### Question 16 sur 25

**Une personne peut-elle être mariée à plusieurs personnes en même temps en France ?**

1) [Oui.](BIL_NAT_DEC_Q17)
1) [Oui, selon sa religion.](BIL_NAT_DEC_Q17)
1) [Oui, avec l'accord des époux.](BIL_NAT_DEC_Q17)
1) [Non, la polygamie est interdite. @score=calc(@score+1) @score_t3=calc(@score_t3+1)](BIL_NAT_DEC_Q17)

## BIL_NAT_DEC_Q17

### Question 17 sur 25

**Citez tous les symboles officiels de la République française.**

1) [Le coq, la tour Eiffel, le béret et la baguette.](BIL_NAT_DEC_Q18)
1) [Le drapeau tricolore, Marianne, la Marseillaise et la devise. @score=calc(@score+1) @score_t1=calc(@score_t1+1)](BIL_NAT_DEC_Q18)
1) [La tour Eiffel et le Louvre.](BIL_NAT_DEC_Q18)
1) [Le béret et la baguette.](BIL_NAT_DEC_Q18)

## BIL_NAT_DEC_Q18

### Question 18 sur 25

**A-t-on le droit de ne pas respecter une loi que l'on juge injuste ?**

1) [Oui.](BIL_NAT_DEC_Q19)
1) [Oui si l'on n'est pas d'accord.](BIL_NAT_DEC_Q19)
1) [Oui selon sa religion.](BIL_NAT_DEC_Q19)
1) [Non, chacun doit respecter la loi. @score=calc(@score+1) @score_t2=calc(@score_t2+1)](BIL_NAT_DEC_Q19)

## BIL_NAT_DEC_Q19

### Question 19 sur 25

**Parmi ces responsables, lequel est élu (et non nommé) ?**

1) [Le préfet.](BIL_NAT_DEC_Q20)
1) [Le procureur.](BIL_NAT_DEC_Q20)
1) [Le Premier ministre.](BIL_NAT_DEC_Q20)
1) [Le maire. @score=calc(@score+1) @score_t2=calc(@score_t2+1)](BIL_NAT_DEC_Q20)

## BIL_NAT_DEC_Q20

### Question 20 sur 25

**Une personne peut-elle changer librement de religion en France ?**

1) [Non, c'est interdit.](BIL_NAT_DEC_Q21)
1) [Seulement avec l'accord de l'État.](BIL_NAT_DEC_Q21)
1) [Seulement à partir de 18 ans.](BIL_NAT_DEC_Q21)
1) [Oui, chacun est libre de changer de religion. @score=calc(@score+1) @score_t1=calc(@score_t1+1)](BIL_NAT_DEC_Q21)

## BIL_NAT_DEC_Q21

### Question 21 sur 25

**Dans quel texte trouve-t-on la phrase « Les hommes naissent et demeurent libres et égaux en droits » ?**

1) [La Constitution.](BIL_NAT_DEC_Q22)
1) [Le Code pénal.](BIL_NAT_DEC_Q22)
1) [La Convention européenne des droits de l'homme.](BIL_NAT_DEC_Q22)
1) [La Déclaration des droits de l'Homme et du Citoyen de 1789. @score=calc(@score+1) @score_t3=calc(@score_t3+1)](BIL_NAT_DEC_Q22)

## BIL_NAT_DEC_Q22

### Question 22 sur 25

**Tous les citoyens français ont-ils obligatoirement la même religion ?**

1) [Oui.](BIL_NAT_DEC_Q23)
1) [Tous sont catholiques.](BIL_NAT_DEC_Q23)
1) [Tous doivent avoir une religion.](BIL_NAT_DEC_Q23)
1) [Non, chacun est libre de croire ou de ne pas croire. @score=calc(@score+1) @score_t3=calc(@score_t3+1)](BIL_NAT_DEC_Q23)

## BIL_NAT_DEC_Q23

### Question 23 sur 25

**Où est-il autorisé de fumer, alors que c'est interdit dans de nombreux lieux publics fermés ?**

1) [Dans un restaurant.](BIL_NAT_DEC_Q24)
1) [Dans un train.](BIL_NAT_DEC_Q24)
1) [Dans un bureau partagé.](BIL_NAT_DEC_Q24)
1) [Chez soi. @score=calc(@score+1) @score_t3=calc(@score_t3+1)](BIL_NAT_DEC_Q24)

## BIL_NAT_DEC_Q24

### Question 24 sur 25

**Pour combien de temps le Président de la République est-il élu ?**

1) [4 ans.](BIL_NAT_DEC_Q25)
1) [6 ans.](BIL_NAT_DEC_Q25)
1) [7 ans.](BIL_NAT_DEC_Q25)
1) [5 ans. @score=calc(@score+1) @score_t2=calc(@score_t2+1)](BIL_NAT_DEC_Q25)

## BIL_NAT_DEC_Q25

### Question 25 sur 25

**En France, il est possible pour l'État de financer :**

1) [Les aumôneries dans certains services publics (hôpitaux, prisons, armées). @score=calc(@score+1) @score_t1=calc(@score_t1+1)](BIL_NAT_DEC_RESULT)
1) [N'importe quel lieu de culte, sans exception.](BIL_NAT_DEC_RESULT)
1) [Uniquement les églises catholiques.](BIL_NAT_DEC_RESULT)
1) [Aucun financement religieux, sans exception.](BIL_NAT_DEC_RESULT)

## BIL_NAT_DEC_RESULT

`@pourcentage = calc(@score*4)`
### 🎉 Votre bilan est terminé

Vous avez obtenu **`@score` / 25**, soit **`@pourcentage` %**.

`if @score <= 9`
### 🌱 Profil 1 — Bases à construire
Commencez par les notions fondamentales et révisez régulièrement par courtes séances.
`endif`
`if @score >= 10 && @score <= 15`
### 🧱 Profil 2 — Connaissances en construction
Consolidez les thèmes les moins maîtrisés avant de réaliser un examen blanc.
`endif`
`if @score >= 16 && @score <= 20`
### 🚀 Profil 3 — Niveau encourageant
Poursuivez avec des entraînements ciblés et des mises en situation.
`endif`
`if @score >= 21`
### ⭐ Profil 4 — Très bonne préparation
Votre niveau est solide. Travaillez maintenant les pièges et les examens blancs.
`endif`

1. [Voir mes scores par thématique](BIL_NAT_DEC_THEMES)

## BIL_NAT_DEC_THEMES

### 📊 Résultats par thématique

- **Principes et valeurs de la République** : `@score_t1` / 9
- **Système institutionnel et politique français** : `@score_t2` / 8
- **Droits et devoirs** : `@score_t3` / 8

:::warning Banque Naturalisation
La banque fournie couvre actuellement les thématiques T1 à T3. Les thématiques T4 et T5 ne sont donc pas évaluées dans cette version.
:::

1. [Voir mes recommandations](BIL_NAT_DEC_RECO)

## BIL_NAT_DEC_RECO

### 🧭 Mes priorités de révision

`if @score_t1 <= 4`
- 📚 **Priorité : Principes et valeurs de la République**
`endif`
`if @score_t2 <= 3`
- 📚 **Priorité : Système institutionnel et politique français**
`endif`
`if @score_t3 <= 3`
- 📚 **Priorité : Droits et devoirs**
`endif`

Commencez par les priorités affichées, puis entraînez-vous à nouveau sur ces thèmes.

1. [📚 Commencer mes révisions](SCR_REV_MENU)
2. [📝 M'entraîner](SCR_ENT_MENU)
3. [🔄 Refaire le bilan](SCR_BIL_EXAMEN)
4. [🏠 Retour au menu principal](MENU_PRINCIPAL)

## BIL_NAT_EQ_Q01

### Question 1 sur 25

**En quoi consiste le devoir de solidarité du citoyen ?**

1) [Aider uniquement sa famille.](BIL_NAT_EQ_Q02)
1) [Donner obligatoirement de l'argent.](BIL_NAT_EQ_Q02)
1) [Être bénévole dans une association uniquement.](BIL_NAT_EQ_Q02)
1) [Aider les personnes en difficulté et contribuer à la solidarité nationale. @score=calc(@score+1) @score_t3=calc(@score_t3+1)](BIL_NAT_EQ_Q02)

## BIL_NAT_EQ_Q02

### Question 2 sur 25

**Que signifie être libre, en France ?**

1) [On peut faire tout ce que l'on veut.](BIL_NAT_EQ_Q03)
1) [Les lois ne s'appliquent pas.](BIL_NAT_EQ_Q03)
1) [Chacun décide de ses propres règles.](BIL_NAT_EQ_Q03)
1) [Chacun est libre tant qu'il respecte les droits des autres. @score=calc(@score+1) @score_t3=calc(@score_t3+1)](BIL_NAT_EQ_Q03)

## BIL_NAT_EQ_Q03

### Question 3 sur 25

**En France, les impôts permettent de financer les dépenses publiques. Quelle proposition est correcte ?**

1) [Ils financent notamment les écoles, les hôpitaux, la police et les routes. @score=calc(@score+1) @score_t1=calc(@score_t1+1)](BIL_NAT_EQ_Q04)
1) [Ils financent uniquement les salaires des élus.](BIL_NAT_EQ_Q04)
1) [Ils sont reversés directement aux entreprises.](BIL_NAT_EQ_Q04)
1) [Ils ne financent que l'armée.](BIL_NAT_EQ_Q04)

## BIL_NAT_EQ_Q04

### Question 4 sur 25

**Quel pays a quitté l'Union européenne (Brexit) ?**

1) [La Norvège.](BIL_NAT_EQ_Q05)
1) [La Suisse.](BIL_NAT_EQ_Q05)
1) [L'Irlande.](BIL_NAT_EQ_Q05)
1) [Le Royaume-Uni. @score=calc(@score+1) @score_t2=calc(@score_t2+1)](BIL_NAT_EQ_Q05)

## BIL_NAT_EQ_Q05

### Question 5 sur 25

**Qui est le préfet ?**

1) [Le maire.](BIL_NAT_EQ_Q06)
1) [Le président du conseil départemental.](BIL_NAT_EQ_Q06)
1) [Le député.](BIL_NAT_EQ_Q06)
1) [Le représentant de l'État dans le département. @score=calc(@score+1) @score_t2=calc(@score_t2+1)](BIL_NAT_EQ_Q06)

## BIL_NAT_EQ_Q06

### Question 6 sur 25

**Une personne peut-elle changer librement de religion en France ?**

1) [Non, c'est interdit.](BIL_NAT_EQ_Q07)
1) [Seulement avec l'accord de l'État.](BIL_NAT_EQ_Q07)
1) [Seulement à partir de 18 ans.](BIL_NAT_EQ_Q07)
1) [Oui, chacun est libre de changer de religion. @score=calc(@score+1) @score_t1=calc(@score_t1+1)](BIL_NAT_EQ_Q07)

## BIL_NAT_EQ_Q07

### Question 7 sur 25

**Qui doit respecter et veiller à la neutralité religieuse dans les services publics ?**

1) [Les usagers.](BIL_NAT_EQ_Q08)
1) [Les visiteurs.](BIL_NAT_EQ_Q08)
1) [Les élus uniquement.](BIL_NAT_EQ_Q08)
1) [Les agents publics. @score=calc(@score+1) @score_t1=calc(@score_t1+1)](BIL_NAT_EQ_Q08)

## BIL_NAT_EQ_Q08

### Question 8 sur 25

**Selon le principe de laïcité, que signifie la neutralité de l'État ?**

1) [L'État interdit les religions.](BIL_NAT_EQ_Q09)
1) [L'État choisit une religion officielle.](BIL_NAT_EQ_Q09)
1) [L'État finance toutes les religions.](BIL_NAT_EQ_Q09)
1) [L'État ne favorise ni ne défavorise aucune religion. @score=calc(@score+1) @score_t1=calc(@score_t1+1)](BIL_NAT_EQ_Q09)

## BIL_NAT_EQ_Q09

### Question 9 sur 25

**À partir de quel âge un mineur peut-il, en principe, s'inscrire seul sur un service en ligne utilisant ses données personnelles ?**

1) [13 ans.](BIL_NAT_EQ_Q10)
1) [15 ans. @score=calc(@score+1) @score_t3=calc(@score_t3+1)](BIL_NAT_EQ_Q10)
1) [16 ans.](BIL_NAT_EQ_Q10)
1) [18 ans.](BIL_NAT_EQ_Q10)

## BIL_NAT_EQ_Q10

### Question 10 sur 25

**Qui est élu lors des élections municipales ?**

1) [Le maire directement.](BIL_NAT_EQ_Q11)
1) [Les préfets.](BIL_NAT_EQ_Q11)
1) [Les sénateurs.](BIL_NAT_EQ_Q11)
1) [Les conseillers municipaux. @score=calc(@score+1) @score_t2=calc(@score_t2+1)](BIL_NAT_EQ_Q11)

## BIL_NAT_EQ_Q11

### Question 11 sur 25

**La liberté d'association est :**

1) [L'obligation d'adhérer à une association.](BIL_NAT_EQ_Q12)
1) [Le droit de créer une association, d'y adhérer ou non. @score=calc(@score+1) @score_t1=calc(@score_t1+1)](BIL_NAT_EQ_Q12)
1) [Une association réservée aux citoyens français.](BIL_NAT_EQ_Q12)
1) [L'interdiction de créer une association sans autorisation de l'État.](BIL_NAT_EQ_Q12)

## BIL_NAT_EQ_Q12

### Question 12 sur 25

**Ne pas respecter le Code de la route constitue :**

1) [Une simple recommandation ignorée.](BIL_NAT_EQ_Q13)
1) [Un choix personnel sans conséquence.](BIL_NAT_EQ_Q13)
1) [Une infraction punie par la loi. @score=calc(@score+1) @score_t3=calc(@score_t3+1)](BIL_NAT_EQ_Q13)
1) [Une pratique tolérée en dehors des villes.](BIL_NAT_EQ_Q13)

## BIL_NAT_EQ_Q13

### Question 13 sur 25

**A-t-on le droit de ne pas respecter une loi que l'on juge injuste ?**

1) [Oui.](BIL_NAT_EQ_Q14)
1) [Oui si l'on n'est pas d'accord.](BIL_NAT_EQ_Q14)
1) [Oui selon sa religion.](BIL_NAT_EQ_Q14)
1) [Non, chacun doit respecter la loi. @score=calc(@score+1) @score_t2=calc(@score_t2+1)](BIL_NAT_EQ_Q14)

## BIL_NAT_EQ_Q14

### Question 14 sur 25

**La liberté d'expression sur les réseaux sociaux en France est :**

1) [Totalement libre, sans aucune limite.](BIL_NAT_EQ_Q15)
1) [Interdite sur Internet.](BIL_NAT_EQ_Q15)
1) [Réservée aux journalistes.](BIL_NAT_EQ_Q15)
1) [Garantie mais encadrée par la loi (interdiction de la haine, de la diffamation, des injures...). @score=calc(@score+1) @score_t1=calc(@score_t1+1)](BIL_NAT_EQ_Q15)

## BIL_NAT_EQ_Q15

### Question 15 sur 25

**Tous les citoyens français ont-ils obligatoirement la même religion ?**

1) [Oui.](BIL_NAT_EQ_Q16)
1) [Tous sont catholiques.](BIL_NAT_EQ_Q16)
1) [Tous doivent avoir une religion.](BIL_NAT_EQ_Q16)
1) [Non, chacun est libre de croire ou de ne pas croire. @score=calc(@score+1) @score_t3=calc(@score_t3+1)](BIL_NAT_EQ_Q16)

## BIL_NAT_EQ_Q16

### Question 16 sur 25

**Quel traité a créé officiellement l'Union européenne ?**

1) [Le traité de Versailles.](BIL_NAT_EQ_Q17)
1) [Le traité de Rome.](BIL_NAT_EQ_Q17)
1) [Le traité de Lisbonne.](BIL_NAT_EQ_Q17)
1) [Le traité de Maastricht. @score=calc(@score+1) @score_t2=calc(@score_t2+1)](BIL_NAT_EQ_Q17)

## BIL_NAT_EQ_Q17

### Question 17 sur 25

**Quel est le rôle du maire ?**

1) [Il vote les lois.](BIL_NAT_EQ_Q18)
1) [Il dirige le Gouvernement.](BIL_NAT_EQ_Q18)
1) [Il représente la France à l'étranger.](BIL_NAT_EQ_Q18)
1) [Il dirige la commune, applique les décisions du conseil municipal et assure notamment l'état civil. @score=calc(@score+1) @score_t2=calc(@score_t2+1)](BIL_NAT_EQ_Q18)

## BIL_NAT_EQ_Q18

### Question 18 sur 25

**À quel âge est fixée la majorité civile en France ?**

1) [16 ans.](BIL_NAT_EQ_Q19)
1) [17 ans.](BIL_NAT_EQ_Q19)
1) [18 ans. @score=calc(@score+1) @score_t3=calc(@score_t3+1)](BIL_NAT_EQ_Q19)
1) [21 ans.](BIL_NAT_EQ_Q19)

## BIL_NAT_EQ_Q19

### Question 19 sur 25

**Une personne peut-elle être mariée à plusieurs personnes en même temps en France ?**

1) [Oui.](BIL_NAT_EQ_Q20)
1) [Oui, selon sa religion.](BIL_NAT_EQ_Q20)
1) [Oui, avec l'accord des époux.](BIL_NAT_EQ_Q20)
1) [Non, la polygamie est interdite. @score=calc(@score+1) @score_t3=calc(@score_t3+1)](BIL_NAT_EQ_Q20)

## BIL_NAT_EQ_Q20

### Question 20 sur 25

**Un citoyen a-t-il le droit d'adhérer à un parti politique ?**

1) [Non.](BIL_NAT_EQ_Q21)
1) [Seulement les élus.](BIL_NAT_EQ_Q21)
1) [Seulement les fonctionnaires.](BIL_NAT_EQ_Q21)
1) [Oui, chacun est libre d'adhérer ou non. @score=calc(@score+1) @score_t2=calc(@score_t2+1)](BIL_NAT_EQ_Q21)

## BIL_NAT_EQ_Q21

### Question 21 sur 25

**Peut-on brûler publiquement un drapeau français ?**

1) [Oui.](BIL_NAT_EQ_Q22)
1) [Oui, si c'est dans le cadre d'une manifestation.](BIL_NAT_EQ_Q22)
1) [Oui, au nom de la liberté d'expression.](BIL_NAT_EQ_Q22)
1) [Non, cet acte peut être sanctionné par la loi. @score=calc(@score+1) @score_t1=calc(@score_t1+1)](BIL_NAT_EQ_Q22)

## BIL_NAT_EQ_Q22

### Question 22 sur 25

**Que signifie le mot « fraternité » dans la devise française ?**

1) [Être tous de la même famille.](BIL_NAT_EQ_Q23)
1) [Avoir la même religion.](BIL_NAT_EQ_Q23)
1) [Penser tous la même chose.](BIL_NAT_EQ_Q23)
1) [La solidarité, l'entraide et le respect entre toutes les personnes. @score=calc(@score+1) @score_t1=calc(@score_t1+1)](BIL_NAT_EQ_Q23)

## BIL_NAT_EQ_Q23

### Question 23 sur 25

**Qui peut être désigné juré d'assises ?**

1) [Les policiers.](BIL_NAT_EQ_Q24)
1) [Les magistrats uniquement.](BIL_NAT_EQ_Q24)
1) [Les avocats uniquement.](BIL_NAT_EQ_Q24)
1) [Un citoyen inscrit sur les listes électorales, tiré au sort. @score=calc(@score+1) @score_t3=calc(@score_t3+1)](BIL_NAT_EQ_Q24)

## BIL_NAT_EQ_Q24

### Question 24 sur 25

**Qu'est-ce que la laïcité ?**

1) [L'interdiction des religions.](BIL_NAT_EQ_Q25)
1) [L'obligation de ne pas croire.](BIL_NAT_EQ_Q25)
1) [Une religion officielle.](BIL_NAT_EQ_Q25)
1) [La séparation des Églises et de l'État, garantissant la liberté de conscience et l'égalité de tous. @score=calc(@score+1) @score_t1=calc(@score_t1+1)](BIL_NAT_EQ_Q25)

## BIL_NAT_EQ_Q25

### Question 25 sur 25

**Pour combien de temps le Président de la République est-il élu ?**

1) [4 ans.](BIL_NAT_EQ_RESULT)
1) [6 ans.](BIL_NAT_EQ_RESULT)
1) [7 ans.](BIL_NAT_EQ_RESULT)
1) [5 ans. @score=calc(@score+1) @score_t2=calc(@score_t2+1)](BIL_NAT_EQ_RESULT)

## BIL_NAT_EQ_RESULT

`@pourcentage = calc(@score*4)`
### 🎉 Votre bilan est terminé

Vous avez obtenu **`@score` / 25**, soit **`@pourcentage` %**.

`if @score <= 9`
### 🌱 Profil 1 — Bases à construire
Commencez par les notions fondamentales et révisez régulièrement par courtes séances.
`endif`
`if @score >= 10 && @score <= 15`
### 🧱 Profil 2 — Connaissances en construction
Consolidez les thèmes les moins maîtrisés avant de réaliser un examen blanc.
`endif`
`if @score >= 16 && @score <= 20`
### 🚀 Profil 3 — Niveau encourageant
Poursuivez avec des entraînements ciblés et des mises en situation.
`endif`
`if @score >= 21`
### ⭐ Profil 4 — Très bonne préparation
Votre niveau est solide. Travaillez maintenant les pièges et les examens blancs.
`endif`

1. [Voir mes scores par thématique](BIL_NAT_EQ_THEMES)

## BIL_NAT_EQ_THEMES

### 📊 Résultats par thématique

- **Principes et valeurs de la République** : `@score_t1` / 9
- **Système institutionnel et politique français** : `@score_t2` / 8
- **Droits et devoirs** : `@score_t3` / 8

:::warning Banque Naturalisation
La banque fournie couvre actuellement les thématiques T1 à T3. Les thématiques T4 et T5 ne sont donc pas évaluées dans cette version.
:::

1. [Voir mes recommandations](BIL_NAT_EQ_RECO)

## BIL_NAT_EQ_RECO

### 🧭 Mes priorités de révision

`if @score_t1 <= 4`
- 📚 **Priorité : Principes et valeurs de la République**
`endif`
`if @score_t2 <= 3`
- 📚 **Priorité : Système institutionnel et politique français**
`endif`
`if @score_t3 <= 3`
- 📚 **Priorité : Droits et devoirs**
`endif`

Commencez par les priorités affichées, puis entraînez-vous à nouveau sur ces thèmes.

1. [📚 Commencer mes révisions](SCR_REV_MENU)
2. [📝 M'entraîner](SCR_ENT_MENU)
3. [🔄 Refaire le bilan](SCR_BIL_EXAMEN)
4. [🏠 Retour au menu principal](MENU_PRINCIPAL)

## BIL_NAT_INT_Q01

### Question 1 sur 25

**Selon le principe de laïcité, que signifie la neutralité de l'État ?**

1) [L'État interdit les religions.](BIL_NAT_INT_Q02)
1) [L'État choisit une religion officielle.](BIL_NAT_INT_Q02)
1) [L'État finance toutes les religions.](BIL_NAT_INT_Q02)
1) [L'État ne favorise ni ne défavorise aucune religion. @score=calc(@score+1) @score_t1=calc(@score_t1+1)](BIL_NAT_INT_Q02)

## BIL_NAT_INT_Q02

### Question 2 sur 25

**À partir de quel âge devient-on électeur en France ?**

1) [16 ans.](BIL_NAT_INT_Q03)
1) [17 ans.](BIL_NAT_INT_Q03)
1) [21 ans.](BIL_NAT_INT_Q03)
1) [18 ans. @score=calc(@score+1) @score_t2=calc(@score_t2+1)](BIL_NAT_INT_Q03)

## BIL_NAT_INT_Q03

### Question 3 sur 25

**Qui gère les écoles maternelles et élémentaires publiques ?**

1) [Le département.](BIL_NAT_INT_Q04)
1) [La région.](BIL_NAT_INT_Q04)
1) [Le Sénat.](BIL_NAT_INT_Q04)
1) [La commune. @score=calc(@score+1) @score_t2=calc(@score_t2+1)](BIL_NAT_INT_Q04)

## BIL_NAT_INT_Q04

### Question 4 sur 25

**Qu'est-ce que la laïcité ?**

1) [L'interdiction des religions.](BIL_NAT_INT_Q05)
1) [L'obligation de ne pas croire.](BIL_NAT_INT_Q05)
1) [Une religion officielle.](BIL_NAT_INT_Q05)
1) [La séparation des Églises et de l'État, garantissant la liberté de conscience et l'égalité de tous. @score=calc(@score+1) @score_t1=calc(@score_t1+1)](BIL_NAT_INT_Q05)

## BIL_NAT_INT_Q05

### Question 5 sur 25

**En quoi consiste le devoir de solidarité du citoyen ?**

1) [Aider uniquement sa famille.](BIL_NAT_INT_Q06)
1) [Donner obligatoirement de l'argent.](BIL_NAT_INT_Q06)
1) [Être bénévole dans une association uniquement.](BIL_NAT_INT_Q06)
1) [Aider les personnes en difficulté et contribuer à la solidarité nationale. @score=calc(@score+1) @score_t3=calc(@score_t3+1)](BIL_NAT_INT_Q06)

## BIL_NAT_INT_Q06

### Question 6 sur 25

**Quel traité a créé officiellement l'Union européenne ?**

1) [Le traité de Versailles.](BIL_NAT_INT_Q07)
1) [Le traité de Rome.](BIL_NAT_INT_Q07)
1) [Le traité de Lisbonne.](BIL_NAT_INT_Q07)
1) [Le traité de Maastricht. @score=calc(@score+1) @score_t2=calc(@score_t2+1)](BIL_NAT_INT_Q07)

## BIL_NAT_INT_Q07

### Question 7 sur 25

**Quelle institution française doit rester neutre en matière de religion ?**

1) [Les citoyens.](BIL_NAT_INT_Q08)
1) [Les associations.](BIL_NAT_INT_Q08)
1) [Les entreprises privées.](BIL_NAT_INT_Q08)
1) [L'État. @score=calc(@score+1) @score_t1=calc(@score_t1+1)](BIL_NAT_INT_Q08)

## BIL_NAT_INT_Q08

### Question 8 sur 25

**Parmi ces responsables, lequel est élu (et non nommé) ?**

1) [Le préfet.](BIL_NAT_INT_Q09)
1) [Le procureur.](BIL_NAT_INT_Q09)
1) [Le Premier ministre.](BIL_NAT_INT_Q09)
1) [Le maire. @score=calc(@score+1) @score_t2=calc(@score_t2+1)](BIL_NAT_INT_Q09)

## BIL_NAT_INT_Q09

### Question 9 sur 25

**Quel est l'un des premiers devoirs de tout citoyen ?**

1) [Voter à toutes les élections.](BIL_NAT_INT_Q10)
1) [Être bénévole.](BIL_NAT_INT_Q10)
1) [Appartenir à une association.](BIL_NAT_INT_Q10)
1) [Respecter les lois. @score=calc(@score+1) @score_t3=calc(@score_t3+1)](BIL_NAT_INT_Q10)

## BIL_NAT_INT_Q10

### Question 10 sur 25

**Selon la Constitution, la France est une République...**

1) [Fédérale, religieuse, démocratique et sociale.](BIL_NAT_INT_Q11)
1) [Indivisible, catholique, démocratique et sociale.](BIL_NAT_INT_Q11)
1) [Indivisible, laïque, démocratique et sociale. @score=calc(@score+1) @score_t1=calc(@score_t1+1)](BIL_NAT_INT_Q11)
1) [Indivisible, laïque, monarchique et sociale.](BIL_NAT_INT_Q11)

## BIL_NAT_INT_Q11

### Question 11 sur 25

**Dans le cadre d'un entretien d'embauche, que peut-on demander au candidat ?**

1) [Sa religion.](BIL_NAT_INT_Q12)
1) [Son origine.](BIL_NAT_INT_Q12)
1) [Uniquement des questions en lien avec l'emploi proposé et les compétences du candidat. @score=calc(@score+1) @score_t1=calc(@score_t1+1)](BIL_NAT_INT_Q12)
1) [Ses opinions politiques.](BIL_NAT_INT_Q12)

## BIL_NAT_INT_Q12

### Question 12 sur 25

**En France, il est possible pour l'État de financer :**

1) [Les aumôneries dans certains services publics (hôpitaux, prisons, armées). @score=calc(@score+1) @score_t1=calc(@score_t1+1)](BIL_NAT_INT_Q13)
1) [N'importe quel lieu de culte, sans exception.](BIL_NAT_INT_Q13)
1) [Uniquement les églises catholiques.](BIL_NAT_INT_Q13)
1) [Aucun financement religieux, sans exception.](BIL_NAT_INT_Q13)

## BIL_NAT_INT_Q13

### Question 13 sur 25

**Quels sont les trois pouvoirs de la République française ?**

1) [Président, maire, préfet.](BIL_NAT_INT_Q14)
1) [Gouvernement, Sénat, police.](BIL_NAT_INT_Q14)
1) [Exécutif et législatif uniquement.](BIL_NAT_INT_Q14)
1) [Le pouvoir exécutif, le pouvoir législatif et le pouvoir judiciaire. @score=calc(@score+1) @score_t2=calc(@score_t2+1)](BIL_NAT_INT_Q14)

## BIL_NAT_INT_Q14

### Question 14 sur 25

**Qu'est-ce que les droits fondamentaux ?**

1) [Les règles du Code de la route.](BIL_NAT_INT_Q15)
1) [Les droits réservés aux élus.](BIL_NAT_INT_Q15)
1) [Les droits des entreprises.](BIL_NAT_INT_Q15)
1) [Les droits essentiels garantis à toute personne. @score=calc(@score+1) @score_t3=calc(@score_t3+1)](BIL_NAT_INT_Q15)

## BIL_NAT_INT_Q15

### Question 15 sur 25

**Citez un symbole qui représente officiellement la République française.**

1) [La tour Eiffel.](BIL_NAT_INT_Q16)
1) [Le béret.](BIL_NAT_INT_Q16)
1) [Marianne. @score=calc(@score+1) @score_t1=calc(@score_t1+1)](BIL_NAT_INT_Q16)
1) [Le coq.](BIL_NAT_INT_Q16)

## BIL_NAT_INT_Q16

### Question 16 sur 25

**Peut-on brûler publiquement un drapeau français ?**

1) [Oui.](BIL_NAT_INT_Q17)
1) [Oui, si c'est dans le cadre d'une manifestation.](BIL_NAT_INT_Q17)
1) [Oui, au nom de la liberté d'expression.](BIL_NAT_INT_Q17)
1) [Non, cet acte peut être sanctionné par la loi. @score=calc(@score+1) @score_t1=calc(@score_t1+1)](BIL_NAT_INT_Q17)

## BIL_NAT_INT_Q17

### Question 17 sur 25

**Qui peut être désigné juré d'assises ?**

1) [Les policiers.](BIL_NAT_INT_Q18)
1) [Les magistrats uniquement.](BIL_NAT_INT_Q18)
1) [Les avocats uniquement.](BIL_NAT_INT_Q18)
1) [Un citoyen inscrit sur les listes électorales, tiré au sort. @score=calc(@score+1) @score_t3=calc(@score_t3+1)](BIL_NAT_INT_Q18)

## BIL_NAT_INT_Q18

### Question 18 sur 25

**Qui dirige l'action du Gouvernement au quotidien ?**

1) [Le Président de la République.](BIL_NAT_INT_Q19)
1) [Le Président de l'Assemblée nationale.](BIL_NAT_INT_Q19)
1) [Le préfet.](BIL_NAT_INT_Q19)
1) [Le Premier ministre. @score=calc(@score+1) @score_t2=calc(@score_t2+1)](BIL_NAT_INT_Q19)

## BIL_NAT_INT_Q19

### Question 19 sur 25

**Où est-il autorisé de fumer, alors que c'est interdit dans de nombreux lieux publics fermés ?**

1) [Dans un restaurant.](BIL_NAT_INT_Q20)
1) [Dans un train.](BIL_NAT_INT_Q20)
1) [Dans un bureau partagé.](BIL_NAT_INT_Q20)
1) [Chez soi. @score=calc(@score+1) @score_t3=calc(@score_t3+1)](BIL_NAT_INT_Q20)

## BIL_NAT_INT_Q20

### Question 20 sur 25

**À quel âge est fixée la majorité civile en France ?**

1) [16 ans.](BIL_NAT_INT_Q21)
1) [17 ans.](BIL_NAT_INT_Q21)
1) [18 ans. @score=calc(@score+1) @score_t3=calc(@score_t3+1)](BIL_NAT_INT_Q21)
1) [21 ans.](BIL_NAT_INT_Q21)

## BIL_NAT_INT_Q21

### Question 21 sur 25

**Lequel de ces actes porte gravement atteinte à la dignité humaine ?**

1) [Une critique.](BIL_NAT_INT_Q22)
1) [Une amende.](BIL_NAT_INT_Q22)
1) [Une contravention.](BIL_NAT_INT_Q22)
1) [La torture ou l'esclavage. @score=calc(@score+1) @score_t3=calc(@score_t3+1)](BIL_NAT_INT_Q22)

## BIL_NAT_INT_Q22

### Question 22 sur 25

**Qui juge et sanctionne les auteurs d'infractions ?**

1) [La police.](BIL_NAT_INT_Q23)
1) [Le maire.](BIL_NAT_INT_Q23)
1) [Le Président de la République.](BIL_NAT_INT_Q23)
1) [La justice. @score=calc(@score+1) @score_t2=calc(@score_t2+1)](BIL_NAT_INT_Q23)

## BIL_NAT_INT_Q23

### Question 23 sur 25

**Pour combien de temps le Président de la République est-il élu ?**

1) [4 ans.](BIL_NAT_INT_Q24)
1) [6 ans.](BIL_NAT_INT_Q24)
1) [7 ans.](BIL_NAT_INT_Q24)
1) [5 ans. @score=calc(@score+1) @score_t2=calc(@score_t2+1)](BIL_NAT_INT_Q24)

## BIL_NAT_INT_Q24

### Question 24 sur 25

**Que garantit la liberté d'expression ?**

1) [Dire n'importe quoi.](BIL_NAT_INT_Q25)
1) [Insulter librement.](BIL_NAT_INT_Q25)
1) [Diffuser de fausses informations sans limite.](BIL_NAT_INT_Q25)
1) [Le droit d'exprimer librement ses opinions dans le respect de la loi et des droits d'autrui. @score=calc(@score+1) @score_t3=calc(@score_t3+1)](BIL_NAT_INT_Q25)

## BIL_NAT_INT_Q25

### Question 25 sur 25

**Déclarer ses revenus aux services fiscaux est :**

1) [Facultatif.](BIL_NAT_INT_RESULT)
1) [Réservé aux salariés.](BIL_NAT_INT_RESULT)
1) [Une obligation. @score=calc(@score+1) @score_t1=calc(@score_t1+1)](BIL_NAT_INT_RESULT)
1) [Réservé aux propriétaires.](BIL_NAT_INT_RESULT)

## BIL_NAT_INT_RESULT

`@pourcentage = calc(@score*4)`
### 🎉 Votre bilan est terminé

Vous avez obtenu **`@score` / 25**, soit **`@pourcentage` %**.

`if @score <= 9`
### 🌱 Profil 1 — Bases à construire
Commencez par les notions fondamentales et révisez régulièrement par courtes séances.
`endif`
`if @score >= 10 && @score <= 15`
### 🧱 Profil 2 — Connaissances en construction
Consolidez les thèmes les moins maîtrisés avant de réaliser un examen blanc.
`endif`
`if @score >= 16 && @score <= 20`
### 🚀 Profil 3 — Niveau encourageant
Poursuivez avec des entraînements ciblés et des mises en situation.
`endif`
`if @score >= 21`
### ⭐ Profil 4 — Très bonne préparation
Votre niveau est solide. Travaillez maintenant les pièges et les examens blancs.
`endif`

1. [Voir mes scores par thématique](BIL_NAT_INT_THEMES)

## BIL_NAT_INT_THEMES

### 📊 Résultats par thématique

- **Principes et valeurs de la République** : `@score_t1` / 9
- **Système institutionnel et politique français** : `@score_t2` / 8
- **Droits et devoirs** : `@score_t3` / 8

:::warning Banque Naturalisation
La banque fournie couvre actuellement les thématiques T1 à T3. Les thématiques T4 et T5 ne sont donc pas évaluées dans cette version.
:::

1. [Voir mes recommandations](BIL_NAT_INT_RECO)

## BIL_NAT_INT_RECO

### 🧭 Mes priorités de révision

`if @score_t1 <= 4`
- 📚 **Priorité : Principes et valeurs de la République**
`endif`
`if @score_t2 <= 3`
- 📚 **Priorité : Système institutionnel et politique français**
`endif`
`if @score_t3 <= 3`
- 📚 **Priorité : Droits et devoirs**
`endif`

Commencez par les priorités affichées, puis entraînez-vous à nouveau sur ces thèmes.

1. [📚 Commencer mes révisions](SCR_REV_MENU)
2. [📝 M'entraîner](SCR_ENT_MENU)
3. [🔄 Refaire le bilan](SCR_BIL_EXAMEN)
4. [🏠 Retour au menu principal](MENU_PRINCIPAL)

## SCR_BIL_PROG_INFO

### 📈 Bilan de progression

Le bilan de progression sera finalisé après validation du premier bilan.

1. [Faire un premier bilan](SCR_BIL_EXAMEN)
2. [Retour au bilan](SCR_BIL_MENU)
3. [🏠 Retour à l'accueil]()

## MENU_PRINCIPAL

### Menu principal de test

1. [Recommencer le bilan](SCR_BIL_MENU)
2. [Retour au début]()

## SCR_REV_MENU

### Module Révisions

Ce bouton fonctionnera pleinement après intégration dans le chatbot principal.

1. [Retour au bilan](SCR_BIL_MENU)

## SCR_ENT_MENU

### Module Entraînement

Ce bouton fonctionnera pleinement après intégration dans le chatbot principal.

1. [Retour au bilan](SCR_BIL_MENU)
