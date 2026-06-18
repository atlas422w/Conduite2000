/* =========================================================
   CONDUITE 2000 — interactions
   ========================================================= */

// ---------------- Modal content ----------------
const MODAL_CONTENT = {
  aac: {
    eye: "Formation · F.01",
    title: "Conduite accompagnée (AAC)",
    body: `
      <p><b>Notre formation phare.</b> Nous préconisons activement la conduite accompagnée pour
      acquérir une vraie expérience de la route avant le permis.</p>

      <h4>Conditions</h4>
      <ul>
        <li>17 ans pour le permis B</li>
        <li>15 ans pour l'examen théorique (code)</li>
        <li>Avenant à l'assurance obligatoire (nom de l'élève, des accompagnateurs et plaques d'immatriculation)</li>
      </ul>

      <h4>Déroulé de la formation</h4>
      <ul>
        <li>≈ 25h de conduite encadrées par un enseignant</li>
        <li>Les accompagnateurs (parents, conjoints…) doivent être présents aux dernières heures</li>
        <li>Minimum 3000 km à parcourir sur 1 an</li>
        <li>RDV pédagogique intermédiaire à 1500 km (1h de conduite avec accompagnateurs)</li>
        <li>2e RDV pédagogique en salle : sensibilisation (vitesse, alcool, drogues, médicaments, fatigue, assurances, accidents)</li>
        <li>À 3000 km : 2e RDV en conduite et en salle avant de fixer la date d'examen</li>
      </ul>

      <h4>Après l'obtention du permis</h4>
      <p>L'élève récupère son permis provisoire (valable 4 mois) sur
      <b>permisdeconduire.gouv.fr</b> rubrique « Connaître et imprimer son résultat ».</p>
      <p>À 18 ans, demande du permis définitif sur l'<b>ANTS</b> avec photos numérisées agréées
      et documents d'inscription. Envoi par courrier sous 2 à 3 semaines.</p>

      <a class="pdf-link" href="#">
        Fiche complète AAC (PDF)
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
      </a>
    `,
  },
  permisB: {
    eye: "Formation · F.02",
    title: "Permis traditionnel (B)",
    body: `
      <p>Conduite de véhicules dont le PTAC ne dépasse pas 3 500 kg.</p>

      <h4>Conditions d'âge</h4>
      <ul>
        <li>18 ans pour le permis B</li>
        <li>17 ans pour le passage à l'examen théorique</li>
      </ul>

      <h4>Épreuve théorique (code)</h4>
      <ul>
        <li>Série de 40 questions</li>
        <li>35 bonnes réponses minimum pour l'admission</li>
      </ul>

      <h4>Épreuve pratique (32 minutes)</h4>
      <p>Depuis le 1er août 2014, la durée est de 32 minutes (au lieu de 35). Au cours de l'épreuve,
      le candidat doit réaliser deux manœuvres particulières :</p>
      <ul>
        <li>Un freinage pour s'arrêter avec précision</li>
        <li>Une manœuvre en marche arrière (ligne droite, créneau, épi, demi-tour…)</li>
      </ul>
      <p>Le freinage de précision est annoncé au candidat. Le choix de la manœuvre en marche arrière
      relève de l'initiative exclusive de l'inspecteur.</p>

      <h4>Après l'obtention du permis</h4>
      <p>Récupération du permis provisoire sur <b>permisdeconduire.gouv.fr</b>. Demande du permis
      définitif sur l'<b>ANTS</b> dès 18 ans. Envoi sous 2 à 3 semaines.</p>

      <a class="pdf-link" href="#">
        Fiche complète Permis B (PDF)
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
      </a>
    `,
  },
  permis1euro: {
    eye: "Aide d'État · F.03",
    title: "Permis à 1€ par jour",
    body: `
      <p><b>Qu'est-ce que c'est&nbsp;?</b> Un prêt dont les intérêts sont pris en charge par l'État.
      Le coût total de la formation ne change pas — l'établissement financier avance l'argent et
      l'État paie les intérêts.</p>
      <p><i>Un crédit vous engage et doit être remboursé. Vérifiez vos capacités de remboursement avant de vous engager.</i></p>

      <h4>Pour quelles catégories&nbsp;?</h4>
      <ul>
        <li>Catégorie B (véhicules légers)</li>
        <li>Catégorie A (motocyclette &gt; 125 cm³)</li>
        <li><b>Non éligible :</b> sous-catégorie A1 (motocyclette légère)</li>
      </ul>

      <h4>Qui peut en bénéficier&nbsp;?</h4>
      <p>Tous les jeunes de <b>15 à 25 ans révolus</b> à la date de signature du contrat de formation
      dans une école de conduite partenaire, sous réserve que l'établissement financier accepte le dossier.</p>
      <p>Les jeunes bénéficiaires d'une aide publique peuvent également demander le prêt.</p>

      <h4>Montants et durée du prêt</h4>
      <p>Trois montants sont disponibles selon le coût de votre formation&nbsp;: <b>800€</b>, <b>1&nbsp;000€</b> ou <b>1&nbsp;200€</b>. Le prêt est remboursable sur <b>40 mois</b> à raison de <b>30€ par mois</b>. Les intérêts sont intégralement pris en charge par l'État — vous ne remboursez que le capital emprunté.</p>

      <h4>Comment en bénéficier&nbsp;?</h4>
      <p>Le candidat majeur contracte le prêt directement avec l'établissement financier. Trois possibilités :</p>
      <ul>
        <li>Justificatif de revenus suffisants pour rembourser <b>30€/mois</b></li>
        <li>Garantie par caution (parent ou tiers)</li>
        <li>Co-emprunt avec les parents</li>
      </ul>
      <p>Pour les <b>mineurs</b> (AAC), les parents empruntent pour le compte du jeune candidat.</p>

      <h4>Caution publique</h4>
      <p>Pour les jeunes inscrits dans une démarche d'accès à l'emploi ou de formation et qui ne peuvent
      fournir de caution, une <b>prise en charge publique du cautionnement</b> est possible (décision du
      Comité interministériel de la sécurité routière du 13 janvier 2009).</p>

      <a class="pdf-link" href="#">
        Fiche complète Permis 1€ (PDF)
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
      </a>
    `,
  },
  supervisee: {
    eye: "Formation · F.04",
    title: "Conduite supervisée",
    body: `
      <p>Une alternative entre la formation traditionnelle et la conduite accompagnée. Possible
      <b>après un échec à l'examen</b> ou <b>en formation initiale</b>.</p>

      <h4>Déroulé</h4>
      <ul>
        <li>≈ 30h de conduite, dernières heures avec accompagnateurs et enseignant</li>
        <li>RDV en conduite recommandé avant de commencer la conduite supervisée</li>
        <li>Après un échec à l'examen : RDV en conduite avec l'enseignant et l'accompagnateur conseillé</li>
      </ul>

      <h4>Assurance</h4>
      <p>L'élève doit être assuré sur les véhicules. Demander à l'assurance un <b>avenant</b> comportant
      le nom de l'élève, des accompagnateurs et les plaques d'immatriculation des véhicules.</p>

      <h4>Après l'obtention du permis</h4>
      <p>Permis provisoire valable 4 mois sur <b>permisdeconduire.gouv.fr</b>. Demande du permis
      définitif sur l'<b>ANTS</b>. Envoi sous 2 à 3 semaines.</p>

      <a class="pdf-link" href="#">
        Fiche complète Conduite supervisée (PDF)
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
      </a>
    `,
  },
  perfectionnement: {
    eye: "Formation · F.05",
    title: "Perfectionnement à la conduite",
    body: `
      <p><b>À chacun son permis, après l'obtention du permis.</b> Que vous soyez novice ou expérimenté,
      Conduite 2000 vous propose des formations post-permis pour vous perfectionner.</p>

      <h4>Sur la base du volontariat</h4>
      <p>Les conducteurs prennent rendez-vous avec un de nos enseignants afin de déterminer ensemble
      le cadre de la formation. Celle-ci diffère selon le profil :</p>

      <h4>Conducteur novice (6 mois à 1 an de permis)</h4>
      <ul>
        <li>Bilan des premiers mois de permis</li>
        <li>Formation pour pallier les faiblesses : sécurité, peurs, attitudes, risques, responsabilités</li>
      </ul>

      <h4>Conducteur expérimenté (10 ans et plus)</h4>
      <ul>
        <li>Perfectionnement par la réactualisation des acquis</li>
        <li>Signalisation, lois, sécurité, risques et responsabilités</li>
      </ul>

      <h4>Bon à savoir</h4>
      <p>Ces formations s'apparentent à des <b>stages de perfectionnement</b>. Durée variable selon
      les besoins. Coûts éventuellement pris en charge par votre <b>assurance voiture</b> ou votre
      <b>employeur</b>.</p>
    `,
  },
  tarifs: {
    eye: "Tarifs complets",
    title: "Grille tarifaire détaillée",
    body: `
      <h4>Conduite accompagnée</h4>
      <ul>
        <li><b>Avec code :</b> 1 784€ &nbsp;·&nbsp; soit 568€/624€/592€ sans frais</li>
        <li><b>Sans code :</b> 1 548€ &nbsp;·&nbsp; soit 471€/530€/547€ sans frais</li>
      </ul>

      <h4>Conduite traditionnelle</h4>
      <ul>
        <li><b>Avec code :</b> 1 504€ &nbsp;·&nbsp; soit 568€/520€/416€ sans frais</li>
        <li><b>Sans code :</b> 1 266€ &nbsp;·&nbsp; soit 418€/530€/318€ sans frais</li>
      </ul>

      <h4>Forfait code seul — 310€</h4>
      <p>Comprend : frais de gestion (50€), forfait code en salle (150€), kit pédagogique
      — livre de code, cahier d'exercice, guide accompagnateur (70€), code en ligne 6 mois (40€).</p>

      <h4>Non inclus dans le forfait code</h4>
      <ul>
        <li>Évaluation : 52€ (obligatoire avant chaque début de formation)</li>
        <li>Heure de conduite supplémentaire : 52€</li>
      </ul>

      <p><i>Conduite 2000 propose le <b>Permis à 1€ par jour</b> sur l'ensemble de ces formules,
      pour les jeunes éligibles.</i></p>

      <a class="pdf-link" href="#">
        Télécharger la grille (PDF)
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
      </a>
    `,
  },
  docs: {
    eye: "Documents à télécharger",
    title: "Documents pour l'inscription",
    body: `
      <p>Documents à fournir et à remplir pour finaliser votre dossier d'inscription (mineur).
      Les documents sont à télécharger ci-dessous, à compléter, puis à nous remettre en main propre ou
      par email.</p>

      <h4>Pièces à fournir</h4>
      <ul>
        <li>1 photocopie de la carte d'identité recto-verso de l'élève</li>
        <li>1 photocopie de l'attestation de recensement ou JDC (si effectuée)</li>
        <li>1 photocopie de la carte d'identité recto-verso d'un parent</li>
        <li>4 photos numérisées agréées par l'ANTS</li>
        <li>1 attestation d'hébergement au même nom que la carte d'identité</li>
        <li>1 mandat ANTS</li>
        <li>1 photocopie d'un justificatif de domicile de moins de 6 mois (facture téléphone, EDF, eau…)
            au même nom que la carte d'identité du parent</li>
        <li>1 photocopie de l'ASSR2 et du BSR (permis AM) si obtention</li>
        <li>Pour les formations AAC : photocopie de la lettre avenant à l'assurance en plus</li>
      </ul>

      <a class="pdf-link" href="#">
        Attestation d'hébergement (PDF)
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
      </a>
      <a class="pdf-link" href="#" style="background:var(--ink); margin-left:8px;">
        Mandat ANTS (PDF)
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
      </a>
    `,
  },

  /* ---------- LABELLISATION ---------- */
  lab1: {
    eye: "Labellisation · 01",
    title: "Formation préparatoire au permis B",
    body: `
      <p>Apprentissage anticipé de la conduite (<b>AAC</b>) et <b>conduite supervisée</b>.</p>

      <h4>Horaires des cours théoriques</h4>
      <ul>
        <li>Mardi, mercredi, vendredi, samedi (matin et après-midi) — sur rendez-vous.</li>
        <li>Jeudi matin sur rendez-vous ; jeudi après-midi de 18h15 à 19h15.</li>
      </ul>

      <h4>Formation post-permis</h4>
      <ul>
        <li><b>Pré-requis :</b> être titulaire du permis B.</li>
        <li><b>Durée :</b> une journée (7 heures).</li>
        <li><b>Suivi :</b> feuille d'émargement à la demi-journée.</li>
        <li><b>Validation :</b> attestation de formation post-permis.</li>
        <li><b>Dispensateur :</b> formateur diplômé BEPECASER ou titulaire du Titre professionnel d'enseignant de la conduite et de la sécurité routière.</li>
        <li><b>Lieu :</b> au sein de l'auto-école Conduite 2000.</li>
      </ul>

      <div class="lab-note">
        <b>Contexte :</b> label qualité défini par l'arrêté du 26 février 2018 portant création du label « Qualité des formations au sein des écoles de conduite », visant à proposer aux jeunes conducteurs des rendez-vous post-permis pour renforcer leurs acquis.
      </div>

      <h4>Programme de la journée</h4>
      <ul>
        <li>Accueil et présentation.</li>
        <li>L'alcool : effets, conséquences, comportements préventifs, idées reçues, sanctions.</li>
        <li>Drogues et médicaments : effets, conséquences, sanctions.</li>
        <li>Distracteurs (téléphone, GPS) : sanctions.</li>
        <li>Distances de sécurité et vitesse : comprendre, estimer, distance de freinage et d'arrêt, conséquences.</li>
        <li>Conduite économique et respectueuse de l'environnement.</li>
        <li>Exercices pratiques de conduite économique et apaisée.</li>
        <li>Bilan de la journée.</li>
      </ul>

      <h4>Personnes concernées</h4>
      <p>Tout jeune conducteur ayant obtenu le permis B depuis moins de 2 ans.</p>

      <h4>Objectif</h4>
      <p>Sensibiliser aux dangers de la route (alcool, stupéfiants, vitesse…) et à la conduite économique et écologique.</p>

      <h4>Méthodes pédagogiques</h4>
      <p>Cours théoriques et pratiques sur route, sur véhicule à double commande.</p>
    `,
  },

  lab2: {
    eye: "Labellisation · 02",
    title: "Parcours de formation B",
    body: `
      <h4>Les cours théoriques</h4>
      <p>Connaissance des règlements (circulation, conduite) et comportement du conducteur. L'entraînement au code est possible dans nos locaux (support DVD / ordinateur), en cours de code dirigés avec un enseignant, ou via internet avec le <b>Pass Rousseau</b>. Il porte sur :</p>
      <ul>
        <li>la vigilance et les attitudes envers les autres usagers ;</li>
        <li>les effets de l'alcool, des drogues et des médicaments sur la conduite ;</li>
        <li>l'influence de la fatigue ;</li>
        <li>les risques liés à la météo et à l'état de la chaussée ;</li>
        <li>les usagers vulnérables ;</li>
        <li>les spécificités de certaines catégories de véhicules et les conditions de visibilité de leur conducteur ;</li>
        <li>les gestes de premiers secours ;</li>
        <li>les précautions en montant et en quittant le véhicule ;</li>
        <li>le transport d'un chargement et de personnes ;</li>
        <li>la réglementation : obligation d'assurance et documents administratifs.</li>
      </ul>

      <h4>Les cours thématiques</h4>
      <p>Dispensés dans nos locaux par un enseignant titulaire d'une autorisation d'enseigner valide. Thématiques : alcool / drogues / médicaments, fatigue, vitesse, usagers vulnérables, contrats d'assurance.</p>

      <h4>La formation pratique</h4>
      <p>Conduite et sensibilisation aux risques, organisée autour de <b>4 compétences</b> à acquérir :</p>
      <div class="comp-grid">
        <div class="comp-card"><span class="cnum">1</span><p>Maîtriser le maniement du véhicule dans un trafic faible ou nul.</p></div>
        <div class="comp-card"><span class="cnum">2</span><p>Appréhender la route et circuler en conditions normales.</p></div>
        <div class="comp-card"><span class="cnum">3</span><p>Circuler en conditions difficiles et partager la route.</p></div>
        <div class="comp-card"><span class="cnum">4</span><p>Pratiquer une conduite autonome, sûre et économique.</p></div>
      </div>
      <div class="lab-note">Chaque compétence est abordée via : le pourquoi, le comment, les risques, les influences de l'entourage et du mode de vie, les pressions de la société (publicité, travail…) et l'auto-évaluation.</div>
    `,
  },

  lab3: {
    eye: "Labellisation · 03",
    title: "Enjeux & examen",
    body: `
      <h4>Enjeux et objectifs</h4>
      <p>Le permis est un outil social indispensable pour beaucoup de jeunes (études, travail, loisirs). Les conducteurs débutants représentent une part trop importante des tués et blessés sur la route : l'effort de formation doit être poursuivi.</p>
      <p>L'objectif de Conduite 2000 est d'amener chaque élève vers la réussite en transmettant <b>savoir-être, savoirs, savoir-faire et savoir-devenir</b>. Apprendre à conduire est une démarche éducative exigeante.</p>

      <h4>Évaluation des progrès</h4>
      <p>Grilles d'évaluation des savoirs comportementaux, techniques et environnementaux ; évaluations tout au long du parcours. Le <b>livret d'apprentissage</b> permet de suivre les progrès.</p>

      <h4>Déroulement des épreuves</h4>
      <p><b>Épreuve théorique :</b> QCM de 40 questions (connaissances réglementaires et savoirs utiles en conduite).</p>
      <p><b>Épreuve pratique :</b> évaluée par l'inspecteur du permis de conduire et de la sécurité routière. L'élève doit :</p>
      <ul>
        <li>réaliser un parcours urbain / routier et / ou autoroutier ;</li>
        <li>suivre un itinéraire ou rejoindre une destination en autonomie (~5 min) ;</li>
        <li>réaliser des manœuvres ;</li>
        <li>vérifier un élément technique intérieur / extérieur, répondre à une question de sécurité routière et à une question de premiers secours ;</li>
        <li>appliquer le code (dont les limitations de vitesse propres aux élèves) ;</li>
        <li>conduire en économie de carburant et limitation des gaz à effet de serre ;</li>
        <li>faire preuve de courtoisie (usagers vulnérables).</li>
      </ul>
      <p>L'expert valorise les acquis plutôt que les faiblesses, dresse un inventaire des points positifs et négatifs, et retranscrit le bilan dans une grille.</p>
      <div class="lab-note"><b>Arrêté du 17 novembre 2022 :</b> suppression de la limite de 5 présentations pratiques. L'ETG / ETM (ou sa dispense) est valide 5 ans par catégorie, quel que soit le nombre de présentations.</div>
      <p style="margin-top:12px;"><b>Personnes en situation de handicap :</b> rendez-vous sur le site CEREMH pour plus d'informations.</p>
    `,
  },

  lab4: {
    eye: "Labellisation · 04",
    title: "Règlement intérieur (Formation B – AAC)",
    body: `
      <p><b>Objet :</b> règles d'hygiène, de sécurité et de discipline ; applicable à tous les élèves, quelle que soit la catégorie.</p>
      <div class="articles">
        <div class="article"><div class="art-no">Article 1 · Enseignement</div><p>Enseignement selon les lois en vigueur, notamment l'arrêté relatif au REMC (en vigueur depuis le 01/07/2014). Évaluation initiale obligatoire, puis contrat de formation.</p></div>
        <div class="article"><div class="art-no">Article 2 · Respect</div><p>Respecter : le personnel ; le matériel (ne pas mettre les pieds sur les chaises, ne pas se balancer, prendre soin des boîtiers, ne pas écrire sur les murs ou les chaises) ; les locaux (propreté) ; les autres élèves sans discrimination. Hygiène et tenue correctes exigées (pas de chaussures ne tenant pas le pied ni à forts talons). Interdiction de fumer dans l'établissement et les véhicules-écoles, ni de consommer ou d'avoir consommé alcool, drogue ou médicaments. Interdiction de manger ou boire en salle de code et dans les véhicules. Ne pas utiliser le matériel vidéo sans y être invité. Respecter les horaires de code et de conduite : au-delà de 20 min de retard, la leçon est annulée et non remboursée — sauf raisons valables (maladie, retard des transports publics, modification d'horaires de cours du lycée au dernier moment). Interdiction d'utiliser des appareils (MP3, téléphone) pendant le code. Ne pas parler pendant les cours.</p></div>
        <div class="article"><div class="art-no">Article 3 · Dépistage</div><p>Élève soupçonné d'avoir consommé alcool ou stupéfiants : dépistage possible par l'enseignant (sous la responsabilité du directeur). Test positif ou refus : leçon annulée et facturée, convocation auprès du directeur.</p></div>
        <div class="article"><div class="art-no">Article 4 · Accès salle de code</div><p>Pas d'accès à la salle de code sans dossier d'inscription constitué et versement réglé.</p></div>
        <div class="article"><div class="art-no">Article 5 · Corrections</div><p>Rester jusqu'à la fin des corrections en séance de code.</p></div>
        <div class="article"><div class="art-no">Article 6 · Annulation</div><p>Aucune leçon décommandée par répondeur ; les annulations se font pendant les heures d'ouverture du bureau.</p></div>
        <div class="article"><div class="art-no">Article 7 · Téléphones</div><p>Téléphones éteints pendant le code et au volant.</p></div>
        <div class="article"><div class="art-no">Article 8 · Affichage</div><p>Lire les informations affichées sur la porte de l'établissement.</p></div>
        <div class="article"><div class="art-no">Article 9 · Livret d'apprentissage</div><p>Livret remis à la 1re leçon ; obligatoire (avec une pièce d'identité) en conduite. En cas de non-présentation aux forces de l'ordre, les conséquences sont imputables à l'élève.</p></div>
        <div class="article"><div class="art-no">Article 10 · Examen pratique</div><p>Aucune présentation à l'examen pratique si le compte n'est pas réglé 24 h avant.</p></div>
        <div class="article"><div class="art-no">Article 12 · Examen théorique</div><p>Inscription à l'examen théorique : tenir compte des conseils de l'enseignant (résultats aux examens blancs), puis s'inscrire seul ou via l'auto-école auprès d'un établissement privé.</p></div>
        <div class="article"><div class="art-no">Article 13 · Inscription pratique</div><p>Programme terminé (4 compétences validées), avis favorable de l'enseignant, compte soldé.</p></div>
        <div class="article"><div class="art-no">Article 14 · Sanctions</div><p>Par ordre d'importance : avertissement oral, avertissement écrit, exclusion provisoire, exclusion définitive.</p></div>
        <div class="article"><div class="art-no">Article 15 · Exclusion</div><p>Exclusion possible pour : non-paiement ; attitude empêchant la formation ; inaptitude évaluée par le responsable pédagogique ; non-respect du règlement.</p></div>
      </div>
      <div class="lab-note">La direction et le personnel sont heureux de vous accueillir et vous souhaitent une excellente formation.</div>
      <a class="pdf-link" href="#">
        Règlement intérieur (PDF)
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
      </a>
    `,
  },

  lab5: {
    eye: "Labellisation · 05",
    title: "Évaluation de départ",
    body: `
      <p>Pour débuter la formation, une <b>évaluation des compétences d'une heure</b> est réalisée à bord du véhicule.</p>

      <h4>I — Évaluation</h4>
      <p>Elle permet de proposer un parcours de formation accompagné d'une proposition chiffrée.</p>

      <h4>II — Items évalués</h4>
      <ol class="eval-items">
        <li>Renseignements généraux</li>
        <li>Expérience de la conduite</li>
        <li>Connaissance du véhicule</li>
        <li>Attitude envers l'apprentissage et la sécurité</li>
        <li>Habiletés</li>
        <li>Compréhension et mémoire</li>
        <li>Perception</li>
        <li>Émotivité</li>
        <li>Résultat de l'évaluation</li>
        <li>Proposition : volume de formation prévisionnel</li>
      </ol>

      <h4>III — Moyen utilisé</h4>
      <p>Fiche d'évaluation en 2 exemplaires, dont un remis à l'élève.</p>

      <a class="pdf-link" href="#">
        Fiche d'évaluation (PDF)
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
      </a>
    `,
  },

  lab6: {
    eye: "Labellisation · 06",
    title: "Réclamations",
    body: `
      <p>Notre procédure garantit « un accompagnement rapide et personnalisé ». Trois voies sont possibles.</p>
      <div class="reclam-grid">
        <div class="reclam">
          <div class="ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/></svg></div>
          <b>En présentiel</b>
          <p>Le problème est réglé sur place si possible, sinon un rendez-vous vous est proposé.</p>
          <div class="delay">RDV sous 15 jours</div>
        </div>
        <div class="reclam">
          <div class="ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.9.36 1.78.7 2.6a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.48-1.27a2 2 0 0 1 2.11-.45c.82.34 1.7.57 2.6.7A2 2 0 0 1 22 16.92z"/></svg></div>
          <b>Par téléphone ou e-mail</b>
          <p>Nous vous recontactons par téléphone, ou un rendez-vous vous est proposé à l'auto-école.</p>
          <div class="delay">sous 15 jours</div>
        </div>
        <div class="reclam">
          <div class="ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg></div>
          <b>Cahier des réclamations</b>
          <p>Nous vous recontactons pour fixer un rendez-vous.</p>
          <div class="delay">sous 15 jours</div>
        </div>
      </div>
    `,
  },

  lab7: {
    eye: "Labellisation · 07",
    title: "Accessibilité & handicap",
    body: `
      <div class="handicap-box">
        <div class="ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="4" r="2"/><path d="M19 13v-2a7 7 0 0 0-7-7 7 7 0 0 0-7 7v2M12 11v6m-4 4l4-4 4 4"/></svg></div>
        <div>
          <p><b>Une auto-école accessible à tous.</b> L'auto-école ne disposant pas de véhicules adaptés au handicap, rendez-vous sur <b>www.automobile.ceremh.org</b> pour trouver les auto-écoles adaptées et obtenir plus d'informations. Merci de votre compréhension.</p>
          <a class="lab-link" href="https://www.automobile.ceremh.org" target="_blank" rel="noopener">Accéder au CEREMH
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
          </a>
        </div>
      </div>
    `,
  },
};

// ---------------- Modal logic ----------------
const overlay = document.getElementById("modalOverlay");
const modalEye = document.getElementById("modalEye");
const modalTitle = document.getElementById("modalTitle");
const modalBody = document.getElementById("modalBody");

function openModal(key) {
  const data = MODAL_CONTENT[key];
  if (!data) return;
  modalEye.textContent = data.eye;
  modalTitle.textContent = data.title;
  modalBody.innerHTML = data.body;
  overlay.classList.add("open");
  overlay.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}
function closeModal() {
  overlay.classList.remove("open");
  overlay.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

document.querySelectorAll("[data-modal]").forEach((el) => {
  el.addEventListener("click", (e) => {
    e.preventDefault();
    openModal(el.dataset.modal);
  });
});
overlay.addEventListener("click", (e) => {
  if (e.target === overlay || e.target.closest(".modal-close")) closeModal();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});

// ---------------- Form ----------------
const form = document.getElementById("contactForm");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    const original = btn.innerHTML;
    btn.innerHTML = `Envoi en cours…`;
    btn.disabled = true;
    setTimeout(() => {
      btn.innerHTML = `✓ Message envoyé`;
      btn.style.background = "#1f8a5b";
      setTimeout(() => {
        form.reset();
        btn.innerHTML = original;
        btn.style.background = "";
        btn.disabled = false;
      }, 2400);
    }, 900);
  });
}

// ---------------- Reveal on scroll ----------------
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("in");
        observer.unobserve(e.target);
      }
    });
  },
  { threshold: 0.12 }
);
document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

// ---------------- Nav burger (menu mobile) ----------------
const navBurger = document.getElementById("navBurger");
const navMobileMenu = document.getElementById("navMobileMenu");
if (navBurger && navMobileMenu) {
  navBurger.addEventListener("click", () => {
    navBurger.classList.toggle("open");
    navMobileMenu.classList.toggle("open");
  });
  navMobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navBurger.classList.remove("open");
      navMobileMenu.classList.remove("open");
    });
  });
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".nav-inner") && !e.target.closest(".nav-mobile-menu")) {
      navBurger.classList.remove("open");
      navMobileMenu.classList.remove("open");
    }
  });
}

// ---------------- Nav shadow on scroll ----------------
const nav = document.querySelector(".nav-inner");
window.addEventListener("scroll", () => {
  if (window.scrollY > 20) {
    nav.style.boxShadow = "0 20px 50px rgba(10,10,10,.12), inset 0 1px 0 rgba(255,255,255,.9)";
  } else {
    nav.style.boxShadow = "0 12px 30px rgba(10,10,10,.07), inset 0 1px 0 rgba(255,255,255,.9)";
  }
});

// === HERO 3D CAR ===
(function () {
  'use strict';

  var viewer   = document.getElementById('heroCarViewer');
  var stage    = document.getElementById('heroCarStage');
  var heroSect = document.querySelector('.hero');
  var heroVis  = document.querySelector('.hero-visual');
  var haloEl   = document.querySelector('.hero-car-halo');

  if (!viewer || !heroSect) return;

  var noMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var TWO_PI   = Math.PI * 2;
  var RADIUS   = '93%';

  function lerp(a, b, t) { return a + (b - a) * t; }

  /* Ease cubic in-out — plus dramatique que quadratique pour le scroll */
  function easeCubic(t) {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  }

  /* Sinus normalisé 0→1 */
  function sn01(elapsed, period, phase) {
    return (1 + Math.sin(TWO_PI * elapsed / period + phase)) * 0.5;
  }

  /* =========================================================
     CONSTANTES
     ========================================================= */

  /* Idle */
  var FLOAT_AMP    = 7;
  var FLOAT_PERIOD = 6200;
  var FLOAT_PHASE  = 0;

  var SWAY_DEG     = 2.5;   /* ° max — met à 0 pour désactiver */
  var SWAY_PERIOD  = 10400;
  var SWAY_PHASE   = 1.3;

  var HALO_MIN     = 0.14;
  var HALO_MAX     = 0.28;
  var HALO_PERIOD  = 8600;
  var HALO_PHASE   = 2.7;

  var SHADOW_INT_DOWN  = 1.15;
  var SHADOW_INT_UP    = 0.55;
  var SHADOW_SOFT_DOWN = 0.50;
  var SHADOW_SOFT_UP   = 0.95;

  /* Caméra */
  var THETA_BASE = 30;    /* pose de repos : face gauche 3/4 */
  var THETA_OUT  = -15;   /* pose finale scroll : face avant */
  var FOV_IN     = 22;
  var FOV_OUT    = 28;
  var PHI_BASE   = 72;

  /* Flywheel — vitesses de lerp par frame (≈60fps) */
  var SMOOTH_SCROLL = 0.065;  /* suivi scroll : 90% atteint en ~570ms  */
  var SMOOTH_IDLE   = 0.032;  /* retour idle  : dérive douce ~1.3s     */

  /* =========================================================
     ÉTAT CAMÉRA (flywheel unifié idle + scroll)
     ========================================================= */
  var camTheta  = THETA_BASE;
  var camFOV    = FOV_IN;
  var camPhi    = PHI_BASE;
  var prevTheta = THETA_BASE;

  /* =========================================================
     BOUCLE PRINCIPALE (RAF pausable)
     ========================================================= */
  var idleRunning = false;
  var idleElapsed = 0;
  var idleLastTs  = null;
  var heroVisible = true;
  var scrollRaw   = 0;   /* mis à jour par le scroll handler */

  function idleTick(ts) {
    if (!idleRunning) { idleLastTs = null; return; }
    if (idleLastTs !== null) idleElapsed += ts - idleLastTs;
    idleLastTs = ts;
    var el = idleElapsed;

    /* — Lévitation — */
    var floatN = sn01(el, FLOAT_PERIOD, FLOAT_PHASE);
    if (stage) stage.style.transform = 'translateY(' + (-FLOAT_AMP * floatN).toFixed(2) + 'px)';

    /* — Ombre couplée (voiture haute = ombre légère/diffuse) — */
    viewer.setAttribute('shadow-intensity',
      lerp(SHADOW_INT_DOWN, SHADOW_INT_UP,   floatN).toFixed(3));
    viewer.setAttribute('shadow-softness',
      lerp(SHADOW_SOFT_DOWN, SHADOW_SOFT_UP, floatN).toFixed(3));

    /* — Halo — */
    if (haloEl) {
      var haloN = sn01(el, HALO_PERIOD, HALO_PHASE);
      haloEl.style.opacity = lerp(HALO_MIN, HALO_MAX, haloN).toFixed(3);
    }

    /* — Caméra : flywheel unifié scroll + sway — */
    if (scrollRaw > 0.01) {
      /* Mode scroll : camTheta/FOV suivent la position de scroll avec inertie */
      var t       = easeCubic(scrollRaw);
      var tgtTheta = lerp(THETA_BASE, THETA_OUT, t);
      var tgtFOV   = lerp(FOV_IN, FOV_OUT, t);
      camTheta = lerp(camTheta, tgtTheta, SMOOTH_SCROLL);
      camFOV   = lerp(camFOV,   tgtFOV,   SMOOTH_SCROLL * 1.3);
    } else {
      /* Mode idle : dérive douce vers le sway */
      var swayN    = Math.sin(TWO_PI * el / SWAY_PERIOD + SWAY_PHASE);
      var tgtTheta = THETA_BASE + (SWAY_DEG > 0 ? SWAY_DEG * swayN : 0);
      camTheta = lerp(camTheta, tgtTheta, SMOOTH_IDLE);
      camFOV   = lerp(camFOV,   FOV_IN,   SMOOTH_IDLE * 0.7);
    }

    /* Tilt phi dynamique : inclinaison légère quand la caméra tourne vite */
    var delta    = camTheta - prevTheta;
    prevTheta    = camTheta;
    var tgtPhi   = PHI_BASE + Math.min(Math.abs(delta) * 1.8, 3.5);
    camPhi       = lerp(camPhi, tgtPhi, 0.10);

    viewer.setAttribute('camera-orbit',
      camTheta.toFixed(2) + 'deg ' + camPhi.toFixed(2) + 'deg ' + RADIUS);
    viewer.setAttribute('field-of-view', camFOV.toFixed(2) + 'deg');

    requestAnimationFrame(idleTick);
  }

  function startIdle() {
    if (idleRunning || noMotion) return;
    idleRunning = true;
    idleLastTs  = null;
    requestAnimationFrame(idleTick);
  }
  function stopIdle() { idleRunning = false; }

  document.addEventListener('visibilitychange', function () {
    if (document.hidden) stopIdle();
    else if (heroVisible && heroVis.classList.contains('car-loaded')) startIdle();
  });

  /* =========================================================
     CHARGEMENT
     ========================================================= */
  viewer.addEventListener('error', function (e) {
    console.error('[Conduite2000] model-viewer erreur :', e.detail);
  });

  viewer.addEventListener('load', function () {
    heroVis.classList.add('car-loaded');
    if (noMotion) { if (haloEl) haloEl.style.opacity = '0.22'; return; }

    /* Settle : entre par la face avant, glisse vers la face gauche */
    viewer.setAttribute('camera-orbit', '8deg 76deg ' + RADIUS);
    var t0 = null;

    function settle(ts) {
      if (!t0) t0 = ts;
      var p  = Math.min(1, (ts - t0) / 1100);
      var e  = 1 - Math.pow(1 - p, 3);
      var th = lerp(8, THETA_BASE, e);
      var ph = lerp(76, PHI_BASE, e);
      /* Sync flywheel pour éviter un saut au démarrage de l'idle */
      camTheta = th; camPhi = ph; prevTheta = th;
      viewer.setAttribute('camera-orbit',
        th.toFixed(1) + 'deg ' + ph.toFixed(1) + 'deg ' + RADIUS);
      if (p < 1) requestAnimationFrame(settle);
      else startIdle();
    }
    setTimeout(function () { requestAnimationFrame(settle); }, 300);
  });

  if (noMotion) return;

  /* =========================================================
     SCROLL — met à jour scrollRaw uniquement (la caméra est gérée par idleTick)
     ========================================================= */
  var rafPending = false;

  var io = new IntersectionObserver(function (entries) {
    heroVisible = entries[0].isIntersecting;
    if (heroVisible && heroVis.classList.contains('car-loaded')) startIdle();
    else stopIdle();
  }, { rootMargin: '200px 0px 200px 0px' });
  io.observe(heroSect);

  function updateScrollRaw() {
    rafPending = false;
    if (!heroVisible) return;
    var rect = heroSect.getBoundingClientRect();
    var vh   = window.innerHeight;
    scrollRaw = Math.max(0, Math.min(1, -rect.top / Math.max(1, rect.height - vh)));
  }

  window.addEventListener('scroll', function () {
    if (!rafPending) { rafPending = true; requestAnimationFrame(updateScrollRaw); }
  }, { passive: true });

})();
// === FIN HERO 3D CAR ===

// ---------------- Agency V1 — parallax photo + 3D tilt ----------------
(function () {
  const cards = document.querySelectorAll(".agency.v-banner");
  if (!cards.length) return;

  // Scroll parallax: subtle vertical drift on the photo strip
  function updateParallax() {
    cards.forEach(function (card) {
      const img = card.querySelector(".agency-photo img");
      if (!img) return;
      const rect = card.getBoundingClientRect();
      const viewH = window.innerHeight;
      if (rect.bottom < -80 || rect.top > viewH + 80) return;
      const progress = (rect.top + rect.height / 2 - viewH / 2) / viewH;
      const offset = progress * 18;
      // translateY for parallax; scale kept at 1 (Ken Burns handles zoom)
      img.style.objectPosition = "center " + (50 + offset) + "%";
    });
  }
  window.addEventListener("scroll", updateParallax, { passive: true });
  updateParallax();

  // 3D tilt on mouse move
  cards.forEach(function (card) {
    card.addEventListener("mousemove", function (e) {
      const r = card.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width  - 0.5;
      const y = (e.clientY - r.top)  / r.height - 0.5;
      card.style.transform = "translateY(-5px) rotateY(" + (x * 6) + "deg) rotateX(" + (-y * 4) + "deg)";
    });
    card.addEventListener("mouseleave", function () {
      card.style.transition = "transform .7s cubic-bezier(.2,.7,.2,1), box-shadow .35s";
      card.style.transform = "";
      setTimeout(function () { card.style.transition = ""; }, 700);
    });
  });
})();
