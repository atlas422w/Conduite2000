<?php
/**
 * Conduite 2000 FSE — functions.php
 */

/* ─────────────────────────────────────────
   1. SETUP
───────────────────────────────────────── */
function c2000_fse_setup() {
    add_theme_support( 'title-tag' );
    add_theme_support( 'post-thumbnails' );
    add_theme_support( 'wp-block-styles' );
    add_theme_support( 'html5', [ 'search-form', 'comment-form', 'gallery', 'caption' ] );
    // Désactive les styles de blocs par défaut de WP (on charge les nôtres)
    remove_theme_support( 'core-block-patterns' );
}
add_action( 'after_setup_theme', 'c2000_fse_setup' );

/* ─────────────────────────────────────────
   2. ASSETS
───────────────────────────────────────── */
function c2000_fse_enqueue_assets() {
    $uri = get_template_directory_uri();
    $v   = '2.0.0';

    wp_enqueue_style(
        'c2000-google-fonts',
        'https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400;12..96,500;12..96,600;12..96,700;12..96,800&family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap',
        [],
        null
    );

    wp_enqueue_style( 'c2000-animations', $uri . '/assets/animations.css', [], $v );
    wp_enqueue_style( 'c2000-main',       $uri . '/assets/styles.css', [ 'c2000-animations' ], $v );

    wp_enqueue_script( 'c2000-script',     $uri . '/assets/script.js',     [], $v, true );
    wp_enqueue_script( 'c2000-animations', $uri . '/assets/animations.js', [], $v, true );
}
add_action( 'wp_enqueue_scripts', 'c2000_fse_enqueue_assets' );

/* ─────────────────────────────────────────
   3. ÉLÉMENTS DÉCORATIFS (ambient + grain)
   Injectés juste après <body> via wp_body_open
───────────────────────────────────────── */
function c2000_fse_body_open() {
    echo '<div class="ambient" aria-hidden="true"></div>' . "\n";
    echo '<div class="grain"   aria-hidden="true"></div>' . "\n";
}
add_action( 'wp_body_open', 'c2000_fse_body_open' );

/* ─────────────────────────────────────────
   4. NONCE + ACTION FORMULAIRE DE CONTACT
   Injectés via wp_footer pour que le JS
   puisse les lire et les injecter dans le form
───────────────────────────────────────── */
function c2000_fse_inject_contact_vars() {
    if ( ! is_front_page() ) return;
    $nonce     = wp_create_nonce( 'c2000_contact_form' );
    $admin_url = esc_js( admin_url( 'admin-post.php' ) );
    ?>
    <script>
    (function(){
      var f = document.getElementById('contactForm');
      if (!f) return;
      f.action = '<?= $admin_url ?>';
      var n = f.querySelector('[name="c2000_nonce"]');
      if (n) n.value = '<?= esc_js( $nonce ) ?>';
    })();
    </script>
    <?php
}
add_action( 'wp_footer', 'c2000_fse_inject_contact_vars' );

/* ─────────────────────────────────────────
   5. TRAITEMENT FORMULAIRE CONTACT
───────────────────────────────────────── */
add_action( 'admin_post_c2000_contact',        'c2000_fse_handle_contact' );
add_action( 'admin_post_nopriv_c2000_contact', 'c2000_fse_handle_contact' );

function c2000_fse_handle_contact() {
    if ( ! isset( $_POST['c2000_nonce'] ) || ! wp_verify_nonce( $_POST['c2000_nonce'], 'c2000_contact_form' ) ) {
        wp_die( 'Erreur de sécurité.', 403 );
    }

    $to      = get_option( 'admin_email' );
    $prenom  = sanitize_text_field( $_POST['prenom']    ?? '' );
    $nom     = sanitize_text_field( $_POST['nom']       ?? '' );
    $from    = sanitize_email( $_POST['email']          ?? '' );
    $tel     = sanitize_text_field( $_POST['tel']       ?? '' );
    $form    = sanitize_text_field( $_POST['formation'] ?? '' );
    $agence  = sanitize_text_field( $_POST['agence']    ?? '' );
    $message = sanitize_textarea_field( $_POST['message'] ?? '' );

    $subject = "Nouveau devis — $prenom $nom";
    $body    = "Prénom : $prenom\nNom : $nom\nEmail : $from\nTéléphone : $tel\nFormation : $form\nAgence : $agence\n\nMessage :\n$message";
    $headers = [ "Reply-To: $prenom $nom <$from>", 'Content-Type: text/plain; charset=UTF-8' ];

    wp_mail( $to, $subject, $body, $headers );
    wp_safe_redirect( add_query_arg( 'merci', '1', home_url( '/#contact' ) ) );
    exit;
}

/* ─────────────────────────────────────────
   6. CATÉGORIE DE PATTERNS
───────────────────────────────────────── */
function c2000_fse_register_pattern_categories() {
    register_block_pattern_category(
        'conduite2000',
        [ 'label' => __( 'Conduite 2000', 'conduite2000' ) ]
    );
}
add_action( 'init', 'c2000_fse_register_pattern_categories' );

/* ─────────────────────────────────────────
   7. TITRE PERSONNALISÉ
───────────────────────────────────────── */
function c2000_fse_wp_title( $title ) {
    return 'Conduite 2000 — Auto-école à Bourgbarré & Orgères, depuis 1984';
}
add_filter( 'pre_get_document_title', 'c2000_fse_wp_title' );
