# Relecture linguistique de CiviCoach — version 49

Relecture du 9 octobre 2026 : menus, FAQ, glossaire, parcours, bilans, examens, entraînements, corrections, feedbacks, questions libres et textes des activités. Contrôle orthographique du corpus et examen des signalements grammaticaux, dont 15 254 passages distincts des modules. Les suggestions automatiques ont été examinées : les faux positifs, noms propres, graphies admises et variantes de saisie utilisées pour reconnaître les réponses ne sont pas remplacés automatiquement.

## Références officielles consultées

- [Académie française — accents sur les majuscules](https://www.dictionnaire-academie.fr/article/QDL005) : État, Égalité, École, À.
- [OQLF — participe passé avec avoir](https://vitrinelinguistique.oqlf.gouv.qc.ca/21546/la-grammaire/le-verbe/accord-du-participe-passe/avec-lauxiliaire-avoir/accord-du-participe-passe-employe-avec-lauxiliaire-avoir) : connaissances acquises ; ont constitué.
- [Académie française — handicap](https://www.dictionnaire-academie.fr/article/A9H0140) : h aspiré, donc « de handicap ».
- [Académie française — protéger](https://www.dictionnaire-academie.fr/article/A9P4734) : « protège ».
- [Académie française — législatif](https://www.dictionnaire-academie.fr/article/A9L0528).
- [Académie française — phrygien](https://www.dictionnaire-academie.fr/article/A9P2149).
- [Académie française — toutefois](https://www.dictionnaire-academie.fr/article/A9T1679).
- [Académie française — différence](https://www.dictionnaire-academie.fr/article/A9D2448).
- [Académie française — exode](https://www.dictionnaire-academie.fr/article/A9E3373) : « exode rural ».
- [OQLF — accords dans le groupe nominal](https://www.oqlf.gouv.qc.ca/francisation/ordres_prof/capsules-grammaticales/accord-groupe-nominal.aspx).
- [OQLF — ponctuation](https://vitrinelinguistique.oqlf.gouv.qc.ca/23323/la-ponctuation/ponctuation-principes-generaux).
- [OQLF — compléments en début de phrase](https://vitrinelinguistique.oqlf.gouv.qc.ca/23405/la-ponctuation/virgule/la-virgule-et-les-complements-de-phrase).

## Mise à jour des bases Excel

Les classeurs sources sont conservés. Le lecteur des banques applique les corrections relues aux colonnes de textes visibles avant la compilation. Les identifiants, les lettres des bonnes réponses, les mots-clés de reconnaissance et les barèmes ne sont pas corrigés comme des phrases. Les modifications ultérieures des Excel restent prises en compte par le workflow GitHub déjà livré. Ce mécanisme conserve les corrections recensées ici ; il ne remplace pas une relecture de textes entièrement nouveaux.

Les règles sont dans `data/corrections_langue_v49.json`, leur application dans `corrections_langue.py`. Elles sont délimitées pour ne pas modifier une terminaison déjà correcte lors d'une recompilation.

## Corrections recensées

| Texte initial | Texte corrigé |
| --- | --- |
| diffénces | différences |
| protége | protège |
| opinon | opinion |
| prhygien | phrygien |
| légistlatif | législatif |
| Légistatif | Législatif |
| plux | plus |
| géograhie | géographie |
| repyant | repayant |
| acqusise | acquises |
| infranctions | infractions |
| admnistratifs | administratifs |
| handall | handball |
| Etat | État |
| Etats | États |
| Egalité | Égalité |
| Etre | Être |
| Ecole | École |
| Elysée | Élysée |
| Etranger | Étranger |
| Egalitaire | Égalitaire |
| Eviter | Éviter |
| Evitez | Évitez |
| Education | Éducation |
| Eglise | Église |
| FRANCAISE | FRANÇAISE |
| Edouard | Édouard |
| Edith | Édith |
| Eluard | Éluard |
| toute fois | toutefois |
| d'handicap | de handicap |
| d’handicap | de handicap |
| des équipe de France | des équipes de France |
| Non le coq | Non, le coq |
| basketball,handball... | basketball, handball… |
| Vanessa , une de vos amies vous demande parmi ces infractions laquelle constitue un délit. | Vanessa, une de vos amies, vous demande laquelle de ces infractions constitue un délit. |
| Arthur, votre ami d'enfance va | Arthur, votre ami d'enfance, va |
| Un collègue étranger venu pour visiter votre usine de bois, a | Un collègue étranger venu pour visiter votre usine de bois a |
| Pendant une discussion avec un ami devant un match de football. Vous entendez | Pendant une discussion avec un ami devant un match de football, vous entendez |
| Lors d'une partie d'échecs avec une amie. Elle vous demande | Lors d'une partie d'échecs avec une amie, elle vous demande |
| Catherine, votre amie d'enfance vous demande | Catherine, votre amie d'enfance, vous demande |
| Regardant les infos avec votre père, il confond | Lorsque vous regardez les infos avec votre père, celui-ci confond |
| que les 12 mises en situation | que pour les 12 mises en situation |
| quel est la majorité | quelle est la majorité |
| professeur de d'histoire | professeur d'histoire |
| quels fonctions exercent | quelles fonctions exerce |
| ont constitués l'Union européenne | ont constitué l'Union européenne |
| exode rurale | exode rural |
| lois votés | lois votées |
| Il n'y pas de repassage possible, en cas de score non atteint, il faut repasser l'examen. | Il n'y a pas de repassage possible : en cas de score non atteint, il faut repasser l'examen. |
| page d'inscription de puis choisir | page d'inscription, puis choisir |
| Oui, c'est la liberté d'expression. permet à chacun | Oui, c'est la liberté d'expression. Elle permet à chacun |
| Il y écrit : | Il y est écrit : |
| dans 15 jours.. | dans 15 jours. |
| dans le niveau maternelle de ce parcours | au niveau de l’école maternelle dans ce parcours |
| Frate Formation est organisme agréé. | Frate Formation est un organisme agréé. |
| langue française alors | langue française, alors |
| Dans tous les cas ne | Dans tous les cas, ne |
| religion . | religion. |
| Cynthia, votre fille révise | Cynthia, votre fille, révise |
| Toutes les pensées, écrits et essais des philosophes ont été consignés | Toutes les pensées ainsi que les écrits et les essais des philosophes ont été consignés |
| personnes majeurs | personnes majeures |
| La Code pénal | Le Code pénal |
| la Code pénal | le Code pénal |
| La nuit de la révolte est arrivé. | La nuit de la révolte est arrivée. |
| Elle est composé | Elle est composée |
| 1er guerre mondiale | 1re guerre mondiale |
| peuvent êtres limitées | peuvent être limitées |
| A payer directement | À payer directement |
| A payer le médecin | À payer le médecin |
| A quoi correspond | À quoi correspond |
| A l'école directement | À l'école directement |
| A ce propos | À ce propos |
| A la fin vous trouvez | À la fin, vous trouvez |
| Un film que vous avez regardé au cinéma avec votre famille, relate | Un film que vous avez regardé au cinéma avec votre famille relate |
| dans **Mon parcours personnalisé**. **Mes résultats sauvegardés** permet | dans **Mon parcours personnalisé**. La rubrique **Mes résultats sauvegardés** vous permet |

## Libellés calculés

Les libellés des feedbacks et des activités utilisent le singulier ou le pluriel selon le nombre affiché : « Revoir l’erreur » / « Revoir les erreurs », « erreur à comprendre » / « erreurs à comprendre », réponses correctes, images supplémentaires et repères acceptés. Le récapitulatif PDF écrit « activité » ou « activités ».

## Validation

- 1 286 lignes des six banques vérifiées à l’import ; identifiants et lettres des bonnes réponses conservés.
- Classeurs Excel comparés à la version 48 : fichiers identiques.
- Compilation déterministe et simulation de modifications des cellules : changements propagés aux bilans, entraînements, examens et feedbacks ; données invalides refusées.
- 33 165 écrans et 139 763 liens : aucun écran en doublon et aucune destination manquante.
- 8 750 questions utilisées dans les parcours contrôlées par rapport aux banques.
- Tests du moteur ChatMD avec JSDOM : réglages, feedbacks précis, historique et reprise du bilan précédent, ouverture du chatbot en grand.
