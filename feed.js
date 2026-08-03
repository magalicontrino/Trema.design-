/* ═══════════════════════════════════════════════════════════
   LE FEED — defini une seule fois, lu par les deux pages
   ═══════════════════════════════════════════════════════════
   instagram.html l'affiche en grand avec ses legendes,
   selection.html l'affiche sous la banque d'images. Les deux
   lisent ce fichier, donc ils ne peuvent plus diverger.

   Une photo, un texte, une photo, un texte. Vingt-quatre vues
   choisies, vingt-quatre lignes de la message house, seize
   rangees pleines.

   L'ordre n'est pas decoratif : il est ecrit pour qu'un seul
   scroll suffise. Ce que c'est, ce qu'il y a dessus, d'ou ca
   vient, ou on le trouve, ce que ca change, ce que ce n'est
   pas, la preuve, l'appel. Huit blocs de six.

   `p` photo · `t` lignes de texte · `s` fond (k noir, e encre,
   w blanc, l lait) · `big` une ligne unique tres grande ·
   `c` la legende qui part avec le post.

   La chaine "@mark" dans `t` appelle le vrai logotype, jamais
   une police : le nom de la marque est un dessin (ch. 03).
   ═══════════════════════════════════════════════════════════ */

window.TREMA_FEED = [
  /* ── 1 · ce que c'est ── */
  {p:"37-journal-titre",  c:"Every place has an address."},
  {t:["Every place","has an","address"], s:"k",
   c:"trema is yours online."},
  {p:"01-bar-pro",        c:"Purpose-built for physical places."},
  {t:["@mark","is yours","online"], s:"w",
   c:"Not a website. Your place's address online."},
  {p:"33-espresso-ochre", c:"One link that holds everything."},
  {t:["One","link"], s:"e", big:1,
   c:"Everything about your place. One link."},

  /* ── 2 · ce qu'il y a dessus ── */
  {p:"27-tomme-shadow",   c:"Your menu, exactly as you publish it."},
  {t:["Your","menu"], s:"w", big:1,
   c:"Menu, services and pricing — a section of your own page."},
  {p:"32-bread-terrazzo", c:"Your hours, without anyone having to call."},
  {t:["Your","hours"], s:"l", big:1,
   c:"Open, closed, and the exception this week."},
  {p:"04-cuisine",        c:"Your photos, pulled from what you already post."},
  {t:["Your","photos"], s:"k", big:1,
   c:"Gallery: uploads and Instagram, in one place."},
  {p:"48-cup-coffee",    c:"Your reviews, the ones you choose."},
  {t:["Your","reviews"], s:"w", big:1,
   c:"Your best ones, not the ones an algorithm picked."},
  {p:"28-tomme-oak",      c:"And your community, on the same page."},
  /* `slab` : les lignes touchent presque les bords, interligne
     serre, graisse au maximum. Un seul post pour l'instant. */
  {t:["All of it","behind","one link"], s:"e", slab:1,
   c:"Your menu, photos, news, reviews and community — behind one link."},

  /* ── 3 · d'ou ca vient ── */
  {p:"02-florist-pro",    c:"Nothing to build."},
  {t:["Built from","what you","already","publish"], s:"w",
   c:"Born from what you already publish on Instagram and Google Maps."},
  {p:"21-cafe",           c:"Two sources, no configuration."},
  {t:["Instagram","+ Google","Maps"], s:"k",
   c:"Connected to both, and kept current from the same sources."},
  {p:"22-plate",          c:"It does not go stale."},
  {t:["Always","up to","date"], s:"l",
   c:"Publish an event, an offer, a new menu — in minutes."},
  {p:"36-lattice-shadow", c:"No project, no maintenance."},
  {t:["Nothing","to build.","Nothing to","maintain."], s:"e",
   c:"Nothing to build, nothing to maintain."},

  /* ── 4 · ou on le trouve ── */
  {p:"29-green-door",     c:"Found where people actually look."},
  {t:["Found by","Google","and AIs"], s:"w",
   c:"Built for search engines — and AI engines — by design."},
  {p:"24-gallery",        c:"Structured data on every trema, nothing to configure."},
  {t:["Ask an AI","where to go","tonight"], s:"k",
   c:"When someone asks an AI where to go tonight…"},
  {p:"05-cocktail",       c:"…your place has an answer."},
  {t:["Your place","has an","answer"], s:"l",
   c:"Google, Maps and AI assistants read your place."},

  /* ── 5 · ce que ca change ── */
  {p:"06-brick-yellow",   c:"Reach is not the same as regulars."},
  {t:["From","followers","to regulars"], s:"e",
   c:"Instagram gives you reach. Your trema gives you regulars."},
  {p:"09-terracotta",     c:"Members, points, tiers."},
  {t:["A Join button","on your","own page"], s:"w",
   c:"Your regulars, not an algorithm's audience."},
  {p:"20-magazines",      c:"Connect direct to your customers."},
  {t:["No algorithm","decides who","sees your","menu"], s:"k",
   c:"No algorithm decides who sees your menu."},

  /* ── 6 · ce que ce n'est pas ── */
  {p:"34-blue-door",      c:"A website is a project."},
  {t:["Not a","website"], s:"l", big:1,
   c:"A website is a project. Your trema is already there."},
  {p:"13-bar-concrete",   c:"A bio link lists your links."},
  {t:["A bio link","lists links"], s:"e",
   c:"Designed for creators, not for places."},
  {p:"35-wine-terrazzo",  c:"Yours is somewhere to arrive."},
  /* `corner` : un seul mot enorme cale en bas a gauche, la mention
     en petit en haut a droite. Le mot deborde volontairement en bas. */
  {corner:{w:"Yours.", n:["A BIO LINK","LISTS LINKS.","YOURS IS THE","DESTINATION"]}, s:"w",
   c:"A bio link lists your links. Your trema is the destination."},

  /* ── 7 · la preuve ── */
  {p:"31-teak-room",      c:"Already published, and growing."},
  {t:["380+","tremas"], s:"k", big:1,
   c:"380+ tremas published, heading to 1,000+."},
  {p:"15-brick-plain",    c:"Yours is probably one of them."},
  {t:["@mark","already","exists"], s:"l",
   c:"Start free. Your trema already exists."},

  /* ── 8 · l'appel ── */
  {p:"25-kitchen",        c:"Ninety days of Pro, no card."},
  {t:["Create","your","@mark"], s:"e",
   c:"Create and customize your trema in minutes."},
];

/* ── rendu ────────────────────────────────────────────────────
   Une seule fonction pour les deux pages. `dir` est le dossier
   des photos, `small` reduit les marges pour l'apercu. */
window.renderFeed = function (host, dir, small) {
  const BG = {k:"background:var(--noir);color:#fff",
              e:"background:var(--encre);color:var(--papier)",
              w:"background:var(--blanc);color:var(--encre)",
              l:"background:var(--lait);color:var(--encre)"};

  host.innerHTML = window.TREMA_FEED.map((o, i) => {
    const n = `<span class="n">${String(i+1).padStart(2,"0")}</span>`;
    if (o.p) {
      return `<div class="post ph">${n}<img src="${dir}/${o.p}.jpg" alt="" loading="lazy"></div>`;
    }
    if (o.corner) {
      return `<div class="post cn" style="${BG[o.s]}">${n}
        <b>${o.corner.w}</b><i>${o.corner.n.join("<br>")}</i></div>`;
    }
    const lines = o.t.map(l => l === "@mark"
      ? `<span class="wm-line"><i class="wordmark"></i></span>`
      : `<span>${l}</span>`).join("");
    const mod = (o.big ? " big" : "") + (o.slab ? " slab" : "");

    /* Le cadre "coin" est emis pour chaque texte mais masque : le
       style D le revele une fois sur deux. Emettre les deux plutot
       que de re-rendre evite de dupliquer la source du message. */
    const flat = o.t.filter(l => l !== "@mark");
    const word = (flat[0] || "trema").split(" ")[0].toLowerCase() + ".";
    const note = flat.join(" ").toUpperCase();

    return `<div class="post tx${mod}" style="${BG[o.s]}">${n}
      <div class="fit">${lines}</div>
      <div class="cnr"><b>${word}</b><i>${note}</i></div></div>`;
  }).join("");

  fitAll(host);
  addEventListener("resize", () => fitAll(host), {passive:true});
};

/* ── l'ajustement ─────────────────────────────────────────────
   Chaque ligne est mise a la mesure exacte de sa colonne : on
   mesure le rendu reel puis on met la taille a l'echelle. Deux
   passes suffisent, la troisieme ne bouge plus rien.

   Calcule au chargement plutot qu'ecrit en dur parce que les
   chasses dependent de l'axe FLAR, que le canvas ne sait pas
   mesurer — deux tentatives d'ecriture en dur ont deborde. */
function fitAll(host) {
  host.querySelectorAll(".post.tx .fit").forEach(fit => {
    const box = fit.clientWidth;
    if (!box) return;
    fit.querySelectorAll("span").forEach(sp => {
      const mark = sp.querySelector(".wordmark");
      if (mark) { mark.style.width = box + "px"; mark.style.height = (box/4) + "px"; return; }
      sp.style.fontSize = "10px";
      const w = sp.scrollWidth;
      if (w) sp.style.fontSize = (10 * box / w) + "px";
    });
  });
}
