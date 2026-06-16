<?php
/**
 * Conduite 2000 — Front Page Template
 * Reproduit fidèlement le design original. Tout le contenu vient des champs ACF.
 */

/* ─────────────────────────────────────────
   HELPER : rendu des horaires d'une agence
───────────────────────────────────────── */
function c2000_render_hours( array $h, string $key, string $label ) : void {
    $closed  = ! empty( $h[ $key ]['closed'] );
    $slot1   = $h[ $key ]['slot_1'] ?? '';
    $slot2   = $h[ $key ]['slot_2'] ?? '';
    $class   = $closed ? 'h-row closed' : 'h-row';
    echo '<li class="' . $class . '"><i class="dot"></i>';
    echo '<span class="day">' . esc_html( $label ) . '</span>';
    if ( $closed ) {
        echo '<span class="slot-closed">Fermé</span>';
    } else {
        echo '<span class="slots">';
        if ( $slot1 ) echo '<span class="slot">' . esc_html( $slot1 ) . '</span>';
        if ( $slot2 ) echo '<span class="slot">' . esc_html( $slot2 ) . '</span>';
        echo '</span>';
    }
    echo '</li>';
}

/* ─────────────────────────────────────────
   RÉCUPÉRATION DES CHAMPS ACF (avec fallbacks)
───────────────────────────────────────── */
$phone     = get_field( 'c2000_phone' )     ?: '06 19 02 28 32';
$email     = get_field( 'c2000_email' )     ?: 'contact@conduite2000.fr';
$instagram = get_field( 'c2000_instagram' ) ?: 'https://www.instagram.com/conduite.2000/';
$facebook  = get_field( 'c2000_facebook' )  ?: 'https://facebook.com';

// Hero
$accent   = get_field( 'c2000_hero_accent' ) ?: 'sérénité';
$lede     = get_field( 'c2000_hero_lede' )   ?: 'Auto-école familiale en Ille-et-Vilaine. Un accompagnement <b>de A à Z</b>, une équipe restreinte et dédiée, et la gérante Valérie qui suit personnellement votre progression du début à la fin.';
$s1n      = get_field( 'c2000_s1_num' )   ?: '40';
$s1u      = get_field( 'c2000_s1_unit' )  ?: '+';
$s1l      = get_field( 'c2000_s1_label' ) ?: 'années d\'expérience';
$s2n      = get_field( 'c2000_s2_num' )   ?: '2';
$s2u      = get_field( 'c2000_s2_unit' )  ?: '';
$s2l      = get_field( 'c2000_s2_label' ) ?: 'agences à votre service';
$s3n      = get_field( 'c2000_s3_num' )   ?: '1';
$s3u      = get_field( 'c2000_s3_unit' )  ?: '€';
$s3l      = get_field( 'c2000_s3_label' ) ?: 'par jour, c\'est possible';

// About
$about_intro  = get_field( 'c2000_about_intro' )   ?: '<p>Conduite 2000 forme des conducteurs <b>depuis plus de 40 ans</b> avec sérieux, passion et expérience. Que vous débutiez, repreniez confiance ou souhaitiez vous perfectionner, notre équipe vous accompagne avec patience et professionnalisme. Avec nous, vous avancez sereinement, soutenu·e par une équipe proche de vous et engagée à vos côtés.</p>';
$team_members = get_field( 'c2000_team' ) ?: [];
$partner_name = get_field( 'c2000_partner_name' ) ?: 'Easy Web';
$partner_desc = get_field( 'c2000_partner_desc' ) ?: 'Plateforme en ligne simple et flexible pour réviser le code à votre rythme, 24h/24.';

// Agencies
$agencies_raw = get_field( 'c2000_agencies' ) ?: [];

// Formations
$formations_raw = get_field( 'c2000_formations' ) ?: [];

// Tarifs
$tarifs_raw        = get_field( 'c2000_tarifs' ) ?: [];
$tarif_extra_label = get_field( 'c2000_tarif_extra_label' ) ?: 'Conduite traditionnelle sans code';
$tarif_extra_price = get_field( 'c2000_tarif_extra_price' ) ?: '1 266€ &nbsp;•&nbsp; à partir de 318€ sans frais';

// Contact
$contact_news = get_field( 'c2000_contact_news' ) ?: '<p><b style="color:white;">Inscriptions ouvertes</b> pour la rentrée. Permis à 1€ disponible toute l\'année — n\'hésitez pas à demander un devis.</p>';

/* ─────────────────────────────────────────
   DONNÉES PAR DÉFAUT (si ACF vide)
───────────────────────────────────────── */
if ( empty( $agencies_raw ) ) {
    $agencies_raw = [
        [
            'number'   => '01',
            'name'     => 'Bourgbarré',
            'street'   => 'Centre commercial du Pont du Gué',
            'zip_city' => '35230 Bourgbarré',
            'phone'    => '06 19 02 28 32',
            'hours'    => [
                'ag_lundi'    => [ 'closed' => true,  'slot_1' => '', 'slot_2' => '' ],
                'ag_mardi'    => [ 'closed' => true,  'slot_1' => '', 'slot_2' => '' ],
                'ag_mercredi' => [ 'closed' => false, 'slot_1' => '18:00 — 19:00', 'slot_2' => '' ],
                'ag_jeudi'    => [ 'closed' => false, 'slot_1' => '09:00 — 12:00', 'slot_2' => '14:00 — 19:00' ],
                'ag_vendredi' => [ 'closed' => false, 'slot_1' => '09:00 — 13:00', 'slot_2' => '14:00 — 18:00' ],
                'ag_samedi'   => [ 'closed' => false, 'slot_1' => '11:00 — 12:00', 'slot_2' => '' ],
                'ag_dimanche' => [ 'closed' => true,  'slot_1' => '', 'slot_2' => '' ],
            ],
        ],
        [
            'number'   => '02',
            'name'     => 'Orgères',
            'street'   => '36, rue de Rennes',
            'zip_city' => '35230 Orgères',
            'phone'    => '06 19 02 28 32',
            'hours'    => [
                'ag_lundi'    => [ 'closed' => true,  'slot_1' => '', 'slot_2' => '' ],
                'ag_mardi'    => [ 'closed' => false, 'slot_1' => '19:00 — 20:00', 'slot_2' => '' ],
                'ag_mercredi' => [ 'closed' => false, 'slot_1' => '19:00 — 20:00', 'slot_2' => '' ],
                'ag_jeudi'    => [ 'closed' => false, 'slot_1' => '19:15 — 20:15', 'slot_2' => '' ],
                'ag_vendredi' => [ 'closed' => true,  'slot_1' => '', 'slot_2' => '' ],
                'ag_samedi'   => [ 'closed' => false, 'slot_1' => '12:00 — 13:00', 'slot_2' => '' ],
                'ag_dimanche' => [ 'closed' => true,  'slot_1' => '', 'slot_2' => '' ],
            ],
        ],
    ];
}

if ( empty( $formations_raw ) ) {
    $formations_raw = [
        [ 'icon' => 'AAC', 'num' => 'F.01 / Formation phare', 'title' => 'Conduite accompagnée (AAC)',
          'summary' => 'Dès 17 ans. La voie que nous préconisons : 25h de cours encadrés, puis 3000 km en compagnie d\'un proche pour engranger expérience et confiance.',
          'bullets' => "17 ans · 15 ans pour l'examen théorique\n≈ 25h de conduite encadrée\n3000 km · 2 rendez-vous pédagogiques\nAvenant assurance obligatoire",
          'duration' => '15–18 mois', 'modal_id' => 'aac', 'badge' => '', 'css_class' => 'f-1' ],
        [ 'icon' => 'B', 'num' => 'F.02', 'title' => 'Permis traditionnel',
          'summary' => 'Permis B classique. Véhicules ≤ 3 500 kg. 40 questions au code, 32 min d\'épreuve pratique avec freinage et marche arrière.',
          'bullets' => "18 ans · 17 ans pour le code\nCode : 35/40 minimum\nÉpreuve pratique : 32 minutes",
          'duration' => '6–9 mois', 'modal_id' => 'permisB', 'badge' => '', 'css_class' => 'f-2' ],
        [ 'icon' => '€', 'num' => 'F.03 · Aide d\'État', 'title' => 'Permis à 1€ par jour',
          'summary' => 'Un prêt à taux zéro pour les 15–25 ans. L\'État paie les intérêts, vous remboursez 30€ par mois. Le coût total ne change pas.',
          'bullets' => "15 à 25 ans révolus\nPermis B ou A (> 125 cm³)\nCaution parentale ou co-emprunt",
          'duration' => 'Étalé sur 3 à 5 ans', 'modal_id' => 'permis1euro', 'badge' => '', 'css_class' => 'f-3' ],
        [ 'icon' => 'CS', 'num' => 'F.04', 'title' => 'Conduite supervisée',
          'summary' => 'L\'alternative à l\'AAC pour les majeurs : après un échec à l\'examen ou en formation initiale. 30h de conduite puis km supervisés.',
          'bullets' => "Pour les 18 ans et plus\n≈ 30h de conduite\nRDV préalable recommandé",
          'duration' => 'Sur mesure', 'modal_id' => 'supervisee', 'badge' => '', 'css_class' => 'f-4' ],
        [ 'icon' => 'P+', 'num' => 'F.05', 'title' => 'Perfectionnement',
          'summary' => 'Bilan post-permis pour novices, réactualisation pour aguerris. Sur rendez-vous, à la carte. Prise en charge possible par votre assurance.',
          'bullets' => '', 'duration' => 'Volontaire', 'modal_id' => 'perfectionnement', 'badge' => '', 'css_class' => 'f-5' ],
    ];
}

if ( empty( $tarifs_raw ) ) {
    $tarifs_raw = [
        [ 'title' => 'Conduite accompagnée', 'subtitle' => 'avec code · forfait complet', 'price' => '1 784',
          'price_note' => 'à partir de 568€ sans frais', 'badge' => 'Recommandé', 'featured' => false, 'footer_note' => '',
          'items' => [
            [ 'label' => 'Frais de gestion', 'price' => '50€' ],
            [ 'label' => '20h de conduite', 'price' => '1 040€' ],
            [ 'label' => '2 RDV préalables (2×1h)', 'price' => '104€' ],
            [ 'label' => '2 RDV pédagogiques (2×1h)', 'price' => '176€' ],
            [ 'label' => 'Accompagnement examen', 'price' => '52€' ],
            [ 'label' => 'Évaluation (1h)', 'price' => '52€' ],
            [ 'label' => 'Forfait code', 'price' => '310€' ],
          ] ],
        [ 'title' => 'Conduite accompagnée', 'subtitle' => 'sans code · vous avez déjà le code', 'price' => '1 548',
          'price_note' => 'à partir de 471€ sans frais', 'badge' => 'AAC', 'featured' => false, 'footer_note' => '',
          'items' => [
            [ 'label' => 'Frais de gestion', 'price' => '100€' ],
            [ 'label' => '20h de conduite', 'price' => '1 060€' ],
            [ 'label' => '2 RDV préalables (2×1h)', 'price' => '106€' ],
            [ 'label' => '2 RDV pédagogiques (2×1h)', 'price' => '176€' ],
            [ 'label' => 'Accompagnement examen', 'price' => '53€' ],
            [ 'label' => 'Évaluation (1h)', 'price' => '53€' ],
          ] ],
        [ 'title' => 'Conduite traditionnelle', 'subtitle' => 'avec code · forfait complet', 'price' => '1 504',
          'price_note' => 'à partir de 416€ sans frais', 'badge' => 'B', 'featured' => true, 'footer_note' => '',
          'items' => [
            [ 'label' => 'Frais de gestion', 'price' => '50€' ],
            [ 'label' => '20h de conduite', 'price' => '1 040€' ],
            [ 'label' => 'Accompagnement examen', 'price' => '52€' ],
            [ 'label' => 'Évaluation (1h)', 'price' => '52€' ],
            [ 'label' => 'Forfait code', 'price' => '310€' ],
          ] ],
        [ 'title' => 'Forfait code seul', 'subtitle' => 'code en salle + en ligne 6 mois', 'price' => '310',
          'price_note' => 'tout compris', 'badge' => 'Code', 'featured' => false,
          'footer_note' => 'Évaluation 52€ et heure de conduite supp. 52€ non incluses. Évaluation obligatoire avant toute formation.',
          'items' => [
            [ 'label' => 'Frais de gestion (ANTS, Rapido)', 'price' => '50€' ],
            [ 'label' => 'Forfait code en salle', 'price' => '150€' ],
            [ 'label' => 'Kit pédagogique', 'price' => '70€' ],
            [ 'label' => 'Code en ligne 6 mois', 'price' => '40€' ],
          ] ],
    ];
}

// Team members fallback
if ( empty( $team_members ) ) {
    $team_members = [
        [ 'name' => 'Valérie', 'role' => 'gérante',    'photo' => get_template_directory_uri() . '/Images/images (2).jpeg', 'initial' => 'V' ],
        [ 'name' => 'Moniteur 1', 'role' => 'enseignant', 'photo' => '', 'initial' => 'M' ],
        [ 'name' => 'Moniteur 2', 'role' => 'enseignant', 'photo' => '', 'initial' => 'M' ],
    ];
}

$uri = get_template_directory_uri();
?>
<!doctype html>
<html lang="fr">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width,initial-scale=1" />
<?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<div class="ambient" aria-hidden="true"></div>
<div class="grain" aria-hidden="true"></div>

<!-- ==================== NAV ==================== -->
<header class="nav" data-screen-label="Nav">
  <div class="nav-inner">
    <a href="#top" class="nav-brand">
      <img src="<?= $uri ?>/assets/logo.png" alt="Conduite 2000" />
      <div>
        <b>Conduite 2000</b>
        <span>Depuis 1984</span>
      </div>
    </a>
    <nav class="nav-links">
      <a href="#about">À propos</a>
      <a href="#agences">Agences</a>
      <a href="#formations">Formations</a>
      <a href="#tarifs">Tarifs</a>
      <a href="#contact">Contact</a>
    </nav>
    <a href="tel:<?= preg_replace('/\s/', '', $phone) ?>" class="nav-cta">
      <span class="dot"></span>
      <span><?= esc_html( $phone ) ?></span>
    </a>
    <button class="nav-burger" id="navBurger" aria-label="Ouvrir le menu">
      <span></span><span></span><span></span>
    </button>
  </div>
  <div class="nav-mobile-menu" id="navMobileMenu">
    <nav class="nav-mobile-links">
      <a href="#about"><span class="nav-mobile-num">01</span>À propos</a>
      <a href="#agences"><span class="nav-mobile-num">02</span>Agences</a>
      <a href="#formations"><span class="nav-mobile-num">03</span>Formations</a>
      <a href="#tarifs"><span class="nav-mobile-num">04</span>Tarifs</a>
      <a href="#contact"><span class="nav-mobile-num">05</span>Contact</a>
    </nav>
    <div class="nav-mobile-divider"></div>
    <a class="nav-mobile-cta" href="tel:<?= preg_replace('/\s/', '', $phone) ?>">
      <span class="dot"></span>
      <?= esc_html( $phone ) ?>
    </a>
  </div>
</header>

<main id="top">

<!-- ==================== HERO ==================== -->
<section class="hero" data-screen-label="01 Hero">
  <div class="container hero-grid">
    <div class="hero-left">
      <div class="hero-tag">
        <b>EST. 1984</b>
        <span>40+ années d'expertise &nbsp;•&nbsp; Bourgbarré · Orgères</span>
      </div>
      <h1>
        Apprendre à<br/>
        conduire avec<br/>
        <span class="accent"><?= esc_html( $accent ) ?></span>.
        <span class="since">Conduite 2000 vous forme à la conduite depuis 1984.</span>
      </h1>
      <p class="hero-lede"><?= wp_kses_post( $lede ) ?></p>
      <div class="hero-actions">
        <a class="btn btn-primary" href="#contact">
          Demander un devis
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
        </a>
        <a class="btn btn-ghost" href="#formations">Voir les formations</a>
      </div>
      <div class="hero-stats">
        <div>
          <b><?= esc_html( $s1n ) ?><?php if ( $s1u ) : ?><span class="unit"><?= esc_html( $s1u ) ?></span><?php endif; ?></b>
          <span><?= esc_html( $s1l ) ?></span>
        </div>
        <div>
          <b><?= esc_html( $s2n ) ?><?php if ( $s2u ) : ?><span class="unit"><?= esc_html( $s2u ) ?></span><?php endif; ?></b>
          <span><?= esc_html( $s2l ) ?></span>
        </div>
        <div>
          <b><?= esc_html( $s3n ) ?><?php if ( $s3u ) : ?><span class="unit"><?= esc_html( $s3u ) ?></span><?php endif; ?></b>
          <span><?= esc_html( $s3l ) ?></span>
        </div>
      </div>
    </div>

    <div class="hero-visual" aria-hidden="true">
      <div class="hero-card hero-card-1">
        <div class="icon">B</div>
        <div><b>Permis B</b><span>Traditionnel · AAC · Supervisée</span></div>
      </div>
      <div class="hero-card hero-card-2">
        <div class="icon dark">€</div>
        <div><b>Permis à 1€/jour</b><span>15–25 ans · sans intérêts</span></div>
      </div>
      <div class="scene">
        <div class="scene-pad"></div>
        <div class="building b1"></div><div class="building b2"></div>
        <div class="building b3"></div><div class="building b4"></div>
        <div class="tree t1"></div><div class="tree t2"></div>
        <div class="tree t3"></div><div class="tree t4"></div>
        <div class="road"><div class="center"></div></div>
        <div class="car car-1"></div><div class="car car-2"></div><div class="car car-3"></div>
      </div>
    </div>
  </div>
</section>

<!-- ==================== MARQUEE ==================== -->
<div class="marquee" aria-hidden="true">
  <div class="marquee-track">
    <span>Permis B&nbsp;</span><span>Conduite Accompagnée</span><span>Conduite Supervisée</span><span>Permis à 1€/jour</span><span>Code en salle &amp; en ligne</span><span>Perfectionnement</span><span>Bourgbarré · Orgères</span>
    <span>Permis B&nbsp;</span><span>Conduite Accompagnée</span><span>Conduite Supervisée</span><span>Permis à 1€/jour</span><span>Code en salle &amp; en ligne</span><span>Perfectionnement</span><span>Bourgbarré · Orgères</span>
  </div>
</div>

<!-- ==================== ABOUT ==================== -->
<section id="about" data-screen-label="02 À propos">
  <div class="container">
    <div class="section-head">
      <span class="eyebrow">01 — Qui sommes-nous</span>
      <h2>Une équipe humaine,<br/>une expertise <span class="h-italic">de quatre décennies</span>.</h2>
    </div>

    <div class="about-bento">
      <div class="bento lead glass">
        <?= wp_kses_post( $about_intro ) ?>
        <div style="display:flex; gap:14px; align-items:center; margin-top:24px;">
          <div style="display:flex; gap:-8px;">
            <?php foreach ( $team_members as $i => $m ) :
                $ml = $i > 0 ? 'margin-left:-12px;' : '';
                if ( ! empty( $m['photo'] ) ) : ?>
                  <div style="width:42px;height:42px;border-radius:50%;border:2px solid white;overflow:hidden;<?= $ml ?>">
                    <img src="<?= esc_url( $m['photo'] ) ?>" alt="<?= esc_attr( $m['name'] ) ?>" style="width:100%;height:100%;object-fit:cover;">
                  </div>
                <?php else :
                    $bg = $i === 1 ? 'linear-gradient(135deg,#C1272D,#8a1c21)' : 'linear-gradient(135deg,#1a1a1a,#0a0a0a)'; ?>
                  <div style="width:42px;height:42px;border-radius:50%;background:<?= $bg ?>;border:2px solid white;<?= $ml ?>;display:grid;place-items:center;font-weight:700;color:white;">
                    <?= esc_html( $m['initial'] ?: substr( $m['name'], 0, 1 ) ) ?>
                  </div>
                <?php endif; ?>
            <?php endforeach; ?>
          </div>
          <div style="font-size:13px; color:var(--muted);">
            <b style="color:var(--ink); font-family:'Bricolage Grotesque';">Valérie &amp; 2 moniteurs</b><br/>
            Une équipe restreinte qui vous connaît
          </div>
        </div>
      </div>

      <div class="bento value glass">
        <div class="value-row">
          <span class="num">01</span>
          <div><b>De A à Z</b><p>De l'inscription au permis définitif : aucune étape oubliée, jamais.</p></div>
        </div>
        <div class="value-row">
          <span class="num">02</span>
          <div><b>Humain avant tout</b><p>Une équipe restreinte. On vous reconnaît, on vous écoute.</p></div>
        </div>
        <div class="value-row">
          <span class="num">03</span>
          <div><b>40 ans d'expertise</b><p>Notre maison forme des conducteurs sereins depuis 1984.</p></div>
        </div>
      </div>

      <div class="bento team glass">
        <h3>Une équipe à taille humaine.</h3>
        <p style="font-size:14px; color:var(--muted); margin-top:8px;">Vous êtes suivi·e du début à la fin par les mêmes personnes.</p>
        <div class="team-grid">
          <?php foreach ( $team_members as $m ) : ?>
          <div class="team-card">
            <div class="avatar">
              <?php if ( ! empty( $m['photo'] ) ) : ?>
                <img src="<?= esc_url( $m['photo'] ) ?>" alt="<?= esc_attr( $m['name'] ) ?>" style="width:100%;height:100%;object-fit:cover;">
              <?php else : ?>
                <b><?= esc_html( $m['initial'] ?: substr( $m['name'], 0, 1 ) ) ?></b>
              <?php endif; ?>
            </div>
            <div class="name"><?= esc_html( $m['name'] ) ?></div>
            <div class="role"><?= esc_html( $m['role'] ) ?></div>
          </div>
          <?php endforeach; ?>
        </div>
      </div>

      <div class="bento partner glass">
        <span class="eyebrow" style="margin-bottom:14px;">Partenaire code</span>
        <h3 style="font-size:24px;"><?= esc_html( $partner_name ) ?></h3>
        <p style="font-size:14px; color:var(--muted); margin-top:10px;"><?= esc_html( $partner_desc ) ?></p>
        <div style="margin-top:18px; padding:14px 16px; border-radius:14px; background:rgba(193,39,45,.08); display:flex; align-items:center; gap:12px;">
          <div style="width:36px;height:36px;border-radius:10px;background:var(--red);color:white;display:grid;place-items:center;font-weight:700;font-family:'Bricolage Grotesque';">W</div>
          <span style="font-size:13px;">Accès code en ligne <b>6 mois</b> inclus dans le forfait</span>
        </div>
      </div>

      <div class="bento cta">
        <div>
          <span class="eyebrow" style="color:#ffb4b4;">04</span>
          <h3 style="margin-top:12px;">Une question&nbsp;? Appelez-nous.</h3>
        </div>
        <a class="arrow" href="tel:<?= preg_replace('/\s/', '', $phone) ?>" style="color:var(--red);">→</a>
      </div>
    </div>
  </div>
</section>

<!-- ==================== AGENCIES ==================== -->
<section id="agences" data-screen-label="03 Agences">
  <div class="container">
    <div class="section-head">
      <span class="eyebrow">02 — Nos agences</span>
      <h2>Deux pôles, <span class="h-italic">une même équipe</span>.</h2>
      <p style="font-size:17px; color:var(--muted); max-width:540px;">
        Conduite 2000 vous accueille à Bourgbarré et à Orgères. Mêmes moniteurs, mêmes tarifs, même engagement.
      </p>
    </div>

    <div class="agencies-grid">
    <?php foreach ( $agencies_raw as $ag ) :
        $ag_phone = ! empty( $ag['phone'] ) ? $ag['phone'] : $phone;
        $hours    = $ag['hours'] ?? [];
        $days_map = [
            'ag_lundi' => 'Lundi', 'ag_mardi' => 'Mardi', 'ag_mercredi' => 'Mercredi',
            'ag_jeudi' => 'Jeudi', 'ag_vendredi' => 'Vendredi', 'ag_samedi' => 'Samedi', 'ag_dimanche' => 'Dimanche',
        ];
    ?>
      <article class="agency reveal">
        <div class="pin">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s-7-7.5-7-13a7 7 0 1 1 14 0c0 5.5-7 13-7 13z"/><circle cx="12" cy="9" r="2.5"/></svg>
        </div>
        <div class="city">Agence n° <?= esc_html( $ag['number'] ) ?></div>
        <h3><?= esc_html( $ag['name'] ) ?></h3>
        <div class="addr">
          <div>
            <span class="lbl">Adresse</span>
            <div><?= esc_html( $ag['street'] ) ?><br/><?= esc_html( $ag['zip_city'] ) ?></div>
          </div>
          <div>
            <span class="lbl">Horaires</span>
            <ul class="hours-list">
              <?php foreach ( $days_map as $key => $label ) :
                  c2000_render_hours( $hours, $key, $label );
              endforeach; ?>
            </ul>
          </div>
        </div>
        <a class="agency-phone" href="tel:<?= preg_replace('/\s/', '', $ag_phone) ?>">
          <span>
            <span style="display:block; font-family:'JetBrains Mono'; font-size:11px; text-transform:uppercase; letter-spacing:.12em; opacity:.7;">Appeler l'agence</span>
            <b><?= esc_html( $ag_phone ) ?></b>
          </span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.9.36 1.78.7 2.6a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.48-1.27a2 2 0 0 1 2.11-.45c.82.34 1.7.57 2.6.7A2 2 0 0 1 22 16.92z"/></svg>
        </a>
      </article>
    <?php endforeach; ?>
    </div>
  </div>
</section>

<!-- ==================== FORMATIONS ==================== -->
<section id="formations" data-screen-label="04 Formations">
  <div class="container">
    <div class="section-head">
      <span class="eyebrow">03 — Formations disponibles</span>
      <h2>La bonne formule, <span class="h-italic">pour chaque parcours</span>.</h2>
      <p style="font-size:17px; color:var(--muted); max-width:600px;">
        Cinq formations pour répondre à tous les profils. Cliquez sur une carte pour le détail complet, ou téléchargez la fiche en PDF.
      </p>
    </div>

    <div class="formations-grid">
    <?php foreach ( $formations_raw as $f ) :
        $bullets = ! empty( $f['bullets'] ) ? array_filter( explode( "\n", $f['bullets'] ) ) : [];
        $css     = ! empty( $f['css_class'] ) ? ' ' . esc_attr( $f['css_class'] ) : '';
        $mid     = ! empty( $f['modal_id'] ) ? ' data-modal="' . esc_attr( $f['modal_id'] ) . '"' : '';
    ?>
      <article class="formation<?= $css ?>"<?= $mid ?>>
        <div class="f-icon"><?= esc_html( $f['icon'] ) ?></div>
        <div class="num"><?= esc_html( $f['num'] ) ?></div>
        <h3><?= esc_html( $f['title'] ) ?></h3>
        <p class="summary"><?= esc_html( $f['summary'] ) ?></p>
        <?php if ( ! empty( $bullets ) ) : ?>
        <ul>
          <?php foreach ( $bullets as $b ) : ?><li><?= esc_html( trim( $b ) ) ?></li><?php endforeach; ?>
        </ul>
        <?php endif; ?>
        <div class="meta">
          <span><?= esc_html( $f['duration'] ) ?></span>
          <span class="read-more">Détails<?= ! empty( $f['modal_id'] ) ? ' &amp; PDF' : '' ?> →</span>
        </div>
      </article>
    <?php endforeach; ?>
    </div>
  </div>
</section>

<!-- ==================== PERMIS 1€ ==================== -->
<section data-screen-label="05 Permis 1€">
  <div class="container">
    <div class="perm1 reveal">
      <div class="perm1-grid">
        <div>
          <span class="eyebrow">Aide financière de l'État</span>
          <h2 style="margin-top:14px;">
            <span class="num">1€</span>
            par jour,<br/>pour décrocher<br/>votre permis.
          </h2>
          <p>
            Un prêt à taux zéro mis en place par l'État pour les 15–25 ans.
            L'établissement financier avance le montant, l'État paie les intérêts.
            Vous remboursez <b style="color:white;">30€ par mois</b>, simplement.
          </p>
          <div class="actions">
            <button class="btn btn-primary" data-modal="permis1euro">
              Comment en bénéficier&nbsp;?
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
            </button>
            <a class="btn btn-ghost" style="background:rgba(255,255,255,.1); color:white; border-color:rgba(255,255,255,.2);" href="#contact">Nous contacter</a>
          </div>
        </div>
        <div class="facts">
          <div class="fact"><b>30<span class="unit">€</span></b><span>de remboursement / mois</span></div>
          <div class="fact"><b>15–25<span class="unit"> ans</span></b><span>tranche d'âge éligible</span></div>
          <div class="fact full">
            <ul>
              <li>Prêt de <b style="color:white;">800€</b> à <b style="color:white;">1 200€</b>, remboursable en <b style="color:white;">40</b> mois</li>
              <li>Catégorie B (véhicules légers) ou A (&gt; 125 cm³)</li>
              <li>Caution parentale, co-emprunt ou caution publique possibles</li>
              <li>Première inscription en école de conduite partenaire</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ==================== TARIFS ==================== -->
<section id="tarifs" data-screen-label="06 Tarifs">
  <div class="container">
    <div class="section-head">
      <span class="eyebrow">04 — Tarifs</span>
      <h2>Des tarifs clairs, <span class="h-italic">sans surprise</span>.</h2>
      <p style="font-size:17px; color:var(--muted); max-width:600px;">
        Voici nos quatre formules principales. Le détail complet (RDV pédagogiques, examens, kit code…) est repris dans la grille téléchargeable.
      </p>
    </div>

    <div class="tarifs-grid">
    <?php foreach ( $tarifs_raw as $t ) :
        $featured = ! empty( $t['featured'] );
        $art_class = $featured ? ' featured' : '';
        $badge_style = $featured ? ' style="background:rgba(255,255,255,.15); color:white;"' : ( $t['badge'] === 'Recommandé' ? ' style=""' : '' );
        $badge_class = $t['badge'] === 'Recommandé' ? 'badge red' : 'badge';
    ?>
      <article class="tarif<?= $art_class ?>">
        <div class="top">
          <div>
            <h3><?= esc_html( $t['title'] ) ?></h3>
            <div class="sub"><?= esc_html( $t['subtitle'] ) ?></div>
          </div>
          <?php if ( ! empty( $t['badge'] ) ) : ?>
          <span class="<?= $badge_class ?>"<?= $badge_style ?>><?= esc_html( $t['badge'] ) ?></span>
          <?php endif; ?>
        </div>
        <div class="price">
          <b><span class="euro">€</span><?= esc_html( $t['price'] ) ?></b>
          <span class="note"><?= esc_html( $t['price_note'] ) ?></span>
        </div>
        <?php if ( ! empty( $t['items'] ) ) : ?>
        <ul>
          <?php foreach ( $t['items'] as $item ) : ?>
          <li><span><?= esc_html( $item['label'] ) ?></span><span><?= esc_html( $item['price'] ) ?></span></li>
          <?php endforeach; ?>
        </ul>
        <?php endif; ?>
        <?php if ( ! empty( $t['footer_note'] ) ) : ?>
        <div class="note-foot"><?= esc_html( $t['footer_note'] ) ?></div>
        <?php endif; ?>
      </article>
    <?php endforeach; ?>
    </div>

    <div class="tarifs-foot">
      <div>
        <b><?= esc_html( $tarif_extra_label ) ?></b>
        <span style="display:block; color:var(--muted); margin-top:4px;"><?= wp_kses_post( $tarif_extra_price ) ?></span>
      </div>
      <a class="btn btn-dark" href="#" data-modal="tarifs">
        Grille tarifaire complète (PDF)
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
      </a>
    </div>
  </div>
</section>

<!-- ==================== DOCUMENTS + LABEL ==================== -->
<section data-screen-label="07 Docs & label">
  <div class="container">
    <div class="section-head">
      <span class="eyebrow">05 — Inscription &amp; labellisation</span>
      <h2>Préparez votre dossier <span class="h-italic">en quelques minutes</span>.</h2>
    </div>

    <div class="docs-grid">
      <div class="docs reveal">
        <h3>Documents à fournir</h3>
        <p style="margin-top:8px; color:var(--muted); font-size:14px;">Liste pour mineur — la liste majeure est identique sans les pièces parentales.</p>
        <ul>
          <li><span class="check">✓</span>Carte d'identité élève (recto-verso)</li>
          <li><span class="check">✓</span>Attestation de recensement ou JDC</li>
          <li><span class="check">✓</span>Carte d'identité d'un parent (recto-verso)</li>
          <li><span class="check">✓</span>4 photos numérisées agréées ANTS</li>
          <li><span class="check">✓</span>Attestation d'hébergement (à télécharger)</li>
          <li><span class="check">✓</span>Mandat ANTS (à télécharger)</li>
          <li><span class="check">✓</span>Justificatif de domicile (&lt; 6 mois)</li>
          <li><span class="check">✓</span>Photocopie ASSR2 et BSR si obtention</li>
          <li><span class="check">✓</span>Avenant à l'assurance (pour AAC)</li>
        </ul>
        <div class="download-row">
          <a class="btn btn-primary" href="#" data-modal="docs">
            Attestation d'hébergement (PDF)
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
          </a>
          <a class="btn btn-ghost" href="#" data-modal="docs">
            Mandat ANTS (PDF)
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
          </a>
        </div>
      </div>

      <div class="label reveal">
        <div class="stamp">QE</div>
        <h3>Auto-école labellisée Qualité.</h3>
        <p>
          Notre engagement dans une démarche qualité reconnue par l'État.
          Une garantie de transparence sur les tarifs, les volumes horaires et le suivi pédagogique.
        </p>
        <div class="label-tags">
          <span>Permis à 1€ partenaire</span>
          <span>Transparence tarifaire</span>
          <span>Suivi pédagogique</span>
          <span>Formation continue moniteurs</span>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ==================== CONTACT ==================== -->
<section id="contact" data-screen-label="08 Contact">
  <div class="container">
    <div class="section-head">
      <span class="eyebrow">06 — Contact</span>
      <h2>Une question&nbsp;?<br/><span class="h-italic">Écrivons-nous</span>.</h2>
    </div>

    <div class="contact-grid">
      <form class="contact-form reveal" id="contactForm" method="post" action="<?= esc_url( admin_url('admin-post.php') ) ?>">
        <?php wp_nonce_field( 'c2000_contact_form', 'c2000_nonce' ); ?>
        <input type="hidden" name="action" value="c2000_contact">
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
          <div class="big">Appelez-nous au<br/><span><?= esc_html( $phone ) ?></span></div>
          <p style="margin-top:18px; color:rgba(255,255,255,.7); font-size:14px;">
            Un standard unique pour nos deux agences. Valérie ou un moniteur vous répond directement.
          </p>
          <div class="actu">
            <small>Actualité</small>
            <?= wp_kses_post( $contact_news ) ?>
          </div>
        </div>

        <a class="contact-mini" href="<?= esc_url( $instagram ) ?>" target="_blank" rel="noopener">
          <div class="ico">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="22" height="22"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
          </div>
          <div><b>@conduite.2000</b><span>Suivez-nous sur Instagram</span></div>
        </a>

        <a class="contact-mini" href="<?= esc_url( $facebook ) ?>" target="_blank" rel="noopener">
          <div class="ico">
            <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"/></svg>
          </div>
          <div><b>Suivez-nous sur Facebook</b><span>Actualités, photos d'élèves, conseils</span></div>
        </a>

        <a class="contact-mini" href="mailto:<?= esc_attr( $email ) ?>">
          <div class="ico" style="background:var(--ink);">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="22" height="22"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 7 10 7 10-7"/></svg>
          </div>
          <div><b><?= esc_html( $email ) ?></b><span>Réponse sous 24h ouvrées</span></div>
        </a>
      </aside>
    </div>
  </div>
</section>

</main>

<!-- ==================== FOOTER ==================== -->
<footer class="footer">
  <div class="container">
    <div class="footer-grid">
      <div class="footer-brand">
        <div class="logo-row">
          <img src="<?= $uri ?>/assets/logo.png" alt="Conduite 2000" />
          <div>
            <b>Conduite 2000</b>
            <div style="font-family:'JetBrains Mono'; font-size:11px; color:var(--muted); letter-spacing:.08em; text-transform:uppercase; margin-top:2px;">Auto-école depuis 1984</div>
          </div>
        </div>
        <p>Une équipe humaine au service de votre permis, sur deux agences en Ille-et-Vilaine.</p>
        <div class="footer-socials">
          <a href="<?= esc_url( $facebook ) ?>" target="_blank" rel="noopener" aria-label="Facebook">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"/></svg>
          </a>
          <a href="<?= esc_url( $instagram ) ?>" target="_blank" rel="noopener" aria-label="Instagram">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
          </a>
          <a href="tel:<?= preg_replace('/\s/', '', $phone) ?>" aria-label="Téléphone">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.9.36 1.78.7 2.6a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.48-1.27a2 2 0 0 1 2.11-.45c.82.34 1.7.57 2.6.7A2 2 0 0 1 22 16.92z"/></svg>
          </a>
          <a href="mailto:<?= esc_attr( $email ) ?>" aria-label="Email">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 7 10 7 10-7"/></svg>
          </a>
        </div>
      </div>
      <div>
        <h4>Navigation</h4>
        <ul>
          <li><a href="#about">À propos</a></li>
          <li><a href="#agences">Nos agences</a></li>
          <li><a href="#formations">Formations</a></li>
          <li><a href="#tarifs">Tarifs</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
      <?php foreach ( $agencies_raw as $ag ) : ?>
      <div>
        <h4><?= esc_html( $ag['name'] ) ?></h4>
        <ul>
          <li><?= esc_html( $ag['street'] ) ?></li>
          <li><?= esc_html( $ag['zip_city'] ) ?></li>
          <li><a href="tel:<?= preg_replace('/\s/', '', $ag['phone'] ?: $phone) ?>"><?= esc_html( $ag['phone'] ?: $phone ) ?></a></li>
        </ul>
      </div>
      <?php endforeach; ?>
    </div>
    <div class="footer-bottom">
      <span>© <?= date('Y') ?> Conduite 2000 — Tous droits réservés</span>
      <span>Permis à 1€ par jour · Auto-école labellisée</span>
    </div>
  </div>
</footer>

<!-- ==================== MODAL ==================== -->
<div class="modal-overlay" id="modalOverlay" aria-hidden="true">
  <div class="modal" role="dialog" aria-modal="true">
    <div class="modal-head">
      <div>
        <div class="modal-eye" id="modalEye">Formation</div>
        <h3 id="modalTitle">Titre</h3>
      </div>
      <button class="modal-close" aria-label="Fermer">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 6 6 18M6 6l12 12"/></svg>
      </button>
    </div>
    <div class="modal-body" id="modalBody"></div>
  </div>
</div>

<?php wp_footer(); ?>
</body>
</html>
