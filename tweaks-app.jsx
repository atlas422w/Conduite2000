/* =========================================================
   CONDUITE 2000 — Tweaks (mode "joue avec tout")
   ========================================================= */

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "preset": "original",
  "palette": ["#C1272D", "#8a1c21", "#fafaf7", "#0a0a0a"],
  "bgTone": "warm",
  "dark": false,
  "headingFont": "Bricolage Grotesque",
  "bodyFont": "Space Grotesk",
  "monoFont": "JetBrains Mono",
  "baseFontSize": 16,
  "headingScale": 100,
  "headingWeight": 700,
  "letterSpacing": -25,
  "lineHeight": 155,
  "italicAccent": "italic",
  "uppercaseEyebrow": true,
  "containerWidth": 1240,
  "sectionPadding": 110,
  "cardRadius": 22,
  "cardPadding": 28,
  "cardGap": 18,
  "density": "regular",
  "grainOpacity": 35,
  "glowIntensity": 100,
  "glassBlur": 22,
  "glassOpacity": 55,
  "accentWord": "sérénité",
  "brandName": "Conduite 2000",
  "phone": "06 19 02 28 32",
  "sinceShort": "Depuis 1984",
  "sinceLong": "Conduite 2000 vous forme à la conduite depuis 1984.",
  "showScene": true,
  "animateScene": true,
  "showFloatingCards": true,
  "showStats": true,
  "buttonRadius": 999,
  "buttonStyle": "filled",
  "eyebrowLine": true,
  "cardHoverLift": 4,
  "showMarquee": true,
  "showAbout": true,
  "showAgencies": true,
  "showFormations": true,
  "showPermis1": true,
  "showTarifs": true,
  "showDocs": true,
  "showContact": true,
  "marqueeSpeed": 40,
  "pulseDot": true,
  "scrollReveal": true,
  "shadowIntensity": 100,
  "stripes": false,
  "rotateHero": 0,
  "marqueeSize": 28
}/*EDITMODE-END*/;

// ---------- Presets ----------
const PRESETS = {
  original: {
    palette: ["#C1272D", "#8a1c21", "#fafaf7", "#0a0a0a"],
    bgTone: "warm", dark: false,
    headingFont: "Bricolage Grotesque", bodyFont: "Space Grotesk", monoFont: "JetBrains Mono",
    headingWeight: 700, letterSpacing: -25, italicAccent: "italic",
    cardRadius: 22, buttonRadius: 999, glassBlur: 22, glassOpacity: 55,
    shadowIntensity: 100, grainOpacity: 35, glowIntensity: 100,
  },
  brutalist: {
    palette: ["#FF3B30", "#000000", "#FFFFFF", "#000000"],
    bgTone: "mono", dark: false,
    headingFont: "Archivo Black", bodyFont: "Inter", monoFont: "IBM Plex Mono",
    headingWeight: 900, letterSpacing: -30, italicAccent: "none",
    cardRadius: 0, buttonRadius: 0, glassBlur: 0, glassOpacity: 100,
    shadowIntensity: 0, grainOpacity: 0, glowIntensity: 0,
  },
  editorial: {
    palette: ["#7A1F1F", "#3a0e0e", "#f6f0e6", "#1a1410"],
    bgTone: "warm", dark: false,
    headingFont: "Fraunces", bodyFont: "Inter", monoFont: "IBM Plex Mono",
    headingWeight: 500, letterSpacing: -35, italicAccent: "italic",
    cardRadius: 4, buttonRadius: 4, glassBlur: 8, glassOpacity: 70,
    shadowIntensity: 60, grainOpacity: 25, glowIntensity: 50,
  },
  tech: {
    palette: ["#3B82F6", "#1e40af", "#f5f7fb", "#0b1220"],
    bgTone: "cool", dark: false,
    headingFont: "Geist", bodyFont: "Geist", monoFont: "Geist Mono",
    headingWeight: 600, letterSpacing: -30, italicAccent: "none",
    cardRadius: 16, buttonRadius: 10, glassBlur: 30, glassOpacity: 45,
    shadowIntensity: 70, grainOpacity: 0, glowIntensity: 80,
  },
  soft: {
    palette: ["#E66B5C", "#b04a3c", "#fff8f3", "#2b1d18"],
    bgTone: "warm", dark: false,
    headingFont: "DM Serif Display", bodyFont: "Manrope", monoFont: "JetBrains Mono",
    headingWeight: 400, letterSpacing: -25, italicAccent: "italic",
    cardRadius: 32, buttonRadius: 999, glassBlur: 26, glassOpacity: 60,
    shadowIntensity: 140, grainOpacity: 50, glowIntensity: 140,
  },
  nocturne: {
    palette: ["#FFB454", "#cc8a30", "#0e0e10", "#fafaf7"],
    bgTone: "neutral", dark: true,
    headingFont: "Bricolage Grotesque", bodyFont: "Inter", monoFont: "Geist Mono",
    headingWeight: 700, letterSpacing: -30, italicAccent: "italic",
    cardRadius: 18, buttonRadius: 999, glassBlur: 26, glassOpacity: 8,
    shadowIntensity: 80, grainOpacity: 20, glowIntensity: 140,
  },
  suisse: {
    palette: ["#D7263D", "#9a1a2c", "#ffffff", "#0a0a0a"],
    bgTone: "mono", dark: false,
    headingFont: "Inter", bodyFont: "Inter", monoFont: "IBM Plex Mono",
    headingWeight: 800, letterSpacing: -40, italicAccent: "none",
    cardRadius: 2, buttonRadius: 2, glassBlur: 0, glassOpacity: 100,
    shadowIntensity: 20, grainOpacity: 0, glowIntensity: 0,
  },
  magazine: {
    palette: ["#0a0a0a", "#222", "#f5f1e8", "#0a0a0a"],
    bgTone: "warm", dark: false,
    headingFont: "Big Shoulders Display", bodyFont: "IBM Plex Serif", monoFont: "IBM Plex Mono",
    headingWeight: 900, letterSpacing: -45, italicAccent: "italic",
    cardRadius: 0, buttonRadius: 0, glassBlur: 0, glassOpacity: 90,
    shadowIntensity: 40, grainOpacity: 60, glowIntensity: 0,
  },
};

const BG_TONES = {
  warm:    { paper: "#fafaf7", paper2: "#f1ede5", paper3: "#e9e3d6", grad: ["#fdfaf3","#fafaf7","#f6f3ec"] },
  cool:    { paper: "#f6f8fb", paper2: "#e9eef5", paper3: "#dbe3ee", grad: ["#f0f4fb","#f6f8fb","#eaf0f8"] },
  neutral: { paper: "#f7f7f7", paper2: "#ececec", paper3: "#dcdcdc", grad: ["#f9f9f9","#f7f7f7","#f3f3f3"] },
  mono:    { paper: "#ffffff", paper2: "#f2f2f2", paper3: "#e6e6e6", grad: ["#ffffff","#ffffff","#fafafa"] },
};

// ---------- App ----------
function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  // Apply preset (when changed)
  const lastPresetRef = React.useRef(t.preset);
  React.useEffect(() => {
    if (t.preset !== lastPresetRef.current && PRESETS[t.preset]) {
      lastPresetRef.current = t.preset;
      setTweak(PRESETS[t.preset]);
    }
  }, [t.preset]);

  // Apply runtime CSS
  React.useEffect(() => {
    const tone = BG_TONES[t.bgTone] || BG_TONES.warm;
    const [c1, c2, paper, ink] = t.palette;
    const dark = t.dark;
    const _paper = dark ? "#0c0c0e" : (paper || tone.paper);
    const _ink   = dark ? "#fafaf7" : (ink || "#0a0a0a");
    const _muted = dark ? "rgba(250,250,247,.58)" : "#6b6b66";

    const shadowK = t.shadowIntensity / 100;
    const glassRGB = dark ? "20,20,22" : "255,255,255";
    const glassA = (t.glassOpacity / 100).toFixed(2);
    const blur = t.glassBlur;

    let css = "";
    css += `:root{
      --red:${c1}; --red-deep:${c2}; --red-soft:${c1}22;
      --ink:${_ink}; --ink-2:${dark?"rgba(250,250,247,.85)":"#1a1a1a"};
      --paper:${_paper}; --paper-2:${tone.paper2}; --paper-3:${tone.paper3};
      --muted:${_muted};
      --line:${dark?"rgba(255,255,255,.08)":"rgba(10,10,10,.08)"};
      --glass:rgba(${glassRGB},${glassA});
      --glass-strong:rgba(${glassRGB},${Math.min(1, glassA*1.4).toFixed(2)});
      --glass-border:${dark?"rgba(255,255,255,.08)":"rgba(255,255,255,.7)"};
      --radius:${t.cardRadius}px;
      --radius-sm:${Math.max(2,t.cardRadius-8)}px;
      --radius-lg:${t.cardRadius+10}px;
      --shadow-sm:0 1px 2px rgba(10,10,10,${(0.04*shadowK).toFixed(3)}), 0 2px 8px rgba(10,10,10,${(0.04*shadowK).toFixed(3)});
      --shadow-md:0 8px 30px rgba(10,10,10,${(0.07*shadowK).toFixed(3)}), 0 2px 6px rgba(10,10,10,${(0.04*shadowK).toFixed(3)});
      --shadow-lg:0 24px 60px rgba(10,10,10,${(0.12*shadowK).toFixed(3)}), 0 6px 12px rgba(10,10,10,${(0.05*shadowK).toFixed(3)});
    }`;

    // Body / typography
    css += `body{font-size:${t.baseFontSize}px; line-height:${t.lineHeight/100};
      background:${_paper}; color:${_ink};}`;

    css += `body, button, input, select, textarea, p, li, .formation .summary, .nav-links a, .agency .addr, .field input, .tarif ul li {font-family:"${t.bodyFont}", system-ui, sans-serif !important;}`;

    // Heading font everywhere
    const HEAD_SEL = [
      "h1","h2","h3","h4",
      ".hero h1", ".hero h1 *",
      ".nav-brand b", ".hero-card b", ".hero-tag b",
      ".marquee-track",
      ".bento.cta h3", ".value-row b",
      ".team-card .avatar b",
      ".agency h3", ".agency-phone b",
      ".formation h3",
      ".perm1 h2", ".perm1 .fact b",
      ".tarif h3", ".tarif .price b", ".tarifs-foot b",
      ".docs h3", ".label h3", ".label .stamp",
      ".contact-form h3", ".contact-card .big", ".contact-mini b",
      ".footer-brand .logo-row b",
      ".modal-head h3", ".modal-body h4",
      ".hero-stats div b",
    ].join(",");
    css += `${HEAD_SEL}{font-family:"${t.headingFont}", "Bricolage Grotesque", system-ui, sans-serif !important; font-weight:${t.headingWeight} !important; letter-spacing:${t.letterSpacing/1000}em !important;}`;
    css += `h1, .hero h1 {font-weight:${t.headingWeight} !important;}`;

    // Heading scale
    css += `h1, .hero h1 {font-size:clamp(${48*t.headingScale/100}px, ${7.2*t.headingScale/100}vw, ${104*t.headingScale/100}px) !important;}`;
    css += `h2 {font-size:clamp(${36*t.headingScale/100}px, ${5*t.headingScale/100}vw, ${64*t.headingScale/100}px) !important;}`;

    // Mono font
    const MONO_SEL = [
      ".eyebrow", ".nav-brand span", ".nav-cta",
      ".hero-tag", ".hero h1 .since", ".formation .num",
      ".field label", ".modal-head .modal-eye",
      ".agency .city", ".agency .addr .lbl", ".agency .hours-grid",
      ".tarif .badge", ".tarif ul li span:last-child", ".tarif .price .note",
      ".label .label-tags span", ".footer h4", ".footer-bottom",
      ".hero-card span", ".team-card .role",
      ".marquee-track [class*='']",
    ].join(",");
    css += `${MONO_SEL}{font-family:"${t.monoFont}", ui-monospace, monospace !important;}`;

    // Italic accent
    const accentStyle =
      t.italicAccent === "italic" ? "font-style:italic;" :
      t.italicAccent === "underline" ? "font-style:normal; text-decoration:underline; text-decoration-color:var(--red); text-decoration-thickness:.08em; text-underline-offset:.12em;" :
      t.italicAccent === "marker" ? "font-style:normal; background:linear-gradient(transparent 60%, color-mix(in oklab, var(--red) 35%, transparent) 60%);" :
      "font-style:normal;";
    css += `.h-italic, .hero h1 .accent{${accentStyle}}`;

    // Eyebrow style
    css += `.eyebrow {text-transform:${t.uppercaseEyebrow ? "uppercase" : "none"};}`;
    css += `.eyebrow::before {display:${t.eyebrowLine ? "block" : "none"};}`;

    // Container width
    css += `.container{width:min(${t.containerWidth}px, 92vw);}`;

    // Section padding
    css += `section{padding-block:clamp(${Math.max(40,t.sectionPadding-40)}px, ${t.sectionPadding/12}vw, ${t.sectionPadding+30}px);}`;

    // Card gap
    css += `.about-bento, .formations-grid, .tarifs-grid, .agencies-grid, .docs-grid, .contact-grid {gap:${t.cardGap}px;}`;

    // Card padding density
    const padMult = { compact: 0.75, regular: 1, comfy: 1.3 }[t.density] ?? 1;
    const cp = Math.round(t.cardPadding * padMult);
    css += `.bento, .formation, .tarif, .contact-mini {padding:${cp}px;}`;
    css += `.agency, .docs, .label, .contact-form, .perm1 {padding:${cp+12}px;}`;

    // Button radius + style
    const btnRad = t.buttonRadius;
    css += `.btn, .nav-cta, .nav-links a, .hero-tag, .tarif .badge, .label .label-tags span, .footer-socials a {border-radius:${Math.min(btnRad, 999)}px;}`;
    if (t.buttonStyle === "outline") {
      css += `.btn-primary{background:transparent !important; color:var(--red) !important; border:2px solid var(--red);}`;
      css += `.btn-primary:hover{background:var(--red) !important; color:white !important;}`;
    } else if (t.buttonStyle === "ghost") {
      css += `.btn-primary{background:transparent !important; color:var(--red) !important; box-shadow:none !important;}`;
      css += `.btn-primary:hover{background:rgba(193,39,45,.08) !important;}`;
    }

    // Hover lift
    css += `.formation:hover, .agency:hover, .tarif:hover {transform:translateY(-${t.cardHoverLift}px);}`;

    // Grain opacity
    css += `.grain{opacity:${t.grainOpacity/100};}`;

    // Glow / ambient intensity
    const gi = t.glowIntensity / 100;
    css += `.ambient{opacity:${gi};}`;

    // Glass blur override
    css += `.glass, .bento.glass, .formation, .tarif, .agency, .docs, .contact-form, .contact-mini, .nav-inner, .hero-tag, .hero-card {backdrop-filter:blur(${blur}px) saturate(140%) !important; -webkit-backdrop-filter:blur(${blur}px) saturate(140%) !important;}`;

    // Marquee
    css += `.marquee-track{animation-duration:${t.marqueeSpeed}s; font-size:${t.marqueeSize}px;}`;

    // Pulse dot
    if (!t.pulseDot) css += `.nav-cta .dot{animation:none !important;}`;

    // Scroll reveal
    if (!t.scrollReveal) css += `.reveal{opacity:1 !important; transform:none !important;}`;

    // Stripes overlay
    if (t.stripes) {
      css += `body::after{content:""; position:fixed; inset:0; z-index:-1; pointer-events:none;
        background:repeating-linear-gradient(135deg, transparent 0 22px, rgba(193,39,45,.04) 22px 23px);}`;
    }

    // Animate scene
    if (!t.animateScene) {
      css += `.scene, .car-1, .car-2, .car-3, .hero-card{animation:none !important;}`;
    }

    // Hero rotation
    css += `.scene{transform:rotateX(55deg) rotateZ(${-35 + t.rotateHero}deg);}`;

    // Section visibility — handled below via display:none rules
    const sec = (sel, on) => `${sel}{display:${on?"":"none"};}`;
    css += sec(".marquee", t.showMarquee);
    css += sec("#about", t.showAbout);
    css += sec("#agences", t.showAgencies);
    css += sec("#formations", t.showFormations);
    css += sec("section[data-screen-label='05 Permis 1€']", t.showPermis1);
    css += sec("#tarifs", t.showTarifs);
    css += sec("section[data-screen-label='07 Docs & label']", t.showDocs);
    css += sec("#contact", t.showContact);
    css += sec(".hero-visual .scene", t.showScene);
    css += sec(".hero-card", t.showFloatingCards);
    css += sec(".hero-stats", t.showStats);

    // Dark mode tweaks
    if (dark) {
      css += `.ambient{background:radial-gradient(900px 700px at 85% -10%, ${c1}33, transparent 60%),
        radial-gradient(800px 600px at -10% 30%, ${c1}1a, transparent 60%),
        linear-gradient(180deg, #0c0c0e 0%, #0a0a0a 100%) !important;}`;
      css += `.nav-inner{background:rgba(20,20,22,.7) !important; border-color:rgba(255,255,255,.1) !important;}`;
      css += `.nav-links a:hover{background:rgba(255,255,255,.08) !important;}`;
      css += `.btn-ghost{background:rgba(255,255,255,.06) !important; color:var(--ink) !important; border-color:rgba(255,255,255,.12) !important;}`;
      css += `.btn-ghost:hover{background:rgba(255,255,255,.12) !important;}`;
      css += `.team-card{background:rgba(255,255,255,.04) !important;}`;
      css += `.team-card .avatar{background:linear-gradient(135deg,#222,#111) !important;}`;
      css += `.team-card .avatar b{color:#fafaf7 !important;}`;
      css += `.tarif:not(.featured){background:rgba(255,255,255,.04) !important;}`;
      css += `.tarif.featured{background:linear-gradient(135deg, ${c1}, ${c2}) !important;}`;
      css += `.label{background:linear-gradient(135deg, #1a1a1d, #0e0e10) !important;}`;
      css += `.label .label-tags span{background:rgba(255,255,255,.06) !important; color:rgba(255,255,255,.8) !important; border-color:rgba(255,255,255,.1) !important;}`;
      css += `.field input, .field textarea, .field select{background:rgba(255,255,255,.04) !important; color:${_ink} !important; border-color:rgba(255,255,255,.1) !important;}`;
      css += `.tarifs-foot{background:rgba(255,255,255,.04) !important;}`;
      css += `.modal{background:#16161a !important; color:${_ink};}`;
      css += `.modal-head{background:rgba(22,22,26,.95) !important; border-color:rgba(255,255,255,.08) !important;}`;
      css += `.footer-socials a{background:rgba(255,255,255,.06) !important; border-color:rgba(255,255,255,.1) !important;}`;
      css += `.scene-pad{background:linear-gradient(135deg,#1a1a1d,#0c0c0e) !important;}`;
    }

    document.getElementById("tweaks-runtime").textContent = css;
  }, [t]);

  // Apply text edits
  React.useEffect(() => {
    document.querySelectorAll('[data-tweak="brand"]').forEach(el => el.textContent = t.brandName);
    document.querySelectorAll('[data-tweak="accent"]').forEach(el => el.textContent = t.accentWord);
    document.querySelectorAll('[data-tweak="phone"]').forEach(el => el.textContent = t.phone);
    document.querySelectorAll('[data-tweak="since-short"]').forEach(el => el.textContent = t.sinceShort);
    document.querySelectorAll('[data-tweak="since-long"]').forEach(el => el.textContent = t.sinceLong);
  }, [t.brandName, t.accentWord, t.phone, t.sinceShort, t.sinceLong]);

  return (
    <TweaksPanel title="Tweaks · Conduite 2000">
      <TweakSection label="Préréglages">
        <TweakSelect label="Style" value={t.preset}
          options={[
            { value: "original",  label: "Original (rouge)" },
            { value: "brutalist", label: "Brutaliste" },
            { value: "editorial", label: "Éditorial (serif)" },
            { value: "magazine",  label: "Magazine (poster)" },
            { value: "tech",      label: "Tech (bleu)" },
            { value: "soft",      label: "Soft (rond, chaud)" },
            { value: "suisse",    label: "Suisse (Inter, dense)" },
            { value: "nocturne",  label: "Nocturne (sombre)" },
          ]}
          onChange={(v) => setTweak("preset", v)} />
      </TweakSection>

      <TweakSection label="Thème">
        <TweakColor label="Palette" value={t.palette}
          options={[
            ["#C1272D","#8a1c21","#fafaf7","#0a0a0a"],
            ["#3B82F6","#1e40af","#f5f7fb","#0b1220"],
            ["#1F8A5B","#0f5a3a","#f5faf6","#0a1410"],
            ["#FFB454","#cc8a30","#fafaf7","#0a0a0a"],
            ["#7A5AE0","#4c34b0","#f8f6ff","#0e0a1c"],
            ["#E66B5C","#b04a3c","#fff8f3","#2b1d18"],
            ["#0a0a0a","#222","#f5f1e8","#0a0a0a"],
            ["#D7263D","#9a1a2c","#ffffff","#0a0a0a"],
          ]}
          onChange={(v) => setTweak("palette", v)} />
        <TweakToggle label="Mode sombre" value={t.dark} onChange={(v) => setTweak("dark", v)} />
        <TweakRadio label="Fond" value={t.bgTone}
          options={["warm","cool","mono"]}
          onChange={(v) => setTweak("bgTone", v)} />
        <TweakSlider label="Grain" value={t.grainOpacity} min={0} max={100} unit="%"
          onChange={(v) => setTweak("grainOpacity", v)} />
        <TweakSlider label="Halo (ambient)" value={t.glowIntensity} min={0} max={200} unit="%"
          onChange={(v) => setTweak("glowIntensity", v)} />
        <TweakSlider label="Ombres" value={t.shadowIntensity} min={0} max={200} unit="%"
          onChange={(v) => setTweak("shadowIntensity", v)} />
        <TweakToggle label="Rayures fond" value={t.stripes} onChange={(v) => setTweak("stripes", v)} />
      </TweakSection>

      <TweakSection label="Typographie">
        <TweakSelect label="Titres" value={t.headingFont}
          options={[
            "Bricolage Grotesque","Fraunces","Playfair Display","DM Serif Display",
            "Archivo Black","Big Shoulders Display","Inter","Geist","Space Grotesk","IBM Plex Serif",
          ]}
          onChange={(v) => setTweak("headingFont", v)} />
        <TweakSelect label="Corps" value={t.bodyFont}
          options={["Space Grotesk","Inter","Geist","Manrope","IBM Plex Serif","Fraunces"]}
          onChange={(v) => setTweak("bodyFont", v)} />
        <TweakSelect label="Mono" value={t.monoFont}
          options={["JetBrains Mono","IBM Plex Mono","Geist Mono"]}
          onChange={(v) => setTweak("monoFont", v)} />
        <TweakSlider label="Taille de base" value={t.baseFontSize} min={13} max={20} unit="px"
          onChange={(v) => setTweak("baseFontSize", v)} />
        <TweakSlider label="Échelle titres" value={t.headingScale} min={60} max={160} unit="%"
          onChange={(v) => setTweak("headingScale", v)} />
        <TweakSlider label="Graisse titres" value={t.headingWeight} min={300} max={900} step={100}
          onChange={(v) => setTweak("headingWeight", v)} />
        <TweakSlider label="Interlettre" value={t.letterSpacing} min={-60} max={20}
          onChange={(v) => setTweak("letterSpacing", v)} />
        <TweakSlider label="Interligne" value={t.lineHeight} min={120} max={200} unit="%"
          onChange={(v) => setTweak("lineHeight", v)} />
        <TweakRadio label="Mot accentué" value={t.italicAccent}
          options={[
            { value: "italic", label: "italique" },
            { value: "underline", label: "souligné" },
            { value: "marker", label: "marker" },
            { value: "none", label: "rien" },
          ]}
          onChange={(v) => setTweak("italicAccent", v)} />
        <TweakToggle label="Eyebrows MAJUSCULES" value={t.uppercaseEyebrow}
          onChange={(v) => setTweak("uppercaseEyebrow", v)} />
        <TweakToggle label="Tiret eyebrow" value={t.eyebrowLine}
          onChange={(v) => setTweak("eyebrowLine", v)} />
      </TweakSection>

      <TweakSection label="Mise en page">
        <TweakSlider label="Largeur page" value={t.containerWidth} min={960} max={1600} step={20} unit="px"
          onChange={(v) => setTweak("containerWidth", v)} />
        <TweakSlider label="Padding sections" value={t.sectionPadding} min={40} max={200} unit="px"
          onChange={(v) => setTweak("sectionPadding", v)} />
        <TweakSlider label="Espacement cartes" value={t.cardGap} min={0} max={48} unit="px"
          onChange={(v) => setTweak("cardGap", v)} />
        <TweakRadio label="Densité" value={t.density}
          options={["compact","regular","comfy"]}
          onChange={(v) => setTweak("density", v)} />
        <TweakSlider label="Padding cartes" value={t.cardPadding} min={12} max={64} unit="px"
          onChange={(v) => setTweak("cardPadding", v)} />
      </TweakSection>

      <TweakSection label="Composants">
        <TweakSlider label="Rayon cartes" value={t.cardRadius} min={0} max={48} unit="px"
          onChange={(v) => setTweak("cardRadius", v)} />
        <TweakSlider label="Rayon boutons" value={t.buttonRadius} min={0} max={999} unit="px"
          onChange={(v) => setTweak("buttonRadius", v)} />
        <TweakRadio label="Boutons" value={t.buttonStyle}
          options={[
            { value:"filled", label:"plein" },
            { value:"outline", label:"contour" },
            { value:"ghost", label:"fantôme" },
          ]}
          onChange={(v) => setTweak("buttonStyle", v)} />
        <TweakSlider label="Flou (glass)" value={t.glassBlur} min={0} max={40} unit="px"
          onChange={(v) => setTweak("glassBlur", v)} />
        <TweakSlider label="Opacité glass" value={t.glassOpacity} min={0} max={100} unit="%"
          onChange={(v) => setTweak("glassOpacity", v)} />
        <TweakSlider label="Hover lift" value={t.cardHoverLift} min={0} max={16} unit="px"
          onChange={(v) => setTweak("cardHoverLift", v)} />
      </TweakSection>

      <TweakSection label="Hero">
        <TweakText label="Mot accent" value={t.accentWord}
          onChange={(v) => setTweak("accentWord", v)} />
        <TweakToggle label="Scène isométrique" value={t.showScene}
          onChange={(v) => setTweak("showScene", v)} />
        <TweakToggle label="Animer la scène" value={t.animateScene}
          onChange={(v) => setTweak("animateScene", v)} />
        <TweakSlider label="Rotation scène" value={t.rotateHero} min={-45} max={45} unit="°"
          onChange={(v) => setTweak("rotateHero", v)} />
        <TweakToggle label="Cartes flottantes" value={t.showFloatingCards}
          onChange={(v) => setTweak("showFloatingCards", v)} />
        <TweakToggle label="Bandeau stats" value={t.showStats}
          onChange={(v) => setTweak("showStats", v)} />
      </TweakSection>

      <TweakSection label="Effets">
        <TweakToggle label="Marquee" value={t.showMarquee}
          onChange={(v) => setTweak("showMarquee", v)} />
        <TweakSlider label="Vitesse marquee" value={t.marqueeSpeed} min={10} max={120} unit="s"
          onChange={(v) => setTweak("marqueeSpeed", v)} />
        <TweakSlider label="Taille marquee" value={t.marqueeSize} min={14} max={64} unit="px"
          onChange={(v) => setTweak("marqueeSize", v)} />
        <TweakToggle label="Point pulsant" value={t.pulseDot}
          onChange={(v) => setTweak("pulseDot", v)} />
        <TweakToggle label="Apparition au scroll" value={t.scrollReveal}
          onChange={(v) => setTweak("scrollReveal", v)} />
      </TweakSection>

      <TweakSection label="Sections visibles">
        <TweakToggle label="À propos" value={t.showAbout} onChange={(v) => setTweak("showAbout", v)} />
        <TweakToggle label="Agences" value={t.showAgencies} onChange={(v) => setTweak("showAgencies", v)} />
        <TweakToggle label="Formations" value={t.showFormations} onChange={(v) => setTweak("showFormations", v)} />
        <TweakToggle label="Permis 1€" value={t.showPermis1} onChange={(v) => setTweak("showPermis1", v)} />
        <TweakToggle label="Tarifs" value={t.showTarifs} onChange={(v) => setTweak("showTarifs", v)} />
        <TweakToggle label="Documents & label" value={t.showDocs} onChange={(v) => setTweak("showDocs", v)} />
        <TweakToggle label="Contact" value={t.showContact} onChange={(v) => setTweak("showContact", v)} />
      </TweakSection>

      <TweakSection label="Copy">
        <TweakText label="Marque" value={t.brandName}
          onChange={(v) => setTweak("brandName", v)} />
        <TweakText label="Téléphone" value={t.phone}
          onChange={(v) => setTweak("phone", v)} />
        <TweakText label="Sous-marque" value={t.sinceShort}
          onChange={(v) => setTweak("sinceShort", v)} />
        <TweakText label="Sous-titre hero" value={t.sinceLong}
          onChange={(v) => setTweak("sinceLong", v)} />
      </TweakSection>
    </TweaksPanel>
  );
}

ReactDOM.createRoot(document.getElementById("tweaks-root")).render(<App />);
