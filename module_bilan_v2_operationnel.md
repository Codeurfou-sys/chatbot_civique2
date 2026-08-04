<!-- MODULE BILAN V2 — À insérer à la place de l'ancien module Bilan -->
<!-- Généré depuis les trois banques officielles fournies par l'utilisateur -->

## SCR_BIL_MENU

### 🧭 Mon bilan

Le bilan vous aide à identifier vos acquis et les notions à renforcer.

1. [🌱 Faire mon premier bilan](SCR_BIL_INIT_001)
2. [📈 Faire mon bilan de progression](SCR_BIL_PROG_001)
3. [🏠 Retour au menu principal](MENU_PRINCIPAL)

## SCR_BIL_INIT_001

### 🌱 Mon premier bilan

Ce diagnostic comprend **25 questions**. Il permet d'obtenir un score global et des priorités de révision adaptées.

Les questions sont choisies selon l'examen préparé et votre scénario de départ.

1. [Commencer](SCR_BIL_INIT_EXAMEN)
2. [Retour au bilan](SCR_BIL_MENU)

## SCR_BIL_INIT_EXAMEN

### Quel examen préparez-vous ?

Cette réponse ne compte pas dans votre score. Elle permet de sélectionner la bonne banque de questions.

1. [Carte de séjour pluriannuelle](SCR_BIL_SET_EXAM_CSP)
2. [Carte de résident](SCR_BIL_SET_EXAM_CR)
3. [Naturalisation](SCR_BIL_SET_EXAM_NAT)

## SCR_BIL_SET_EXAM_CSP

`@type_examen = "CSP"`
`@nom_examen = "Carte de séjour pluriannuelle"`
1. [Continuer](SCR_BIL_INIT_002)

## SCR_BIL_SET_EXAM_CR

`@type_examen = "CR"`
`@nom_examen = "Carte de résident"`
1. [Continuer](SCR_BIL_INIT_002)

## SCR_BIL_SET_EXAM_NAT

`@type_examen = "NAT"`
`@nom_examen = "Naturalisation"`
1. [Continuer](SCR_BIL_INIT_002)

## SCR_BIL_INIT_002

### Quelques questions avant de commencer

Vos réponses permettent de sélectionner un niveau de difficulté adapté. Elles ne comptent pas dans le résultat.

1. [Continuer](SCR_BIL_INIT_003)

## SCR_BIL_INIT_003

### Depuis quand révisez-vous ?

1. [Je commence aujourd’hui](SCR_BIL_SET_REV_0_1)
2. [Depuis quelques jours](SCR_BIL_SET_REV_1_2)
3. [Depuis quelques semaines](SCR_BIL_SET_REV_2_3)
4. [Depuis plus d’un mois](SCR_BIL_SET_REV_2_4)

## SCR_BIL_SET_REV_0_1

`@niveau_contexte = 0`
1. [Continuer](SCR_BIL_INIT_004)

## SCR_BIL_SET_REV_1_2

`@niveau_contexte = 1`
1. [Continuer](SCR_BIL_INIT_004)

## SCR_BIL_SET_REV_2_3

`@niveau_contexte = 2`
1. [Continuer](SCR_BIL_INIT_004)

## SCR_BIL_SET_REV_2_4

`@niveau_contexte = 2`
1. [Continuer](SCR_BIL_INIT_004)

## SCR_BIL_INIT_004

### Quand pensez-vous passer votre examen ?

1. [Dans une semaine ou moins](SCR_BIL_SET_DATE_2_1)
2. [Dans deux semaines](SCR_BIL_SET_DATE_1_2)
3. [Dans un mois](SCR_BIL_SET_DATE_0_3)
4. [Plus tard](SCR_BIL_SET_DATE_0_4)

## SCR_BIL_SET_DATE_2_1

`@niveau_contexte = calc(@niveau_contexte+2)`
1. [Continuer](SCR_BIL_INIT_005)

## SCR_BIL_SET_DATE_1_2

`@niveau_contexte = calc(@niveau_contexte+1)`
1. [Continuer](SCR_BIL_INIT_005)

## SCR_BIL_SET_DATE_0_3

`@niveau_contexte = calc(@niveau_contexte+0)`
1. [Continuer](SCR_BIL_INIT_005)

## SCR_BIL_SET_DATE_0_4

`@niveau_contexte = calc(@niveau_contexte+0)`
1. [Continuer](SCR_BIL_INIT_005)

## SCR_BIL_INIT_005

### Avez-vous déjà réalisé un bilan sur NovaFrate ?

1. [Non, c’est mon premier bilan](SCR_BIL_INIT_006)
2. [Oui, j’ai déjà un score](SCR_BIL_DEJA_FAIT)

## SCR_BIL_DEJA_FAIT

### Le bilan de progression est peut-être plus adapté

Il permet de comparer votre nouveau résultat à votre dernier score.

1. [Faire mon bilan de progression](SCR_BIL_PROG_001)
2. [Refaire malgré tout un premier bilan](SCR_BIL_INIT_006)
3. [Retour au bilan](SCR_BIL_MENU)

## SCR_BIL_INIT_006

### Votre scénario

`if @niveau_contexte <= 1`
Votre scénario est **Découverte** : priorité aux questions faciles et intermédiaires.
1. [Continuer](SCR_BIL_SET_SCEN_DEC)
`endif`

`if @niveau_contexte == 2`
Votre scénario est **Équilibré** : mélange progressif des difficultés.
1. [Continuer](SCR_BIL_SET_SCEN_EQ)
`endif`

`if @niveau_contexte >= 3`
Votre scénario est **Intensif** : davantage de questions intermédiaires et difficiles.
1. [Continuer](SCR_BIL_SET_SCEN_INT)
`endif`

## SCR_BIL_SET_SCEN_DEC

`@scenario = "DEC"`
`@score = 0`
`@score_t1 = 0`
`@score_t2 = 0`
`@score_t3 = 0`
`@score_t4 = 0`
`@score_t5 = 0`
1. [Lire les consignes](SCR_BIL_INIT_007)

## SCR_BIL_SET_SCEN_EQ

`@scenario = "EQ"`
`@score = 0`
`@score_t1 = 0`
`@score_t2 = 0`
`@score_t3 = 0`
`@score_t4 = 0`
`@score_t5 = 0`
1. [Lire les consignes](SCR_BIL_INIT_007)

## SCR_BIL_SET_SCEN_INT

`@scenario = "INT"`
`@score = 0`
`@score_t1 = 0`
`@score_t2 = 0`
`@score_t3 = 0`
`@score_t4 = 0`
`@score_t5 = 0`
1. [Lire les consignes](SCR_BIL_INIT_007)

## SCR_BIL_INIT_007

### Avant de commencer

- 25 questions ;
- une seule réponse par question ;
- aucune correction n'est affichée pendant le bilan ;
- le résultat détaillé apparaît à la fin.

Répondez sans consulter le cours afin d'obtenir un diagnostic utile.

`if @type_examen == "CSP" && @scenario == "DEC"`
1. [Je commence](BIL_CSP_DEC_Q01)
`endif`
`if @type_examen == "CSP" && @scenario == "EQ"`
1. [Je commence](BIL_CSP_EQ_Q01)
`endif`
`if @type_examen == "CSP" && @scenario == "INT"`
1. [Je commence](BIL_CSP_INT_Q01)
`endif`
`if @type_examen == "CR" && @scenario == "DEC"`
1. [Je commence](BIL_CR_DEC_Q01)
`endif`
`if @type_examen == "CR" && @scenario == "EQ"`
1. [Je commence](BIL_CR_EQ_Q01)
`endif`
`if @type_examen == "CR" && @scenario == "INT"`
1. [Je commence](BIL_CR_INT_Q01)
`endif`
`if @type_examen == "NAT" && @scenario == "DEC"`
1. [Je commence](BIL_NAT_DEC_Q01)
`endif`
`if @type_examen == "NAT" && @scenario == "EQ"`
1. [Je commence](BIL_NAT_EQ_Q01)
`endif`
`if @type_examen == "NAT" && @scenario == "INT"`
1. [Je commence](BIL_NAT_INT_Q01)
`endif`

## BIL_CR_DEC_Q01

### Question 1 sur 25

**Les parents d'élève ont le droit de :**

1. [Modifier les programmes scolaires.](BIL_CR_DEC_Q01_KO_A)
2. [Choisir les notes de leur enfant.](BIL_CR_DEC_Q01_KO_B)
3. [Décider seuls des sanctions disciplinaires.](BIL_CR_DEC_Q01_KO_C)
4. [Participer aux réunions organisées par l'école et échanger avec les enseignants.](BIL_CR_DEC_Q01_OK_D)

## BIL_CR_DEC_Q01_KO_A

Réponse enregistrée.

1. [Continuer](BIL_CR_DEC_Q02)

## BIL_CR_DEC_Q01_KO_B

Réponse enregistrée.

1. [Continuer](BIL_CR_DEC_Q02)

## BIL_CR_DEC_Q01_KO_C

Réponse enregistrée.

1. [Continuer](BIL_CR_DEC_Q02)

## BIL_CR_DEC_Q01_OK_D

`@score = calc(@score+1)`
`@score_t5 = calc(@score_t5+1)`
Réponse enregistrée.

1. [Continuer](BIL_CR_DEC_Q02)

## BIL_CR_DEC_Q02

### Question 2 sur 25

**Qui peut voter aux élections en France ?**

1. [Toutes les personnes qui vivent en France.](BIL_CR_DEC_Q02_KO_A)
2. [Toutes les personnes possédant un titre de séjour.](BIL_CR_DEC_Q02_KO_B)
3. [Les citoyens français inscrits sur les listes électorales.](BIL_CR_DEC_Q02_OK_C)
4. [Toutes les personnes âgées de plus de 18 ans.](BIL_CR_DEC_Q02_KO_D)

## BIL_CR_DEC_Q02_KO_A

Réponse enregistrée.

1. [Continuer](BIL_CR_DEC_Q03)

## BIL_CR_DEC_Q02_KO_B

Réponse enregistrée.

1. [Continuer](BIL_CR_DEC_Q03)

## BIL_CR_DEC_Q02_OK_C

`@score = calc(@score+1)`
`@score_t2 = calc(@score_t2+1)`
Réponse enregistrée.

1. [Continuer](BIL_CR_DEC_Q03)

## BIL_CR_DEC_Q02_KO_D

Réponse enregistrée.

1. [Continuer](BIL_CR_DEC_Q03)

## BIL_CR_DEC_Q03

### Question 3 sur 25

**Parmi les propositions suivantes, laquelle constitue une participation citoyenne ?**

1. [Obtenir une carte d'identité française.](BIL_CR_DEC_Q03_KO_A)
2. [S'inscrire à la Sécurité sociale.](BIL_CR_DEC_Q03_KO_B)
3. [Voter aux élections.](BIL_CR_DEC_Q03_OK_C)
4. [Travailler dans une entreprise.](BIL_CR_DEC_Q03_KO_D)

## BIL_CR_DEC_Q03_KO_A

Réponse enregistrée.

1. [Continuer](BIL_CR_DEC_Q04)

## BIL_CR_DEC_Q03_KO_B

Réponse enregistrée.

1. [Continuer](BIL_CR_DEC_Q04)

## BIL_CR_DEC_Q03_OK_C

`@score = calc(@score+1)`
`@score_t3 = calc(@score_t3+1)`
Réponse enregistrée.

1. [Continuer](BIL_CR_DEC_Q04)

## BIL_CR_DEC_Q03_KO_D

Réponse enregistrée.

1. [Continuer](BIL_CR_DEC_Q04)

## BIL_CR_DEC_Q04

### Question 4 sur 25

**Une personne a-t-elle le droit de ne pas croire en une religion ?**

1. [Oui.](BIL_CR_DEC_Q04_OK_A)
2. [Non.](BIL_CR_DEC_Q04_KO_B)
3. [Il faut choisir une religion.](BIL_CR_DEC_Q04_KO_C)
4. [Oui, dans tous les cas.](BIL_CR_DEC_Q04_KO_D)

## BIL_CR_DEC_Q04_OK_A

`@score = calc(@score+1)`
`@score_t1 = calc(@score_t1+1)`
Réponse enregistrée.

1. [Continuer](BIL_CR_DEC_Q05)

## BIL_CR_DEC_Q04_KO_B

Réponse enregistrée.

1. [Continuer](BIL_CR_DEC_Q05)

## BIL_CR_DEC_Q04_KO_C

Réponse enregistrée.

1. [Continuer](BIL_CR_DEC_Q05)

## BIL_CR_DEC_Q04_KO_D

Réponse enregistrée.

1. [Continuer](BIL_CR_DEC_Q05)

## BIL_CR_DEC_Q05

### Question 5 sur 25

**Que garantit la liberté de la presse ?**

1. [Publier n'importe quoi.](BIL_CR_DEC_Q05_KO_A)
2. [Le droit d'informer et d'être informé.](BIL_CR_DEC_Q05_OK_B)
3. [Diffamer librement.](BIL_CR_DEC_Q05_KO_C)
4. [Insulter les personnes.](BIL_CR_DEC_Q05_KO_D)

## BIL_CR_DEC_Q05_KO_A

Réponse enregistrée.

1. [Continuer](BIL_CR_DEC_Q06)

## BIL_CR_DEC_Q05_OK_B

`@score = calc(@score+1)`
`@score_t3 = calc(@score_t3+1)`
Réponse enregistrée.

1. [Continuer](BIL_CR_DEC_Q06)

## BIL_CR_DEC_Q05_KO_C

Réponse enregistrée.

1. [Continuer](BIL_CR_DEC_Q06)

## BIL_CR_DEC_Q05_KO_D

Réponse enregistrée.

1. [Continuer](BIL_CR_DEC_Q06)

## BIL_CR_DEC_Q06

### Question 6 sur 25

**Est-ce que le président de la République a tous les pouvoirs ?**

1. [Oui mais il doit consulter ses ministres avant toutes décisions.](BIL_CR_DEC_Q06_KO_A)
2. [Oui, il décide de tout.](BIL_CR_DEC_Q06_KO_B)
3. [Oui, il peut modifier les lois seul.](BIL_CR_DEC_Q06_KO_C)
4. [Non.](BIL_CR_DEC_Q06_OK_D)

## BIL_CR_DEC_Q06_KO_A

Réponse enregistrée.

1. [Continuer](BIL_CR_DEC_Q07)

## BIL_CR_DEC_Q06_KO_B

Réponse enregistrée.

1. [Continuer](BIL_CR_DEC_Q07)

## BIL_CR_DEC_Q06_KO_C

Réponse enregistrée.

1. [Continuer](BIL_CR_DEC_Q07)

## BIL_CR_DEC_Q06_OK_D

`@score = calc(@score+1)`
`@score_t2 = calc(@score_t2+1)`
Réponse enregistrée.

1. [Continuer](BIL_CR_DEC_Q07)

## BIL_CR_DEC_Q07

### Question 7 sur 25

**Le président de la République a commis un crime. Quelle proposition est correcte ?**

1. [Il est au-dessus des lois.](BIL_CR_DEC_Q07_KO_A)
2. [Il ne peut jamais être jugé.](BIL_CR_DEC_Q07_KO_B)
3. [Il peut être arrêté immédiatement par n'importe quel juge.](BIL_CR_DEC_Q07_KO_C)
4. [Il n'est pas au-dessus des lois, mais bénéficie d'une inviolabilité durant son mandat (sauf exceptions prévues par la Constitution et le droit international).](BIL_CR_DEC_Q07_OK_D)

## BIL_CR_DEC_Q07_KO_A

Réponse enregistrée.

1. [Continuer](BIL_CR_DEC_Q08)

## BIL_CR_DEC_Q07_KO_B

Réponse enregistrée.

1. [Continuer](BIL_CR_DEC_Q08)

## BIL_CR_DEC_Q07_KO_C

Réponse enregistrée.

1. [Continuer](BIL_CR_DEC_Q08)

## BIL_CR_DEC_Q07_OK_D

`@score = calc(@score+1)`
`@score_t2 = calc(@score_t2+1)`
Réponse enregistrée.

1. [Continuer](BIL_CR_DEC_Q08)

## BIL_CR_DEC_Q08

### Question 8 sur 25

**Que signifie le droit de manifester ?**

1. [Faire ce que l'on veut.](BIL_CR_DEC_Q08_KO_A)
2. [Détruire des biens.](BIL_CR_DEC_Q08_KO_B)
3. [Le droit d'exprimer collectivement une opinion dans le respect de la loi.](BIL_CR_DEC_Q08_OK_C)
4. [Être violent.](BIL_CR_DEC_Q08_KO_D)

## BIL_CR_DEC_Q08_KO_A

Réponse enregistrée.

1. [Continuer](BIL_CR_DEC_Q09)

## BIL_CR_DEC_Q08_KO_B

Réponse enregistrée.

1. [Continuer](BIL_CR_DEC_Q09)

## BIL_CR_DEC_Q08_OK_C

`@score = calc(@score+1)`
`@score_t3 = calc(@score_t3+1)`
Réponse enregistrée.

1. [Continuer](BIL_CR_DEC_Q09)

## BIL_CR_DEC_Q08_KO_D

Réponse enregistrée.

1. [Continuer](BIL_CR_DEC_Q09)

## BIL_CR_DEC_Q09

### Question 9 sur 25

**Que garantit la liberté d'expression ?**

1. [Le droit d'insulter les autres.](BIL_CR_DEC_Q09_KO_A)
2. [Le droit de diffamer.](BIL_CR_DEC_Q09_KO_B)
3. [Le droit d'exprimer librement ses opinions dans le respect de la loi.](BIL_CR_DEC_Q09_OK_C)
4. [Le droit d'inciter à la haine.](BIL_CR_DEC_Q09_KO_D)

## BIL_CR_DEC_Q09_KO_A

Réponse enregistrée.

1. [Continuer](BIL_CR_DEC_Q10)

## BIL_CR_DEC_Q09_KO_B

Réponse enregistrée.

1. [Continuer](BIL_CR_DEC_Q10)

## BIL_CR_DEC_Q09_OK_C

`@score = calc(@score+1)`
`@score_t1 = calc(@score_t1+1)`
Réponse enregistrée.

1. [Continuer](BIL_CR_DEC_Q10)

## BIL_CR_DEC_Q09_KO_D

Réponse enregistrée.

1. [Continuer](BIL_CR_DEC_Q10)

## BIL_CR_DEC_Q10

### Question 10 sur 25

**À l'école, il est interdit aux parents de :**

1. [Rencontrer les enseignants.](BIL_CR_DEC_Q10_KO_A)
2. [Contester les enseignements ou les activités obligatoires pour des motifs religieux.](BIL_CR_DEC_Q10_OK_B)
3. [Participer aux réunions de parents.](BIL_CR_DEC_Q10_KO_C)
4. [Élire leurs représentants.](BIL_CR_DEC_Q10_KO_D)

## BIL_CR_DEC_Q10_KO_A

Réponse enregistrée.

1. [Continuer](BIL_CR_DEC_Q11)

## BIL_CR_DEC_Q10_OK_B

`@score = calc(@score+1)`
`@score_t5 = calc(@score_t5+1)`
Réponse enregistrée.

1. [Continuer](BIL_CR_DEC_Q11)

## BIL_CR_DEC_Q10_KO_C

Réponse enregistrée.

1. [Continuer](BIL_CR_DEC_Q11)

## BIL_CR_DEC_Q10_KO_D

Réponse enregistrée.

1. [Continuer](BIL_CR_DEC_Q11)

## BIL_CR_DEC_Q11

### Question 11 sur 25

**Le recours à l'avortement est-il autorisé ?**

1. [Non.](BIL_CR_DEC_Q11_KO_A)
2. [Seulement avec l'accord du mari.](BIL_CR_DEC_Q11_KO_B)
3. [Seulement avec l'accord du médecin.](BIL_CR_DEC_Q11_KO_C)
4. [Oui.](BIL_CR_DEC_Q11_OK_D)

## BIL_CR_DEC_Q11_KO_A

Réponse enregistrée.

1. [Continuer](BIL_CR_DEC_Q12)

## BIL_CR_DEC_Q11_KO_B

Réponse enregistrée.

1. [Continuer](BIL_CR_DEC_Q12)

## BIL_CR_DEC_Q11_KO_C

Réponse enregistrée.

1. [Continuer](BIL_CR_DEC_Q12)

## BIL_CR_DEC_Q11_OK_D

`@score = calc(@score+1)`
`@score_t3 = calc(@score_t3+1)`
Réponse enregistrée.

1. [Continuer](BIL_CR_DEC_Q12)

## BIL_CR_DEC_Q12

### Question 12 sur 25

**Quel monument parisien est l'un des symboles de la France ?**

1. [Le Colisée.](BIL_CR_DEC_Q12_KO_A)
2. [Big Ben.](BIL_CR_DEC_Q12_KO_B)
3. [La tour Eiffel.](BIL_CR_DEC_Q12_OK_C)
4. [La statue de la Liberté.](BIL_CR_DEC_Q12_KO_D)

## BIL_CR_DEC_Q12_KO_A

Réponse enregistrée.

1. [Continuer](BIL_CR_DEC_Q13)

## BIL_CR_DEC_Q12_KO_B

Réponse enregistrée.

1. [Continuer](BIL_CR_DEC_Q13)

## BIL_CR_DEC_Q12_OK_C

`@score = calc(@score+1)`
`@score_t4 = calc(@score_t4+1)`
Réponse enregistrée.

1. [Continuer](BIL_CR_DEC_Q13)

## BIL_CR_DEC_Q12_KO_D

Réponse enregistrée.

1. [Continuer](BIL_CR_DEC_Q13)

## BIL_CR_DEC_Q13

### Question 13 sur 25

**Que signifie la dignité humaine ?**

1. [Certaines personnes ont moins de droits.](BIL_CR_DEC_Q13_KO_A)
2. [Que chaque personne doit être respectée et traitée avec respect.](BIL_CR_DEC_Q13_OK_B)
3. [La dignité dépend de la nationalité.](BIL_CR_DEC_Q13_KO_C)
4. [La dignité dépend de la religion.](BIL_CR_DEC_Q13_KO_D)

## BIL_CR_DEC_Q13_KO_A

Réponse enregistrée.

1. [Continuer](BIL_CR_DEC_Q14)

## BIL_CR_DEC_Q13_OK_B

`@score = calc(@score+1)`
`@score_t3 = calc(@score_t3+1)`
Réponse enregistrée.

1. [Continuer](BIL_CR_DEC_Q14)

## BIL_CR_DEC_Q13_KO_C

Réponse enregistrée.

1. [Continuer](BIL_CR_DEC_Q14)

## BIL_CR_DEC_Q13_KO_D

Réponse enregistrée.

1. [Continuer](BIL_CR_DEC_Q14)

## BIL_CR_DEC_Q14

### Question 14 sur 25

**Pour combien de temps sont élus les sénateurs ?**

1. [Cinq ans.](BIL_CR_DEC_Q14_KO_A)
2. [Sept ans.](BIL_CR_DEC_Q14_KO_B)
3. [Neuf ans.](BIL_CR_DEC_Q14_KO_C)
4. [Six ans.](BIL_CR_DEC_Q14_OK_D)

## BIL_CR_DEC_Q14_KO_A

Réponse enregistrée.

1. [Continuer](BIL_CR_DEC_Q15)

## BIL_CR_DEC_Q14_KO_B

Réponse enregistrée.

1. [Continuer](BIL_CR_DEC_Q15)

## BIL_CR_DEC_Q14_KO_C

Réponse enregistrée.

1. [Continuer](BIL_CR_DEC_Q15)

## BIL_CR_DEC_Q14_OK_D

`@score = calc(@score+1)`
`@score_t2 = calc(@score_t2+1)`
Réponse enregistrée.

1. [Continuer](BIL_CR_DEC_Q15)

## BIL_CR_DEC_Q15

### Question 15 sur 25

**Qui était un célèbre musicien français ?**

1. [Mozart.](BIL_CR_DEC_Q15_KO_A)
2. [Beethoven.](BIL_CR_DEC_Q15_KO_B)
3. [Chopin.](BIL_CR_DEC_Q15_KO_C)
4. [Hector Berlioz.](BIL_CR_DEC_Q15_OK_D)

## BIL_CR_DEC_Q15_KO_A

Réponse enregistrée.

1. [Continuer](BIL_CR_DEC_Q16)

## BIL_CR_DEC_Q15_KO_B

Réponse enregistrée.

1. [Continuer](BIL_CR_DEC_Q16)

## BIL_CR_DEC_Q15_KO_C

Réponse enregistrée.

1. [Continuer](BIL_CR_DEC_Q16)

## BIL_CR_DEC_Q15_OK_D

`@score = calc(@score+1)`
`@score_t4 = calc(@score_t4+1)`
Réponse enregistrée.

1. [Continuer](BIL_CR_DEC_Q16)

## BIL_CR_DEC_Q16

### Question 16 sur 25

**Quelle est la place de la langue française dans la République ?**

1. [Chaque région choisit sa langue officielle.](BIL_CR_DEC_Q16_KO_A)
2. [Le français est la langue de la République.](BIL_CR_DEC_Q16_OK_B)
3. [Il existe plusieurs langues officielles.](BIL_CR_DEC_Q16_KO_C)
4. [L'anglais est la langue officielle.](BIL_CR_DEC_Q16_KO_D)

## BIL_CR_DEC_Q16_KO_A

Réponse enregistrée.

1. [Continuer](BIL_CR_DEC_Q17)

## BIL_CR_DEC_Q16_OK_B

`@score = calc(@score+1)`
`@score_t1 = calc(@score_t1+1)`
Réponse enregistrée.

1. [Continuer](BIL_CR_DEC_Q17)

## BIL_CR_DEC_Q16_KO_C

Réponse enregistrée.

1. [Continuer](BIL_CR_DEC_Q17)

## BIL_CR_DEC_Q16_KO_D

Réponse enregistrée.

1. [Continuer](BIL_CR_DEC_Q17)

## BIL_CR_DEC_Q17

### Question 17 sur 25

**Quel est l'âge de la majorité ?**

1. [18 ans.](BIL_CR_DEC_Q17_OK_A)
2. [16 ans.](BIL_CR_DEC_Q17_KO_B)
3. [17 ans.](BIL_CR_DEC_Q17_KO_C)
4. [21 ans.](BIL_CR_DEC_Q17_KO_D)

## BIL_CR_DEC_Q17_OK_A

`@score = calc(@score+1)`
`@score_t5 = calc(@score_t5+1)`
Réponse enregistrée.

1. [Continuer](BIL_CR_DEC_Q18)

## BIL_CR_DEC_Q17_KO_B

Réponse enregistrée.

1. [Continuer](BIL_CR_DEC_Q18)

## BIL_CR_DEC_Q17_KO_C

Réponse enregistrée.

1. [Continuer](BIL_CR_DEC_Q18)

## BIL_CR_DEC_Q17_KO_D

Réponse enregistrée.

1. [Continuer](BIL_CR_DEC_Q18)

## BIL_CR_DEC_Q18

### Question 18 sur 25

**Quel est le régime politique de la France aujourd'hui ?**

1. [Une monarchie.](BIL_CR_DEC_Q18_KO_A)
2. [Une République.](BIL_CR_DEC_Q18_OK_B)
3. [Un empire.](BIL_CR_DEC_Q18_KO_C)
4. [Une fédération.](BIL_CR_DEC_Q18_KO_D)

## BIL_CR_DEC_Q18_KO_A

Réponse enregistrée.

1. [Continuer](BIL_CR_DEC_Q19)

## BIL_CR_DEC_Q18_OK_B

`@score = calc(@score+1)`
`@score_t2 = calc(@score_t2+1)`
Réponse enregistrée.

1. [Continuer](BIL_CR_DEC_Q19)

## BIL_CR_DEC_Q18_KO_C

Réponse enregistrée.

1. [Continuer](BIL_CR_DEC_Q19)

## BIL_CR_DEC_Q18_KO_D

Réponse enregistrée.

1. [Continuer](BIL_CR_DEC_Q19)

## BIL_CR_DEC_Q19

### Question 19 sur 25

**La répudiation de sa femme est :**

1. [Autorisée avec l'accord d'un juge.](BIL_CR_DEC_Q19_KO_A)
2. [Interdite par la loi française.](BIL_CR_DEC_Q19_OK_B)
3. [Légale si elle est prévue dans le contrat de mariage.](BIL_CR_DEC_Q19_KO_C)
4. [Autorisée avec l'accord de la famille.](BIL_CR_DEC_Q19_KO_D)

## BIL_CR_DEC_Q19_KO_A

Réponse enregistrée.

1. [Continuer](BIL_CR_DEC_Q20)

## BIL_CR_DEC_Q19_OK_B

`@score = calc(@score+1)`
`@score_t1 = calc(@score_t1+1)`
Réponse enregistrée.

1. [Continuer](BIL_CR_DEC_Q20)

## BIL_CR_DEC_Q19_KO_C

Réponse enregistrée.

1. [Continuer](BIL_CR_DEC_Q20)

## BIL_CR_DEC_Q19_KO_D

Réponse enregistrée.

1. [Continuer](BIL_CR_DEC_Q20)

## BIL_CR_DEC_Q20

### Question 20 sur 25

**Quel pays a été colonisé par la France ?**

1. [L'Algérie.](BIL_CR_DEC_Q20_OK_A)
2. [Le Japon.](BIL_CR_DEC_Q20_KO_B)
3. [Le Canada.](BIL_CR_DEC_Q20_KO_C)
4. [Le Portugal.](BIL_CR_DEC_Q20_KO_D)

## BIL_CR_DEC_Q20_OK_A

`@score = calc(@score+1)`
`@score_t4 = calc(@score_t4+1)`
Réponse enregistrée.

1. [Continuer](BIL_CR_DEC_Q21)

## BIL_CR_DEC_Q20_KO_B

Réponse enregistrée.

1. [Continuer](BIL_CR_DEC_Q21)

## BIL_CR_DEC_Q20_KO_C

Réponse enregistrée.

1. [Continuer](BIL_CR_DEC_Q21)

## BIL_CR_DEC_Q20_KO_D

Réponse enregistrée.

1. [Continuer](BIL_CR_DEC_Q21)

## BIL_CR_DEC_Q21

### Question 21 sur 25

**Comment s'appelle le diplôme passé par les élèves à la fin du collège ?**

1. [Le baccalauréat.](BIL_CR_DEC_Q21_KO_A)
2. [Le CAP.](BIL_CR_DEC_Q21_KO_B)
3. [La licence.](BIL_CR_DEC_Q21_KO_C)
4. [Le diplôme national du brevet.](BIL_CR_DEC_Q21_OK_D)

## BIL_CR_DEC_Q21_KO_A

Réponse enregistrée.

1. [Continuer](BIL_CR_DEC_Q22)

## BIL_CR_DEC_Q21_KO_B

Réponse enregistrée.

1. [Continuer](BIL_CR_DEC_Q22)

## BIL_CR_DEC_Q21_KO_C

Réponse enregistrée.

1. [Continuer](BIL_CR_DEC_Q22)

## BIL_CR_DEC_Q21_OK_D

`@score = calc(@score+1)`
`@score_t5 = calc(@score_t5+1)`
Réponse enregistrée.

1. [Continuer](BIL_CR_DEC_Q22)

## BIL_CR_DEC_Q22

### Question 22 sur 25

**Quel droit est garanti par la laïcité ?**

1. [Le droit d'imposer sa religion.](BIL_CR_DEC_Q22_KO_A)
2. [La liberté de conscience.](BIL_CR_DEC_Q22_OK_B)
3. [Le droit de ne pas respecter la loi.](BIL_CR_DEC_Q22_KO_C)
4. [Voter aux élections.](BIL_CR_DEC_Q22_KO_D)

## BIL_CR_DEC_Q22_KO_A

Réponse enregistrée.

1. [Continuer](BIL_CR_DEC_Q23)

## BIL_CR_DEC_Q22_OK_B

`@score = calc(@score+1)`
`@score_t1 = calc(@score_t1+1)`
Réponse enregistrée.

1. [Continuer](BIL_CR_DEC_Q23)

## BIL_CR_DEC_Q22_KO_C

Réponse enregistrée.

1. [Continuer](BIL_CR_DEC_Q23)

## BIL_CR_DEC_Q22_KO_D

Réponse enregistrée.

1. [Continuer](BIL_CR_DEC_Q23)

## BIL_CR_DEC_Q23

### Question 23 sur 25

**Dans une entreprise, le droit de grève autorise :**

1. [Les salariés à quitter définitivement leur emploi.](BIL_CR_DEC_Q23_KO_A)
2. [Les salariés à dégrader leur entreprise.](BIL_CR_DEC_Q23_KO_B)
3. [Les salariés à cesser collectivement le travail pour défendre leurs revendications professionnelles.](BIL_CR_DEC_Q23_OK_C)
4. [Les salariés à ne plus respecter leur contrat de travail.](BIL_CR_DEC_Q23_KO_D)

## BIL_CR_DEC_Q23_KO_A

Réponse enregistrée.

1. [Continuer](BIL_CR_DEC_Q24)

## BIL_CR_DEC_Q23_KO_B

Réponse enregistrée.

1. [Continuer](BIL_CR_DEC_Q24)

## BIL_CR_DEC_Q23_OK_C

`@score = calc(@score+1)`
`@score_t5 = calc(@score_t5+1)`
Réponse enregistrée.

1. [Continuer](BIL_CR_DEC_Q24)

## BIL_CR_DEC_Q23_KO_D

Réponse enregistrée.

1. [Continuer](BIL_CR_DEC_Q24)

## BIL_CR_DEC_Q24

### Question 24 sur 25

**Quel continent a été le plus concerné par la décolonisation française après la Seconde Guerre mondiale ?**

1. [L'Europe.](BIL_CR_DEC_Q24_KO_A)
2. [L'Amérique.](BIL_CR_DEC_Q24_KO_B)
3. [L'Afrique.](BIL_CR_DEC_Q24_OK_C)
4. [L'Océanie.](BIL_CR_DEC_Q24_KO_D)

## BIL_CR_DEC_Q24_KO_A

Réponse enregistrée.

1. [Continuer](BIL_CR_DEC_Q25)

## BIL_CR_DEC_Q24_KO_B

Réponse enregistrée.

1. [Continuer](BIL_CR_DEC_Q25)

## BIL_CR_DEC_Q24_OK_C

`@score = calc(@score+1)`
`@score_t4 = calc(@score_t4+1)`
Réponse enregistrée.

1. [Continuer](BIL_CR_DEC_Q25)

## BIL_CR_DEC_Q24_KO_D

Réponse enregistrée.

1. [Continuer](BIL_CR_DEC_Q25)

## BIL_CR_DEC_Q25

### Question 25 sur 25

**Depuis quand les Français élisent-ils le président de la République au suffrage universel direct ?**

1. [1962.](BIL_CR_DEC_Q25_OK_A)
2. [1958.](BIL_CR_DEC_Q25_KO_B)
3. [1945.](BIL_CR_DEC_Q25_KO_C)
4. [1981.](BIL_CR_DEC_Q25_KO_D)

## BIL_CR_DEC_Q25_OK_A

`@score = calc(@score+1)`
`@score_t4 = calc(@score_t4+1)`
Réponse enregistrée.

1. [Continuer](BIL_CR_DEC_RESULT)

## BIL_CR_DEC_Q25_KO_B

Réponse enregistrée.

1. [Continuer](BIL_CR_DEC_RESULT)

## BIL_CR_DEC_Q25_KO_C

Réponse enregistrée.

1. [Continuer](BIL_CR_DEC_RESULT)

## BIL_CR_DEC_Q25_KO_D

Réponse enregistrée.

1. [Continuer](BIL_CR_DEC_RESULT)

## BIL_CR_DEC_RESULT

`@pourcentage = calc(@score*4)`
### 🎯 Votre résultat

Vous avez obtenu **@score/25**, soit **@pourcentage %**.

`if @score <= 9`
### Profil 1 — 🌱 Bases à construire

Commencez par les chapitres fondamentaux et privilégiez des séances courtes et régulières.
`endif`

`if @score >= 10 && @score <= 15`
### Profil 2 — 🧱 Connaissances en construction

Vos bases sont présentes. Consolidez les thèmes les moins maîtrisés avant de faire un examen blanc.
`endif`

`if @score >= 16 && @score <= 20`
### Profil 3 — 🚀 Niveau encourageant

Poursuivez avec des entraînements ciblés et des mises en situation.
`endif`

`if @score >= 21`
### Profil 4 — ⭐ Très bonne préparation

Votre niveau est solide. Travaillez surtout les pièges et réalisez un examen blanc complet.
`endif`

1. [Voir mes résultats par thématique](BIL_CR_DEC_THEMES)

## BIL_CR_DEC_THEMES

### 📊 Résultats par thématique

- **Principes et valeurs de la République** : @score_t1/5
- **Système institutionnel et politique français** : @score_t2/5
- **Droits et devoirs** : @score_t3/5
- **Histoire, géographie, patrimoine et culture** : @score_t4/5
- **Vivre dans la société française** : @score_t5/5

1. [Voir mes recommandations](BIL_CR_DEC_RECO)

## BIL_CR_DEC_RECO

### 🧭 Vos priorités de révision

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

Commencez par les priorités affichées ci-dessus, puis refaites un entraînement ciblé.

1. [📚 Commencer mes révisions](SCR_REV_MENU)
2. [📝 M’entraîner](SCR_ENT_MENU)
3. [🏠 Retour au menu principal](MENU_PRINCIPAL)

## BIL_CR_EQ_Q01

### Question 1 sur 25

**Quelle ville française fait partie des 10 plus grandes métropoles du pays ?**

1. [Lyon.](BIL_CR_EQ_Q01_OK_A)
2. [Vichy.](BIL_CR_EQ_Q01_KO_B)
3. [Lourdes.](BIL_CR_EQ_Q01_KO_C)
4. [Colmar.](BIL_CR_EQ_Q01_KO_D)

## BIL_CR_EQ_Q01_OK_A

`@score = calc(@score+1)`
`@score_t4 = calc(@score_t4+1)`
Réponse enregistrée.

1. [Continuer](BIL_CR_EQ_Q02)

## BIL_CR_EQ_Q01_KO_B

Réponse enregistrée.

1. [Continuer](BIL_CR_EQ_Q02)

## BIL_CR_EQ_Q01_KO_C

Réponse enregistrée.

1. [Continuer](BIL_CR_EQ_Q02)

## BIL_CR_EQ_Q01_KO_D

Réponse enregistrée.

1. [Continuer](BIL_CR_EQ_Q02)

## BIL_CR_EQ_Q02

### Question 2 sur 25

**Quelle est la population approximative de la France en 2025 ?**

1. [50 millions.](BIL_CR_EQ_Q02_KO_A)
2. [68 millions.](BIL_CR_EQ_Q02_OK_B)
3. [60 millions.](BIL_CR_EQ_Q02_KO_C)
4. [57 millions.](BIL_CR_EQ_Q02_KO_D)

## BIL_CR_EQ_Q02_KO_A

Réponse enregistrée.

1. [Continuer](BIL_CR_EQ_Q03)

## BIL_CR_EQ_Q02_OK_B

`@score = calc(@score+1)`
`@score_t4 = calc(@score_t4+1)`
Réponse enregistrée.

1. [Continuer](BIL_CR_EQ_Q03)

## BIL_CR_EQ_Q02_KO_C

Réponse enregistrée.

1. [Continuer](BIL_CR_EQ_Q03)

## BIL_CR_EQ_Q02_KO_D

Réponse enregistrée.

1. [Continuer](BIL_CR_EQ_Q03)

## BIL_CR_EQ_Q03

### Question 3 sur 25

**Complétez les paroles de la Marseillaise : « Allons enfants de la Patrie [...] »**

1. [Le jour de gloire est arrivé.](BIL_CR_EQ_Q03_OK_A)
2. [Le droit d'exprimer librement ses opinions dans le respect de la loi.](BIL_CR_EQ_Q03_KO_B)
3. [À autoriser un étranger à séjourner légalement en France.](BIL_CR_EQ_Q03_KO_C)
4. [Se déplacer librement sur le territoire national et à l'étranger.](BIL_CR_EQ_Q03_KO_D)

## BIL_CR_EQ_Q03_OK_A

`@score = calc(@score+1)`
`@score_t1 = calc(@score_t1+1)`
Réponse enregistrée.

1. [Continuer](BIL_CR_EQ_Q04)

## BIL_CR_EQ_Q03_KO_B

Réponse enregistrée.

1. [Continuer](BIL_CR_EQ_Q04)

## BIL_CR_EQ_Q03_KO_C

Réponse enregistrée.

1. [Continuer](BIL_CR_EQ_Q04)

## BIL_CR_EQ_Q03_KO_D

Réponse enregistrée.

1. [Continuer](BIL_CR_EQ_Q04)

## BIL_CR_EQ_Q04

### Question 4 sur 25

**L'inscription à l'Assurance maladie est :**

1. [Facultative.](BIL_CR_EQ_Q04_KO_A)
2. [Obligatoire.](BIL_CR_EQ_Q04_OK_B)
3. [Réservée aux salariés.](BIL_CR_EQ_Q04_KO_C)
4. [Réservée aux personnes âgées.](BIL_CR_EQ_Q04_KO_D)

## BIL_CR_EQ_Q04_KO_A

Réponse enregistrée.

1. [Continuer](BIL_CR_EQ_Q05)

## BIL_CR_EQ_Q04_OK_B

`@score = calc(@score+1)`
`@score_t5 = calc(@score_t5+1)`
Réponse enregistrée.

1. [Continuer](BIL_CR_EQ_Q05)

## BIL_CR_EQ_Q04_KO_C

Réponse enregistrée.

1. [Continuer](BIL_CR_EQ_Q05)

## BIL_CR_EQ_Q04_KO_D

Réponse enregistrée.

1. [Continuer](BIL_CR_EQ_Q05)

## BIL_CR_EQ_Q05

### Question 5 sur 25

**Peut-on brûler publiquement un drapeau français ?**

1. [Oui.](BIL_CR_EQ_Q05_KO_A)
2. [Oui si c'est une manifestation.](BIL_CR_EQ_Q05_KO_B)
3. [Non.](BIL_CR_EQ_Q05_OK_C)
4. [Oui, dans tous les cas.](BIL_CR_EQ_Q05_KO_D)

## BIL_CR_EQ_Q05_KO_A

Réponse enregistrée.

1. [Continuer](BIL_CR_EQ_Q06)

## BIL_CR_EQ_Q05_KO_B

Réponse enregistrée.

1. [Continuer](BIL_CR_EQ_Q06)

## BIL_CR_EQ_Q05_OK_C

`@score = calc(@score+1)`
`@score_t1 = calc(@score_t1+1)`
Réponse enregistrée.

1. [Continuer](BIL_CR_EQ_Q06)

## BIL_CR_EQ_Q05_KO_D

Réponse enregistrée.

1. [Continuer](BIL_CR_EQ_Q06)

## BIL_CR_EQ_Q06

### Question 6 sur 25

**Combien de personnes parlent français dans le monde ?**

1. [50 millions.](BIL_CR_EQ_Q06_KO_A)
2. [120 millions.](BIL_CR_EQ_Q06_KO_B)
3. [320 millions.](BIL_CR_EQ_Q06_OK_C)
4. [700 millions.](BIL_CR_EQ_Q06_KO_D)

## BIL_CR_EQ_Q06_KO_A

Réponse enregistrée.

1. [Continuer](BIL_CR_EQ_Q07)

## BIL_CR_EQ_Q06_KO_B

Réponse enregistrée.

1. [Continuer](BIL_CR_EQ_Q07)

## BIL_CR_EQ_Q06_OK_C

`@score = calc(@score+1)`
`@score_t4 = calc(@score_t4+1)`
Réponse enregistrée.

1. [Continuer](BIL_CR_EQ_Q07)

## BIL_CR_EQ_Q06_KO_D

Réponse enregistrée.

1. [Continuer](BIL_CR_EQ_Q07)

## BIL_CR_EQ_Q07

### Question 7 sur 25

**Quel est un exemple d'assistance à personne en danger ?**

1. [Partir sans rien faire.](BIL_CR_EQ_Q07_KO_A)
2. [Porter secours ou appeler les services d'urgence.](BIL_CR_EQ_Q07_OK_B)
3. [Filmer la scène puis appeler les secours.](BIL_CR_EQ_Q07_KO_C)
4. [Attendre que quelqu'un intervienne.](BIL_CR_EQ_Q07_KO_D)

## BIL_CR_EQ_Q07_KO_A

Réponse enregistrée.

1. [Continuer](BIL_CR_EQ_Q08)

## BIL_CR_EQ_Q07_OK_B

`@score = calc(@score+1)`
`@score_t3 = calc(@score_t3+1)`
Réponse enregistrée.

1. [Continuer](BIL_CR_EQ_Q08)

## BIL_CR_EQ_Q07_KO_C

Réponse enregistrée.

1. [Continuer](BIL_CR_EQ_Q08)

## BIL_CR_EQ_Q07_KO_D

Réponse enregistrée.

1. [Continuer](BIL_CR_EQ_Q08)

## BIL_CR_EQ_Q08

### Question 8 sur 25

**S'agissant des déchets, quelle proposition est correcte ?**

1. [Les déchets doivent être triés et déposés dans les équipements prévus.](BIL_CR_EQ_Q08_OK_A)
2. [Il est permis de jeter ses déchets dans la nature.](BIL_CR_EQ_Q08_KO_B)
3. [Les encombrants peuvent être déposés sur le trottoir à tout moment.](BIL_CR_EQ_Q08_KO_C)
4. [Les déchets peuvent être brûlés librement dans son jardin.](BIL_CR_EQ_Q08_KO_D)

## BIL_CR_EQ_Q08_OK_A

`@score = calc(@score+1)`
`@score_t3 = calc(@score_t3+1)`
Réponse enregistrée.

1. [Continuer](BIL_CR_EQ_Q09)

## BIL_CR_EQ_Q08_KO_B

Réponse enregistrée.

1. [Continuer](BIL_CR_EQ_Q09)

## BIL_CR_EQ_Q08_KO_C

Réponse enregistrée.

1. [Continuer](BIL_CR_EQ_Q09)

## BIL_CR_EQ_Q08_KO_D

Réponse enregistrée.

1. [Continuer](BIL_CR_EQ_Q09)

## BIL_CR_EQ_Q09

### Question 9 sur 25

**Selon le principe de laïcité, que signifie la neutralité de l'État ?**

1. [L'État interdit les religions.](BIL_CR_EQ_Q09_KO_A)
2. [L'État choisit une religion officielle.](BIL_CR_EQ_Q09_KO_B)
3. [L'État ne favorise ni ne défavorise aucune religion.](BIL_CR_EQ_Q09_OK_C)
4. [L'État finance une seule religion.](BIL_CR_EQ_Q09_KO_D)

## BIL_CR_EQ_Q09_KO_A

Réponse enregistrée.

1. [Continuer](BIL_CR_EQ_Q10)

## BIL_CR_EQ_Q09_KO_B

Réponse enregistrée.

1. [Continuer](BIL_CR_EQ_Q10)

## BIL_CR_EQ_Q09_OK_C

`@score = calc(@score+1)`
`@score_t1 = calc(@score_t1+1)`
Réponse enregistrée.

1. [Continuer](BIL_CR_EQ_Q10)

## BIL_CR_EQ_Q09_KO_D

Réponse enregistrée.

1. [Continuer](BIL_CR_EQ_Q10)

## BIL_CR_EQ_Q10

### Question 10 sur 25

**Qu'est-ce que l'école maternelle ?**

1. [Le collège.](BIL_CR_EQ_Q10_KO_A)
2. [L'école qui accueille les jeunes enfants avant l'école élémentaire.](BIL_CR_EQ_Q10_OK_B)
3. [Le lycée.](BIL_CR_EQ_Q10_KO_C)
4. [L'université.](BIL_CR_EQ_Q10_KO_D)

## BIL_CR_EQ_Q10_KO_A

Réponse enregistrée.

1. [Continuer](BIL_CR_EQ_Q11)

## BIL_CR_EQ_Q10_OK_B

`@score = calc(@score+1)`
`@score_t5 = calc(@score_t5+1)`
Réponse enregistrée.

1. [Continuer](BIL_CR_EQ_Q11)

## BIL_CR_EQ_Q10_KO_C

Réponse enregistrée.

1. [Continuer](BIL_CR_EQ_Q11)

## BIL_CR_EQ_Q10_KO_D

Réponse enregistrée.

1. [Continuer](BIL_CR_EQ_Q11)

## BIL_CR_EQ_Q11

### Question 11 sur 25

**Que peut faire un usager du service public dans une mairie ?**

1. [Exiger d'être reçu avant les autres en raison de sa religion.](BIL_CR_EQ_Q11_KO_A)
2. [Refuser les règles de fonctionnement de la mairie.](BIL_CR_EQ_Q11_KO_B)
3. [Accéder aux services dans les mêmes conditions que tous les autres usagers.](BIL_CR_EQ_Q11_OK_C)
4. [Imposer ses convictions religieuses aux agents.](BIL_CR_EQ_Q11_KO_D)

## BIL_CR_EQ_Q11_KO_A

Réponse enregistrée.

1. [Continuer](BIL_CR_EQ_Q12)

## BIL_CR_EQ_Q11_KO_B

Réponse enregistrée.

1. [Continuer](BIL_CR_EQ_Q12)

## BIL_CR_EQ_Q11_OK_C

`@score = calc(@score+1)`
`@score_t1 = calc(@score_t1+1)`
Réponse enregistrée.

1. [Continuer](BIL_CR_EQ_Q12)

## BIL_CR_EQ_Q11_KO_D

Réponse enregistrée.

1. [Continuer](BIL_CR_EQ_Q12)

## BIL_CR_EQ_Q12

### Question 12 sur 25

**Qui était Marguerite Yourcenar ?**

1. [Une chanteuse.](BIL_CR_EQ_Q12_KO_A)
2. [Une peintre.](BIL_CR_EQ_Q12_KO_B)
3. [Une scientifique.](BIL_CR_EQ_Q12_KO_C)
4. [Une écrivaine française.](BIL_CR_EQ_Q12_OK_D)

## BIL_CR_EQ_Q12_KO_A

Réponse enregistrée.

1. [Continuer](BIL_CR_EQ_Q13)

## BIL_CR_EQ_Q12_KO_B

Réponse enregistrée.

1. [Continuer](BIL_CR_EQ_Q13)

## BIL_CR_EQ_Q12_KO_C

Réponse enregistrée.

1. [Continuer](BIL_CR_EQ_Q13)

## BIL_CR_EQ_Q12_OK_D

`@score = calc(@score+1)`
`@score_t4 = calc(@score_t4+1)`
Réponse enregistrée.

1. [Continuer](BIL_CR_EQ_Q13)

## BIL_CR_EQ_Q13

### Question 13 sur 25

**À quelle liberté la PMA fait-elle référence ?**

1. [La liberté de disposer de son corps.](BIL_CR_EQ_Q13_OK_A)
2. [La liberté de circuler.](BIL_CR_EQ_Q13_KO_B)
3. [La liberté d'expression.](BIL_CR_EQ_Q13_KO_C)
4. [La liberté de la presse.](BIL_CR_EQ_Q13_KO_D)

## BIL_CR_EQ_Q13_OK_A

`@score = calc(@score+1)`
`@score_t3 = calc(@score_t3+1)`
Réponse enregistrée.

1. [Continuer](BIL_CR_EQ_Q14)

## BIL_CR_EQ_Q13_KO_B

Réponse enregistrée.

1. [Continuer](BIL_CR_EQ_Q14)

## BIL_CR_EQ_Q13_KO_C

Réponse enregistrée.

1. [Continuer](BIL_CR_EQ_Q14)

## BIL_CR_EQ_Q13_KO_D

Réponse enregistrée.

1. [Continuer](BIL_CR_EQ_Q14)

## BIL_CR_EQ_Q14

### Question 14 sur 25

**Concernant le droit de se marier, quelle proposition est correcte ?**

1. [Les parents choisissent le conjoint.](BIL_CR_EQ_Q14_KO_A)
2. [Chacun est libre de choisir son conjoint.](BIL_CR_EQ_Q14_OK_B)
3. [Le mariage est réservé aux personnes de la même religion.](BIL_CR_EQ_Q14_KO_C)
4. [Le mariage est imposé par l'État.](BIL_CR_EQ_Q14_KO_D)

## BIL_CR_EQ_Q14_KO_A

Réponse enregistrée.

1. [Continuer](BIL_CR_EQ_Q15)

## BIL_CR_EQ_Q14_OK_B

`@score = calc(@score+1)`
`@score_t3 = calc(@score_t3+1)`
Réponse enregistrée.

1. [Continuer](BIL_CR_EQ_Q15)

## BIL_CR_EQ_Q14_KO_C

Réponse enregistrée.

1. [Continuer](BIL_CR_EQ_Q15)

## BIL_CR_EQ_Q14_KO_D

Réponse enregistrée.

1. [Continuer](BIL_CR_EQ_Q15)

## BIL_CR_EQ_Q15

### Question 15 sur 25

**En cas de divorce, qui exerce l'autorité parentale ?**

1. [Seulement le père.](BIL_CR_EQ_Q15_KO_A)
2. [Les deux parents, sauf décision contraire du juge.](BIL_CR_EQ_Q15_OK_B)
3. [Seulement la mère.](BIL_CR_EQ_Q15_KO_C)
4. [Les grands-parents.](BIL_CR_EQ_Q15_KO_D)

## BIL_CR_EQ_Q15_KO_A

Réponse enregistrée.

1. [Continuer](BIL_CR_EQ_Q16)

## BIL_CR_EQ_Q15_OK_B

`@score = calc(@score+1)`
`@score_t5 = calc(@score_t5+1)`
Réponse enregistrée.

1. [Continuer](BIL_CR_EQ_Q16)

## BIL_CR_EQ_Q15_KO_C

Réponse enregistrée.

1. [Continuer](BIL_CR_EQ_Q16)

## BIL_CR_EQ_Q15_KO_D

Réponse enregistrée.

1. [Continuer](BIL_CR_EQ_Q16)

## BIL_CR_EQ_Q16

### Question 16 sur 25

**Pour combien de temps sont élus les sénateurs ?**

1. [Cinq ans.](BIL_CR_EQ_Q16_KO_A)
2. [Sept ans.](BIL_CR_EQ_Q16_KO_B)
3. [Neuf ans.](BIL_CR_EQ_Q16_KO_C)
4. [Six ans.](BIL_CR_EQ_Q16_OK_D)

## BIL_CR_EQ_Q16_KO_A

Réponse enregistrée.

1. [Continuer](BIL_CR_EQ_Q17)

## BIL_CR_EQ_Q16_KO_B

Réponse enregistrée.

1. [Continuer](BIL_CR_EQ_Q17)

## BIL_CR_EQ_Q16_KO_C

Réponse enregistrée.

1. [Continuer](BIL_CR_EQ_Q17)

## BIL_CR_EQ_Q16_OK_D

`@score = calc(@score+1)`
`@score_t2 = calc(@score_t2+1)`
Réponse enregistrée.

1. [Continuer](BIL_CR_EQ_Q17)

## BIL_CR_EQ_Q17

### Question 17 sur 25

**En quelle année le traité de Maastricht, qui marque la fondation de l'Union européenne, a-t-il été signé ?**

1. [1992.](BIL_CR_EQ_Q17_OK_A)
2. [1957.](BIL_CR_EQ_Q17_KO_B)
3. [2002.](BIL_CR_EQ_Q17_KO_C)
4. [1989.](BIL_CR_EQ_Q17_KO_D)

## BIL_CR_EQ_Q17_OK_A

`@score = calc(@score+1)`
`@score_t2 = calc(@score_t2+1)`
Réponse enregistrée.

1. [Continuer](BIL_CR_EQ_Q18)

## BIL_CR_EQ_Q17_KO_B

Réponse enregistrée.

1. [Continuer](BIL_CR_EQ_Q18)

## BIL_CR_EQ_Q17_KO_C

Réponse enregistrée.

1. [Continuer](BIL_CR_EQ_Q18)

## BIL_CR_EQ_Q17_KO_D

Réponse enregistrée.

1. [Continuer](BIL_CR_EQ_Q18)

## BIL_CR_EQ_Q18

### Question 18 sur 25

**Que doit-on faire face aux ordres des policiers ou gendarmes ?**

1. [Obéir aux injonctions légales des policiers ou des gendarmes.](BIL_CR_EQ_Q18_OK_A)
2. [Les ignorer.](BIL_CR_EQ_Q18_KO_B)
3. [Les contester par la force.](BIL_CR_EQ_Q18_KO_C)
4. [Refuser systématiquement.](BIL_CR_EQ_Q18_KO_D)

## BIL_CR_EQ_Q18_OK_A

`@score = calc(@score+1)`
`@score_t3 = calc(@score_t3+1)`
Réponse enregistrée.

1. [Continuer](BIL_CR_EQ_Q19)

## BIL_CR_EQ_Q18_KO_B

Réponse enregistrée.

1. [Continuer](BIL_CR_EQ_Q19)

## BIL_CR_EQ_Q18_KO_C

Réponse enregistrée.

1. [Continuer](BIL_CR_EQ_Q19)

## BIL_CR_EQ_Q18_KO_D

Réponse enregistrée.

1. [Continuer](BIL_CR_EQ_Q19)

## BIL_CR_EQ_Q19

### Question 19 sur 25

**Quelles sont les conditions pour toucher les allocations chômage ?**

1. [Être simplement sans emploi.](BIL_CR_EQ_Q19_KO_A)
2. [Avoir travaillé et remplir les conditions prévues par la réglementation.](BIL_CR_EQ_Q19_OK_B)
3. [En faire la demande sans autre condition.](BIL_CR_EQ_Q19_KO_C)
4. [Être de nationalité française.](BIL_CR_EQ_Q19_KO_D)

## BIL_CR_EQ_Q19_KO_A

Réponse enregistrée.

1. [Continuer](BIL_CR_EQ_Q20)

## BIL_CR_EQ_Q19_OK_B

`@score = calc(@score+1)`
`@score_t5 = calc(@score_t5+1)`
Réponse enregistrée.

1. [Continuer](BIL_CR_EQ_Q20)

## BIL_CR_EQ_Q19_KO_C

Réponse enregistrée.

1. [Continuer](BIL_CR_EQ_Q20)

## BIL_CR_EQ_Q19_KO_D

Réponse enregistrée.

1. [Continuer](BIL_CR_EQ_Q20)

## BIL_CR_EQ_Q20

### Question 20 sur 25

**Comment s'appelle le diplôme passé par les élèves à la fin du collège ?**

1. [Le baccalauréat.](BIL_CR_EQ_Q20_KO_A)
2. [Le CAP.](BIL_CR_EQ_Q20_KO_B)
3. [La licence.](BIL_CR_EQ_Q20_KO_C)
4. [Le diplôme national du brevet.](BIL_CR_EQ_Q20_OK_D)

## BIL_CR_EQ_Q20_KO_A

Réponse enregistrée.

1. [Continuer](BIL_CR_EQ_Q21)

## BIL_CR_EQ_Q20_KO_B

Réponse enregistrée.

1. [Continuer](BIL_CR_EQ_Q21)

## BIL_CR_EQ_Q20_KO_C

Réponse enregistrée.

1. [Continuer](BIL_CR_EQ_Q21)

## BIL_CR_EQ_Q20_OK_D

`@score = calc(@score+1)`
`@score_t5 = calc(@score_t5+1)`
Réponse enregistrée.

1. [Continuer](BIL_CR_EQ_Q21)

## BIL_CR_EQ_Q21

### Question 21 sur 25

**Quand peut-on visiter gratuitement des lieux culturels en France ?**

1. [Le 14 juillet.](BIL_CR_EQ_Q21_KO_A)
2. [Le 25 décembre.](BIL_CR_EQ_Q21_KO_B)
3. [Lors des Journées européennes du patrimoine.](BIL_CR_EQ_Q21_OK_C)
4. [Tous les dimanches.](BIL_CR_EQ_Q21_KO_D)

## BIL_CR_EQ_Q21_KO_A

Réponse enregistrée.

1. [Continuer](BIL_CR_EQ_Q22)

## BIL_CR_EQ_Q21_KO_B

Réponse enregistrée.

1. [Continuer](BIL_CR_EQ_Q22)

## BIL_CR_EQ_Q21_OK_C

`@score = calc(@score+1)`
`@score_t4 = calc(@score_t4+1)`
Réponse enregistrée.

1. [Continuer](BIL_CR_EQ_Q22)

## BIL_CR_EQ_Q21_KO_D

Réponse enregistrée.

1. [Continuer](BIL_CR_EQ_Q22)

## BIL_CR_EQ_Q22

### Question 22 sur 25

**Qui dirige la commune ?**

1. [Le préfet.](BIL_CR_EQ_Q22_KO_A)
2. [Le président du département.](BIL_CR_EQ_Q22_KO_B)
3. [Le député.](BIL_CR_EQ_Q22_KO_C)
4. [Le maire.](BIL_CR_EQ_Q22_OK_D)

## BIL_CR_EQ_Q22_KO_A

Réponse enregistrée.

1. [Continuer](BIL_CR_EQ_Q23)

## BIL_CR_EQ_Q22_KO_B

Réponse enregistrée.

1. [Continuer](BIL_CR_EQ_Q23)

## BIL_CR_EQ_Q22_KO_C

Réponse enregistrée.

1. [Continuer](BIL_CR_EQ_Q23)

## BIL_CR_EQ_Q22_OK_D

`@score = calc(@score+1)`
`@score_t2 = calc(@score_t2+1)`
Réponse enregistrée.

1. [Continuer](BIL_CR_EQ_Q23)

## BIL_CR_EQ_Q23

### Question 23 sur 25

**Qui doit respecter le principe de neutralité religieuse dans une préfecture ?**

1. [Les usagers.](BIL_CR_EQ_Q23_KO_A)
2. [Les visiteurs.](BIL_CR_EQ_Q23_KO_B)
3. [Les citoyens.](BIL_CR_EQ_Q23_KO_C)
4. [Les agents publics.](BIL_CR_EQ_Q23_OK_D)

## BIL_CR_EQ_Q23_KO_A

Réponse enregistrée.

1. [Continuer](BIL_CR_EQ_Q24)

## BIL_CR_EQ_Q23_KO_B

Réponse enregistrée.

1. [Continuer](BIL_CR_EQ_Q24)

## BIL_CR_EQ_Q23_KO_C

Réponse enregistrée.

1. [Continuer](BIL_CR_EQ_Q24)

## BIL_CR_EQ_Q23_OK_D

`@score = calc(@score+1)`
`@score_t1 = calc(@score_t1+1)`
Réponse enregistrée.

1. [Continuer](BIL_CR_EQ_Q24)

## BIL_CR_EQ_Q24

### Question 24 sur 25

**Le président de la République a commis un crime. Quelle proposition est correcte ?**

1. [Il est au-dessus des lois.](BIL_CR_EQ_Q24_KO_A)
2. [Il ne peut jamais être jugé.](BIL_CR_EQ_Q24_KO_B)
3. [Il peut être arrêté immédiatement par n'importe quel juge.](BIL_CR_EQ_Q24_KO_C)
4. [Il n'est pas au-dessus des lois, mais bénéficie d'une inviolabilité durant son mandat (sauf exceptions prévues par la Constitution et le droit international).](BIL_CR_EQ_Q24_OK_D)

## BIL_CR_EQ_Q24_KO_A

Réponse enregistrée.

1. [Continuer](BIL_CR_EQ_Q25)

## BIL_CR_EQ_Q24_KO_B

Réponse enregistrée.

1. [Continuer](BIL_CR_EQ_Q25)

## BIL_CR_EQ_Q24_KO_C

Réponse enregistrée.

1. [Continuer](BIL_CR_EQ_Q25)

## BIL_CR_EQ_Q24_OK_D

`@score = calc(@score+1)`
`@score_t2 = calc(@score_t2+1)`
Réponse enregistrée.

1. [Continuer](BIL_CR_EQ_Q25)

## BIL_CR_EQ_Q25

### Question 25 sur 25

**Combien de communes environ existe-t-il en France ?**

1. [1200.](BIL_CR_EQ_Q25_KO_A)
2. [577.](BIL_CR_EQ_Q25_KO_B)
3. [35000.](BIL_CR_EQ_Q25_OK_C)
4. [3050.](BIL_CR_EQ_Q25_KO_D)

## BIL_CR_EQ_Q25_KO_A

Réponse enregistrée.

1. [Continuer](BIL_CR_EQ_RESULT)

## BIL_CR_EQ_Q25_KO_B

Réponse enregistrée.

1. [Continuer](BIL_CR_EQ_RESULT)

## BIL_CR_EQ_Q25_OK_C

`@score = calc(@score+1)`
`@score_t2 = calc(@score_t2+1)`
Réponse enregistrée.

1. [Continuer](BIL_CR_EQ_RESULT)

## BIL_CR_EQ_Q25_KO_D

Réponse enregistrée.

1. [Continuer](BIL_CR_EQ_RESULT)

## BIL_CR_EQ_RESULT

`@pourcentage = calc(@score*4)`
### 🎯 Votre résultat

Vous avez obtenu **@score/25**, soit **@pourcentage %**.

`if @score <= 9`
### Profil 1 — 🌱 Bases à construire

Commencez par les chapitres fondamentaux et privilégiez des séances courtes et régulières.
`endif`

`if @score >= 10 && @score <= 15`
### Profil 2 — 🧱 Connaissances en construction

Vos bases sont présentes. Consolidez les thèmes les moins maîtrisés avant de faire un examen blanc.
`endif`

`if @score >= 16 && @score <= 20`
### Profil 3 — 🚀 Niveau encourageant

Poursuivez avec des entraînements ciblés et des mises en situation.
`endif`

`if @score >= 21`
### Profil 4 — ⭐ Très bonne préparation

Votre niveau est solide. Travaillez surtout les pièges et réalisez un examen blanc complet.
`endif`

1. [Voir mes résultats par thématique](BIL_CR_EQ_THEMES)

## BIL_CR_EQ_THEMES

### 📊 Résultats par thématique

- **Principes et valeurs de la République** : @score_t1/5
- **Système institutionnel et politique français** : @score_t2/5
- **Droits et devoirs** : @score_t3/5
- **Histoire, géographie, patrimoine et culture** : @score_t4/5
- **Vivre dans la société française** : @score_t5/5

1. [Voir mes recommandations](BIL_CR_EQ_RECO)

## BIL_CR_EQ_RECO

### 🧭 Vos priorités de révision

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

Commencez par les priorités affichées ci-dessus, puis refaites un entraînement ciblé.

1. [📚 Commencer mes révisions](SCR_REV_MENU)
2. [📝 M’entraîner](SCR_ENT_MENU)
3. [🏠 Retour au menu principal](MENU_PRINCIPAL)

## BIL_CR_INT_Q01

### Question 1 sur 25

**Quel État a quitté l'Union européenne en 2020 ?**

1. [L'Allemagne.](BIL_CR_INT_Q01_KO_A)
2. [Le Royaume-Uni.](BIL_CR_INT_Q01_OK_B)
3. [L'Italie.](BIL_CR_INT_Q01_KO_C)
4. [L'Espagne.](BIL_CR_INT_Q01_KO_D)

## BIL_CR_INT_Q01_KO_A

Réponse enregistrée.

1. [Continuer](BIL_CR_INT_Q02)

## BIL_CR_INT_Q01_OK_B

`@score = calc(@score+1)`
`@score_t2 = calc(@score_t2+1)`
Réponse enregistrée.

1. [Continuer](BIL_CR_INT_Q02)

## BIL_CR_INT_Q01_KO_C

Réponse enregistrée.

1. [Continuer](BIL_CR_INT_Q02)

## BIL_CR_INT_Q01_KO_D

Réponse enregistrée.

1. [Continuer](BIL_CR_INT_Q02)

## BIL_CR_INT_Q02

### Question 2 sur 25

**Qui était une figure de la Résistance française pendant la Seconde Guerre mondiale ?**

1. [Napoléon Bonaparte.](BIL_CR_INT_Q02_KO_A)
2. [Napoléon III.](BIL_CR_INT_Q02_KO_B)
3. [Jules Ferry.](BIL_CR_INT_Q02_KO_C)
4. [Jean Moulin.](BIL_CR_INT_Q02_OK_D)

## BIL_CR_INT_Q02_KO_A

Réponse enregistrée.

1. [Continuer](BIL_CR_INT_Q03)

## BIL_CR_INT_Q02_KO_B

Réponse enregistrée.

1. [Continuer](BIL_CR_INT_Q03)

## BIL_CR_INT_Q02_KO_C

Réponse enregistrée.

1. [Continuer](BIL_CR_INT_Q03)

## BIL_CR_INT_Q02_OK_D

`@score = calc(@score+1)`
`@score_t4 = calc(@score_t4+1)`
Réponse enregistrée.

1. [Continuer](BIL_CR_INT_Q03)

## BIL_CR_INT_Q03

### Question 3 sur 25

**Quelle fête est française ?**

1. [Thanksgiving.](BIL_CR_INT_Q03_KO_A)
2. [Halloween.](BIL_CR_INT_Q03_KO_B)
3. [Le 14 juillet.](BIL_CR_INT_Q03_OK_C)
4. [La Saint-Patrick.](BIL_CR_INT_Q03_KO_D)

## BIL_CR_INT_Q03_KO_A

Réponse enregistrée.

1. [Continuer](BIL_CR_INT_Q04)

## BIL_CR_INT_Q03_KO_B

Réponse enregistrée.

1. [Continuer](BIL_CR_INT_Q04)

## BIL_CR_INT_Q03_OK_C

`@score = calc(@score+1)`
`@score_t4 = calc(@score_t4+1)`
Réponse enregistrée.

1. [Continuer](BIL_CR_INT_Q04)

## BIL_CR_INT_Q03_KO_D

Réponse enregistrée.

1. [Continuer](BIL_CR_INT_Q04)

## BIL_CR_INT_Q04

### Question 4 sur 25

**Qu'est-ce que la Constitution ?**

1. [Une loi ordinaire.](BIL_CR_INT_Q04_KO_A)
2. [Un règlement.](BIL_CR_INT_Q04_KO_B)
3. [Un décret.](BIL_CR_INT_Q04_KO_C)
4. [Le texte fondamental qui organise les institutions de la République et fixe les règles de leur fonctionnement.](BIL_CR_INT_Q04_OK_D)

## BIL_CR_INT_Q04_KO_A

Réponse enregistrée.

1. [Continuer](BIL_CR_INT_Q05)

## BIL_CR_INT_Q04_KO_B

Réponse enregistrée.

1. [Continuer](BIL_CR_INT_Q05)

## BIL_CR_INT_Q04_KO_C

Réponse enregistrée.

1. [Continuer](BIL_CR_INT_Q05)

## BIL_CR_INT_Q04_OK_D

`@score = calc(@score+1)`
`@score_t3 = calc(@score_t3+1)`
Réponse enregistrée.

1. [Continuer](BIL_CR_INT_Q05)

## BIL_CR_INT_Q05

### Question 5 sur 25

**Quel numéro d'urgence permet d'appeler la police ?**

1. [15.](BIL_CR_INT_Q05_KO_A)
2. [17.](BIL_CR_INT_Q05_OK_B)
3. [18.](BIL_CR_INT_Q05_KO_C)
4. [112.](BIL_CR_INT_Q05_KO_D)

## BIL_CR_INT_Q05_KO_A

Réponse enregistrée.

1. [Continuer](BIL_CR_INT_Q06)

## BIL_CR_INT_Q05_OK_B

`@score = calc(@score+1)`
`@score_t5 = calc(@score_t5+1)`
Réponse enregistrée.

1. [Continuer](BIL_CR_INT_Q06)

## BIL_CR_INT_Q05_KO_C

Réponse enregistrée.

1. [Continuer](BIL_CR_INT_Q06)

## BIL_CR_INT_Q05_KO_D

Réponse enregistrée.

1. [Continuer](BIL_CR_INT_Q06)

## BIL_CR_INT_Q06

### Question 6 sur 25

**Un employeur refuse d'embaucher des femmes dans son entreprise. Que dit la loi ?**

1. [L'employeur choisit librement.](BIL_CR_INT_Q06_KO_A)
2. [C'est autorisé.](BIL_CR_INT_Q06_KO_B)
3. [Cela dépend de son règlement intérieur.](BIL_CR_INT_Q06_KO_C)
4. [C'est interdit. La loi interdit les discriminations.](BIL_CR_INT_Q06_OK_D)

## BIL_CR_INT_Q06_KO_A

Réponse enregistrée.

1. [Continuer](BIL_CR_INT_Q07)

## BIL_CR_INT_Q06_KO_B

Réponse enregistrée.

1. [Continuer](BIL_CR_INT_Q07)

## BIL_CR_INT_Q06_KO_C

Réponse enregistrée.

1. [Continuer](BIL_CR_INT_Q07)

## BIL_CR_INT_Q06_OK_D

`@score = calc(@score+1)`
`@score_t1 = calc(@score_t1+1)`
Réponse enregistrée.

1. [Continuer](BIL_CR_INT_Q07)

## BIL_CR_INT_Q07

### Question 7 sur 25

**Quelle aide permet aux personnes qui ont des difficultés financières d'avoir un avocat ?**

1. [Les allocations familiales.](BIL_CR_INT_Q07_KO_A)
2. [Le RSA.](BIL_CR_INT_Q07_KO_B)
3. [L'aide juridictionnelle.](BIL_CR_INT_Q07_OK_C)
4. [Les allocations chômage.](BIL_CR_INT_Q07_KO_D)

## BIL_CR_INT_Q07_KO_A

Réponse enregistrée.

1. [Continuer](BIL_CR_INT_Q08)

## BIL_CR_INT_Q07_KO_B

Réponse enregistrée.

1. [Continuer](BIL_CR_INT_Q08)

## BIL_CR_INT_Q07_OK_C

`@score = calc(@score+1)`
`@score_t5 = calc(@score_t5+1)`
Réponse enregistrée.

1. [Continuer](BIL_CR_INT_Q08)

## BIL_CR_INT_Q07_KO_D

Réponse enregistrée.

1. [Continuer](BIL_CR_INT_Q08)

## BIL_CR_INT_Q08

### Question 8 sur 25

**Que fête-t-on le 8 mai ?**

1. [L'Armistice de 1918.](BIL_CR_INT_Q08_KO_A)
2. [La Révolution française.](BIL_CR_INT_Q08_KO_B)
3. [La fin de la seconde guerre mondiale.](BIL_CR_INT_Q08_OK_C)
4. [Le Débarquement des alliés en Normandie.](BIL_CR_INT_Q08_KO_D)

## BIL_CR_INT_Q08_KO_A

Réponse enregistrée.

1. [Continuer](BIL_CR_INT_Q09)

## BIL_CR_INT_Q08_KO_B

Réponse enregistrée.

1. [Continuer](BIL_CR_INT_Q09)

## BIL_CR_INT_Q08_OK_C

`@score = calc(@score+1)`
`@score_t4 = calc(@score_t4+1)`
Réponse enregistrée.

1. [Continuer](BIL_CR_INT_Q09)

## BIL_CR_INT_Q08_KO_D

Réponse enregistrée.

1. [Continuer](BIL_CR_INT_Q09)

## BIL_CR_INT_Q09

### Question 9 sur 25

**Que représente la laïcité ?**

1. [L'interdiction de toutes les religions.](BIL_CR_INT_Q09_KO_A)
2. [La séparation des Églises et de l'État, garantissant la liberté de conscience.](BIL_CR_INT_Q09_OK_B)
3. [L'obligation d'avoir une religion.](BIL_CR_INT_Q09_KO_C)
4. [La priorité donnée à une religion par l'État.](BIL_CR_INT_Q09_KO_D)

## BIL_CR_INT_Q09_KO_A

Réponse enregistrée.

1. [Continuer](BIL_CR_INT_Q10)

## BIL_CR_INT_Q09_OK_B

`@score = calc(@score+1)`
`@score_t1 = calc(@score_t1+1)`
Réponse enregistrée.

1. [Continuer](BIL_CR_INT_Q10)

## BIL_CR_INT_Q09_KO_C

Réponse enregistrée.

1. [Continuer](BIL_CR_INT_Q10)

## BIL_CR_INT_Q09_KO_D

Réponse enregistrée.

1. [Continuer](BIL_CR_INT_Q10)

## BIL_CR_INT_Q10

### Question 10 sur 25

**Combien y a-t-il de régions en France ?**

1. [13.](BIL_CR_INT_Q10_KO_A)
2. [18.](BIL_CR_INT_Q10_OK_B)
3. [22.](BIL_CR_INT_Q10_KO_C)
4. [101.](BIL_CR_INT_Q10_KO_D)

## BIL_CR_INT_Q10_KO_A

Réponse enregistrée.

1. [Continuer](BIL_CR_INT_Q11)

## BIL_CR_INT_Q10_OK_B

`@score = calc(@score+1)`
`@score_t2 = calc(@score_t2+1)`
Réponse enregistrée.

1. [Continuer](BIL_CR_INT_Q11)

## BIL_CR_INT_Q10_KO_C

Réponse enregistrée.

1. [Continuer](BIL_CR_INT_Q11)

## BIL_CR_INT_Q10_KO_D

Réponse enregistrée.

1. [Continuer](BIL_CR_INT_Q11)

## BIL_CR_INT_Q11

### Question 11 sur 25

**Pourquoi séparer les trois pouvoirs dans une démocratie ?**

1. [Pour éviter qu'une seule personne ou qu'un seul pouvoir concentre tous les pouvoirs.](BIL_CR_INT_Q11_OK_A)
2. [Pour compliquer les décisions.](BIL_CR_INT_Q11_KO_B)
3. [Pour donner plus de pouvoir au Président.](BIL_CR_INT_Q11_KO_C)
4. [Pour empêcher les lois.](BIL_CR_INT_Q11_KO_D)

## BIL_CR_INT_Q11_OK_A

`@score = calc(@score+1)`
`@score_t2 = calc(@score_t2+1)`
Réponse enregistrée.

1. [Continuer](BIL_CR_INT_Q12)

## BIL_CR_INT_Q11_KO_B

Réponse enregistrée.

1. [Continuer](BIL_CR_INT_Q12)

## BIL_CR_INT_Q11_KO_C

Réponse enregistrée.

1. [Continuer](BIL_CR_INT_Q12)

## BIL_CR_INT_Q11_KO_D

Réponse enregistrée.

1. [Continuer](BIL_CR_INT_Q12)

## BIL_CR_INT_Q12

### Question 12 sur 25

**Quel est le rôle du président de la République ?**

1. [Il vote les lois.](BIL_CR_INT_Q12_KO_A)
2. [Il veille au respect de la Constitution et assure le fonctionnement régulier des pouvoirs publics.](BIL_CR_INT_Q12_OK_B)
3. [Il rend la justice.](BIL_CR_INT_Q12_KO_C)
4. [Il dirige les communes.](BIL_CR_INT_Q12_KO_D)

## BIL_CR_INT_Q12_KO_A

Réponse enregistrée.

1. [Continuer](BIL_CR_INT_Q13)

## BIL_CR_INT_Q12_OK_B

`@score = calc(@score+1)`
`@score_t2 = calc(@score_t2+1)`
Réponse enregistrée.

1. [Continuer](BIL_CR_INT_Q13)

## BIL_CR_INT_Q12_KO_C

Réponse enregistrée.

1. [Continuer](BIL_CR_INT_Q13)

## BIL_CR_INT_Q12_KO_D

Réponse enregistrée.

1. [Continuer](BIL_CR_INT_Q13)

## BIL_CR_INT_Q13

### Question 13 sur 25

**Quelle est la durée du mandat du conseil municipal et du maire ?**

1. [5 ans.](BIL_CR_INT_Q13_KO_A)
2. [7 ans.](BIL_CR_INT_Q13_KO_B)
3. [6 ans.](BIL_CR_INT_Q13_OK_C)
4. [9 ans.](BIL_CR_INT_Q13_KO_D)

## BIL_CR_INT_Q13_KO_A

Réponse enregistrée.

1. [Continuer](BIL_CR_INT_Q14)

## BIL_CR_INT_Q13_KO_B

Réponse enregistrée.

1. [Continuer](BIL_CR_INT_Q14)

## BIL_CR_INT_Q13_OK_C

`@score = calc(@score+1)`
`@score_t2 = calc(@score_t2+1)`
Réponse enregistrée.

1. [Continuer](BIL_CR_INT_Q14)

## BIL_CR_INT_Q13_KO_D

Réponse enregistrée.

1. [Continuer](BIL_CR_INT_Q14)

## BIL_CR_INT_Q14

### Question 14 sur 25

**Durant le mandat de quel président la peine de mort a-t-elle été abolie ?**

1. [Charles de Gaulle.](BIL_CR_INT_Q14_KO_A)
2. [Jacques Chirac.](BIL_CR_INT_Q14_KO_B)
3. [François Mitterrand.](BIL_CR_INT_Q14_OK_C)
4. [Valéry Giscard d'Estaing.](BIL_CR_INT_Q14_KO_D)

## BIL_CR_INT_Q14_KO_A

Réponse enregistrée.

1. [Continuer](BIL_CR_INT_Q15)

## BIL_CR_INT_Q14_KO_B

Réponse enregistrée.

1. [Continuer](BIL_CR_INT_Q15)

## BIL_CR_INT_Q14_OK_C

`@score = calc(@score+1)`
`@score_t4 = calc(@score_t4+1)`
Réponse enregistrée.

1. [Continuer](BIL_CR_INT_Q15)

## BIL_CR_INT_Q14_KO_D

Réponse enregistrée.

1. [Continuer](BIL_CR_INT_Q15)

## BIL_CR_INT_Q15

### Question 15 sur 25

**Jeter un mégot par terre est :**

1. [Autorisé si personne ne regarde.](BIL_CR_INT_Q15_KO_A)
2. [Autorisé dans les grandes villes.](BIL_CR_INT_Q15_KO_B)
3. [Interdit et passible d'une sanction.](BIL_CR_INT_Q15_OK_C)
4. [Obligatoire si aucune poubelle n'est disponible.](BIL_CR_INT_Q15_KO_D)

## BIL_CR_INT_Q15_KO_A

Réponse enregistrée.

1. [Continuer](BIL_CR_INT_Q16)

## BIL_CR_INT_Q15_KO_B

Réponse enregistrée.

1. [Continuer](BIL_CR_INT_Q16)

## BIL_CR_INT_Q15_OK_C

`@score = calc(@score+1)`
`@score_t3 = calc(@score_t3+1)`
Réponse enregistrée.

1. [Continuer](BIL_CR_INT_Q16)

## BIL_CR_INT_Q15_KO_D

Réponse enregistrée.

1. [Continuer](BIL_CR_INT_Q16)

## BIL_CR_INT_Q16

### Question 16 sur 25

**Quelle liberté permet à une personne de croire en la religion de son choix ?**

1. [La liberté de conscience.](BIL_CR_INT_Q16_OK_A)
2. [La liberté d'expression.](BIL_CR_INT_Q16_KO_B)
3. [La liberté de circulation.](BIL_CR_INT_Q16_KO_C)
4. [La liberté de la presse.](BIL_CR_INT_Q16_KO_D)

## BIL_CR_INT_Q16_OK_A

`@score = calc(@score+1)`
`@score_t3 = calc(@score_t3+1)`
Réponse enregistrée.

1. [Continuer](BIL_CR_INT_Q17)

## BIL_CR_INT_Q16_KO_B

Réponse enregistrée.

1. [Continuer](BIL_CR_INT_Q17)

## BIL_CR_INT_Q16_KO_C

Réponse enregistrée.

1. [Continuer](BIL_CR_INT_Q17)

## BIL_CR_INT_Q16_KO_D

Réponse enregistrée.

1. [Continuer](BIL_CR_INT_Q17)

## BIL_CR_INT_Q17

### Question 17 sur 25

**Qu'est-ce qui est interdit par la Charte de la laïcité à l'école ?**

1. [Étudier les religions en cours d'histoire.](BIL_CR_INT_Q17_KO_A)
2. [Avoir une religion.](BIL_CR_INT_Q17_KO_B)
3. [Parler de ses convictions personnelles en dehors des cours.](BIL_CR_INT_Q17_KO_C)
4. [Le prosélytisme et les pressions religieuses sur les élèves.](BIL_CR_INT_Q17_OK_D)

## BIL_CR_INT_Q17_KO_A

Réponse enregistrée.

1. [Continuer](BIL_CR_INT_Q18)

## BIL_CR_INT_Q17_KO_B

Réponse enregistrée.

1. [Continuer](BIL_CR_INT_Q18)

## BIL_CR_INT_Q17_KO_C

Réponse enregistrée.

1. [Continuer](BIL_CR_INT_Q18)

## BIL_CR_INT_Q17_OK_D

`@score = calc(@score+1)`
`@score_t1 = calc(@score_t1+1)`
Réponse enregistrée.

1. [Continuer](BIL_CR_INT_Q18)

## BIL_CR_INT_Q18

### Question 18 sur 25

**Sur quel document peut-on voir Marianne ?**

1. [Le permis de conduire.](BIL_CR_INT_Q18_KO_A)
2. [Une facture d'électricité.](BIL_CR_INT_Q18_KO_B)
3. [Le passeport.](BIL_CR_INT_Q18_KO_C)
4. [Les timbres-poste.](BIL_CR_INT_Q18_OK_D)

## BIL_CR_INT_Q18_KO_A

Réponse enregistrée.

1. [Continuer](BIL_CR_INT_Q19)

## BIL_CR_INT_Q18_KO_B

Réponse enregistrée.

1. [Continuer](BIL_CR_INT_Q19)

## BIL_CR_INT_Q18_KO_C

Réponse enregistrée.

1. [Continuer](BIL_CR_INT_Q19)

## BIL_CR_INT_Q18_OK_D

`@score = calc(@score+1)`
`@score_t1 = calc(@score_t1+1)`
Réponse enregistrée.

1. [Continuer](BIL_CR_INT_Q19)

## BIL_CR_INT_Q19

### Question 19 sur 25

**Laquelle de ces citations est inscrite dans la Déclaration des droits de l'homme et du citoyen de 1789 ?**

1. [« Nul n'est censé ignorer la loi. ».](BIL_CR_INT_Q19_KO_A)
2. [« Liberté, Travail, Solidarité. ».](BIL_CR_INT_Q19_KO_B)
3. [« La République protège toutes les religions. ».](BIL_CR_INT_Q19_KO_C)
4. [« Les hommes naissent et demeurent libres et égaux en droits. ».](BIL_CR_INT_Q19_OK_D)

## BIL_CR_INT_Q19_KO_A

Réponse enregistrée.

1. [Continuer](BIL_CR_INT_Q20)

## BIL_CR_INT_Q19_KO_B

Réponse enregistrée.

1. [Continuer](BIL_CR_INT_Q20)

## BIL_CR_INT_Q19_KO_C

Réponse enregistrée.

1. [Continuer](BIL_CR_INT_Q20)

## BIL_CR_INT_Q19_OK_D

`@score = calc(@score+1)`
`@score_t3 = calc(@score_t3+1)`
Réponse enregistrée.

1. [Continuer](BIL_CR_INT_Q20)

## BIL_CR_INT_Q20

### Question 20 sur 25

**Un bail locatif est valide s'il est :**

1. [Conclu uniquement à l'oral.](BIL_CR_INT_Q20_KO_A)
2. [Écrit et signé par le propriétaire et le locataire.](BIL_CR_INT_Q20_OK_B)
3. [Signé uniquement par le propriétaire.](BIL_CR_INT_Q20_KO_C)
4. [Signé uniquement par le locataire.](BIL_CR_INT_Q20_KO_D)

## BIL_CR_INT_Q20_KO_A

Réponse enregistrée.

1. [Continuer](BIL_CR_INT_Q21)

## BIL_CR_INT_Q20_OK_B

`@score = calc(@score+1)`
`@score_t5 = calc(@score_t5+1)`
Réponse enregistrée.

1. [Continuer](BIL_CR_INT_Q21)

## BIL_CR_INT_Q20_KO_C

Réponse enregistrée.

1. [Continuer](BIL_CR_INT_Q21)

## BIL_CR_INT_Q20_KO_D

Réponse enregistrée.

1. [Continuer](BIL_CR_INT_Q21)

## BIL_CR_INT_Q21

### Question 21 sur 25

**Que signifie PMA ?**

1. [Protection médicale assistée.](BIL_CR_INT_Q21_KO_A)
2. [Programme médical avancé.](BIL_CR_INT_Q21_KO_B)
3. [Parcours médical administratif.](BIL_CR_INT_Q21_KO_C)
4. [Procréation médicalement assistée.](BIL_CR_INT_Q21_OK_D)

## BIL_CR_INT_Q21_KO_A

Réponse enregistrée.

1. [Continuer](BIL_CR_INT_Q22)

## BIL_CR_INT_Q21_KO_B

Réponse enregistrée.

1. [Continuer](BIL_CR_INT_Q22)

## BIL_CR_INT_Q21_KO_C

Réponse enregistrée.

1. [Continuer](BIL_CR_INT_Q22)

## BIL_CR_INT_Q21_OK_D

`@score = calc(@score+1)`
`@score_t3 = calc(@score_t3+1)`
Réponse enregistrée.

1. [Continuer](BIL_CR_INT_Q22)

## BIL_CR_INT_Q22

### Question 22 sur 25

**Quelle est l'une des conditions pour passer l'examen du permis de conduire ?**

1. [Ne pas porter de lunettes.](BIL_CR_INT_Q22_KO_A)
2. [Être propriétaire d'une voiture.](BIL_CR_INT_Q22_KO_B)
3. [Avoir un emploi.](BIL_CR_INT_Q22_KO_C)
4. [Avoir l'âge minimum requis.](BIL_CR_INT_Q22_OK_D)

## BIL_CR_INT_Q22_KO_A

Réponse enregistrée.

1. [Continuer](BIL_CR_INT_Q23)

## BIL_CR_INT_Q22_KO_B

Réponse enregistrée.

1. [Continuer](BIL_CR_INT_Q23)

## BIL_CR_INT_Q22_KO_C

Réponse enregistrée.

1. [Continuer](BIL_CR_INT_Q23)

## BIL_CR_INT_Q22_OK_D

`@score = calc(@score+1)`
`@score_t5 = calc(@score_t5+1)`
Réponse enregistrée.

1. [Continuer](BIL_CR_INT_Q23)

## BIL_CR_INT_Q23

### Question 23 sur 25

**Où peut-on déposer un lave-vaisselle cassé ?**

1. [Sur le trottoir.](BIL_CR_INT_Q23_KO_A)
2. [Dans la rue.](BIL_CR_INT_Q23_KO_B)
3. [Dans la nature.](BIL_CR_INT_Q23_KO_C)
4. [Dans une déchèterie ou un point de collecte prévu pour les encombrants.](BIL_CR_INT_Q23_OK_D)

## BIL_CR_INT_Q23_KO_A

Réponse enregistrée.

1. [Continuer](BIL_CR_INT_Q24)

## BIL_CR_INT_Q23_KO_B

Réponse enregistrée.

1. [Continuer](BIL_CR_INT_Q24)

## BIL_CR_INT_Q23_KO_C

Réponse enregistrée.

1. [Continuer](BIL_CR_INT_Q24)

## BIL_CR_INT_Q23_OK_D

`@score = calc(@score+1)`
`@score_t5 = calc(@score_t5+1)`
Réponse enregistrée.

1. [Continuer](BIL_CR_INT_Q24)

## BIL_CR_INT_Q24

### Question 24 sur 25

**Quel pays a une frontière terrestre avec la France métropolitaine ?**

1. [Royaume-Uni.](BIL_CR_INT_Q24_KO_A)
2. [Portugal.](BIL_CR_INT_Q24_KO_B)
3. [Autriche.](BIL_CR_INT_Q24_KO_C)
4. [Espagne.](BIL_CR_INT_Q24_OK_D)

## BIL_CR_INT_Q24_KO_A

Réponse enregistrée.

1. [Continuer](BIL_CR_INT_Q25)

## BIL_CR_INT_Q24_KO_B

Réponse enregistrée.

1. [Continuer](BIL_CR_INT_Q25)

## BIL_CR_INT_Q24_KO_C

Réponse enregistrée.

1. [Continuer](BIL_CR_INT_Q25)

## BIL_CR_INT_Q24_OK_D

`@score = calc(@score+1)`
`@score_t4 = calc(@score_t4+1)`
Réponse enregistrée.

1. [Continuer](BIL_CR_INT_Q25)

## BIL_CR_INT_Q25

### Question 25 sur 25

**Pourquoi le principe de laïcité doit-il être respecté à l'école ?**

1. [Pour interdire toutes les religions.](BIL_CR_INT_Q25_KO_A)
2. [Pour favoriser une religion.](BIL_CR_INT_Q25_KO_B)
3. [Pour garantir la liberté de conscience de tous les élèves et assurer la neutralité de l'école.](BIL_CR_INT_Q25_OK_C)
4. [Pour empêcher les élèves de parler de leur religion et de la promouvoir.](BIL_CR_INT_Q25_KO_D)

## BIL_CR_INT_Q25_KO_A

Réponse enregistrée.

1. [Continuer](BIL_CR_INT_RESULT)

## BIL_CR_INT_Q25_KO_B

Réponse enregistrée.

1. [Continuer](BIL_CR_INT_RESULT)

## BIL_CR_INT_Q25_OK_C

`@score = calc(@score+1)`
`@score_t1 = calc(@score_t1+1)`
Réponse enregistrée.

1. [Continuer](BIL_CR_INT_RESULT)

## BIL_CR_INT_Q25_KO_D

Réponse enregistrée.

1. [Continuer](BIL_CR_INT_RESULT)

## BIL_CR_INT_RESULT

`@pourcentage = calc(@score*4)`
### 🎯 Votre résultat

Vous avez obtenu **@score/25**, soit **@pourcentage %**.

`if @score <= 9`
### Profil 1 — 🌱 Bases à construire

Commencez par les chapitres fondamentaux et privilégiez des séances courtes et régulières.
`endif`

`if @score >= 10 && @score <= 15`
### Profil 2 — 🧱 Connaissances en construction

Vos bases sont présentes. Consolidez les thèmes les moins maîtrisés avant de faire un examen blanc.
`endif`

`if @score >= 16 && @score <= 20`
### Profil 3 — 🚀 Niveau encourageant

Poursuivez avec des entraînements ciblés et des mises en situation.
`endif`

`if @score >= 21`
### Profil 4 — ⭐ Très bonne préparation

Votre niveau est solide. Travaillez surtout les pièges et réalisez un examen blanc complet.
`endif`

1. [Voir mes résultats par thématique](BIL_CR_INT_THEMES)

## BIL_CR_INT_THEMES

### 📊 Résultats par thématique

- **Principes et valeurs de la République** : @score_t1/5
- **Système institutionnel et politique français** : @score_t2/5
- **Droits et devoirs** : @score_t3/5
- **Histoire, géographie, patrimoine et culture** : @score_t4/5
- **Vivre dans la société française** : @score_t5/5

1. [Voir mes recommandations](BIL_CR_INT_RECO)

## BIL_CR_INT_RECO

### 🧭 Vos priorités de révision

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

Commencez par les priorités affichées ci-dessus, puis refaites un entraînement ciblé.

1. [📚 Commencer mes révisions](SCR_REV_MENU)
2. [📝 M’entraîner](SCR_ENT_MENU)
3. [🏠 Retour au menu principal](MENU_PRINCIPAL)

## BIL_CSP_DEC_Q01

### Question 1 sur 25

**Qui est élu lors des élections présidentielles ?**

1. [Le Premier ministre.](BIL_CSP_DEC_Q01_KO_A)
2. [Les députés.](BIL_CSP_DEC_Q01_KO_B)
3. [Les sénateurs.](BIL_CSP_DEC_Q01_KO_C)
4. [Le Président de la République.](BIL_CSP_DEC_Q01_OK_D)

## BIL_CSP_DEC_Q01_KO_A

Réponse enregistrée.

1. [Continuer](BIL_CSP_DEC_Q02)

## BIL_CSP_DEC_Q01_KO_B

Réponse enregistrée.

1. [Continuer](BIL_CSP_DEC_Q02)

## BIL_CSP_DEC_Q01_KO_C

Réponse enregistrée.

1. [Continuer](BIL_CSP_DEC_Q02)

## BIL_CSP_DEC_Q01_OK_D

`@score = calc(@score+1)`
`@score_t2 = calc(@score_t2+1)`
Réponse enregistrée.

1. [Continuer](BIL_CSP_DEC_Q02)

## BIL_CSP_DEC_Q02

### Question 2 sur 25

**Quel numéro d'urgence permet d'appeler le SAMU ?**

1. [17.](BIL_CSP_DEC_Q02_KO_A)
2. [18.](BIL_CSP_DEC_Q02_KO_B)
3. [15.](BIL_CSP_DEC_Q02_OK_C)
4. [112.](BIL_CSP_DEC_Q02_KO_D)

## BIL_CSP_DEC_Q02_KO_A

Réponse enregistrée.

1. [Continuer](BIL_CSP_DEC_Q03)

## BIL_CSP_DEC_Q02_KO_B

Réponse enregistrée.

1. [Continuer](BIL_CSP_DEC_Q03)

## BIL_CSP_DEC_Q02_OK_C

`@score = calc(@score+1)`
`@score_t5 = calc(@score_t5+1)`
Réponse enregistrée.

1. [Continuer](BIL_CSP_DEC_Q03)

## BIL_CSP_DEC_Q02_KO_D

Réponse enregistrée.

1. [Continuer](BIL_CSP_DEC_Q03)

## BIL_CSP_DEC_Q03

### Question 3 sur 25

**Qu'est-ce que la liberté d'expression ?**

1. [Le droit de tout dire sans aucune limite.](BIL_CSP_DEC_Q03_KO_A)
2. [Le droit d'exprimer ses idées et ses opinions dans le respect de la loi et des droits des autres.](BIL_CSP_DEC_Q03_OK_B)
3. [Le droit d'insulter les autres.](BIL_CSP_DEC_Q03_KO_C)
4. [Une liberté réservée aux journalistes.](BIL_CSP_DEC_Q03_KO_D)

## BIL_CSP_DEC_Q03_KO_A

Réponse enregistrée.

1. [Continuer](BIL_CSP_DEC_Q04)

## BIL_CSP_DEC_Q03_OK_B

`@score = calc(@score+1)`
`@score_t3 = calc(@score_t3+1)`
Réponse enregistrée.

1. [Continuer](BIL_CSP_DEC_Q04)

## BIL_CSP_DEC_Q03_KO_C

Réponse enregistrée.

1. [Continuer](BIL_CSP_DEC_Q04)

## BIL_CSP_DEC_Q03_KO_D

Réponse enregistrée.

1. [Continuer](BIL_CSP_DEC_Q04)

## BIL_CSP_DEC_Q04

### Question 4 sur 25

**Qui réside au palais de l'Élysée ?**

1. [Le Premier ministre.](BIL_CSP_DEC_Q04_KO_A)
2. [Le président de l'Assemblée nationale.](BIL_CSP_DEC_Q04_KO_B)
3. [Le maire de Paris.](BIL_CSP_DEC_Q04_KO_C)
4. [Le Président de la République.](BIL_CSP_DEC_Q04_OK_D)

## BIL_CSP_DEC_Q04_KO_A

Réponse enregistrée.

1. [Continuer](BIL_CSP_DEC_Q05)

## BIL_CSP_DEC_Q04_KO_B

Réponse enregistrée.

1. [Continuer](BIL_CSP_DEC_Q05)

## BIL_CSP_DEC_Q04_KO_C

Réponse enregistrée.

1. [Continuer](BIL_CSP_DEC_Q05)

## BIL_CSP_DEC_Q04_OK_D

`@score = calc(@score+1)`
`@score_t2 = calc(@score_t2+1)`
Réponse enregistrée.

1. [Continuer](BIL_CSP_DEC_Q05)

## BIL_CSP_DEC_Q05

### Question 5 sur 25

**Quelle est la langue officielle de la République française ?**

1. [L'anglais.](BIL_CSP_DEC_Q05_KO_A)
2. [Le latin.](BIL_CSP_DEC_Q05_KO_B)
3. [Le français.](BIL_CSP_DEC_Q05_OK_C)
4. [Toutes les langues parlées sur le territoire.](BIL_CSP_DEC_Q05_KO_D)

## BIL_CSP_DEC_Q05_KO_A

Réponse enregistrée.

1. [Continuer](BIL_CSP_DEC_Q06)

## BIL_CSP_DEC_Q05_KO_B

Réponse enregistrée.

1. [Continuer](BIL_CSP_DEC_Q06)

## BIL_CSP_DEC_Q05_OK_C

`@score = calc(@score+1)`
`@score_t1 = calc(@score_t1+1)`
Réponse enregistrée.

1. [Continuer](BIL_CSP_DEC_Q06)

## BIL_CSP_DEC_Q05_KO_D

Réponse enregistrée.

1. [Continuer](BIL_CSP_DEC_Q06)

## BIL_CSP_DEC_Q06

### Question 6 sur 25

**Faut-il réduire ses déchets ?**

1. [Non.](BIL_CSP_DEC_Q06_KO_A)
2. [Ce n'est pas important.](BIL_CSP_DEC_Q06_KO_B)
3. [Chacun fait comme il veut.](BIL_CSP_DEC_Q06_KO_C)
4. [Oui.](BIL_CSP_DEC_Q06_OK_D)

## BIL_CSP_DEC_Q06_KO_A

Réponse enregistrée.

1. [Continuer](BIL_CSP_DEC_Q07)

## BIL_CSP_DEC_Q06_KO_B

Réponse enregistrée.

1. [Continuer](BIL_CSP_DEC_Q07)

## BIL_CSP_DEC_Q06_KO_C

Réponse enregistrée.

1. [Continuer](BIL_CSP_DEC_Q07)

## BIL_CSP_DEC_Q06_OK_D

`@score = calc(@score+1)`
`@score_t3 = calc(@score_t3+1)`
Réponse enregistrée.

1. [Continuer](BIL_CSP_DEC_Q07)

## BIL_CSP_DEC_Q07

### Question 7 sur 25

**Sur quel continent se situe la France métropolitaine ?**

1. [L'Asie.](BIL_CSP_DEC_Q07_KO_A)
2. [L'Afrique.](BIL_CSP_DEC_Q07_KO_B)
3. [L'Amérique.](BIL_CSP_DEC_Q07_KO_C)
4. [L'Europe.](BIL_CSP_DEC_Q07_OK_D)

## BIL_CSP_DEC_Q07_KO_A

Réponse enregistrée.

1. [Continuer](BIL_CSP_DEC_Q08)

## BIL_CSP_DEC_Q07_KO_B

Réponse enregistrée.

1. [Continuer](BIL_CSP_DEC_Q08)

## BIL_CSP_DEC_Q07_KO_C

Réponse enregistrée.

1. [Continuer](BIL_CSP_DEC_Q08)

## BIL_CSP_DEC_Q07_OK_D

`@score = calc(@score+1)`
`@score_t4 = calc(@score_t4+1)`
Réponse enregistrée.

1. [Continuer](BIL_CSP_DEC_Q08)

## BIL_CSP_DEC_Q08

### Question 8 sur 25

**À partir de quel âge a-t-on le droit de voter ?**

1. [16 ans.](BIL_CSP_DEC_Q08_KO_A)
2. [17 ans.](BIL_CSP_DEC_Q08_KO_B)
3. [18 ans.](BIL_CSP_DEC_Q08_OK_C)
4. [21 ans.](BIL_CSP_DEC_Q08_KO_D)

## BIL_CSP_DEC_Q08_KO_A

Réponse enregistrée.

1. [Continuer](BIL_CSP_DEC_Q09)

## BIL_CSP_DEC_Q08_KO_B

Réponse enregistrée.

1. [Continuer](BIL_CSP_DEC_Q09)

## BIL_CSP_DEC_Q08_OK_C

`@score = calc(@score+1)`
`@score_t2 = calc(@score_t2+1)`
Réponse enregistrée.

1. [Continuer](BIL_CSP_DEC_Q09)

## BIL_CSP_DEC_Q08_KO_D

Réponse enregistrée.

1. [Continuer](BIL_CSP_DEC_Q09)

## BIL_CSP_DEC_Q09

### Question 9 sur 25

**Lequel de ces ensembles regroupe uniquement des symboles officiels de la République française ?**

1. [Le coq, la tour Eiffel, le béret et la baguette.](BIL_CSP_DEC_Q09_KO_A)
2. [Le drapeau tricolore, Marianne, la Marseillaise et la devise.](BIL_CSP_DEC_Q09_OK_B)
3. [La tour Eiffel et le Louvre.](BIL_CSP_DEC_Q09_KO_C)
4. [Le béret et la baguette.](BIL_CSP_DEC_Q09_KO_D)

## BIL_CSP_DEC_Q09_KO_A

Réponse enregistrée.

1. [Continuer](BIL_CSP_DEC_Q10)

## BIL_CSP_DEC_Q09_OK_B

`@score = calc(@score+1)`
`@score_t1 = calc(@score_t1+1)`
Réponse enregistrée.

1. [Continuer](BIL_CSP_DEC_Q10)

## BIL_CSP_DEC_Q09_KO_C

Réponse enregistrée.

1. [Continuer](BIL_CSP_DEC_Q10)

## BIL_CSP_DEC_Q09_KO_D

Réponse enregistrée.

1. [Continuer](BIL_CSP_DEC_Q10)

## BIL_CSP_DEC_Q10

### Question 10 sur 25

**Qui est aidé par France Travail ?**

1. [Les retraités uniquement.](BIL_CSP_DEC_Q10_KO_A)
2. [Les étudiants uniquement.](BIL_CSP_DEC_Q10_KO_B)
3. [Les employeurs uniquement.](BIL_CSP_DEC_Q10_KO_C)
4. [Les personnes à la recherche d'un emploi.](BIL_CSP_DEC_Q10_OK_D)

## BIL_CSP_DEC_Q10_KO_A

Réponse enregistrée.

1. [Continuer](BIL_CSP_DEC_Q11)

## BIL_CSP_DEC_Q10_KO_B

Réponse enregistrée.

1. [Continuer](BIL_CSP_DEC_Q11)

## BIL_CSP_DEC_Q10_KO_C

Réponse enregistrée.

1. [Continuer](BIL_CSP_DEC_Q11)

## BIL_CSP_DEC_Q10_OK_D

`@score = calc(@score+1)`
`@score_t5 = calc(@score_t5+1)`
Réponse enregistrée.

1. [Continuer](BIL_CSP_DEC_Q11)

## BIL_CSP_DEC_Q11

### Question 11 sur 25

**Quelle est la date de la fête nationale française ?**

1. [Le 11 novembre.](BIL_CSP_DEC_Q11_KO_A)
2. [Le 14 juillet.](BIL_CSP_DEC_Q11_OK_B)
3. [Le 8 mai.](BIL_CSP_DEC_Q11_KO_C)
4. [Le 25 décembre.](BIL_CSP_DEC_Q11_KO_D)

## BIL_CSP_DEC_Q11_KO_A

Réponse enregistrée.

1. [Continuer](BIL_CSP_DEC_Q12)

## BIL_CSP_DEC_Q11_OK_B

`@score = calc(@score+1)`
`@score_t1 = calc(@score_t1+1)`
Réponse enregistrée.

1. [Continuer](BIL_CSP_DEC_Q12)

## BIL_CSP_DEC_Q11_KO_C

Réponse enregistrée.

1. [Continuer](BIL_CSP_DEC_Q12)

## BIL_CSP_DEC_Q11_KO_D

Réponse enregistrée.

1. [Continuer](BIL_CSP_DEC_Q12)

## BIL_CSP_DEC_Q12

### Question 12 sur 25

**Quel est le nom de l'hymne national français ?**

1. [Liberté, Égalité, Fraternité.](BIL_CSP_DEC_Q12_KO_A)
2. [Le Chant du départ.](BIL_CSP_DEC_Q12_KO_B)
3. [La Marseillaise.](BIL_CSP_DEC_Q12_OK_C)
4. [Le drapeau tricolore.](BIL_CSP_DEC_Q12_KO_D)

## BIL_CSP_DEC_Q12_KO_A

Réponse enregistrée.

1. [Continuer](BIL_CSP_DEC_Q13)

## BIL_CSP_DEC_Q12_KO_B

Réponse enregistrée.

1. [Continuer](BIL_CSP_DEC_Q13)

## BIL_CSP_DEC_Q12_OK_C

`@score = calc(@score+1)`
`@score_t1 = calc(@score_t1+1)`
Réponse enregistrée.

1. [Continuer](BIL_CSP_DEC_Q13)

## BIL_CSP_DEC_Q12_KO_D

Réponse enregistrée.

1. [Continuer](BIL_CSP_DEC_Q13)

## BIL_CSP_DEC_Q13

### Question 13 sur 25

**Quel animal est un symbole traditionnel de la France ?**

1. [L'aigle.](BIL_CSP_DEC_Q13_KO_A)
2. [Le lion.](BIL_CSP_DEC_Q13_KO_B)
3. [Marianne.](BIL_CSP_DEC_Q13_KO_C)
4. [Le coq.](BIL_CSP_DEC_Q13_OK_D)

## BIL_CSP_DEC_Q13_KO_A

Réponse enregistrée.

1. [Continuer](BIL_CSP_DEC_Q14)

## BIL_CSP_DEC_Q13_KO_B

Réponse enregistrée.

1. [Continuer](BIL_CSP_DEC_Q14)

## BIL_CSP_DEC_Q13_KO_C

Réponse enregistrée.

1. [Continuer](BIL_CSP_DEC_Q14)

## BIL_CSP_DEC_Q13_OK_D

`@score = calc(@score+1)`
`@score_t1 = calc(@score_t1+1)`
Réponse enregistrée.

1. [Continuer](BIL_CSP_DEC_Q14)

## BIL_CSP_DEC_Q14

### Question 14 sur 25

**En France, est-ce légal d'être marié à plusieurs personnes en même temps ?**

1. [Oui.](BIL_CSP_DEC_Q14_KO_A)
2. [Oui, avec l'accord des époux.](BIL_CSP_DEC_Q14_KO_B)
3. [Oui, selon la religion.](BIL_CSP_DEC_Q14_KO_C)
4. [Non.](BIL_CSP_DEC_Q14_OK_D)

## BIL_CSP_DEC_Q14_KO_A

Réponse enregistrée.

1. [Continuer](BIL_CSP_DEC_Q15)

## BIL_CSP_DEC_Q14_KO_B

Réponse enregistrée.

1. [Continuer](BIL_CSP_DEC_Q15)

## BIL_CSP_DEC_Q14_KO_C

Réponse enregistrée.

1. [Continuer](BIL_CSP_DEC_Q15)

## BIL_CSP_DEC_Q14_OK_D

`@score = calc(@score+1)`
`@score_t3 = calc(@score_t3+1)`
Réponse enregistrée.

1. [Continuer](BIL_CSP_DEC_Q15)

## BIL_CSP_DEC_Q15

### Question 15 sur 25

**Quel est le rôle de la gendarmerie ?**

1. [Voter les lois.](BIL_CSP_DEC_Q15_KO_A)
2. [Juger les personnes.](BIL_CSP_DEC_Q15_KO_B)
3. [Veiller à la sécurité des personnes et des biens et faire respecter la loi.](BIL_CSP_DEC_Q15_OK_C)
4. [Gouverner le pays.](BIL_CSP_DEC_Q15_KO_D)

## BIL_CSP_DEC_Q15_KO_A

Réponse enregistrée.

1. [Continuer](BIL_CSP_DEC_Q16)

## BIL_CSP_DEC_Q15_KO_B

Réponse enregistrée.

1. [Continuer](BIL_CSP_DEC_Q16)

## BIL_CSP_DEC_Q15_OK_C

`@score = calc(@score+1)`
`@score_t3 = calc(@score_t3+1)`
Réponse enregistrée.

1. [Continuer](BIL_CSP_DEC_Q16)

## BIL_CSP_DEC_Q15_KO_D

Réponse enregistrée.

1. [Continuer](BIL_CSP_DEC_Q16)

## BIL_CSP_DEC_Q16

### Question 16 sur 25

**Dans quelle ville se trouve la tour Eiffel ?**

1. [Lyon.](BIL_CSP_DEC_Q16_KO_A)
2. [Marseille.](BIL_CSP_DEC_Q16_KO_B)
3. [Strasbourg.](BIL_CSP_DEC_Q16_KO_C)
4. [Paris.](BIL_CSP_DEC_Q16_OK_D)

## BIL_CSP_DEC_Q16_KO_A

Réponse enregistrée.

1. [Continuer](BIL_CSP_DEC_Q17)

## BIL_CSP_DEC_Q16_KO_B

Réponse enregistrée.

1. [Continuer](BIL_CSP_DEC_Q17)

## BIL_CSP_DEC_Q16_KO_C

Réponse enregistrée.

1. [Continuer](BIL_CSP_DEC_Q17)

## BIL_CSP_DEC_Q16_OK_D

`@score = calc(@score+1)`
`@score_t4 = calc(@score_t4+1)`
Réponse enregistrée.

1. [Continuer](BIL_CSP_DEC_Q17)

## BIL_CSP_DEC_Q17

### Question 17 sur 25

**Pour qui l'école est-elle obligatoire ?**

1. [Seulement les Français.](BIL_CSP_DEC_Q17_KO_A)
2. [Seulement les filles.](BIL_CSP_DEC_Q17_KO_B)
3. [Seulement les enfants des écoles publiques.](BIL_CSP_DEC_Q17_KO_C)
4. [Pour tous les enfants de 3 à 16 ans résidant en France.](BIL_CSP_DEC_Q17_OK_D)

## BIL_CSP_DEC_Q17_KO_A

Réponse enregistrée.

1. [Continuer](BIL_CSP_DEC_Q18)

## BIL_CSP_DEC_Q17_KO_B

Réponse enregistrée.

1. [Continuer](BIL_CSP_DEC_Q18)

## BIL_CSP_DEC_Q17_KO_C

Réponse enregistrée.

1. [Continuer](BIL_CSP_DEC_Q18)

## BIL_CSP_DEC_Q17_OK_D

`@score = calc(@score+1)`
`@score_t5 = calc(@score_t5+1)`
Réponse enregistrée.

1. [Continuer](BIL_CSP_DEC_Q18)

## BIL_CSP_DEC_Q18

### Question 18 sur 25

**Quel diplôme obtient-on à la fin du lycée ?**

1. [Le brevet.](BIL_CSP_DEC_Q18_KO_A)
2. [La licence.](BIL_CSP_DEC_Q18_KO_B)
3. [Le CAP.](BIL_CSP_DEC_Q18_KO_C)
4. [Le baccalauréat.](BIL_CSP_DEC_Q18_OK_D)

## BIL_CSP_DEC_Q18_KO_A

Réponse enregistrée.

1. [Continuer](BIL_CSP_DEC_Q19)

## BIL_CSP_DEC_Q18_KO_B

Réponse enregistrée.

1. [Continuer](BIL_CSP_DEC_Q19)

## BIL_CSP_DEC_Q18_KO_C

Réponse enregistrée.

1. [Continuer](BIL_CSP_DEC_Q19)

## BIL_CSP_DEC_Q18_OK_D

`@score = calc(@score+1)`
`@score_t5 = calc(@score_t5+1)`
Réponse enregistrée.

1. [Continuer](BIL_CSP_DEC_Q19)

## BIL_CSP_DEC_Q19

### Question 19 sur 25

**Une femme peut-elle avorter ?**

1. [Non.](BIL_CSP_DEC_Q19_KO_A)
2. [Seulement avec l'autorisation du mari.](BIL_CSP_DEC_Q19_KO_B)
3. [Seulement si elle est mariée.](BIL_CSP_DEC_Q19_KO_C)
4. [Oui, dans les conditions prévues par la loi.](BIL_CSP_DEC_Q19_OK_D)

## BIL_CSP_DEC_Q19_KO_A

Réponse enregistrée.

1. [Continuer](BIL_CSP_DEC_Q20)

## BIL_CSP_DEC_Q19_KO_B

Réponse enregistrée.

1. [Continuer](BIL_CSP_DEC_Q20)

## BIL_CSP_DEC_Q19_KO_C

Réponse enregistrée.

1. [Continuer](BIL_CSP_DEC_Q20)

## BIL_CSP_DEC_Q19_OK_D

`@score = calc(@score+1)`
`@score_t3 = calc(@score_t3+1)`
Réponse enregistrée.

1. [Continuer](BIL_CSP_DEC_Q20)

## BIL_CSP_DEC_Q20

### Question 20 sur 25

**Qui nomme le Premier ministre ?**

1. [Les députés.](BIL_CSP_DEC_Q20_KO_A)
2. [Le Parlement.](BIL_CSP_DEC_Q20_KO_B)
3. [Les citoyens.](BIL_CSP_DEC_Q20_KO_C)
4. [Le Président de la République.](BIL_CSP_DEC_Q20_OK_D)

## BIL_CSP_DEC_Q20_KO_A

Réponse enregistrée.

1. [Continuer](BIL_CSP_DEC_Q21)

## BIL_CSP_DEC_Q20_KO_B

Réponse enregistrée.

1. [Continuer](BIL_CSP_DEC_Q21)

## BIL_CSP_DEC_Q20_KO_C

Réponse enregistrée.

1. [Continuer](BIL_CSP_DEC_Q21)

## BIL_CSP_DEC_Q20_OK_D

`@score = calc(@score+1)`
`@score_t2 = calc(@score_t2+1)`
Réponse enregistrée.

1. [Continuer](BIL_CSP_DEC_Q21)

## BIL_CSP_DEC_Q21

### Question 21 sur 25

**Quand célèbre-t-on Noël ?**

1. [Le 1er janvier.](BIL_CSP_DEC_Q21_KO_A)
2. [Le 14 juillet.](BIL_CSP_DEC_Q21_KO_B)
3. [Le 11 novembre.](BIL_CSP_DEC_Q21_KO_C)
4. [Le 25 décembre.](BIL_CSP_DEC_Q21_OK_D)

## BIL_CSP_DEC_Q21_KO_A

Réponse enregistrée.

1. [Continuer](BIL_CSP_DEC_Q22)

## BIL_CSP_DEC_Q21_KO_B

Réponse enregistrée.

1. [Continuer](BIL_CSP_DEC_Q22)

## BIL_CSP_DEC_Q21_KO_C

Réponse enregistrée.

1. [Continuer](BIL_CSP_DEC_Q22)

## BIL_CSP_DEC_Q21_OK_D

`@score = calc(@score+1)`
`@score_t4 = calc(@score_t4+1)`
Réponse enregistrée.

1. [Continuer](BIL_CSP_DEC_Q22)

## BIL_CSP_DEC_Q22

### Question 22 sur 25

**Dans quels établissements scolaires vont les élèves après l'école élémentaire ?**

1. [Le lycée.](BIL_CSP_DEC_Q22_KO_A)
2. [L'université.](BIL_CSP_DEC_Q22_KO_B)
3. [L'école maternelle.](BIL_CSP_DEC_Q22_KO_C)
4. [Le collège.](BIL_CSP_DEC_Q22_OK_D)

## BIL_CSP_DEC_Q22_KO_A

Réponse enregistrée.

1. [Continuer](BIL_CSP_DEC_Q23)

## BIL_CSP_DEC_Q22_KO_B

Réponse enregistrée.

1. [Continuer](BIL_CSP_DEC_Q23)

## BIL_CSP_DEC_Q22_KO_C

Réponse enregistrée.

1. [Continuer](BIL_CSP_DEC_Q23)

## BIL_CSP_DEC_Q22_OK_D

`@score = calc(@score+1)`
`@score_t5 = calc(@score_t5+1)`
Réponse enregistrée.

1. [Continuer](BIL_CSP_DEC_Q23)

## BIL_CSP_DEC_Q23

### Question 23 sur 25

**Qui était Napoléon Ier ?**

1. [Un roi.](BIL_CSP_DEC_Q23_KO_A)
2. [Un président.](BIL_CSP_DEC_Q23_KO_B)
3. [Un empereur français.](BIL_CSP_DEC_Q23_OK_C)
4. [Un écrivain.](BIL_CSP_DEC_Q23_KO_D)

## BIL_CSP_DEC_Q23_KO_A

Réponse enregistrée.

1. [Continuer](BIL_CSP_DEC_Q24)

## BIL_CSP_DEC_Q23_KO_B

Réponse enregistrée.

1. [Continuer](BIL_CSP_DEC_Q24)

## BIL_CSP_DEC_Q23_OK_C

`@score = calc(@score+1)`
`@score_t4 = calc(@score_t4+1)`
Réponse enregistrée.

1. [Continuer](BIL_CSP_DEC_Q24)

## BIL_CSP_DEC_Q23_KO_D

Réponse enregistrée.

1. [Continuer](BIL_CSP_DEC_Q24)

## BIL_CSP_DEC_Q24

### Question 24 sur 25

**En quelle année a débuté la Révolution française ?**

1. [1792.](BIL_CSP_DEC_Q24_KO_A)
2. [1789.](BIL_CSP_DEC_Q24_OK_B)
3. [1815.](BIL_CSP_DEC_Q24_KO_C)
4. [1848.](BIL_CSP_DEC_Q24_KO_D)

## BIL_CSP_DEC_Q24_KO_A

Réponse enregistrée.

1. [Continuer](BIL_CSP_DEC_Q25)

## BIL_CSP_DEC_Q24_OK_B

`@score = calc(@score+1)`
`@score_t4 = calc(@score_t4+1)`
Réponse enregistrée.

1. [Continuer](BIL_CSP_DEC_Q25)

## BIL_CSP_DEC_Q24_KO_C

Réponse enregistrée.

1. [Continuer](BIL_CSP_DEC_Q25)

## BIL_CSP_DEC_Q24_KO_D

Réponse enregistrée.

1. [Continuer](BIL_CSP_DEC_Q25)

## BIL_CSP_DEC_Q25

### Question 25 sur 25

**A-t-on le droit de ne pas respecter une loi ?**

1. [Oui.](BIL_CSP_DEC_Q25_KO_A)
2. [Oui, si l'on n'est pas d'accord.](BIL_CSP_DEC_Q25_KO_B)
3. [Non, tout le monde doit respecter la loi.](BIL_CSP_DEC_Q25_OK_C)
4. [Oui, selon sa religion.](BIL_CSP_DEC_Q25_KO_D)

## BIL_CSP_DEC_Q25_KO_A

Réponse enregistrée.

1. [Continuer](BIL_CSP_DEC_RESULT)

## BIL_CSP_DEC_Q25_KO_B

Réponse enregistrée.

1. [Continuer](BIL_CSP_DEC_RESULT)

## BIL_CSP_DEC_Q25_OK_C

`@score = calc(@score+1)`
`@score_t2 = calc(@score_t2+1)`
Réponse enregistrée.

1. [Continuer](BIL_CSP_DEC_RESULT)

## BIL_CSP_DEC_Q25_KO_D

Réponse enregistrée.

1. [Continuer](BIL_CSP_DEC_RESULT)

## BIL_CSP_DEC_RESULT

`@pourcentage = calc(@score*4)`
### 🎯 Votre résultat

Vous avez obtenu **@score/25**, soit **@pourcentage %**.

`if @score <= 9`
### Profil 1 — 🌱 Bases à construire

Commencez par les chapitres fondamentaux et privilégiez des séances courtes et régulières.
`endif`

`if @score >= 10 && @score <= 15`
### Profil 2 — 🧱 Connaissances en construction

Vos bases sont présentes. Consolidez les thèmes les moins maîtrisés avant de faire un examen blanc.
`endif`

`if @score >= 16 && @score <= 20`
### Profil 3 — 🚀 Niveau encourageant

Poursuivez avec des entraînements ciblés et des mises en situation.
`endif`

`if @score >= 21`
### Profil 4 — ⭐ Très bonne préparation

Votre niveau est solide. Travaillez surtout les pièges et réalisez un examen blanc complet.
`endif`

1. [Voir mes résultats par thématique](BIL_CSP_DEC_THEMES)

## BIL_CSP_DEC_THEMES

### 📊 Résultats par thématique

- **Principes et valeurs de la République** : @score_t1/5
- **Système institutionnel et politique français** : @score_t2/5
- **Droits et devoirs** : @score_t3/5
- **Histoire, géographie, patrimoine et culture** : @score_t4/5
- **Vivre dans la société française** : @score_t5/5

1. [Voir mes recommandations](BIL_CSP_DEC_RECO)

## BIL_CSP_DEC_RECO

### 🧭 Vos priorités de révision

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

Commencez par les priorités affichées ci-dessus, puis refaites un entraînement ciblé.

1. [📚 Commencer mes révisions](SCR_REV_MENU)
2. [📝 M’entraîner](SCR_ENT_MENU)
3. [🏠 Retour au menu principal](MENU_PRINCIPAL)

## BIL_CSP_EQ_Q01

### Question 1 sur 25

**Le travail non déclaré est :**

1. [Autorisé si le salarié est d'accord.](BIL_CSP_EQ_Q01_KO_A)
2. [Interdit par la loi.](BIL_CSP_EQ_Q01_OK_B)
3. [Autorisé pour les petits emplois.](BIL_CSP_EQ_Q01_KO_C)
4. [Obligatoire pour les étudiants.](BIL_CSP_EQ_Q01_KO_D)

## BIL_CSP_EQ_Q01_KO_A

Réponse enregistrée.

1. [Continuer](BIL_CSP_EQ_Q02)

## BIL_CSP_EQ_Q01_OK_B

`@score = calc(@score+1)`
`@score_t5 = calc(@score_t5+1)`
Réponse enregistrée.

1. [Continuer](BIL_CSP_EQ_Q02)

## BIL_CSP_EQ_Q01_KO_C

Réponse enregistrée.

1. [Continuer](BIL_CSP_EQ_Q02)

## BIL_CSP_EQ_Q01_KO_D

Réponse enregistrée.

1. [Continuer](BIL_CSP_EQ_Q02)

## BIL_CSP_EQ_Q02

### Question 2 sur 25

**Parmi ces textes, lequel garantit les droits et libertés en France ?**

1. [Le Code civil.](BIL_CSP_EQ_Q02_KO_A)
2. [Le Code du travail.](BIL_CSP_EQ_Q02_KO_B)
3. [La Constitution et son bloc de constitutionnalité.](BIL_CSP_EQ_Q02_OK_C)
4. [Le Code pénal.](BIL_CSP_EQ_Q02_KO_D)

## BIL_CSP_EQ_Q02_KO_A

Réponse enregistrée.

1. [Continuer](BIL_CSP_EQ_Q03)

## BIL_CSP_EQ_Q02_KO_B

Réponse enregistrée.

1. [Continuer](BIL_CSP_EQ_Q03)

## BIL_CSP_EQ_Q02_OK_C

`@score = calc(@score+1)`
`@score_t3 = calc(@score_t3+1)`
Réponse enregistrée.

1. [Continuer](BIL_CSP_EQ_Q03)

## BIL_CSP_EQ_Q02_KO_D

Réponse enregistrée.

1. [Continuer](BIL_CSP_EQ_Q03)

## BIL_CSP_EQ_Q03

### Question 3 sur 25

**Quel océan borde la côte ouest française ?**

1. [L'océan Pacifique.](BIL_CSP_EQ_Q03_KO_A)
2. [L'océan Indien.](BIL_CSP_EQ_Q03_KO_B)
3. [L'océan Arctique.](BIL_CSP_EQ_Q03_KO_C)
4. [L'océan Atlantique.](BIL_CSP_EQ_Q03_OK_D)

## BIL_CSP_EQ_Q03_KO_A

Réponse enregistrée.

1. [Continuer](BIL_CSP_EQ_Q04)

## BIL_CSP_EQ_Q03_KO_B

Réponse enregistrée.

1. [Continuer](BIL_CSP_EQ_Q04)

## BIL_CSP_EQ_Q03_KO_C

Réponse enregistrée.

1. [Continuer](BIL_CSP_EQ_Q04)

## BIL_CSP_EQ_Q03_OK_D

`@score = calc(@score+1)`
`@score_t4 = calc(@score_t4+1)`
Réponse enregistrée.

1. [Continuer](BIL_CSP_EQ_Q04)

## BIL_CSP_EQ_Q04

### Question 4 sur 25

**A-t-on le droit d'insulter publiquement quelqu'un parce qu'il est différent (handicap, apparence physique, sexe...) ?**

1. [Oui, c'est autorisé.](BIL_CSP_EQ_Q04_KO_A)
2. [Oui, si c'est présenté comme une plaisanterie.](BIL_CSP_EQ_Q04_KO_B)
3. [Non, les insultes et les discriminations sont interdites par la loi.](BIL_CSP_EQ_Q04_OK_C)
4. [Oui, cela dépend de la personne visée.](BIL_CSP_EQ_Q04_KO_D)

## BIL_CSP_EQ_Q04_KO_A

Réponse enregistrée.

1. [Continuer](BIL_CSP_EQ_Q05)

## BIL_CSP_EQ_Q04_KO_B

Réponse enregistrée.

1. [Continuer](BIL_CSP_EQ_Q05)

## BIL_CSP_EQ_Q04_OK_C

`@score = calc(@score+1)`
`@score_t1 = calc(@score_t1+1)`
Réponse enregistrée.

1. [Continuer](BIL_CSP_EQ_Q05)

## BIL_CSP_EQ_Q04_KO_D

Réponse enregistrée.

1. [Continuer](BIL_CSP_EQ_Q05)

## BIL_CSP_EQ_Q05

### Question 5 sur 25

**Où se situe la Corse ?**

1. [Dans l'océan Atlantique.](BIL_CSP_EQ_Q05_KO_A)
2. [Dans la Manche.](BIL_CSP_EQ_Q05_KO_B)
3. [En mer Méditerranée.](BIL_CSP_EQ_Q05_OK_C)
4. [Dans la mer du Nord.](BIL_CSP_EQ_Q05_KO_D)

## BIL_CSP_EQ_Q05_KO_A

Réponse enregistrée.

1. [Continuer](BIL_CSP_EQ_Q06)

## BIL_CSP_EQ_Q05_KO_B

Réponse enregistrée.

1. [Continuer](BIL_CSP_EQ_Q06)

## BIL_CSP_EQ_Q05_OK_C

`@score = calc(@score+1)`
`@score_t4 = calc(@score_t4+1)`
Réponse enregistrée.

1. [Continuer](BIL_CSP_EQ_Q06)

## BIL_CSP_EQ_Q05_KO_D

Réponse enregistrée.

1. [Continuer](BIL_CSP_EQ_Q06)

## BIL_CSP_EQ_Q06

### Question 6 sur 25

**Les enfants qui ne parlent pas français :**

1. [Ne peuvent pas être scolarisés tant qu'ils ne parlent pas français.](BIL_CSP_EQ_Q06_KO_A)
2. [Peuvent être accueillis à l'école et bénéficier d'un accompagnement pour apprendre le français.](BIL_CSP_EQ_Q06_OK_B)
3. [Doivent apprendre seuls le français avant de s'inscrire à l'école.](BIL_CSP_EQ_Q06_KO_C)
4. [Sont automatiquement orientés vers un établissement spécialisé.](BIL_CSP_EQ_Q06_KO_D)

## BIL_CSP_EQ_Q06_KO_A

Réponse enregistrée.

1. [Continuer](BIL_CSP_EQ_Q07)

## BIL_CSP_EQ_Q06_OK_B

`@score = calc(@score+1)`
`@score_t5 = calc(@score_t5+1)`
Réponse enregistrée.

1. [Continuer](BIL_CSP_EQ_Q07)

## BIL_CSP_EQ_Q06_KO_C

Réponse enregistrée.

1. [Continuer](BIL_CSP_EQ_Q07)

## BIL_CSP_EQ_Q06_KO_D

Réponse enregistrée.

1. [Continuer](BIL_CSP_EQ_Q07)

## BIL_CSP_EQ_Q07

### Question 7 sur 25

**Après avoir obtenu le permis de conduire, que faut-il faire pour pouvoir conduire sa voiture ?**

1. [Il suffit d'acheter une voiture.](BIL_CSP_EQ_Q07_KO_A)
2. [Faire le plein.](BIL_CSP_EQ_Q07_KO_B)
3. [Payer ses impôts.](BIL_CSP_EQ_Q07_KO_C)
4. [Souscrire une assurance automobile.](BIL_CSP_EQ_Q07_OK_D)

## BIL_CSP_EQ_Q07_KO_A

Réponse enregistrée.

1. [Continuer](BIL_CSP_EQ_Q08)

## BIL_CSP_EQ_Q07_KO_B

Réponse enregistrée.

1. [Continuer](BIL_CSP_EQ_Q08)

## BIL_CSP_EQ_Q07_KO_C

Réponse enregistrée.

1. [Continuer](BIL_CSP_EQ_Q08)

## BIL_CSP_EQ_Q07_OK_D

`@score = calc(@score+1)`
`@score_t5 = calc(@score_t5+1)`
Réponse enregistrée.

1. [Continuer](BIL_CSP_EQ_Q08)

## BIL_CSP_EQ_Q08

### Question 8 sur 25

**Que se passe-t-il si un ministre ne respecte pas la loi ?**

1. [Rien.](BIL_CSP_EQ_Q08_KO_A)
2. [Il est protégé par sa fonction.](BIL_CSP_EQ_Q08_KO_B)
3. [Il peut être poursuivi et sanctionné par la justice.](BIL_CSP_EQ_Q08_OK_C)
4. [Seul le Président peut le sanctionner.](BIL_CSP_EQ_Q08_KO_D)

## BIL_CSP_EQ_Q08_KO_A

Réponse enregistrée.

1. [Continuer](BIL_CSP_EQ_Q09)

## BIL_CSP_EQ_Q08_KO_B

Réponse enregistrée.

1. [Continuer](BIL_CSP_EQ_Q09)

## BIL_CSP_EQ_Q08_OK_C

`@score = calc(@score+1)`
`@score_t2 = calc(@score_t2+1)`
Réponse enregistrée.

1. [Continuer](BIL_CSP_EQ_Q09)

## BIL_CSP_EQ_Q08_KO_D

Réponse enregistrée.

1. [Continuer](BIL_CSP_EQ_Q09)

## BIL_CSP_EQ_Q09

### Question 9 sur 25

**Une personne étrangère en situation régulière peut créer son entreprise :**

1. [Non, jamais.](BIL_CSP_EQ_Q09_KO_A)
2. [Non, sauf accord préfectoral spécial.](BIL_CSP_EQ_Q09_KO_B)
3. [Non, seuls les Français peuvent créer une entreprise.](BIL_CSP_EQ_Q09_KO_C)
4. [Oui, si elle respecte les conditions prévues par la loi.](BIL_CSP_EQ_Q09_OK_D)

## BIL_CSP_EQ_Q09_KO_A

Réponse enregistrée.

1. [Continuer](BIL_CSP_EQ_Q10)

## BIL_CSP_EQ_Q09_KO_B

Réponse enregistrée.

1. [Continuer](BIL_CSP_EQ_Q10)

## BIL_CSP_EQ_Q09_KO_C

Réponse enregistrée.

1. [Continuer](BIL_CSP_EQ_Q10)

## BIL_CSP_EQ_Q09_OK_D

`@score = calc(@score+1)`
`@score_t5 = calc(@score_t5+1)`
Réponse enregistrée.

1. [Continuer](BIL_CSP_EQ_Q10)

## BIL_CSP_EQ_Q10

### Question 10 sur 25

**Qu'est-ce que l'égalité ?**

1. [Le fait que tout le monde soit identique.](BIL_CSP_EQ_Q10_KO_A)
2. [Le fait que toutes les personnes soient égales devant la loi et disposent des mêmes droits.](BIL_CSP_EQ_Q10_OK_B)
3. [Le fait que tout le monde gagne le même salaire.](BIL_CSP_EQ_Q10_KO_C)
4. [Le fait que chacun doive penser la même chose.](BIL_CSP_EQ_Q10_KO_D)

## BIL_CSP_EQ_Q10_KO_A

Réponse enregistrée.

1. [Continuer](BIL_CSP_EQ_Q11)

## BIL_CSP_EQ_Q10_OK_B

`@score = calc(@score+1)`
`@score_t1 = calc(@score_t1+1)`
Réponse enregistrée.

1. [Continuer](BIL_CSP_EQ_Q11)

## BIL_CSP_EQ_Q10_KO_C

Réponse enregistrée.

1. [Continuer](BIL_CSP_EQ_Q11)

## BIL_CSP_EQ_Q10_KO_D

Réponse enregistrée.

1. [Continuer](BIL_CSP_EQ_Q11)

## BIL_CSP_EQ_Q11

### Question 11 sur 25

**La peine de mort est :**

1. [Autorisée dans certains cas.](BIL_CSP_EQ_Q11_KO_A)
2. [Interdite en France.](BIL_CSP_EQ_Q11_OK_B)
3. [Décidée par le Président de la République.](BIL_CSP_EQ_Q11_KO_C)
4. [Réservée aux crimes les plus graves.](BIL_CSP_EQ_Q11_KO_D)

## BIL_CSP_EQ_Q11_KO_A

Réponse enregistrée.

1. [Continuer](BIL_CSP_EQ_Q12)

## BIL_CSP_EQ_Q11_OK_B

`@score = calc(@score+1)`
`@score_t3 = calc(@score_t3+1)`
Réponse enregistrée.

1. [Continuer](BIL_CSP_EQ_Q12)

## BIL_CSP_EQ_Q11_KO_C

Réponse enregistrée.

1. [Continuer](BIL_CSP_EQ_Q12)

## BIL_CSP_EQ_Q11_KO_D

Réponse enregistrée.

1. [Continuer](BIL_CSP_EQ_Q12)

## BIL_CSP_EQ_Q12

### Question 12 sur 25

**Comment s'appelle le texte qui énonce les droits et devoirs des personnes résidant en France ?**

1. [La Constitution.](BIL_CSP_EQ_Q12_KO_A)
2. [Le Code civil.](BIL_CSP_EQ_Q12_KO_B)
3. [La Déclaration des droits de l'homme et du citoyen de 1789.](BIL_CSP_EQ_Q12_OK_C)
4. [Le Contrat d'engagement au respect des principes de la République.](BIL_CSP_EQ_Q12_KO_D)

## BIL_CSP_EQ_Q12_KO_A

Réponse enregistrée.

1. [Continuer](BIL_CSP_EQ_Q13)

## BIL_CSP_EQ_Q12_KO_B

Réponse enregistrée.

1. [Continuer](BIL_CSP_EQ_Q13)

## BIL_CSP_EQ_Q12_OK_C

`@score = calc(@score+1)`
`@score_t3 = calc(@score_t3+1)`
Réponse enregistrée.

1. [Continuer](BIL_CSP_EQ_Q13)

## BIL_CSP_EQ_Q12_KO_D

Réponse enregistrée.

1. [Continuer](BIL_CSP_EQ_Q13)

## BIL_CSP_EQ_Q13

### Question 13 sur 25

**Qui a été le premier Président élu sous la Ve République ?**

1. [Georges Pompidou.](BIL_CSP_EQ_Q13_KO_A)
2. [François Mitterrand.](BIL_CSP_EQ_Q13_KO_B)
3. [Jacques Chirac.](BIL_CSP_EQ_Q13_KO_C)
4. [Charles de Gaulle.](BIL_CSP_EQ_Q13_OK_D)

## BIL_CSP_EQ_Q13_KO_A

Réponse enregistrée.

1. [Continuer](BIL_CSP_EQ_Q14)

## BIL_CSP_EQ_Q13_KO_B

Réponse enregistrée.

1. [Continuer](BIL_CSP_EQ_Q14)

## BIL_CSP_EQ_Q13_KO_C

Réponse enregistrée.

1. [Continuer](BIL_CSP_EQ_Q14)

## BIL_CSP_EQ_Q13_OK_D

`@score = calc(@score+1)`
`@score_t4 = calc(@score_t4+1)`
Réponse enregistrée.

1. [Continuer](BIL_CSP_EQ_Q14)

## BIL_CSP_EQ_Q14

### Question 14 sur 25

**L'autorité judiciaire est exercée par :**

1. [Les préfets.](BIL_CSP_EQ_Q14_KO_A)
2. [Les juges.](BIL_CSP_EQ_Q14_OK_B)
3. [Les maires.](BIL_CSP_EQ_Q14_KO_C)
4. [Les députés.](BIL_CSP_EQ_Q14_KO_D)

## BIL_CSP_EQ_Q14_KO_A

Réponse enregistrée.

1. [Continuer](BIL_CSP_EQ_Q15)

## BIL_CSP_EQ_Q14_OK_B

`@score = calc(@score+1)`
`@score_t2 = calc(@score_t2+1)`
Réponse enregistrée.

1. [Continuer](BIL_CSP_EQ_Q15)

## BIL_CSP_EQ_Q14_KO_C

Réponse enregistrée.

1. [Continuer](BIL_CSP_EQ_Q15)

## BIL_CSP_EQ_Q14_KO_D

Réponse enregistrée.

1. [Continuer](BIL_CSP_EQ_Q15)

## BIL_CSP_EQ_Q15

### Question 15 sur 25

**En quelle année l'esclavage a-t-il été aboli définitivement en France ?**

1. [1789.](BIL_CSP_EQ_Q15_KO_A)
2. [1815.](BIL_CSP_EQ_Q15_KO_B)
3. [1905.](BIL_CSP_EQ_Q15_KO_C)
4. [1848.](BIL_CSP_EQ_Q15_OK_D)

## BIL_CSP_EQ_Q15_KO_A

Réponse enregistrée.

1. [Continuer](BIL_CSP_EQ_Q16)

## BIL_CSP_EQ_Q15_KO_B

Réponse enregistrée.

1. [Continuer](BIL_CSP_EQ_Q16)

## BIL_CSP_EQ_Q15_KO_C

Réponse enregistrée.

1. [Continuer](BIL_CSP_EQ_Q16)

## BIL_CSP_EQ_Q15_OK_D

`@score = calc(@score+1)`
`@score_t4 = calc(@score_t4+1)`
Réponse enregistrée.

1. [Continuer](BIL_CSP_EQ_Q16)

## BIL_CSP_EQ_Q16

### Question 16 sur 25

**Quelle liberté permet à une personne de ne pas avoir de religion ?**

1. [La liberté d'expression.](BIL_CSP_EQ_Q16_KO_A)
2. [La liberté de circulation.](BIL_CSP_EQ_Q16_KO_B)
3. [La liberté de conscience.](BIL_CSP_EQ_Q16_OK_C)
4. [La liberté de réunion.](BIL_CSP_EQ_Q16_KO_D)

## BIL_CSP_EQ_Q16_KO_A

Réponse enregistrée.

1. [Continuer](BIL_CSP_EQ_Q17)

## BIL_CSP_EQ_Q16_KO_B

Réponse enregistrée.

1. [Continuer](BIL_CSP_EQ_Q17)

## BIL_CSP_EQ_Q16_OK_C

`@score = calc(@score+1)`
`@score_t3 = calc(@score_t3+1)`
Réponse enregistrée.

1. [Continuer](BIL_CSP_EQ_Q17)

## BIL_CSP_EQ_Q16_KO_D

Réponse enregistrée.

1. [Continuer](BIL_CSP_EQ_Q17)

## BIL_CSP_EQ_Q17

### Question 17 sur 25

**Le principe d'égalité signifie que :**

1. [Toutes les personnes sont égales devant la loi et bénéficient des mêmes droits.](BIL_CSP_EQ_Q17_OK_A)
2. [Tout le monde est identique.](BIL_CSP_EQ_Q17_KO_B)
3. [Tout le monde doit gagner le même salaire.](BIL_CSP_EQ_Q17_KO_C)
4. [Tout le monde doit avoir la même opinion.](BIL_CSP_EQ_Q17_KO_D)

## BIL_CSP_EQ_Q17_OK_A

`@score = calc(@score+1)`
`@score_t1 = calc(@score_t1+1)`
Réponse enregistrée.

1. [Continuer](BIL_CSP_EQ_Q18)

## BIL_CSP_EQ_Q17_KO_B

Réponse enregistrée.

1. [Continuer](BIL_CSP_EQ_Q18)

## BIL_CSP_EQ_Q17_KO_C

Réponse enregistrée.

1. [Continuer](BIL_CSP_EQ_Q18)

## BIL_CSP_EQ_Q17_KO_D

Réponse enregistrée.

1. [Continuer](BIL_CSP_EQ_Q18)

## BIL_CSP_EQ_Q18

### Question 18 sur 25

**Combien y a-t-il de régions en France métropolitaine ?**

1. [18.](BIL_CSP_EQ_Q18_KO_A)
2. [22.](BIL_CSP_EQ_Q18_KO_B)
3. [12.](BIL_CSP_EQ_Q18_KO_C)
4. [13.](BIL_CSP_EQ_Q18_OK_D)

## BIL_CSP_EQ_Q18_KO_A

Réponse enregistrée.

1. [Continuer](BIL_CSP_EQ_Q19)

## BIL_CSP_EQ_Q18_KO_B

Réponse enregistrée.

1. [Continuer](BIL_CSP_EQ_Q19)

## BIL_CSP_EQ_Q18_KO_C

Réponse enregistrée.

1. [Continuer](BIL_CSP_EQ_Q19)

## BIL_CSP_EQ_Q18_OK_D

`@score = calc(@score+1)`
`@score_t4 = calc(@score_t4+1)`
Réponse enregistrée.

1. [Continuer](BIL_CSP_EQ_Q19)

## BIL_CSP_EQ_Q19

### Question 19 sur 25

**Qui possède le pouvoir législatif ?**

1. [Le Président de la République.](BIL_CSP_EQ_Q19_KO_A)
2. [Le Gouvernement.](BIL_CSP_EQ_Q19_KO_B)
3. [Le Parlement.](BIL_CSP_EQ_Q19_OK_C)
4. [Les juges.](BIL_CSP_EQ_Q19_KO_D)

## BIL_CSP_EQ_Q19_KO_A

Réponse enregistrée.

1. [Continuer](BIL_CSP_EQ_Q20)

## BIL_CSP_EQ_Q19_KO_B

Réponse enregistrée.

1. [Continuer](BIL_CSP_EQ_Q20)

## BIL_CSP_EQ_Q19_OK_C

`@score = calc(@score+1)`
`@score_t2 = calc(@score_t2+1)`
Réponse enregistrée.

1. [Continuer](BIL_CSP_EQ_Q20)

## BIL_CSP_EQ_Q19_KO_D

Réponse enregistrée.

1. [Continuer](BIL_CSP_EQ_Q20)

## BIL_CSP_EQ_Q20

### Question 20 sur 25

**Combien y a-t-il de départements en France ?**

1. [96.](BIL_CSP_EQ_Q20_KO_A)
2. [13.](BIL_CSP_EQ_Q20_KO_B)
3. [18.](BIL_CSP_EQ_Q20_KO_C)
4. [101.](BIL_CSP_EQ_Q20_OK_D)

## BIL_CSP_EQ_Q20_KO_A

Réponse enregistrée.

1. [Continuer](BIL_CSP_EQ_Q21)

## BIL_CSP_EQ_Q20_KO_B

Réponse enregistrée.

1. [Continuer](BIL_CSP_EQ_Q21)

## BIL_CSP_EQ_Q20_KO_C

Réponse enregistrée.

1. [Continuer](BIL_CSP_EQ_Q21)

## BIL_CSP_EQ_Q20_OK_D

`@score = calc(@score+1)`
`@score_t2 = calc(@score_t2+1)`
Réponse enregistrée.

1. [Continuer](BIL_CSP_EQ_Q21)

## BIL_CSP_EQ_Q21

### Question 21 sur 25

**Quelle liberté permet à chacun d'exprimer ses idées ?**

1. [La liberté de circulation.](BIL_CSP_EQ_Q21_KO_A)
2. [La liberté de réunion.](BIL_CSP_EQ_Q21_KO_B)
3. [La liberté d'expression.](BIL_CSP_EQ_Q21_OK_C)
4. [La liberté de vote.](BIL_CSP_EQ_Q21_KO_D)

## BIL_CSP_EQ_Q21_KO_A

Réponse enregistrée.

1. [Continuer](BIL_CSP_EQ_Q22)

## BIL_CSP_EQ_Q21_KO_B

Réponse enregistrée.

1. [Continuer](BIL_CSP_EQ_Q22)

## BIL_CSP_EQ_Q21_OK_C

`@score = calc(@score+1)`
`@score_t1 = calc(@score_t1+1)`
Réponse enregistrée.

1. [Continuer](BIL_CSP_EQ_Q22)

## BIL_CSP_EQ_Q21_KO_D

Réponse enregistrée.

1. [Continuer](BIL_CSP_EQ_Q22)

## BIL_CSP_EQ_Q22

### Question 22 sur 25

**Une personne a-t-elle le droit de ne pas croire en une religion ?**

1. [Non, ce n'est pas autorisé.](BIL_CSP_EQ_Q22_KO_A)
2. [Non, tout le monde doit avoir une religion.](BIL_CSP_EQ_Q22_KO_B)
3. [Oui, toute personne est libre de croire, de ne pas croire ou de changer de religion.](BIL_CSP_EQ_Q22_OK_C)
4. [Non, l'athéisme est interdit en France.](BIL_CSP_EQ_Q22_KO_D)

## BIL_CSP_EQ_Q22_KO_A

Réponse enregistrée.

1. [Continuer](BIL_CSP_EQ_Q23)

## BIL_CSP_EQ_Q22_KO_B

Réponse enregistrée.

1. [Continuer](BIL_CSP_EQ_Q23)

## BIL_CSP_EQ_Q22_OK_C

`@score = calc(@score+1)`
`@score_t1 = calc(@score_t1+1)`
Réponse enregistrée.

1. [Continuer](BIL_CSP_EQ_Q23)

## BIL_CSP_EQ_Q22_KO_D

Réponse enregistrée.

1. [Continuer](BIL_CSP_EQ_Q23)

## BIL_CSP_EQ_Q23

### Question 23 sur 25

**Concernant l'accès aux soins, quelle proposition est correcte ?**

1. [Seules les personnes de nationalité française peuvent accéder aux soins.](BIL_CSP_EQ_Q23_KO_A)
2. [Toute personne peut accéder aux soins selon les règles prévues par la loi.](BIL_CSP_EQ_Q23_OK_B)
3. [Seules les personnes ayant un emploi peuvent être soignées.](BIL_CSP_EQ_Q23_KO_C)
4. [L'accès aux soins est réservé aux urgences.](BIL_CSP_EQ_Q23_KO_D)

## BIL_CSP_EQ_Q23_KO_A

Réponse enregistrée.

1. [Continuer](BIL_CSP_EQ_Q24)

## BIL_CSP_EQ_Q23_OK_B

`@score = calc(@score+1)`
`@score_t5 = calc(@score_t5+1)`
Réponse enregistrée.

1. [Continuer](BIL_CSP_EQ_Q24)

## BIL_CSP_EQ_Q23_KO_C

Réponse enregistrée.

1. [Continuer](BIL_CSP_EQ_Q24)

## BIL_CSP_EQ_Q23_KO_D

Réponse enregistrée.

1. [Continuer](BIL_CSP_EQ_Q24)

## BIL_CSP_EQ_Q24

### Question 24 sur 25

**Quelle est l'infraction la plus grave ?**

1. [Une contravention.](BIL_CSP_EQ_Q24_KO_A)
2. [Un délit.](BIL_CSP_EQ_Q24_KO_B)
3. [Le crime.](BIL_CSP_EQ_Q24_OK_C)
4. [Une amende.](BIL_CSP_EQ_Q24_KO_D)

## BIL_CSP_EQ_Q24_KO_A

Réponse enregistrée.

1. [Continuer](BIL_CSP_EQ_Q25)

## BIL_CSP_EQ_Q24_KO_B

Réponse enregistrée.

1. [Continuer](BIL_CSP_EQ_Q25)

## BIL_CSP_EQ_Q24_OK_C

`@score = calc(@score+1)`
`@score_t3 = calc(@score_t3+1)`
Réponse enregistrée.

1. [Continuer](BIL_CSP_EQ_Q25)

## BIL_CSP_EQ_Q24_KO_D

Réponse enregistrée.

1. [Continuer](BIL_CSP_EQ_Q25)

## BIL_CSP_EQ_Q25

### Question 25 sur 25

**Qui doit respecter la loi ?**

1. [Seulement les Français.](BIL_CSP_EQ_Q25_KO_A)
2. [Seulement les adultes.](BIL_CSP_EQ_Q25_KO_B)
3. [Toutes les personnes présentes sur le territoire français.](BIL_CSP_EQ_Q25_OK_C)
4. [Seulement les élus.](BIL_CSP_EQ_Q25_KO_D)

## BIL_CSP_EQ_Q25_KO_A

Réponse enregistrée.

1. [Continuer](BIL_CSP_EQ_RESULT)

## BIL_CSP_EQ_Q25_KO_B

Réponse enregistrée.

1. [Continuer](BIL_CSP_EQ_RESULT)

## BIL_CSP_EQ_Q25_OK_C

`@score = calc(@score+1)`
`@score_t2 = calc(@score_t2+1)`
Réponse enregistrée.

1. [Continuer](BIL_CSP_EQ_RESULT)

## BIL_CSP_EQ_Q25_KO_D

Réponse enregistrée.

1. [Continuer](BIL_CSP_EQ_RESULT)

## BIL_CSP_EQ_RESULT

`@pourcentage = calc(@score*4)`
### 🎯 Votre résultat

Vous avez obtenu **@score/25**, soit **@pourcentage %**.

`if @score <= 9`
### Profil 1 — 🌱 Bases à construire

Commencez par les chapitres fondamentaux et privilégiez des séances courtes et régulières.
`endif`

`if @score >= 10 && @score <= 15`
### Profil 2 — 🧱 Connaissances en construction

Vos bases sont présentes. Consolidez les thèmes les moins maîtrisés avant de faire un examen blanc.
`endif`

`if @score >= 16 && @score <= 20`
### Profil 3 — 🚀 Niveau encourageant

Poursuivez avec des entraînements ciblés et des mises en situation.
`endif`

`if @score >= 21`
### Profil 4 — ⭐ Très bonne préparation

Votre niveau est solide. Travaillez surtout les pièges et réalisez un examen blanc complet.
`endif`

1. [Voir mes résultats par thématique](BIL_CSP_EQ_THEMES)

## BIL_CSP_EQ_THEMES

### 📊 Résultats par thématique

- **Principes et valeurs de la République** : @score_t1/5
- **Système institutionnel et politique français** : @score_t2/5
- **Droits et devoirs** : @score_t3/5
- **Histoire, géographie, patrimoine et culture** : @score_t4/5
- **Vivre dans la société française** : @score_t5/5

1. [Voir mes recommandations](BIL_CSP_EQ_RECO)

## BIL_CSP_EQ_RECO

### 🧭 Vos priorités de révision

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

Commencez par les priorités affichées ci-dessus, puis refaites un entraînement ciblé.

1. [📚 Commencer mes révisions](SCR_REV_MENU)
2. [📝 M’entraîner](SCR_ENT_MENU)
3. [🏠 Retour au menu principal](MENU_PRINCIPAL)

## BIL_CSP_INT_Q01

### Question 1 sur 25

**Que permet la citoyenneté française ?**

1. [Obtenir automatiquement un emploi.](BIL_CSP_INT_Q01_KO_A)
2. [Ne plus respecter les lois.](BIL_CSP_INT_Q01_KO_B)
3. [Voter, être candidat à une élection et participer à la vie démocratique.](BIL_CSP_INT_Q01_OK_C)
4. [Voyager gratuitement.](BIL_CSP_INT_Q01_KO_D)

## BIL_CSP_INT_Q01_KO_A

Réponse enregistrée.

1. [Continuer](BIL_CSP_INT_Q02)

## BIL_CSP_INT_Q01_KO_B

Réponse enregistrée.

1. [Continuer](BIL_CSP_INT_Q02)

## BIL_CSP_INT_Q01_OK_C

`@score = calc(@score+1)`
`@score_t3 = calc(@score_t3+1)`
Réponse enregistrée.

1. [Continuer](BIL_CSP_INT_Q02)

## BIL_CSP_INT_Q01_KO_D

Réponse enregistrée.

1. [Continuer](BIL_CSP_INT_Q02)

## BIL_CSP_INT_Q02

### Question 2 sur 25

**Que doit faire un employeur pour fixer un salaire ?**

1. [Choisir librement n'importe quel salaire.](BIL_CSP_INT_Q02_KO_A)
2. [Demander au salarié de travailler gratuitement.](BIL_CSP_INT_Q02_KO_B)
3. [Payer uniquement en espèces.](BIL_CSP_INT_Q02_KO_C)
4. [Respecter au minimum le SMIC et la loi.](BIL_CSP_INT_Q02_OK_D)

## BIL_CSP_INT_Q02_KO_A

Réponse enregistrée.

1. [Continuer](BIL_CSP_INT_Q03)

## BIL_CSP_INT_Q02_KO_B

Réponse enregistrée.

1. [Continuer](BIL_CSP_INT_Q03)

## BIL_CSP_INT_Q02_KO_C

Réponse enregistrée.

1. [Continuer](BIL_CSP_INT_Q03)

## BIL_CSP_INT_Q02_OK_D

`@score = calc(@score+1)`
`@score_t5 = calc(@score_t5+1)`
Réponse enregistrée.

1. [Continuer](BIL_CSP_INT_Q03)

## BIL_CSP_INT_Q03

### Question 3 sur 25

**Combien d'États font partie de l'Union européenne au 1er janvier 2025 ?**

1. [26.](BIL_CSP_INT_Q03_KO_A)
2. [28.](BIL_CSP_INT_Q03_KO_B)
3. [30.](BIL_CSP_INT_Q03_KO_C)
4. [27.](BIL_CSP_INT_Q03_OK_D)

## BIL_CSP_INT_Q03_KO_A

Réponse enregistrée.

1. [Continuer](BIL_CSP_INT_Q04)

## BIL_CSP_INT_Q03_KO_B

Réponse enregistrée.

1. [Continuer](BIL_CSP_INT_Q04)

## BIL_CSP_INT_Q03_KO_C

Réponse enregistrée.

1. [Continuer](BIL_CSP_INT_Q04)

## BIL_CSP_INT_Q03_OK_D

`@score = calc(@score+1)`
`@score_t2 = calc(@score_t2+1)`
Réponse enregistrée.

1. [Continuer](BIL_CSP_INT_Q04)

## BIL_CSP_INT_Q04

### Question 4 sur 25

**À quoi sert une mutuelle santé ?**

1. [À remplacer l'Assurance Maladie.](BIL_CSP_INT_Q04_KO_A)
2. [À payer les impôts.](BIL_CSP_INT_Q04_KO_B)
3. [À obtenir une carte Vitale.](BIL_CSP_INT_Q04_KO_C)
4. [À compléter le remboursement des frais de santé.](BIL_CSP_INT_Q04_OK_D)

## BIL_CSP_INT_Q04_KO_A

Réponse enregistrée.

1. [Continuer](BIL_CSP_INT_Q05)

## BIL_CSP_INT_Q04_KO_B

Réponse enregistrée.

1. [Continuer](BIL_CSP_INT_Q05)

## BIL_CSP_INT_Q04_KO_C

Réponse enregistrée.

1. [Continuer](BIL_CSP_INT_Q05)

## BIL_CSP_INT_Q04_OK_D

`@score = calc(@score+1)`
`@score_t5 = calc(@score_t5+1)`
Réponse enregistrée.

1. [Continuer](BIL_CSP_INT_Q05)

## BIL_CSP_INT_Q05

### Question 5 sur 25

**Quelle ville est française ?**

1. [Barcelone.](BIL_CSP_INT_Q05_KO_A)
2. [Genève.](BIL_CSP_INT_Q05_KO_B)
3. [Lyon.](BIL_CSP_INT_Q05_OK_C)
4. [Turin.](BIL_CSP_INT_Q05_KO_D)

## BIL_CSP_INT_Q05_KO_A

Réponse enregistrée.

1. [Continuer](BIL_CSP_INT_Q06)

## BIL_CSP_INT_Q05_KO_B

Réponse enregistrée.

1. [Continuer](BIL_CSP_INT_Q06)

## BIL_CSP_INT_Q05_OK_C

`@score = calc(@score+1)`
`@score_t4 = calc(@score_t4+1)`
Réponse enregistrée.

1. [Continuer](BIL_CSP_INT_Q06)

## BIL_CSP_INT_Q05_KO_D

Réponse enregistrée.

1. [Continuer](BIL_CSP_INT_Q06)

## BIL_CSP_INT_Q06

### Question 6 sur 25

**Jeter une bouteille dans la rue est :**

1. [Autorisé.](BIL_CSP_INT_Q06_KO_A)
2. [Toléré dans les grandes villes.](BIL_CSP_INT_Q06_KO_B)
3. [Interdit et passible d'une sanction.](BIL_CSP_INT_Q06_OK_C)
4. [Autorisé la nuit.](BIL_CSP_INT_Q06_KO_D)

## BIL_CSP_INT_Q06_KO_A

Réponse enregistrée.

1. [Continuer](BIL_CSP_INT_Q07)

## BIL_CSP_INT_Q06_KO_B

Réponse enregistrée.

1. [Continuer](BIL_CSP_INT_Q07)

## BIL_CSP_INT_Q06_OK_C

`@score = calc(@score+1)`
`@score_t3 = calc(@score_t3+1)`
Réponse enregistrée.

1. [Continuer](BIL_CSP_INT_Q07)

## BIL_CSP_INT_Q06_KO_D

Réponse enregistrée.

1. [Continuer](BIL_CSP_INT_Q07)

## BIL_CSP_INT_Q07

### Question 7 sur 25

**Quel est le rôle du médecin traitant ?**

1. [Il réalise toutes les opérations chirurgicales.](BIL_CSP_INT_Q07_KO_A)
2. [Il remplace l'hôpital.](BIL_CSP_INT_Q07_KO_B)
3. [Il délivre les médicaments.](BIL_CSP_INT_Q07_KO_C)
4. [Il assure le suivi médical du patient et l'oriente vers un spécialiste si nécessaire.](BIL_CSP_INT_Q07_OK_D)

## BIL_CSP_INT_Q07_KO_A

Réponse enregistrée.

1. [Continuer](BIL_CSP_INT_Q08)

## BIL_CSP_INT_Q07_KO_B

Réponse enregistrée.

1. [Continuer](BIL_CSP_INT_Q08)

## BIL_CSP_INT_Q07_KO_C

Réponse enregistrée.

1. [Continuer](BIL_CSP_INT_Q08)

## BIL_CSP_INT_Q07_OK_D

`@score = calc(@score+1)`
`@score_t5 = calc(@score_t5+1)`
Réponse enregistrée.

1. [Continuer](BIL_CSP_INT_Q08)

## BIL_CSP_INT_Q08

### Question 8 sur 25

**Quel écrivain est français ?**

1. [William Shakespeare.](BIL_CSP_INT_Q08_KO_A)
2. [Miguel de Cervantes.](BIL_CSP_INT_Q08_KO_B)
3. [Victor Hugo.](BIL_CSP_INT_Q08_OK_C)
4. [Johann Wolfgang von Goethe.](BIL_CSP_INT_Q08_KO_D)

## BIL_CSP_INT_Q08_KO_A

Réponse enregistrée.

1. [Continuer](BIL_CSP_INT_Q09)

## BIL_CSP_INT_Q08_KO_B

Réponse enregistrée.

1. [Continuer](BIL_CSP_INT_Q09)

## BIL_CSP_INT_Q08_OK_C

`@score = calc(@score+1)`
`@score_t4 = calc(@score_t4+1)`
Réponse enregistrée.

1. [Continuer](BIL_CSP_INT_Q09)

## BIL_CSP_INT_Q08_KO_D

Réponse enregistrée.

1. [Continuer](BIL_CSP_INT_Q09)

## BIL_CSP_INT_Q09

### Question 9 sur 25

**Pour combien de temps sont élus les députés ?**

1. [4 ans.](BIL_CSP_INT_Q09_KO_A)
2. [5 ans.](BIL_CSP_INT_Q09_OK_B)
3. [6 ans.](BIL_CSP_INT_Q09_KO_C)
4. [7 ans.](BIL_CSP_INT_Q09_KO_D)

## BIL_CSP_INT_Q09_KO_A

Réponse enregistrée.

1. [Continuer](BIL_CSP_INT_Q10)

## BIL_CSP_INT_Q09_OK_B

`@score = calc(@score+1)`
`@score_t2 = calc(@score_t2+1)`
Réponse enregistrée.

1. [Continuer](BIL_CSP_INT_Q10)

## BIL_CSP_INT_Q09_KO_C

Réponse enregistrée.

1. [Continuer](BIL_CSP_INT_Q10)

## BIL_CSP_INT_Q09_KO_D

Réponse enregistrée.

1. [Continuer](BIL_CSP_INT_Q10)

## BIL_CSP_INT_Q10

### Question 10 sur 25

**Quel État n'est pas membre de l'Union européenne ?**

1. [L'Allemagne.](BIL_CSP_INT_Q10_KO_A)
2. [L'Italie.](BIL_CSP_INT_Q10_KO_B)
3. [La Suisse.](BIL_CSP_INT_Q10_OK_C)
4. [La Belgique.](BIL_CSP_INT_Q10_KO_D)

## BIL_CSP_INT_Q10_KO_A

Réponse enregistrée.

1. [Continuer](BIL_CSP_INT_Q11)

## BIL_CSP_INT_Q10_KO_B

Réponse enregistrée.

1. [Continuer](BIL_CSP_INT_Q11)

## BIL_CSP_INT_Q10_OK_C

`@score = calc(@score+1)`
`@score_t2 = calc(@score_t2+1)`
Réponse enregistrée.

1. [Continuer](BIL_CSP_INT_Q11)

## BIL_CSP_INT_Q10_KO_D

Réponse enregistrée.

1. [Continuer](BIL_CSP_INT_Q11)

## BIL_CSP_INT_Q11

### Question 11 sur 25

**Quel est l'objectif des vaccinations obligatoires ?**

1. [Guérir toutes les maladies.](BIL_CSP_INT_Q11_KO_A)
2. [Remplacer les médicaments.](BIL_CSP_INT_Q11_KO_B)
3. [Être dispensé de consulter un médecin.](BIL_CSP_INT_Q11_KO_C)
4. [Protéger la personne vaccinée et la population contre certaines maladies.](BIL_CSP_INT_Q11_OK_D)

## BIL_CSP_INT_Q11_KO_A

Réponse enregistrée.

1. [Continuer](BIL_CSP_INT_Q12)

## BIL_CSP_INT_Q11_KO_B

Réponse enregistrée.

1. [Continuer](BIL_CSP_INT_Q12)

## BIL_CSP_INT_Q11_KO_C

Réponse enregistrée.

1. [Continuer](BIL_CSP_INT_Q12)

## BIL_CSP_INT_Q11_OK_D

`@score = calc(@score+1)`
`@score_t5 = calc(@score_t5+1)`
Réponse enregistrée.

1. [Continuer](BIL_CSP_INT_Q12)

## BIL_CSP_INT_Q12

### Question 12 sur 25

**Que permet le principe de laïcité ?**

1. [Les religions sont interdites en France.](BIL_CSP_INT_Q12_KO_A)
2. [L'État impose une religion officielle.](BIL_CSP_INT_Q12_KO_B)
3. [La liberté de conscience : chacun est libre de croire ou de ne pas croire.](BIL_CSP_INT_Q12_OK_C)
4. [On ne peut pratiquer aucune religion en public.](BIL_CSP_INT_Q12_KO_D)

## BIL_CSP_INT_Q12_KO_A

Réponse enregistrée.

1. [Continuer](BIL_CSP_INT_Q13)

## BIL_CSP_INT_Q12_KO_B

Réponse enregistrée.

1. [Continuer](BIL_CSP_INT_Q13)

## BIL_CSP_INT_Q12_OK_C

`@score = calc(@score+1)`
`@score_t1 = calc(@score_t1+1)`
Réponse enregistrée.

1. [Continuer](BIL_CSP_INT_Q13)

## BIL_CSP_INT_Q12_KO_D

Réponse enregistrée.

1. [Continuer](BIL_CSP_INT_Q13)

## BIL_CSP_INT_Q13

### Question 13 sur 25

**Combien de députés composent l'Assemblée nationale ?**

1. [348.](BIL_CSP_INT_Q13_KO_A)
2. [577.](BIL_CSP_INT_Q13_OK_B)
3. [925.](BIL_CSP_INT_Q13_KO_C)
4. [700.](BIL_CSP_INT_Q13_KO_D)

## BIL_CSP_INT_Q13_KO_A

Réponse enregistrée.

1. [Continuer](BIL_CSP_INT_Q14)

## BIL_CSP_INT_Q13_OK_B

`@score = calc(@score+1)`
`@score_t2 = calc(@score_t2+1)`
Réponse enregistrée.

1. [Continuer](BIL_CSP_INT_Q14)

## BIL_CSP_INT_Q13_KO_C

Réponse enregistrée.

1. [Continuer](BIL_CSP_INT_Q14)

## BIL_CSP_INT_Q13_KO_D

Réponse enregistrée.

1. [Continuer](BIL_CSP_INT_Q14)

## BIL_CSP_INT_Q14

### Question 14 sur 25

**Que signifie la liberté ?**

1. [Faire tout ce que l'on veut, sans aucune limite.](BIL_CSP_INT_Q14_KO_A)
2. [Penser, s'exprimer et agir dans le respect de la loi et des droits des autres.](BIL_CSP_INT_Q14_OK_B)
3. [Ne devoir respecter aucune règle.](BIL_CSP_INT_Q14_KO_C)
4. [Agir sans que la loi ne s'applique.](BIL_CSP_INT_Q14_KO_D)

## BIL_CSP_INT_Q14_KO_A

Réponse enregistrée.

1. [Continuer](BIL_CSP_INT_Q15)

## BIL_CSP_INT_Q14_OK_B

`@score = calc(@score+1)`
`@score_t1 = calc(@score_t1+1)`
Réponse enregistrée.

1. [Continuer](BIL_CSP_INT_Q15)

## BIL_CSP_INT_Q14_KO_C

Réponse enregistrée.

1. [Continuer](BIL_CSP_INT_Q15)

## BIL_CSP_INT_Q14_KO_D

Réponse enregistrée.

1. [Continuer](BIL_CSP_INT_Q15)

## BIL_CSP_INT_Q15

### Question 15 sur 25

**Quelle liberté permet à chacun d'exprimer ses idées ?**

1. [La liberté de circulation.](BIL_CSP_INT_Q15_KO_A)
2. [La liberté de réunion.](BIL_CSP_INT_Q15_KO_B)
3. [La liberté d'expression.](BIL_CSP_INT_Q15_OK_C)
4. [La liberté de vote.](BIL_CSP_INT_Q15_KO_D)

## BIL_CSP_INT_Q15_KO_A

Réponse enregistrée.

1. [Continuer](BIL_CSP_INT_Q16)

## BIL_CSP_INT_Q15_KO_B

Réponse enregistrée.

1. [Continuer](BIL_CSP_INT_Q16)

## BIL_CSP_INT_Q15_OK_C

`@score = calc(@score+1)`
`@score_t1 = calc(@score_t1+1)`
Réponse enregistrée.

1. [Continuer](BIL_CSP_INT_Q16)

## BIL_CSP_INT_Q15_KO_D

Réponse enregistrée.

1. [Continuer](BIL_CSP_INT_Q16)

## BIL_CSP_INT_Q16

### Question 16 sur 25

**Lequel de ces droits est un droit fondamental ?**

1. [Le droit à la liberté d'expression.](BIL_CSP_INT_Q16_OK_A)
2. [Le droit de conduire sans permis.](BIL_CSP_INT_Q16_KO_B)
3. [Le droit de ne pas payer d'impôts.](BIL_CSP_INT_Q16_KO_C)
4. [Le droit de choisir son juge.](BIL_CSP_INT_Q16_KO_D)

## BIL_CSP_INT_Q16_OK_A

`@score = calc(@score+1)`
`@score_t3 = calc(@score_t3+1)`
Réponse enregistrée.

1. [Continuer](BIL_CSP_INT_Q17)

## BIL_CSP_INT_Q16_KO_B

Réponse enregistrée.

1. [Continuer](BIL_CSP_INT_Q17)

## BIL_CSP_INT_Q16_KO_C

Réponse enregistrée.

1. [Continuer](BIL_CSP_INT_Q17)

## BIL_CSP_INT_Q16_KO_D

Réponse enregistrée.

1. [Continuer](BIL_CSP_INT_Q17)

## BIL_CSP_INT_Q17

### Question 17 sur 25

**Quelle condition est nécessaire pour voter aux élections européennes ?**

1. [Avoir un passeport.](BIL_CSP_INT_Q17_KO_A)
2. [Être propriétaire.](BIL_CSP_INT_Q17_KO_B)
3. [Être salarié.](BIL_CSP_INT_Q17_KO_C)
4. [Être inscrit sur les listes électorales.](BIL_CSP_INT_Q17_OK_D)

## BIL_CSP_INT_Q17_KO_A

Réponse enregistrée.

1. [Continuer](BIL_CSP_INT_Q18)

## BIL_CSP_INT_Q17_KO_B

Réponse enregistrée.

1. [Continuer](BIL_CSP_INT_Q18)

## BIL_CSP_INT_Q17_KO_C

Réponse enregistrée.

1. [Continuer](BIL_CSP_INT_Q18)

## BIL_CSP_INT_Q17_OK_D

`@score = calc(@score+1)`
`@score_t2 = calc(@score_t2+1)`
Réponse enregistrée.

1. [Continuer](BIL_CSP_INT_Q18)

## BIL_CSP_INT_Q18

### Question 18 sur 25

**Qu'est-ce que la laïcité ?**

1. [Un principe qui interdit toutes les religions.](BIL_CSP_INT_Q18_KO_A)
2. [Un principe qui garantit la liberté de conscience, la neutralité de l'État et le respect de toutes les convictions.](BIL_CSP_INT_Q18_OK_B)
3. [Un principe qui impose de pratiquer une religion.](BIL_CSP_INT_Q18_KO_C)
4. [Un principe selon lequel l'État choisit une religion officielle.](BIL_CSP_INT_Q18_KO_D)

## BIL_CSP_INT_Q18_KO_A

Réponse enregistrée.

1. [Continuer](BIL_CSP_INT_Q19)

## BIL_CSP_INT_Q18_OK_B

`@score = calc(@score+1)`
`@score_t1 = calc(@score_t1+1)`
Réponse enregistrée.

1. [Continuer](BIL_CSP_INT_Q19)

## BIL_CSP_INT_Q18_KO_C

Réponse enregistrée.

1. [Continuer](BIL_CSP_INT_Q19)

## BIL_CSP_INT_Q18_KO_D

Réponse enregistrée.

1. [Continuer](BIL_CSP_INT_Q19)

## BIL_CSP_INT_Q19

### Question 19 sur 25

**À quelles conditions un mariage est-il reconnu juridiquement ?**

1. [Lorsqu'il est célébré uniquement à l'église ou dans un lieu de culte.](BIL_CSP_INT_Q19_KO_A)
2. [Lorsque les deux familles donnent leur accord.](BIL_CSP_INT_Q19_KO_B)
3. [Lorsqu'il est célébré à la mairie par un officier d'état civil.](BIL_CSP_INT_Q19_OK_C)
4. [Lorsqu'il est annoncé publiquement sur les réseaux sociaux.](BIL_CSP_INT_Q19_KO_D)

## BIL_CSP_INT_Q19_KO_A

Réponse enregistrée.

1. [Continuer](BIL_CSP_INT_Q20)

## BIL_CSP_INT_Q19_KO_B

Réponse enregistrée.

1. [Continuer](BIL_CSP_INT_Q20)

## BIL_CSP_INT_Q19_OK_C

`@score = calc(@score+1)`
`@score_t5 = calc(@score_t5+1)`
Réponse enregistrée.

1. [Continuer](BIL_CSP_INT_Q20)

## BIL_CSP_INT_Q19_KO_D

Réponse enregistrée.

1. [Continuer](BIL_CSP_INT_Q20)

## BIL_CSP_INT_Q20

### Question 20 sur 25

**Citez un pays ou une région du monde qui a été colonisé par la France.**

1. [L'Allemagne.](BIL_CSP_INT_Q20_KO_A)
2. [Le Japon.](BIL_CSP_INT_Q20_KO_B)
3. [L'Algérie.](BIL_CSP_INT_Q20_OK_C)
4. [Le Brésil.](BIL_CSP_INT_Q20_KO_D)

## BIL_CSP_INT_Q20_KO_A

Réponse enregistrée.

1. [Continuer](BIL_CSP_INT_Q21)

## BIL_CSP_INT_Q20_KO_B

Réponse enregistrée.

1. [Continuer](BIL_CSP_INT_Q21)

## BIL_CSP_INT_Q20_OK_C

`@score = calc(@score+1)`
`@score_t4 = calc(@score_t4+1)`
Réponse enregistrée.

1. [Continuer](BIL_CSP_INT_Q21)

## BIL_CSP_INT_Q20_KO_D

Réponse enregistrée.

1. [Continuer](BIL_CSP_INT_Q21)

## BIL_CSP_INT_Q21

### Question 21 sur 25

**Lequel de ces personnages historiques est français ?**

1. [Winston Churchill.](BIL_CSP_INT_Q21_KO_A)
2. [Napoléon Bonaparte.](BIL_CSP_INT_Q21_OK_B)
3. [Christophe Colomb.](BIL_CSP_INT_Q21_KO_C)
4. [L'impératrice Sissi.](BIL_CSP_INT_Q21_KO_D)

## BIL_CSP_INT_Q21_KO_A

Réponse enregistrée.

1. [Continuer](BIL_CSP_INT_Q22)

## BIL_CSP_INT_Q21_OK_B

`@score = calc(@score+1)`
`@score_t4 = calc(@score_t4+1)`
Réponse enregistrée.

1. [Continuer](BIL_CSP_INT_Q22)

## BIL_CSP_INT_Q21_KO_C

Réponse enregistrée.

1. [Continuer](BIL_CSP_INT_Q22)

## BIL_CSP_INT_Q21_KO_D

Réponse enregistrée.

1. [Continuer](BIL_CSP_INT_Q22)

## BIL_CSP_INT_Q22

### Question 22 sur 25

**En quelle année la loi de séparation des Églises et de l'État a-t-elle été votée ?**

1. [1789.](BIL_CSP_INT_Q22_KO_A)
2. [1905.](BIL_CSP_INT_Q22_OK_B)
3. [1958.](BIL_CSP_INT_Q22_KO_C)
4. [1946.](BIL_CSP_INT_Q22_KO_D)

## BIL_CSP_INT_Q22_KO_A

Réponse enregistrée.

1. [Continuer](BIL_CSP_INT_Q23)

## BIL_CSP_INT_Q22_OK_B

`@score = calc(@score+1)`
`@score_t1 = calc(@score_t1+1)`
Réponse enregistrée.

1. [Continuer](BIL_CSP_INT_Q23)

## BIL_CSP_INT_Q22_KO_C

Réponse enregistrée.

1. [Continuer](BIL_CSP_INT_Q23)

## BIL_CSP_INT_Q22_KO_D

Réponse enregistrée.

1. [Continuer](BIL_CSP_INT_Q23)

## BIL_CSP_INT_Q23

### Question 23 sur 25

**Concernant les limites aux libertés individuelles, quelle proposition est correcte ?**

1. [Les libertés individuelles sont absolues et ne connaissent aucune limite.](BIL_CSP_INT_Q23_KO_A)
2. [Les libertés individuelles peuvent être limitées pour protéger les droits des autres, l'ordre public et la sécurité.](BIL_CSP_INT_Q23_OK_B)
3. [Les libertés individuelles ne s'appliquent qu'aux citoyens français.](BIL_CSP_INT_Q23_KO_C)
4. [Les libertés individuelles peuvent être supprimées sans motif.](BIL_CSP_INT_Q23_KO_D)

## BIL_CSP_INT_Q23_KO_A

Réponse enregistrée.

1. [Continuer](BIL_CSP_INT_Q24)

## BIL_CSP_INT_Q23_OK_B

`@score = calc(@score+1)`
`@score_t3 = calc(@score_t3+1)`
Réponse enregistrée.

1. [Continuer](BIL_CSP_INT_Q24)

## BIL_CSP_INT_Q23_KO_C

Réponse enregistrée.

1. [Continuer](BIL_CSP_INT_Q24)

## BIL_CSP_INT_Q23_KO_D

Réponse enregistrée.

1. [Continuer](BIL_CSP_INT_Q24)

## BIL_CSP_INT_Q24

### Question 24 sur 25

**Pourquoi les libertés individuelles peuvent-elles être limitées ?**

1. [Pour supprimer les libertés.](BIL_CSP_INT_Q24_KO_A)
2. [Pour protéger les droits des autres, l'ordre public et la sécurité.](BIL_CSP_INT_Q24_OK_B)
3. [Sans raison particulière.](BIL_CSP_INT_Q24_KO_C)
4. [Pour empêcher les citoyens de s'exprimer.](BIL_CSP_INT_Q24_KO_D)

## BIL_CSP_INT_Q24_KO_A

Réponse enregistrée.

1. [Continuer](BIL_CSP_INT_Q25)

## BIL_CSP_INT_Q24_OK_B

`@score = calc(@score+1)`
`@score_t3 = calc(@score_t3+1)`
Réponse enregistrée.

1. [Continuer](BIL_CSP_INT_Q25)

## BIL_CSP_INT_Q24_KO_C

Réponse enregistrée.

1. [Continuer](BIL_CSP_INT_Q25)

## BIL_CSP_INT_Q24_KO_D

Réponse enregistrée.

1. [Continuer](BIL_CSP_INT_Q25)

## BIL_CSP_INT_Q25

### Question 25 sur 25

**Qu'est-ce que le Louvre ?**

1. [Une école.](BIL_CSP_INT_Q25_KO_A)
2. [Une gare.](BIL_CSP_INT_Q25_KO_B)
3. [Un théâtre.](BIL_CSP_INT_Q25_KO_C)
4. [Un grand musée situé à Paris.](BIL_CSP_INT_Q25_OK_D)

## BIL_CSP_INT_Q25_KO_A

Réponse enregistrée.

1. [Continuer](BIL_CSP_INT_RESULT)

## BIL_CSP_INT_Q25_KO_B

Réponse enregistrée.

1. [Continuer](BIL_CSP_INT_RESULT)

## BIL_CSP_INT_Q25_KO_C

Réponse enregistrée.

1. [Continuer](BIL_CSP_INT_RESULT)

## BIL_CSP_INT_Q25_OK_D

`@score = calc(@score+1)`
`@score_t4 = calc(@score_t4+1)`
Réponse enregistrée.

1. [Continuer](BIL_CSP_INT_RESULT)

## BIL_CSP_INT_RESULT

`@pourcentage = calc(@score*4)`
### 🎯 Votre résultat

Vous avez obtenu **@score/25**, soit **@pourcentage %**.

`if @score <= 9`
### Profil 1 — 🌱 Bases à construire

Commencez par les chapitres fondamentaux et privilégiez des séances courtes et régulières.
`endif`

`if @score >= 10 && @score <= 15`
### Profil 2 — 🧱 Connaissances en construction

Vos bases sont présentes. Consolidez les thèmes les moins maîtrisés avant de faire un examen blanc.
`endif`

`if @score >= 16 && @score <= 20`
### Profil 3 — 🚀 Niveau encourageant

Poursuivez avec des entraînements ciblés et des mises en situation.
`endif`

`if @score >= 21`
### Profil 4 — ⭐ Très bonne préparation

Votre niveau est solide. Travaillez surtout les pièges et réalisez un examen blanc complet.
`endif`

1. [Voir mes résultats par thématique](BIL_CSP_INT_THEMES)

## BIL_CSP_INT_THEMES

### 📊 Résultats par thématique

- **Principes et valeurs de la République** : @score_t1/5
- **Système institutionnel et politique français** : @score_t2/5
- **Droits et devoirs** : @score_t3/5
- **Histoire, géographie, patrimoine et culture** : @score_t4/5
- **Vivre dans la société française** : @score_t5/5

1. [Voir mes recommandations](BIL_CSP_INT_RECO)

## BIL_CSP_INT_RECO

### 🧭 Vos priorités de révision

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

Commencez par les priorités affichées ci-dessus, puis refaites un entraînement ciblé.

1. [📚 Commencer mes révisions](SCR_REV_MENU)
2. [📝 M’entraîner](SCR_ENT_MENU)
3. [🏠 Retour au menu principal](MENU_PRINCIPAL)

## BIL_NAT_DEC_Q01

### Question 1 sur 25

**Un citoyen a-t-il le droit d'adhérer à un parti politique ?**

1. [Non.](BIL_NAT_DEC_Q01_KO_A)
2. [Seulement les élus.](BIL_NAT_DEC_Q01_KO_B)
3. [Seulement les fonctionnaires.](BIL_NAT_DEC_Q01_KO_C)
4. [Oui, chacun est libre d'adhérer ou non.](BIL_NAT_DEC_Q01_OK_D)

## BIL_NAT_DEC_Q01_KO_A

Réponse enregistrée.

1. [Continuer](BIL_NAT_DEC_Q02)

## BIL_NAT_DEC_Q01_KO_B

Réponse enregistrée.

1. [Continuer](BIL_NAT_DEC_Q02)

## BIL_NAT_DEC_Q01_KO_C

Réponse enregistrée.

1. [Continuer](BIL_NAT_DEC_Q02)

## BIL_NAT_DEC_Q01_OK_D

`@score = calc(@score+1)`
`@score_t2 = calc(@score_t2+1)`
Réponse enregistrée.

1. [Continuer](BIL_NAT_DEC_Q02)

## BIL_NAT_DEC_Q02

### Question 2 sur 25

**Que commémore la fête nationale ?**

1. [La fin de la Seconde Guerre mondiale.](BIL_NAT_DEC_Q02_KO_A)
2. [La signature de la Constitution.](BIL_NAT_DEC_Q02_KO_B)
3. [La création de l'Union européenne.](BIL_NAT_DEC_Q02_KO_C)
4. [La prise de la Bastille en 1789 et la Fête de la Fédération de 1790.](BIL_NAT_DEC_Q02_OK_D)

## BIL_NAT_DEC_Q02_KO_A

Réponse enregistrée.

1. [Continuer](BIL_NAT_DEC_Q03)

## BIL_NAT_DEC_Q02_KO_B

Réponse enregistrée.

1. [Continuer](BIL_NAT_DEC_Q03)

## BIL_NAT_DEC_Q02_KO_C

Réponse enregistrée.

1. [Continuer](BIL_NAT_DEC_Q03)

## BIL_NAT_DEC_Q02_OK_D

`@score = calc(@score+1)`
`@score_t1 = calc(@score_t1+1)`
Réponse enregistrée.

1. [Continuer](BIL_NAT_DEC_Q03)

## BIL_NAT_DEC_Q03

### Question 3 sur 25

**Qu'est-ce que la laïcité ?**

1. [L'interdiction des religions.](BIL_NAT_DEC_Q03_KO_A)
2. [L'obligation de ne pas croire.](BIL_NAT_DEC_Q03_KO_B)
3. [Une religion officielle.](BIL_NAT_DEC_Q03_KO_C)
4. [La séparation des Églises et de l'État, garantissant la liberté de conscience et l'égalité de tous.](BIL_NAT_DEC_Q03_OK_D)

## BIL_NAT_DEC_Q03_KO_A

Réponse enregistrée.

1. [Continuer](BIL_NAT_DEC_Q04)

## BIL_NAT_DEC_Q03_KO_B

Réponse enregistrée.

1. [Continuer](BIL_NAT_DEC_Q04)

## BIL_NAT_DEC_Q03_KO_C

Réponse enregistrée.

1. [Continuer](BIL_NAT_DEC_Q04)

## BIL_NAT_DEC_Q03_OK_D

`@score = calc(@score+1)`
`@score_t1 = calc(@score_t1+1)`
Réponse enregistrée.

1. [Continuer](BIL_NAT_DEC_Q04)

## BIL_NAT_DEC_Q04

### Question 4 sur 25

**Quelle est la devise de la République française ?**

1. [Liberté, Justice, Fraternité.](BIL_NAT_DEC_Q04_KO_A)
2. [Liberté, Égalité, Fraternité.](BIL_NAT_DEC_Q04_OK_B)
3. [Égalité, Travail, Patrie.](BIL_NAT_DEC_Q04_KO_C)
4. [Liberté, Solidarité, Égalité.](BIL_NAT_DEC_Q04_KO_D)

## BIL_NAT_DEC_Q04_KO_A

Réponse enregistrée.

1. [Continuer](BIL_NAT_DEC_Q05)

## BIL_NAT_DEC_Q04_OK_B

`@score = calc(@score+1)`
`@score_t1 = calc(@score_t1+1)`
Réponse enregistrée.

1. [Continuer](BIL_NAT_DEC_Q05)

## BIL_NAT_DEC_Q04_KO_C

Réponse enregistrée.

1. [Continuer](BIL_NAT_DEC_Q05)

## BIL_NAT_DEC_Q04_KO_D

Réponse enregistrée.

1. [Continuer](BIL_NAT_DEC_Q05)

## BIL_NAT_DEC_Q05

### Question 5 sur 25

**En France, les impôts permettent de financer les dépenses publiques. Quelle proposition est correcte ?**

1. [Ils financent notamment les écoles, les hôpitaux, la police et les routes.](BIL_NAT_DEC_Q05_OK_A)
2. [Ils financent uniquement les salaires des élus.](BIL_NAT_DEC_Q05_KO_B)
3. [Ils sont reversés directement aux entreprises.](BIL_NAT_DEC_Q05_KO_C)
4. [Ils ne financent que l'armée.](BIL_NAT_DEC_Q05_KO_D)

## BIL_NAT_DEC_Q05_OK_A

`@score = calc(@score+1)`
`@score_t1 = calc(@score_t1+1)`
Réponse enregistrée.

1. [Continuer](BIL_NAT_DEC_Q06)

## BIL_NAT_DEC_Q05_KO_B

Réponse enregistrée.

1. [Continuer](BIL_NAT_DEC_Q06)

## BIL_NAT_DEC_Q05_KO_C

Réponse enregistrée.

1. [Continuer](BIL_NAT_DEC_Q06)

## BIL_NAT_DEC_Q05_KO_D

Réponse enregistrée.

1. [Continuer](BIL_NAT_DEC_Q06)

## BIL_NAT_DEC_Q06

### Question 6 sur 25

**Où est-il autorisé de fumer, alors que c'est interdit dans de nombreux lieux publics fermés ?**

1. [Dans un restaurant.](BIL_NAT_DEC_Q06_KO_A)
2. [Dans un train.](BIL_NAT_DEC_Q06_KO_B)
3. [Dans un bureau partagé.](BIL_NAT_DEC_Q06_KO_C)
4. [Chez soi.](BIL_NAT_DEC_Q06_OK_D)

## BIL_NAT_DEC_Q06_KO_A

Réponse enregistrée.

1. [Continuer](BIL_NAT_DEC_Q07)

## BIL_NAT_DEC_Q06_KO_B

Réponse enregistrée.

1. [Continuer](BIL_NAT_DEC_Q07)

## BIL_NAT_DEC_Q06_KO_C

Réponse enregistrée.

1. [Continuer](BIL_NAT_DEC_Q07)

## BIL_NAT_DEC_Q06_OK_D

`@score = calc(@score+1)`
`@score_t3 = calc(@score_t3+1)`
Réponse enregistrée.

1. [Continuer](BIL_NAT_DEC_Q07)

## BIL_NAT_DEC_Q07

### Question 7 sur 25

**Qui dirige l'action du Gouvernement au quotidien ?**

1. [Le Président de la République.](BIL_NAT_DEC_Q07_KO_A)
2. [Le Président de l'Assemblée nationale.](BIL_NAT_DEC_Q07_KO_B)
3. [Le préfet.](BIL_NAT_DEC_Q07_KO_C)
4. [Le Premier ministre.](BIL_NAT_DEC_Q07_OK_D)

## BIL_NAT_DEC_Q07_KO_A

Réponse enregistrée.

1. [Continuer](BIL_NAT_DEC_Q08)

## BIL_NAT_DEC_Q07_KO_B

Réponse enregistrée.

1. [Continuer](BIL_NAT_DEC_Q08)

## BIL_NAT_DEC_Q07_KO_C

Réponse enregistrée.

1. [Continuer](BIL_NAT_DEC_Q08)

## BIL_NAT_DEC_Q07_OK_D

`@score = calc(@score+1)`
`@score_t2 = calc(@score_t2+1)`
Réponse enregistrée.

1. [Continuer](BIL_NAT_DEC_Q08)

## BIL_NAT_DEC_Q08

### Question 8 sur 25

**Où peut-on voir la devise de la République ?**

1. [Uniquement sur les permis de conduire.](BIL_NAT_DEC_Q08_KO_A)
2. [Uniquement sur les billets en euros.](BIL_NAT_DEC_Q08_KO_B)
3. [Sur les bâtiments publics, notamment les mairies et les écoles.](BIL_NAT_DEC_Q08_OK_C)
4. [Uniquement sur les passeports étrangers.](BIL_NAT_DEC_Q08_KO_D)

## BIL_NAT_DEC_Q08_KO_A

Réponse enregistrée.

1. [Continuer](BIL_NAT_DEC_Q09)

## BIL_NAT_DEC_Q08_KO_B

Réponse enregistrée.

1. [Continuer](BIL_NAT_DEC_Q09)

## BIL_NAT_DEC_Q08_OK_C

`@score = calc(@score+1)`
`@score_t1 = calc(@score_t1+1)`
Réponse enregistrée.

1. [Continuer](BIL_NAT_DEC_Q09)

## BIL_NAT_DEC_Q08_KO_D

Réponse enregistrée.

1. [Continuer](BIL_NAT_DEC_Q09)

## BIL_NAT_DEC_Q09

### Question 9 sur 25

**Quel symbole de la République peut-on voir sur les maillots de l'équipe de France de football ?**

1. [Marianne.](BIL_NAT_DEC_Q09_KO_A)
2. [Le drapeau.](BIL_NAT_DEC_Q09_KO_B)
3. [La tour Eiffel.](BIL_NAT_DEC_Q09_KO_C)
4. [Le coq.](BIL_NAT_DEC_Q09_OK_D)

## BIL_NAT_DEC_Q09_KO_A

Réponse enregistrée.

1. [Continuer](BIL_NAT_DEC_Q10)

## BIL_NAT_DEC_Q09_KO_B

Réponse enregistrée.

1. [Continuer](BIL_NAT_DEC_Q10)

## BIL_NAT_DEC_Q09_KO_C

Réponse enregistrée.

1. [Continuer](BIL_NAT_DEC_Q10)

## BIL_NAT_DEC_Q09_OK_D

`@score = calc(@score+1)`
`@score_t1 = calc(@score_t1+1)`
Réponse enregistrée.

1. [Continuer](BIL_NAT_DEC_Q10)

## BIL_NAT_DEC_Q10

### Question 10 sur 25

**Ne pas respecter le Code de la route constitue :**

1. [Une simple recommandation ignorée.](BIL_NAT_DEC_Q10_KO_A)
2. [Un choix personnel sans conséquence.](BIL_NAT_DEC_Q10_KO_B)
3. [Une infraction punie par la loi.](BIL_NAT_DEC_Q10_OK_C)
4. [Une pratique tolérée en dehors des villes.](BIL_NAT_DEC_Q10_KO_D)

## BIL_NAT_DEC_Q10_KO_A

Réponse enregistrée.

1. [Continuer](BIL_NAT_DEC_Q11)

## BIL_NAT_DEC_Q10_KO_B

Réponse enregistrée.

1. [Continuer](BIL_NAT_DEC_Q11)

## BIL_NAT_DEC_Q10_OK_C

`@score = calc(@score+1)`
`@score_t3 = calc(@score_t3+1)`
Réponse enregistrée.

1. [Continuer](BIL_NAT_DEC_Q11)

## BIL_NAT_DEC_Q10_KO_D

Réponse enregistrée.

1. [Continuer](BIL_NAT_DEC_Q11)

## BIL_NAT_DEC_Q11

### Question 11 sur 25

**A-t-on le droit de ne pas respecter une loi que l'on juge injuste ?**

1. [Oui.](BIL_NAT_DEC_Q11_KO_A)
2. [Oui si l'on n'est pas d'accord.](BIL_NAT_DEC_Q11_KO_B)
3. [Oui selon sa religion.](BIL_NAT_DEC_Q11_KO_C)
4. [Non, chacun doit respecter la loi.](BIL_NAT_DEC_Q11_OK_D)

## BIL_NAT_DEC_Q11_KO_A

Réponse enregistrée.

1. [Continuer](BIL_NAT_DEC_Q12)

## BIL_NAT_DEC_Q11_KO_B

Réponse enregistrée.

1. [Continuer](BIL_NAT_DEC_Q12)

## BIL_NAT_DEC_Q11_KO_C

Réponse enregistrée.

1. [Continuer](BIL_NAT_DEC_Q12)

## BIL_NAT_DEC_Q11_OK_D

`@score = calc(@score+1)`
`@score_t2 = calc(@score_t2+1)`
Réponse enregistrée.

1. [Continuer](BIL_NAT_DEC_Q12)

## BIL_NAT_DEC_Q12

### Question 12 sur 25

**Une personne peut-elle être mariée à plusieurs personnes en même temps en France ?**

1. [Oui.](BIL_NAT_DEC_Q12_KO_A)
2. [Oui, selon sa religion.](BIL_NAT_DEC_Q12_KO_B)
3. [Oui, avec l'accord des époux.](BIL_NAT_DEC_Q12_KO_C)
4. [Non, la polygamie est interdite.](BIL_NAT_DEC_Q12_OK_D)

## BIL_NAT_DEC_Q12_KO_A

Réponse enregistrée.

1. [Continuer](BIL_NAT_DEC_Q13)

## BIL_NAT_DEC_Q12_KO_B

Réponse enregistrée.

1. [Continuer](BIL_NAT_DEC_Q13)

## BIL_NAT_DEC_Q12_KO_C

Réponse enregistrée.

1. [Continuer](BIL_NAT_DEC_Q13)

## BIL_NAT_DEC_Q12_OK_D

`@score = calc(@score+1)`
`@score_t3 = calc(@score_t3+1)`
Réponse enregistrée.

1. [Continuer](BIL_NAT_DEC_Q13)

## BIL_NAT_DEC_Q13

### Question 13 sur 25

**Doit-on déclarer ses revenus chaque année aux services fiscaux ?**

1. [Non.](BIL_NAT_DEC_Q13_KO_A)
2. [Seulement si l'on paie des impôts.](BIL_NAT_DEC_Q13_KO_B)
3. [Seulement les salariés.](BIL_NAT_DEC_Q13_KO_C)
4. [Oui, c'est une obligation.](BIL_NAT_DEC_Q13_OK_D)

## BIL_NAT_DEC_Q13_KO_A

Réponse enregistrée.

1. [Continuer](BIL_NAT_DEC_Q14)

## BIL_NAT_DEC_Q13_KO_B

Réponse enregistrée.

1. [Continuer](BIL_NAT_DEC_Q14)

## BIL_NAT_DEC_Q13_KO_C

Réponse enregistrée.

1. [Continuer](BIL_NAT_DEC_Q14)

## BIL_NAT_DEC_Q13_OK_D

`@score = calc(@score+1)`
`@score_t3 = calc(@score_t3+1)`
Réponse enregistrée.

1. [Continuer](BIL_NAT_DEC_Q14)

## BIL_NAT_DEC_Q14

### Question 14 sur 25

**À partir de quel âge un mineur peut-il, en principe, s'inscrire seul sur un service en ligne utilisant ses données personnelles ?**

1. [13 ans.](BIL_NAT_DEC_Q14_KO_A)
2. [15 ans.](BIL_NAT_DEC_Q14_OK_B)
3. [16 ans.](BIL_NAT_DEC_Q14_KO_C)
4. [18 ans.](BIL_NAT_DEC_Q14_KO_D)

## BIL_NAT_DEC_Q14_KO_A

Réponse enregistrée.

1. [Continuer](BIL_NAT_DEC_Q15)

## BIL_NAT_DEC_Q14_OK_B

`@score = calc(@score+1)`
`@score_t3 = calc(@score_t3+1)`
Réponse enregistrée.

1. [Continuer](BIL_NAT_DEC_Q15)

## BIL_NAT_DEC_Q14_KO_C

Réponse enregistrée.

1. [Continuer](BIL_NAT_DEC_Q15)

## BIL_NAT_DEC_Q14_KO_D

Réponse enregistrée.

1. [Continuer](BIL_NAT_DEC_Q15)

## BIL_NAT_DEC_Q15

### Question 15 sur 25

**Qui est élu lors des élections municipales ?**

1. [Le maire directement.](BIL_NAT_DEC_Q15_KO_A)
2. [Les préfets.](BIL_NAT_DEC_Q15_KO_B)
3. [Les sénateurs.](BIL_NAT_DEC_Q15_KO_C)
4. [Les conseillers municipaux.](BIL_NAT_DEC_Q15_OK_D)

## BIL_NAT_DEC_Q15_KO_A

Réponse enregistrée.

1. [Continuer](BIL_NAT_DEC_Q16)

## BIL_NAT_DEC_Q15_KO_B

Réponse enregistrée.

1. [Continuer](BIL_NAT_DEC_Q16)

## BIL_NAT_DEC_Q15_KO_C

Réponse enregistrée.

1. [Continuer](BIL_NAT_DEC_Q16)

## BIL_NAT_DEC_Q15_OK_D

`@score = calc(@score+1)`
`@score_t2 = calc(@score_t2+1)`
Réponse enregistrée.

1. [Continuer](BIL_NAT_DEC_Q16)

## BIL_NAT_DEC_Q16

### Question 16 sur 25

**Quel traité a créé officiellement l'Union européenne ?**

1. [Le traité de Versailles.](BIL_NAT_DEC_Q16_KO_A)
2. [Le traité de Rome.](BIL_NAT_DEC_Q16_KO_B)
3. [Le traité de Lisbonne.](BIL_NAT_DEC_Q16_KO_C)
4. [Le traité de Maastricht.](BIL_NAT_DEC_Q16_OK_D)

## BIL_NAT_DEC_Q16_KO_A

Réponse enregistrée.

1. [Continuer](BIL_NAT_DEC_Q17)

## BIL_NAT_DEC_Q16_KO_B

Réponse enregistrée.

1. [Continuer](BIL_NAT_DEC_Q17)

## BIL_NAT_DEC_Q16_KO_C

Réponse enregistrée.

1. [Continuer](BIL_NAT_DEC_Q17)

## BIL_NAT_DEC_Q16_OK_D

`@score = calc(@score+1)`
`@score_t2 = calc(@score_t2+1)`
Réponse enregistrée.

1. [Continuer](BIL_NAT_DEC_Q17)

## BIL_NAT_DEC_Q17

### Question 17 sur 25

**Peut-on brûler publiquement un drapeau français ?**

1. [Oui.](BIL_NAT_DEC_Q17_KO_A)
2. [Oui, si c'est dans le cadre d'une manifestation.](BIL_NAT_DEC_Q17_KO_B)
3. [Oui, au nom de la liberté d'expression.](BIL_NAT_DEC_Q17_KO_C)
4. [Non, cet acte peut être sanctionné par la loi.](BIL_NAT_DEC_Q17_OK_D)

## BIL_NAT_DEC_Q17_KO_A

Réponse enregistrée.

1. [Continuer](BIL_NAT_DEC_Q18)

## BIL_NAT_DEC_Q17_KO_B

Réponse enregistrée.

1. [Continuer](BIL_NAT_DEC_Q18)

## BIL_NAT_DEC_Q17_KO_C

Réponse enregistrée.

1. [Continuer](BIL_NAT_DEC_Q18)

## BIL_NAT_DEC_Q17_OK_D

`@score = calc(@score+1)`
`@score_t1 = calc(@score_t1+1)`
Réponse enregistrée.

1. [Continuer](BIL_NAT_DEC_Q18)

## BIL_NAT_DEC_Q18

### Question 18 sur 25

**Pour combien de temps le Président de la République est-il élu ?**

1. [4 ans.](BIL_NAT_DEC_Q18_KO_A)
2. [6 ans.](BIL_NAT_DEC_Q18_KO_B)
3. [7 ans.](BIL_NAT_DEC_Q18_KO_C)
4. [5 ans.](BIL_NAT_DEC_Q18_OK_D)

## BIL_NAT_DEC_Q18_KO_A

Réponse enregistrée.

1. [Continuer](BIL_NAT_DEC_Q19)

## BIL_NAT_DEC_Q18_KO_B

Réponse enregistrée.

1. [Continuer](BIL_NAT_DEC_Q19)

## BIL_NAT_DEC_Q18_KO_C

Réponse enregistrée.

1. [Continuer](BIL_NAT_DEC_Q19)

## BIL_NAT_DEC_Q18_OK_D

`@score = calc(@score+1)`
`@score_t2 = calc(@score_t2+1)`
Réponse enregistrée.

1. [Continuer](BIL_NAT_DEC_Q19)

## BIL_NAT_DEC_Q19

### Question 19 sur 25

**En quoi consiste le devoir de solidarité du citoyen ?**

1. [Aider uniquement sa famille.](BIL_NAT_DEC_Q19_KO_A)
2. [Donner obligatoirement de l'argent.](BIL_NAT_DEC_Q19_KO_B)
3. [Être bénévole dans une association uniquement.](BIL_NAT_DEC_Q19_KO_C)
4. [Aider les personnes en difficulté et contribuer à la solidarité nationale.](BIL_NAT_DEC_Q19_OK_D)

## BIL_NAT_DEC_Q19_KO_A

Réponse enregistrée.

1. [Continuer](BIL_NAT_DEC_Q20)

## BIL_NAT_DEC_Q19_KO_B

Réponse enregistrée.

1. [Continuer](BIL_NAT_DEC_Q20)

## BIL_NAT_DEC_Q19_KO_C

Réponse enregistrée.

1. [Continuer](BIL_NAT_DEC_Q20)

## BIL_NAT_DEC_Q19_OK_D

`@score = calc(@score+1)`
`@score_t3 = calc(@score_t3+1)`
Réponse enregistrée.

1. [Continuer](BIL_NAT_DEC_Q20)

## BIL_NAT_DEC_Q20

### Question 20 sur 25

**Parmi ces responsables, lequel est élu (et non nommé) ?**

1. [Le préfet.](BIL_NAT_DEC_Q20_KO_A)
2. [Le procureur.](BIL_NAT_DEC_Q20_KO_B)
3. [Le Premier ministre.](BIL_NAT_DEC_Q20_KO_C)
4. [Le maire.](BIL_NAT_DEC_Q20_OK_D)

## BIL_NAT_DEC_Q20_KO_A

Réponse enregistrée.

1. [Continuer](BIL_NAT_DEC_Q21)

## BIL_NAT_DEC_Q20_KO_B

Réponse enregistrée.

1. [Continuer](BIL_NAT_DEC_Q21)

## BIL_NAT_DEC_Q20_KO_C

Réponse enregistrée.

1. [Continuer](BIL_NAT_DEC_Q21)

## BIL_NAT_DEC_Q20_OK_D

`@score = calc(@score+1)`
`@score_t2 = calc(@score_t2+1)`
Réponse enregistrée.

1. [Continuer](BIL_NAT_DEC_Q21)

## BIL_NAT_DEC_Q21

### Question 21 sur 25

**L'inscription sur les listes électorales est-elle... ?**

1. [Obligatoire pour pouvoir voter.](BIL_NAT_DEC_Q21_OK_A)
2. [Facultative.](BIL_NAT_DEC_Q21_KO_B)
3. [Réservée à certaines professions.](BIL_NAT_DEC_Q21_KO_C)
4. [Automatique dès la naissance, sans démarche.](BIL_NAT_DEC_Q21_KO_D)

## BIL_NAT_DEC_Q21_OK_A

`@score = calc(@score+1)`
`@score_t2 = calc(@score_t2+1)`
Réponse enregistrée.

1. [Continuer](BIL_NAT_DEC_Q22)

## BIL_NAT_DEC_Q21_KO_B

Réponse enregistrée.

1. [Continuer](BIL_NAT_DEC_Q22)

## BIL_NAT_DEC_Q21_KO_C

Réponse enregistrée.

1. [Continuer](BIL_NAT_DEC_Q22)

## BIL_NAT_DEC_Q21_KO_D

Réponse enregistrée.

1. [Continuer](BIL_NAT_DEC_Q22)

## BIL_NAT_DEC_Q22

### Question 22 sur 25

**Tous les citoyens français ont-ils obligatoirement la même religion ?**

1. [Oui.](BIL_NAT_DEC_Q22_KO_A)
2. [Tous sont catholiques.](BIL_NAT_DEC_Q22_KO_B)
3. [Tous doivent avoir une religion.](BIL_NAT_DEC_Q22_KO_C)
4. [Non, chacun est libre de croire ou de ne pas croire.](BIL_NAT_DEC_Q22_OK_D)

## BIL_NAT_DEC_Q22_KO_A

Réponse enregistrée.

1. [Continuer](BIL_NAT_DEC_Q23)

## BIL_NAT_DEC_Q22_KO_B

Réponse enregistrée.

1. [Continuer](BIL_NAT_DEC_Q23)

## BIL_NAT_DEC_Q22_KO_C

Réponse enregistrée.

1. [Continuer](BIL_NAT_DEC_Q23)

## BIL_NAT_DEC_Q22_OK_D

`@score = calc(@score+1)`
`@score_t3 = calc(@score_t3+1)`
Réponse enregistrée.

1. [Continuer](BIL_NAT_DEC_Q23)

## BIL_NAT_DEC_Q23

### Question 23 sur 25

**À quel âge est fixée la majorité civile en France ?**

1. [16 ans.](BIL_NAT_DEC_Q23_KO_A)
2. [17 ans.](BIL_NAT_DEC_Q23_KO_B)
3. [18 ans.](BIL_NAT_DEC_Q23_OK_C)
4. [21 ans.](BIL_NAT_DEC_Q23_KO_D)

## BIL_NAT_DEC_Q23_KO_A

Réponse enregistrée.

1. [Continuer](BIL_NAT_DEC_Q24)

## BIL_NAT_DEC_Q23_KO_B

Réponse enregistrée.

1. [Continuer](BIL_NAT_DEC_Q24)

## BIL_NAT_DEC_Q23_OK_C

`@score = calc(@score+1)`
`@score_t3 = calc(@score_t3+1)`
Réponse enregistrée.

1. [Continuer](BIL_NAT_DEC_Q24)

## BIL_NAT_DEC_Q23_KO_D

Réponse enregistrée.

1. [Continuer](BIL_NAT_DEC_Q24)

## BIL_NAT_DEC_Q24

### Question 24 sur 25

**Qui doit respecter et veiller à la neutralité religieuse dans les services publics ?**

1. [Les usagers.](BIL_NAT_DEC_Q24_KO_A)
2. [Les visiteurs.](BIL_NAT_DEC_Q24_KO_B)
3. [Les élus uniquement.](BIL_NAT_DEC_Q24_KO_C)
4. [Les agents publics.](BIL_NAT_DEC_Q24_OK_D)

## BIL_NAT_DEC_Q24_KO_A

Réponse enregistrée.

1. [Continuer](BIL_NAT_DEC_Q25)

## BIL_NAT_DEC_Q24_KO_B

Réponse enregistrée.

1. [Continuer](BIL_NAT_DEC_Q25)

## BIL_NAT_DEC_Q24_KO_C

Réponse enregistrée.

1. [Continuer](BIL_NAT_DEC_Q25)

## BIL_NAT_DEC_Q24_OK_D

`@score = calc(@score+1)`
`@score_t1 = calc(@score_t1+1)`
Réponse enregistrée.

1. [Continuer](BIL_NAT_DEC_Q25)

## BIL_NAT_DEC_Q25

### Question 25 sur 25

**Une personne peut-elle changer librement de religion en France ?**

1. [Non, c'est interdit.](BIL_NAT_DEC_Q25_KO_A)
2. [Seulement avec l'accord de l'État.](BIL_NAT_DEC_Q25_KO_B)
3. [Seulement à partir de 18 ans.](BIL_NAT_DEC_Q25_KO_C)
4. [Oui, chacun est libre de changer de religion.](BIL_NAT_DEC_Q25_OK_D)

## BIL_NAT_DEC_Q25_KO_A

Réponse enregistrée.

1. [Continuer](BIL_NAT_DEC_RESULT)

## BIL_NAT_DEC_Q25_KO_B

Réponse enregistrée.

1. [Continuer](BIL_NAT_DEC_RESULT)

## BIL_NAT_DEC_Q25_KO_C

Réponse enregistrée.

1. [Continuer](BIL_NAT_DEC_RESULT)

## BIL_NAT_DEC_Q25_OK_D

`@score = calc(@score+1)`
`@score_t1 = calc(@score_t1+1)`
Réponse enregistrée.

1. [Continuer](BIL_NAT_DEC_RESULT)

## BIL_NAT_DEC_RESULT

`@pourcentage = calc(@score*4)`
### 🎯 Votre résultat

Vous avez obtenu **@score/25**, soit **@pourcentage %**.

`if @score <= 9`
### Profil 1 — 🌱 Bases à construire

Commencez par les chapitres fondamentaux et privilégiez des séances courtes et régulières.
`endif`

`if @score >= 10 && @score <= 15`
### Profil 2 — 🧱 Connaissances en construction

Vos bases sont présentes. Consolidez les thèmes les moins maîtrisés avant de faire un examen blanc.
`endif`

`if @score >= 16 && @score <= 20`
### Profil 3 — 🚀 Niveau encourageant

Poursuivez avec des entraînements ciblés et des mises en situation.
`endif`

`if @score >= 21`
### Profil 4 — ⭐ Très bonne préparation

Votre niveau est solide. Travaillez surtout les pièges et réalisez un examen blanc complet.
`endif`

1. [Voir mes résultats par thématique](BIL_NAT_DEC_THEMES)

## BIL_NAT_DEC_THEMES

### 📊 Résultats par thématique

- **Principes et valeurs de la République** : @score_t1/9
- **Système institutionnel et politique français** : @score_t2/8
- **Droits et devoirs** : @score_t3/8

> La banque Naturalisation fournie couvre actuellement les thématiques T1 à T3. Les thématiques T4 et T5 ne sont donc pas évaluées dans cette version du bilan.

1. [Voir mes recommandations](BIL_NAT_DEC_RECO)

## BIL_NAT_DEC_RECO

### 🧭 Vos priorités de révision

`if @score_t1 <= 4`
- 📚 **Priorité : Principes et valeurs de la République**
`endif`
`if @score_t2 <= 4`
- 📚 **Priorité : Système institutionnel et politique français**
`endif`
`if @score_t3 <= 4`
- 📚 **Priorité : Droits et devoirs**
`endif`

Commencez par les priorités affichées ci-dessus, puis refaites un entraînement ciblé.

1. [📚 Commencer mes révisions](SCR_REV_MENU)
2. [📝 M’entraîner](SCR_ENT_MENU)
3. [🏠 Retour au menu principal](MENU_PRINCIPAL)

## BIL_NAT_EQ_Q01

### Question 1 sur 25

**À partir de quel âge devient-on électeur en France ?**

1. [16 ans.](BIL_NAT_EQ_Q01_KO_A)
2. [17 ans.](BIL_NAT_EQ_Q01_KO_B)
3. [21 ans.](BIL_NAT_EQ_Q01_KO_C)
4. [18 ans.](BIL_NAT_EQ_Q01_OK_D)

## BIL_NAT_EQ_Q01_KO_A

Réponse enregistrée.

1. [Continuer](BIL_NAT_EQ_Q02)

## BIL_NAT_EQ_Q01_KO_B

Réponse enregistrée.

1. [Continuer](BIL_NAT_EQ_Q02)

## BIL_NAT_EQ_Q01_KO_C

Réponse enregistrée.

1. [Continuer](BIL_NAT_EQ_Q02)

## BIL_NAT_EQ_Q01_OK_D

`@score = calc(@score+1)`
`@score_t2 = calc(@score_t2+1)`
Réponse enregistrée.

1. [Continuer](BIL_NAT_EQ_Q02)

## BIL_NAT_EQ_Q02

### Question 2 sur 25

**Qui doit respecter et veiller à la neutralité religieuse dans les services publics ?**

1. [Les usagers.](BIL_NAT_EQ_Q02_KO_A)
2. [Les visiteurs.](BIL_NAT_EQ_Q02_KO_B)
3. [Les élus uniquement.](BIL_NAT_EQ_Q02_KO_C)
4. [Les agents publics.](BIL_NAT_EQ_Q02_OK_D)

## BIL_NAT_EQ_Q02_KO_A

Réponse enregistrée.

1. [Continuer](BIL_NAT_EQ_Q03)

## BIL_NAT_EQ_Q02_KO_B

Réponse enregistrée.

1. [Continuer](BIL_NAT_EQ_Q03)

## BIL_NAT_EQ_Q02_KO_C

Réponse enregistrée.

1. [Continuer](BIL_NAT_EQ_Q03)

## BIL_NAT_EQ_Q02_OK_D

`@score = calc(@score+1)`
`@score_t1 = calc(@score_t1+1)`
Réponse enregistrée.

1. [Continuer](BIL_NAT_EQ_Q03)

## BIL_NAT_EQ_Q03

### Question 3 sur 25

**Que garantit la liberté d'expression ?**

1. [Dire n'importe quoi.](BIL_NAT_EQ_Q03_KO_A)
2. [Insulter librement.](BIL_NAT_EQ_Q03_KO_B)
3. [Diffuser de fausses informations sans limite.](BIL_NAT_EQ_Q03_KO_C)
4. [Le droit d'exprimer librement ses opinions dans le respect de la loi et des droits d'autrui.](BIL_NAT_EQ_Q03_OK_D)

## BIL_NAT_EQ_Q03_KO_A

Réponse enregistrée.

1. [Continuer](BIL_NAT_EQ_Q04)

## BIL_NAT_EQ_Q03_KO_B

Réponse enregistrée.

1. [Continuer](BIL_NAT_EQ_Q04)

## BIL_NAT_EQ_Q03_KO_C

Réponse enregistrée.

1. [Continuer](BIL_NAT_EQ_Q04)

## BIL_NAT_EQ_Q03_OK_D

`@score = calc(@score+1)`
`@score_t3 = calc(@score_t3+1)`
Réponse enregistrée.

1. [Continuer](BIL_NAT_EQ_Q04)

## BIL_NAT_EQ_Q04

### Question 4 sur 25

**Quel pays a quitté l'Union européenne (Brexit) ?**

1. [La Norvège.](BIL_NAT_EQ_Q04_KO_A)
2. [La Suisse.](BIL_NAT_EQ_Q04_KO_B)
3. [L'Irlande.](BIL_NAT_EQ_Q04_KO_C)
4. [Le Royaume-Uni.](BIL_NAT_EQ_Q04_OK_D)

## BIL_NAT_EQ_Q04_KO_A

Réponse enregistrée.

1. [Continuer](BIL_NAT_EQ_Q05)

## BIL_NAT_EQ_Q04_KO_B

Réponse enregistrée.

1. [Continuer](BIL_NAT_EQ_Q05)

## BIL_NAT_EQ_Q04_KO_C

Réponse enregistrée.

1. [Continuer](BIL_NAT_EQ_Q05)

## BIL_NAT_EQ_Q04_OK_D

`@score = calc(@score+1)`
`@score_t2 = calc(@score_t2+1)`
Réponse enregistrée.

1. [Continuer](BIL_NAT_EQ_Q05)

## BIL_NAT_EQ_Q05

### Question 5 sur 25

**Qui juge et sanctionne les auteurs d'infractions ?**

1. [La police.](BIL_NAT_EQ_Q05_KO_A)
2. [Le maire.](BIL_NAT_EQ_Q05_KO_B)
3. [Le Président de la République.](BIL_NAT_EQ_Q05_KO_C)
4. [La justice.](BIL_NAT_EQ_Q05_OK_D)

## BIL_NAT_EQ_Q05_KO_A

Réponse enregistrée.

1. [Continuer](BIL_NAT_EQ_Q06)

## BIL_NAT_EQ_Q05_KO_B

Réponse enregistrée.

1. [Continuer](BIL_NAT_EQ_Q06)

## BIL_NAT_EQ_Q05_KO_C

Réponse enregistrée.

1. [Continuer](BIL_NAT_EQ_Q06)

## BIL_NAT_EQ_Q05_OK_D

`@score = calc(@score+1)`
`@score_t2 = calc(@score_t2+1)`
Réponse enregistrée.

1. [Continuer](BIL_NAT_EQ_Q06)

## BIL_NAT_EQ_Q06

### Question 6 sur 25

**La liberté d'expression sur les réseaux sociaux en France est :**

1. [Totalement libre, sans aucune limite.](BIL_NAT_EQ_Q06_KO_A)
2. [Interdite sur Internet.](BIL_NAT_EQ_Q06_KO_B)
3. [Réservée aux journalistes.](BIL_NAT_EQ_Q06_KO_C)
4. [Garantie mais encadrée par la loi (interdiction de la haine, de la diffamation, des injures...).](BIL_NAT_EQ_Q06_OK_D)

## BIL_NAT_EQ_Q06_KO_A

Réponse enregistrée.

1. [Continuer](BIL_NAT_EQ_Q07)

## BIL_NAT_EQ_Q06_KO_B

Réponse enregistrée.

1. [Continuer](BIL_NAT_EQ_Q07)

## BIL_NAT_EQ_Q06_KO_C

Réponse enregistrée.

1. [Continuer](BIL_NAT_EQ_Q07)

## BIL_NAT_EQ_Q06_OK_D

`@score = calc(@score+1)`
`@score_t1 = calc(@score_t1+1)`
Réponse enregistrée.

1. [Continuer](BIL_NAT_EQ_Q07)

## BIL_NAT_EQ_Q07

### Question 7 sur 25

**La liberté d'association est :**

1. [L'obligation d'adhérer à une association.](BIL_NAT_EQ_Q07_KO_A)
2. [Le droit de créer une association, d'y adhérer ou non.](BIL_NAT_EQ_Q07_OK_B)
3. [Une association réservée aux citoyens français.](BIL_NAT_EQ_Q07_KO_C)
4. [L'interdiction de créer une association sans autorisation de l'État.](BIL_NAT_EQ_Q07_KO_D)

## BIL_NAT_EQ_Q07_KO_A

Réponse enregistrée.

1. [Continuer](BIL_NAT_EQ_Q08)

## BIL_NAT_EQ_Q07_OK_B

`@score = calc(@score+1)`
`@score_t1 = calc(@score_t1+1)`
Réponse enregistrée.

1. [Continuer](BIL_NAT_EQ_Q08)

## BIL_NAT_EQ_Q07_KO_C

Réponse enregistrée.

1. [Continuer](BIL_NAT_EQ_Q08)

## BIL_NAT_EQ_Q07_KO_D

Réponse enregistrée.

1. [Continuer](BIL_NAT_EQ_Q08)

## BIL_NAT_EQ_Q08

### Question 8 sur 25

**Qui dirige l'action du Gouvernement au quotidien ?**

1. [Le Président de la République.](BIL_NAT_EQ_Q08_KO_A)
2. [Le Président de l'Assemblée nationale.](BIL_NAT_EQ_Q08_KO_B)
3. [Le préfet.](BIL_NAT_EQ_Q08_KO_C)
4. [Le Premier ministre.](BIL_NAT_EQ_Q08_OK_D)

## BIL_NAT_EQ_Q08_KO_A

Réponse enregistrée.

1. [Continuer](BIL_NAT_EQ_Q09)

## BIL_NAT_EQ_Q08_KO_B

Réponse enregistrée.

1. [Continuer](BIL_NAT_EQ_Q09)

## BIL_NAT_EQ_Q08_KO_C

Réponse enregistrée.

1. [Continuer](BIL_NAT_EQ_Q09)

## BIL_NAT_EQ_Q08_OK_D

`@score = calc(@score+1)`
`@score_t2 = calc(@score_t2+1)`
Réponse enregistrée.

1. [Continuer](BIL_NAT_EQ_Q09)

## BIL_NAT_EQ_Q09

### Question 9 sur 25

**Conduire un véhicule sans le permis correspondant constitue :**

1. [Une simple erreur sans conséquence.](BIL_NAT_EQ_Q09_KO_A)
2. [Un délit puni par la loi.](BIL_NAT_EQ_Q09_OK_B)
3. [Une contravention mineure.](BIL_NAT_EQ_Q09_KO_C)
4. [Une pratique tolérée pour les petites cylindrées.](BIL_NAT_EQ_Q09_KO_D)

## BIL_NAT_EQ_Q09_KO_A

Réponse enregistrée.

1. [Continuer](BIL_NAT_EQ_Q10)

## BIL_NAT_EQ_Q09_OK_B

`@score = calc(@score+1)`
`@score_t3 = calc(@score_t3+1)`
Réponse enregistrée.

1. [Continuer](BIL_NAT_EQ_Q10)

## BIL_NAT_EQ_Q09_KO_C

Réponse enregistrée.

1. [Continuer](BIL_NAT_EQ_Q10)

## BIL_NAT_EQ_Q09_KO_D

Réponse enregistrée.

1. [Continuer](BIL_NAT_EQ_Q10)

## BIL_NAT_EQ_Q10

### Question 10 sur 25

**Ne pas respecter le Code de la route constitue :**

1. [Une simple recommandation ignorée.](BIL_NAT_EQ_Q10_KO_A)
2. [Un choix personnel sans conséquence.](BIL_NAT_EQ_Q10_KO_B)
3. [Une infraction punie par la loi.](BIL_NAT_EQ_Q10_OK_C)
4. [Une pratique tolérée en dehors des villes.](BIL_NAT_EQ_Q10_KO_D)

## BIL_NAT_EQ_Q10_KO_A

Réponse enregistrée.

1. [Continuer](BIL_NAT_EQ_Q11)

## BIL_NAT_EQ_Q10_KO_B

Réponse enregistrée.

1. [Continuer](BIL_NAT_EQ_Q11)

## BIL_NAT_EQ_Q10_OK_C

`@score = calc(@score+1)`
`@score_t3 = calc(@score_t3+1)`
Réponse enregistrée.

1. [Continuer](BIL_NAT_EQ_Q11)

## BIL_NAT_EQ_Q10_KO_D

Réponse enregistrée.

1. [Continuer](BIL_NAT_EQ_Q11)

## BIL_NAT_EQ_Q11

### Question 11 sur 25

**Qui peut être désigné juré d'assises ?**

1. [Les policiers.](BIL_NAT_EQ_Q11_KO_A)
2. [Les magistrats uniquement.](BIL_NAT_EQ_Q11_KO_B)
3. [Les avocats uniquement.](BIL_NAT_EQ_Q11_KO_C)
4. [Un citoyen inscrit sur les listes électorales, tiré au sort.](BIL_NAT_EQ_Q11_OK_D)

## BIL_NAT_EQ_Q11_KO_A

Réponse enregistrée.

1. [Continuer](BIL_NAT_EQ_Q12)

## BIL_NAT_EQ_Q11_KO_B

Réponse enregistrée.

1. [Continuer](BIL_NAT_EQ_Q12)

## BIL_NAT_EQ_Q11_KO_C

Réponse enregistrée.

1. [Continuer](BIL_NAT_EQ_Q12)

## BIL_NAT_EQ_Q11_OK_D

`@score = calc(@score+1)`
`@score_t3 = calc(@score_t3+1)`
Réponse enregistrée.

1. [Continuer](BIL_NAT_EQ_Q12)

## BIL_NAT_EQ_Q12

### Question 12 sur 25

**Où peut-on voir la devise de la République ?**

1. [Uniquement sur les permis de conduire.](BIL_NAT_EQ_Q12_KO_A)
2. [Uniquement sur les billets en euros.](BIL_NAT_EQ_Q12_KO_B)
3. [Sur les bâtiments publics, notamment les mairies et les écoles.](BIL_NAT_EQ_Q12_OK_C)
4. [Uniquement sur les passeports étrangers.](BIL_NAT_EQ_Q12_KO_D)

## BIL_NAT_EQ_Q12_KO_A

Réponse enregistrée.

1. [Continuer](BIL_NAT_EQ_Q13)

## BIL_NAT_EQ_Q12_KO_B

Réponse enregistrée.

1. [Continuer](BIL_NAT_EQ_Q13)

## BIL_NAT_EQ_Q12_OK_C

`@score = calc(@score+1)`
`@score_t1 = calc(@score_t1+1)`
Réponse enregistrée.

1. [Continuer](BIL_NAT_EQ_Q13)

## BIL_NAT_EQ_Q12_KO_D

Réponse enregistrée.

1. [Continuer](BIL_NAT_EQ_Q13)

## BIL_NAT_EQ_Q13

### Question 13 sur 25

**Qui est élu lors des élections municipales ?**

1. [Le maire directement.](BIL_NAT_EQ_Q13_KO_A)
2. [Les préfets.](BIL_NAT_EQ_Q13_KO_B)
3. [Les sénateurs.](BIL_NAT_EQ_Q13_KO_C)
4. [Les conseillers municipaux.](BIL_NAT_EQ_Q13_OK_D)

## BIL_NAT_EQ_Q13_KO_A

Réponse enregistrée.

1. [Continuer](BIL_NAT_EQ_Q14)

## BIL_NAT_EQ_Q13_KO_B

Réponse enregistrée.

1. [Continuer](BIL_NAT_EQ_Q14)

## BIL_NAT_EQ_Q13_KO_C

Réponse enregistrée.

1. [Continuer](BIL_NAT_EQ_Q14)

## BIL_NAT_EQ_Q13_OK_D

`@score = calc(@score+1)`
`@score_t2 = calc(@score_t2+1)`
Réponse enregistrée.

1. [Continuer](BIL_NAT_EQ_Q14)

## BIL_NAT_EQ_Q14

### Question 14 sur 25

**À partir de quel âge la vente de boissons alcoolisées est-elle autorisée en France ?**

1. [16 ans.](BIL_NAT_EQ_Q14_KO_A)
2. [17 ans.](BIL_NAT_EQ_Q14_KO_B)
3. [18 ans.](BIL_NAT_EQ_Q14_OK_C)
4. [21 ans.](BIL_NAT_EQ_Q14_KO_D)

## BIL_NAT_EQ_Q14_KO_A

Réponse enregistrée.

1. [Continuer](BIL_NAT_EQ_Q15)

## BIL_NAT_EQ_Q14_KO_B

Réponse enregistrée.

1. [Continuer](BIL_NAT_EQ_Q15)

## BIL_NAT_EQ_Q14_OK_C

`@score = calc(@score+1)`
`@score_t3 = calc(@score_t3+1)`
Réponse enregistrée.

1. [Continuer](BIL_NAT_EQ_Q15)

## BIL_NAT_EQ_Q14_KO_D

Réponse enregistrée.

1. [Continuer](BIL_NAT_EQ_Q15)

## BIL_NAT_EQ_Q15

### Question 15 sur 25

**Comment s'appelle le texte adopté en 1789 qui affirme les droits fondamentaux des citoyens ?**

1. [La Constitution.](BIL_NAT_EQ_Q15_KO_A)
2. [Le Code civil.](BIL_NAT_EQ_Q15_KO_B)
3. [La Charte de l'environnement.](BIL_NAT_EQ_Q15_KO_C)
4. [La Déclaration des droits de l'Homme et du Citoyen de 1789.](BIL_NAT_EQ_Q15_OK_D)

## BIL_NAT_EQ_Q15_KO_A

Réponse enregistrée.

1. [Continuer](BIL_NAT_EQ_Q16)

## BIL_NAT_EQ_Q15_KO_B

Réponse enregistrée.

1. [Continuer](BIL_NAT_EQ_Q16)

## BIL_NAT_EQ_Q15_KO_C

Réponse enregistrée.

1. [Continuer](BIL_NAT_EQ_Q16)

## BIL_NAT_EQ_Q15_OK_D

`@score = calc(@score+1)`
`@score_t3 = calc(@score_t3+1)`
Réponse enregistrée.

1. [Continuer](BIL_NAT_EQ_Q16)

## BIL_NAT_EQ_Q16

### Question 16 sur 25

**Pour combien de temps les députés sont-ils élus ?**

1. [4 ans.](BIL_NAT_EQ_Q16_KO_A)
2. [6 ans.](BIL_NAT_EQ_Q16_KO_B)
3. [7 ans.](BIL_NAT_EQ_Q16_KO_C)
4. [5 ans.](BIL_NAT_EQ_Q16_OK_D)

## BIL_NAT_EQ_Q16_KO_A

Réponse enregistrée.

1. [Continuer](BIL_NAT_EQ_Q17)

## BIL_NAT_EQ_Q16_KO_B

Réponse enregistrée.

1. [Continuer](BIL_NAT_EQ_Q17)

## BIL_NAT_EQ_Q16_KO_C

Réponse enregistrée.

1. [Continuer](BIL_NAT_EQ_Q17)

## BIL_NAT_EQ_Q16_OK_D

`@score = calc(@score+1)`
`@score_t2 = calc(@score_t2+1)`
Réponse enregistrée.

1. [Continuer](BIL_NAT_EQ_Q17)

## BIL_NAT_EQ_Q17

### Question 17 sur 25

**Selon le principe de laïcité, que signifie la neutralité de l'État ?**

1. [L'État interdit les religions.](BIL_NAT_EQ_Q17_KO_A)
2. [L'État choisit une religion officielle.](BIL_NAT_EQ_Q17_KO_B)
3. [L'État finance toutes les religions.](BIL_NAT_EQ_Q17_KO_C)
4. [L'État ne favorise ni ne défavorise aucune religion.](BIL_NAT_EQ_Q17_OK_D)

## BIL_NAT_EQ_Q17_KO_A

Réponse enregistrée.

1. [Continuer](BIL_NAT_EQ_Q18)

## BIL_NAT_EQ_Q17_KO_B

Réponse enregistrée.

1. [Continuer](BIL_NAT_EQ_Q18)

## BIL_NAT_EQ_Q17_KO_C

Réponse enregistrée.

1. [Continuer](BIL_NAT_EQ_Q18)

## BIL_NAT_EQ_Q17_OK_D

`@score = calc(@score+1)`
`@score_t1 = calc(@score_t1+1)`
Réponse enregistrée.

1. [Continuer](BIL_NAT_EQ_Q18)

## BIL_NAT_EQ_Q18

### Question 18 sur 25

**En France, il est possible pour l'État de financer :**

1. [Les aumôneries dans certains services publics (hôpitaux, prisons, armées).](BIL_NAT_EQ_Q18_OK_A)
2. [N'importe quel lieu de culte, sans exception.](BIL_NAT_EQ_Q18_KO_B)
3. [Uniquement les églises catholiques.](BIL_NAT_EQ_Q18_KO_C)
4. [Aucun financement religieux, sans exception.](BIL_NAT_EQ_Q18_KO_D)

## BIL_NAT_EQ_Q18_OK_A

`@score = calc(@score+1)`
`@score_t1 = calc(@score_t1+1)`
Réponse enregistrée.

1. [Continuer](BIL_NAT_EQ_Q19)

## BIL_NAT_EQ_Q18_KO_B

Réponse enregistrée.

1. [Continuer](BIL_NAT_EQ_Q19)

## BIL_NAT_EQ_Q18_KO_C

Réponse enregistrée.

1. [Continuer](BIL_NAT_EQ_Q19)

## BIL_NAT_EQ_Q18_KO_D

Réponse enregistrée.

1. [Continuer](BIL_NAT_EQ_Q19)

## BIL_NAT_EQ_Q19

### Question 19 sur 25

**Quelle est la devise de la République française ?**

1. [Liberté, Justice, Fraternité.](BIL_NAT_EQ_Q19_KO_A)
2. [Liberté, Égalité, Fraternité.](BIL_NAT_EQ_Q19_OK_B)
3. [Égalité, Travail, Patrie.](BIL_NAT_EQ_Q19_KO_C)
4. [Liberté, Solidarité, Égalité.](BIL_NAT_EQ_Q19_KO_D)

## BIL_NAT_EQ_Q19_KO_A

Réponse enregistrée.

1. [Continuer](BIL_NAT_EQ_Q20)

## BIL_NAT_EQ_Q19_OK_B

`@score = calc(@score+1)`
`@score_t1 = calc(@score_t1+1)`
Réponse enregistrée.

1. [Continuer](BIL_NAT_EQ_Q20)

## BIL_NAT_EQ_Q19_KO_C

Réponse enregistrée.

1. [Continuer](BIL_NAT_EQ_Q20)

## BIL_NAT_EQ_Q19_KO_D

Réponse enregistrée.

1. [Continuer](BIL_NAT_EQ_Q20)

## BIL_NAT_EQ_Q20

### Question 20 sur 25

**La privation des droits civiques est réservée aux infractions les plus graves. Laquelle de ces situations peut être concernée ?**

1. [Un simple excès de vitesse.](BIL_NAT_EQ_Q20_KO_A)
2. [Une contravention de stationnement.](BIL_NAT_EQ_Q20_KO_B)
3. [Un désaccord avec un voisin.](BIL_NAT_EQ_Q20_KO_C)
4. [Un crime comme le terrorisme ou la corruption.](BIL_NAT_EQ_Q20_OK_D)

## BIL_NAT_EQ_Q20_KO_A

Réponse enregistrée.

1. [Continuer](BIL_NAT_EQ_Q21)

## BIL_NAT_EQ_Q20_KO_B

Réponse enregistrée.

1. [Continuer](BIL_NAT_EQ_Q21)

## BIL_NAT_EQ_Q20_KO_C

Réponse enregistrée.

1. [Continuer](BIL_NAT_EQ_Q21)

## BIL_NAT_EQ_Q20_OK_D

`@score = calc(@score+1)`
`@score_t3 = calc(@score_t3+1)`
Réponse enregistrée.

1. [Continuer](BIL_NAT_EQ_Q21)

## BIL_NAT_EQ_Q21

### Question 21 sur 25

**Lequel de ces actes porte gravement atteinte à la dignité humaine ?**

1. [Une critique.](BIL_NAT_EQ_Q21_KO_A)
2. [Une amende.](BIL_NAT_EQ_Q21_KO_B)
3. [Une contravention.](BIL_NAT_EQ_Q21_KO_C)
4. [La torture ou l'esclavage.](BIL_NAT_EQ_Q21_OK_D)

## BIL_NAT_EQ_Q21_KO_A

Réponse enregistrée.

1. [Continuer](BIL_NAT_EQ_Q22)

## BIL_NAT_EQ_Q21_KO_B

Réponse enregistrée.

1. [Continuer](BIL_NAT_EQ_Q22)

## BIL_NAT_EQ_Q21_KO_C

Réponse enregistrée.

1. [Continuer](BIL_NAT_EQ_Q22)

## BIL_NAT_EQ_Q21_OK_D

`@score = calc(@score+1)`
`@score_t3 = calc(@score_t3+1)`
Réponse enregistrée.

1. [Continuer](BIL_NAT_EQ_Q22)

## BIL_NAT_EQ_Q22

### Question 22 sur 25

**Que commémore la fête nationale ?**

1. [La fin de la Seconde Guerre mondiale.](BIL_NAT_EQ_Q22_KO_A)
2. [La signature de la Constitution.](BIL_NAT_EQ_Q22_KO_B)
3. [La création de l'Union européenne.](BIL_NAT_EQ_Q22_KO_C)
4. [La prise de la Bastille en 1789 et la Fête de la Fédération de 1790.](BIL_NAT_EQ_Q22_OK_D)

## BIL_NAT_EQ_Q22_KO_A

Réponse enregistrée.

1. [Continuer](BIL_NAT_EQ_Q23)

## BIL_NAT_EQ_Q22_KO_B

Réponse enregistrée.

1. [Continuer](BIL_NAT_EQ_Q23)

## BIL_NAT_EQ_Q22_KO_C

Réponse enregistrée.

1. [Continuer](BIL_NAT_EQ_Q23)

## BIL_NAT_EQ_Q22_OK_D

`@score = calc(@score+1)`
`@score_t1 = calc(@score_t1+1)`
Réponse enregistrée.

1. [Continuer](BIL_NAT_EQ_Q23)

## BIL_NAT_EQ_Q23

### Question 23 sur 25

**Combien de départements compte la France ?**

1. [96.](BIL_NAT_EQ_Q23_KO_A)
2. [98.](BIL_NAT_EQ_Q23_KO_B)
3. [13.](BIL_NAT_EQ_Q23_KO_C)
4. [101.](BIL_NAT_EQ_Q23_OK_D)

## BIL_NAT_EQ_Q23_KO_A

Réponse enregistrée.

1. [Continuer](BIL_NAT_EQ_Q24)

## BIL_NAT_EQ_Q23_KO_B

Réponse enregistrée.

1. [Continuer](BIL_NAT_EQ_Q24)

## BIL_NAT_EQ_Q23_KO_C

Réponse enregistrée.

1. [Continuer](BIL_NAT_EQ_Q24)

## BIL_NAT_EQ_Q23_OK_D

`@score = calc(@score+1)`
`@score_t2 = calc(@score_t2+1)`
Réponse enregistrée.

1. [Continuer](BIL_NAT_EQ_Q24)

## BIL_NAT_EQ_Q24

### Question 24 sur 25

**Quel prénom évoque un symbole de la République ?**

1. [Jeanne.](BIL_NAT_EQ_Q24_KO_A)
2. [Marie.](BIL_NAT_EQ_Q24_KO_B)
3. [Marianne.](BIL_NAT_EQ_Q24_OK_C)
4. [Louise.](BIL_NAT_EQ_Q24_KO_D)

## BIL_NAT_EQ_Q24_KO_A

Réponse enregistrée.

1. [Continuer](BIL_NAT_EQ_Q25)

## BIL_NAT_EQ_Q24_KO_B

Réponse enregistrée.

1. [Continuer](BIL_NAT_EQ_Q25)

## BIL_NAT_EQ_Q24_OK_C

`@score = calc(@score+1)`
`@score_t1 = calc(@score_t1+1)`
Réponse enregistrée.

1. [Continuer](BIL_NAT_EQ_Q25)

## BIL_NAT_EQ_Q24_KO_D

Réponse enregistrée.

1. [Continuer](BIL_NAT_EQ_Q25)

## BIL_NAT_EQ_Q25

### Question 25 sur 25

**En quels niveaux le territoire français est-il découpé ?**

1. [Cantons et arrondissements uniquement.](BIL_NAT_EQ_Q25_KO_A)
2. [Préfectures et ministères.](BIL_NAT_EQ_Q25_KO_B)
3. [Régions et communes uniquement.](BIL_NAT_EQ_Q25_KO_C)
4. [Communes, départements et régions.](BIL_NAT_EQ_Q25_OK_D)

## BIL_NAT_EQ_Q25_KO_A

Réponse enregistrée.

1. [Continuer](BIL_NAT_EQ_RESULT)

## BIL_NAT_EQ_Q25_KO_B

Réponse enregistrée.

1. [Continuer](BIL_NAT_EQ_RESULT)

## BIL_NAT_EQ_Q25_KO_C

Réponse enregistrée.

1. [Continuer](BIL_NAT_EQ_RESULT)

## BIL_NAT_EQ_Q25_OK_D

`@score = calc(@score+1)`
`@score_t2 = calc(@score_t2+1)`
Réponse enregistrée.

1. [Continuer](BIL_NAT_EQ_RESULT)

## BIL_NAT_EQ_RESULT

`@pourcentage = calc(@score*4)`
### 🎯 Votre résultat

Vous avez obtenu **@score/25**, soit **@pourcentage %**.

`if @score <= 9`
### Profil 1 — 🌱 Bases à construire

Commencez par les chapitres fondamentaux et privilégiez des séances courtes et régulières.
`endif`

`if @score >= 10 && @score <= 15`
### Profil 2 — 🧱 Connaissances en construction

Vos bases sont présentes. Consolidez les thèmes les moins maîtrisés avant de faire un examen blanc.
`endif`

`if @score >= 16 && @score <= 20`
### Profil 3 — 🚀 Niveau encourageant

Poursuivez avec des entraînements ciblés et des mises en situation.
`endif`

`if @score >= 21`
### Profil 4 — ⭐ Très bonne préparation

Votre niveau est solide. Travaillez surtout les pièges et réalisez un examen blanc complet.
`endif`

1. [Voir mes résultats par thématique](BIL_NAT_EQ_THEMES)

## BIL_NAT_EQ_THEMES

### 📊 Résultats par thématique

- **Principes et valeurs de la République** : @score_t1/9
- **Système institutionnel et politique français** : @score_t2/8
- **Droits et devoirs** : @score_t3/8

> La banque Naturalisation fournie couvre actuellement les thématiques T1 à T3. Les thématiques T4 et T5 ne sont donc pas évaluées dans cette version du bilan.

1. [Voir mes recommandations](BIL_NAT_EQ_RECO)

## BIL_NAT_EQ_RECO

### 🧭 Vos priorités de révision

`if @score_t1 <= 4`
- 📚 **Priorité : Principes et valeurs de la République**
`endif`
`if @score_t2 <= 4`
- 📚 **Priorité : Système institutionnel et politique français**
`endif`
`if @score_t3 <= 4`
- 📚 **Priorité : Droits et devoirs**
`endif`

Commencez par les priorités affichées ci-dessus, puis refaites un entraînement ciblé.

1. [📚 Commencer mes révisions](SCR_REV_MENU)
2. [📝 M’entraîner](SCR_ENT_MENU)
3. [🏠 Retour au menu principal](MENU_PRINCIPAL)

## BIL_NAT_INT_Q01

### Question 1 sur 25

**Qu'est-ce que la citoyenneté numérique ?**

1. [Savoir utiliser un ordinateur.](BIL_NAT_INT_Q01_KO_A)
2. [Être inscrit sur un réseau social.](BIL_NAT_INT_Q01_KO_B)
3. [Avoir un téléphone portable.](BIL_NAT_INT_Q01_KO_C)
4. [L'utilisation responsable, respectueuse et sécurisée des outils numériques et d'Internet.](BIL_NAT_INT_Q01_OK_D)

## BIL_NAT_INT_Q01_KO_A

Réponse enregistrée.

1. [Continuer](BIL_NAT_INT_Q02)

## BIL_NAT_INT_Q01_KO_B

Réponse enregistrée.

1. [Continuer](BIL_NAT_INT_Q02)

## BIL_NAT_INT_Q01_KO_C

Réponse enregistrée.

1. [Continuer](BIL_NAT_INT_Q02)

## BIL_NAT_INT_Q01_OK_D

`@score = calc(@score+1)`
`@score_t3 = calc(@score_t3+1)`
Réponse enregistrée.

1. [Continuer](BIL_NAT_INT_Q02)

## BIL_NAT_INT_Q02

### Question 2 sur 25

**Quelle institution française doit rester neutre en matière de religion ?**

1. [Les citoyens.](BIL_NAT_INT_Q02_KO_A)
2. [Les associations.](BIL_NAT_INT_Q02_KO_B)
3. [Les entreprises privées.](BIL_NAT_INT_Q02_KO_C)
4. [L'État.](BIL_NAT_INT_Q02_OK_D)

## BIL_NAT_INT_Q02_KO_A

Réponse enregistrée.

1. [Continuer](BIL_NAT_INT_Q03)

## BIL_NAT_INT_Q02_KO_B

Réponse enregistrée.

1. [Continuer](BIL_NAT_INT_Q03)

## BIL_NAT_INT_Q02_KO_C

Réponse enregistrée.

1. [Continuer](BIL_NAT_INT_Q03)

## BIL_NAT_INT_Q02_OK_D

`@score = calc(@score+1)`
`@score_t1 = calc(@score_t1+1)`
Réponse enregistrée.

1. [Continuer](BIL_NAT_INT_Q03)

## BIL_NAT_INT_Q03

### Question 3 sur 25

**Quelle collectivité territoriale a la compétence des collèges publics ?**

1. [La commune.](BIL_NAT_INT_Q03_KO_A)
2. [La région.](BIL_NAT_INT_Q03_KO_B)
3. [L'État.](BIL_NAT_INT_Q03_KO_C)
4. [Le département.](BIL_NAT_INT_Q03_OK_D)

## BIL_NAT_INT_Q03_KO_A

Réponse enregistrée.

1. [Continuer](BIL_NAT_INT_Q04)

## BIL_NAT_INT_Q03_KO_B

Réponse enregistrée.

1. [Continuer](BIL_NAT_INT_Q04)

## BIL_NAT_INT_Q03_KO_C

Réponse enregistrée.

1. [Continuer](BIL_NAT_INT_Q04)

## BIL_NAT_INT_Q03_OK_D

`@score = calc(@score+1)`
`@score_t2 = calc(@score_t2+1)`
Réponse enregistrée.

1. [Continuer](BIL_NAT_INT_Q04)

## BIL_NAT_INT_Q04

### Question 4 sur 25

**Sur quel document peut-on voir Marianne ?**

1. [Uniquement sur le permis de conduire.](BIL_NAT_INT_Q04_KO_A)
2. [Uniquement sur les billets en euros.](BIL_NAT_INT_Q04_KO_B)
3. [Uniquement sur les passeports étrangers.](BIL_NAT_INT_Q04_KO_C)
4. [Sur les timbres, les pièces de monnaie ou les documents officiels de la République.](BIL_NAT_INT_Q04_OK_D)

## BIL_NAT_INT_Q04_KO_A

Réponse enregistrée.

1. [Continuer](BIL_NAT_INT_Q05)

## BIL_NAT_INT_Q04_KO_B

Réponse enregistrée.

1. [Continuer](BIL_NAT_INT_Q05)

## BIL_NAT_INT_Q04_KO_C

Réponse enregistrée.

1. [Continuer](BIL_NAT_INT_Q05)

## BIL_NAT_INT_Q04_OK_D

`@score = calc(@score+1)`
`@score_t1 = calc(@score_t1+1)`
Réponse enregistrée.

1. [Continuer](BIL_NAT_INT_Q05)

## BIL_NAT_INT_Q05

### Question 5 sur 25

**Que peut faire un usager du service public dans une mairie ?**

1. [Être prioritaire en raison de sa religion.](BIL_NAT_INT_Q05_KO_A)
2. [Obtenir un service réservé à certaines personnes.](BIL_NAT_INT_Q05_KO_B)
3. [Choisir les règles de la mairie.](BIL_NAT_INT_Q05_KO_C)
4. [Accéder aux services publics dans les mêmes conditions que tous les autres usagers.](BIL_NAT_INT_Q05_OK_D)

## BIL_NAT_INT_Q05_KO_A

Réponse enregistrée.

1. [Continuer](BIL_NAT_INT_Q06)

## BIL_NAT_INT_Q05_KO_B

Réponse enregistrée.

1. [Continuer](BIL_NAT_INT_Q06)

## BIL_NAT_INT_Q05_KO_C

Réponse enregistrée.

1. [Continuer](BIL_NAT_INT_Q06)

## BIL_NAT_INT_Q05_OK_D

`@score = calc(@score+1)`
`@score_t1 = calc(@score_t1+1)`
Réponse enregistrée.

1. [Continuer](BIL_NAT_INT_Q06)

## BIL_NAT_INT_Q06

### Question 6 sur 25

**Quelle collectivité territoriale organise les trains régionaux (TER) ?**

1. [La commune.](BIL_NAT_INT_Q06_KO_A)
2. [Le département.](BIL_NAT_INT_Q06_KO_B)
3. [L'État.](BIL_NAT_INT_Q06_KO_C)
4. [La région.](BIL_NAT_INT_Q06_OK_D)

## BIL_NAT_INT_Q06_KO_A

Réponse enregistrée.

1. [Continuer](BIL_NAT_INT_Q07)

## BIL_NAT_INT_Q06_KO_B

Réponse enregistrée.

1. [Continuer](BIL_NAT_INT_Q07)

## BIL_NAT_INT_Q06_KO_C

Réponse enregistrée.

1. [Continuer](BIL_NAT_INT_Q07)

## BIL_NAT_INT_Q06_OK_D

`@score = calc(@score+1)`
`@score_t2 = calc(@score_t2+1)`
Réponse enregistrée.

1. [Continuer](BIL_NAT_INT_Q07)

## BIL_NAT_INT_Q07

### Question 7 sur 25

**Au nom de quoi certaines libertés peuvent-elles être limitées par la loi ?**

1. [Les opinions politiques.](BIL_NAT_INT_Q07_KO_A)
2. [Une religion.](BIL_NAT_INT_Q07_KO_B)
3. [Les intérêts d'un groupe.](BIL_NAT_INT_Q07_KO_C)
4. [L'intérêt général.](BIL_NAT_INT_Q07_OK_D)

## BIL_NAT_INT_Q07_KO_A

Réponse enregistrée.

1. [Continuer](BIL_NAT_INT_Q08)

## BIL_NAT_INT_Q07_KO_B

Réponse enregistrée.

1. [Continuer](BIL_NAT_INT_Q08)

## BIL_NAT_INT_Q07_KO_C

Réponse enregistrée.

1. [Continuer](BIL_NAT_INT_Q08)

## BIL_NAT_INT_Q07_OK_D

`@score = calc(@score+1)`
`@score_t3 = calc(@score_t3+1)`
Réponse enregistrée.

1. [Continuer](BIL_NAT_INT_Q08)

## BIL_NAT_INT_Q08

### Question 8 sur 25

**Pour combien de temps le maire et les conseillers municipaux sont-ils élus ?**

1. [5 ans.](BIL_NAT_INT_Q08_KO_A)
2. [7 ans.](BIL_NAT_INT_Q08_KO_B)
3. [9 ans.](BIL_NAT_INT_Q08_KO_C)
4. [6 ans.](BIL_NAT_INT_Q08_OK_D)

## BIL_NAT_INT_Q08_KO_A

Réponse enregistrée.

1. [Continuer](BIL_NAT_INT_Q09)

## BIL_NAT_INT_Q08_KO_B

Réponse enregistrée.

1. [Continuer](BIL_NAT_INT_Q09)

## BIL_NAT_INT_Q08_KO_C

Réponse enregistrée.

1. [Continuer](BIL_NAT_INT_Q09)

## BIL_NAT_INT_Q08_OK_D

`@score = calc(@score+1)`
`@score_t2 = calc(@score_t2+1)`
Réponse enregistrée.

1. [Continuer](BIL_NAT_INT_Q09)

## BIL_NAT_INT_Q09

### Question 9 sur 25

**Quel jour célèbre-t-on officiellement la laïcité en France ?**

1. [Le 14 juillet.](BIL_NAT_INT_Q09_KO_A)
2. [Le 11 novembre.](BIL_NAT_INT_Q09_KO_B)
3. [Le 8 mai.](BIL_NAT_INT_Q09_KO_C)
4. [Le 9 décembre.](BIL_NAT_INT_Q09_OK_D)

## BIL_NAT_INT_Q09_KO_A

Réponse enregistrée.

1. [Continuer](BIL_NAT_INT_Q10)

## BIL_NAT_INT_Q09_KO_B

Réponse enregistrée.

1. [Continuer](BIL_NAT_INT_Q10)

## BIL_NAT_INT_Q09_KO_C

Réponse enregistrée.

1. [Continuer](BIL_NAT_INT_Q10)

## BIL_NAT_INT_Q09_OK_D

`@score = calc(@score+1)`
`@score_t1 = calc(@score_t1+1)`
Réponse enregistrée.

1. [Continuer](BIL_NAT_INT_Q10)

## BIL_NAT_INT_Q10

### Question 10 sur 25

**Qui vote les lois en France ?**

1. [Le Président de la République.](BIL_NAT_INT_Q10_KO_A)
2. [Le Premier ministre.](BIL_NAT_INT_Q10_KO_B)
3. [Le Conseil constitutionnel.](BIL_NAT_INT_Q10_KO_C)
4. [Le Parlement.](BIL_NAT_INT_Q10_OK_D)

## BIL_NAT_INT_Q10_KO_A

Réponse enregistrée.

1. [Continuer](BIL_NAT_INT_Q11)

## BIL_NAT_INT_Q10_KO_B

Réponse enregistrée.

1. [Continuer](BIL_NAT_INT_Q11)

## BIL_NAT_INT_Q10_KO_C

Réponse enregistrée.

1. [Continuer](BIL_NAT_INT_Q11)

## BIL_NAT_INT_Q10_OK_D

`@score = calc(@score+1)`
`@score_t2 = calc(@score_t2+1)`
Réponse enregistrée.

1. [Continuer](BIL_NAT_INT_Q11)

## BIL_NAT_INT_Q11

### Question 11 sur 25

**Quel texte est considéré comme le texte fondateur de la laïcité ?**

1. [La Constitution.](BIL_NAT_INT_Q11_KO_A)
2. [La Déclaration des droits de l'homme.](BIL_NAT_INT_Q11_KO_B)
3. [Le Code civil.](BIL_NAT_INT_Q11_KO_C)
4. [La loi du 9 décembre 1905 de séparation des Églises et de l'État.](BIL_NAT_INT_Q11_OK_D)

## BIL_NAT_INT_Q11_KO_A

Réponse enregistrée.

1. [Continuer](BIL_NAT_INT_Q12)

## BIL_NAT_INT_Q11_KO_B

Réponse enregistrée.

1. [Continuer](BIL_NAT_INT_Q12)

## BIL_NAT_INT_Q11_KO_C

Réponse enregistrée.

1. [Continuer](BIL_NAT_INT_Q12)

## BIL_NAT_INT_Q11_OK_D

`@score = calc(@score+1)`
`@score_t1 = calc(@score_t1+1)`
Réponse enregistrée.

1. [Continuer](BIL_NAT_INT_Q12)

## BIL_NAT_INT_Q12

### Question 12 sur 25

**Que permet la liberté de circulation ?**

1. [Entrer dans n'importe quel pays sans règle.](BIL_NAT_INT_Q12_KO_A)
2. [Aller sur un terrain privé sans autorisation.](BIL_NAT_INT_Q12_KO_B)
3. [Voyager sans respecter les contrôles applicables.](BIL_NAT_INT_Q12_KO_C)
4. [Se déplacer librement, dans le respect de la loi.](BIL_NAT_INT_Q12_OK_D)

## BIL_NAT_INT_Q12_KO_A

Réponse enregistrée.

1. [Continuer](BIL_NAT_INT_Q13)

## BIL_NAT_INT_Q12_KO_B

Réponse enregistrée.

1. [Continuer](BIL_NAT_INT_Q13)

## BIL_NAT_INT_Q12_KO_C

Réponse enregistrée.

1. [Continuer](BIL_NAT_INT_Q13)

## BIL_NAT_INT_Q12_OK_D

`@score = calc(@score+1)`
`@score_t3 = calc(@score_t3+1)`
Réponse enregistrée.

1. [Continuer](BIL_NAT_INT_Q13)

## BIL_NAT_INT_Q13

### Question 13 sur 25

**Qu'est-ce que les droits fondamentaux ?**

1. [Les règles du Code de la route.](BIL_NAT_INT_Q13_KO_A)
2. [Les droits réservés aux élus.](BIL_NAT_INT_Q13_KO_B)
3. [Les droits des entreprises.](BIL_NAT_INT_Q13_KO_C)
4. [Les droits essentiels garantis à toute personne.](BIL_NAT_INT_Q13_OK_D)

## BIL_NAT_INT_Q13_KO_A

Réponse enregistrée.

1. [Continuer](BIL_NAT_INT_Q14)

## BIL_NAT_INT_Q13_KO_B

Réponse enregistrée.

1. [Continuer](BIL_NAT_INT_Q14)

## BIL_NAT_INT_Q13_KO_C

Réponse enregistrée.

1. [Continuer](BIL_NAT_INT_Q14)

## BIL_NAT_INT_Q13_OK_D

`@score = calc(@score+1)`
`@score_t3 = calc(@score_t3+1)`
Réponse enregistrée.

1. [Continuer](BIL_NAT_INT_Q14)

## BIL_NAT_INT_Q14

### Question 14 sur 25

**Que garantit la liberté de la presse ?**

1. [On peut publier n'importe quoi.](BIL_NAT_INT_Q14_KO_A)
2. [Les journalistes sont au-dessus des lois.](BIL_NAT_INT_Q14_KO_B)
3. [Les médias peuvent diffamer librement.](BIL_NAT_INT_Q14_KO_C)
4. [La liberté d'informer et d'être informé.](BIL_NAT_INT_Q14_OK_D)

## BIL_NAT_INT_Q14_KO_A

Réponse enregistrée.

1. [Continuer](BIL_NAT_INT_Q15)

## BIL_NAT_INT_Q14_KO_B

Réponse enregistrée.

1. [Continuer](BIL_NAT_INT_Q15)

## BIL_NAT_INT_Q14_KO_C

Réponse enregistrée.

1. [Continuer](BIL_NAT_INT_Q15)

## BIL_NAT_INT_Q14_OK_D

`@score = calc(@score+1)`
`@score_t3 = calc(@score_t3+1)`
Réponse enregistrée.

1. [Continuer](BIL_NAT_INT_Q15)

## BIL_NAT_INT_Q15

### Question 15 sur 25

**Quel symbole religieux peut être porté dans une école publique dans le respect de la laïcité ?**

1. [Un voile couvrant les cheveux.](BIL_NAT_INT_Q15_KO_A)
2. [Une grande croix visible.](BIL_NAT_INT_Q15_KO_B)
3. [Une kippa.](BIL_NAT_INT_Q15_KO_C)
4. [Un symbole religieux discret.](BIL_NAT_INT_Q15_OK_D)

## BIL_NAT_INT_Q15_KO_A

Réponse enregistrée.

1. [Continuer](BIL_NAT_INT_Q16)

## BIL_NAT_INT_Q15_KO_B

Réponse enregistrée.

1. [Continuer](BIL_NAT_INT_Q16)

## BIL_NAT_INT_Q15_KO_C

Réponse enregistrée.

1. [Continuer](BIL_NAT_INT_Q16)

## BIL_NAT_INT_Q15_OK_D

`@score = calc(@score+1)`
`@score_t1 = calc(@score_t1+1)`
Réponse enregistrée.

1. [Continuer](BIL_NAT_INT_Q16)

## BIL_NAT_INT_Q16

### Question 16 sur 25

**Où siège la Commission européenne ?**

1. [Strasbourg.](BIL_NAT_INT_Q16_KO_A)
2. [Luxembourg.](BIL_NAT_INT_Q16_KO_B)
3. [Francfort.](BIL_NAT_INT_Q16_KO_C)
4. [À Bruxelles (Belgique).](BIL_NAT_INT_Q16_OK_D)

## BIL_NAT_INT_Q16_KO_A

Réponse enregistrée.

1. [Continuer](BIL_NAT_INT_Q17)

## BIL_NAT_INT_Q16_KO_B

Réponse enregistrée.

1. [Continuer](BIL_NAT_INT_Q17)

## BIL_NAT_INT_Q16_KO_C

Réponse enregistrée.

1. [Continuer](BIL_NAT_INT_Q17)

## BIL_NAT_INT_Q16_OK_D

`@score = calc(@score+1)`
`@score_t2 = calc(@score_t2+1)`
Réponse enregistrée.

1. [Continuer](BIL_NAT_INT_Q17)

## BIL_NAT_INT_Q17

### Question 17 sur 25

**En quelle année la loi de séparation des Églises et de l'État a-t-elle été votée ?**

1. [1789.](BIL_NAT_INT_Q17_KO_A)
2. [1905.](BIL_NAT_INT_Q17_OK_B)
3. [1958.](BIL_NAT_INT_Q17_KO_C)
4. [1945.](BIL_NAT_INT_Q17_KO_D)

## BIL_NAT_INT_Q17_KO_A

Réponse enregistrée.

1. [Continuer](BIL_NAT_INT_Q18)

## BIL_NAT_INT_Q17_OK_B

`@score = calc(@score+1)`
`@score_t1 = calc(@score_t1+1)`
Réponse enregistrée.

1. [Continuer](BIL_NAT_INT_Q18)

## BIL_NAT_INT_Q17_KO_C

Réponse enregistrée.

1. [Continuer](BIL_NAT_INT_Q18)

## BIL_NAT_INT_Q17_KO_D

Réponse enregistrée.

1. [Continuer](BIL_NAT_INT_Q18)

## BIL_NAT_INT_Q18

### Question 18 sur 25

**Qu'implique le fait d'être citoyen d'un État ?**

1. [Habiter dans un pays.](BIL_NAT_INT_Q18_KO_A)
2. [Avoir uniquement des droits.](BIL_NAT_INT_Q18_KO_B)
3. [Être né dans un pays.](BIL_NAT_INT_Q18_KO_C)
4. [Avoir des droits et des devoirs dans cet État.](BIL_NAT_INT_Q18_OK_D)

## BIL_NAT_INT_Q18_KO_A

Réponse enregistrée.

1. [Continuer](BIL_NAT_INT_Q19)

## BIL_NAT_INT_Q18_KO_B

Réponse enregistrée.

1. [Continuer](BIL_NAT_INT_Q19)

## BIL_NAT_INT_Q18_KO_C

Réponse enregistrée.

1. [Continuer](BIL_NAT_INT_Q19)

## BIL_NAT_INT_Q18_OK_D

`@score = calc(@score+1)`
`@score_t3 = calc(@score_t3+1)`
Réponse enregistrée.

1. [Continuer](BIL_NAT_INT_Q19)

## BIL_NAT_INT_Q19

### Question 19 sur 25

**Citez un symbole qui représente officiellement la République française.**

1. [La tour Eiffel.](BIL_NAT_INT_Q19_KO_A)
2. [Le béret.](BIL_NAT_INT_Q19_KO_B)
3. [Marianne.](BIL_NAT_INT_Q19_OK_C)
4. [Le coq.](BIL_NAT_INT_Q19_KO_D)

## BIL_NAT_INT_Q19_KO_A

Réponse enregistrée.

1. [Continuer](BIL_NAT_INT_Q20)

## BIL_NAT_INT_Q19_KO_B

Réponse enregistrée.

1. [Continuer](BIL_NAT_INT_Q20)

## BIL_NAT_INT_Q19_OK_C

`@score = calc(@score+1)`
`@score_t1 = calc(@score_t1+1)`
Réponse enregistrée.

1. [Continuer](BIL_NAT_INT_Q20)

## BIL_NAT_INT_Q19_KO_D

Réponse enregistrée.

1. [Continuer](BIL_NAT_INT_Q20)

## BIL_NAT_INT_Q20

### Question 20 sur 25

**En cas de vacance de la présidence, qui assure provisoirement les fonctions de Président de la République ?**

1. [Le Premier ministre.](BIL_NAT_INT_Q20_KO_A)
2. [Le Président de l'Assemblée nationale.](BIL_NAT_INT_Q20_KO_B)
3. [Le ministre de l'Intérieur.](BIL_NAT_INT_Q20_KO_C)
4. [Le Président du Sénat.](BIL_NAT_INT_Q20_OK_D)

## BIL_NAT_INT_Q20_KO_A

Réponse enregistrée.

1. [Continuer](BIL_NAT_INT_Q21)

## BIL_NAT_INT_Q20_KO_B

Réponse enregistrée.

1. [Continuer](BIL_NAT_INT_Q21)

## BIL_NAT_INT_Q20_KO_C

Réponse enregistrée.

1. [Continuer](BIL_NAT_INT_Q21)

## BIL_NAT_INT_Q20_OK_D

`@score = calc(@score+1)`
`@score_t2 = calc(@score_t2+1)`
Réponse enregistrée.

1. [Continuer](BIL_NAT_INT_Q21)

## BIL_NAT_INT_Q21

### Question 21 sur 25

**Une personne déclare ne croire en aucun dieu. On peut dire :**

1. [Qu'elle a moins de droits que les autres citoyens.](BIL_NAT_INT_Q21_KO_A)
2. [Qu'elle a les mêmes droits et devoirs que les autres citoyens.](BIL_NAT_INT_Q21_OK_B)
3. [Qu'elle doit choisir une religion avant sa naturalisation.](BIL_NAT_INT_Q21_KO_C)
4. [Qu'elle ne peut pas exercer certains métiers publics.](BIL_NAT_INT_Q21_KO_D)

## BIL_NAT_INT_Q21_KO_A

Réponse enregistrée.

1. [Continuer](BIL_NAT_INT_Q22)

## BIL_NAT_INT_Q21_OK_B

`@score = calc(@score+1)`
`@score_t1 = calc(@score_t1+1)`
Réponse enregistrée.

1. [Continuer](BIL_NAT_INT_Q22)

## BIL_NAT_INT_Q21_KO_C

Réponse enregistrée.

1. [Continuer](BIL_NAT_INT_Q22)

## BIL_NAT_INT_Q21_KO_D

Réponse enregistrée.

1. [Continuer](BIL_NAT_INT_Q22)

## BIL_NAT_INT_Q22

### Question 22 sur 25

**Citez une condition nécessaire pour voter à l'élection présidentielle.**

1. [Avoir un emploi.](BIL_NAT_INT_Q22_KO_A)
2. [Être marié.](BIL_NAT_INT_Q22_KO_B)
3. [Payer des impôts.](BIL_NAT_INT_Q22_KO_C)
4. [Être de nationalité française, majeur et inscrit sur les listes électorales.](BIL_NAT_INT_Q22_OK_D)

## BIL_NAT_INT_Q22_KO_A

Réponse enregistrée.

1. [Continuer](BIL_NAT_INT_Q23)

## BIL_NAT_INT_Q22_KO_B

Réponse enregistrée.

1. [Continuer](BIL_NAT_INT_Q23)

## BIL_NAT_INT_Q22_KO_C

Réponse enregistrée.

1. [Continuer](BIL_NAT_INT_Q23)

## BIL_NAT_INT_Q22_OK_D

`@score = calc(@score+1)`
`@score_t2 = calc(@score_t2+1)`
Réponse enregistrée.

1. [Continuer](BIL_NAT_INT_Q23)

## BIL_NAT_INT_Q23

### Question 23 sur 25

**Quel est l'objectif du droit de grève ?**

1. [Ne plus travailler quand on le souhaite, sans raison.](BIL_NAT_INT_Q23_KO_A)
2. [Refuser définitivement de travailler.](BIL_NAT_INT_Q23_KO_B)
3. [Faire fermer une entreprise.](BIL_NAT_INT_Q23_KO_C)
4. [Défendre les intérêts professionnels des salariés.](BIL_NAT_INT_Q23_OK_D)

## BIL_NAT_INT_Q23_KO_A

Réponse enregistrée.

1. [Continuer](BIL_NAT_INT_Q24)

## BIL_NAT_INT_Q23_KO_B

Réponse enregistrée.

1. [Continuer](BIL_NAT_INT_Q24)

## BIL_NAT_INT_Q23_KO_C

Réponse enregistrée.

1. [Continuer](BIL_NAT_INT_Q24)

## BIL_NAT_INT_Q23_OK_D

`@score = calc(@score+1)`
`@score_t3 = calc(@score_t3+1)`
Réponse enregistrée.

1. [Continuer](BIL_NAT_INT_Q24)

## BIL_NAT_INT_Q24

### Question 24 sur 25

**Après une interpellation, que peut décider la police dans les conditions prévues par la loi ?**

1. [Condamner directement la personne.](BIL_NAT_INT_Q24_KO_A)
2. [Confisquer définitivement ses biens.](BIL_NAT_INT_Q24_KO_B)
3. [Placer la personne en garde à vue.](BIL_NAT_INT_Q24_OK_C)
4. [Informer la presse de son identité.](BIL_NAT_INT_Q24_KO_D)

## BIL_NAT_INT_Q24_KO_A

Réponse enregistrée.

1. [Continuer](BIL_NAT_INT_Q25)

## BIL_NAT_INT_Q24_KO_B

Réponse enregistrée.

1. [Continuer](BIL_NAT_INT_Q25)

## BIL_NAT_INT_Q24_OK_C

`@score = calc(@score+1)`
`@score_t3 = calc(@score_t3+1)`
Réponse enregistrée.

1. [Continuer](BIL_NAT_INT_Q25)

## BIL_NAT_INT_Q24_KO_D

Réponse enregistrée.

1. [Continuer](BIL_NAT_INT_Q25)

## BIL_NAT_INT_Q25

### Question 25 sur 25

**Quelle est la devise de l'Union européenne ?**

1. [Liberté, Égalité, Fraternité.](BIL_NAT_INT_Q25_KO_A)
2. [Paix et justice.](BIL_NAT_INT_Q25_KO_B)
3. [Tous pour un.](BIL_NAT_INT_Q25_KO_C)
4. [« Unie dans la diversité ».](BIL_NAT_INT_Q25_OK_D)

## BIL_NAT_INT_Q25_KO_A

Réponse enregistrée.

1. [Continuer](BIL_NAT_INT_RESULT)

## BIL_NAT_INT_Q25_KO_B

Réponse enregistrée.

1. [Continuer](BIL_NAT_INT_RESULT)

## BIL_NAT_INT_Q25_KO_C

Réponse enregistrée.

1. [Continuer](BIL_NAT_INT_RESULT)

## BIL_NAT_INT_Q25_OK_D

`@score = calc(@score+1)`
`@score_t2 = calc(@score_t2+1)`
Réponse enregistrée.

1. [Continuer](BIL_NAT_INT_RESULT)

## BIL_NAT_INT_RESULT

`@pourcentage = calc(@score*4)`
### 🎯 Votre résultat

Vous avez obtenu **@score/25**, soit **@pourcentage %**.

`if @score <= 9`
### Profil 1 — 🌱 Bases à construire

Commencez par les chapitres fondamentaux et privilégiez des séances courtes et régulières.
`endif`

`if @score >= 10 && @score <= 15`
### Profil 2 — 🧱 Connaissances en construction

Vos bases sont présentes. Consolidez les thèmes les moins maîtrisés avant de faire un examen blanc.
`endif`

`if @score >= 16 && @score <= 20`
### Profil 3 — 🚀 Niveau encourageant

Poursuivez avec des entraînements ciblés et des mises en situation.
`endif`

`if @score >= 21`
### Profil 4 — ⭐ Très bonne préparation

Votre niveau est solide. Travaillez surtout les pièges et réalisez un examen blanc complet.
`endif`

1. [Voir mes résultats par thématique](BIL_NAT_INT_THEMES)

## BIL_NAT_INT_THEMES

### 📊 Résultats par thématique

- **Principes et valeurs de la République** : @score_t1/9
- **Système institutionnel et politique français** : @score_t2/8
- **Droits et devoirs** : @score_t3/8

> La banque Naturalisation fournie couvre actuellement les thématiques T1 à T3. Les thématiques T4 et T5 ne sont donc pas évaluées dans cette version du bilan.

1. [Voir mes recommandations](BIL_NAT_INT_RECO)

## BIL_NAT_INT_RECO

### 🧭 Vos priorités de révision

`if @score_t1 <= 4`
- 📚 **Priorité : Principes et valeurs de la République**
`endif`
`if @score_t2 <= 4`
- 📚 **Priorité : Système institutionnel et politique français**
`endif`
`if @score_t3 <= 4`
- 📚 **Priorité : Droits et devoirs**
`endif`

Commencez par les priorités affichées ci-dessus, puis refaites un entraînement ciblé.

1. [📚 Commencer mes révisions](SCR_REV_MENU)
2. [📝 M’entraîner](SCR_ENT_MENU)
3. [🏠 Retour au menu principal](MENU_PRINCIPAL)

## SCR_BIL_PROG_001

### 📈 Mon bilan de progression

Indiquez d'abord votre dernier score sur 25. Cette version du module ne conserve pas automatiquement les résultats entre deux connexions.

`@score_precedent = @INPUT : Saisissez votre dernier score sur 25`

1. [Continuer](SCR_BIL_PROG_INFO)
2. [Retour au bilan](SCR_BIL_MENU)

## SCR_BIL_PROG_INFO

### Progression

Le parcours complet du bilan de progression sera finalisé après validation du premier bilan.

1. [Faire un premier bilan](SCR_BIL_INIT_001)
2. [Retour au bilan](SCR_BIL_MENU)
