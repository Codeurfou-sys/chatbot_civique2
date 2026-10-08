## SCR_QL_MENU
!Typewriter: false
<span class="civicoach-route" aria-hidden="true"></span>
!SelectNext: SCR_QL_RESET

## SCR_QL_RESET
!Typewriter: false
<span class="civicoach-route" aria-hidden="true"></span>
`@qlQuestion = undefined`
`@qlNormalisee = undefined`
`@qlTrouvee = undefined`
`@qlReponse = undefined`
!SelectNext: SCR_QL_INPUT

## SCR_QL_INPUT
!Keyboard: true
### ❓ Posez votre question

<span class="nova-question-input" aria-hidden="true"></span>

Dans cette rubrique, vous pouvez demander une explication simple ou une aide pour préparer l’examen.

Écrivez votre question dans la barre de saisie, puis appuyez sur **Entrée** ou sur **Envoyer**. Par exemple : « Explique-moi le Parlement » ou « Combien coûte l’examen ? ».

**Attendez quelques secondes après l’envoi : la réponse, les suggestions de rubriques et les boutons s’affichent progressivement. Attendez la fin de l’affichage avant de faire votre choix.**

`@qlQuestion = @INPUT : SCR_QL_ANSWER`

1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_AGAIN
!Typewriter: false
<span class="civicoach-route" aria-hidden="true"></span>
`@qlQuestion = undefined`
`@qlNormalisee = undefined`
`@qlTrouvee = undefined`
`@qlReponse = undefined`
!SelectNext: SCR_QL_INPUT_AGAIN

## SCR_QL_INPUT_AGAIN
!Keyboard: true
!Typewriter: false
<span class="nova-question-input" aria-hidden="true"></span>

Écrivez votre question dans la barre de saisie, puis appuyez sur **Entrée** ou sur **Envoyer**.

`@qlQuestion = @INPUT : SCR_QL_ANSWER`

1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_EXAMPLES
### Exemples de questions reconnues

- « Je ne comprends pas ce qu’est le gouvernement. »
- « Quelle est la différence entre le Gouvernement et le Parlement ? »
- « Comment puis-je mieux retenir les dates ? »
- « Comment réussir les mises en situation ? »
- « Je veux réviser les droits et les devoirs. »
- « Où puis-je m’inscrire à l’examen ? »

1. [❓ Poser ma question](SCR_QL_RESET)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_THEMES
### Chercher une notion par thème

1. [➡️ Principes et valeurs de la République](SCR_QL_THEME_T1)
2. [➡️ Institutions et système politique](SCR_QL_THEME_T2)
3. [➡️ Droits et devoirs](SCR_QL_THEME_T3)
4. [➡️ Histoire, géographie et culture](SCR_QL_THEME_T4)
5. [➡️ Vivre dans la société française](SCR_QL_THEME_T5)
6. [↩️ Retour au module](SCR_QL_MENU)

1. [↩️ ↩️ Reprendre mon activité](SCR_QL_RETOUR)


1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_THEME_T1
### Principes et valeurs de la République

1. [➡️ Citoyen](SCR_QL_GLO0019)
2. [➡️ Constitution](SCR_QL_GLO0032)
3. [➡️ Contrat d'engagement à respecter les principes de la République](SCR_QL_GLO0033)
4. [➡️ Démocratie](SCR_QL_GLO0040)
5. [➡️ Devise de la République](SCR_QL_GLO0044)
6. [➡️ Drapeau français](SCR_QL_GLO0046)
7. [➡️ Égalité](SCR_QL_GLO0049)
8. [➡️ Fête nationale](SCR_QL_GLO0057)
9. [➡️ Fraternité](SCR_QL_GLO0062)
10. [➡️ La Marseillaise](SCR_QL_GLO0078)
11. [➡️ Laïcité](SCR_QL_GLO0080)
12. [➡️ Langue de la République](SCR_QL_GLO0081)
13. [➡️ Liberté](SCR_QL_GLO0082)
14. [➡️ Liberté de conscience](SCR_QL_GLO0083)
15. [➡️ Marianne](SCR_QL_GLO0089)
16. [➡️ Neutralité](SCR_QL_GLO0098)
17. [➡️ République](SCR_QL_GLO0118)
18. [➡️ Souveraineté nationale](SCR_QL_GLO0126)
19. [➡️ Choisir un autre thème](SCR_QL_THEMES)
1. [↩️ ↩️ Reprendre mon activité](SCR_QL_RETOUR)


1. [↩️ Retour au menu du module](SCR_QL_MENU)

1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_THEME_T2
### Institutions et système politique

1. [➡️ Abstention](SCR_QL_GLO0001)
2. [➡️ Assemblée nationale](SCR_QL_GLO0004)
3. [➡️ Commission européenne](SCR_QL_GLO0023)
4. [➡️ Commune](SCR_QL_GLO0024)
5. [➡️ Conseil constitutionnel](SCR_QL_GLO0025)
6. [➡️ Conseil de l'Union européenne](SCR_QL_GLO0026)
7. [➡️ Conseil départemental](SCR_QL_GLO0027)
8. [➡️ Conseil européen](SCR_QL_GLO0028)
9. [➡️ Conseil municipal](SCR_QL_GLO0029)
10. [➡️ Conseil régional](SCR_QL_GLO0030)
11. [➡️ Département](SCR_QL_GLO0041)
12. [➡️ Député](SCR_QL_GLO0042)
13. [➡️ Député européen](SCR_QL_GLO0043)
14. [➡️ Élection](SCR_QL_GLO0050)
15. [➡️ Espace Schengen](SCR_QL_GLO0053)
16. [➡️ État](SCR_QL_GLO0054)
17. [➡️ Euro](SCR_QL_GLO0055)
18. [➡️ Gouvernement](SCR_QL_GLO0066)
19. [➡️ Justice](SCR_QL_GLO0077)
20. [➡️ Maire](SCR_QL_GLO0087)
21. [➡️ Ministre](SCR_QL_GLO0093)
22. [➡️ Parlement](SCR_QL_GLO0101)
23. [➡️ Parlement européen](SCR_QL_GLO0102)
24. [➡️ Préfet](SCR_QL_GLO0106)
25. [➡️ Premier ministre](SCR_QL_GLO0107)
26. [➡️ Président de la République](SCR_QL_GLO0109)
27. [➡️ Procuration](SCR_QL_GLO0111)
28. [➡️ Référendum](SCR_QL_GLO0116)
29. [➡️ Région](SCR_QL_GLO0117)
30. [➡️ Sénat](SCR_QL_GLO0123)
31. [➡️ Sénateur](SCR_QL_GLO0124)
32. [➡️ Suffrage universel](SCR_QL_GLO0127)
33. [➡️ Union européenne](SCR_QL_GLO0133)
34. [➡️ Vote](SCR_QL_GLO0137)
35. [➡️ Choisir un autre thème](SCR_QL_THEMES)
1. [↩️ ↩️ Reprendre mon activité](SCR_QL_RETOUR)


1. [↩️ Retour au menu du module](SCR_QL_MENU)

1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_THEME_T3
### Droits et devoirs

1. [➡️ Assistance à personne en danger](SCR_QL_GLO0005)
2. [➡️ Charte de l'environnement](SCR_QL_GLO0016)
3. [➡️ Citoyenneté](SCR_QL_GLO0020)
4. [➡️ Consentement](SCR_QL_GLO0031)
5. [➡️ Contravention](SCR_QL_GLO0035)
6. [➡️ Crime](SCR_QL_GLO0037)
7. [➡️ Déclaration des droits de l'homme et du citoyen](SCR_QL_GLO0038)
8. [➡️ Délit](SCR_QL_GLO0039)
9. [➡️ Dignité humaine](SCR_QL_GLO0045)
10. [➡️ Droits fondamentaux](SCR_QL_GLO0047)
11. [➡️ Égalité](SCR_QL_GLO0049)
12. [➡️ Environnement](SCR_QL_GLO0052)
13. [➡️ Gendarmerie](SCR_QL_GLO0065)
14. [➡️ Harcèlement](SCR_QL_GLO0069)
15. [➡️ Harcèlement scolaire](SCR_QL_GLO0070)
16. [➡️ Impôt](SCR_QL_GLO0073)
17. [➡️ Infraction](SCR_QL_GLO0074)
18. [➡️ Intégrité de la personne](SCR_QL_GLO0075)
19. [➡️ Liberté](SCR_QL_GLO0082)
20. [➡️ Loi](SCR_QL_GLO0085)
21. [➡️ Mutilations sexuelles féminines](SCR_QL_GLO0096)
22. [➡️ Ordre public](SCR_QL_GLO0099)
23. [➡️ Police](SCR_QL_GLO0104)
24. [➡️ Présomption d'innocence](SCR_QL_GLO0110)
25. [➡️ Prostitution](SCR_QL_GLO0113)
26. [➡️ Sûreté](SCR_QL_GLO0128)
27. [➡️ Traite des êtres humains](SCR_QL_GLO0131)
28. [➡️ Violence](SCR_QL_GLO0136)
29. [➡️ Choisir un autre thème](SCR_QL_THEMES)
1. [↩️ ↩️ Reprendre mon activité](SCR_QL_RETOUR)


1. [↩️ Retour au menu du module](SCR_QL_MENU)

1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_THEME_T4
### Histoire, géographie et culture

1. [➡️ Alpes](SCR_QL_GLO0002)
2. [➡️ Bretagne](SCR_QL_GLO0008)
3. [➡️ Celtes](SCR_QL_GLO0014)
4. [➡️ Charlemagne](SCR_QL_GLO0015)
5. [➡️ Château de Versailles](SCR_QL_GLO0017)
6. [➡️ Cinquième République](SCR_QL_GLO0018)
7. [➡️ Clovis](SCR_QL_GLO0021)
8. [➡️ Fête de la Musique](SCR_QL_GLO0056)
9. [➡️ France métropolitaine](SCR_QL_GLO0058)
10. [➡️ Francophonie](SCR_QL_GLO0061)
11. [➡️ Gastronomie française](SCR_QL_GLO0063)
12. [➡️ Gaule](SCR_QL_GLO0064)
13. [➡️ Guadeloupe](SCR_QL_GLO0067)
14. [➡️ Guyane](SCR_QL_GLO0068)
15. [➡️ Île-de-France](SCR_QL_GLO0072)
16. [➡️ Journées européennes du patrimoine](SCR_QL_GLO0076)
17. [➡️ La Réunion](SCR_QL_GLO0079)
18. [➡️ Martinique](SCR_QL_GLO0090)
19. [➡️ Mayotte](SCR_QL_GLO0091)
20. [➡️ Mont-Saint-Michel](SCR_QL_GLO0094)
21. [➡️ Musée du Louvre](SCR_QL_GLO0095)
22. [➡️ Outre-mer](SCR_QL_GLO0100)
23. [➡️ Patrimoine](SCR_QL_GLO0103)
24. [➡️ Première Guerre mondiale](SCR_QL_GLO0108)
25. [➡️ Provence-Alpes-Côte d'Azur](SCR_QL_GLO0114)
26. [➡️ Pyrénées](SCR_QL_GLO0115)
27. [➡️ Révolution française](SCR_QL_GLO0119)
28. [➡️ Seconde Guerre mondiale](SCR_QL_GLO0121)
29. [➡️ Seine](SCR_QL_GLO0122)
30. [➡️ Tour Eiffel](SCR_QL_GLO0130)
31. [➡️ UNESCO](SCR_QL_GLO0132)
32. [➡️ Vercingétorix](SCR_QL_GLO0135)
33. [➡️ Choisir un autre thème](SCR_QL_THEMES)
1. [↩️ ↩️ Reprendre mon activité](SCR_QL_RETOUR)


1. [↩️ Retour au menu du module](SCR_QL_MENU)

1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_THEME_T5
### Vivre dans la société française

1. [➡️ APL](SCR_QL_GLO0003)
2. [➡️ Assurance maladie](SCR_QL_GLO0006)
3. [➡️ Bail](SCR_QL_GLO0007)
4. [➡️ CAF](SCR_QL_GLO0009)
5. [<img class="civic-icon" src="https://raw.githubusercontent.com/Codeurfou-sys/chatbot_civique2/main/assets/icons/resident.svg" alt="" width="30" height="24"> Carte de résident](SCR_QL_GLO0010)
6. [➡️ Carte Vitale](SCR_QL_GLO0011)
7. [➡️ CDD](SCR_QL_GLO0012)
8. [➡️ CDI](SCR_QL_GLO0013)
9. [➡️ Collège](SCR_QL_GLO0022)
10. [➡️ Contrat de travail](SCR_QL_GLO0034)
11. [➡️ CPAM](SCR_QL_GLO0036)
12. [➡️ École](SCR_QL_GLO0048)
13. [➡️ Employeur](SCR_QL_GLO0051)
14. [➡️ France Services](SCR_QL_GLO0059)
15. [➡️ France Travail](SCR_QL_GLO0060)
16. [➡️ Hôpital](SCR_QL_GLO0071)
17. [➡️ Locataire](SCR_QL_GLO0084)
18. [➡️ Lycée](SCR_QL_GLO0086)
19. [➡️ Mairie](SCR_QL_GLO0088)
20. [➡️ Médecin traitant](SCR_QL_GLO0092)
21. [<img class="civic-icon" src="https://raw.githubusercontent.com/Codeurfou-sys/chatbot_civique2/main/assets/icons/naturalisation-v7.svg" alt="" width="30" height="24"> Naturalisation](SCR_QL_GLO0097)
22. [➡️ Préfecture](SCR_QL_GLO0105)
23. [➡️ Propriétaire](SCR_QL_GLO0112)
24. [➡️ Salaire](SCR_QL_GLO0120)
25. [➡️ Service public](SCR_QL_GLO0125)
26. [➡️ Titre de séjour](SCR_QL_GLO0129)
27. [➡️ Urgences](SCR_QL_GLO0134)
28. [➡️ Choisir un autre thème](SCR_QL_THEMES)
1. [↩️ ↩️ Reprendre mon activité](SCR_QL_RETOUR)


1. [↩️ Retour au menu du module](SCR_QL_MENU)

1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0001
### 📘 Abstention

L’**abstention** consiste à ne pas participer à une élection. Elle est différente du vote blanc.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0001)
1. [📚 Approfondir cette thématique](SCR_REV_T2_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0002
### 📘 Alpes

Massif montagneux situé à l'est de la France.

**À retenir :** Le Mont Blanc est le plus haut sommet d'Europe occidentale.

**Voir aussi :** Pyrénées.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0002)
1. [📚 Approfondir cette thématique](SCR_REV_T4_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0003
### 📘 APL

Aide personnalisée au logement versée sous certaines conditions.

**À retenir :** Elle permet de réduire le montant du loyer.

**Voir aussi :** CAF.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0003)
1. [📚 Approfondir cette thématique](SCR_REV_T5_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0004
### 📘 Assemblée nationale

L’**Assemblée nationale** est l’une des deux parties du Parlement. Les **députés** y discutent et votent les lois.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0004)
1. [📚 Approfondir cette thématique](SCR_REV_T2_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0005
### 📘 Assistance à personne en danger

Obligation d'aider une personne en danger ou d'alerter les secours lorsqu'il est possible de le faire sans risque.

**À retenir :** Ne pas porter assistance peut être puni par la loi.

**Voir aussi :** Secours.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0005)
1. [📚 Approfondir cette thématique](SCR_REV_T3_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0006
### 📘 Assurance maladie

Système de protection sociale qui rembourse tout ou partie des dépenses de santé.

**À retenir :** Toute personne résidant régulièrement en France peut bénéficier d'une couverture maladie selon sa situation.

**Voir aussi :** Carte Vitale; CPAM; Médecin traitant.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0006)
1. [📚 Approfondir cette thématique](SCR_REV_T5_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0007
### 📘 Bail

Un **bail** est un contrat entre le propriétaire d’un logement et la personne qui le loue. Il précise les conditions de la location.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0007)
1. [📚 Approfondir cette thématique](SCR_REV_T5_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0008
### 📘 Bretagne

Région située à l'ouest de la France métropolitaine.

**À retenir :** La Bretagne est connue pour son littoral, sa culture bretonne, ses ports de pêche, ses phares et ses spécialités culinaires comme les crêpes et le kouign-amann.

**Voir aussi :** Rennes; Région.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0008)
1. [📚 Approfondir cette thématique](SCR_REV_T4_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0009
### 📘 CAF

La **CAF**, ou Caisse d’allocations familiales, verse certaines aides selon la situation des personnes et des familles.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0009)
1. [📚 Approfondir cette thématique](SCR_REV_T5_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0010
### 📘 Carte de résident

La **carte de résident** est un titre de séjour valable dix ans. Les conditions et les démarches dépendent de la situation de la personne.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0010)
1. [📚 Approfondir cette thématique](SCR_REV_T5_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0011
### 📘 Carte Vitale

La **carte Vitale** sert à transmettre les informations nécessaires au remboursement des soins par l’Assurance maladie.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0011)
1. [📚 Approfondir cette thématique](SCR_REV_T5_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0012
### 📘 CDD

Un **CDD** est un contrat de travail prévu pour une durée déterminée. Il a une fin prévue selon les conditions du contrat.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0012)
1. [📚 Approfondir cette thématique](SCR_REV_T5_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0013
### 📘 CDI

Un **CDI** est un contrat de travail sans date de fin prévue à l’avance.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0013)
1. [📚 Approfondir cette thématique](SCR_REV_T5_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0014
### 📘 Celtes

Peuples installés en Gaule avant la conquête romaine.

**À retenir :** Les Gaulois étaient des peuples celtes.

**Voir aussi :** Gaule.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0014)
1. [📚 Approfondir cette thématique](SCR_REV_T4_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0015
### 📘 Charlemagne

Empereur d'Occident couronné en l'an 800.

**À retenir :** Il a contribué au développement de l'éducation et de l'organisation de son empire.

**Voir aussi :** Moyen Âge.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0015)
1. [📚 Approfondir cette thématique](SCR_REV_T4_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0016
### 📘 Charte de l'environnement

Texte à valeur constitutionnelle qui reconnaît le droit à un environnement équilibré.

**À retenir :** La protection de l'environnement est un principe constitutionnel.

**Voir aussi :** Environnement.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0016)
1. [📚 Approfondir cette thématique](SCR_REV_T3_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0017
### 📘 Château de Versailles

Ancienne résidence des rois de France située près de Paris.

**À retenir :** Il est célèbre pour son architecture et ses jardins.

**Voir aussi :** Louis XIV.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0017)
1. [📚 Approfondir cette thématique](SCR_REV_T4_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0018
### 📘 Cinquième République

Régime politique actuel de la France, instauré en 1958.

**À retenir :** La Constitution de 1958 est toujours en vigueur.

**Voir aussi :** Constitution.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0018)
1. [📚 Approfondir cette thématique](SCR_REV_T4_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0019
### 📘 Citoyen

Personne qui possède la nationalité d’un État et les droits et devoirs qui s’y rattachent. En France, le droit de vote dépend notamment de la nationalité, de l’âge et du type d’élection.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0019)
1. [📚 Approfondir cette thématique](SCR_REV_T1_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0020
### 📘 Citoyenneté

Lien juridique entre une personne et un État, donnant des droits mais aussi des devoirs.

**À retenir :** Tous les résidents ne sont pas citoyens français.

**Attention à ne pas confondre :** Citoyenneté ≠ résidence.

**Voir aussi :** Nationalité.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0020)
1. [📚 Approfondir cette thématique](SCR_REV_T3_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0021
### 📘 Clovis

Roi des Francs associé à la dynastie mérovingienne et à sa conversion au christianisme. Il a régné bien avant Charlemagne.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0021)
1. [📚 Approfondir cette thématique](SCR_REV_T4_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0022
### 📘 Collège

Établissement accueillant les élèves après l'école primaire.

**À retenir :** Le collège est obligatoire.

**Voir aussi :** Lycée.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0022)
1. [📚 Approfondir cette thématique](SCR_REV_T5_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0023
### 📘 Commission européenne

Institution chargée de proposer les lois européennes et de veiller à leur application.

**À retenir :** Elle défend l'intérêt général de l'Union européenne.

**Voir aussi :** Union européenne.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0023)
1. [📚 Approfondir cette thématique](SCR_REV_T2_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0024
### 📘 Commune

Une **commune** est une ville ou un village avec son administration locale. Le maire et le conseil municipal s’occupent des affaires de la commune.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0024)
1. [📚 Approfondir cette thématique](SCR_REV_T2_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0025
### 📘 Conseil constitutionnel

Le Conseil constitutionnel vérifie que les lois respectent la Constitution.

**À retenir :** Il protège la Constitution.

**Voir aussi :** Constitution.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0025)
1. [📚 Approfondir cette thématique](SCR_REV_T2_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0026
### 📘 Conseil de l'Union européenne

Institution où siègent les ministres des États membres.

**À retenir :** Il participe au vote des lois européennes.

**Voir aussi :** Commission européenne.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0026)
1. [📚 Approfondir cette thématique](SCR_REV_T2_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0027
### 📘 Conseil départemental

Assemblée qui administre le département.

**À retenir :** Ses membres sont les conseillers départementaux.

**Voir aussi :** Département.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0027)
1. [📚 Approfondir cette thématique](SCR_REV_T2_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0028
### 📘 Conseil européen

Réunion des chefs d'État ou de gouvernement des pays membres.

**À retenir :** Il fixe les grandes orientations politiques de l'Union européenne.

**Voir aussi :** Union européenne.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0028)
1. [📚 Approfondir cette thématique](SCR_REV_T2_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0029
### 📘 Conseil municipal

Assemblée élue qui administre la commune.

**À retenir :** Les conseillers municipaux élisent le maire.

**Voir aussi :** Maire.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0029)
1. [📚 Approfondir cette thématique](SCR_REV_T2_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0030
### 📘 Conseil régional

Assemblée qui administre la région.

**À retenir :** Ses membres sont les conseillers régionaux.

**Voir aussi :** Région.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0030)
1. [📚 Approfondir cette thématique](SCR_REV_T2_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0031
### 📘 Consentement

Le **consentement** est un accord donné librement, sans pression. Une personne doit pouvoir accepter ou refuser.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0031)
1. [📚 Approfondir cette thématique](SCR_REV_T3_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0032
### 📘 Constitution

La **Constitution** est le texte qui fixe les grandes règles de fonctionnement du pays. Elle organise les institutions et protège des droits fondamentaux.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0032)
1. [📚 Approfondir cette thématique](SCR_REV_T1_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0033
### 📘 Contrat d'engagement à respecter les principes de la République

Engagement consistant à respecter les valeurs et les principes de la République française.

**À retenir :** Le respect des principes républicains est attendu dans certains parcours administratifs.

**Voir aussi :** République; Laïcité; Valeurs de la République.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0033)
1. [📚 Approfondir cette thématique](SCR_REV_T1_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0034
### 📘 Contrat de travail

Le **contrat de travail** fixe les conditions de travail entre un employeur et un salarié.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0034)
1. [📚 Approfondir cette thématique](SCR_REV_T5_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0035
### 📘 Contravention

Infraction la moins grave.

**À retenir :** Elle est généralement punie d'une amende.

**Voir aussi :** Délit; Crime.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0035)
1. [📚 Approfondir cette thématique](SCR_REV_T3_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0036
### 📘 CPAM

La Caisse primaire d'assurance maladie gère l'Assurance maladie dans chaque département.

**À retenir :** Elle accompagne les assurés dans leurs démarches de santé.

**Voir aussi :** Carte Vitale; Assurance maladie.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0036)
1. [📚 Approfondir cette thématique](SCR_REV_T5_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0037
### 📘 Crime

Infraction la plus grave prévue par la loi.

**À retenir :** Les crimes sont jugés par une cour d'assises.

**Voir aussi :** Délit.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0037)
1. [📚 Approfondir cette thématique](SCR_REV_T3_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0038
### 📘 Déclaration des droits de l'homme et du citoyen

Texte adopté en 1789 qui affirme les droits et libertés fondamentaux.

**À retenir :** C'est l'un des textes fondateurs de la République française.

**Voir aussi :** Constitution.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0038)
1. [📚 Approfondir cette thématique](SCR_REV_T3_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0039
### 📘 Délit

Infraction plus grave qu'une contravention.

**À retenir :** Il peut être puni d'une peine de prison.

**Voir aussi :** Crime.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0039)
1. [📚 Approfondir cette thématique](SCR_REV_T3_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0040
### 📘 Démocratie

Dans une **démocratie**, le peuple participe aux décisions, notamment en choisissant ses représentants par le vote.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0040)
1. [📚 Approfondir cette thématique](SCR_REV_T1_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0041
### 📘 Département

Le département est une collectivité territoriale située entre la région et la commune.

**À retenir :** La France compte 101 départements.

**Voir aussi :** Région; Commune.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0041)
1. [📚 Approfondir cette thématique](SCR_REV_T2_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0042
### 📘 Député

Un **député** est un représentant élu qui siège à l’Assemblée nationale. Il participe au vote des lois.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0042)
1. [📚 Approfondir cette thématique](SCR_REV_T2_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0043
### 📘 Député européen

Représentant élu des citoyens au Parlement européen.

**À retenir :** Les députés européens sont élus tous les cinq ans.

**Voir aussi :** Parlement européen.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0043)
1. [📚 Approfondir cette thématique](SCR_REV_T2_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0044
### 📘 Devise de la République

La devise de la République française est **« Liberté, Égalité, Fraternité »**. Elle exprime trois valeurs communes.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0044)
1. [📚 Approfondir cette thématique](SCR_REV_T1_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0045
### 📘 Dignité humaine

La **dignité humaine** signifie que toute personne mérite le respect. On ne doit pas humilier une personne ni la traiter comme un objet.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0045)
1. [📚 Approfondir cette thématique](SCR_REV_T3_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0046
### 📘 Drapeau français

Le **drapeau français** comporte trois couleurs : bleu, blanc et rouge.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0046)
1. [📚 Approfondir cette thématique](SCR_REV_T1_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0047
### 📘 Droits fondamentaux

Ensemble des droits et libertés reconnus à toute personne et garantis par la Constitution et les textes fondamentaux.

**À retenir :** Ils protègent la dignité, la liberté et l'égalité de chacun.

**Voir aussi :** Constitution; Liberté; Égalité.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0047)
1. [📚 Approfondir cette thématique](SCR_REV_T3_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0048
### 📘 École

Établissement où les enfants reçoivent un enseignement.

**À retenir :** L'instruction est obligatoire de 3 à 16 ans.

**Voir aussi :** Collège; Lycée.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0048)
1. [📚 Approfondir cette thématique](SCR_REV_T5_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0049
### 📘 Égalité

L’**égalité** signifie que chacun a les mêmes droits devant la loi. Une personne ne doit pas être traitée moins bien en raison, par exemple, de son origine ou de sa religion.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0049)
1. [📚 Approfondir cette thématique](SCR_REV_T1_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0050
### 📘 Élection

Procédure permettant aux citoyens de choisir leurs représentants.

**À retenir :** Les élections sont au cœur de la démocratie.

**Voir aussi :** Suffrage universel.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0050)
1. [📚 Approfondir cette thématique](SCR_REV_T2_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0051
### 📘 Employeur

L’**employeur** est la personne ou l’organisation qui embauche un salarié et lui verse un salaire.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0051)
1. [📚 Approfondir cette thématique](SCR_REV_T5_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0052
### 📘 Environnement

Ensemble des éléments naturels que chacun doit protéger.

**À retenir :** La protection de l'environnement est une responsabilité collective.

**Voir aussi :** Charte de l'environnement.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0052)
1. [📚 Approfondir cette thématique](SCR_REV_T3_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0053
### 📘 Espace Schengen

Espace dans lequel les contrôles aux frontières intérieures sont supprimés entre les États participants.

**À retenir :** La France fait partie de l'espace Schengen.

**Voir aussi :** Union européenne.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0053)
1. [📚 Approfondir cette thématique](SCR_REV_T2_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0054
### 📘 État

L'État est l'organisation politique qui exerce son autorité sur le territoire français et garantit le respect des lois.

**À retenir :** L'État assure les services publics et protège les citoyens.

**Voir aussi :** République; Gouvernement; Préfet.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0054)
1. [📚 Approfondir cette thématique](SCR_REV_T2_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0055
### 📘 Euro

Monnaie utilisée par plusieurs pays de l'Union européenne.

**À retenir :** L'euro est la monnaie officielle de la France.

**Voir aussi :** Union européenne.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0055)
1. [📚 Approfondir cette thématique](SCR_REV_T2_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0056
### 📘 Fête de la Musique

Manifestation culturelle organisée chaque année le 21 juin.

**À retenir :** Elle permet à tous de partager la musique gratuitement.

**Voir aussi :** Culture.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0056)
1. [📚 Approfondir cette thématique](SCR_REV_T4_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0057
### 📘 Fête nationale

La fête nationale française est célébrée chaque année le 14 juillet.

**À retenir :** Elle commémore la prise de la Bastille et la Fête de la Fédération.

**Voir aussi :** République.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0057)
1. [📚 Approfondir cette thématique](SCR_REV_T1_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0058
### 📘 France métropolitaine

Partie du territoire français située en Europe.

**À retenir :** Elle est composée de 13 régions.

**Voir aussi :** Outre-mer.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0058)
1. [📚 Approfondir cette thématique](SCR_REV_T4_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0059
### 📘 France Services

**France Services** est un lieu où l’on peut être accompagné pour réaliser des démarches administratives.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0059)
1. [📚 Approfondir cette thématique](SCR_REV_T5_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0060
### 📘 France Travail

**France Travail** accompagne les personnes qui cherchent un emploi, notamment dans leurs recherches et leurs démarches.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0060)
1. [📚 Approfondir cette thématique](SCR_REV_T5_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0061
### 📘 Francophonie

Ensemble des personnes et des pays qui utilisent la langue française.

**À retenir :** Le français est parlé sur les cinq continents.

**Voir aussi :** Langue française.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0061)
1. [📚 Approfondir cette thématique](SCR_REV_T4_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0062
### 📘 Fraternité

La **fraternité** signifie vivre ensemble avec respect et solidarité. Aider une personne en difficulté est un exemple de solidarité.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0062)
1. [📚 Approfondir cette thématique](SCR_REV_T1_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0063
### 📘 Gastronomie française

Ensemble des traditions culinaires françaises.

**À retenir :** Le repas gastronomique des Français est inscrit au patrimoine culturel immatériel de l'UNESCO.

**Voir aussi :** UNESCO.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0063)
1. [📚 Approfondir cette thématique](SCR_REV_T4_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0064
### 📘 Gaule

Nom donné au territoire de la France actuelle avant la conquête romaine.

**À retenir :** La Gaule était peuplée de peuples celtes.

**Voir aussi :** Celtes; Vercingétorix; Jules César.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0064)
1. [📚 Approfondir cette thématique](SCR_REV_T4_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0065
### 📘 Gendarmerie

Force militaire chargée de missions de sécurité publique.

**À retenir :** Elle intervient principalement en zone rurale.

**Voir aussi :** Police.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0065)
1. [📚 Approfondir cette thématique](SCR_REV_T3_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0066
### 📘 Gouvernement

Le **gouvernement** est l’équipe qui dirige l’action du pays au quotidien. En France, il est composé du **Premier ministre et des ministres**. Il prépare des projets de loi et fait appliquer les lois. **Le Parlement vote les lois : ce n’est pas le même rôle.**

1. [📖 Voir la fiche du glossaire](SCR_GLO_0066)
1. [📚 Approfondir cette thématique](SCR_REV_T2_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0067
### 📘 Guadeloupe

Département et région d'outre-mer situé dans les Caraïbes.

**À retenir :** Elle est connue pour ses plages, son volcan de la Soufrière et sa biodiversité.

**Voir aussi :** Outre-mer.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0067)
1. [📚 Approfondir cette thématique](SCR_REV_T4_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0068
### 📘 Guyane

Département et région d'outre-mer situé en Amérique du Sud.

**À retenir :** La Guyane accueille le Centre spatial guyanais de Kourou et possède une vaste forêt amazonienne.

**Voir aussi :** Outre-mer.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0068)
1. [📚 Approfondir cette thématique](SCR_REV_T4_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0069
### 📘 Harcèlement

Violences ou comportements répétés ayant pour effet de dégrader les conditions de vie d'une personne.

**À retenir :** Le harcèlement est puni par la loi.

**Voir aussi :** Harcèlement scolaire.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0069)
1. [📚 Approfondir cette thématique](SCR_REV_T3_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0070
### 📘 Harcèlement scolaire

Violences répétées subies par un élève de la part d'autres élèves.

**À retenir :** Il s'agit d'un délit.

**Voir aussi :** Violence.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0070)
1. [📚 Approfondir cette thématique](SCR_REV_T3_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0071
### 📘 Hôpital

Établissement de santé où sont assurés les soins médicaux et chirurgicaux.

**À retenir :** Les hôpitaux publics accueillent tous les patients.

**Voir aussi :** Urgences.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0071)
1. [📚 Approfondir cette thématique](SCR_REV_T5_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0072
### 📘 Île-de-France

Région où se situe Paris, capitale de la France.

**À retenir :** Elle est la région la plus peuplée du pays et concentre de nombreuses institutions nationales.

**Voir aussi :** Paris.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0072)
1. [📚 Approfondir cette thématique](SCR_REV_T4_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0073
### 📘 Impôt

L’**impôt** est une somme payée pour financer les dépenses publiques, par exemple les écoles et les services publics.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0073)
1. [📚 Approfondir cette thématique](SCR_REV_T3_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0074
### 📘 Infraction

Acte interdit par la loi.

**À retenir :** Une infraction peut être sanctionnée.

**Voir aussi :** Contravention; Délit; Crime.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0074)
1. [📚 Approfondir cette thématique](SCR_REV_T3_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0075
### 📘 Intégrité de la personne

Droit de chacun à la protection de son corps et de son esprit.

**À retenir :** Toute atteinte injustifiée à l'intégrité est interdite.

**Voir aussi :** Dignité humaine.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0075)
1. [📚 Approfondir cette thématique](SCR_REV_T3_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0076
### 📘 Journées européennes du patrimoine

Événement annuel permettant de découvrir gratuitement de nombreux lieux patrimoniaux.

**À retenir :** Elles ont lieu chaque année en septembre.

**Voir aussi :** Patrimoine.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0076)
1. [📚 Approfondir cette thématique](SCR_REV_T4_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0077
### 📘 Justice

La **justice** fait respecter les règles, règle les conflits et sanctionne les infractions. Elle protège aussi les droits des personnes.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0077)
1. [📚 Approfondir cette thématique](SCR_REV_T2_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0078
### 📘 La Marseillaise

**La Marseillaise** est l’hymne national de la France.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0078)
1. [📚 Approfondir cette thématique](SCR_REV_T1_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0079
### 📘 La Réunion

Département et région d'outre-mer situé dans l'océan Indien.

**À retenir :** L'île est connue pour ses cirques, son volcan actif et ses paysages naturels.

**Voir aussi :** Outre-mer.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0079)
1. [📚 Approfondir cette thématique](SCR_REV_T4_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0080
### 📘 Laïcité

La **laïcité** permet à chacun de croire, de ne pas croire ou de changer de religion. L’État reste neutre à l’égard des religions. Chacun doit respecter la liberté des autres.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0080)
1. [📚 Approfondir cette thématique](SCR_REV_T1_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0081
### 📘 Langue de la République

Le français est la langue officielle de la République française.

**À retenir :** Le français est utilisé dans les administrations, les écoles et les services publics.

**Voir aussi :** République.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0081)
1. [📚 Approfondir cette thématique](SCR_REV_T1_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0082
### 📘 Liberté

La **liberté** permet de faire des choix et de s’exprimer. Elle s’exerce dans le respect de la loi et des droits des autres.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0082)
1. [📚 Approfondir cette thématique](SCR_REV_T1_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0083
### 📘 Liberté de conscience

La **liberté de conscience** permet à chacun de choisir ses convictions : croire, ne pas croire ou changer de religion.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0083)
1. [📚 Approfondir cette thématique](SCR_REV_T1_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0084
### 📘 Locataire

Le **locataire** est la personne qui loue un logement et paie un loyer au propriétaire.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0084)
1. [📚 Approfondir cette thématique](SCR_REV_T5_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0085
### 📘 Loi

Une **loi** est une règle votée par le Parlement. Elle fixe ce qui est autorisé, obligatoire ou interdit.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0085)
1. [📚 Approfondir cette thématique](SCR_REV_T3_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0086
### 📘 Lycée

Établissement préparant les élèves au baccalauréat ou à une formation professionnelle.

**À retenir :** Il existe des lycées généraux, technologiques et professionnels.

**Voir aussi :** Baccalauréat.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0086)
1. [📚 Approfondir cette thématique](SCR_REV_T5_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0087
### 📘 Maire

Le **maire** dirige la commune avec le conseil municipal. Il intervient dans les affaires locales.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0087)
1. [📚 Approfondir cette thématique](SCR_REV_T2_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0088
### 📘 Mairie

La **mairie** est le lieu où travaillent les services de la commune. On peut y faire certaines démarches administratives.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0088)
1. [📚 Approfondir cette thématique](SCR_REV_T5_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0089
### 📘 Marianne

Marianne est la représentation symbolique de la République française.

**À retenir :** Elle symbolise la liberté et la République.

**Voir aussi :** République.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0089)
1. [📚 Approfondir cette thématique](SCR_REV_T1_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0090
### 📘 Martinique

Département et région d'outre-mer situé dans les Caraïbes.

**À retenir :** La Martinique est célèbre pour la montagne Pelée et son patrimoine culturel.

**Voir aussi :** Outre-mer.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0090)
1. [📚 Approfondir cette thématique](SCR_REV_T4_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0091
### 📘 Mayotte

Département et région d'outre-mer situé dans l'océan Indien.

**À retenir :** Mayotte est le département le plus récent de la République française.

**Voir aussi :** Outre-mer.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0091)
1. [📚 Approfondir cette thématique](SCR_REV_T4_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0092
### 📘 Médecin traitant

Médecin choisi par le patient pour assurer son suivi médical.

**À retenir :** Le déclarer permet un meilleur remboursement des soins.

**Voir aussi :** Assurance maladie.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0092)
1. [📚 Approfondir cette thématique](SCR_REV_T5_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0093
### 📘 Ministre

Un **ministre** fait partie du Gouvernement. Il s’occupe d’un domaine, comme l’éducation, la santé ou la justice.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0093)
1. [📚 Approfondir cette thématique](SCR_REV_T2_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0094
### 📘 Mont-Saint-Michel

Îlot rocheux situé en Normandie sur lequel est construite une abbaye.

**À retenir :** Il est inscrit au patrimoine mondial de l'UNESCO.

**Voir aussi :** UNESCO.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0094)
1. [📚 Approfondir cette thématique](SCR_REV_T4_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0095
### 📘 Musée du Louvre

Plus grand musée d'art de France situé à Paris.

**À retenir :** Il abrite notamment la Joconde.

**Voir aussi :** Paris.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0095)
1. [📚 Approfondir cette thématique](SCR_REV_T4_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0096
### 📘 Mutilations sexuelles féminines

Interventions consistant à retirer partiellement ou totalement les organes génitaux féminins sans raison médicale.

**À retenir :** Elles sont interdites et sévèrement punies en France.

**Voir aussi :** Violence.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0096)
1. [📚 Approfondir cette thématique](SCR_REV_T3_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0097
### 📘 Naturalisation

La **naturalisation** est une procédure qui permet de devenir français sous certaines conditions. Les démarches sont expliquées dans les rubriques du chatbot.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0097)
1. [📚 Approfondir cette thématique](SCR_REV_T5_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0098
### 📘 Neutralité

La **neutralité** signifie ne pas favoriser une opinion politique ou une religion dans l’exercice d’un service public.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0098)
1. [📚 Approfondir cette thématique](SCR_REV_T1_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0099
### 📘 Ordre public

L’**ordre public** protège notamment la sécurité et la tranquillité de tous. Il permet de vivre ensemble dans un cadre commun.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0099)
1. [📚 Approfondir cette thématique](SCR_REV_T3_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0100
### 📘 Outre-mer

L’**outre-mer** désigne les territoires français situés en dehors de la France métropolitaine.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0100)
1. [📚 Approfondir cette thématique](SCR_REV_T4_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0101
### 📘 Parlement

Le **Parlement** est l’ensemble des représentants qui discutent et **votent les lois**. En France, il comprend l’**Assemblée nationale** et le **Sénat**. Le Gouvernement prépare des projets de loi ; le Parlement les examine et les vote.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0101)
1. [📚 Approfondir cette thématique](SCR_REV_T2_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0102
### 📘 Parlement européen

Institution européenne composée de députés élus par les citoyens des États membres.

**À retenir :** Il participe à l'adoption des lois européennes.

**Voir aussi :** Député européen.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0102)
1. [📚 Approfondir cette thématique](SCR_REV_T2_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0103
### 📘 Patrimoine

Le **patrimoine** est l’ensemble des lieux, des objets et des traditions transmis par les générations précédentes. Un monument historique en fait partie.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0103)
1. [📚 Approfondir cette thématique](SCR_REV_T4_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0104
### 📘 Police

Force civile chargée de protéger les personnes et de faire respecter la loi.

**À retenir :** Elle intervient principalement dans les villes.

**Voir aussi :** Gendarmerie.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0104)
1. [📚 Approfondir cette thématique](SCR_REV_T3_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0105
### 📘 Préfecture

Administration représentant l'État dans un département.

**À retenir :** Elle traite notamment certaines démarches liées au séjour des étrangers.

**Voir aussi :** Préfet.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0105)
1. [📚 Approfondir cette thématique](SCR_REV_T5_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0106
### 📘 Préfet

Le préfet représente l'État dans un département ou une région.

**À retenir :** Il est nommé par le Gouvernement.

**Attention à ne pas confondre :** Le préfet n'est pas élu.

**Voir aussi :** État; Maire.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0106)
1. [📚 Approfondir cette thématique](SCR_REV_T2_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0107
### 📘 Premier ministre

Le **Premier ministre** dirige l’action du Gouvernement. Il travaille avec les ministres pour organiser et mettre en œuvre la politique du pays.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0107)
1. [📚 Approfondir cette thématique](SCR_REV_T2_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0108
### 📘 Première Guerre mondiale

Conflit mondial de 1914 à 1918.

**À retenir :** La France fait partie des pays vainqueurs.

**Voir aussi :** Seconde Guerre mondiale.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0108)
1. [📚 Approfondir cette thématique](SCR_REV_T4_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0109
### 📘 Président de la République

Le Président de la République est le chef de l'État.

**À retenir :** Il est élu au suffrage universel direct pour cinq ans.

**Attention à ne pas confondre :** Le Président est le chef de l'État.
Le Premier ministre dirige l'action du Gouvernement.

**Voir aussi :** Gouvernement; Premier ministre.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0109)
1. [📚 Approfondir cette thématique](SCR_REV_T2_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0110
### 📘 Présomption d'innocence

La **présomption d’innocence** signifie qu’une personne est considérée comme innocente tant que sa culpabilité n’a pas été établie par la justice.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0110)
1. [📚 Approfondir cette thématique](SCR_REV_T3_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0111
### 📘 Procuration

Une **procuration** permet de confier son vote à une autre personne lorsqu’on ne peut pas voter soi-même.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0111)
1. [📚 Approfondir cette thématique](SCR_REV_T2_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0112
### 📘 Propriétaire

Personne qui possède un logement.

**À retenir :** Le propriétaire peut louer son logement.

**Voir aussi :** Bail.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0112)
1. [📚 Approfondir cette thématique](SCR_REV_T5_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0113
### 📘 Prostitution

Échange d’un acte sexuel contre une rémunération. En France, l’achat d’un acte sexuel est interdit ; le proxénétisme est également puni par la loi.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0113)
1. [📚 Approfondir cette thématique](SCR_REV_T3_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0114
### 📘 Provence-Alpes-Côte d'Azur

Région située dans le sud-est de la France.

**À retenir :** Elle est réputée pour la Méditerranée, les Alpes, Marseille, Nice et la lavande.

**Voir aussi :** Marseille; Nice.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0114)
1. [📚 Approfondir cette thématique](SCR_REV_T4_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0115
### 📘 Pyrénées

Chaîne de montagnes séparant la France et l'Espagne.

**À retenir :** Elles forment une frontière naturelle.

**Voir aussi :** Alpes.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0115)
1. [📚 Approfondir cette thématique](SCR_REV_T4_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0116
### 📘 Référendum

Un **référendum** est un vote où les citoyens répondent directement à une question, généralement par oui ou non.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0116)
1. [📚 Approfondir cette thématique](SCR_REV_T2_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0117
### 📘 Région

La région est une collectivité territoriale regroupant plusieurs départements.

**À retenir :** La France compte 18 régions.

**Voir aussi :** Département.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0117)
1. [📚 Approfondir cette thématique](SCR_REV_T2_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0118
### 📘 République

Organisation politique dans laquelle le pouvoir appartient au peuple et s'exerce conformément à la Constitution.

**À retenir :** La France est une République indivisible, laïque, démocratique et sociale.

**Attention à ne pas confondre :** République ≠ démocratie.
La République est une forme d'organisation de l'État.
La démocratie est une manière d'exercer le pouvoir.

**Voir aussi :** Constitution; Démocratie; Souveraineté nationale.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0118)
1. [📚 Approfondir cette thématique](SCR_REV_T1_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0119
### 📘 Révolution française

Période commencée en 1789 qui met fin à la monarchie absolue et fonde de nouveaux principes politiques.

**À retenir :** Elle marque la naissance des valeurs républicaines modernes.

**Voir aussi :** Déclaration des droits de l'homme et du citoyen.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0119)
1. [📚 Approfondir cette thématique](SCR_REV_T4_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0120
### 📘 Salaire

Somme versée par l'employeur en contrepartie du travail effectué.

**À retenir :** Le salaire est indiqué sur la fiche de paie.

**Voir aussi :** Employeur.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0120)
1. [📚 Approfondir cette thématique](SCR_REV_T5_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0121
### 📘 Seconde Guerre mondiale

Conflit mondial de 1939 à 1945.

**À retenir :** La Résistance a joué un rôle important dans la libération de la France.

**Voir aussi :** Résistance.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0121)
1. [📚 Approfondir cette thématique](SCR_REV_T4_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0122
### 📘 Seine

Fleuve qui traverse notamment Paris avant de se jeter dans la Manche.

**À retenir :** La Seine est l'un des principaux fleuves français.

**Voir aussi :** Loire; Rhône.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0122)
1. [📚 Approfondir cette thématique](SCR_REV_T4_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0123
### 📘 Sénat

Le **Sénat** est l’autre partie du Parlement, avec l’Assemblée nationale. Les **sénateurs** y examinent et votent les lois.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0123)
1. [📚 Approfondir cette thématique](SCR_REV_T2_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0124
### 📘 Sénateur

Le sénateur siège au Sénat.

**À retenir :** Il participe au vote des lois.

**Voir aussi :** Sénat.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0124)
1. [📚 Approfondir cette thématique](SCR_REV_T2_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0125
### 📘 Service public

Un **service public** répond à un besoin d’intérêt général. L’école publique est un exemple de service public.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0125)
1. [📚 Approfondir cette thématique](SCR_REV_T5_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0126
### 📘 Souveraineté nationale

Principe selon lequel le pouvoir appartient au peuple.

**À retenir :** Le peuple exerce sa souveraineté par ses représentants élus et par référendum.

**Attention à ne pas confondre :** La souveraineté appartient au peuple et non au Président de la République.

**Voir aussi :** République; Référendum; Citoyen.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0126)
1. [📚 Approfondir cette thématique](SCR_REV_T1_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0127
### 📘 Suffrage universel

Mode d'élection dans lequel tous les citoyens remplissant les conditions peuvent voter.

**À retenir :** En France, le vote est universel, égal et secret.

**Voir aussi :** Vote.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0127)
1. [📚 Approfondir cette thématique](SCR_REV_T2_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0128
### 📘 Sûreté

Droit d'être protégé contre les arrestations arbitraires et de bénéficier d'un procès équitable.

**À retenir :** La justice protège les libertés individuelles.

**Voir aussi :** Présomption d'innocence; Justice.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0128)
1. [📚 Approfondir cette thématique](SCR_REV_T3_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0129
### 📘 Titre de séjour

Un **titre de séjour** est un document qui autorise une personne étrangère à séjourner en France selon les conditions du titre.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0129)
1. [📚 Approfondir cette thématique](SCR_REV_T5_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0130
### 📘 Tour Eiffel

Monument emblématique situé à Paris, construit pour l'Exposition universelle de 1889.

**À retenir :** Elle est l'un des symboles les plus connus de la France.

**Voir aussi :** Paris.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0130)
1. [📚 Approfondir cette thématique](SCR_REV_T4_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0131
### 📘 Traite des êtres humains

Recrutement, transport ou accueil d’une personne pour l’exploiter, notamment par la contrainte ou la tromperie. C’est une infraction pénale grave.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0131)
1. [📚 Approfondir cette thématique](SCR_REV_T3_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0132
### 📘 UNESCO

Organisation des Nations unies pour l’éducation, la science et la culture. Elle contribue notamment à la protection du patrimoine mondial. Le Mont-Saint-Michel et sa baie sont inscrits sur la Liste du patrimoine mondial.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0132)
1. [📚 Approfondir cette thématique](SCR_REV_T4_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0133
### 📘 Union européenne

Organisation regroupant plusieurs États européens qui coopèrent dans de nombreux domaines.

**À retenir :** La France est membre de l'Union européenne.

**Voir aussi :** Parlement européen; Euro.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0133)
1. [📚 Approfondir cette thématique](SCR_REV_T2_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0134
### 📘 Urgences

Situation nécessitant une prise en charge médicale immédiate.

**À retenir :** En cas d'urgence médicale, composez le 15.

**Voir aussi :** SAMU; Hôpital.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0134)
1. [📚 Approfondir cette thématique](SCR_REV_T5_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0135
### 📘 Vercingétorix

Chef gaulois qui s'est opposé à Jules César.

**À retenir :** Il est devenu un symbole de la résistance gauloise.

**Voir aussi :** Gaule; Jules César.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0135)
1. [📚 Approfondir cette thématique](SCR_REV_T4_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0136
### 📘 Violence

Acte portant atteinte à une personne, physiquement, psychologiquement, sexuellement ou économiquement.

**À retenir :** Toutes les formes de violence sont interdites.

**Voir aussi :** Consentement.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0136)
1. [📚 Approfondir cette thématique](SCR_REV_T3_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0137
### 📘 Vote

Action qui consiste à choisir un candidat ou répondre à une question lors d'un référendum.

**À retenir :** Le vote est un droit civique.

**Voir aussi :** Élection.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0137)
1. [📚 Approfondir cette thématique](SCR_REV_T2_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_RETOUR
### ↩️ Reprendre mon activité

Choisissez le parcours que vous souhaitez reprendre.

`if @qlOrigine == "SCR_BIL_MENU"`
1. [🧭 Reprendre mon bilan](SCR_BIL_MENU)
`endif`
`if @qlOrigine == "SCR_REV_MENU"`
1. [📚 Reprendre mes révisions](SCR_REV_MENU)
`endif`
`if @qlOrigine == "SCR_GLO_MENU"`
1. [📖 Revenir au glossaire](SCR_GLO_MENU)
`endif`
`if @qlOrigine == "SCR_PREP_MENU"`
1. [🎯 Reprendre ma préparation](SCR_PREP_MENU)
`endif`
`if @qlOrigine == "SCR_ENT_MENU"`
1. [📝 Reprendre mon entraînement](SCR_ENT_MENU)
`endif`
`if @qlOrigine == "SCR_PASS_MENU"`
1. [🏛️ Revenir aux sessions d’examen](SCR_PASS_MENU)
`endif`
`if @qlOrigine == "SCR_CONS_MENU"`
1. [💡 Revenir aux conseils](SCR_CONS_MENU)
`endif`
`if @qlOrigine == "SCR_FAQ_MENU"`
1. [❔ Revenir à la FAQ](SCR_FAQ_MENU)
`endif`

2. [🏠 Retour au menu principal](MENU_PRINCIPAL)
3. [❓ Poser une autre question](SCR_QL_AGAIN)

1. [↩️ Retour au menu du module](SCR_QL_MENU)

## SCR_QL_SIMPLE_DISCRIMINATION
### 📘 Discrimination

Une **discrimination** consiste à traiter une personne moins bien pour un motif interdit, par exemple son origine ou sa religion. Le principe d’égalité protège les personnes contre ces traitements.

1. [📚 Approfondir cette thématique](SCR_REV_T3_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_SIMPLE_DEVOIR
### 📘 Devoir civique

Un **devoir** est une obligation à respecter pour vivre ensemble. Respecter la loi et les droits des autres en sont des exemples.

1. [📚 Approfondir cette thématique](SCR_REV_T3_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_SIMPLE_POUVOIRS
### 📘 Séparation des pouvoirs

La **séparation des pouvoirs** distingue trois fonctions : faire les lois, les appliquer et rendre la justice. Elles ne doivent pas toutes être concentrées dans les mêmes mains.

1. [📚 Approfondir cette thématique](SCR_REV_T2_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0197
### 📘 Abolition

Suppression officielle d’une règle, d’une pratique ou d’une peine, par exemple l’abolition de l’esclavage ou de la peine de mort.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0197)
1. [📚 Approfondir cette thématique](SCR_REV_T4_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0172
### 📘 Agents publics

Personnes qui travaillent pour une administration ou un service public. Elles doivent respecter notamment la neutralité et l’égalité de traitement.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0172)
1. [📚 Approfondir cette thématique](SCR_REV_T2_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0178
### 📘 Amende

Somme d’argent qu’une personne doit payer lorsqu’une sanction pécuniaire est prononcée à son encontre.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0178)
1. [📚 Approfondir cette thématique](SCR_REV_T3_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0192
### 📘 Armistice

Accord qui suspend les combats entre des forces en guerre. Il ne signifie pas nécessairement la fin définitive de la guerre.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0192)
1. [📚 Approfondir cette thématique](SCR_REV_T4_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0170
### 📘 Autorité parentale

Ensemble des droits et des devoirs des parents pour protéger, éduquer et accompagner leur enfant dans son intérêt.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0170)
1. [📚 Approfondir cette thématique](SCR_REV_T5_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0181
### 📘 Avocat

Professionnel du droit qui conseille une personne, défend ses intérêts et peut la représenter devant la justice.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0181)
1. [📚 Approfondir cette thématique](SCR_REV_T3_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0145
### 📘 Bénévolat

Activité réalisée librement sans rémunération, par exemple pour aider une association.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0145)
1. [📚 Approfondir cette thématique](SCR_REV_T5_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0205
### 📘 CECA

Communauté européenne du charbon et de l’acier : projet de coopération européen qui a précédé l’Union européenne.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0205)
1. [📚 Approfondir cette thématique](SCR_REV_T2_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0164
### 📘 Chef de l’État

Personne qui représente l’État au plus haut niveau. En France, le chef de l’État est le président de la République.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0164)
1. [📚 Approfondir cette thématique](SCR_REV_T2_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0165
### 📘 Collectivités territoriales

Structures qui gèrent des affaires locales grâce à des élus, par exemple les communes, les départements et les régions.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0165)
1. [📚 Approfondir cette thématique](SCR_REV_T2_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0198
### 📘 Colonisation

Prise de contrôle d’un territoire et de sa population par une puissance extérieure.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0198)
1. [📚 Approfondir cette thématique](SCR_REV_T4_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0141
### 📘 Cotisations sociales

Sommes versées par les salariés et les employeurs pour financer la protection sociale, notamment la maladie et la retraite.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0141)
1. [📚 Approfondir cette thématique](SCR_REV_T5_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0183
### 📘 Cour d’assises

Juridiction qui juge certains crimes avec des magistrats et un jury de citoyens.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0183)
1. [📚 Approfondir cette thématique](SCR_REV_T3_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0188
### 📘 Déchèterie

Lieu où l’on dépose certains déchets qui ne doivent pas être mis dans les poubelles ordinaires.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0188)
1. [📚 Approfondir cette thématique](SCR_REV_T5_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0186
### 📘 Déchets

Objets ou matières dont on se débarrasse. Il faut respecter les règles de collecte, de tri et de traitement.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0186)
1. [📚 Approfondir cette thématique](SCR_REV_T5_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0209
### 📘 Devoir

Obligation à respecter pour vivre dans la société, notamment respecter la loi et les droits d’autrui.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0209)
1. [📚 Approfondir cette thématique](SCR_REV_T3_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0168
### 📘 Divorce

Fin d’un mariage prononcée ou constatée selon une procédure légale.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0168)
1. [📚 Approfondir cette thématique](SCR_REV_T5_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0177
### 📘 Droits civiques

Droits qui permettent de participer à la vie citoyenne, notamment le droit de vote, selon les conditions prévues par la loi.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0177)
1. [📚 Approfondir cette thématique](SCR_REV_T3_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0204
### 📘 DROM

Départements et régions d’outre-mer : territoires français ayant ce statut administratif.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0204)
1. [📚 Approfondir cette thématique](SCR_REV_T4_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0160
### 📘 Élections européennes

Élections par lesquelles les citoyens de l’Union européenne choisissent leurs députés au Parlement européen.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0160)
1. [📚 Approfondir cette thématique](SCR_REV_T2_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0159
### 📘 Élections municipales

Élections qui permettent de choisir les conseillers municipaux. Ceux-ci élisent ensuite le maire.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0159)
1. [📚 Approfondir cette thématique](SCR_REV_T2_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0157
### 📘 Éligibilité

Possibilité de se présenter à une élection lorsque les conditions prévues par la loi sont remplies.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0157)
1. [📚 Approfondir cette thématique](SCR_REV_T2_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0143
### 📘 Entreprise

Organisation qui produit des biens ou fournit des services. Elle peut employer des salariés.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0143)
1. [📚 Approfondir cette thématique](SCR_REV_T5_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0196
### 📘 Esclavage

Situation dans laquelle des personnes sont privées de leur liberté et traitées comme la propriété d’autrui.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0196)
1. [📚 Approfondir cette thématique](SCR_REV_T4_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0166
### 📘 État civil

Enregistrement officiel des événements importants de la vie d’une personne, notamment sa naissance, son mariage et son décès.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0166)
1. [📚 Approfondir cette thématique](SCR_REV_T5_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0202
### 📘 Fleuve

Cours d’eau qui se jette dans la mer ou dans l’océan.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0202)
1. [📚 Approfondir cette thématique](SCR_REV_T4_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0195
### 📘 Génocide

Actes commis avec l’intention de détruire, en tout ou en partie, un groupe national, ethnique, racial ou religieux.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0195)
1. [📚 Approfondir cette thématique](SCR_REV_T4_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0146
### 📘 Grève

Arrêt collectif du travail destiné à défendre des revendications professionnelles. Ce droit s’exerce dans un cadre légal.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0146)
1. [📚 Approfondir cette thématique](SCR_REV_T3_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0147
### 📘 Handicap

Limitation d’activité ou difficulté de participation à la vie sociale liée notamment à une altération physique, sensorielle ou mentale.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0147)
1. [📚 Approfondir cette thématique](SCR_REV_T5_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0200
### 📘 Impressionnisme

Courant artistique du XIXe siècle qui représente notamment les impressions de lumière et de couleur.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0200)
1. [📚 Approfondir cette thématique](SCR_REV_T4_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0171
### 📘 Instruction obligatoire

Obligation de donner à chaque enfant une instruction. Elle peut être assurée à l’école ou, sous conditions, dans la famille.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0171)
1. [📚 Approfondir cette thématique](SCR_REV_T5_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0173
### 📘 Intérêt général

Ce qui sert le bien commun, au-delà des intérêts particuliers d’une personne ou d’un groupe.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0173)
1. [📚 Approfondir cette thématique](SCR_REV_T1_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0185
### 📘 IVG

Interruption volontaire de grossesse : démarche permettant de mettre fin à une grossesse dans le cadre prévu par la loi.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0185)
1. [📚 Approfondir cette thématique](SCR_REV_T3_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0207
### 📘 Journée de l’Europe

Journée célébrée le 9 mai pour rappeler le projet de coopération européenne et la déclaration de Robert Schuman.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0207)
1. [📚 Approfondir cette thématique](SCR_REV_T2_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0180
### 📘 Juge

Professionnel de la justice qui applique la loi et rend des décisions pour trancher des litiges ou juger des infractions.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0180)
1. [📚 Approfondir cette thématique](SCR_REV_T2_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0182
### 📘 Juré

Citoyen appelé à participer à un jury et à juger certaines affaires aux côtés de magistrats.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0182)
1. [📚 Approfondir cette thématique](SCR_REV_T3_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0158
### 📘 Listes électorales

Listes des personnes inscrites pour voter dans une commune ou dans une circonscription.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0158)
1. [📚 Approfondir cette thématique](SCR_REV_T2_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0201
### 📘 Littérature

Ensemble des œuvres écrites, comme les romans, la poésie ou le théâtre.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0201)
1. [📚 Approfondir cette thématique](SCR_REV_T4_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0208
### 📘 Majorité

Âge à partir duquel une personne devient juridiquement adulte. Le mot désigne aussi le plus grand nombre de voix dans un vote.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0208)
1. [📚 Approfondir cette thématique](SCR_REV_T3_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0154
### 📘 Mandat

Mission confiée à une personne, notamment à un élu, pour une durée déterminée.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0154)
1. [📚 Approfondir cette thématique](SCR_REV_T2_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0203
### 📘 Méditerranée

Mer située au sud de la France, entre l’Europe, l’Afrique du Nord et le Proche-Orient.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0203)
1. [📚 Approfondir cette thématique](SCR_REV_T4_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0199
### 📘 Monarchie

Régime politique dans lequel le chef de l’État est un roi ou une reine.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0199)
1. [📚 Approfondir cette thématique](SCR_REV_T4_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0148
### 📘 Mutuelle

Organisme de complémentaire santé qui peut prendre en charge une partie des dépenses restant après le remboursement de l’Assurance maladie.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0148)
1. [📚 Approfondir cette thématique](SCR_REV_T5_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0167
### 📘 Naissance

Venue au monde d’un enfant. Elle doit être déclarée à l’état civil dans les conditions prévues par la loi.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0167)
1. [📚 Approfondir cette thématique](SCR_REV_T5_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0176
### 📘 Opinion

Idée ou point de vue personnel sur un sujet. La liberté d’opinion est protégée, dans le respect de la loi et des droits d’autrui.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0176)
1. [📚 Approfondir cette thématique](SCR_REV_T1_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0156
### 📘 Parti politique

Organisation qui rassemble des personnes autour d’idées politiques et participe à la vie démocratique, notamment aux élections.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0156)
1. [📚 Approfondir cette thématique](SCR_REV_T2_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0184
### 📘 Peine de mort

Sanction qui consiste à exécuter une personne condamnée. Elle a été abolie en France en 1981.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0184)
1. [📚 Approfondir cette thématique](SCR_REV_T3_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0179
### 📘 Plainte

Démarche par laquelle une personne signale aux autorités une infraction dont elle estime être victime.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0179)
1. [📚 Approfondir cette thématique](SCR_REV_T3_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0169
### 📘 Polygamie

Situation dans laquelle une personne est mariée à plusieurs conjoints en même temps. Elle est interdite en France.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0169)
1. [📚 Approfondir cette thématique](SCR_REV_T3_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0161
### 📘 Pouvoir exécutif

Pouvoir chargé de conduire la politique et de faire appliquer les lois. En France, il est exercé par le président de la République et le Gouvernement.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0161)
1. [📚 Approfondir cette thématique](SCR_REV_T2_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0163
### 📘 Pouvoir judiciaire

Fonction de la justice qui tranche les litiges et sanctionne les infractions selon la loi, en toute indépendance.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0163)
1. [📚 Approfondir cette thématique](SCR_REV_T2_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0162
### 📘 Pouvoir législatif

Pouvoir qui discute et vote les lois. En France, il est exercé par le Parlement.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0162)
1. [📚 Approfondir cette thématique](SCR_REV_T2_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0149
### 📘 Prévention

Actions destinées à éviter un risque ou à limiter ses conséquences, par exemple la vaccination ou le dépistage.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0149)
1. [📚 Approfondir cette thématique](SCR_REV_T5_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0150
### 📘 Protection sociale

Ensemble des dispositifs qui aident les personnes face à certains risques de la vie, comme la maladie, la vieillesse ou la perte d’emploi.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0150)
1. [📚 Approfondir cette thématique](SCR_REV_T5_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0155
### 📘 Quinquennat

Mandat de cinq ans. Le mandat du président de la République française est un quinquennat.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0155)
1. [📚 Approfondir cette thématique](SCR_REV_T2_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0187
### 📘 Recyclage

Transformation de déchets pour réutiliser leurs matériaux et réduire le gaspillage des ressources.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0187)
1. [📚 Approfondir cette thématique](SCR_REV_T5_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0175
### 📘 Religion

Ensemble de croyances et de pratiques liées à une foi. Chacun est libre de croire, de changer de religion ou de ne pas croire.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0175)
1. [📚 Approfondir cette thématique](SCR_REV_T1_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0191
### 📘 Réseaux sociaux

Services en ligne permettant de publier et d’échanger des contenus. Les règles de droit et le respect d’autrui s’y appliquent aussi.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0191)
1. [📚 Approfondir cette thématique](SCR_REV_T3_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0193
### 📘 Résistance

Actions menées contre l’occupation et les régimes oppressifs ; en France, le terme renvoie notamment à la lutte contre l’occupation nazie pendant la Seconde Guerre mondiale.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0193)
1. [📚 Approfondir cette thématique](SCR_REV_T4_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0174
### 📘 Respect

Attitude qui consiste à reconnaître la dignité et les droits d’autrui, même lorsque ses opinions diffèrent des nôtres.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0174)
1. [📚 Approfondir cette thématique](SCR_REV_T1_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0139
### 📘 Salaire brut

Rémunération avant le prélèvement des cotisations sociales à la charge du salarié.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0139)
1. [📚 Approfondir cette thématique](SCR_REV_T5_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0140
### 📘 Salaire net

Rémunération après déduction des cotisations salariales ; le montant versé peut aussi tenir compte du prélèvement de l’impôt.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0140)
1. [📚 Approfondir cette thématique](SCR_REV_T5_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0142
### 📘 Salarié

Personne qui travaille pour un employeur dans le cadre d’un contrat de travail et reçoit un salaire.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0142)
1. [📚 Approfondir cette thématique](SCR_REV_T5_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0153
### 📘 SAMU

Service d’aide médicale urgente : il organise la réponse médicale aux urgences et oriente vers les soins adaptés.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0153)
1. [📚 Approfondir cette thématique](SCR_REV_T5_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0152
### 📘 Secours

Aide apportée à une personne en danger ou en difficulté ; elle peut nécessiter de prévenir les services d’urgence.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0152)
1. [📚 Approfondir cette thématique](SCR_REV_T5_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0190
### 📘 Sécurité routière

Ensemble des règles et des comportements qui limitent les accidents sur la route et protègent tous les usagers.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0190)
1. [📚 Approfondir cette thématique](SCR_REV_T3_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0194
### 📘 Shoah

Génocide des Juifs d’Europe perpétré par les nazis et leurs complices pendant la Seconde Guerre mondiale.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0194)
1. [📚 Approfondir cette thématique](SCR_REV_T4_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0138
### 📘 SMIC

Salaire minimum légal : un employeur doit respecter ce minimum pour rémunérer le travail de son salarié.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0138)
1. [📚 Approfondir cette thématique](SCR_REV_T5_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0206
### 📘 Traité de Maastricht

Traité signé en 1992 qui a créé l’Union européenne et renforcé la coopération entre ses États membres.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0206)
1. [📚 Approfondir cette thématique](SCR_REV_T2_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0144
### 📘 Travail dissimulé

Travail ou activité qui n’est pas déclaré comme la loi l’exige. Cela prive notamment le salarié de certaines protections.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0144)
1. [📚 Approfondir cette thématique](SCR_REV_T5_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0189
### 📘 Tri des déchets

Séparation des déchets selon leur nature pour permettre leur collecte et leur traitement adaptés.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0189)
1. [📚 Approfondir cette thématique](SCR_REV_T5_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0151
### 📘 Urgence

Situation qui nécessite une intervention rapide, notamment lorsqu’une vie ou la sécurité d’une personne est en danger.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0151)
1. [📚 Approfondir cette thématique](SCR_REV_T5_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0210
### 📘 Discrimination

Traitement défavorable fondé sur un critère interdit par la loi, comme l’origine, le sexe ou le handicap.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0210)
1. [📚 Approfondir cette thématique](SCR_REV_T3_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0211
### 📘 Séparation des pouvoirs

Principe qui distingue les fonctions de faire la loi, de l’appliquer et de rendre la justice afin de limiter les abus de pouvoir.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0211)
1. [📚 Approfondir cette thématique](SCR_REV_T2_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0212
### 📘 Carte de séjour pluriannuelle

Titre de séjour permettant à une personne étrangère de rester en France pendant plusieurs années, selon sa situation et les conditions du titre.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0212)
1. [📚 Approfondir cette thématique](SCR_REV_T3_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0213
### 📘 Liberté d’expression

Droit de communiquer ses idées et ses opinions, dans les limites prévues par la loi, notamment pour protéger les droits des autres.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0213)
1. [📚 Approfondir cette thématique](SCR_REV_T1_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0214
### 📘 Liberté d’association

Droit de se réunir avec d’autres personnes pour créer une association et mener un projet commun dans le respect de la loi.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0214)
1. [📚 Approfondir cette thématique](SCR_REV_T1_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0215
### 📘 Liberté de circulation

Possibilité de se déplacer, dans les conditions prévues par la loi. Certaines restrictions peuvent protéger la sécurité ou les droits d’autrui.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0215)
1. [📚 Approfondir cette thématique](SCR_REV_T3_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0216
### 📘 Mixité

Présence et participation de femmes et d’hommes dans un même espace ou une même activité, avec les mêmes droits.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0216)
1. [📚 Approfondir cette thématique](SCR_REV_T1_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0217
### 📘 Devise

Formule qui exprime des valeurs communes. La devise de la République française est « Liberté, Égalité, Fraternité ».

1. [📖 Voir la fiche du glossaire](SCR_GLO_0217)
1. [📚 Approfondir cette thématique](SCR_REV_T1_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0218
### 📘 Coq gaulois

Animal utilisé comme symbole de la France, notamment dans le sport. Il ne remplace pas le drapeau tricolore.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0218)
1. [📚 Approfondir cette thématique](SCR_REV_T1_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0219
### 📘 Bloc de constitutionnalité

Ensemble des textes et principes de valeur constitutionnelle utilisés pour vérifier que les lois respectent la Constitution. Il comprend notamment la Constitution de 1958, la Déclaration de 1789 et la Charte de l’environnement.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0219)
1. [📚 Approfondir cette thématique](SCR_REV_T2_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0220
### 📘 Conseiller municipal

Personne élue au conseil municipal pour participer aux décisions de la commune. Les conseillers municipaux élisent le maire.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0220)
1. [📚 Approfondir cette thématique](SCR_REV_T2_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0221
### 📘 Élection présidentielle

Vote permettant de choisir le président de la République française. Les citoyens français remplissant les conditions de vote y participent.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0221)
1. [📚 Approfondir cette thématique](SCR_REV_T2_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0222
### 📘 Projet de loi

Texte de loi proposé par le Gouvernement et soumis au Parlement.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0222)
1. [📚 Approfondir cette thématique](SCR_REV_T2_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0223
### 📘 Proposition de loi

Texte de loi proposé par un député ou un sénateur.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0223)
1. [📚 Approfondir cette thématique](SCR_REV_T2_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0224
### 📘 Procès équitable

Procès dans lequel chacun peut faire valoir ses arguments devant une juridiction indépendante et impartiale, avec le respect des droits de la défense.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0224)
1. [📚 Approfondir cette thématique](SCR_REV_T3_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0225
### 📘 Droits de la défense

Garanties permettant à une personne de connaître ce qui lui est reproché, de se défendre et de bénéficier de l’aide d’un avocat.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0225)
1. [📚 Approfondir cette thématique](SCR_REV_T3_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0226
### 📘 Sanction

Conséquence prévue lorsqu’une règle ou une loi n’est pas respectée. Sa nature dépend de la faute ou de l’infraction.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0226)
1. [📚 Approfondir cette thématique](SCR_REV_T3_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0227
### 📘 Responsabilité

Obligation de répondre de ses actes et, selon les cas, de réparer les dommages causés ou d’accepter une sanction.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0227)
1. [📚 Approfondir cette thématique](SCR_REV_T3_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0228
### 📘 Révolution

Changement profond et rapide de l’organisation politique ou sociale. La Révolution française commence en 1789.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0228)
1. [📚 Approfondir cette thématique](SCR_REV_T4_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0229
### 📘 Bastille

Ancienne forteresse et prison de Paris prise le 14 juillet 1789. Cet événement est un repère de la Révolution française.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0229)
1. [📚 Approfondir cette thématique](SCR_REV_T4_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0230
### 📘 Charles de Gaulle

Dirigeant de la France libre pendant la Seconde Guerre mondiale, puis premier président de la Ve République, instaurée en 1958.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0230)
1. [📚 Approfondir cette thématique](SCR_REV_T4_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0231
### 📘 Napoléon Bonaparte

Dirigeant français devenu empereur en 1804. Son époque est notamment associée au Code civil.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0231)
1. [📚 Approfondir cette thématique](SCR_REV_T4_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0232
### 📘 Traité de Rome

Traité signé en 1957 créant la Communauté économique européenne, une étape importante de la construction européenne.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0232)
1. [📚 Approfondir cette thématique](SCR_REV_T4_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0233
### 📘 CEE

Communauté économique européenne, créée par le traité de Rome en 1957. Elle a précédé l’Union européenne.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0233)
1. [📚 Approfondir cette thématique](SCR_REV_T2_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0234
### 📘 Jules Ferry

Responsable politique associé aux lois de 1881 et 1882 rendant l’école primaire publique gratuite, puis l’instruction obligatoire et l’enseignement public laïque.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0234)
1. [📚 Approfondir cette thématique](SCR_REV_T4_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0235
### 📘 Louis XVI

Roi de France au début de la Révolution française. Il est exécuté en 1793.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0235)
1. [📚 Approfondir cette thématique](SCR_REV_T4_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0236
### 📘 Loire

Plus long fleuve de France. Il se jette dans l’océan Atlantique.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0236)
1. [📚 Approfondir cette thématique](SCR_REV_T4_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0237
### 📘 Rhône

Fleuve qui traverse notamment Lyon et se jette dans la mer Méditerranée.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0237)
1. [📚 Approfondir cette thématique](SCR_REV_T4_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0238
### 📘 Jour férié

Jour lié à une fête ou à une commémoration. Un jour férié n’est pas toujours un jour sans travail : les règles dépendent de la situation.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0238)
1. [📚 Approfondir cette thématique](SCR_REV_T5_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0239
### 📘 Assiduité

Présence régulière et respect des horaires dans une activité, notamment à l’école ou en formation.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0239)
1. [📚 Approfondir cette thématique](SCR_REV_T5_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0240
### 📘 Vaccination

Moyen de protéger une personne contre certaines maladies et de limiter leur transmission.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0240)
1. [📚 Approfondir cette thématique](SCR_REV_T5_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0241
### 📘 Temps de travail

Durée pendant laquelle un salarié exerce son activité professionnelle. Les règles dépendent notamment du contrat et de la loi.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0241)
1. [📚 Approfondir cette thématique](SCR_REV_T5_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0242
### 📘 Demandeur d’emploi

Personne qui recherche un travail et peut bénéficier d’un accompagnement adapté.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0242)
1. [📚 Approfondir cette thématique](SCR_REV_T5_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0243
### 📘 Entrepreneuriat

Création et développement d’une activité ou d’une entreprise, dans le respect des obligations légales.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0243)
1. [📚 Approfondir cette thématique](SCR_REV_T5_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_GLO0244
### 📘 Inclusion

Organisation de la société pour permettre à chacun de participer, notamment aux personnes en situation de handicap.

1. [📖 Voir la fiche du glossaire](SCR_GLO_0244)
1. [📚 Approfondir cette thématique](SCR_REV_T5_MENU)
1. [📝 Reprendre un entraînement](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_QL_ANSWER
<span class="nova-question-answer" aria-hidden="true"></span>
!Keyboard: true
`if @qlQuestion`
`@qlNormalisee = calc(" "+normalizeText(@qlQuestion).replaceAll("œ","oe").replaceAll("æ","ae").replaceAll("«"," ").replaceAll("»"," ").replaceAll("’"," ").replaceAll("'"," ").replaceAll("-"," ").replaceAll("."," ").replaceAll("?"," ").replaceAll(","," ").replaceAll("!"," ").replaceAll(":"," ").replaceAll(";"," ").replaceAll("/"," ").replaceAll("("," ").replaceAll(")"," ").replaceAll("["," ").replaceAll("]"," ").replaceAll("\n"," ").replaceAll("\r"," ").replaceAll("\t"," ").replaceAll(" "," ").replaceAll("  "," ").replaceAll("  "," ").replaceAll("  "," ").replaceAll("  "," ").replaceAll("  "," ").replaceAll("  "," ").trim()+" ")`
`@qlTrouvee = false`
`@qlReponse = undefined`
<!-- Réponse : INTENT_CENTRE_LYON -->
`if @qlRoute == "INTENT_CENTRE_LYON"`
Pour trouver un centre FRATE **près de Lyon**, utilisez la recherche par commune ou code postal : saisissez **Lyon** ou **69000**. La recherche compare les centres disponibles et affiche les trois plus proches, leurs adresses et leurs prochaines sessions. Lyon ne figure pas parmi les villes de la banque locale actuelle ; cela ne signifie pas qu’aucun centre partenaire ne puisse y être proposé.
`@qlReponse = INTENT_CENTRE_LYON`
`@qlTrouvee = true`
`endif`
<!-- Réponse : INTENT_CENTRE_LOCALISER -->
`if @qlRoute == "INTENT_CENTRE_LOCALISER"`
Vous cherchez un centre FRATE proche de chez vous ou son adresse. Ouvrez la recherche ci-dessous et indiquez votre **commune ou votre code postal**. Vous obtiendrez les trois centres les plus proches, leur adresse disponible et les prochaines sessions. L’adresse exacte de votre session est à vérifier sur votre convocation.
`@qlReponse = INTENT_CENTRE_LOCALISER`
`@qlTrouvee = true`
`endif`
<!-- Réponse : INTENT_USAGE_PDF -->
`if @qlRoute == "INTENT_USAGE_PDF"`
Ouvrez **Mes résultats sauvegardés**, puis cliquez sur **Télécharger mon parcours en PDF**. Ce document regroupe les tentatives enregistrées et les conseils associés. Si une tentative manque, vérifiez que vous avez terminé l’activité et atteint son écran de résultats.
`@qlReponse = INTENT_USAGE_PDF`
`@qlTrouvee = true`
`endif`
<!-- Réponse : INTENT_USAGE_RESULTATS -->
`if @qlRoute == "INTENT_USAGE_RESULTATS"`
Vous pouvez retrouver vos bilans, entraînements et examens blancs dans **Mon parcours personnalisé**. **Mes résultats sauvegardés** permet aussi de consulter les tentatives enregistrées et de télécharger votre parcours en PDF.
`@qlReponse = INTENT_USAGE_RESULTATS`
`@qlTrouvee = true`
`endif`
<!-- Réponse : INTENT_USAGE_EFFACER -->
`if @qlRoute == "INTENT_USAGE_EFFACER"`
Dans **Mes résultats sauvegardés**, cliquez sur **Effacer ma progression**, puis confirmez avec **Oui, effacer ma progression**. Vos tentatives et votre progression seront supprimées dans les fenêtres CiviCoach liées. Vous pouvez annuler avant de confirmer. Cette réponse ne déclenche aucune suppression.
`@qlReponse = INTENT_USAGE_EFFACER`
`@qlTrouvee = true`
`endif`
<!-- Réponse : INTENT_USAGE_REPRENDRE -->
`if @qlRoute == "INTENT_USAGE_REPRENDRE"`
Pour retrouver vos résultats et choisir la suite, ouvrez **Mon parcours personnalisé**. Les activités de révision enregistrent leur avancement sur ce navigateur : revenez au même chapitre pour les reprendre. Vous pouvez aussi retrouver les révisions depuis le menu principal.
`@qlReponse = INTENT_USAGE_REPRENDRE`
`@qlTrouvee = true`
`endif`
<!-- Réponse : INTENT_USAGE_GRAND -->
`if @qlRoute == "INTENT_USAGE_GRAND"`
Utilisez **Ouvrir CiviCoach en grand** depuis l’accueil pour ouvrir le chatbot dans un nouvel onglet. Pour une activité, utilisez son bouton d’ouverture en grand : vous pourrez l’afficher dans une fenêtre plus confortable.
`@qlReponse = INTENT_USAGE_GRAND`
`@qlTrouvee = true`
`endif`
<!-- Réponse : INTENT_USAGE_QUESTION -->
`if @qlRoute == "INTENT_USAGE_QUESTION"`
Après une réponse, cliquez sur **Poser une autre question**, puis écrivez votre nouvelle demande. Attendez que la réponse et les suggestions soient entièrement affichées avant de choisir un bouton.
`@qlReponse = INTENT_USAGE_QUESTION`
`@qlTrouvee = true`
`endif`
<!-- Réponse : INTENT_CHOIX_EXERCICE -->
`if @qlRoute == "INTENT_CHOIX_EXERCICE"`
Les **questions officielles** vous permettent de vérifier vos connaissances à partir de la banque de votre examen. Les **mises en situation d’entraînement** vous aident à appliquer un principe civique à une situation concrète ; elles ne sont pas des sujets officiels. Travaillez les deux, puis utilisez un examen blanc pour vous exercer sur l’ensemble.
`@qlReponse = INTENT_CHOIX_EXERCICE`
`@qlTrouvee = true`
`endif`
<!-- Réponse : INTENT_SITUATIONS_NON_OFFICIELLES -->
`if @qlRoute == "INTENT_SITUATIONS_NON_OFFICIELLES"`
Les mises en situation proposées dans ces entraînements sont des exercices pédagogiques. Elles servent à développer votre réflexion et ne constituent pas une banque de mises en situation officielles de l’examen.
`@qlReponse = INTENT_SITUATIONS_NON_OFFICIELLES`
`@qlTrouvee = true`
`endif`
<!-- Réponse : INTENT_PREPARER_NAT -->
`if @qlRoute == "INTENT_PREPARER_NAT"`
Pour préparer l’examen civique de **naturalisation**, alternez trois types d’exercices :

- **Questions officielles** : vérifiez vos connaissances dans les cinq thématiques. Après une erreur, relisez la notion concernée.
- **Mises en situation** : repérez le principe civique en jeu et expliquez-vous pourquoi les autres réponses ne conviennent pas. Ces situations d’entraînement ne sont pas des sujets officiels.
- **Examen blanc** : entraînez-vous dans les conditions proposées, puis utilisez le corrigé et vos résultats pour choisir les points à revoir.

Commencez par les questions officielles de naturalisation, puis travaillez les thématiques où vous commettez le plus d’erreurs.
`@qlReponse = INTENT_PREPARER_NAT`
`@qlTrouvee = true`
`endif`
<!-- Réponse : INTENT_PREPARER_CR -->
`if @qlRoute == "INTENT_PREPARER_CR"`
Pour préparer l’examen de la **carte de résident**, commencez par les questions officielles, puis travaillez les mises en situation. Relisez les notions correspondant à vos erreurs avant de passer un examen blanc. Les situations d’entraînement servent à exercer votre réflexion ; ce ne sont pas des sujets officiels.
`@qlReponse = INTENT_PREPARER_CR`
`@qlTrouvee = true`
`endif`
<!-- Réponse : INTENT_PREPARER_CSP -->
`if @qlRoute == "INTENT_PREPARER_CSP"`
Pour préparer l’examen du **titre de séjour pluriannuel**, choisissez les questions officielles de cet examen, puis exercez-vous aux mises en situation. Travaillez d’abord vos erreurs par thématique, puis réalisez un examen blanc. Les situations d’entraînement ne sont pas des sujets officiels.
`@qlReponse = INTENT_PREPARER_CSP`
`@qlTrouvee = true`
`endif`
<!-- Réponse : INTENT_METHODE_MEMOIRE -->
`if @qlRoute == "INTENT_METHODE_MEMOIRE"`
Pour mieux retenir, relisez une notion courte, puis cachez le cours et reformulez-la avec vos propres mots. Vérifiez votre réponse et revenez sur cette notion le lendemain, puis quelques jours plus tard. Pour une date, associez-la à un événement et replacez-la sur une frise. Les conseils « Mémoriser efficacement » vous proposent d’autres méthodes.
`@qlReponse = INTENT_METHODE_MEMOIRE`
`@qlTrouvee = true`
`endif`
<!-- Réponse : INTENT_TRAVAILLER_ERREURS -->
`if @qlRoute == "INTENT_TRAVAILLER_ERREURS"`
Pour progresser à partir de vos erreurs, consultez votre résultat dans **Mon parcours personnalisé**. Pour chaque erreur, identifiez la notion à revoir, relisez le cours correspondant, puis refaites un entraînement sur cette thématique. Essayez de justifier la bonne réponse avec vos propres mots avant de recommencer.
`@qlReponse = INTENT_TRAVAILLER_ERREURS`
`@qlTrouvee = true`
`endif`
<!-- Réponse : INTENT_PREPARER_EXAM -->
`if @qlRoute == "INTENT_PREPARER_EXAM"`
Pour préparer l’examen, combinez **révisions**, **questions officielles**, **mises en situation** et **examens blancs**. Commencez par les questions de votre examen, retravaillez les notions associées à vos erreurs, puis entraînez-vous sur l’ensemble des thématiques. Choisissez votre examen dans le menu d’entraînement afin d’utiliser la bonne banque de questions.
`@qlReponse = INTENT_PREPARER_EXAM`
`@qlTrouvee = true`
`endif`
<!-- Réponse : INTENT_SEUIL_FORMULATIONS -->
`if @qlRoute == "INTENT_SEUIL_FORMULATIONS"`
Pour réussir l’examen civique, il faut obtenir **au moins 32 bonnes réponses sur 40**, soit **80 %**. Ce seuil concerne l’examen complet ; les scores des entraînements vous aident à vous préparer.
`@qlReponse = INTENT_SEUIL_FORMULATIONS`
`@qlTrouvee = true`
`endif`
<!-- Réponse : INTENT_FAQ_DOCUMENTS_ENTRETIEN -->
`if @qlRoute == "INTENT_FAQ_DOCUMENTS_ENTRETIEN"`
Vous devez apporter les documents demandés dans votre convocation.

Selon votre situation, il peut s'agir notamment :

- d'une pièce d'identité ;
- de votre titre de séjour ;
- de votre convocation ;
- et des autres justificatifs demandés par l'administration.

Vérifiez toujours votre convocation avant le rendez-vous.
`@qlReponse = INTENT_FAQ_DOCUMENTS_ENTRETIEN`
`@qlTrouvee = true`
`endif`
<!-- Réponse : INTENT_FAQ_ENTRETIEN_DUREE -->
`if @qlRoute == "INTENT_FAQ_ENTRETIEN_DUREE"`
La durée peut varier selon les situations.

En général, un entretien dure entre **15 et 30 minutes**, mais il peut être plus court ou plus long selon votre dossier et les questions complémentaires posées par l'agent. Si vous avez une parfaite maîtrise de la langue française alors l'entretien peut être court. Dans tous les cas ne vous inquiétez pas du temps passé en entretien, celui-ci n'est pas un indicateur de réussite !
`@qlReponse = INTENT_FAQ_ENTRETIEN_DUREE`
`@qlTrouvee = true`
`endif`
<!-- Réponse : INTENT_FAQ_ENTRETIEN_QUESTIONS -->
`if @qlRoute == "INTENT_FAQ_ENTRETIEN_QUESTIONS"`
Les questions peuvent porter notamment sur :

- votre parcours personnel et professionnel en France ;
- vos motivations pour devenir français ;
- vos droits et devoirs ;
- les valeurs de la République (liberté, égalité, fraternité, laïcité...) ;
- les institutions françaises et leur fonctionnement ;
- votre vie quotidienne et votre intégration en France ;
- l'histoire, la culture et la société françaises.

Le contenu peut varier d'un entretien à l'autre.
`@qlReponse = INTENT_FAQ_ENTRETIEN_QUESTIONS`
`@qlTrouvee = true`
`endif`
<!-- Réponse : INTENT_FAQ_ENTRETIEN_TENUE -->
`if @qlRoute == "INTENT_FAQ_ENTRETIEN_TENUE"`
Il n'existe pas de tenue obligatoire.

Une tenue propre, soignée et adaptée à un entretien administratif est recommandée.

L'essentiel est de vous présenter avec sérieux et de rester naturel.
`@qlReponse = INTENT_FAQ_ENTRETIEN_TENUE`
`@qlTrouvee = true`
`endif`
<!-- Réponse : INTENT_FAQ_ENTRETIEN_REFORMULER -->
`if @qlRoute == "INTENT_FAQ_ENTRETIEN_REFORMULER"`
Oui.

Si vous ne comprenez pas une question, vous pouvez demander poliment à l'agent de la répéter ou de la reformuler.

Il est préférable de demander une explication plutôt que de répondre au hasard.
`@qlReponse = INTENT_FAQ_ENTRETIEN_REFORMULER`
`@qlTrouvee = true`
`endif`
<!-- Réponse : INTENT_FAQ_ENTRETIEN_MOTIVATION -->
`if @qlRoute == "INTENT_FAQ_ENTRETIEN_MOTIVATION"`
Il n'existe pas de réponse unique.

L'important est de répondre de manière personnelle, sincère et cohérente avec votre parcours.

Expliquez ce qui motive votre demande (intégration, projet de vie, attachement à la France, etc.) sans chercher à réciter une réponse apprise par cœur. Evitez les réponses trop génériques comme "mes enfants sont nés ici alors je souhaite devenir français".
`@qlReponse = INTENT_FAQ_ENTRETIEN_MOTIVATION`
`@qlTrouvee = true`
`endif`
<!-- Réponse : INTENT_FAQ_PRIX -->
`if @qlRoute == "INTENT_FAQ_PRIX"`
Le tarif applicable est de **80 € chez Frate Formation**. Il vous sera demandé au moment de votre inscription. Le paiement s’effectue en ligne lors de la réservation. Ce montant n’est pas remboursable si vous changez d’avis ou si vous ne réussissez pas l’examen.
`@qlReponse = INTENT_FAQ_PRIX`
`@qlTrouvee = true`
`endif`
<!-- Réponse : INTENT_FAQ_RESULTATS_DELAI -->
`if @qlRoute == "INTENT_FAQ_RESULTATS_DELAI"`
Généralement, vous obtenez le résultat sous 48 h de la part de Frate Formation. L'attestation vous sera envoyé quelques jours après la passation de l'examen.
`@qlReponse = INTENT_FAQ_RESULTATS_DELAI`
`@qlTrouvee = true`
`endif`
<!-- Réponse : INTENT_FAQ_ECHEC -->
`if @qlRoute == "INTENT_FAQ_ECHEC"`
Pas de panique, cela n'annule pas votre demande de visa. Mais vous devez : (1) Vous réinscrire à une nouvelle session, (2) Repayer les frais d'inscription, (3) Attendre la prochaine date disponible. C'est pourquoi il est plus économique de bien se préparer dès la première fois.
`@qlReponse = INTENT_FAQ_ECHEC`
`@qlTrouvee = true`
`endif`
<!-- Réponse : INTENT_FAQ_VALIDITE_ATTESTATION -->
`if @qlRoute == "INTENT_FAQ_VALIDITE_ATTESTATION"`
Non. Une fois l'examen réussi, cela est définitif. Vous pourrez réutiliser votre attestation pour effectuer d'autres démarches administratives.
`@qlReponse = INTENT_FAQ_VALIDITE_ATTESTATION`
`@qlTrouvee = true`
`endif`
<!-- Réponse : INTENT_FAQ_DOCUMENTS_EXAMEN -->
`if @qlRoute == "INTENT_FAQ_DOCUMENTS_EXAMEN"`
Le jour de l'examen, pensez à apporter :

- votre convocation imprimée ;
- votre titre de séjour original ou votre passeport (attention : les photocopies sont refusées) ;
- tout autre document mentionné dans votre convocation.

Vérifiez toujours les consignes communiquées par votre centre avant votre déplacement.
`@qlReponse = INTENT_FAQ_DOCUMENTS_EXAMEN`
`@qlTrouvee = true`
`endif`
<!-- Réponse : INTENT_FAQ_DISPENSE -->
`if @qlRoute == "INTENT_FAQ_DISPENSE"`
Les dispenses dépendent du titre demandé — il n'existe pas de liste universelle. Pour la CSP : Passeport Talent (hors CIR), protection subsidiaire et apatrides (et familles), 65 ans ou plus, dispense médicale. Pour la carte de résident longue durée-UE, certains de ces statuts peuvent être concernés par l'examen. Pour la naturalisation, seule la dispense médicale est officiellement documentée ; la dispense à 65 ans n'y est pas explicitement confirmée. Vérifiez toujours la fiche Service-Public correspondant à votre démarche exacte. Les renouvellements de titre ne nécessitent pas l'examen.
`@qlReponse = INTENT_FAQ_DISPENSE`
`@qlTrouvee = true`
`endif`
<!-- Réponse : INTENT_FAQ_NIVEAU_FRANCAIS -->
`if @qlRoute == "INTENT_FAQ_NIVEAU_FRANCAIS"`
L'examen se déroule uniquement en français, sans traduction disponible. Les questions sont formulées simplement (niveau A2/B1). Les questions sont des QCM aussi bien pour les 28 questions de connaissances générales que les 12 mises en situation.
`@qlReponse = INTENT_FAQ_NIVEAU_FRANCAIS`
`@qlTrouvee = true`
`endif`
<!-- Réponse : INTENT_FAQ_FRAUDE -->
`if @qlRoute == "INTENT_FAQ_FRAUDE"`
La fraude à l'examen civique a de lourdes conséquences : vous serez immédiatement exclu de la session en cours et votre tentative sera invalidée. De plus vous serez interdit de repasser l'examen pendant 2 ans. Cette interdiction peut également avoir un impact sur votre dossier administratif auprès de la préfecture.
`@qlReponse = INTENT_FAQ_FRAUDE`
`@qlTrouvee = true`
`endif`
<!-- Réponse : INTENT_FAQ_QUESTIONS_PIEGES -->
`if @qlRoute == "INTENT_FAQ_QUESTIONS_PIEGES"`
Oui, notamment pour les "mises en situation" qui vous poussent à raisonner et à évaluer votre compréhension d'une situation en fonction des connaissances que vous avez acqusise. Exemple : Une entreprise refuse de recruter une personne en situation d'handicap. Quelle valeur républicaine n'est pas respectée ? 

Conseil : Lisez bien les mots comme "toujours", "jamais" ou "interdit" qui vous donneront des indices pour répondre.
`@qlReponse = INTENT_FAQ_QUESTIONS_PIEGES`
`@qlTrouvee = true`
`endif`
<!-- Réponse : INTENT_FAQ_CENTRE_CHANGEMENT -->
`if @qlRoute == "INTENT_FAQ_CENTRE_CHANGEMENT"`
Les conditions de modification ou de report dépendent du centre d'examen.

Si vous souhaitez modifier votre inscription, contactez rapidement votre centre afin de connaître les possibilités qui s'offrent à vous.
`@qlReponse = INTENT_FAQ_CENTRE_CHANGEMENT`
`@qlTrouvee = true`
`endif`
<!-- Réponse : INTENT_FAQ_RECEPISSE -->
`if @qlRoute == "INTENT_FAQ_RECEPISSE"`
Les documents acceptés pour vérifier votre identité sont définis par le centre d'examen.

En cas de doute sur la validité de vos documents, contactez votre centre avant le jour de l'épreuve afin d'éviter tout déplacement inutile.
`@qlReponse = INTENT_FAQ_RECEPISSE`
`@qlTrouvee = true`
`endif`
<!-- Réponse : INTENT_FAQ_PREFECTURE_INSCRIPTION -->
`if @qlRoute == "INTENT_FAQ_PREFECTURE_INSCRIPTION"`
Non.

L'inscription à l'examen ne s'effectue pas auprès de la préfecture.

Vous devez vous inscrire auprès d'un centre agréé.

Le moyen le plus simple est de :

- utiliser la rubrique **« S’inscrire à l’examen civique »** du Coach ;
- ou consulter [la page Examen civique de Frate Formation](https://frateformation.net/formation/examen-civique/).
`@qlReponse = INTENT_FAQ_PREFECTURE_INSCRIPTION`
`@qlTrouvee = true`
`endif`
<!-- Réponse : INTENT_FAQ_CENTRE_PROCHE -->
`if @qlRoute == "INTENT_FAQ_CENTRE_PROCHE"`
Depuis la rubrique **« S’inscrire à l’examen civique »**, le Coach vous oriente vers les centres disponibles.

Vous pouvez également consulter [la page Examen civique de Frate Formation](https://frateformation.net/formation/examen-civique/), sélectionner votre région puis choisir le centre qui vous convient.
`@qlReponse = INTENT_FAQ_CENTRE_PROCHE`
`@qlTrouvee = true`
`endif`
<!-- Réponse : INTENT_FAQ_THEMATIQUES -->
`if @qlRoute == "INTENT_FAQ_THEMATIQUES"`
Les questions portent sur cinq grandes thématiques :

- Les valeurs et principes de la République française ;
- Le système institutionnel et politique français ;
- Les droits et devoirs du citoyen ;
- L'histoire, la géographie et la culture françaises ;
- La vie dans la société française.

Ces thèmes correspondent au référentiel officiel publié par les autorités françaises.
`@qlReponse = INTENT_FAQ_THEMATIQUES`
`@qlTrouvee = true`
`endif`
<!-- Réponse : INTENT_FAQ_EXAMEN_DIFFERENCES -->
`if @qlRoute == "INTENT_FAQ_EXAMEN_DIFFERENCES"`
Les trois examens civiques ont des niveaux de difficulté différents : CSP (Carte de Séjour Pluriannuelle, 4 ans) est le plus accessible avec 191 questions officielles. CR (Carte de Résident, 10 ans) est plus exigeant avec 209 questions. NAT (Naturalisation) est le plus difficile avec 258 questions approfondies sur l'histoire et les institutions. Dans tous les cas, 40 questions sont tirées au sort le jour J et le nombre de bonnes réponses à donner reste le même (32/40).
`@qlReponse = INTENT_FAQ_EXAMEN_DIFFERENCES`
`@qlTrouvee = true`
`endif`
<!-- Réponse : INTENT_FAQ_CIR -->
`if @qlRoute == "INTENT_FAQ_CIR"`
Le Contrat d'Intégration Républicaine (CIR) est un engagement entre l'État français et les primo-arrivants

Il prévoit notamment :

- une formation civique ;
- un accompagnement vers l'intégration ;
- et, lorsque cela est nécessaire, une formation en langue française.

L'objectif est de favoriser une bonne intégration dans la société française. Le CIR est obligatoire pour obtenir une carte de séjour pluriannuelle.
`@qlReponse = INTENT_FAQ_CIR`
`@qlTrouvee = true`
`endif`
<!-- Réponse : INTENT_FAQ_FORMATION_DUREE -->
`if @qlRoute == "INTENT_FAQ_FORMATION_DUREE"`
La formation civique de l'OFII dure 4 jours (soit 24 heures au total). Elle se déroule généralement sur 4 journées consécutives ou réparties sur plusieurs semaines.
`@qlReponse = INTENT_FAQ_FORMATION_DUREE`
`@qlTrouvee = true`
`endif`
<!-- Réponse : INTENT_FAQ_FORMATION_EXAMEN -->
`if @qlRoute == "INTENT_FAQ_FORMATION_EXAMEN"`
La formation civique et l'examen civique sont deux dispositifs différents.

La **formation civique** est une formation de 4 jours permettant d'acquérir les connaissances nécessaires sur la France et les valeurs de la République. Elle est gratuite et obligatoire pour les signataires du contrat d'intégration Républicaine (CIR). 

L'**examen civique** permet ensuite de vérifier que ces connaissances sont acquises. Le test est payant et comprend 40 questions. 

La formation prépare donc à l'examen, mais ne le remplace pas.
`@qlReponse = INTENT_FAQ_FORMATION_EXAMEN`
`@qlTrouvee = true`
`endif`
<!-- Réponse : INTENT_FAQ_FORMATION_OFII -->
`if @qlRoute == "INTENT_FAQ_FORMATION_OFII"`
La formation civique est une formation de 4 jours obligatoire dans le cadre du Contrat d'Intégration Républicaine (CIR).

Elle permet de découvrir :

- les valeurs de la République française ;
- les droits et les devoirs en France ;
- le fonctionnement des institutions ;
- les principales règles de la vie en société.

Cette formation favorise l'intégration des nouveaux arrivants et prépare à l'examen civique, mais ne le remplace pas.
`@qlReponse = INTENT_FAQ_FORMATION_OFII`
`@qlTrouvee = true`
`endif`
<!-- Réponse : INTENT_FAQ_ACCES_NOVAFRATE -->
`if @qlRoute == "INTENT_FAQ_ACCES_NOVAFRATE"`
Dès réception de vos identifiants, il vous suffit de vous connecter à la plateforme NovaFrate avec les informations qui vous ont été communiquées par e-mail.

En cas de difficulté de connexion, vous pouvez contacter le support de FRATE Formation.
`@qlReponse = INTENT_FAQ_ACCES_NOVAFRATE`
`@qlTrouvee = true`
`endif`
<!-- Réponse : INTENT_FAQ_ACCES_RECEPTION -->
`if @qlRoute == "INTENT_FAQ_ACCES_RECEPTION"`
Après validation de votre inscription à l'examen auprès de FRATE Formation, vos identifiants NovaFrate sont généralement envoyés dans un délai de **24 heures ouvrées**.

Pensez également à vérifier votre dossier « Courriers indésirables » ou « Spam » si vous ne recevez pas votre e-mail.
`@qlReponse = INTENT_FAQ_ACCES_RECEPTION`
`@qlTrouvee = true`
`endif`
<!-- Réponse : INTENT_FAQ_APPLICATION -->
`if @qlRoute == "INTENT_FAQ_APPLICATION"`
Non.

NovaFrate est accessible directement en ligne depuis un ordinateur, une tablette ou un smartphone disposant d'une connexion Internet.

Aucune installation particulière n'est nécessaire.
`@qlReponse = INTENT_FAQ_APPLICATION`
`@qlTrouvee = true`
`endif`
<!-- Réponse : INTENT_FAQ_SUPPORT -->
`if @qlRoute == "INTENT_FAQ_SUPPORT"`
Si vous avez une question concernant votre inscription, votre accès à NovaFrate ou le déroulement de votre préparation, vous pouvez utiliser le formulaire de contact disponible sur le site de FRATE Formation.

L'équipe vous répondra dans les meilleurs délais.

👉 Rendez-vous sur la page **Examen civique** puis dans la rubrique **« Un problème ? Des questions ? Contactez-nous ! »** pour accéder au formulaire de contact.
`@qlReponse = INTENT_FAQ_SUPPORT`
`@qlTrouvee = true`
`endif`
<!-- Réponse : INTENT_FAQ_QUESTIONS_OFFICIELLES -->
`if @qlRoute == "INTENT_FAQ_QUESTIONS_OFFICIELLES"`
Oui.

Les contenus proposés sur NovaFrate sont élaborés à partir des référentiels officiels de l'examen civique publiés par les autorités françaises.

Vous retrouverez :

- les connaissances attendues à l'examen ;
- des entraînements inspirés des questions officielles ;
- des examens blancs ;
- des explications pédagogiques pour mieux comprendre les notions.

L'objectif est de vous préparer efficacement aux différentes mentions de l'examen civique.
`@qlReponse = INTENT_FAQ_QUESTIONS_OFFICIELLES`
`@qlTrouvee = true`
`endif`
<!-- Réponse : INTENT_GOUVERNEMENT_PARLEMENT -->
`if @qlRoute == "INTENT_GOUVERNEMENT_PARLEMENT"`
Le **Gouvernement** prépare des projets de loi et fait appliquer les lois. Le **Parlement**, composé de l’Assemblée nationale et du Sénat, discute et vote les lois. **À retenir : le Gouvernement propose et applique ; le Parlement vote.**
`@qlReponse = INTENT_GOUVERNEMENT_PARLEMENT`
`@qlTrouvee = true`
`endif`
<!-- Réponse : INTENT_MEMOIRE -->
`if @qlRoute == "INTENT_MEMOIRE"`
Pour mieux retenir, commencez par **comprendre la notion**, reformulez-la avec vos mots, puis testez-vous sans regarder le cours. Révisez à nouveau sur plusieurs séances. La rubrique **Mémoriser efficacement** vous guide étape par étape.
`@qlReponse = INTENT_MEMOIRE`
`@qlTrouvee = true`
`endif`
<!-- Réponse : INTENT_MEMOIRE_PROGRESSION -->
`if @qlRoute == "INTENT_MEMOIRE_PROGRESSION"`
Pour progresser dans vos connaissances, alternez une courte révision, une reformulation avec vos mots et quelques questions. Consultez les méthodes de mémorisation, puis choisissez un thème à travailler.
`@qlReponse = INTENT_MEMOIRE_PROGRESSION`
`@qlTrouvee = true`
`endif`
<!-- Réponse : INTENT_SITUATIONS -->
`if @qlRoute == "INTENT_SITUATIONS"`
Une **mise en situation** vous demande d’appliquer un principe civique à un cas concret. Repérez ce que l’on cherche à vérifier, identifiez la règle et lisez toutes les réponses. La méthode **RÈGLE** vous aide à choisir une réponse adaptée.
`@qlReponse = INTENT_SITUATIONS`
`@qlTrouvee = true`
`endif`
<!-- Réponse : INTENT_EXAMEN_BLANC -->
`if @qlRoute == "INTENT_EXAMEN_BLANC"`
Un **examen blanc** vous permet de vous entraîner au format de l’épreuve. Choisissez votre examen dans la rubrique correspondante.
`@qlReponse = INTENT_EXAMEN_BLANC`
`@qlTrouvee = true`
`endif`
<!-- Réponse : INTENT_QUESTIONS_OFFICIELLES -->
`if @qlRoute == "INTENT_QUESTIONS_OFFICIELLES"`
Les questions officielles sont accessibles dans **Entraînement par examen**. Choisissez votre examen, puis **Questions officielles** et la thématique souhaitée.
`@qlReponse = INTENT_QUESTIONS_OFFICIELLES`
`@qlTrouvee = true`
`endif`
<!-- Réponse : INTENT_QCM_METHODE -->
`if @qlRoute == "INTENT_QCM_METHODE"`
Lisez la question et les quatre réponses. Repérez les mots-clés, éliminez les propositions qui ne répondent pas à la question et justifiez votre choix. Vous trouverez une méthode dans **Réussir les QCM**.
`@qlReponse = INTENT_QCM_METHODE`
`@qlTrouvee = true`
`endif`
<!-- Réponse : INTENT_ERREURS -->
`if @qlRoute == "INTENT_ERREURS"`
Relisez la correction et notez la règle que vous aviez oubliée. Revenez sur ce thème avant de refaire un entraînement. Un carnet d’erreurs vous aide à repérer les points à retravailler.
`@qlReponse = INTENT_ERREURS`
`@qlTrouvee = true`
`endif`
<!-- Réponse : INTENT_PARCOURS -->
`if @qlRoute == "INTENT_PARCOURS"`
Prévoyez des séances courtes et régulières. Alternez révision, entraînement et correction. La rubrique **Construire mon parcours de révision** vous aide à organiser votre préparation.
`@qlReponse = INTENT_PARCOURS`
`@qlTrouvee = true`
`endif`
<!-- Réponse : INTENT_MNEMO -->
`if @qlRoute == "INTENT_MNEMO"`
Un moyen mnémotechnique est une astuce pour retrouver une information, par exemple une association d’idées. Comprenez d’abord la notion, puis choisissez une astuce qui a du sens pour vous.
`@qlReponse = INTENT_MNEMO`
`@qlTrouvee = true`
`endif`
<!-- Réponse : INTENT_INSCRIPTION -->
`if @qlRoute == "INTENT_INSCRIPTION"`
Pour les démarches d’inscription et les sessions disponibles, ouvrez **S’inscrire à l’examen civique**. Vous pourrez consulter les centres et les modalités.
`@qlReponse = INTENT_INSCRIPTION`
`@qlTrouvee = true`
`endif`
<!-- Réponse : INTENT_PRIX -->
`if @qlRoute == "INTENT_PRIX"`
Les informations sur le coût de l’examen sont présentées dans la FAQ. Consultez la rubrique dédiée avant votre inscription.
`@qlReponse = INTENT_PRIX`
`@qlTrouvee = true`
`endif`
<!-- Réponse : INTENT_FORMAT -->
`if @qlRoute == "INTENT_FORMAT"`
L’examen comporte **40 questions à choix multiple** et dure **45 minutes**. Il comprend 28 questions de connaissances et 12 mises en situation, réparties entre cinq thématiques.
`@qlReponse = INTENT_FORMAT`
`@qlTrouvee = true`
`endif`
<!-- Réponse : INTENT_SEUIL -->
`if @qlRoute == "INTENT_SEUIL"`
Pour réussir l’examen civique, il faut obtenir **au moins 32 bonnes réponses sur 40**, soit **80 %**. Ce seuil concerne l’examen complet ; les scores des entraînements vous aident à vous préparer.
`@qlReponse = INTENT_SEUIL`
`@qlTrouvee = true`
`endif`
<!-- Réponse : INTENT_ECHEC -->
`if @qlRoute == "INTENT_ECHEC"`
Après un échec, consultez les informations sur une nouvelle passation et reprenez les thèmes qui vous ont posé problème.
`@qlReponse = INTENT_ECHEC`
`@qlTrouvee = true`
`endif`
<!-- Réponse : INTENT_STRESS -->
`if @qlRoute == "INTENT_STRESS"`
Avant un examen blanc, entraînez-vous dans un cadre calme, avec une séance préparée à l’avance. Pour l’épreuve, consultez les conseils de la FAQ et les modalités de passation.
`@qlReponse = INTENT_STRESS`
`@qlTrouvee = true`
`endif`
<!-- Réponse : INTENT_BILAN -->
`if @qlRoute == "INTENT_BILAN"`
Le **bilan** vous aide à repérer les thèmes à travailler. Vous pourrez ensuite choisir vos révisions et vos entraînements.
`@qlReponse = INTENT_BILAN`
`@qlTrouvee = true`
`endif`
<!-- Réponse : INTENT_REVISION_T1 -->
`if @qlRoute == "INTENT_REVISION_T1"`
Vous pouvez revoir cette thématique, puis vérifier votre compréhension dans un entraînement. Prenez le temps de lire les corrections.
`@qlReponse = INTENT_REVISION_T1`
`@qlTrouvee = true`
`endif`
<!-- Réponse : INTENT_REVISION_T2 -->
`if @qlRoute == "INTENT_REVISION_T2"`
Vous pouvez revoir cette thématique, puis vérifier votre compréhension dans un entraînement. Prenez le temps de lire les corrections.
`@qlReponse = INTENT_REVISION_T2`
`@qlTrouvee = true`
`endif`
<!-- Réponse : INTENT_REVISION_T3 -->
`if @qlRoute == "INTENT_REVISION_T3"`
Vous pouvez revoir cette thématique, puis vérifier votre compréhension dans un entraînement. Prenez le temps de lire les corrections.
`@qlReponse = INTENT_REVISION_T3`
`@qlTrouvee = true`
`endif`
<!-- Réponse : INTENT_REVISION_T4 -->
`if @qlRoute == "INTENT_REVISION_T4"`
Vous pouvez revoir cette thématique, puis vérifier votre compréhension dans un entraînement. Prenez le temps de lire les corrections.
`@qlReponse = INTENT_REVISION_T4`
`@qlTrouvee = true`
`endif`
<!-- Réponse : INTENT_REVISION_T5 -->
`if @qlRoute == "INTENT_REVISION_T5"`
Vous pouvez revoir cette thématique, puis vérifier votre compréhension dans un entraînement. Prenez le temps de lire les corrections.
`@qlReponse = INTENT_REVISION_T5`
`@qlTrouvee = true`
`endif`
<!-- Réponse : INTENT_ENTRAINEMENT -->
`if @qlRoute == "INTENT_ENTRAINEMENT"`
Choisissez votre examen pour travailler les questions officielles ou les mises en situation. Vous pouvez aussi réaliser un entraînement complet par niveau.
`@qlReponse = INTENT_ENTRAINEMENT`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0033 -->
`if @qlRoute == "SCR_QL_GLO0033"`
### 📘 Contrat d'engagement à respecter les principes de la République

Engagement consistant à respecter les valeurs et les principes de la République française.

**À retenir :** Le respect des principes républicains est attendu dans certains parcours administratifs.

**Voir aussi :** République; Laïcité; Valeurs de la République.
`@qlReponse = SCR_QL_GLO0033`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0038 -->
`if @qlRoute == "SCR_QL_GLO0038"`
### 📘 Déclaration des droits de l'homme et du citoyen

Texte adopté en 1789 qui affirme les droits et libertés fondamentaux.

**À retenir :** C'est l'un des textes fondateurs de la République française.

**Voir aussi :** Constitution.
`@qlReponse = SCR_QL_GLO0038`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0076 -->
`if @qlRoute == "SCR_QL_GLO0076"`
### 📘 Journées européennes du patrimoine

Événement annuel permettant de découvrir gratuitement de nombreux lieux patrimoniaux.

**À retenir :** Elles ont lieu chaque année en septembre.

**Voir aussi :** Patrimoine.
`@qlReponse = SCR_QL_GLO0076`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0005 -->
`if @qlRoute == "SCR_QL_GLO0005"`
### 📘 Assistance à personne en danger

Obligation d'aider une personne en danger ou d'alerter les secours lorsqu'il est possible de le faire sans risque.

**À retenir :** Ne pas porter assistance peut être puni par la loi.

**Voir aussi :** Secours.
`@qlReponse = SCR_QL_GLO0005`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0096 -->
`if @qlRoute == "SCR_QL_GLO0096"`
### 📘 Mutilations sexuelles féminines

Interventions consistant à retirer partiellement ou totalement les organes génitaux féminins sans raison médicale.

**À retenir :** Elles sont interdites et sévèrement punies en France.

**Voir aussi :** Violence.
`@qlReponse = SCR_QL_GLO0096`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0026 -->
`if @qlRoute == "SCR_QL_GLO0026"`
### 📘 Conseil de l'Union européenne

Institution où siègent les ministres des États membres.

**À retenir :** Il participe au vote des lois européennes.

**Voir aussi :** Commission européenne.
`@qlReponse = SCR_QL_GLO0026`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0212 -->
`if @qlRoute == "SCR_QL_GLO0212"`
### 📘 Carte de séjour pluriannuelle

Titre de séjour permettant à une personne étrangère de rester en France pendant plusieurs années, selon sa situation et les conditions du titre.
`@qlReponse = SCR_QL_GLO0212`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0165 -->
`if @qlRoute == "SCR_QL_GLO0165"`
### 📘 Collectivités territoriales

Structures qui gèrent des affaires locales grâce à des élus, par exemple les communes, les départements et les régions.
`@qlReponse = SCR_QL_GLO0165`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0109 -->
`if @qlRoute == "SCR_QL_GLO0109"`
### 📘 Président de la République

Le Président de la République est le chef de l'État.

**À retenir :** Il est élu au suffrage universel direct pour cinq ans.

**Attention à ne pas confondre :** Le Président est le chef de l'État.
Le Premier ministre dirige l'action du Gouvernement.

**Voir aussi :** Gouvernement; Premier ministre.
`@qlReponse = SCR_QL_GLO0109`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0114 -->
`if @qlRoute == "SCR_QL_GLO0114"`
### 📘 Provence-Alpes-Côte d'Azur

Région située dans le sud-est de la France.

**À retenir :** Elle est réputée pour la Méditerranée, les Alpes, Marseille, Nice et la lavande.

**Voir aussi :** Marseille; Nice.
`@qlReponse = SCR_QL_GLO0114`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0219 -->
`if @qlRoute == "SCR_QL_GLO0219"`
### 📘 Bloc de constitutionnalité

Ensemble des textes et principes de valeur constitutionnelle utilisés pour vérifier que les lois respectent la Constitution. Il comprend notamment la Constitution de 1958, la Déclaration de 1789 et la Charte de l’environnement.
`@qlReponse = SCR_QL_GLO0219`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0016 -->
`if @qlRoute == "SCR_QL_GLO0016"`
### 📘 Charte de l'environnement

Texte à valeur constitutionnelle qui reconnaît le droit à un environnement équilibré.

**À retenir :** La protection de l'environnement est un principe constitutionnel.

**Voir aussi :** Environnement.
`@qlReponse = SCR_QL_GLO0016`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0075 -->
`if @qlRoute == "SCR_QL_GLO0075"`
### 📘 Intégrité de la personne

Droit de chacun à la protection de son corps et de son esprit.

**À retenir :** Toute atteinte injustifiée à l'intégrité est interdite.

**Voir aussi :** Dignité humaine.
`@qlReponse = SCR_QL_GLO0075`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0108 -->
`if @qlRoute == "SCR_QL_GLO0108"`
### 📘 Première Guerre mondiale

Conflit mondial de 1914 à 1918.

**À retenir :** La France fait partie des pays vainqueurs.

**Voir aussi :** Seconde Guerre mondiale.
`@qlReponse = SCR_QL_GLO0108`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0131 -->
`if @qlRoute == "SCR_QL_GLO0131"`
### 📘 Traite des êtres humains

Recrutement, transport ou accueil d’une personne pour l’exploiter, notamment par la contrainte ou la tromperie. C’est une infraction pénale grave.
`@qlReponse = SCR_QL_GLO0131`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0044 -->
`if @qlRoute == "SCR_QL_GLO0044"`
### 📘 Devise de la République

La devise de la République française est **« Liberté, Égalité, Fraternité »**. Elle exprime trois valeurs communes.
`@qlReponse = SCR_QL_GLO0044`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0121 -->
`if @qlRoute == "SCR_QL_GLO0121"`
### 📘 Seconde Guerre mondiale

Conflit mondial de 1939 à 1945.

**À retenir :** La Résistance a joué un rôle important dans la libération de la France.

**Voir aussi :** Résistance.
`@qlReponse = SCR_QL_GLO0121`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0025 -->
`if @qlRoute == "SCR_QL_GLO0025"`
### 📘 Conseil constitutionnel

Le Conseil constitutionnel vérifie que les lois respectent la Constitution.

**À retenir :** Il protège la Constitution.

**Voir aussi :** Constitution.
`@qlReponse = SCR_QL_GLO0025`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0081 -->
`if @qlRoute == "SCR_QL_GLO0081"`
### 📘 Langue de la République

Le français est la langue officielle de la République française.

**À retenir :** Le français est utilisé dans les administrations, les écoles et les services publics.

**Voir aussi :** République.
`@qlReponse = SCR_QL_GLO0081`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0110 -->
`if @qlRoute == "SCR_QL_GLO0110"`
### 📘 Présomption d'innocence

La **présomption d’innocence** signifie qu’une personne est considérée comme innocente tant que sa culpabilité n’a pas été établie par la justice.
`@qlReponse = SCR_QL_GLO0110`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_SIMPLE_POUVOIRS -->
`if @qlRoute == "SCR_QL_SIMPLE_POUVOIRS"`
### 📘 Séparation des pouvoirs

La **séparation des pouvoirs** distingue trois fonctions : faire les lois, les appliquer et rendre la justice. Elles ne doivent pas toutes être concentrées dans les mêmes mains.
`@qlReponse = SCR_QL_SIMPLE_POUVOIRS`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0171 -->
`if @qlRoute == "SCR_QL_GLO0171"`
### 📘 Instruction obligatoire

Obligation de donner à chaque enfant une instruction. Elle peut être assurée à l’école ou, sous conditions, dans la famille.
`@qlReponse = SCR_QL_GLO0171`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0221 -->
`if @qlRoute == "SCR_QL_GLO0221"`
### 📘 Élection présidentielle

Vote permettant de choisir le président de la République française. Les citoyens français remplissant les conditions de vote y participent.
`@qlReponse = SCR_QL_GLO0221`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0126 -->
`if @qlRoute == "SCR_QL_GLO0126"`
### 📘 Souveraineté nationale

Principe selon lequel le pouvoir appartient au peuple.

**À retenir :** Le peuple exerce sa souveraineté par ses représentants élus et par référendum.

**Attention à ne pas confondre :** La souveraineté appartient au peuple et non au Président de la République.

**Voir aussi :** République; Référendum; Citoyen.
`@qlReponse = SCR_QL_GLO0126`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0215 -->
`if @qlRoute == "SCR_QL_GLO0215"`
### 📘 Liberté de circulation

Possibilité de se déplacer, dans les conditions prévues par la loi. Certaines restrictions peuvent protéger la sécurité ou les droits d’autrui.
`@qlReponse = SCR_QL_GLO0215`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0017 -->
`if @qlRoute == "SCR_QL_GLO0017"`
### 📘 Château de Versailles

Ancienne résidence des rois de France située près de Paris.

**À retenir :** Il est célèbre pour son architecture et ses jardins.

**Voir aussi :** Louis XIV.
`@qlReponse = SCR_QL_GLO0017`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0023 -->
`if @qlRoute == "SCR_QL_GLO0023"`
### 📘 Commission européenne

Institution chargée de proposer les lois européennes et de veiller à leur application.

**À retenir :** Elle défend l'intérêt général de l'Union européenne.

**Voir aussi :** Union européenne.
`@qlReponse = SCR_QL_GLO0023`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0027 -->
`if @qlRoute == "SCR_QL_GLO0027"`
### 📘 Conseil départemental

Assemblée qui administre le département.

**À retenir :** Ses membres sont les conseillers départementaux.

**Voir aussi :** Département.
`@qlReponse = SCR_QL_GLO0027`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0058 -->
`if @qlRoute == "SCR_QL_GLO0058"`
### 📘 France métropolitaine

Partie du territoire français située en Europe.

**À retenir :** Elle est composée de 13 régions.

**Voir aussi :** Outre-mer.
`@qlReponse = SCR_QL_GLO0058`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0063 -->
`if @qlRoute == "SCR_QL_GLO0063"`
### 📘 Gastronomie française

Ensemble des traditions culinaires françaises.

**À retenir :** Le repas gastronomique des Français est inscrit au patrimoine culturel immatériel de l'UNESCO.

**Voir aussi :** UNESCO.
`@qlReponse = SCR_QL_GLO0063`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0083 -->
`if @qlRoute == "SCR_QL_GLO0083"`
### 📘 Liberté de conscience

La **liberté de conscience** permet à chacun de choisir ses convictions : croire, ne pas croire ou changer de religion.
`@qlReponse = SCR_QL_GLO0083`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0160 -->
`if @qlRoute == "SCR_QL_GLO0160"`
### 📘 Élections européennes

Élections par lesquelles les citoyens de l’Union européenne choisissent leurs députés au Parlement européen.
`@qlReponse = SCR_QL_GLO0160`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0159 -->
`if @qlRoute == "SCR_QL_GLO0159"`
### 📘 Élections municipales

Élections qui permettent de choisir les conseillers municipaux. Ceux-ci élisent ensuite le maire.
`@qlReponse = SCR_QL_GLO0159`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0214 -->
`if @qlRoute == "SCR_QL_GLO0214"`
### 📘 Liberté d’association

Droit de se réunir avec d’autres personnes pour créer une association et mener un projet commun dans le respect de la loi.
`@qlReponse = SCR_QL_GLO0214`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0141 -->
`if @qlRoute == "SCR_QL_GLO0141"`
### 📘 Cotisations sociales

Sommes versées par les salariés et les employeurs pour financer la protection sociale, notamment la maladie et la retraite.
`@qlReponse = SCR_QL_GLO0141`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0070 -->
`if @qlRoute == "SCR_QL_GLO0070"`
### 📘 Harcèlement scolaire

Violences répétées subies par un élève de la part d'autres élèves.

**À retenir :** Il s'agit d'un délit.

**Voir aussi :** Violence.
`@qlReponse = SCR_QL_GLO0070`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0018 -->
`if @qlRoute == "SCR_QL_GLO0018"`
### 📘 Cinquième République

Régime politique actuel de la France, instauré en 1958.

**À retenir :** La Constitution de 1958 est toujours en vigueur.

**Voir aussi :** Constitution.
`@qlReponse = SCR_QL_GLO0018`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0119 -->
`if @qlRoute == "SCR_QL_GLO0119"`
### 📘 Révolution française

Période commencée en 1789 qui met fin à la monarchie absolue et fonde de nouveaux principes politiques.

**À retenir :** Elle marque la naissance des valeurs républicaines modernes.

**Voir aussi :** Déclaration des droits de l'homme et du citoyen.
`@qlReponse = SCR_QL_GLO0119`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0206 -->
`if @qlRoute == "SCR_QL_GLO0206"`
### 📘 Traité de Maastricht

Traité signé en 1992 qui a créé l’Union européenne et renforcé la coopération entre ses États membres.
`@qlReponse = SCR_QL_GLO0206`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0213 -->
`if @qlRoute == "SCR_QL_GLO0213"`
### 📘 Liberté d’expression

Droit de communiquer ses idées et ses opinions, dans les limites prévues par la loi, notamment pour protéger les droits des autres.
`@qlReponse = SCR_QL_GLO0213`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0220 -->
`if @qlRoute == "SCR_QL_GLO0220"`
### 📘 Conseiller municipal

Personne élue au conseil municipal pour participer aux décisions de la commune. Les conseillers municipaux élisent le maire.
`@qlReponse = SCR_QL_GLO0220`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0225 -->
`if @qlRoute == "SCR_QL_GLO0225"`
### 📘 Droits de la défense

Garanties permettant à une personne de connaître ce qui lui est reproché, de se défendre et de bénéficier de l’aide d’un avocat.
`@qlReponse = SCR_QL_GLO0225`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0004 -->
`if @qlRoute == "SCR_QL_GLO0004"`
### 📘 Assemblée nationale

L’**Assemblée nationale** est l’une des deux parties du Parlement. Les **députés** y discutent et votent les lois.
`@qlReponse = SCR_QL_GLO0004`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0047 -->
`if @qlRoute == "SCR_QL_GLO0047"`
### 📘 Droits fondamentaux

Ensemble des droits et libertés reconnus à toute personne et garantis par la Constitution et les textes fondamentaux.

**À retenir :** Ils protègent la dignité, la liberté et l'égalité de chacun.

**Voir aussi :** Constitution; Liberté; Égalité.
`@qlReponse = SCR_QL_GLO0047`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0207 -->
`if @qlRoute == "SCR_QL_GLO0207"`
### 📘 Journée de l’Europe

Journée célébrée le 9 mai pour rappeler le projet de coopération européenne et la déclaration de Robert Schuman.
`@qlReponse = SCR_QL_GLO0207`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0102 -->
`if @qlRoute == "SCR_QL_GLO0102"`
### 📘 Parlement européen

Institution européenne composée de députés élus par les citoyens des États membres.

**À retenir :** Il participe à l'adoption des lois européennes.

**Voir aussi :** Député européen.
`@qlReponse = SCR_QL_GLO0102`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0034 -->
`if @qlRoute == "SCR_QL_GLO0034"`
### 📘 Contrat de travail

Le **contrat de travail** fixe les conditions de travail entre un employeur et un salarié.
`@qlReponse = SCR_QL_GLO0034`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0056 -->
`if @qlRoute == "SCR_QL_GLO0056"`
### 📘 Fête de la Musique

Manifestation culturelle organisée chaque année le 21 juin.

**À retenir :** Elle permet à tous de partager la musique gratuitement.

**Voir aussi :** Culture.
`@qlReponse = SCR_QL_GLO0056`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0127 -->
`if @qlRoute == "SCR_QL_GLO0127"`
### 📘 Suffrage universel

Mode d'élection dans lequel tous les citoyens remplissant les conditions peuvent voter.

**À retenir :** En France, le vote est universel, égal et secret.

**Voir aussi :** Vote.
`@qlReponse = SCR_QL_GLO0127`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0170 -->
`if @qlRoute == "SCR_QL_GLO0170"`
### 📘 Autorité parentale

Ensemble des droits et des devoirs des parents pour protéger, éduquer et accompagner leur enfant dans son intérêt.
`@qlReponse = SCR_QL_GLO0170`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0158 -->
`if @qlRoute == "SCR_QL_GLO0158"`
### 📘 Listes électorales

Listes des personnes inscrites pour voter dans une commune ou dans une circonscription.
`@qlReponse = SCR_QL_GLO0158`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0163 -->
`if @qlRoute == "SCR_QL_GLO0163"`
### 📘 Pouvoir judiciaire

Fonction de la justice qui tranche les litiges et sanctionne les infractions selon la loi, en toute indépendance.
`@qlReponse = SCR_QL_GLO0163`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0162 -->
`if @qlRoute == "SCR_QL_GLO0162"`
### 📘 Pouvoir législatif

Pouvoir qui discute et vote les lois. En France, il est exercé par le Parlement.
`@qlReponse = SCR_QL_GLO0162`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0150 -->
`if @qlRoute == "SCR_QL_GLO0150"`
### 📘 Protection sociale

Ensemble des dispositifs qui aident les personnes face à certains risques de la vie, comme la maladie, la vieillesse ou la perte d’emploi.
`@qlReponse = SCR_QL_GLO0150`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0223 -->
`if @qlRoute == "SCR_QL_GLO0223"`
### 📘 Proposition de loi

Texte de loi proposé par un député ou un sénateur.
`@qlReponse = SCR_QL_GLO0223`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0231 -->
`if @qlRoute == "SCR_QL_GLO0231"`
### 📘 Napoléon Bonaparte

Dirigeant français devenu empereur en 1804. Son époque est notamment associée au Code civil.
`@qlReponse = SCR_QL_GLO0231`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0242 -->
`if @qlRoute == "SCR_QL_GLO0242"`
### 📘 Demandeur d’emploi

Personne qui recherche un travail et peut bénéficier d’un accompagnement adapté.
`@qlReponse = SCR_QL_GLO0242`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0006 -->
`if @qlRoute == "SCR_QL_GLO0006"`
### 📘 Assurance maladie

Système de protection sociale qui rembourse tout ou partie des dépenses de santé.

**À retenir :** Toute personne résidant régulièrement en France peut bénéficier d'une couverture maladie selon sa situation.

**Voir aussi :** Carte Vitale; CPAM; Médecin traitant.
`@qlReponse = SCR_QL_GLO0006`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0010 -->
`if @qlRoute == "SCR_QL_GLO0010"`
### 📘 Carte de résident

La **carte de résident** est un titre de séjour valable dix ans. Les conditions et les démarches dépendent de la situation de la personne.
`@qlReponse = SCR_QL_GLO0010`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0029 -->
`if @qlRoute == "SCR_QL_GLO0029"`
### 📘 Conseil municipal

Assemblée élue qui administre la commune.

**À retenir :** Les conseillers municipaux élisent le maire.

**Voir aussi :** Maire.
`@qlReponse = SCR_QL_GLO0029`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0094 -->
`if @qlRoute == "SCR_QL_GLO0094"`
### 📘 Mont-Saint-Michel

Îlot rocheux situé en Normandie sur lequel est construite une abbaye.

**À retenir :** Il est inscrit au patrimoine mondial de l'UNESCO.

**Voir aussi :** UNESCO.
`@qlReponse = SCR_QL_GLO0094`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0190 -->
`if @qlRoute == "SCR_QL_GLO0190"`
### 📘 Sécurité routière

Ensemble des règles et des comportements qui limitent les accidents sur la route et protègent tous les usagers.
`@qlReponse = SCR_QL_GLO0190`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0144 -->
`if @qlRoute == "SCR_QL_GLO0144"`
### 📘 Travail dissimulé

Travail ou activité qui n’est pas déclaré comme la loi l’exige. Cela prive notamment le salarié de certaines protections.
`@qlReponse = SCR_QL_GLO0144`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0230 -->
`if @qlRoute == "SCR_QL_GLO0230"`
### 📘 Charles de Gaulle

Dirigeant de la France libre pendant la Seconde Guerre mondiale, puis premier président de la Ve République, instaurée en 1958.
`@qlReponse = SCR_QL_GLO0230`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0107 -->
`if @qlRoute == "SCR_QL_GLO0107"`
### 📘 Premier ministre

Le **Premier ministre** dirige l’action du Gouvernement. Il travaille avec les ministres pour organiser et mettre en œuvre la politique du pays.
`@qlReponse = SCR_QL_GLO0107`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0046 -->
`if @qlRoute == "SCR_QL_GLO0046"`
### 📘 Drapeau français

Le **drapeau français** comporte trois couleurs : bleu, blanc et rouge.
`@qlReponse = SCR_QL_GLO0046`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0028 -->
`if @qlRoute == "SCR_QL_GLO0028"`
### 📘 Conseil européen

Réunion des chefs d'État ou de gouvernement des pays membres.

**À retenir :** Il fixe les grandes orientations politiques de l'Union européenne.

**Voir aussi :** Union européenne.
`@qlReponse = SCR_QL_GLO0028`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0030 -->
`if @qlRoute == "SCR_QL_GLO0030"`
### 📘 Conseil régional

Assemblée qui administre la région.

**À retenir :** Ses membres sont les conseillers régionaux.

**Voir aussi :** Région.
`@qlReponse = SCR_QL_GLO0030`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0092 -->
`if @qlRoute == "SCR_QL_GLO0092"`
### 📘 Médecin traitant

Médecin choisi par le patient pour assurer son suivi médical.

**À retenir :** Le déclarer permet un meilleur remboursement des soins.

**Voir aussi :** Assurance maladie.
`@qlReponse = SCR_QL_GLO0092`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0133 -->
`if @qlRoute == "SCR_QL_GLO0133"`
### 📘 Union européenne

Organisation regroupant plusieurs États européens qui coopèrent dans de nombreux domaines.

**À retenir :** La France est membre de l'Union européenne.

**Voir aussi :** Parlement européen; Euro.
`@qlReponse = SCR_QL_GLO0133`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0161 -->
`if @qlRoute == "SCR_QL_GLO0161"`
### 📘 Pouvoir exécutif

Pouvoir chargé de conduire la politique et de faire appliquer les lois. En France, il est exercé par le président de la République et le Gouvernement.
`@qlReponse = SCR_QL_GLO0161`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0224 -->
`if @qlRoute == "SCR_QL_GLO0224"`
### 📘 Procès équitable

Procès dans lequel chacun peut faire valoir ses arguments devant une juridiction indépendante et impartiale, avec le respect des droits de la défense.
`@qlReponse = SCR_QL_GLO0224`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0241 -->
`if @qlRoute == "SCR_QL_GLO0241"`
### 📘 Temps de travail

Durée pendant laquelle un salarié exerce son activité professionnelle. Les règles dépendent notamment du contrat et de la loi.
`@qlReponse = SCR_QL_GLO0241`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0059 -->
`if @qlRoute == "SCR_QL_GLO0059"`
### 📘 France Services

**France Services** est un lieu où l’on peut être accompagné pour réaliser des démarches administratives.
`@qlReponse = SCR_QL_GLO0059`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0078 -->
`if @qlRoute == "SCR_QL_GLO0078"`
### 📘 La Marseillaise

**La Marseillaise** est l’hymne national de la France.
`@qlReponse = SCR_QL_GLO0078`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0043 -->
`if @qlRoute == "SCR_QL_GLO0043"`
### 📘 Député européen

Représentant élu des citoyens au Parlement européen.

**À retenir :** Les députés européens sont élus tous les cinq ans.

**Voir aussi :** Parlement européen.
`@qlReponse = SCR_QL_GLO0043`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0129 -->
`if @qlRoute == "SCR_QL_GLO0129"`
### 📘 Titre de séjour

Un **titre de séjour** est un document qui autorise une personne étrangère à séjourner en France selon les conditions du titre.
`@qlReponse = SCR_QL_GLO0129`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0045 -->
`if @qlRoute == "SCR_QL_GLO0045"`
### 📘 Dignité humaine

La **dignité humaine** signifie que toute personne mérite le respect. On ne doit pas humilier une personne ni la traiter comme un objet.
`@qlReponse = SCR_QL_GLO0045`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0053 -->
`if @qlRoute == "SCR_QL_GLO0053"`
### 📘 Espace Schengen

Espace dans lequel les contrôles aux frontières intérieures sont supprimés entre les États participants.

**À retenir :** La France fait partie de l'espace Schengen.

**Voir aussi :** Union européenne.
`@qlReponse = SCR_QL_GLO0053`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0095 -->
`if @qlRoute == "SCR_QL_GLO0095"`
### 📘 Musée du Louvre

Plus grand musée d'art de France situé à Paris.

**À retenir :** Il abrite notamment la Joconde.

**Voir aussi :** Paris.
`@qlReponse = SCR_QL_GLO0095`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0177 -->
`if @qlRoute == "SCR_QL_GLO0177"`
### 📘 Droits civiques

Droits qui permettent de participer à la vie citoyenne, notamment le droit de vote, selon les conditions prévues par la loi.
`@qlReponse = SCR_QL_GLO0177`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0200 -->
`if @qlRoute == "SCR_QL_GLO0200"`
### 📘 Impressionnisme

Courant artistique du XIXe siècle qui représente notamment les impressions de lumière et de couleur.
`@qlReponse = SCR_QL_GLO0200`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0173 -->
`if @qlRoute == "SCR_QL_GLO0173"`
### 📘 Intérêt général

Ce qui sert le bien commun, au-delà des intérêts particuliers d’une personne ou d’un groupe.
`@qlReponse = SCR_QL_GLO0173`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0156 -->
`if @qlRoute == "SCR_QL_GLO0156"`
### 📘 Parti politique

Organisation qui rassemble des personnes autour d’idées politiques et participe à la vie démocratique, notamment aux élections.
`@qlReponse = SCR_QL_GLO0156`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0191 -->
`if @qlRoute == "SCR_QL_GLO0191"`
### 📘 Réseaux sociaux

Services en ligne permettant de publier et d’échanger des contenus. Les règles de droit et le respect d’autrui s’y appliquent aussi.
`@qlReponse = SCR_QL_GLO0191`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0189 -->
`if @qlRoute == "SCR_QL_GLO0189"`
### 📘 Tri des déchets

Séparation des déchets selon leur nature pour permettre leur collecte et leur traitement adaptés.
`@qlReponse = SCR_QL_GLO0189`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0243 -->
`if @qlRoute == "SCR_QL_GLO0243"`
### 📘 Entrepreneuriat

Création et développement d’une activité ou d’une entreprise, dans le respect des obligations légales.
`@qlReponse = SCR_QL_GLO0243`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0097 -->
`if @qlRoute == "SCR_QL_GLO0097"`
### 📘 Naturalisation

La **naturalisation** est une procédure qui permet de devenir français sous certaines conditions. Les démarches sont expliquées dans les rubriques du chatbot.
`@qlReponse = SCR_QL_GLO0097`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_SIMPLE_DEVOIR -->
`if @qlRoute == "SCR_QL_SIMPLE_DEVOIR"`
### 📘 Devoir civique

Un **devoir** est une obligation à respecter pour vivre ensemble. Respecter la loi et les droits des autres en sont des exemples.
`@qlReponse = SCR_QL_SIMPLE_DEVOIR`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0057 -->
`if @qlRoute == "SCR_QL_GLO0057"`
### 📘 Fête nationale

La fête nationale française est célébrée chaque année le 14 juillet.

**À retenir :** Elle commémore la prise de la Bastille et la Fête de la Fédération.

**Voir aussi :** République.
`@qlReponse = SCR_QL_GLO0057`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0125 -->
`if @qlRoute == "SCR_QL_GLO0125"`
### 📘 Service public

Un **service public** répond à un besoin d’intérêt général. L’école publique est un exemple de service public.
`@qlReponse = SCR_QL_GLO0125`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_SIMPLE_DISCRIMINATION -->
`if @qlRoute == "SCR_QL_SIMPLE_DISCRIMINATION"`
### 📘 Discrimination

Une **discrimination** consiste à traiter une personne moins bien pour un motif interdit, par exemple son origine ou sa religion. Le principe d’égalité protège les personnes contre ces traitements.
`@qlReponse = SCR_QL_SIMPLE_DISCRIMINATION`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0060 -->
`if @qlRoute == "SCR_QL_GLO0060"`
### 📘 France Travail

**France Travail** accompagne les personnes qui cherchent un emploi, notamment dans leurs recherches et leurs démarches.
`@qlReponse = SCR_QL_GLO0060`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0172 -->
`if @qlRoute == "SCR_QL_GLO0172"`
### 📘 Agents publics

Personnes qui travaillent pour une administration ou un service public. Elles doivent respecter notamment la neutralité et l’égalité de traitement.
`@qlReponse = SCR_QL_GLO0172`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0164 -->
`if @qlRoute == "SCR_QL_GLO0164"`
### 📘 Chef de l’État

Personne qui représente l’État au plus haut niveau. En France, le chef de l’État est le président de la République.
`@qlReponse = SCR_QL_GLO0164`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0183 -->
`if @qlRoute == "SCR_QL_GLO0183"`
### 📘 Cour d’assises

Juridiction qui juge certains crimes avec des magistrats et un jury de citoyens.
`@qlReponse = SCR_QL_GLO0183`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0227 -->
`if @qlRoute == "SCR_QL_GLO0227"`
### 📘 Responsabilité

Obligation de répondre de ses actes et, selon les cas, de réparer les dommages causés ou d’accepter une sanction.
`@qlReponse = SCR_QL_GLO0227`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0232 -->
`if @qlRoute == "SCR_QL_GLO0232"`
### 📘 Traité de Rome

Traité signé en 1957 créant la Communauté économique européenne, une étape importante de la construction européenne.
`@qlReponse = SCR_QL_GLO0232`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0052 -->
`if @qlRoute == "SCR_QL_GLO0052"`
### 📘 Environnement

Ensemble des éléments naturels que chacun doit protéger.

**À retenir :** La protection de l'environnement est une responsabilité collective.

**Voir aussi :** Charte de l'environnement.
`@qlReponse = SCR_QL_GLO0052`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0035 -->
`if @qlRoute == "SCR_QL_GLO0035"`
### 📘 Contravention

Infraction la moins grave.

**À retenir :** Elle est généralement punie d'une amende.

**Voir aussi :** Délit; Crime.
`@qlReponse = SCR_QL_GLO0035`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0135 -->
`if @qlRoute == "SCR_QL_GLO0135"`
### 📘 Vercingétorix

Chef gaulois qui s'est opposé à Jules César.

**À retenir :** Il est devenu un symbole de la résistance gauloise.

**Voir aussi :** Gaule; Jules César.
`@qlReponse = SCR_QL_GLO0135`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0072 -->
`if @qlRoute == "SCR_QL_GLO0072"`
### 📘 Île-de-France

Région où se situe Paris, capitale de la France.

**À retenir :** Elle est la région la plus peuplée du pays et concentre de nombreuses institutions nationales.

**Voir aussi :** Paris.
`@qlReponse = SCR_QL_GLO0072`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0184 -->
`if @qlRoute == "SCR_QL_GLO0184"`
### 📘 Peine de mort

Sanction qui consiste à exécuter une personne condamnée. Elle a été abolie en France en 1981.
`@qlReponse = SCR_QL_GLO0184`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0222 -->
`if @qlRoute == "SCR_QL_GLO0222"`
### 📘 Projet de loi

Texte de loi proposé par le Gouvernement et soumis au Parlement.
`@qlReponse = SCR_QL_GLO0222`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0066 -->
`if @qlRoute == "SCR_QL_GLO0066"`
### 📘 Gouvernement

Le **gouvernement** est l’équipe qui dirige l’action du pays au quotidien. En France, il est composé du **Premier ministre et des ministres**. Il prépare des projets de loi et fait appliquer les lois. **Le Parlement vote les lois : ce n’est pas le même rôle.**
`@qlReponse = SCR_QL_GLO0066`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0031 -->
`if @qlRoute == "SCR_QL_GLO0031"`
### 📘 Consentement

Le **consentement** est un accord donné librement, sans pression. Une personne doit pouvoir accepter ou refuser.
`@qlReponse = SCR_QL_GLO0031`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0061 -->
`if @qlRoute == "SCR_QL_GLO0061"`
### 📘 Francophonie

Ensemble des personnes et des pays qui utilisent la langue française.

**À retenir :** Le français est parlé sur les cinq continents.

**Voir aussi :** Langue française.
`@qlReponse = SCR_QL_GLO0061`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0099 -->
`if @qlRoute == "SCR_QL_GLO0099"`
### 📘 Ordre public

L’**ordre public** protège notamment la sécurité et la tranquillité de tous. Il permet de vivre ensemble dans un cadre commun.
`@qlReponse = SCR_QL_GLO0099`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0032 -->
`if @qlRoute == "SCR_QL_GLO0032"`
### 📘 Constitution

La **Constitution** est le texte qui fixe les grandes règles de fonctionnement du pays. Elle organise les institutions et protège des droits fondamentaux.
`@qlReponse = SCR_QL_GLO0032`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0112 -->
`if @qlRoute == "SCR_QL_GLO0112"`
### 📘 Propriétaire

Personne qui possède un logement.

**À retenir :** Le propriétaire peut louer son logement.

**Voir aussi :** Bail.
`@qlReponse = SCR_QL_GLO0112`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0113 -->
`if @qlRoute == "SCR_QL_GLO0113"`
### 📘 Prostitution

Échange d’un acte sexuel contre une rémunération. En France, l’achat d’un acte sexuel est interdit ; le proxénétisme est également puni par la loi.
`@qlReponse = SCR_QL_GLO0113`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0011 -->
`if @qlRoute == "SCR_QL_GLO0011"`
### 📘 Carte Vitale

La **carte Vitale** sert à transmettre les informations nécessaires au remboursement des soins par l’Assurance maladie.
`@qlReponse = SCR_QL_GLO0011`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0198 -->
`if @qlRoute == "SCR_QL_GLO0198"`
### 📘 Colonisation

Prise de contrôle d’un territoire et de sa population par une puissance extérieure.
`@qlReponse = SCR_QL_GLO0198`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0203 -->
`if @qlRoute == "SCR_QL_GLO0203"`
### 📘 Méditerranée

Mer située au sud de la France, entre l’Europe, l’Afrique du Nord et le Proche-Orient.
`@qlReponse = SCR_QL_GLO0203`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0139 -->
`if @qlRoute == "SCR_QL_GLO0139"`
### 📘 Salaire brut

Rémunération avant le prélèvement des cotisations sociales à la charge du salarié.
`@qlReponse = SCR_QL_GLO0139`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0069 -->
`if @qlRoute == "SCR_QL_GLO0069"`
### 📘 Harcèlement

Violences ou comportements répétés ayant pour effet de dégrader les conditions de vie d'une personne.

**À retenir :** Le harcèlement est puni par la loi.

**Voir aussi :** Harcèlement scolaire.
`@qlReponse = SCR_QL_GLO0069`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0111 -->
`if @qlRoute == "SCR_QL_GLO0111"`
### 📘 Procuration

Une **procuration** permet de confier son vote à une autre personne lorsqu’on ne peut pas voter soi-même.
`@qlReponse = SCR_QL_GLO0111`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0015 -->
`if @qlRoute == "SCR_QL_GLO0015"`
### 📘 Charlemagne

Empereur d'Occident couronné en l'an 800.

**À retenir :** Il a contribué au développement de l'éducation et de l'organisation de son empire.

**Voir aussi :** Moyen Âge.
`@qlReponse = SCR_QL_GLO0015`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0020 -->
`if @qlRoute == "SCR_QL_GLO0020"`
### 📘 Citoyenneté

Lien juridique entre une personne et un État, donnant des droits mais aussi des devoirs.

**À retenir :** Tous les résidents ne sont pas citoyens français.

**Attention à ne pas confondre :** Citoyenneté ≠ résidence.

**Voir aussi :** Nationalité.
`@qlReponse = SCR_QL_GLO0020`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0041 -->
`if @qlRoute == "SCR_QL_GLO0041"`
### 📘 Département

Le département est une collectivité territoriale située entre la région et la commune.

**À retenir :** La France compte 101 départements.

**Voir aussi :** Région; Commune.
`@qlReponse = SCR_QL_GLO0041`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0065 -->
`if @qlRoute == "SCR_QL_GLO0065"`
### 📘 Gendarmerie

Force militaire chargée de missions de sécurité publique.

**À retenir :** Elle intervient principalement en zone rurale.

**Voir aussi :** Police.
`@qlReponse = SCR_QL_GLO0065`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0130 -->
`if @qlRoute == "SCR_QL_GLO0130"`
### 📘 Tour Eiffel

Monument emblématique situé à Paris, construit pour l'Exposition universelle de 1889.

**À retenir :** Elle est l'un des symboles les plus connus de la France.

**Voir aussi :** Paris.
`@qlReponse = SCR_QL_GLO0130`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0157 -->
`if @qlRoute == "SCR_QL_GLO0157"`
### 📘 Éligibilité

Possibilité de se présenter à une élection lorsque les conditions prévues par la loi sont remplies.
`@qlReponse = SCR_QL_GLO0157`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0201 -->
`if @qlRoute == "SCR_QL_GLO0201"`
### 📘 Littérature

Ensemble des œuvres écrites, comme les romans, la poésie ou le théâtre.
`@qlReponse = SCR_QL_GLO0201`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0155 -->
`if @qlRoute == "SCR_QL_GLO0155"`
### 📘 Quinquennat

Mandat de cinq ans. Le mandat du président de la République française est un quinquennat.
`@qlReponse = SCR_QL_GLO0155`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0140 -->
`if @qlRoute == "SCR_QL_GLO0140"`
### 📘 Salaire net

Rémunération après déduction des cotisations salariales ; le montant versé peut aussi tenir compte du prélèvement de l’impôt.
`@qlReponse = SCR_QL_GLO0140`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0218 -->
`if @qlRoute == "SCR_QL_GLO0218"`
### 📘 Coq gaulois

Animal utilisé comme symbole de la France, notamment dans le sport. Il ne remplace pas le drapeau tricolore.
`@qlReponse = SCR_QL_GLO0218`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0234 -->
`if @qlRoute == "SCR_QL_GLO0234"`
### 📘 Jules Ferry

Responsable politique associé aux lois de 1881 et 1882 rendant l’école primaire publique gratuite, puis l’instruction obligatoire et l’enseignement public laïque.
`@qlReponse = SCR_QL_GLO0234`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0240 -->
`if @qlRoute == "SCR_QL_GLO0240"`
### 📘 Vaccination

Moyen de protéger une personne contre certaines maladies et de limiter leur transmission.
`@qlReponse = SCR_QL_GLO0240`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0098 -->
`if @qlRoute == "SCR_QL_GLO0098"`
### 📘 Neutralité

La **neutralité** signifie ne pas favoriser une opinion politique ou une religion dans l’exercice d’un service public.
`@qlReponse = SCR_QL_GLO0098`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0103 -->
`if @qlRoute == "SCR_QL_GLO0103"`
### 📘 Patrimoine

Le **patrimoine** est l’ensemble des lieux, des objets et des traditions transmis par les générations précédentes. Un monument historique en fait partie.
`@qlReponse = SCR_QL_GLO0103`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0001 -->
`if @qlRoute == "SCR_QL_GLO0001"`
### 📘 Abstention

L’**abstention** consiste à ne pas participer à une élection. Elle est différente du vote blanc.
`@qlReponse = SCR_QL_GLO0001`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0040 -->
`if @qlRoute == "SCR_QL_GLO0040"`
### 📘 Démocratie

Dans une **démocratie**, le peuple participe aux décisions, notamment en choisissant ses représentants par le vote.
`@qlReponse = SCR_QL_GLO0040`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0062 -->
`if @qlRoute == "SCR_QL_GLO0062"`
### 📘 Fraternité

La **fraternité** signifie vivre ensemble avec respect et solidarité. Aider une personne en difficulté est un exemple de solidarité.
`@qlReponse = SCR_QL_GLO0062`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0067 -->
`if @qlRoute == "SCR_QL_GLO0067"`
### 📘 Guadeloupe

Département et région d'outre-mer situé dans les Caraïbes.

**À retenir :** Elle est connue pour ses plages, son volcan de la Soufrière et sa biodiversité.

**Voir aussi :** Outre-mer.
`@qlReponse = SCR_QL_GLO0067`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0074 -->
`if @qlRoute == "SCR_QL_GLO0074"`
### 📘 Infraction

Acte interdit par la loi.

**À retenir :** Une infraction peut être sanctionnée.

**Voir aussi :** Contravention; Délit; Crime.
`@qlReponse = SCR_QL_GLO0074`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0090 -->
`if @qlRoute == "SCR_QL_GLO0090"`
### 📘 Martinique

Département et région d'outre-mer situé dans les Caraïbes.

**À retenir :** La Martinique est célèbre pour la montagne Pelée et son patrimoine culturel.

**Voir aussi :** Outre-mer.
`@qlReponse = SCR_QL_GLO0090`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0105 -->
`if @qlRoute == "SCR_QL_GLO0105"`
### 📘 Préfecture

Administration représentant l'État dans un département.

**À retenir :** Elle traite notamment certaines démarches liées au séjour des étrangers.

**Voir aussi :** Préfet.
`@qlReponse = SCR_QL_GLO0105`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0116 -->
`if @qlRoute == "SCR_QL_GLO0116"`
### 📘 Référendum

Un **référendum** est un vote où les citoyens répondent directement à une question, généralement par oui ou non.
`@qlReponse = SCR_QL_GLO0116`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0118 -->
`if @qlRoute == "SCR_QL_GLO0118"`
### 📘 République

Organisation politique dans laquelle le pouvoir appartient au peuple et s'exerce conformément à la Constitution.

**À retenir :** La France est une République indivisible, laïque, démocratique et sociale.

**Attention à ne pas confondre :** République ≠ démocratie.
La République est une forme d'organisation de l'État.
La démocratie est une manière d'exercer le pouvoir.

**Voir aussi :** Constitution; Démocratie; Souveraineté nationale.
`@qlReponse = SCR_QL_GLO0118`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0079 -->
`if @qlRoute == "SCR_QL_GLO0079"`
### 📘 La Réunion

Département et région d'outre-mer situé dans l'océan Indien.

**À retenir :** L'île est connue pour ses cirques, son volcan actif et ses paysages naturels.

**Voir aussi :** Outre-mer.
`@qlReponse = SCR_QL_GLO0079`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0188 -->
`if @qlRoute == "SCR_QL_GLO0188"`
### 📘 Déchèterie

Lieu où l’on dépose certains déchets qui ne doivent pas être mis dans les poubelles ordinaires.
`@qlReponse = SCR_QL_GLO0188`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0143 -->
`if @qlRoute == "SCR_QL_GLO0143"`
### 📘 Entreprise

Organisation qui produit des biens ou fournit des services. Elle peut employer des salariés.
`@qlReponse = SCR_QL_GLO0143`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0166 -->
`if @qlRoute == "SCR_QL_GLO0166"`
### 📘 État civil

Enregistrement officiel des événements importants de la vie d’une personne, notamment sa naissance, son mariage et son décès.
`@qlReponse = SCR_QL_GLO0166`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0149 -->
`if @qlRoute == "SCR_QL_GLO0149"`
### 📘 Prévention

Actions destinées à éviter un risque ou à limiter ses conséquences, par exemple la vaccination ou le dépistage.
`@qlReponse = SCR_QL_GLO0149`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0193 -->
`if @qlRoute == "SCR_QL_GLO0193"`
### 📘 Résistance

Actions menées contre l’occupation et les régimes oppressifs ; en France, le terme renvoie notamment à la lutte contre l’occupation nazie pendant la Seconde Guerre mondiale.
`@qlReponse = SCR_QL_GLO0193`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0228 -->
`if @qlRoute == "SCR_QL_GLO0228"`
### 📘 Révolution

Changement profond et rapide de l’organisation politique ou sociale. La Révolution française commence en 1789.
`@qlReponse = SCR_QL_GLO0228`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0238 -->
`if @qlRoute == "SCR_QL_GLO0238"`
### 📘 Jour férié

Jour lié à une fête ou à une commémoration. Un jour férié n’est pas toujours un jour sans travail : les règles dépendent de la situation.
`@qlReponse = SCR_QL_GLO0238`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0051 -->
`if @qlRoute == "SCR_QL_GLO0051"`
### 📘 Employeur

L’**employeur** est la personne ou l’organisation qui embauche un salarié et lui verse un salaire.
`@qlReponse = SCR_QL_GLO0051`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0084 -->
`if @qlRoute == "SCR_QL_GLO0084"`
### 📘 Locataire

Le **locataire** est la personne qui loue un logement et paie un loyer au propriétaire.
`@qlReponse = SCR_QL_GLO0084`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0101 -->
`if @qlRoute == "SCR_QL_GLO0101"`
### 📘 Parlement

Le **Parlement** est l’ensemble des représentants qui discutent et **votent les lois**. En France, il comprend l’**Assemblée nationale** et le **Sénat**. Le Gouvernement prépare des projets de loi ; le Parlement les examine et les vote.
`@qlReponse = SCR_QL_GLO0101`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0100 -->
`if @qlRoute == "SCR_QL_GLO0100"`
### 📘 Outre-mer

L’**outre-mer** désigne les territoires français situés en dehors de la France métropolitaine.
`@qlReponse = SCR_QL_GLO0100`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0197 -->
`if @qlRoute == "SCR_QL_GLO0197"`
### 📘 Abolition

Suppression officielle d’une règle, d’une pratique ou d’une peine, par exemple l’abolition de l’esclavage ou de la peine de mort.
`@qlReponse = SCR_QL_GLO0197`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0192 -->
`if @qlRoute == "SCR_QL_GLO0192"`
### 📘 Armistice

Accord qui suspend les combats entre des forces en guerre. Il ne signifie pas nécessairement la fin définitive de la guerre.
`@qlReponse = SCR_QL_GLO0192`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0145 -->
`if @qlRoute == "SCR_QL_GLO0145"`
### 📘 Bénévolat

Activité réalisée librement sans rémunération, par exemple pour aider une association.
`@qlReponse = SCR_QL_GLO0145`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0196 -->
`if @qlRoute == "SCR_QL_GLO0196"`
### 📘 Esclavage

Situation dans laquelle des personnes sont privées de leur liberté et traitées comme la propriété d’autrui.
`@qlReponse = SCR_QL_GLO0196`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0199 -->
`if @qlRoute == "SCR_QL_GLO0199"`
### 📘 Monarchie

Régime politique dans lequel le chef de l’État est un roi ou une reine.
`@qlReponse = SCR_QL_GLO0199`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0167 -->
`if @qlRoute == "SCR_QL_GLO0167"`
### 📘 Naissance

Venue au monde d’un enfant. Elle doit être déclarée à l’état civil dans les conditions prévues par la loi.
`@qlReponse = SCR_QL_GLO0167`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0169 -->
`if @qlRoute == "SCR_QL_GLO0169"`
### 📘 Polygamie

Situation dans laquelle une personne est mariée à plusieurs conjoints en même temps. Elle est interdite en France.
`@qlReponse = SCR_QL_GLO0169`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0187 -->
`if @qlRoute == "SCR_QL_GLO0187"`
### 📘 Recyclage

Transformation de déchets pour réutiliser leurs matériaux et réduire le gaspillage des ressources.
`@qlReponse = SCR_QL_GLO0187`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0235 -->
`if @qlRoute == "SCR_QL_GLO0235"`
### 📘 Louis XVI

Roi de France au début de la Révolution française. Il est exécuté en 1793.
`@qlReponse = SCR_QL_GLO0235`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0239 -->
`if @qlRoute == "SCR_QL_GLO0239"`
### 📘 Assiduité

Présence régulière et respect des horaires dans une activité, notamment à l’école ou en formation.
`@qlReponse = SCR_QL_GLO0239`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0244 -->
`if @qlRoute == "SCR_QL_GLO0244"`
### 📘 Inclusion

Organisation de la société pour permettre à chacun de participer, notamment aux personnes en situation de handicap.
`@qlReponse = SCR_QL_GLO0244`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0008 -->
`if @qlRoute == "SCR_QL_GLO0008"`
### 📘 Bretagne

Région située à l'ouest de la France métropolitaine.

**À retenir :** La Bretagne est connue pour son littoral, sa culture bretonne, ses ports de pêche, ses phares et ses spécialités culinaires comme les crêpes et le kouign-amann.

**Voir aussi :** Rennes; Région.
`@qlReponse = SCR_QL_GLO0008`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0050 -->
`if @qlRoute == "SCR_QL_GLO0050"`
### 📘 Élection

Procédure permettant aux citoyens de choisir leurs représentants.

**À retenir :** Les élections sont au cœur de la démocratie.

**Voir aussi :** Suffrage universel.
`@qlReponse = SCR_QL_GLO0050`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0089 -->
`if @qlRoute == "SCR_QL_GLO0089"`
### 📘 Marianne

Marianne est la représentation symbolique de la République française.

**À retenir :** Elle symbolise la liberté et la République.

**Voir aussi :** République.
`@qlReponse = SCR_QL_GLO0089`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0093 -->
`if @qlRoute == "SCR_QL_GLO0093"`
### 📘 Ministre

Un **ministre** fait partie du Gouvernement. Il s’occupe d’un domaine, comme l’éducation, la santé ou la justice.
`@qlReponse = SCR_QL_GLO0093`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0124 -->
`if @qlRoute == "SCR_QL_GLO0124"`
### 📘 Sénateur

Le sénateur siège au Sénat.

**À retenir :** Il participe au vote des lois.

**Voir aussi :** Sénat.
`@qlReponse = SCR_QL_GLO0124`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0136 -->
`if @qlRoute == "SCR_QL_GLO0136"`
### 📘 Violence

Acte portant atteinte à une personne, physiquement, psychologiquement, sexuellement ou économiquement.

**À retenir :** Toutes les formes de violence sont interdites.

**Voir aussi :** Consentement.
`@qlReponse = SCR_QL_GLO0136`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0115 -->
`if @qlRoute == "SCR_QL_GLO0115"`
### 📘 Pyrénées

Chaîne de montagnes séparant la France et l'Espagne.

**À retenir :** Elles forment une frontière naturelle.

**Voir aussi :** Alpes.
`@qlReponse = SCR_QL_GLO0115`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0134 -->
`if @qlRoute == "SCR_QL_GLO0134"`
### 📘 Urgences

Situation nécessitant une prise en charge médicale immédiate.

**À retenir :** En cas d'urgence médicale, composez le 15.

**Voir aussi :** SAMU; Hôpital.
`@qlReponse = SCR_QL_GLO0134`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0195 -->
`if @qlRoute == "SCR_QL_GLO0195"`
### 📘 Génocide

Actes commis avec l’intention de détruire, en tout ou en partie, un groupe national, ethnique, racial ou religieux.
`@qlReponse = SCR_QL_GLO0195`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0147 -->
`if @qlRoute == "SCR_QL_GLO0147"`
### 📘 Handicap

Limitation d’activité ou difficulté de participation à la vie sociale liée notamment à une altération physique, sensorielle ou mentale.
`@qlReponse = SCR_QL_GLO0147`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0208 -->
`if @qlRoute == "SCR_QL_GLO0208"`
### 📘 Majorité

Âge à partir duquel une personne devient juridiquement adulte. Le mot désigne aussi le plus grand nombre de voix dans un vote.
`@qlReponse = SCR_QL_GLO0208`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0148 -->
`if @qlRoute == "SCR_QL_GLO0148"`
### 📘 Mutuelle

Organisme de complémentaire santé qui peut prendre en charge une partie des dépenses restant après le remboursement de l’Assurance maladie.
`@qlReponse = SCR_QL_GLO0148`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0175 -->
`if @qlRoute == "SCR_QL_GLO0175"`
### 📘 Religion

Ensemble de croyances et de pratiques liées à une foi. Chacun est libre de croire, de changer de religion ou de ne pas croire.
`@qlReponse = SCR_QL_GLO0175`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0226 -->
`if @qlRoute == "SCR_QL_GLO0226"`
### 📘 Sanction

Conséquence prévue lorsqu’une règle ou une loi n’est pas respectée. Sa nature dépend de la faute ou de l’infraction.
`@qlReponse = SCR_QL_GLO0226`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0229 -->
`if @qlRoute == "SCR_QL_GLO0229"`
### 📘 Bastille

Ancienne forteresse et prison de Paris prise le 14 juillet 1789. Cet événement est un repère de la Révolution française.
`@qlReponse = SCR_QL_GLO0229`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0080 -->
`if @qlRoute == "SCR_QL_GLO0080"`
### 📘 Laïcité

La **laïcité** permet à chacun de croire, de ne pas croire ou de changer de religion. L’État reste neutre à l’égard des religions. Chacun doit respecter la liberté des autres.
`@qlReponse = SCR_QL_GLO0080`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0049 -->
`if @qlRoute == "SCR_QL_GLO0049"`
### 📘 Égalité

L’**égalité** signifie que chacun a les mêmes droits devant la loi. Une personne ne doit pas être traitée moins bien en raison, par exemple, de son origine ou de sa religion.
`@qlReponse = SCR_QL_GLO0049`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0019 -->
`if @qlRoute == "SCR_QL_GLO0019"`
### 📘 Citoyen

Personne qui possède la nationalité d’un État et les droits et devoirs qui s’y rattachent. En France, le droit de vote dépend notamment de la nationalité, de l’âge et du type d’élection.
`@qlReponse = SCR_QL_GLO0019`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0120 -->
`if @qlRoute == "SCR_QL_GLO0120"`
### 📘 Salaire

Somme versée par l'employeur en contrepartie du travail effectué.

**À retenir :** Le salaire est indiqué sur la fiche de paie.

**Voir aussi :** Employeur.
`@qlReponse = SCR_QL_GLO0120`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0077 -->
`if @qlRoute == "SCR_QL_GLO0077"`
### 📘 Justice

La **justice** fait respecter les règles, règle les conflits et sanctionne les infractions. Elle protège aussi les droits des personnes.
`@qlReponse = SCR_QL_GLO0077`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0022 -->
`if @qlRoute == "SCR_QL_GLO0022"`
### 📘 Collège

Établissement accueillant les élèves après l'école primaire.

**À retenir :** Le collège est obligatoire.

**Voir aussi :** Lycée.
`@qlReponse = SCR_QL_GLO0022`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0024 -->
`if @qlRoute == "SCR_QL_GLO0024"`
### 📘 Commune

Une **commune** est une ville ou un village avec son administration locale. Le maire et le conseil municipal s’occupent des affaires de la commune.
`@qlReponse = SCR_QL_GLO0024`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0071 -->
`if @qlRoute == "SCR_QL_GLO0071"`
### 📘 Hôpital

Établissement de santé où sont assurés les soins médicaux et chirurgicaux.

**À retenir :** Les hôpitaux publics accueillent tous les patients.

**Voir aussi :** Urgences.
`@qlReponse = SCR_QL_GLO0071`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0082 -->
`if @qlRoute == "SCR_QL_GLO0082"`
### 📘 Liberté

La **liberté** permet de faire des choix et de s’exprimer. Elle s’exerce dans le respect de la loi et des droits des autres.
`@qlReponse = SCR_QL_GLO0082`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0091 -->
`if @qlRoute == "SCR_QL_GLO0091"`
### 📘 Mayotte

Département et région d'outre-mer situé dans l'océan Indien.

**À retenir :** Mayotte est le département le plus récent de la République française.

**Voir aussi :** Outre-mer.
`@qlReponse = SCR_QL_GLO0091`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0186 -->
`if @qlRoute == "SCR_QL_GLO0186"`
### 📘 Déchets

Objets ou matières dont on se débarrasse. Il faut respecter les règles de collecte, de tri et de traitement.
`@qlReponse = SCR_QL_GLO0186`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0168 -->
`if @qlRoute == "SCR_QL_GLO0168"`
### 📘 Divorce

Fin d’un mariage prononcée ou constatée selon une procédure légale.
`@qlReponse = SCR_QL_GLO0168`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0176 -->
`if @qlRoute == "SCR_QL_GLO0176"`
### 📘 Opinion

Idée ou point de vue personnel sur un sujet. La liberté d’opinion est protégée, dans le respect de la loi et des droits d’autrui.
`@qlReponse = SCR_QL_GLO0176`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0179 -->
`if @qlRoute == "SCR_QL_GLO0179"`
### 📘 Plainte

Démarche par laquelle une personne signale aux autorités une infraction dont elle estime être victime.
`@qlReponse = SCR_QL_GLO0179`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0174 -->
`if @qlRoute == "SCR_QL_GLO0174"`
### 📘 Respect

Attitude qui consiste à reconnaître la dignité et les droits d’autrui, même lorsque ses opinions diffèrent des nôtres.
`@qlReponse = SCR_QL_GLO0174`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0142 -->
`if @qlRoute == "SCR_QL_GLO0142"`
### 📘 Salarié

Personne qui travaille pour un employeur dans le cadre d’un contrat de travail et reçoit un salaire.
`@qlReponse = SCR_QL_GLO0142`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0152 -->
`if @qlRoute == "SCR_QL_GLO0152"`
### 📘 Secours

Aide apportée à une personne en danger ou en difficulté ; elle peut nécessiter de prévenir les services d’urgence.
`@qlReponse = SCR_QL_GLO0152`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0151 -->
`if @qlRoute == "SCR_QL_GLO0151"`
### 📘 Urgence

Situation qui nécessite une intervention rapide, notamment lorsqu’une vie ou la sécurité d’une personne est en danger.
`@qlReponse = SCR_QL_GLO0151`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0088 -->
`if @qlRoute == "SCR_QL_GLO0088"`
### 📘 Mairie

La **mairie** est le lieu où travaillent les services de la commune. On peut y faire certaines démarches administratives.
`@qlReponse = SCR_QL_GLO0088`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0104 -->
`if @qlRoute == "SCR_QL_GLO0104"`
### 📘 Police

Force civile chargée de protéger les personnes et de faire respecter la loi.

**À retenir :** Elle intervient principalement dans les villes.

**Voir aussi :** Gendarmerie.
`@qlReponse = SCR_QL_GLO0104`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0042 -->
`if @qlRoute == "SCR_QL_GLO0042"`
### 📘 Député

Un **député** est un représentant élu qui siège à l’Assemblée nationale. Il participe au vote des lois.
`@qlReponse = SCR_QL_GLO0042`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0068 -->
`if @qlRoute == "SCR_QL_GLO0068"`
### 📘 Guyane

Département et région d'outre-mer situé en Amérique du Sud.

**À retenir :** La Guyane accueille le Centre spatial guyanais de Kourou et possède une vaste forêt amazonienne.

**Voir aussi :** Outre-mer.
`@qlReponse = SCR_QL_GLO0068`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0106 -->
`if @qlRoute == "SCR_QL_GLO0106"`
### 📘 Préfet

Le préfet représente l'État dans un département ou une région.

**À retenir :** Il est nommé par le Gouvernement.

**Attention à ne pas confondre :** Le préfet n'est pas élu.

**Voir aussi :** État; Maire.
`@qlReponse = SCR_QL_GLO0106`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0117 -->
`if @qlRoute == "SCR_QL_GLO0117"`
### 📘 Région

La région est une collectivité territoriale regroupant plusieurs départements.

**À retenir :** La France compte 18 régions.

**Voir aussi :** Département.
`@qlReponse = SCR_QL_GLO0117`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0128 -->
`if @qlRoute == "SCR_QL_GLO0128"`
### 📘 Sûreté

Droit d'être protégé contre les arrestations arbitraires et de bénéficier d'un procès équitable.

**À retenir :** La justice protège les libertés individuelles.

**Voir aussi :** Présomption d'innocence; Justice.
`@qlReponse = SCR_QL_GLO0128`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0132 -->
`if @qlRoute == "SCR_QL_GLO0132"`
### 📘 UNESCO

Organisation des Nations unies pour l’éducation, la science et la culture. Elle contribue notamment à la protection du patrimoine mondial. Le Mont-Saint-Michel et sa baie sont inscrits sur la Liste du patrimoine mondial.
`@qlReponse = SCR_QL_GLO0132`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0014 -->
`if @qlRoute == "SCR_QL_GLO0014"`
### 📘 Celtes

Peuples installés en Gaule avant la conquête romaine.

**À retenir :** Les Gaulois étaient des peuples celtes.

**Voir aussi :** Gaule.
`@qlReponse = SCR_QL_GLO0014`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0021 -->
`if @qlRoute == "SCR_QL_GLO0021"`
### 📘 Clovis

Roi des Francs associé à la dynastie mérovingienne et à sa conversion au christianisme. Il a régné bien avant Charlemagne.
`@qlReponse = SCR_QL_GLO0021`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0178 -->
`if @qlRoute == "SCR_QL_GLO0178"`
### 📘 Amende

Somme d’argent qu’une personne doit payer lorsqu’une sanction pécuniaire est prononcée à son encontre.
`@qlReponse = SCR_QL_GLO0178`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0181 -->
`if @qlRoute == "SCR_QL_GLO0181"`
### 📘 Avocat

Professionnel du droit qui conseille une personne, défend ses intérêts et peut la représenter devant la justice.
`@qlReponse = SCR_QL_GLO0181`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0209 -->
`if @qlRoute == "SCR_QL_GLO0209"`
### 📘 Devoir

Obligation à respecter pour vivre dans la société, notamment respecter la loi et les droits d’autrui.
`@qlReponse = SCR_QL_GLO0209`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0202 -->
`if @qlRoute == "SCR_QL_GLO0202"`
### 📘 Fleuve

Cours d’eau qui se jette dans la mer ou dans l’océan.
`@qlReponse = SCR_QL_GLO0202`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0154 -->
`if @qlRoute == "SCR_QL_GLO0154"`
### 📘 Mandat

Mission confiée à une personne, notamment à un élu, pour une durée déterminée.
`@qlReponse = SCR_QL_GLO0154`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0216 -->
`if @qlRoute == "SCR_QL_GLO0216"`
### 📘 Mixité

Présence et participation de femmes et d’hommes dans un même espace ou une même activité, avec les mêmes droits.
`@qlReponse = SCR_QL_GLO0216`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0217 -->
`if @qlRoute == "SCR_QL_GLO0217"`
### 📘 Devise

Formule qui exprime des valeurs communes. La devise de la République française est « Liberté, Égalité, Fraternité ».
`@qlReponse = SCR_QL_GLO0217`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0073 -->
`if @qlRoute == "SCR_QL_GLO0073"`
### 📘 Impôt

L’**impôt** est une somme payée pour financer les dépenses publiques, par exemple les écoles et les services publics.
`@qlReponse = SCR_QL_GLO0073`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0086 -->
`if @qlRoute == "SCR_QL_GLO0086"`
### 📘 Lycée

Établissement préparant les élèves au baccalauréat ou à une formation professionnelle.

**À retenir :** Il existe des lycées généraux, technologiques et professionnels.

**Voir aussi :** Baccalauréat.
`@qlReponse = SCR_QL_GLO0086`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0064 -->
`if @qlRoute == "SCR_QL_GLO0064"`
### 📘 Gaule

Nom donné au territoire de la France actuelle avant la conquête romaine.

**À retenir :** La Gaule était peuplée de peuples celtes.

**Voir aussi :** Celtes; Vercingétorix; Jules César.
`@qlReponse = SCR_QL_GLO0064`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0037 -->
`if @qlRoute == "SCR_QL_GLO0037"`
### 📘 Crime

Infraction la plus grave prévue par la loi.

**À retenir :** Les crimes sont jugés par une cour d'assises.

**Voir aussi :** Délit.
`@qlReponse = SCR_QL_GLO0037`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0039 -->
`if @qlRoute == "SCR_QL_GLO0039"`
### 📘 Délit

Infraction plus grave qu'une contravention.

**À retenir :** Il peut être puni d'une peine de prison.

**Voir aussi :** Crime.
`@qlReponse = SCR_QL_GLO0039`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0048 -->
`if @qlRoute == "SCR_QL_GLO0048"`
### 📘 École

Établissement où les enfants reçoivent un enseignement.

**À retenir :** L'instruction est obligatoire de 3 à 16 ans.

**Voir aussi :** Collège; Lycée.
`@qlReponse = SCR_QL_GLO0048`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0087 -->
`if @qlRoute == "SCR_QL_GLO0087"`
### 📘 Maire

Le **maire** dirige la commune avec le conseil municipal. Il intervient dans les affaires locales.
`@qlReponse = SCR_QL_GLO0087`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0122 -->
`if @qlRoute == "SCR_QL_GLO0122"`
### 📘 Seine

Fleuve qui traverse notamment Paris avant de se jeter dans la Manche.

**À retenir :** La Seine est l'un des principaux fleuves français.

**Voir aussi :** Loire; Rhône.
`@qlReponse = SCR_QL_GLO0122`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0123 -->
`if @qlRoute == "SCR_QL_GLO0123"`
### 📘 Sénat

Le **Sénat** est l’autre partie du Parlement, avec l’Assemblée nationale. Les **sénateurs** y examinent et votent les lois.
`@qlReponse = SCR_QL_GLO0123`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0002 -->
`if @qlRoute == "SCR_QL_GLO0002"`
### 📘 Alpes

Massif montagneux situé à l'est de la France.

**À retenir :** Le Mont Blanc est le plus haut sommet d'Europe occidentale.

**Voir aussi :** Pyrénées.
`@qlReponse = SCR_QL_GLO0002`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0146 -->
`if @qlRoute == "SCR_QL_GLO0146"`
### 📘 Grève

Arrêt collectif du travail destiné à défendre des revendications professionnelles. Ce droit s’exerce dans un cadre légal.
`@qlReponse = SCR_QL_GLO0146`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0194 -->
`if @qlRoute == "SCR_QL_GLO0194"`
### 📘 Shoah

Génocide des Juifs d’Europe perpétré par les nazis et leurs complices pendant la Seconde Guerre mondiale.
`@qlReponse = SCR_QL_GLO0194`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0236 -->
`if @qlRoute == "SCR_QL_GLO0236"`
### 📘 Loire

Plus long fleuve de France. Il se jette dans l’océan Atlantique.
`@qlReponse = SCR_QL_GLO0236`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0237 -->
`if @qlRoute == "SCR_QL_GLO0237"`
### 📘 Rhône

Fleuve qui traverse notamment Lyon et se jette dans la mer Méditerranée.
`@qlReponse = SCR_QL_GLO0237`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0138 -->
`if @qlRoute == "SCR_QL_GLO0138"`
### 📘 SMIC

Salaire minimum légal : un employeur doit respecter ce minimum pour rémunérer le travail de son salarié.
`@qlReponse = SCR_QL_GLO0138`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0007 -->
`if @qlRoute == "SCR_QL_GLO0007"`
### 📘 Bail

Un **bail** est un contrat entre le propriétaire d’un logement et la personne qui le loue. Il précise les conditions de la location.
`@qlReponse = SCR_QL_GLO0007`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0137 -->
`if @qlRoute == "SCR_QL_GLO0137"`
### 📘 Vote

Action qui consiste à choisir un candidat ou répondre à une question lors d'un référendum.

**À retenir :** Le vote est un droit civique.

**Voir aussi :** Élection.
`@qlReponse = SCR_QL_GLO0137`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0036 -->
`if @qlRoute == "SCR_QL_GLO0036"`
### 📘 CPAM

La Caisse primaire d'assurance maladie gère l'Assurance maladie dans chaque département.

**À retenir :** Elle accompagne les assurés dans leurs démarches de santé.

**Voir aussi :** Carte Vitale; Assurance maladie.
`@qlReponse = SCR_QL_GLO0036`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0054 -->
`if @qlRoute == "SCR_QL_GLO0054"`
### 📘 État

L'État est l'organisation politique qui exerce son autorité sur le territoire français et garantit le respect des lois.

**À retenir :** L'État assure les services publics et protège les citoyens.

**Voir aussi :** République; Gouvernement; Préfet.
`@qlReponse = SCR_QL_GLO0054`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0055 -->
`if @qlRoute == "SCR_QL_GLO0055"`
### 📘 Euro

Monnaie utilisée par plusieurs pays de l'Union européenne.

**À retenir :** L'euro est la monnaie officielle de la France.

**Voir aussi :** Union européenne.
`@qlReponse = SCR_QL_GLO0055`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0205 -->
`if @qlRoute == "SCR_QL_GLO0205"`
### 📘 CECA

Communauté européenne du charbon et de l’acier : projet de coopération européen qui a précédé l’Union européenne.
`@qlReponse = SCR_QL_GLO0205`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0204 -->
`if @qlRoute == "SCR_QL_GLO0204"`
### 📘 DROM

Départements et régions d’outre-mer : territoires français ayant ce statut administratif.
`@qlReponse = SCR_QL_GLO0204`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0180 -->
`if @qlRoute == "SCR_QL_GLO0180"`
### 📘 Juge

Professionnel de la justice qui applique la loi et rend des décisions pour trancher des litiges ou juger des infractions.
`@qlReponse = SCR_QL_GLO0180`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0182 -->
`if @qlRoute == "SCR_QL_GLO0182"`
### 📘 Juré

Citoyen appelé à participer à un jury et à juger certaines affaires aux côtés de magistrats.
`@qlReponse = SCR_QL_GLO0182`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0153 -->
`if @qlRoute == "SCR_QL_GLO0153"`
### 📘 SAMU

Service d’aide médicale urgente : il organise la réponse médicale aux urgences et oriente vers les soins adaptés.
`@qlReponse = SCR_QL_GLO0153`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0013 -->
`if @qlRoute == "SCR_QL_GLO0013"`
### 📘 CDI

Un **CDI** est un contrat de travail sans date de fin prévue à l’avance.
`@qlReponse = SCR_QL_GLO0013`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0012 -->
`if @qlRoute == "SCR_QL_GLO0012"`
### 📘 CDD

Un **CDD** est un contrat de travail prévu pour une durée déterminée. Il a une fin prévue selon les conditions du contrat.
`@qlReponse = SCR_QL_GLO0012`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0003 -->
`if @qlRoute == "SCR_QL_GLO0003"`
### 📘 APL

Aide personnalisée au logement versée sous certaines conditions.

**À retenir :** Elle permet de réduire le montant du loyer.

**Voir aussi :** CAF.
`@qlReponse = SCR_QL_GLO0003`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0009 -->
`if @qlRoute == "SCR_QL_GLO0009"`
### 📘 CAF

La **CAF**, ou Caisse d’allocations familiales, verse certaines aides selon la situation des personnes et des familles.
`@qlReponse = SCR_QL_GLO0009`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0085 -->
`if @qlRoute == "SCR_QL_GLO0085"`
### 📘 Loi

Une **loi** est une règle votée par le Parlement. Elle fixe ce qui est autorisé, obligatoire ou interdit.
`@qlReponse = SCR_QL_GLO0085`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0185 -->
`if @qlRoute == "SCR_QL_GLO0185"`
### 📘 IVG

Interruption volontaire de grossesse : démarche permettant de mettre fin à une grossesse dans le cadre prévu par la loi.
`@qlReponse = SCR_QL_GLO0185`
`@qlTrouvee = true`
`endif`
<!-- Réponse : SCR_QL_GLO0233 -->
`if @qlRoute == "SCR_QL_GLO0233"`
### 📘 CEE

Communauté économique européenne, créée par le traité de Rome en 1957. Elle a précédé l’Union européenne.
`@qlReponse = SCR_QL_GLO0233`
`@qlTrouvee = true`
`endif`
<!-- Réponse : INTENT_CONSEILS -->
`if @qlRoute == "INTENT_CONSEILS"`
Choisissez une méthode adaptée à votre besoin : mémoriser, répondre aux QCM, analyser les mises en situation ou organiser vos révisions.
`@qlReponse = INTENT_CONSEILS`
`@qlTrouvee = true`
`endif`
<!-- Réponse : INTENT_REVISIONS -->
`if @qlRoute == "INTENT_REVISIONS"`
Choisissez une thématique de révision. Vous pourrez ensuite passer aux questions et aux mises en situation de votre examen.
`@qlReponse = INTENT_REVISIONS`
`@qlTrouvee = true`
`endif`
<!-- Réponse : INTENT_EXERCICES_A_PRECISER -->
`if @qlRoute == "INTENT_EXERCICES_A_PRECISER"`
Vous souhaitez vous exercer. Préférez-vous travailler les connaissances, les mises en situation ou réaliser un examen blanc ? Choisissez une rubrique ci-dessous ; vous pourrez ensuite sélectionner votre examen et votre thématique.
`@qlReponse = INTENT_EXERCICES_A_PRECISER`
`@qlTrouvee = true`
`endif`
`if @qlReponse == "INTENT_USAGE_PDF"`
1. [📄 Ouvrir mes résultats sauvegardés](SCR_SAVE_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "INTENT_USAGE_RESULTATS"`
1. [🧭 Mon parcours personnalisé](SCR_PARCOURS_MENU)
1. [📄 Mes résultats sauvegardés](SCR_SAVE_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "INTENT_USAGE_EFFACER"`
1. [📄 Mes résultats sauvegardés](SCR_SAVE_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "INTENT_USAGE_REPRENDRE"`
1. [🧭 Mon parcours personnalisé](SCR_PARCOURS_MENU)
1. [📚 Mes révisions](SCR_REV_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "INTENT_USAGE_GRAND"`
1. [🏠 Accueil de CiviCoach](MENU_PRINCIPAL)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "INTENT_USAGE_QUESTION"`

1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "INTENT_CHOIX_EXERCICE"`
1. [📝 Choisir mon entraînement](SCR_ENT_THEME_EXAM)
1. [💡 Réussir les mises en situation](SCR_CONS_SITUATIONS_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "INTENT_SITUATIONS_NON_OFFICIELLES"`
1. [💡 Réussir les mises en situation](SCR_CONS_SITUATIONS_MENU)
1. [📝 Choisir mon entraînement](SCR_ENT_THEME_EXAM)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "INTENT_PREPARER_NAT"`
1. [📝 Questions et mises en situation — naturalisation](SCR_ENT_THEME_NAT)
1. [🎯 Passer un examen blanc](SCR_PREP_MENU)
1. [📚 Réviser les notions](SCR_REV_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "INTENT_PREPARER_CR"`
1. [📝 M’entraîner — carte de résident](SCR_ENT_THEME_CR)
1. [🎯 Passer un examen blanc](SCR_PREP_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "INTENT_PREPARER_CSP"`
1. [📝 M’entraîner — titre de séjour](SCR_ENT_THEME_CSP)
1. [🎯 Passer un examen blanc](SCR_PREP_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "INTENT_METHODE_MEMOIRE"`
1. [💡 Mémoriser efficacement](SCR_CONS_MEMOIRE_MENU)
1. [📚 Choisir une révision](SCR_REV_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "INTENT_TRAVAILLER_ERREURS"`
1. [🧭 Consulter mon parcours](SCR_PARCOURS_MENU)
1. [💡 Apprendre de mes erreurs](SCR_CONS_ERREURS_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "INTENT_PREPARER_EXAM"`
1. [📝 Choisir mon entraînement](SCR_ENT_THEME_EXAM)
1. [🎯 Passer un examen blanc](SCR_PREP_MENU)
1. [📚 Réviser les notions](SCR_REV_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "INTENT_SEUIL_FORMULATIONS"`
1. [📊 Consulter le score de réussite](SCR_FAQ_009)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "INTENT_FAQ_DOCUMENTS_ENTRETIEN"`
1. [💬 👤 Quels documents dois-je apporter le jour de l'entretien ?](SCR_FAQ_046)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "INTENT_FAQ_ENTRETIEN_DUREE"`
1. [💬 👤 Combien de temps dure l'entretien de naturalisation ?](SCR_FAQ_040)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "INTENT_FAQ_ENTRETIEN_QUESTIONS"`
1. [💬 👤 Quelles questions sont posées pendant l'entretien de naturalisation ?](SCR_FAQ_038)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "INTENT_FAQ_ENTRETIEN_TENUE"`
1. [💬 👤 Comment dois-je m'habiller pour l'entretien de naturalisation ?](SCR_FAQ_047)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "INTENT_FAQ_ENTRETIEN_REFORMULER"`
1. [💬 👤 Puis-je demander à l'agent de répéter ou de reformuler une question ?](SCR_FAQ_045)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "INTENT_FAQ_ENTRETIEN_MOTIVATION"`
1. [💬 👤 Comment répondre à la question : "Pourquoi souhaitez-vous devenir français ?"](SCR_FAQ_039)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "INTENT_FAQ_PRIX"`
1. [💬 📝 Combien coûte l'examen civique ?](SCR_FAQ_019)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "INTENT_FAQ_RESULTATS_DELAI"`
1. [💬 📊 Quand reçoit-on les résultats ?](SCR_FAQ_028)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "INTENT_FAQ_ECHEC"`
1. [💬 📊 Que se passe-t-il si j'échoue à l'examen ?](SCR_FAQ_026)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "INTENT_FAQ_VALIDITE_ATTESTATION"`
1. [💬 📊 L'attestation de réussite a-t-elle une date de fin de validité ?](SCR_FAQ_027)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "INTENT_FAQ_DOCUMENTS_EXAMEN"`
1. [💬 📝 Quels documents dois-je apporter le jour de l'examen ?](SCR_FAQ_021)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "INTENT_FAQ_DISPENSE"`
1. [💬 📘 Qui peut être dispensé de passer l'examen civique ?](SCR_FAQ_014)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "INTENT_FAQ_NIVEAU_FRANCAIS"`
1. [💬 📘 Quel est le niveau de français requis pour passer l'examen ?](SCR_FAQ_012)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "INTENT_FAQ_FRAUDE"`
1. [💬 📘 Que se passe-t-il si on triche à l'examen ?](SCR_FAQ_010)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "INTENT_FAQ_QUESTIONS_PIEGES"`
1. [💬 📘 Existe-t-il des questions pièges dans cet examen ?](SCR_FAQ_013)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "INTENT_FAQ_CENTRE_CHANGEMENT"`
1. [💬 📝 Puis-je changer de centre après mon inscription ?](SCR_FAQ_022)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "INTENT_FAQ_RECEPISSE"`
1. [💬 📝 Puis-je passer l'examen avec un récépissé expiré ?](SCR_FAQ_023)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "INTENT_FAQ_PREFECTURE_INSCRIPTION"`
1. [💬 📝 Puis-je m'inscrire directement auprès de la préfecture ?](SCR_FAQ_020)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "INTENT_FAQ_CENTRE_PROCHE"`
1. [💬 📝 Comment choisir le centre d'examen le plus proche de chez moi ?](SCR_FAQ_024)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "INTENT_FAQ_THEMATIQUES"`
1. [💬 📘 Quelles sont les thématiques officielles de l'examen civique ?](SCR_FAQ_003)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "INTENT_FAQ_EXAMEN_DIFFERENCES"`
1. [💬 📘 Quelles sont les diffénces entre les examens Carte de séjour, Carte de résident et Naturalisation ?](SCR_FAQ_005)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "INTENT_FAQ_CIR"`
1. [💬 🏛️ Qu'est-ce que le Contrat d'Intégration Républicaine (CIR) ?](SCR_FAQ_032)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "INTENT_FAQ_FORMATION_DUREE"`
1. [💬 🏛️ Combien de temps dure la formation civique ?](SCR_FAQ_031)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "INTENT_FAQ_FORMATION_EXAMEN"`
1. [💬 🏛️ Quelle est la différence entre la formation civique et l'examen civique ?](SCR_FAQ_033)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "INTENT_FAQ_FORMATION_OFII"`
1. [💬 🏛️ Qu'est-ce que la formation civique de l'OFII ?](SCR_FAQ_030)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "INTENT_FAQ_ACCES_NOVAFRATE"`
1. [💬 💻 Comment accéder à NovaFrate ?](SCR_FAQ_056)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "INTENT_FAQ_ACCES_RECEPTION"`
1. [💬 💻 Quand vais-je recevoir mes accès à NovaFrate ?](SCR_FAQ_055)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "INTENT_FAQ_APPLICATION"`
1. [💬 💻 Dois-je installer une application pour utiliser NovaFrate ?](SCR_FAQ_059)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "INTENT_FAQ_SUPPORT"`
1. [💬 💻 Comment contacter le support de FRATE Formation ?](SCR_FAQ_061)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "INTENT_FAQ_QUESTIONS_OFFICIELLES"`
1. [💬 💻 Les questions proposées sur NovaFrate sont-elles officielles ?](SCR_FAQ_053)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "INTENT_GOUVERNEMENT_PARLEMENT"`
1. [📘 Comprendre le Gouvernement](SCR_QL_GLO0066)
1. [📘 Comprendre le Parlement](SCR_QL_GLO0101)
1. [📚 Revoir les institutions](SCR_REV_T2_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "INTENT_MEMOIRE"`
1. [🧠 Mémoriser efficacement](SCR_CONS_MEMOIRE_MENU)
1. [🔁 Réviser plusieurs fois](SCR_CONS_MEMOIRE_04)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "INTENT_MEMOIRE_PROGRESSION"`
1. [🧠 Mémoriser efficacement](SCR_CONS_MEMOIRE_MENU)
1. [📚 Choisir une thématique](SCR_REV_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "INTENT_SITUATIONS"`
1. [🎭 Réussir les mises en situation](SCR_CONS_SITUATIONS_MENU)
1. [📝 Choisir un examen pour m’entraîner](SCR_ENT_THEME_EXAM)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "INTENT_EXAMEN_BLANC"`
1. [🎯 Passer un examen blanc](SCR_PREP_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "INTENT_QUESTIONS_OFFICIELLES"`
1. [📘 Choisir mon examen](SCR_ENT_THEME_EXAM)
1. [✅ Réussir les QCM](SCR_CONS_QCM_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "INTENT_QCM_METHODE"`
1. [✅ Réussir les QCM](SCR_CONS_QCM_MENU)
1. [⚠️ Éviter les erreurs fréquentes](SCR_CONS_ERREURS_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "INTENT_ERREURS"`
1. [⚠️ Éviter les erreurs fréquentes](SCR_CONS_ERREURS_MENU)
1. [📚 Choisir mes révisions](SCR_REV_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "INTENT_PARCOURS"`
1. [📅 Construire mon parcours](SCR_CONS_PARCOURS_MENU)
1. [🌟 Bien démarrer](SCR_CONS_GUIDE_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "INTENT_MNEMO"`
1. [🧩 Utiliser des moyens mnémotechniques](SCR_CONS_MNEMO_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "INTENT_INSCRIPTION"`
1. [🏛️ S’inscrire à l’examen civique](SCR_PASS_MENU)
1. [📍 Trouver une session](SCR_PASS_REGIONS)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "INTENT_PRIX"`
1. [💶 Consulter les informations sur le prix](SCR_FAQ_019)
1. [🏛️ S’inscrire à l’examen civique](SCR_PASS_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "INTENT_FORMAT"`
1. [⏱️ Comprendre le format de l’examen](SCR_FAQ_004)
1. [🎯 Passer un examen blanc](SCR_PREP_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "INTENT_SEUIL"`
1. [📊 Consulter le score de réussite](SCR_FAQ_009)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "INTENT_ECHEC"`
1. [📋 Que faire après un échec ?](SCR_FAQ_026)
1. [⚠️ Éviter les erreurs fréquentes](SCR_CONS_ERREURS_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "INTENT_STRESS"`
1. [💡 Consulter les conseils](SCR_CONS_MENU)
1. [❔ Consulter la FAQ](SCR_FAQ_MENU)
1. [🎯 Passer un examen blanc](SCR_PREP_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "INTENT_BILAN"`
1. [🧭 Faire mon bilan](SCR_BIL_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "INTENT_REVISION_T1"`
1. [📚 Ouvrir cette thématique](SCR_REV_T1_MENU)
1. [📝 Choisir un entraînement](SCR_ENT_THEME_EXAM)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "INTENT_REVISION_T2"`
1. [📚 Ouvrir cette thématique](SCR_REV_T2_MENU)
1. [📝 Choisir un entraînement](SCR_ENT_THEME_EXAM)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "INTENT_REVISION_T3"`
1. [📚 Ouvrir cette thématique](SCR_REV_T3_MENU)
1. [📝 Choisir un entraînement](SCR_ENT_THEME_EXAM)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "INTENT_REVISION_T4"`
1. [📚 Ouvrir cette thématique](SCR_REV_T4_MENU)
1. [📝 Choisir un entraînement](SCR_ENT_THEME_EXAM)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "INTENT_REVISION_T5"`
1. [📚 Ouvrir cette thématique](SCR_REV_T5_MENU)
1. [📝 Choisir un entraînement](SCR_ENT_THEME_EXAM)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "INTENT_ENTRAINEMENT"`
1. [📝 M’entraîner](SCR_ENT_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0033"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0033)
1. [📚 Approfondir cette thématique](SCR_REV_T1_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0038"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0038)
1. [📚 Approfondir cette thématique](SCR_REV_T3_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0076"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0076)
1. [📚 Approfondir cette thématique](SCR_REV_T4_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0005"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0005)
1. [📚 Approfondir cette thématique](SCR_REV_T3_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0096"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0096)
1. [📚 Approfondir cette thématique](SCR_REV_T3_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0026"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0026)
1. [📚 Approfondir cette thématique](SCR_REV_T2_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0212"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0212)
1. [📚 Approfondir cette thématique](SCR_REV_T3_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0165"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0165)
1. [📚 Approfondir cette thématique](SCR_REV_T2_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0109"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0109)
1. [📚 Approfondir cette thématique](SCR_REV_T2_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0114"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0114)
1. [📚 Approfondir cette thématique](SCR_REV_T4_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0219"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0219)
1. [📚 Approfondir cette thématique](SCR_REV_T2_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0016"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0016)
1. [📚 Approfondir cette thématique](SCR_REV_T3_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0075"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0075)
1. [📚 Approfondir cette thématique](SCR_REV_T3_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0108"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0108)
1. [📚 Approfondir cette thématique](SCR_REV_T4_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0131"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0131)
1. [📚 Approfondir cette thématique](SCR_REV_T3_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0044"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0044)
1. [📚 Approfondir cette thématique](SCR_REV_T1_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0121"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0121)
1. [📚 Approfondir cette thématique](SCR_REV_T4_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0025"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0025)
1. [📚 Approfondir cette thématique](SCR_REV_T2_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0081"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0081)
1. [📚 Approfondir cette thématique](SCR_REV_T1_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0110"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0110)
1. [📚 Approfondir cette thématique](SCR_REV_T3_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_SIMPLE_POUVOIRS"`
1. [📚 Approfondir cette thématique](SCR_REV_T2_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0171"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0171)
1. [📚 Approfondir cette thématique](SCR_REV_T5_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0221"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0221)
1. [📚 Approfondir cette thématique](SCR_REV_T2_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0126"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0126)
1. [📚 Approfondir cette thématique](SCR_REV_T1_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0215"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0215)
1. [📚 Approfondir cette thématique](SCR_REV_T3_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0017"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0017)
1. [📚 Approfondir cette thématique](SCR_REV_T4_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0023"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0023)
1. [📚 Approfondir cette thématique](SCR_REV_T2_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0027"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0027)
1. [📚 Approfondir cette thématique](SCR_REV_T2_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0058"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0058)
1. [📚 Approfondir cette thématique](SCR_REV_T4_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0063"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0063)
1. [📚 Approfondir cette thématique](SCR_REV_T4_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0083"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0083)
1. [📚 Approfondir cette thématique](SCR_REV_T1_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0160"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0160)
1. [📚 Approfondir cette thématique](SCR_REV_T2_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0159"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0159)
1. [📚 Approfondir cette thématique](SCR_REV_T2_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0214"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0214)
1. [📚 Approfondir cette thématique](SCR_REV_T1_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0141"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0141)
1. [📚 Approfondir cette thématique](SCR_REV_T5_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0070"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0070)
1. [📚 Approfondir cette thématique](SCR_REV_T3_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0018"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0018)
1. [📚 Approfondir cette thématique](SCR_REV_T4_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0119"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0119)
1. [📚 Approfondir cette thématique](SCR_REV_T4_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0206"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0206)
1. [📚 Approfondir cette thématique](SCR_REV_T2_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0213"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0213)
1. [📚 Approfondir cette thématique](SCR_REV_T1_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0220"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0220)
1. [📚 Approfondir cette thématique](SCR_REV_T2_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0225"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0225)
1. [📚 Approfondir cette thématique](SCR_REV_T3_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0004"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0004)
1. [📚 Approfondir cette thématique](SCR_REV_T2_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0047"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0047)
1. [📚 Approfondir cette thématique](SCR_REV_T3_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0207"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0207)
1. [📚 Approfondir cette thématique](SCR_REV_T2_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0102"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0102)
1. [📚 Approfondir cette thématique](SCR_REV_T2_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0034"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0034)
1. [📚 Approfondir cette thématique](SCR_REV_T5_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0056"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0056)
1. [📚 Approfondir cette thématique](SCR_REV_T4_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0127"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0127)
1. [📚 Approfondir cette thématique](SCR_REV_T2_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0170"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0170)
1. [📚 Approfondir cette thématique](SCR_REV_T5_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0158"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0158)
1. [📚 Approfondir cette thématique](SCR_REV_T2_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0163"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0163)
1. [📚 Approfondir cette thématique](SCR_REV_T2_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0162"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0162)
1. [📚 Approfondir cette thématique](SCR_REV_T2_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0150"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0150)
1. [📚 Approfondir cette thématique](SCR_REV_T5_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0223"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0223)
1. [📚 Approfondir cette thématique](SCR_REV_T2_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0231"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0231)
1. [📚 Approfondir cette thématique](SCR_REV_T4_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0242"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0242)
1. [📚 Approfondir cette thématique](SCR_REV_T5_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0006"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0006)
1. [📚 Approfondir cette thématique](SCR_REV_T5_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0010"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0010)
1. [📚 Approfondir cette thématique](SCR_REV_T5_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0029"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0029)
1. [📚 Approfondir cette thématique](SCR_REV_T2_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0094"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0094)
1. [📚 Approfondir cette thématique](SCR_REV_T4_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0190"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0190)
1. [📚 Approfondir cette thématique](SCR_REV_T3_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0144"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0144)
1. [📚 Approfondir cette thématique](SCR_REV_T5_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0230"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0230)
1. [📚 Approfondir cette thématique](SCR_REV_T4_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0107"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0107)
1. [📚 Approfondir cette thématique](SCR_REV_T2_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0046"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0046)
1. [📚 Approfondir cette thématique](SCR_REV_T1_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0028"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0028)
1. [📚 Approfondir cette thématique](SCR_REV_T2_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0030"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0030)
1. [📚 Approfondir cette thématique](SCR_REV_T2_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0092"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0092)
1. [📚 Approfondir cette thématique](SCR_REV_T5_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0133"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0133)
1. [📚 Approfondir cette thématique](SCR_REV_T2_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0161"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0161)
1. [📚 Approfondir cette thématique](SCR_REV_T2_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0224"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0224)
1. [📚 Approfondir cette thématique](SCR_REV_T3_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0241"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0241)
1. [📚 Approfondir cette thématique](SCR_REV_T5_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0059"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0059)
1. [📚 Approfondir cette thématique](SCR_REV_T5_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0078"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0078)
1. [📚 Approfondir cette thématique](SCR_REV_T1_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0043"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0043)
1. [📚 Approfondir cette thématique](SCR_REV_T2_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0129"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0129)
1. [📚 Approfondir cette thématique](SCR_REV_T5_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0045"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0045)
1. [📚 Approfondir cette thématique](SCR_REV_T3_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0053"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0053)
1. [📚 Approfondir cette thématique](SCR_REV_T2_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0095"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0095)
1. [📚 Approfondir cette thématique](SCR_REV_T4_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0177"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0177)
1. [📚 Approfondir cette thématique](SCR_REV_T3_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0200"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0200)
1. [📚 Approfondir cette thématique](SCR_REV_T4_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0173"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0173)
1. [📚 Approfondir cette thématique](SCR_REV_T1_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0156"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0156)
1. [📚 Approfondir cette thématique](SCR_REV_T2_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0191"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0191)
1. [📚 Approfondir cette thématique](SCR_REV_T3_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0189"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0189)
1. [📚 Approfondir cette thématique](SCR_REV_T5_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0243"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0243)
1. [📚 Approfondir cette thématique](SCR_REV_T5_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0097"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0097)
1. [📚 Approfondir cette thématique](SCR_REV_T5_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_SIMPLE_DEVOIR"`
1. [📚 Approfondir cette thématique](SCR_REV_T3_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0057"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0057)
1. [📚 Approfondir cette thématique](SCR_REV_T1_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0125"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0125)
1. [📚 Approfondir cette thématique](SCR_REV_T5_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_SIMPLE_DISCRIMINATION"`
1. [📚 Approfondir cette thématique](SCR_REV_T3_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0060"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0060)
1. [📚 Approfondir cette thématique](SCR_REV_T5_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0172"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0172)
1. [📚 Approfondir cette thématique](SCR_REV_T2_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0164"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0164)
1. [📚 Approfondir cette thématique](SCR_REV_T2_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0183"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0183)
1. [📚 Approfondir cette thématique](SCR_REV_T3_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0227"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0227)
1. [📚 Approfondir cette thématique](SCR_REV_T3_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0232"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0232)
1. [📚 Approfondir cette thématique](SCR_REV_T4_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0052"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0052)
1. [📚 Approfondir cette thématique](SCR_REV_T3_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0035"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0035)
1. [📚 Approfondir cette thématique](SCR_REV_T3_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0135"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0135)
1. [📚 Approfondir cette thématique](SCR_REV_T4_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0072"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0072)
1. [📚 Approfondir cette thématique](SCR_REV_T4_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0184"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0184)
1. [📚 Approfondir cette thématique](SCR_REV_T3_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0222"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0222)
1. [📚 Approfondir cette thématique](SCR_REV_T2_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0066"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0066)
1. [📚 Approfondir cette thématique](SCR_REV_T2_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0031"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0031)
1. [📚 Approfondir cette thématique](SCR_REV_T3_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0061"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0061)
1. [📚 Approfondir cette thématique](SCR_REV_T4_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0099"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0099)
1. [📚 Approfondir cette thématique](SCR_REV_T3_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0032"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0032)
1. [📚 Approfondir cette thématique](SCR_REV_T1_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0112"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0112)
1. [📚 Approfondir cette thématique](SCR_REV_T5_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0113"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0113)
1. [📚 Approfondir cette thématique](SCR_REV_T3_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0011"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0011)
1. [📚 Approfondir cette thématique](SCR_REV_T5_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0198"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0198)
1. [📚 Approfondir cette thématique](SCR_REV_T4_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0203"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0203)
1. [📚 Approfondir cette thématique](SCR_REV_T4_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0139"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0139)
1. [📚 Approfondir cette thématique](SCR_REV_T5_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0069"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0069)
1. [📚 Approfondir cette thématique](SCR_REV_T3_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0111"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0111)
1. [📚 Approfondir cette thématique](SCR_REV_T2_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0015"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0015)
1. [📚 Approfondir cette thématique](SCR_REV_T4_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0020"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0020)
1. [📚 Approfondir cette thématique](SCR_REV_T3_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0041"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0041)
1. [📚 Approfondir cette thématique](SCR_REV_T2_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0065"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0065)
1. [📚 Approfondir cette thématique](SCR_REV_T3_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0130"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0130)
1. [📚 Approfondir cette thématique](SCR_REV_T4_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0157"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0157)
1. [📚 Approfondir cette thématique](SCR_REV_T2_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0201"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0201)
1. [📚 Approfondir cette thématique](SCR_REV_T4_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0155"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0155)
1. [📚 Approfondir cette thématique](SCR_REV_T2_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0140"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0140)
1. [📚 Approfondir cette thématique](SCR_REV_T5_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0218"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0218)
1. [📚 Approfondir cette thématique](SCR_REV_T1_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0234"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0234)
1. [📚 Approfondir cette thématique](SCR_REV_T4_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0240"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0240)
1. [📚 Approfondir cette thématique](SCR_REV_T5_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0098"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0098)
1. [📚 Approfondir cette thématique](SCR_REV_T1_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0103"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0103)
1. [📚 Approfondir cette thématique](SCR_REV_T4_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0001"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0001)
1. [📚 Approfondir cette thématique](SCR_REV_T2_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0040"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0040)
1. [📚 Approfondir cette thématique](SCR_REV_T1_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0062"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0062)
1. [📚 Approfondir cette thématique](SCR_REV_T1_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0067"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0067)
1. [📚 Approfondir cette thématique](SCR_REV_T4_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0074"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0074)
1. [📚 Approfondir cette thématique](SCR_REV_T3_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0090"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0090)
1. [📚 Approfondir cette thématique](SCR_REV_T4_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0105"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0105)
1. [📚 Approfondir cette thématique](SCR_REV_T5_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0116"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0116)
1. [📚 Approfondir cette thématique](SCR_REV_T2_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0118"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0118)
1. [📚 Approfondir cette thématique](SCR_REV_T1_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0079"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0079)
1. [📚 Approfondir cette thématique](SCR_REV_T4_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0188"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0188)
1. [📚 Approfondir cette thématique](SCR_REV_T5_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0143"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0143)
1. [📚 Approfondir cette thématique](SCR_REV_T5_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0166"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0166)
1. [📚 Approfondir cette thématique](SCR_REV_T5_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0149"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0149)
1. [📚 Approfondir cette thématique](SCR_REV_T5_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0193"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0193)
1. [📚 Approfondir cette thématique](SCR_REV_T4_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0228"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0228)
1. [📚 Approfondir cette thématique](SCR_REV_T4_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0238"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0238)
1. [📚 Approfondir cette thématique](SCR_REV_T5_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0051"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0051)
1. [📚 Approfondir cette thématique](SCR_REV_T5_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0084"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0084)
1. [📚 Approfondir cette thématique](SCR_REV_T5_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0101"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0101)
1. [📚 Approfondir cette thématique](SCR_REV_T2_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0100"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0100)
1. [📚 Approfondir cette thématique](SCR_REV_T4_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0197"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0197)
1. [📚 Approfondir cette thématique](SCR_REV_T4_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0192"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0192)
1. [📚 Approfondir cette thématique](SCR_REV_T4_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0145"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0145)
1. [📚 Approfondir cette thématique](SCR_REV_T5_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0196"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0196)
1. [📚 Approfondir cette thématique](SCR_REV_T4_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0199"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0199)
1. [📚 Approfondir cette thématique](SCR_REV_T4_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0167"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0167)
1. [📚 Approfondir cette thématique](SCR_REV_T5_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0169"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0169)
1. [📚 Approfondir cette thématique](SCR_REV_T3_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0187"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0187)
1. [📚 Approfondir cette thématique](SCR_REV_T5_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0235"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0235)
1. [📚 Approfondir cette thématique](SCR_REV_T4_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0239"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0239)
1. [📚 Approfondir cette thématique](SCR_REV_T5_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0244"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0244)
1. [📚 Approfondir cette thématique](SCR_REV_T5_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0008"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0008)
1. [📚 Approfondir cette thématique](SCR_REV_T4_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0050"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0050)
1. [📚 Approfondir cette thématique](SCR_REV_T2_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0089"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0089)
1. [📚 Approfondir cette thématique](SCR_REV_T1_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0093"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0093)
1. [📚 Approfondir cette thématique](SCR_REV_T2_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0124"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0124)
1. [📚 Approfondir cette thématique](SCR_REV_T2_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0136"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0136)
1. [📚 Approfondir cette thématique](SCR_REV_T3_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0115"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0115)
1. [📚 Approfondir cette thématique](SCR_REV_T4_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0134"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0134)
1. [📚 Approfondir cette thématique](SCR_REV_T5_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0195"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0195)
1. [📚 Approfondir cette thématique](SCR_REV_T4_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0147"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0147)
1. [📚 Approfondir cette thématique](SCR_REV_T5_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0208"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0208)
1. [📚 Approfondir cette thématique](SCR_REV_T3_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0148"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0148)
1. [📚 Approfondir cette thématique](SCR_REV_T5_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0175"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0175)
1. [📚 Approfondir cette thématique](SCR_REV_T1_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0226"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0226)
1. [📚 Approfondir cette thématique](SCR_REV_T3_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0229"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0229)
1. [📚 Approfondir cette thématique](SCR_REV_T4_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0080"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0080)
1. [📚 Approfondir cette thématique](SCR_REV_T1_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0049"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0049)
1. [📚 Approfondir cette thématique](SCR_REV_T1_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0019"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0019)
1. [📚 Approfondir cette thématique](SCR_REV_T1_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0120"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0120)
1. [📚 Approfondir cette thématique](SCR_REV_T5_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0077"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0077)
1. [📚 Approfondir cette thématique](SCR_REV_T2_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0022"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0022)
1. [📚 Approfondir cette thématique](SCR_REV_T5_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0024"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0024)
1. [📚 Approfondir cette thématique](SCR_REV_T2_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0071"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0071)
1. [📚 Approfondir cette thématique](SCR_REV_T5_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0082"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0082)
1. [📚 Approfondir cette thématique](SCR_REV_T1_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0091"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0091)
1. [📚 Approfondir cette thématique](SCR_REV_T4_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0186"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0186)
1. [📚 Approfondir cette thématique](SCR_REV_T5_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0168"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0168)
1. [📚 Approfondir cette thématique](SCR_REV_T5_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0176"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0176)
1. [📚 Approfondir cette thématique](SCR_REV_T1_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0179"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0179)
1. [📚 Approfondir cette thématique](SCR_REV_T3_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0174"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0174)
1. [📚 Approfondir cette thématique](SCR_REV_T1_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0142"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0142)
1. [📚 Approfondir cette thématique](SCR_REV_T5_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0152"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0152)
1. [📚 Approfondir cette thématique](SCR_REV_T5_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0151"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0151)
1. [📚 Approfondir cette thématique](SCR_REV_T5_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0088"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0088)
1. [📚 Approfondir cette thématique](SCR_REV_T5_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0104"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0104)
1. [📚 Approfondir cette thématique](SCR_REV_T3_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0042"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0042)
1. [📚 Approfondir cette thématique](SCR_REV_T2_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0068"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0068)
1. [📚 Approfondir cette thématique](SCR_REV_T4_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0106"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0106)
1. [📚 Approfondir cette thématique](SCR_REV_T2_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0117"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0117)
1. [📚 Approfondir cette thématique](SCR_REV_T2_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0128"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0128)
1. [📚 Approfondir cette thématique](SCR_REV_T3_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0132"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0132)
1. [📚 Approfondir cette thématique](SCR_REV_T4_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0014"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0014)
1. [📚 Approfondir cette thématique](SCR_REV_T4_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0021"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0021)
1. [📚 Approfondir cette thématique](SCR_REV_T4_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0178"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0178)
1. [📚 Approfondir cette thématique](SCR_REV_T3_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0181"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0181)
1. [📚 Approfondir cette thématique](SCR_REV_T3_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0209"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0209)
1. [📚 Approfondir cette thématique](SCR_REV_T3_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0202"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0202)
1. [📚 Approfondir cette thématique](SCR_REV_T4_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0154"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0154)
1. [📚 Approfondir cette thématique](SCR_REV_T2_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0216"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0216)
1. [📚 Approfondir cette thématique](SCR_REV_T1_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0217"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0217)
1. [📚 Approfondir cette thématique](SCR_REV_T1_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0073"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0073)
1. [📚 Approfondir cette thématique](SCR_REV_T3_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0086"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0086)
1. [📚 Approfondir cette thématique](SCR_REV_T5_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0064"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0064)
1. [📚 Approfondir cette thématique](SCR_REV_T4_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0037"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0037)
1. [📚 Approfondir cette thématique](SCR_REV_T3_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0039"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0039)
1. [📚 Approfondir cette thématique](SCR_REV_T3_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0048"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0048)
1. [📚 Approfondir cette thématique](SCR_REV_T5_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0087"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0087)
1. [📚 Approfondir cette thématique](SCR_REV_T2_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0122"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0122)
1. [📚 Approfondir cette thématique](SCR_REV_T4_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0123"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0123)
1. [📚 Approfondir cette thématique](SCR_REV_T2_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0002"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0002)
1. [📚 Approfondir cette thématique](SCR_REV_T4_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0146"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0146)
1. [📚 Approfondir cette thématique](SCR_REV_T3_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0194"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0194)
1. [📚 Approfondir cette thématique](SCR_REV_T4_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0236"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0236)
1. [📚 Approfondir cette thématique](SCR_REV_T4_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0237"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0237)
1. [📚 Approfondir cette thématique](SCR_REV_T4_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0138"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0138)
1. [📚 Approfondir cette thématique](SCR_REV_T5_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0007"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0007)
1. [📚 Approfondir cette thématique](SCR_REV_T5_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0137"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0137)
1. [📚 Approfondir cette thématique](SCR_REV_T2_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0036"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0036)
1. [📚 Approfondir cette thématique](SCR_REV_T5_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0054"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0054)
1. [📚 Approfondir cette thématique](SCR_REV_T2_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0055"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0055)
1. [📚 Approfondir cette thématique](SCR_REV_T2_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0205"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0205)
1. [📚 Approfondir cette thématique](SCR_REV_T2_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0204"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0204)
1. [📚 Approfondir cette thématique](SCR_REV_T4_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0180"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0180)
1. [📚 Approfondir cette thématique](SCR_REV_T2_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0182"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0182)
1. [📚 Approfondir cette thématique](SCR_REV_T3_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0153"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0153)
1. [📚 Approfondir cette thématique](SCR_REV_T5_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0013"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0013)
1. [📚 Approfondir cette thématique](SCR_REV_T5_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0012"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0012)
1. [📚 Approfondir cette thématique](SCR_REV_T5_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0003"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0003)
1. [📚 Approfondir cette thématique](SCR_REV_T5_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0009"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0009)
1. [📚 Approfondir cette thématique](SCR_REV_T5_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0085"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0085)
1. [📚 Approfondir cette thématique](SCR_REV_T3_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0185"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0185)
1. [📚 Approfondir cette thématique](SCR_REV_T3_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "SCR_QL_GLO0233"`
1. [📖 Voir la fiche du glossaire](SCR_GLO_0233)
1. [📚 Approfondir cette thématique](SCR_REV_T2_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "INTENT_CONSEILS"`
1. [💡 Consulter les conseils](SCR_CONS_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "INTENT_REVISIONS"`
1. [📚 Commencer mes révisions](SCR_REV_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "INTENT_EXERCICES_A_PRECISER"`
1. [📝 Questions et mises en situation](SCR_ENT_THEME_EXAM)
1. [🎯 Examen blanc](SCR_PREP_MENU)
1. [📚 Activités de révision](SCR_REV_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "INTENT_CENTRE_LYON"`
1. [📍 Rechercher un centre près de Lyon](SCR_PASS_SEARCH_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if @qlReponse == "INTENT_CENTRE_LOCALISER"`
1. [📍 Rechercher un centre et son adresse](SCR_PASS_SEARCH_MENU)
1. [❓ Poser une autre question](SCR_QL_AGAIN)
`endif`
`if !@qlTrouvee`
Je ne suis pas sûr de ce que vous souhaitez savoir. Souhaitez-vous **comprendre une notion**, **vous entraîner**, **mieux mémoriser** ou **obtenir des informations sur l’examen** ? Précisez votre demande ou choisissez une rubrique ci-dessous.
1. [❓ Préciser ma question](SCR_QL_AGAIN)
1. [📖 Chercher une notion](SCR_GLO_SEARCH)
1. [📝 Choisir un entraînement](SCR_ENT_THEME_EXAM)
1. [💡 Consulter les conseils](SCR_CONS_MENU)
1. [🏛️ Informations sur l’inscription](SCR_PASS_MENU)
`endif`
`endif`
`@qlQuestion = @INPUT : SCR_QL_ANSWER`

1. [🏠 Menu principal](MENU_PRINCIPAL)

