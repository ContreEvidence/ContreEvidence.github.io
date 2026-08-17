# Revue corpus — Solution Engineer

Mise à jour automatique : 2026-08-17

Cet audit couvre les contenus indexables de `dossiers/` et `articles/`. Les pages `noindex` sont exclues. Les validations humaines restent actives uniquement tant que le SHA du fichier ne change pas.

Dimensions détectées : problème/contrainte, causalité, options, temps/seuils, quantification, scénario adverse, séquence, sortie/réversibilité, preuve.

Pages analysées : **130**. Pages `noindex` exclues : **79**. Validations humaines actives : **5**. Validations devenues caduques après modification : **118**.

## Priorité humaine

| Score | Mots | Page | Dimensions manquantes |
|---:|---:|---|---|
| 6/9 | 1384 | `dossiers/etre-riche-revenu-patrimoine-liberte.html` | probleme, causalite, options · validation précédente caduque |
| 6/9 | 1511 | `dossiers/temps-energie-qualite-vie.html` | causalite, options, adverse · validation précédente caduque |
| 6/9 | 1518 | `dossiers/dependance-gros-client.html` | probleme, causalite, sortie · validation précédente caduque |
| 6/9 | 2857 | `dossiers/indivision-loyers-charges-comptes.html` | probleme, causalite, options · validation précédente caduque |

## Validations devenues caduques

| Page | SHA relu | SHA courant |
|---|---|---|
| `dossiers/etre-riche-revenu-patrimoine-liberte.html` | `648f72764a9856fa0c1811a7b46ef7b99899f216` | `fdf235ea90d94d0b036e2f820df4ba555df4140e` |
| `dossiers/temps-energie-qualite-vie.html` | `870bee99dfb0325a0253f9000e2414580b1b8e3c` | `14c7db41f011fdc5dd412aca14bc12f8d71b5ce1` |
| `dossiers/dependance-gros-client.html` | `aff1498bfed0cdae7eb745a22fc9815b7c5ef260` | `cc469f3837db5ee4c6514fd2ba8a0ea554116b55` |
| `dossiers/indivision-loyers-charges-comptes.html` | `17a2f1637380da7fdce685ccf909e3eeb3d5523a` | `3cac6d1c0649a360cd86bb84e62b97198d758514` |
| `dossiers/accepter-emploi-moins-paye-vivre-mieux.html` | `e782289f8d68aab912acdd201a649e7782204756` | `2a0b506fae49029d696b954ea5162158fd27ccab` |
| `dossiers/comparer-strategies-immobilieres.html` | `06acc378800acfdcbb52e5992f3067d5b16a0b72` | `18812ce8c64ad45b86a8b64426a7ba9dddc663a7` |
| `dossiers/competences-qualification-employabilite.html` | `6451d1f015cf2a765cda44c3a908365ee68b159a` | `ff7710d9fc3eaa42968aaae8d27fd4d685a167f6` |
| `dossiers/garages-parkings-locaux-commerciaux.html` | `777a5d8d555673c621af3f13d154a2dce07b6be6` | `b8b27e09a74a43461d031b5c3761ae832b736b4a` |
| `dossiers/etude-marche-terrain.html` | `d7865b294ff9c7d2ee08a0265097e17bc1061c3c` | `d8cb50f9424e204771fbedfe4940f36b674dcf6c` |
| `dossiers/cout-complet-achat-immobilier.html` | `127fce4a7c9eb0dd467292564568edb110a37efd` | `3b53f98eb1bf64eeb070bcff45e94f57de12ed01` |
| `dossiers/classes-actifs-allocation-patrimoine.html` | `e3597290b5b0634ef0bebbf1a149474f2f17e51e` | `9f1c0f27dea7e09586e38a9d9f0c85dc99becae8` |
| `dossiers/acheter-ou-louer-si-on-risque-demenager.html` | `d6585d192caf10f10a45195559ae0365fe70cf46` | `7c09a53fc2de9cf9fed0ee2f0838458337449f0f` |
| `dossiers/metiers-fonctions-organisation-entreprise.html` | `b9100c518af815d5e3d410b6184e23e03d065471` | `2e19d665977ee69b331ac3917aefbf89b50d6e23` |
| `dossiers/regles-responsabilites-fautes-travail.html` | `8d0c5f5cbcba540922996705b1dcc2807513c62a` | `69a9d451448a9aff74450449ddd0e2744a3f502a` |
| `dossiers/are-arce-acre-creation-entreprise.html` | `96944742e60f24751b001857871095f3ae55ce94` | `959247a41236f3f20ccbcc5c2fc22913a621441c` |
| `dossiers/demenager-pour-un-emploi-salaire-minimum.html` | `aa7e1f41239c27f5fa37043c16e499b11bf61036` | `1d62c84fbc05b2d4cf894cd247e67c211b316494` |
| `dossiers/experience-devient-risque-recruteur.html` | `fa76f61cde9496a7e8b186c63d02ccf92abb860c` | `721a0dce9bcc72a34879570fa1fb302a381153d9` |
| `dossiers/patrimoine-marge-de-manoeuvre.html` | `3e2dd7332b7c2063c63dbad30055168a61266868` | `a141b682da787357f5c444ad8d9f06e46a16c01a` |
| `dossiers/quand-arreter-optimiser-utiliser-patrimoine.html` | `9b46d98a92fde3c92c7d0ba563bbece7cb3ce9ad` | `e58f928be74ad99a4afc224262a2c3a6c271a6bf` |
| `dossiers/depenses-recurrentes-abonnements-assurances.html` | `7ab68ff16885592aa5a53bcbf88bea40f0d60230` | `88d345eabfef91786e1331b4dd29efd5de0938d9` |
| `dossiers/immobilier-allocation-globale-patrimoine.html` | `5efc7a75224680022c77aeaadaab037db1a3de52` | `48b7055ec73a2d36672234de0166deedd2a925c2` |
| `dossiers/audit-budget-60-minutes.html` | `8de2b2164b0d8d56823db98de8e87e9fbf70bef8` | `c85ea314369c4eff5164065f0c0d5e24f8ae5eba` |
| `dossiers/liquidites-reserve-securite.html` | `ae88ad8ae7c6981800827b83825e37da0c51d1c5` | `dbc55f545460a92295bc3e0b35f075039e34e829` |
| `dossiers/acheter-logement-sans-se-fragiliser.html` | `917027c5225fc0464db739ffa51972e38f4655f6` | `06bbe5cff0b4a9bbb784ffdd22b4e02574b02d10` |
| `dossiers/finances-residence-principale.html` | `89bdee80210b87568b4831b77c18bccbc6c8f1f9` | `f6da55d2ffa16c603f925ed4957a43c04bad7322` |
| `dossiers/protocole-verifier-reponse-ia.html` | `ec82b9e8c65ba1c55e937db7c11e96ff33e86f17` | `0aa4434d3b6cda44f402fa6fe3dab977c9112cac` |
| `dossiers/assurer-ou-autoassurer-risques.html` | `6bd9c11fce81a3115d0115986a602f1e4fb2753e` | `9eee2066642ab55d9556dd47be2f89847888709f` |
| `dossiers/calculer-prix-minimum-rentable.html` | `1597bb81c5cba87c2e493fff0aa8a3bc640ac438` | `efa9873916bc67d8e03101ad4e3606d58732bf52` |
| `dossiers/reconversion-sans-formation-longue.html` | `d802367f18e91acefed62a8442350fd5d1604504` | `a03bbd83895052888cb6e68012e0368d4b3a8fdc` |
| `dossiers/emploi-chercher-accepter-negocier-evoluer.html` | `32be1bec7e6d9053ef2c87ad9b5de107f6ef619d` | `b5d0334d49e7965e4c8ad53bf1a6c256c75b0c3d` |
| `articles/grosse-entree-argent-que-faire.html` | `8055c8aabec056f575c0241372a9f49178d761e3` | `2d169248963e5f1ddffee684db3a659be22bc0af` |
| `dossiers/competent-mais-invisible-travail.html` | `c3a2113df9ecbabc57c47ea983eafb88022b0fdd` | `d6351654a26b960f5868fd6caf9eac5c68790ba0` |
| `dossiers/quitter-travail-reconversion-sans-se-fragiliser.html` | `2d3783619eabbe21691c3d1b4ec6852bca6ca599` | `9bb0c7b766183b4c8e83bbc6484b65b1cda43266` |
| `dossiers/management-relations-conflits.html` | `8f7289e4be339747a044673d746759ceb33cb206` | `ef50629ed5e5f57ca67fb05ccecb3e4d71aa1128` |
| `dossiers/tresorerie-bfr-entreprise.html` | `d417764e8cd3a736d178f66ff2be9427bcbb0fdd` | `1cb08cdcc0df9d448d822c61b4c3112dfa546c00` |
| `dossiers/piloter-patrimoine-selon-taille.html` | `ddf1912265fa21be67cc6fd674b672c25976f63c` | `c19f21736a53366544fccdce54e70d5b336d60f6` |
| `articles/travailler-beaucoup-gagner-peu-prix.html` | `53df5406709273e5dedfe3ae2a2085c3913bb872` | `443717579966e19e9c5afe38e43960db8028f433` |
| `dossiers/negocier-salaire-responsabilites.html` | `bf456b29db1478550bf715535617f49fce6c3284` | `205269ad38b6adda7eb51bfd6195fe0cae248bda` |
| `articles/accepter-nimporte-quel-poste-retour-emploi.html` | `27d74310369168d6bfc5db8c22d2b4ee679c7705` | `ce21d85f053cb5e466396502a08ced8e52950275` |
| `dossiers/quand-vie-change-sante-separation-revenu.html` | `7c1e0e0d680c29f25db5fc5d7c9b17ccb1f37d6a` | `6476c9fe59efd09437a4fa501ae2637c7501bf1e` |
| `articles/50-candidatures-zero-reponse.html` | `e142df6c147e5a8a6fdc20827854362f8930329d` | `888d4dd7c87e62f0916aee988266cec078a2db70` |
| `dossiers/location-nue-ou-meublee-comparer.html` | `2b8b5bafcc308126c6704412e5d73d2b91345499` | `8bd29e439705e0439334b98c5a82cf3a38461518` |
| `dossiers/business-plan-utile.html` | `e905253a4ba67437152d5227dcdd9dd464886d32` | `b9b56221716765547004686a0f78639c69013610` |
| `dossiers/apprendre-developper-competences.html` | `487f02e927355afd164e889a7c53b7d4e0e6ff65` | `5cadd4877e902f738793e5517e7d907d6d44e328` |
| `articles/competences-transferables.html` | `54a32e6988ad07816c8b18fc454c4de0eda4a129` | `44e765b9e22664301a74c6e0a7f557412c63e1c9` |
| `dossiers/audit-copropriete-avant-achat.html` | `a0970b0fbb708617d937df0d3e62a49740a7a1b5` | `1ee86b2c764d8f1b0c0230c28f159a67f4cd6770` |
| `articles/frais-fiscalite-rendement-net.html` | `629aaddee6a384f2b1861c2fc5a883da0613b963` | `9aed7923d909015271e37b5ae5dedfe9b37175b3` |
| `dossiers/capacite-refuser-travail-rentabilite.html` | `aace252f32a1faf81cf6e0a4665e9b60e694129e` | `e039b83ac4f9c7c0c3b6b3941dc34fce6e2e8007` |
| `articles/sans-diplome-chemins-alternatifs.html` | `d5f6867f38969bb89ca16df2bfdbd7ed2fed77ca` | `f583120170c34d8c2f40f770aab9b8fd3d5a141c` |
| `dossiers/decider-sans-tourner-en-rond.html` | `7ed358f09fc5838768fb45a60a9a4dd2f1447dd9` | `1afda044d926037ecf1ef3afa70209e834d70772` |
| `dossiers/bien-immobilier-garder-vendre-transformer.html` | `851bc30ba2290f512e60911db8fbd24966b8a95f` | `5af978dd63261573b66b8bc83c7d26ce5313755f` |
| `dossiers/devenir-manager-premiere-fois.html` | `5b37be7ac97ba89e23e4f31456f90008c7ec49e5` | `6587f285ad1fce3b9b4a7a3efa96de3b1dfcd6ae` |
| `articles/entretien-rate-ce-qui-bloque.html` | `121a55ba0a2268de0cb5f5de94a9eb283c4b2ab8` | `481e6c6533a751e17df58e913d22f4d23e421c24` |
| `dossiers/rembourser-credit-ou-investir.html` | `8748815b96435f7255f99965085fa55714c7334d` | `2cfc8fae0e6726388b7892b48c8847c1fedba134` |
| `dossiers/decider-a-deux-travail-patrimoine.html` | `ba14b77f52087dfb20b0813df082369592184e8e` | `19f393eff8d52f33a82ebd2395465e5532197d17` |
| `dossiers/previsionnel-activite-12-mois.html` | `ec3ebe88a9923f6802788dd5fb1a65c113e220ae` | `ce78f1a5272d5c14e63d40b37b8bc01ac416f1cf` |
| `dossiers/formation-vaut-elle-le-cout.html` | `601b970cd42683723682946ad1b8add7c7aa48db` | `b57f8a77f2070ed118e4e85e437b9281472cc2fc` |
| `dossiers/plan-30-jours-recherche-emploi.html` | `266f0a20263296fe2847ae2cecefed3182796cc4` | `7c73732ff3fc12daea4f6907f166921c1c379258` |
| `dossiers/allocation-patrimoine-selon-situation.html` | `bf4f5ae7a51941cee5e49bfa63f1726e1076ab8a` | `2e0e6ed0d89ff2f131bd371d1c20b99b677a5a30` |
| `dossiers/acheter-sans-vider-epargne.html` | `8376bdcffd1c79dbcedf6b11fff240a1c8b4e6c0` | `eb8873d0b41347ede5c641142771d5daf14b2e83` |
| `articles/tester-metier-avant-investir.html` | `2d26e84a1aec867f3f795a7fe5076e5514259709` | `02ed5a36fee24afeaf5d65a5505be721677ef116` |
| `dossiers/finances-cadre-global.html` | `e736a54c8aa6746af202268837ab68501111b82f` | `d0f79e6bf0bcce59b6ab8dc1bbb10767cf2e5170` |
| `dossiers/methode-analyse-complete.html` | `3633e892628579f08a3e9e8381b6c54fca5689b0` | `39ee0321749e6244daeaf157248eab14d6111a33` |
| `dossiers/metiers-accessibles-sans-diplome.html` | `b2a23f1e370f9cfdc09815314410fa0827c880c3` | `f353681b090db1b81078f4fa5f03e08f58ba9f1f` |
| `dossiers/location-courte-duree-meuble-tourisme.html` | `ddaf6bc36e2171b5e249a161fb66926f963ea4d2` | `3da7419d48d77ea2274f777b70e8a8015f2e8b87` |
| `dossiers/inflation-comprendre-histoire-pouvoir-achat.html` | `fde9fbcbe606cf2645abe747b4ef4969d1664b7d` | `73559143dc1ba6f336fafce90809e9582554ec31` |
| `dossiers/changer-travail-avant-credit-immobilier.html` | `8b7e88c9c93261fc35ebcb3a4fd5052430befe79` | `d181859b4b2494fb80dfe1398a3b3805c3333a6d` |
| `dossiers/sante-travail-equilibre-vie-pro-perso.html` | `9075afe1528f2f4c763aa2ee6146d95a22ade56b` | `a760532ddf446c5cf2bf9ac5487d2183b9a3466e` |
| `dossiers/finances-difficiles-sortir-decouvert-dettes.html` | `7dbb9a5b999cc3cf143d8f63841135ec93581ac3` | `c3e13270e447a80884f10cb91ce8b9820629c084` |
| `articles/construire-epargne-de-zero.html` | `a528b4cc9c82d8c7d6b737144fceb7adc70bd100` | `58b7903acd95fbf152fb2d98f0a6e343c6d3c7f0` |
| `dossiers/finances-allocation-portefeuille.html` | `625ccbd17f7ecb7384ea9fb54c0ea57508261285` | `b6be1b8180d9e61c2dd946ed8de690527948bfe8` |
| `dossiers/trajectoire-professionnelle-selon-situation.html` | `340b3c58bd6809606aac38282afac472924ee2b1` | `60245131f10249e19198132221a51e949943af4d` |
| `dossiers/cout-reel-voiture-achat-credit-loa-lld.html` | `e2f86bc90e46fa8a5193b88ddba15dbc7f5ac5ed` | `097c68e9fce163ca686955b04b926f6eba737774` |
| `dossiers/gestion-pilotee-comparer-performances.html` | `39455bdc8b582a298dc3429c7e65e8e51b498d35` | `adbc1f9ce05a30fc042e7f0c70d461b793a3923f` |
| `dossiers/valeur-option-bien-immobilier.html` | `b94854c103aca7c9b4122013ef8300098bb166d4` | `7753887efe9181edee54e5e2293f0e35eef453f1` |
| `dossiers/embaucher-ou-sous-traiter.html` | `3e2a1ada5ac4604fe7c317123ca1d17e130e8954` | `bb9b652c95541c90c21e6d8368779cddee6fdf42` |
| `dossiers/quitter-emploi-stable-ou-rester.html` | `e6fb490461c91b774628d9affbfd71f0fa38b70d` | `52f5ed0b969dd879dbaac282757c9e97eb9d4623` |
| `articles/clients-interesses-personne-nachete.html` | `36393db1ca7c359beb075a4b3fe0e25fa86ee8bb` | `a601d105d668f9192ace24161b46c067dbf8990c` |
| `dossiers/creer-entreprise-avec-peu-argent.html` | `99fb67ac5498b3634df87e18d728af131d32c06e` | `ee67e39dd76bacb74f61871139973c49e86f972f` |
| `dossiers/finances-retraite-decumulation.html` | `eb117acf36b33c889691233c186e3837ef1177a7` | `3601ae1d36a25e92ce17078a725b24e027bdad72` |
| `dossiers/automatiser-ou-non-processus.html` | `2219f7b59c382026132d4c39c7847fa90a9e728c` | `c26bfa6ab96fd92561ef197ade70f4fb84d1151b` |
| `dossiers/questions-poser-avant-prise-de-poste.html` | `946bd319f17d8bcf3b9c099f5f0b7a6cb7932c18` | `066760a62f41ff18e953855f4b873ef598f35b65` |
| `dossiers/ameliorer-processus-sans-degrader-service.html` | `43bd9c064ce5da2c61200268b8a559c7c726ba40` | `d76af9387d7c83658d1fe09aceb368c9ba105c6b` |
| `dossiers/accepter-emploi-plus-loin-cout-trajet.html` | `90f2105cbfe1502d24237ff42c2304dec9fd12f7` | `d01515cace3a4b4b35d45330817ec2ddf58fc846` |
| `dossiers/tout-ca-pour-quoi-objectifs-besoins.html` | `f1faf0bbb75b36b784e38e370c13eb49654a622f` | `a26feab19d6902534b6ebaf0355868592d12143c` |
| `dossiers/trouver-premiers-clients.html` | `29837957e915643a0748021affe9c939cfc88f89` | `a838943fac0b9241ed2bbf571cb95741df23cc5b` |
| `dossiers/indivision-immobiliere-sortir-sans-subir.html` | `7050814d0158c4069612a710f31ed7aeb6fee26e` | `99bde466cb6309b333708a7964523cd2b1abba7c` |
| `dossiers/prejuges-biais-monde-professionnel.html` | `c24c1d4474ca81ab69374110c58c07e56872faf1` | `35ece97c2252037c28a6cd24e328fd4b6e14b476` |
| `dossiers/passer-80-pourcent-cout-reel.html` | `47f382b81052f8abfae4795bae4f6bd07d13f005` | `3182a61c57d49ecde8c532395a16228dde57bfb7` |
| `dossiers/lancer-activite-sans-quitter-emploi.html` | `2f63b913b35de4a4dd8f3a6fed4d1b93b6a2761a` | `f948efdcdcef945f36d182189a342dc9c27d6b0d` |
| `dossiers/travailler-moins-vivre-mieux.html` | `eb67bcfbe9b9b1bdaf4c4e402946defb38068247` | `8baba03240acba274b8517b704734a95a2bff590` |
| `dossiers/reconversion-sans-perte-salaire.html` | `128613ebf08c799823434c76e96f628ec6102a5a` | `b33218152c983e5b9b4c90ab79f2fdab7fa3b3c5` |
| `dossiers/couple-famille-argent-temps.html` | `8a38569c71f9b277366dfb15dfb6c05c0c101c52` | `b5b6e3afed938ebc796355f8271f9ca7d64a6641` |
| `dossiers/creer-entreprise-sans-diplome.html` | `7591957de80770b6e228dae60b3bf2c9c59d6ea4` | `cd70dd82d06e475036828eae9af6e0d69c9e3fdd` |
| `articles/checklist-avant-placement-conseiller.html` | `f0a354fedc6ee6b64f0235804b495c6a4701a872` | `95d1a16dfc78914a2b4df28997463042116df3b2` |
| `dossiers/quitter-cdi-avec-credit-immobilier.html` | `a6e2ba7d9c21b71fe5be9b80f3f0b0a1a7a9ac89` | `6f75b5bf656dc8674918677f8423848467470067` |
| `articles/retrouver-emploi-apres-interruption.html` | `abbaae628730e9314acfe90444f7185a18cf1072` | `940009224b8ce58eff7a536835cd9740dfabc08a` |
| `dossiers/puis-je-me-permettre-reconversion.html` | `1ad192cf263278ca68066756f08f1dc2f62a58fc` | `30a212da1b60e425044579a7735bd3160344ef22` |
| `articles/choisir-etf-mondial-debutant.html` | `51eb14e0e0798b03354f58360105a9a851af5bf0` | `c106a838064ba6f569b8c0c7c6a66e958747797d` |
| `dossiers/finances-enveloppes-fiscalite.html` | `465e5a96cac235489cd54df12555dc85c8f66542` | `8b9f3353c25e10cbfb3cf708043f3cc89a512fb2` |
| `dossiers/favoriser-un-enfant-succession-donation.html` | `87dc0927f5033751ed022b19eef2ce82ff2ba453` | `843a54f09eb550c9a4e9fdc47502459c35f1aa30` |
| `dossiers/indivision-succession-heritiers-vendre-partager.html` | `edf2c7b8270a9c257c28c282fda78fa8a71dd0c9` | `30493ba6463516fb6723af5cd3d3d3b913f0ae2d` |
| `dossiers/finances-investissement-locatif.html` | `2c09f9a2b80c1ef004f4c07f5941dcf88894a1e3` | `8bb26b638f23c09b5e3c53766c79a3b949e63a26` |
| `dossiers/contrat-travail-clauses-verifier-avant-signer.html` | `73804a97a74df735855ceb5291c6ce824e36da56` | `15a609f2624ec12c72ca634cb2f706ff2c0a82e8` |
| `dossiers/patrimoine-permet-il-travailler-moins.html` | `c006f7a8de0d55c219f89748ad39053e8afecbec` | `d0ade584f540e39f4b2be1561b32ef43ac32f062` |
| `dossiers/licence-universite-sans-bac-daeu-vap-vae.html` | `aab16c4e6601ab8b9d42fc4230e4e668cbc1d540` | `1d99ba47480f78080645c878ff1de545b3df5aa9` |
| `dossiers/decision-plan-30-90-jours.html` | `c7bd8f5cd0a197ead2e0ebe3d947f0cacbc0d46c` | `b640bc2d19ee18be8c75291a97e104c2d1663535` |
| `dossiers/finances-credit-endettement.html` | `0e7bf55b72e7d5d6a9b9df85ce1bd14c87f48715` | `791110c6ebb083029c37b2119fa3fb7a1959cfff` |
| `dossiers/patrimoine-selon-age-construire-utiliser.html` | `5de90833ce46e346e0e9e3c3877994fbbca9921c` | `a59374038e679352e57eb4f6a7a2e2fbe87d80b2` |
| `dossiers/finances-transmission-patrimoine.html` | `82b04a6992bd5fea253a773125768b5cb012a203` | `538a14dfe42155f980777c5ae016144580ef2b85` |
| `articles/comparatif-produits-bancaires.html` | `f766c96540debfe1ce8ef1d2c7e38770df01b3f3` | `dbc6b7c2b8856128d9853b48aa127d54966ffa5e` |
| `dossiers/comparer-deux-offres-emploi.html` | `3ff2b7f7af69505d49005ced8661971e69e02c2d` | `a48181f63dffa71cb41354204f89f536f206e58e` |
| `dossiers/choisir-statut-micro-ei-eurl-sasu.html` | `b8ca6053a594bbee33797f2d2c4dce8b4854e67b` | `d8bb3c128a389cbc22b0d2b0cb6e68d77880226c` |
| `dossiers/combien-chiffre-affaires-pour-vivre.html` | `ecb09de9f0ebcb7f42e79bac0351f086fadee8ae` | `833b272052619858c979f2624595b640f860a715` |
| `dossiers/combien-epargne-avant-demissionner.html` | `bf785f0d5781fd9e4ba7164de46da47b01542449` | `bdcedb9eaee94eadaf951f4319252eaab8b5f495` |
| `dossiers/indivision-rachat-progressif-parts.html` | `527e738dc0a243a869fc14a30094c2c6f453e94d` | `cf4d5e3c2292e9d6ed04fc76b0d51cc48e3ba742` |
| `dossiers/indivision-couple-separation-rachat-soulte.html` | `9b5d0aea82aaa27023ded0225c9e5d0f2e034ef4` | `66ca8995b5a7c6b57304121663d6c2bdfe0bdb54` |
| `dossiers/sci-immobiliere-acheter-gerer-transmettre-sortir.html` | `0dde3d3af6dc5214b42e2e86c59d2ef2677de259` | `1802e29af5fb936db4d46a7f6b167ac1b93a8482` |

## Pages validées humainement et inchangées

- `articles/investir-grosse-somme-dun-coup-ou-progressivement.html` — 7/9 automatique — Risque d’attente versus timing, stratégie hybride, calendrier mécanique, date de fin et motifs légitimes d’interruption déjà explicites.
- `dossiers/debloquer-demarche-administrative.html` — 7/9 automatique — Fait à prouver, preuves équivalentes, typologie du blocage, changement de niveau, trace écrite et voies de recours conditionnelles déjà structurés.
- `articles/premiere-chance-sans-experience.html` — 8/9 automatique — Première expérience lue comme achat de preuve, réseau et option suivante ; coût d’enfermement, condition de sortie et scénario dégradé déjà traités.
- `dossiers/prix-attendre-finances.html` — 8/9 automatique — Coûts certains versus opportunité, cas où attendre protège, scénario symétrique d’action trop rapide et seuil de décision déjà présents.
- `articles/competences-invisibles-preuves.html` — 8/9 automatique — Revue angles morts : distingue preuve insuffisante et filtre local via le test même preuve/autre acteur, avec condition de renversement.

## Corpus complet

| Score | Mots | Revue | Page |
|---:|---:|---|---|
| 6/9 | 1384 | à revoir après changement | `dossiers/etre-riche-revenu-patrimoine-liberte.html` |
| 6/9 | 1511 | à revoir après changement | `dossiers/temps-energie-qualite-vie.html` |
| 6/9 | 1518 | à revoir après changement | `dossiers/dependance-gros-client.html` |
| 6/9 | 2857 | à revoir après changement | `dossiers/indivision-loyers-charges-comptes.html` |
| 7/9 | 1061 | à revoir après changement | `dossiers/accepter-emploi-moins-paye-vivre-mieux.html` |
| 7/9 | 1271 | à revoir après changement | `dossiers/comparer-strategies-immobilieres.html` |
| 7/9 | 1334 | à revoir après changement | `dossiers/competences-qualification-employabilite.html` |
| 7/9 | 1374 | à revoir après changement | `dossiers/garages-parkings-locaux-commerciaux.html` |
| 7/9 | 1404 | à revoir après changement | `dossiers/etude-marche-terrain.html` |
| 7/9 | 1455 | humaine ✓ | `articles/investir-grosse-somme-dun-coup-ou-progressivement.html` |
| 7/9 | 1496 | à revoir après changement | `dossiers/cout-complet-achat-immobilier.html` |
| 7/9 | 1504 | à revoir après changement | `dossiers/classes-actifs-allocation-patrimoine.html` |
| 7/9 | 1546 | humaine ✓ | `dossiers/debloquer-demarche-administrative.html` |
| 7/9 | 1577 | à revoir après changement | `dossiers/acheter-ou-louer-si-on-risque-demenager.html` |
| 7/9 | 1795 | à revoir après changement | `dossiers/metiers-fonctions-organisation-entreprise.html` |
| 7/9 | 1894 | à revoir après changement | `dossiers/regles-responsabilites-fautes-travail.html` |
| 7/9 | 2064 | à revoir après changement | `dossiers/are-arce-acre-creation-entreprise.html` |
| 7/9 | 2159 | heuristique | `dossiers/seuils-maturite-patrimoniale.html` |
| 7/9 | 2451 | à revoir après changement | `dossiers/demenager-pour-un-emploi-salaire-minimum.html` |
| 7/9 | 2517 | à revoir après changement | `dossiers/experience-devient-risque-recruteur.html` |
| 8/9 | 995 | à revoir après changement | `dossiers/patrimoine-marge-de-manoeuvre.html` |
| 8/9 | 996 | à revoir après changement | `dossiers/quand-arreter-optimiser-utiliser-patrimoine.html` |
| 8/9 | 1036 | à revoir après changement | `dossiers/depenses-recurrentes-abonnements-assurances.html` |
| 8/9 | 1043 | à revoir après changement | `dossiers/immobilier-allocation-globale-patrimoine.html` |
| 8/9 | 1113 | heuristique | `dossiers/premier-investissement-comment-commencer.html` |
| 8/9 | 1148 | à revoir après changement | `dossiers/audit-budget-60-minutes.html` |
| 8/9 | 1206 | à revoir après changement | `dossiers/liquidites-reserve-securite.html` |
| 8/9 | 1219 | à revoir après changement | `dossiers/acheter-logement-sans-se-fragiliser.html` |
| 8/9 | 1253 | à revoir après changement | `dossiers/finances-residence-principale.html` |
| 8/9 | 1293 | à revoir après changement | `dossiers/protocole-verifier-reponse-ia.html` |
| 8/9 | 1319 | à revoir après changement | `dossiers/assurer-ou-autoassurer-risques.html` |
| 8/9 | 1334 | à revoir après changement | `dossiers/calculer-prix-minimum-rentable.html` |
| 8/9 | 1347 | à revoir après changement | `dossiers/reconversion-sans-formation-longue.html` |
| 8/9 | 1357 | à revoir après changement | `dossiers/emploi-chercher-accepter-negocier-evoluer.html` |
| 8/9 | 1364 | humaine ✓ | `articles/premiere-chance-sans-experience.html` |
| 8/9 | 1385 | à revoir après changement | `articles/grosse-entree-argent-que-faire.html` |
| 8/9 | 1386 | à revoir après changement | `dossiers/competent-mais-invisible-travail.html` |
| 8/9 | 1390 | humaine ✓ | `dossiers/prix-attendre-finances.html` |
| 8/9 | 1407 | à revoir après changement | `dossiers/quitter-travail-reconversion-sans-se-fragiliser.html` |
| 8/9 | 1438 | à revoir après changement | `dossiers/management-relations-conflits.html` |
| 8/9 | 1442 | à revoir après changement | `dossiers/tresorerie-bfr-entreprise.html` |
| 8/9 | 1456 | à revoir après changement | `dossiers/piloter-patrimoine-selon-taille.html` |
| 8/9 | 1461 | à revoir après changement | `articles/travailler-beaucoup-gagner-peu-prix.html` |
| 8/9 | 1477 | humaine ✓ | `articles/competences-invisibles-preuves.html` |
| 8/9 | 1480 | à revoir après changement | `dossiers/negocier-salaire-responsabilites.html` |
| 8/9 | 1504 | à revoir après changement | `articles/accepter-nimporte-quel-poste-retour-emploi.html` |
| 8/9 | 1596 | heuristique | `dossiers/preparer-candidature-avant-postuler.html` |
| 8/9 | 1666 | à revoir après changement | `dossiers/quand-vie-change-sante-separation-revenu.html` |
| 8/9 | 1679 | à revoir après changement | `articles/50-candidatures-zero-reponse.html` |
| 8/9 | 1694 | à revoir après changement | `dossiers/location-nue-ou-meublee-comparer.html` |
| 8/9 | 1756 | à revoir après changement | `dossiers/business-plan-utile.html` |
| 8/9 | 1789 | à revoir après changement | `dossiers/apprendre-developper-competences.html` |
| 8/9 | 1792 | à revoir après changement | `articles/competences-transferables.html` |
| 8/9 | 1798 | à revoir après changement | `dossiers/audit-copropriete-avant-achat.html` |
| 8/9 | 1810 | à revoir après changement | `articles/frais-fiscalite-rendement-net.html` |
| 8/9 | 1844 | à revoir après changement | `dossiers/capacite-refuser-travail-rentabilite.html` |
| 8/9 | 1900 | à revoir après changement | `articles/sans-diplome-chemins-alternatifs.html` |
| 8/9 | 1903 | à revoir après changement | `dossiers/decider-sans-tourner-en-rond.html` |
| 8/9 | 1935 | à revoir après changement | `dossiers/bien-immobilier-garder-vendre-transformer.html` |
| 8/9 | 1967 | à revoir après changement | `dossiers/devenir-manager-premiere-fois.html` |
| 8/9 | 2098 | à revoir après changement | `articles/entretien-rate-ce-qui-bloque.html` |
| 8/9 | 2100 | à revoir après changement | `dossiers/rembourser-credit-ou-investir.html` |
| 8/9 | 2107 | à revoir après changement | `dossiers/decider-a-deux-travail-patrimoine.html` |
| 8/9 | 2107 | à revoir après changement | `dossiers/previsionnel-activite-12-mois.html` |
| 8/9 | 2178 | à revoir après changement | `dossiers/formation-vaut-elle-le-cout.html` |
| 8/9 | 2226 | à revoir après changement | `dossiers/plan-30-jours-recherche-emploi.html` |
| 8/9 | 2238 | à revoir après changement | `dossiers/allocation-patrimoine-selon-situation.html` |
| 8/9 | 2253 | à revoir après changement | `dossiers/acheter-sans-vider-epargne.html` |
| 8/9 | 2290 | à revoir après changement | `articles/tester-metier-avant-investir.html` |
| 8/9 | 2296 | à revoir après changement | `dossiers/finances-cadre-global.html` |
| 8/9 | 2370 | à revoir après changement | `dossiers/methode-analyse-complete.html` |
| 8/9 | 2553 | heuristique | `dossiers/vendre-bien-a-sa-sci-refinancement-patrimoine.html` |
| 8/9 | 2593 | à revoir après changement | `dossiers/metiers-accessibles-sans-diplome.html` |
| 8/9 | 2697 | à revoir après changement | `dossiers/location-courte-duree-meuble-tourisme.html` |
| 8/9 | 2726 | à revoir après changement | `dossiers/inflation-comprendre-histoire-pouvoir-achat.html` |
| 8/9 | 2931 | à revoir après changement | `dossiers/changer-travail-avant-credit-immobilier.html` |
| 9/9 | 1029 | à revoir après changement | `dossiers/sante-travail-equilibre-vie-pro-perso.html` |
| 9/9 | 1057 | à revoir après changement | `dossiers/finances-difficiles-sortir-decouvert-dettes.html` |
| 9/9 | 1273 | à revoir après changement | `articles/construire-epargne-de-zero.html` |
| 9/9 | 1340 | à revoir après changement | `dossiers/finances-allocation-portefeuille.html` |
| 9/9 | 1342 | à revoir après changement | `dossiers/trajectoire-professionnelle-selon-situation.html` |
| 9/9 | 1362 | à revoir après changement | `dossiers/cout-reel-voiture-achat-credit-loa-lld.html` |
| 9/9 | 1364 | à revoir après changement | `dossiers/gestion-pilotee-comparer-performances.html` |
| 9/9 | 1493 | à revoir après changement | `dossiers/valeur-option-bien-immobilier.html` |
| 9/9 | 1503 | à revoir après changement | `dossiers/embaucher-ou-sous-traiter.html` |
| 9/9 | 1536 | à revoir après changement | `dossiers/quitter-emploi-stable-ou-rester.html` |
| 9/9 | 1556 | à revoir après changement | `articles/clients-interesses-personne-nachete.html` |
| 9/9 | 1596 | heuristique | `dossiers/separation-logement-achete-a-deux.html` |
| 9/9 | 1628 | à revoir après changement | `dossiers/creer-entreprise-avec-peu-argent.html` |
| 9/9 | 1638 | à revoir après changement | `dossiers/finances-retraite-decumulation.html` |
| 9/9 | 1651 | heuristique | `dossiers/premier-salaire-18-ans-chez-parents.html` |
| 9/9 | 1670 | à revoir après changement | `dossiers/automatiser-ou-non-processus.html` |
| 9/9 | 1743 | à revoir après changement | `dossiers/questions-poser-avant-prise-de-poste.html` |
| 9/9 | 1754 | à revoir après changement | `dossiers/ameliorer-processus-sans-degrader-service.html` |
| 9/9 | 1756 | à revoir après changement | `dossiers/accepter-emploi-plus-loin-cout-trajet.html` |
| 9/9 | 1788 | à revoir après changement | `dossiers/tout-ca-pour-quoi-objectifs-besoins.html` |
| 9/9 | 1790 | à revoir après changement | `dossiers/trouver-premiers-clients.html` |
| 9/9 | 1828 | à revoir après changement | `dossiers/indivision-immobiliere-sortir-sans-subir.html` |
| 9/9 | 1833 | à revoir après changement | `dossiers/prejuges-biais-monde-professionnel.html` |
| 9/9 | 1857 | à revoir après changement | `dossiers/passer-80-pourcent-cout-reel.html` |
| 9/9 | 1943 | à revoir après changement | `dossiers/lancer-activite-sans-quitter-emploi.html` |
| 9/9 | 1965 | à revoir après changement | `dossiers/travailler-moins-vivre-mieux.html` |
| 9/9 | 1968 | à revoir après changement | `dossiers/reconversion-sans-perte-salaire.html` |
| 9/9 | 1979 | à revoir après changement | `dossiers/couple-famille-argent-temps.html` |
| 9/9 | 2058 | à revoir après changement | `dossiers/creer-entreprise-sans-diplome.html` |
| 9/9 | 2072 | à revoir après changement | `articles/checklist-avant-placement-conseiller.html` |
| 9/9 | 2072 | à revoir après changement | `dossiers/quitter-cdi-avec-credit-immobilier.html` |
| 9/9 | 2078 | heuristique | `dossiers/preparer-retraite-droits-epargne-logement.html` |
| 9/9 | 2081 | à revoir après changement | `articles/retrouver-emploi-apres-interruption.html` |
| 9/9 | 2132 | à revoir après changement | `dossiers/puis-je-me-permettre-reconversion.html` |
| 9/9 | 2158 | à revoir après changement | `articles/choisir-etf-mondial-debutant.html` |
| 9/9 | 2182 | à revoir après changement | `dossiers/finances-enveloppes-fiscalite.html` |
| 9/9 | 2219 | à revoir après changement | `dossiers/favoriser-un-enfant-succession-donation.html` |
| 9/9 | 2223 | à revoir après changement | `dossiers/indivision-succession-heritiers-vendre-partager.html` |
| 9/9 | 2244 | à revoir après changement | `dossiers/finances-investissement-locatif.html` |
| 9/9 | 2252 | à revoir après changement | `dossiers/contrat-travail-clauses-verifier-avant-signer.html` |
| 9/9 | 2280 | à revoir après changement | `dossiers/patrimoine-permet-il-travailler-moins.html` |
| 9/9 | 2330 | à revoir après changement | `dossiers/licence-universite-sans-bac-daeu-vap-vae.html` |
| 9/9 | 2343 | à revoir après changement | `dossiers/decision-plan-30-90-jours.html` |
| 9/9 | 2388 | à revoir après changement | `dossiers/finances-credit-endettement.html` |
| 9/9 | 2392 | à revoir après changement | `dossiers/patrimoine-selon-age-construire-utiliser.html` |
| 9/9 | 2443 | à revoir après changement | `dossiers/finances-transmission-patrimoine.html` |
| 9/9 | 2479 | à revoir après changement | `articles/comparatif-produits-bancaires.html` |
| 9/9 | 2573 | à revoir après changement | `dossiers/comparer-deux-offres-emploi.html` |
| 9/9 | 2644 | à revoir après changement | `dossiers/choisir-statut-micro-ei-eurl-sasu.html` |
| 9/9 | 2852 | à revoir après changement | `dossiers/combien-chiffre-affaires-pour-vivre.html` |
| 9/9 | 2919 | à revoir après changement | `dossiers/combien-epargne-avant-demissionner.html` |
| 9/9 | 3124 | à revoir après changement | `dossiers/indivision-rachat-progressif-parts.html` |
| 9/9 | 3872 | à revoir après changement | `dossiers/indivision-couple-separation-rachat-soulte.html` |
| 9/9 | 4339 | à revoir après changement | `dossiers/sci-immobiliere-acheter-gerer-transmettre-sortir.html` |

## Règle de reprise

Une page signalée n’est réécrite que si une lecture humaine identifie un gain réel : faux verrou, levier causal manquant, seuil, séquence, combinaison, scénario adverse, preuve ou condition de sortie. Une validation humaine est attachée au contenu exact du fichier : toute modification la révoque automatiquement.

