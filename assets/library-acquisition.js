(() => {
  if (!Array.isArray(window.CE_LIBRARY_CATALOG)) return;

  const patch = (href, values) => {
    const item = window.CE_LIBRARY_CATALOG.find(entry => entry.h === href);
    if (item) Object.assign(item, values);
  };

  patch('dossiers/formation-vaut-elle-le-cout.html', {
    n:'Choisir une formation pour une reconversion : coût, RNCP et débouchés',
    x:'Partir du métier et des offres réelles, vérifier RNCP/RS, insertion, coût économique total, revenu sacrifié et alternatives plus courtes.',
    k:'choisir formation reconversion rncp rs qualiopi cpf débouchés insertion coût économique revenu perdu salaire métier alternatives vae alternance'
  });

  patch('articles/competences-transferables.html', {
    n:'Changer de métier sans repartir de zéro : quelles compétences sont transférables ?',
    x:'Comparer profondeur de maîtrise, proximité de contexte, preuves et écarts à combler pour choisir entre candidature directe, poste passerelle ou formation.',
    k:'changer métier sans repartir zéro compétences transférables reconversion poste passerelle preuves expérience formation candidature'
  });

  patch('dossiers/passer-80-pourcent-cout-reel.html', {
    n:'Passer à 80 % : combien je perds en salaire et quel coût réel ?',
    x:'Comparer baisse de revenu, frais évités, temps réellement récupéré, épargne, retraite et charge de travail avant de passer à temps partiel.',
    k:'passer à 80 pourcent combien perdre salaire temps partiel coût réel retraite épargne temps récupéré travail privé fonction publique'
  });

  patch('dossiers/comparer-deux-offres-emploi.html', {
    n:'Comparer deux offres d’emploi : salaire, contrat, temps, risques et évolution',
    x:'Comparer revenu disponible, temps capturé, contrat, manager, risque organisationnel, qualité de vie, capital professionnel et scénarios avant de signer.',
    k:'comparer deux offres emploi choisir offre salaire contrat temps trajet manager télétravail risque évolution carrière qualité vie'
  });

  const additions = [
    {
      d:'vie-pro',t:'guide',c:'Choix d’emploi',
      h:'dossiers/questions-poser-avant-prise-de-poste.html',
      n:'Questions à poser avant d’accepter un poste : les 10 essentielles',
      x:'Révéler le poste réel avant de signer : raison du recrutement, objectifs, manager, charge, turnover, moyens, variable, télétravail et évolution.',
      k:'questions poser avant accepter poste emploi embauche entretien manager charge turnover salaire variable télétravail prise de poste onboarding'
    },
    {
      d:'vie-pro',t:'guide',c:'Contrat de travail',
      h:'dossiers/contrat-travail-clauses-verifier-avant-signer.html',
      n:'Contrat de travail : clauses à vérifier avant de signer un CDI',
      x:'Examiner salaire, classification, période d’essai, forfait jours, télétravail, mobilité, variable, exclusivité, non-concurrence et convention collective.',
      k:'contrat travail clauses vérifier avant signer cdi période essai forfait jours mobilité télétravail variable exclusivité non concurrence convention collective salaire'
    },
    {
      d:'vie-pro',t:'guide',c:'Entrepreneuriat · Validation',
      h:'dossiers/etude-marche-terrain.html',
      n:'Étude de marché terrain : vérifier la demande avant de construire le projet',
      x:'Passer d’un marché théorique à un marché accessible avec tests de prix, comportements d’achat, concurrence, saisonnalité et critères d’abandon.',
      k:'étude marché terrain demande concurrence test prix client marché accessible validation projet entrepreneur création entreprise'
    },
    {
      d:'vie-pro',t:'guide',c:'Entrepreneuriat · Clients',
      h:'dossiers/trouver-premiers-clients.html',
      n:'Trouver ses premiers clients : mesurer le tunnel plutôt que prospecter au hasard',
      x:'Choisir les canaux, mesurer prospects, réponses, rendez-vous, devis, ventes, coût d’acquisition et récurrence pour corriger le vrai goulot.',
      k:'premiers clients prospecter prospection acquisition client devis vente conversion entrepreneur création entreprise'
    },
    {
      d:'vie-pro',t:'guide',c:'Entrepreneuriat · Prévisionnel',
      h:'dossiers/previsionnel-activite-12-mois.html',
      n:'Prévisionnel 12 mois : clients, prix, charges et trésorerie dans trois scénarios',
      x:'Construire un scénario prudent, central et favorable avec montée en charge, saisonnalité, capacité, investissements, BFR et trésorerie.',
      k:'prévisionnel 12 mois entreprise chiffre affaires charges trésorerie bfr saisonnalité scénario prudent business plan'
    },
    {
      d:'vie-pro',t:'guide',c:'Entrepreneuriat · Business plan',
      h:'dossiers/business-plan-utile.html',
      n:'Business plan : ce qu’il doit vraiment prouver avant de convaincre',
      x:'Relier marché, prix, capacité, marge, financement et scénarios afin de tester le projet avant de produire un document de présentation.',
      k:'business plan création entreprise financement banque prévisionnel modèle économique marché marge capacité scénario'
    },
    {
      d:'vie-pro',t:'guide',c:'Entrepreneuriat · Revenu',
      h:'dossiers/combien-chiffre-affaires-pour-vivre.html',
      n:'Combien de chiffre d’affaires faut-il pour vivre de son activité ?',
      x:'Remonter du revenu personnel cible vers le CA nécessaire selon marge, coûts, cotisations, capacité facturable et structure d’activité.',
      k:'combien chiffre affaires pour vivre revenu entrepreneur indépendant salaire marge cotisations prix capacité'
    },
    {
      d:'vie-pro',t:'guide',c:'Entrepreneuriat · Statut',
      h:'dossiers/choisir-statut-micro-ei-eurl-sasu.html',
      n:'Micro, EI, EURL ou SASU : choisir selon le modèle économique',
      x:'Comparer simplicité, charges, fiscalité, protection sociale, investissements, associés futurs et capacité à conserver du résultat dans l’activité.',
      k:'micro entreprise ei eurl sasu statut juridique fiscalité cotisations création entreprise choisir statut'
    },
    {
      d:'vie-pro',t:'guide',c:'Entrepreneuriat · Aides',
      h:'dossiers/are-arce-acre-creation-entreprise.html',
      n:'ARE, ARCE, ACRE : choisir le filet de sécurité adapté au démarrage',
      x:'Comparer maintien mensuel, capital immédiat et baisse temporaire de cotisations selon besoins de trésorerie, vitesse de démarrage et scénario d’échec.',
      k:'are arce acre création entreprise france travail chômage aide entrepreneur trésorerie capital sécurité'
    },
    {
      d:'vie-pro',t:'guide',c:'Entrepreneuriat · Budget',
      h:'dossiers/creer-entreprise-avec-peu-argent.html',
      n:'Créer une entreprise avec peu d’argent : budget de départ, réserve et trésorerie',
      x:'Séparer investissement initial, BFR, trésorerie professionnelle et réserve personnelle selon le type d’activité et le délai avant encaissement.',
      k:'créer entreprise peu argent budget départ trésorerie bfr réserve investissement entrepreneur'
    },
    {
      d:'vie-pro',t:'guide',c:'Entrepreneuriat · Diplôme',
      h:'dossiers/creer-entreprise-sans-diplome.html',
      n:'Créer une entreprise sans diplôme : ce qui est libre, réglementé ou accessible autrement',
      x:'Distinguer les activités libres des métiers réglementés et vérifier qualification, expérience, autorisation, assurance et voies d’accès alternatives.',
      k:'créer entreprise sans diplôme métier réglementé qualification expérience artisan entrepreneur reconversion'
    },
    {
      d:'vie-pro',t:'guide',c:'Métiers sans diplôme',
      h:'dossiers/metiers-accessibles-sans-diplome.html',
      n:'Métiers accessibles sans diplôme : accès, rémunération, contraintes et progression',
      x:'Comparer accès réel, qualification courte, salaire d’entrée, contraintes, marché, potentiel d’évolution et possibilité de devenir indépendant.',
      k:'métiers sans diplôme emploi reconversion salaire qualification courte évolution expérience accessible'
    },
    {
      d:'vie-pro',t:'guide',c:'Reconversion',
      h:'dossiers/reconversion-sans-formation-longue.html',
      n:'Se reconvertir sans deux ans de formation : comparer les voies courtes',
      x:'Comparer candidature directe, poste passerelle, formation courte, certification, VAE et immersion selon coût, délai, preuves et débouchés.',
      k:'reconversion sans formation longue vae certification courte poste passerelle métier emploi compétences'
    }
  ];

  const anchor = window.CE_LIBRARY_CATALOG.findIndex(item => item.h === 'dossiers/lancer-activite-sans-quitter-emploi.html');
  let offset = anchor >= 0 ? anchor + 1 : window.CE_LIBRARY_CATALOG.length;
  for (const item of additions) {
    if (window.CE_LIBRARY_CATALOG.some(existing => existing.h === item.h)) continue;
    window.CE_LIBRARY_CATALOG.splice(offset, 0, item);
    offset += 1;
  }
})();
