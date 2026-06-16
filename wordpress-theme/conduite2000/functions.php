<?php
/**
 * Conduite 2000 — functions.php
 * Configuration du thème, enqueue des scripts/styles, champs ACF.
 */

/* ─────────────────────────────────────────
   1. SETUP DU THÈME
───────────────────────────────────────── */
function c2000_setup() {
    add_theme_support( 'title-tag' );
    add_theme_support( 'post-thumbnails' );
    add_theme_support( 'html5', [ 'search-form', 'comment-form', 'gallery', 'caption' ] );
}
add_action( 'after_setup_theme', 'c2000_setup' );

/* ─────────────────────────────────────────
   2. ENQUEUE STYLES & SCRIPTS
───────────────────────────────────────── */
function c2000_enqueue_assets() {
    $uri = get_template_directory_uri();
    $v   = '1.0.0';

    // Google Fonts
    wp_enqueue_style(
        'c2000-google-fonts',
        'https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400;12..96,500;12..96,600;12..96,700;12..96,800&family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&family=Fraunces:opsz,wght,SOFT@9..144,400..900,0..100&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Inter:wght@400..800&family=IBM+Plex+Mono:wght@400;500&family=IBM+Plex+Serif:ital,wght@0,400..700;1,400..700&family=Geist:wght@400..800&family=Geist+Mono:wght@400;500&family=Manrope:wght@400..800&family=DM+Serif+Display&family=Archivo+Black&family=Big+Shoulders+Display:wght@600..900&display=swap',
        [],
        null
    );

    // Animations CSS
    wp_enqueue_style( 'c2000-animations', $uri . '/assets/animations.css', [], $v );

    // Main CSS
    wp_enqueue_style( 'c2000-main', $uri . '/assets/styles.css', [ 'c2000-animations' ], $v );

    // Main JS
    wp_enqueue_script( 'c2000-script', $uri . '/assets/script.js', [], $v, true );

    // Animations JS
    wp_enqueue_script( 'c2000-animations', $uri . '/assets/animations.js', [], $v, true );
}
add_action( 'wp_enqueue_scripts', 'c2000_enqueue_assets' );

/* ─────────────────────────────────────────
   3. TITRE PERSONNALISÉ
───────────────────────────────────────── */
function c2000_wp_title( $title ) {
    return 'Conduite 2000 — Auto-école à Bourgbarré & Orgères, depuis 1984';
}
add_filter( 'pre_get_document_title', 'c2000_wp_title' );

/* ─────────────────────────────────────────
   4. FORMULAIRE DE CONTACT — TRAITEMENT
───────────────────────────────────────── */
add_action( 'admin_post_c2000_contact',        'c2000_handle_contact' );
add_action( 'admin_post_nopriv_c2000_contact', 'c2000_handle_contact' );

function c2000_handle_contact() {
    if ( ! isset( $_POST['c2000_nonce'] ) || ! wp_verify_nonce( $_POST['c2000_nonce'], 'c2000_contact_form' ) ) {
        wp_die( 'Erreur de sécurité.', 403 );
    }

    $to      = get_field( 'c2000_email' ) ?: get_option( 'admin_email' );
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
   5. DÉSACTIVER LA BARRE D'ADMIN EN FRONT
   (optionnel — commentez pour la garder)
───────────────────────────────────────── */
// add_filter( 'show_admin_bar', '__return_false' );

/* ─────────────────────────────────────────
   4. CHAMPS ACF — ENREGISTREMENT LOCAL PHP
   Nécessite : plugin ACF Free (wordpress.org/plugins/advanced-custom-fields/)
───────────────────────────────────────── */
add_action( 'acf/init', 'c2000_register_acf_fields' );
function c2000_register_acf_fields() {

    if ( ! function_exists( 'acf_add_local_field_group' ) ) return;

    /* ── HELPERS ── */
    // Crée un sous-groupe d'horaires pour un jour donné
    $day_group = function( string $key_prefix, string $label_prefix ) : array {
        return [
            'key'        => "field_{$key_prefix}_grp",
            'label'      => $label_prefix,
            'name'       => $key_prefix,
            'type'       => 'group',
            'layout'     => 'row',
            'sub_fields' => [
                [ 'key' => "field_{$key_prefix}_closed", 'label' => 'Fermé', 'name' => 'closed', 'type' => 'true_false', 'default_value' => 0, 'ui' => 1 ],
                [ 'key' => "field_{$key_prefix}_s1",     'label' => 'Créneau 1 (ex: 09:00 — 12:00)', 'name' => 'slot_1', 'type' => 'text' ],
                [ 'key' => "field_{$key_prefix}_s2",     'label' => 'Créneau 2 (optionnel)',          'name' => 'slot_2', 'type' => 'text' ],
            ],
        ];
    };

    /* ════════════════════════════════════════
       GROUPE A — Paramètres généraux
    ════════════════════════════════════════ */
    acf_add_local_field_group( [
        'key'      => 'group_c2000_general',
        'title'    => '⚙️ Paramètres généraux',
        'fields'   => [
            [ 'key' => 'field_c2000_phone',     'label' => 'Numéro de téléphone', 'name' => 'c2000_phone',     'type' => 'text',  'placeholder' => '06 19 02 28 32' ],
            [ 'key' => 'field_c2000_email',     'label' => 'Email de contact',    'name' => 'c2000_email',     'type' => 'email', 'placeholder' => 'contact@conduite2000.fr' ],
            [ 'key' => 'field_c2000_instagram', 'label' => 'Lien Instagram',      'name' => 'c2000_instagram', 'type' => 'url',   'placeholder' => 'https://www.instagram.com/conduite.2000/' ],
            [ 'key' => 'field_c2000_facebook',  'label' => 'Lien Facebook',       'name' => 'c2000_facebook',  'type' => 'url',   'placeholder' => 'https://facebook.com' ],
        ],
        'location' => [ [ [ 'param' => 'page_type', 'operator' => '==', 'value' => 'front_page' ] ] ],
        'menu_order' => 0,
    ] );

    /* ════════════════════════════════════════
       GROUPE B — Section Hero
    ════════════════════════════════════════ */
    acf_add_local_field_group( [
        'key'   => 'group_c2000_hero',
        'title' => '🦸 Section Hero',
        'fields' => [
            [ 'key' => 'field_c2000_h_accent', 'label' => 'Mot accentué (rouge)', 'name' => 'c2000_hero_accent', 'type' => 'text', 'placeholder' => 'sérénité' ],
            [ 'key' => 'field_c2000_h_lede',   'label' => 'Texte d\'accroche (paragraphe)', 'name' => 'c2000_hero_lede', 'type' => 'textarea', 'rows' => 3,
              'placeholder' => 'Auto-école familiale en Ille-et-Vilaine...' ],
            // Stats
            [ 'key' => 'field_c2000_h_s1n', 'label' => 'Stat 1 — Nombre',  'name' => 'c2000_s1_num',   'type' => 'text', 'placeholder' => '40' ],
            [ 'key' => 'field_c2000_h_s1u', 'label' => 'Stat 1 — Unité',   'name' => 'c2000_s1_unit',  'type' => 'text', 'placeholder' => '+' ],
            [ 'key' => 'field_c2000_h_s1l', 'label' => 'Stat 1 — Libellé', 'name' => 'c2000_s1_label', 'type' => 'text', 'placeholder' => 'années d\'expérience' ],
            [ 'key' => 'field_c2000_h_s2n', 'label' => 'Stat 2 — Nombre',  'name' => 'c2000_s2_num',   'type' => 'text', 'placeholder' => '2' ],
            [ 'key' => 'field_c2000_h_s2u', 'label' => 'Stat 2 — Unité',   'name' => 'c2000_s2_unit',  'type' => 'text', 'placeholder' => '' ],
            [ 'key' => 'field_c2000_h_s2l', 'label' => 'Stat 2 — Libellé', 'name' => 'c2000_s2_label', 'type' => 'text', 'placeholder' => 'agences à votre service' ],
            [ 'key' => 'field_c2000_h_s3n', 'label' => 'Stat 3 — Nombre',  'name' => 'c2000_s3_num',   'type' => 'text', 'placeholder' => '1' ],
            [ 'key' => 'field_c2000_h_s3u', 'label' => 'Stat 3 — Unité',   'name' => 'c2000_s3_unit',  'type' => 'text', 'placeholder' => '€' ],
            [ 'key' => 'field_c2000_h_s3l', 'label' => 'Stat 3 — Libellé', 'name' => 'c2000_s3_label', 'type' => 'text', 'placeholder' => 'par jour, c\'est possible' ],
        ],
        'location'    => [ [ [ 'param' => 'page_type', 'operator' => '==', 'value' => 'front_page' ] ] ],
        'menu_order'  => 10,
    ] );

    /* ════════════════════════════════════════
       GROUPE C — Section À propos
    ════════════════════════════════════════ */
    acf_add_local_field_group( [
        'key'   => 'group_c2000_about',
        'title' => '👥 Section À propos',
        'fields' => [
            [
                'key'     => 'field_c2000_about_intro',
                'label'   => 'Texte introductif',
                'name'    => 'c2000_about_intro',
                'type'    => 'wysiwyg',
                'tabs'    => 'visual',
                'toolbar' => 'basic',
                'placeholder' => 'Conduite 2000 forme des conducteurs depuis plus de 40 ans...',
            ],
            [
                'key'        => 'field_c2000_team',
                'label'      => 'Membres de l\'équipe',
                'name'       => 'c2000_team',
                'type'       => 'repeater',
                'button_label' => 'Ajouter un membre',
                'min'        => 1,
                'sub_fields' => [
                    [ 'key' => 'field_c2000_tm_name',    'label' => 'Prénom',              'name' => 'name',    'type' => 'text' ],
                    [ 'key' => 'field_c2000_tm_role',    'label' => 'Rôle',                'name' => 'role',    'type' => 'text', 'placeholder' => 'gérante / enseignant' ],
                    [ 'key' => 'field_c2000_tm_photo',   'label' => 'Photo (optionnel)',   'name' => 'photo',   'type' => 'image', 'return_format' => 'url', 'preview_size' => 'thumbnail' ],
                    [ 'key' => 'field_c2000_tm_initial', 'label' => 'Initiale (si sans photo)', 'name' => 'initial', 'type' => 'text', 'placeholder' => 'V' ],
                ],
            ],
            [
                'key'   => 'field_c2000_partner_name',
                'label' => 'Partenaire code — Nom',
                'name'  => 'c2000_partner_name',
                'type'  => 'text',
                'placeholder' => 'Easy Web',
            ],
            [
                'key'   => 'field_c2000_partner_desc',
                'label' => 'Partenaire code — Description',
                'name'  => 'c2000_partner_desc',
                'type'  => 'textarea',
                'rows'  => 2,
                'placeholder' => 'Plateforme en ligne simple et flexible...',
            ],
        ],
        'location'   => [ [ [ 'param' => 'page_type', 'operator' => '==', 'value' => 'front_page' ] ] ],
        'menu_order' => 20,
    ] );

    /* ════════════════════════════════════════
       GROUPE D — Section Agences
    ════════════════════════════════════════ */
    $agency_sub = [
        [ 'key' => 'field_c2000_ag_num',     'label' => 'Numéro',   'name' => 'number',  'type' => 'text', 'placeholder' => '01' ],
        [ 'key' => 'field_c2000_ag_name',    'label' => 'Nom ville', 'name' => 'name',    'type' => 'text', 'placeholder' => 'Bourgbarré' ],
        [ 'key' => 'field_c2000_ag_street',  'label' => 'Rue / lieu', 'name' => 'street', 'type' => 'text', 'placeholder' => 'Centre commercial du Pont du Gué' ],
        [ 'key' => 'field_c2000_ag_zip',     'label' => 'Code postal + ville', 'name' => 'zip_city', 'type' => 'text', 'placeholder' => '35230 Bourgbarré' ],
        [ 'key' => 'field_c2000_ag_phone',   'label' => 'Téléphone', 'name' => 'phone',   'type' => 'text', 'placeholder' => '06 19 02 28 32' ],
        [
            'key'        => 'field_c2000_ag_hours',
            'label'      => 'Horaires',
            'name'       => 'hours',
            'type'       => 'group',
            'layout'     => 'block',
            'sub_fields' => [
                $day_group( 'ag_lundi',    'Lundi' ),
                $day_group( 'ag_mardi',    'Mardi' ),
                $day_group( 'ag_mercredi', 'Mercredi' ),
                $day_group( 'ag_jeudi',    'Jeudi' ),
                $day_group( 'ag_vendredi', 'Vendredi' ),
                $day_group( 'ag_samedi',   'Samedi' ),
                $day_group( 'ag_dimanche', 'Dimanche' ),
            ],
        ],
    ];

    acf_add_local_field_group( [
        'key'   => 'group_c2000_agencies',
        'title' => '📍 Section Agences',
        'fields' => [
            [
                'key'          => 'field_c2000_agencies',
                'label'        => 'Agences',
                'name'         => 'c2000_agencies',
                'type'         => 'repeater',
                'button_label' => 'Ajouter une agence',
                'min'          => 1,
                'layout'       => 'block',
                'sub_fields'   => $agency_sub,
            ],
        ],
        'location'   => [ [ [ 'param' => 'page_type', 'operator' => '==', 'value' => 'front_page' ] ] ],
        'menu_order' => 30,
    ] );

    /* ════════════════════════════════════════
       GROUPE E — Section Formations
    ════════════════════════════════════════ */
    acf_add_local_field_group( [
        'key'   => 'group_c2000_formations',
        'title' => '📚 Section Formations',
        'fields' => [
            [
                'key'          => 'field_c2000_formations',
                'label'        => 'Formations',
                'name'         => 'c2000_formations',
                'type'         => 'repeater',
                'button_label' => 'Ajouter une formation',
                'min'          => 1,
                'layout'       => 'block',
                'sub_fields'   => [
                    [ 'key' => 'field_c2000_f_icon',     'label' => 'Icône (lettres, ex: AAC, B, €)', 'name' => 'icon',     'type' => 'text', 'placeholder' => 'AAC' ],
                    [ 'key' => 'field_c2000_f_num',      'label' => 'Label numéro (ex: F.01 / Formation phare)', 'name' => 'num',  'type' => 'text' ],
                    [ 'key' => 'field_c2000_f_title',    'label' => 'Titre',    'name' => 'title',    'type' => 'text' ],
                    [ 'key' => 'field_c2000_f_summary',  'label' => 'Résumé',   'name' => 'summary',  'type' => 'textarea', 'rows' => 3 ],
                    [ 'key' => 'field_c2000_f_bullets',  'label' => 'Points clés (1 par ligne)', 'name' => 'bullets', 'type' => 'textarea', 'rows' => 4 ],
                    [ 'key' => 'field_c2000_f_duration', 'label' => 'Durée (ex: 15–18 mois)',    'name' => 'duration', 'type' => 'text' ],
                    [ 'key' => 'field_c2000_f_modal',    'label' => 'ID du modal JS (ex: aac, permisB)',   'name' => 'modal_id', 'type' => 'text' ],
                    [ 'key' => 'field_c2000_f_badge',    'label' => 'Badge (optionnel, ex: F.03 · Aide d\'État)', 'name' => 'badge', 'type' => 'text' ],
                    [ 'key' => 'field_c2000_f_css',      'label' => 'Classe CSS (f-1, f-2…)',     'name' => 'css_class', 'type' => 'text' ],
                ],
            ],
        ],
        'location'   => [ [ [ 'param' => 'page_type', 'operator' => '==', 'value' => 'front_page' ] ] ],
        'menu_order' => 40,
    ] );

    /* ════════════════════════════════════════
       GROUPE F — Section Tarifs
    ════════════════════════════════════════ */
    acf_add_local_field_group( [
        'key'   => 'group_c2000_tarifs',
        'title' => '💶 Section Tarifs',
        'fields' => [
            [
                'key'          => 'field_c2000_tarifs',
                'label'        => 'Tarifs',
                'name'         => 'c2000_tarifs',
                'type'         => 'repeater',
                'button_label' => 'Ajouter un tarif',
                'min'          => 1,
                'layout'       => 'block',
                'sub_fields'   => [
                    [ 'key' => 'field_c2000_t_title',    'label' => 'Titre',    'name' => 'title',    'type' => 'text' ],
                    [ 'key' => 'field_c2000_t_subtitle', 'label' => 'Sous-titre', 'name' => 'subtitle', 'type' => 'text' ],
                    [ 'key' => 'field_c2000_t_price',    'label' => 'Prix (ex: 1 784)', 'name' => 'price', 'type' => 'text' ],
                    [ 'key' => 'field_c2000_t_pnote',    'label' => 'Note de prix (ex: à partir de 568€ sans frais)', 'name' => 'price_note', 'type' => 'text' ],
                    [ 'key' => 'field_c2000_t_badge',    'label' => 'Texte du badge (ex: Recommandé)', 'name' => 'badge', 'type' => 'text' ],
                    [ 'key' => 'field_c2000_t_featured', 'label' => 'Mis en avant (fond sombre)', 'name' => 'featured', 'type' => 'true_false', 'ui' => 1 ],
                    [
                        'key'          => 'field_c2000_t_items',
                        'label'        => 'Lignes de tarif',
                        'name'         => 'items',
                        'type'         => 'repeater',
                        'button_label' => 'Ajouter une ligne',
                        'layout'       => 'table',
                        'sub_fields'   => [
                            [ 'key' => 'field_c2000_ti_label', 'label' => 'Libellé', 'name' => 'label', 'type' => 'text' ],
                            [ 'key' => 'field_c2000_ti_price', 'label' => 'Prix',    'name' => 'price', 'type' => 'text' ],
                        ],
                    ],
                    [ 'key' => 'field_c2000_t_foot', 'label' => 'Note de bas (optionnel)', 'name' => 'footer_note', 'type' => 'text' ],
                ],
            ],
            [
                'key'   => 'field_c2000_tarif_extra',
                'label' => 'Ligne tarifaire supplémentaire — Libellé',
                'name'  => 'c2000_tarif_extra_label',
                'type'  => 'text',
                'placeholder' => 'Conduite traditionnelle sans code',
            ],
            [
                'key'   => 'field_c2000_tarif_extra_price',
                'label' => 'Ligne tarifaire supplémentaire — Prix + note',
                'name'  => 'c2000_tarif_extra_price',
                'type'  => 'text',
                'placeholder' => '1 266€  •  à partir de 318€ sans frais',
            ],
        ],
        'location'   => [ [ [ 'param' => 'page_type', 'operator' => '==', 'value' => 'front_page' ] ] ],
        'menu_order' => 50,
    ] );

    /* ════════════════════════════════════════
       GROUPE G — Section Contact
    ════════════════════════════════════════ */
    acf_add_local_field_group( [
        'key'   => 'group_c2000_contact',
        'title' => '✉️ Section Contact',
        'fields' => [
            [
                'key'   => 'field_c2000_contact_news',
                'label' => 'Actualité (bloc "Inscriptions ouvertes…")',
                'name'  => 'c2000_contact_news',
                'type'  => 'wysiwyg',
                'tabs'  => 'visual',
                'toolbar' => 'basic',
                'placeholder' => 'Inscriptions ouvertes pour la rentrée...',
            ],
        ],
        'location'   => [ [ [ 'param' => 'page_type', 'operator' => '==', 'value' => 'front_page' ] ] ],
        'menu_order' => 60,
    ] );

}
