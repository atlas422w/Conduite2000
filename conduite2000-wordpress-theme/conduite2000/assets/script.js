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

      <h4>Comment en bénéficier&nbsp;?</h4>
      <p>Le candidat majeur contracte le prêt directement avec l'établissement financier. Trois possibilités :</p>
      <ul>
        <li>Justificatif de revenus suffisants pour rembourser 30€/mois</li>
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
