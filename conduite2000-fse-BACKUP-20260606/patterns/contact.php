<?php
/**
 * Title: Contact — Formulaire de devis
 * Slug: conduite2000/contact
 * Description: Formulaire de demande de devis + coordonnées et réseaux sociaux
 * Categories: conduite2000
 * Keywords: contact, formulaire, devis, téléphone, email
 * Inserter: true
 */
?>
<!-- wp:group {"tagName":"section","anchor":"contact","className":"c2000-section","metadata":{"name":"08 Contact"},"layout":{"type":"default"}} -->
<section id="contact" class="wp-block-group c2000-section">
<!-- wp:group {"className":"container","layout":{"type":"default"}} -->
<div class="wp-block-group container">

<!-- wp:group {"className":"section-head","layout":{"type":"default"}} -->
<div class="wp-block-group section-head">
<!-- wp:paragraph {"className":"eyebrow"} -->
<p class="wp-block-paragraph eyebrow">06 — Contact</p>
<!-- /wp:paragraph -->
<!-- wp:heading {"level":2} -->
<h2 class="wp-block-heading">Une question&nbsp;?<br><span class="h-italic">Écrivons-nous</span>.</h2>
<!-- /wp:heading -->
</div>
<!-- /wp:group -->

<!-- wp:html -->
<div class="contact-grid">

  <form class="contact-form reveal" id="contactForm" method="post" action="/wp-admin/admin-post.php">
    <input type="hidden" name="action" value="c2000_contact">
    <input type="hidden" name="c2000_nonce" value="">
    <h3>Demander un devis</h3>
    <p class="sub">Réponse sous 24h ouvrées. Tous les champs marqués d'un * sont obligatoires.</p>
    <div class="form-grid">
      <div class="field"><label>Prénom *</label><input type="text" name="prenom" required /></div>
      <div class="field"><label>Nom *</label><input type="text" name="nom" required /></div>
      <div class="field"><label>Email *</label><input type="email" name="email" required /></div>
      <div class="field"><label>Téléphone</label><input type="tel" name="tel" /></div>
      <div class="field wide">
        <label>Formation qui vous intéresse</label>
        <select name="formation">
          <option>Permis traditionnel B</option>
          <option>Conduite accompagnée (AAC)</option>
          <option>Conduite supervisée</option>
          <option>Permis à 1€ par jour</option>
          <option>Forfait code seul</option>
          <option>Perfectionnement</option>
          <option>Je ne sais pas encore</option>
        </select>
      </div>
      <div class="field wide">
        <label>Agence préférée</label>
        <select name="agence">
          <option>Bourgbarré</option>
          <option>Orgères</option>
          <option>Indifférent</option>
        </select>
      </div>
      <div class="field wide">
        <label>Votre message *</label>
        <textarea name="message" required placeholder="Parlez-nous de votre projet, vos disponibilités, vos questions…"></textarea>
      </div>
    </div>
    <div class="form-foot">
      <small>En envoyant ce formulaire, vous acceptez que vos données soient utilisées uniquement pour répondre à votre demande.</small>
      <button type="submit" class="btn btn-primary">
        Envoyer le message
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
      </button>
    </div>
  </form>

  <aside class="contact-side">
    <div class="contact-card">
      <div class="ey">Le plus rapide</div>
      <div class="big">Appelez-nous au<br><span>06 19 02 28 32</span></div>
      <p style="margin-top:18px; color:rgba(255,255,255,.7); font-size:14px;">
        Un standard unique pour nos deux agences. Valérie ou un moniteur vous répond directement.
      </p>
      <div class="actu">
        <small>Actualité</small>
        <p><b style="color:white;">Inscriptions ouvertes</b> pour la rentrée. Permis à 1€ disponible toute l'année — n'hésitez pas à demander un devis.</p>
      </div>
    </div>

    <a class="contact-mini" href="https://www.instagram.com/conduite.2000/" target="_blank" rel="noopener">
      <div class="ico">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="22" height="22"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
      </div>
      <div><b>@conduite.2000</b><span>Suivez-nous sur Instagram</span></div>
    </a>

    <a class="contact-mini" href="https://facebook.com" target="_blank" rel="noopener">
      <div class="ico">
        <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"/></svg>
      </div>
      <div><b>Suivez-nous sur Facebook</b><span>Actualités, photos d'élèves, conseils</span></div>
    </a>

    <a class="contact-mini" href="mailto:contact@conduite2000.fr">
      <div class="ico" style="background:var(--ink);">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="22" height="22"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 7 10 7 10-7"/></svg>
      </div>
      <div><b>contact@conduite2000.fr</b><span>Réponse sous 24h ouvrées</span></div>
    </a>
  </aside>

</div>
<!-- /wp:html -->

</div>
<!-- /wp:group -->
</section>
<!-- /wp:group -->
