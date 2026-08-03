/* ═══════════════════════════════════════════════════════════
   LE FEED — defini une seule fois, lu par la page Instagram
   ═══════════════════════════════════════════════════════════
   Une photo, un texte, une photo, un texte.

   LES PHOTOS SONT CELLES QUE TU AS VALIDEES, ET RIEN D'AUTRE :
   1, 4, 5, 6, 9, 11, 20, 21, 22, 24, 25, 27, 28, 31, 32, 33,
   34, 35, 36, 37 — plus la 48, qui est la 30 avec le filet de
   cafe que tu avais demande a la place du fil de the.
   Vingt et une vues, vingt et une lignes, quatorze rangees.

   Deux validees sont mises de cote pour garder des rangees
   pleines, et parce qu'elles font doublon de sujet : la 13
   (bar beton, deja dit par la 1) et la 15 (brique sans couleur,
   deja dit par la 6). Donne-en une de plus et on passe a 48.

   L'ordre n'est pas decoratif : il est ecrit pour qu'un seul
   scroll suffise. Ce que c'est, ce qu'il y a dessus, d'ou ca
   vient, ou on le trouve, ce que ca change, ce que ce n'est
   pas, la preuve, l'appel.

   `p` photo · `t` lignes de texte · `s` fond (k noir, e encre,
   w blanc, l lait) · `big` une ligne unique tres grande ·
   `slab` les lignes touchent les bords · `c` la legende.

   La chaine "@mark" dans `t` appelle le vrai logotype, jamais
   une police : le nom de la marque est un dessin (ch. 03).
   ═══════════════════════════════════════════════════════════ */

window.TREMA_FEED = [
  /* ── 1 · ce que c'est ──
     Les lieux et les objets alternent : un lieu tous les deux ou
     trois cadres. Sinon on enchaine les gros plans de nourriture et
     on oublie que trema s'adresse a des commercants. */
  {p:"37-journal-titre",  c:"Every place has an address."},
  {t:["Every place","has an","address"], s:"k",
   c:"trema is yours online."},
  {p:"01-bar-pro",        c:"A bar. Purpose-built for physical places."},
  {t:["@mark","is yours","online"], s:"w",
   c:"Not a website. Your place's address online."},
  {p:"33-espresso-ochre", c:"And what you serve in it."},
  {t:["One","link"], s:"e", big:1,
   c:"Everything about your place. One link."},

  /* ── 2 · ce qu'il y a dessus ── */
  {p:"21-cafe",           c:"A cafe."},
  {t:["Your","menu"], s:"w", big:1,
   c:"Menu, services and pricing — a section of your own page."},
  {p:"27-tomme-shadow",   c:"Your menu, exactly as you publish it."},
  {t:["Your","hours"], s:"l", big:1,
   c:"Open, closed, and the exception this week."},
  {p:"06-brick-yellow",   c:"A dining room, at opening time."},
  {t:["Your","photos"], s:"k", big:1,
   c:"Gallery: uploads and Instagram, in one place."},
  {p:"32-bread-terrazzo", c:"Your photos, pulled from what you already post."},
  {t:["Your","reviews"], s:"w", big:1,
   c:"Your best ones, not the ones an algorithm picked."},
  {p:"04-cuisine",        c:"And your community, on the same page."},
  {t:["All of it","behind","one link"], s:"e", slab:1,
   c:"Your menu, photos, news, reviews and community — behind one link."},

  /* ── 3 · d'ou ca vient ── */
  {p:"24-gallery",        c:"A gallery. Nothing to build."},
  {t:["Built from","what you","already","publish"], s:"w",
   c:"Born from what you already publish on Instagram and Google Maps."},
  {p:"48-cup-coffee",     c:"Two sources, no configuration."},
  {t:["Instagram","+ Google","Maps"], s:"k",
   c:"Connected to both, and kept current from the same sources."},
  {p:"28-tomme-oak",      c:"It does not go stale."},
  {t:["Always","up to","date"], s:"l",
   c:"Publish an event, an offer, a new menu — in minutes."},
  {p:"31-teak-room",      c:"A room. No project, no maintenance."},
  {t:["Nothing","to build.","Nothing to","maintain."], s:"e",
   c:"Nothing to build, nothing to maintain."},

  /* ── 4 · ou on le trouve ── */
  {p:"11-florist-std",    c:"A florist. Found where people actually look."},
  {t:["Found by","Google","and AIs"], s:"w",
   c:"Built for search engines — and AI engines — by design."},
  {p:"22-plate",          c:"Ask an AI where to go tonight."},
  {t:["Your place","has an","answer"], s:"l",
   c:"Google, Maps and AI assistants read your place."},

  /* ── 5 · ce que ca change ── */
  {p:"36-lattice-shadow", c:"Reach is not the same as regulars."},
  {t:["From","followers","to regulars"], s:"e",
   c:"Instagram gives you reach. Your trema gives you regulars."},
  {p:"05-cocktail",       c:"Members, points, tiers."},
  {t:["A Join button","on your","own page"], s:"w",
   c:"Your regulars, not an algorithm's audience."},
  {p:"09-terracotta",     c:"Connect direct to your customers."},
  /* CARROUSEL — l'accroche, puis la reponse au swipe. Le format
     temoignage : on nomme le lieu, on pose la question, on repond.
     Clique le cadre pour faire defiler. */
  {car:[
     {t:["Why","the Vinyl Bar","likes","@mark"]},
     {t:["No","algorithm","decides","who sees","their menu."]},
     {t:["Their","regulars","find them","direct."]},
   ],
   c:"Why the Vinyl Bar likes trema → no algorithm decides who sees their menu, and their regulars find them direct. Swipe."},

  /* ── 6 · ce que ce n'est pas ── */
  {p:"34-blue-door",      c:"A door. A website is a project."},
  {t:["Not a","website"], s:"l", big:1,
   c:"A website is a project. Your trema is already there."},
  {p:"20-magazines",      c:"Yours is somewhere to arrive."},
  {corner:{w:"Yours.", n:["A BIO LINK","LISTS LINKS.","YOURS IS THE","DESTINATION"]}, s:"w",
   c:"A bio link lists your links. Your trema is the destination."},

  /* ── 7 · la preuve ── */
  {p:"35-wine-terrazzo",  c:"Already published, and growing."},
  {t:["380+","tremas"], s:"k", big:1,
   c:"380+ tremas published, heading to 1,000+."},

  /* ── 8 · l'appel ── */
  {p:"25-kitchen",        c:"A kitchen, mid-service. Ninety days of Pro, no card."},
  {t:["Create","your","@mark"], s:"e",
   c:"Create and customize your trema in minutes. Start free — your trema already exists."},
];

/* ── la rotation du style creatif ─────────────────────────────
   Les gestes ne sont plus poses par nth-child. Les series modulo
   se croisaient sans le savoir et deux signes se retrouvaient
   colles : 25 contre 26, puis 2 juste au-dessus de 5 — dans une
   grille a trois colonnes, le voisin du dessous est a +3, pas
   seulement celui de droite a +1.

   Ils sont donc attribues ici, en marchant le feed, avec une
   seule regle absolue : quatre cases au moins entre deux gestes
   charges. Ca couvre le voisin de droite comme celui du dessous,
   quelle que soit la colonne. Un geste isole porte ; deux gestes
   cote a cote s'annulent.

   Le picto domine : c'est lui qui deborde du cadre, qui decoupe
   l'image, qui se pose en coin. Le logotype entier ne sort qu'une
   fois par tour — sinon le nom se banalise a force d'etre ecrit. */
window.TREMA_LOOK = function (list) {
  const CYCLE = ["p-cut", "t-edge", "p-mark", "t-giant", "p-edge", "t-bleed",
                 "p-cut", "t-pat1", "p-mark", "t-giant", "p-edge", "t-pat2"];
  const ECART = 5;                    /* cases minimum entre deux gestes */
  const look  = list.map(() => "");
  let c = 0, dernier = -99, ligne = -99;

  list.forEach((o, i) => {
    const ph = !!o.p, tx = !!o.t && !o.car;
    if (!ph && !tx) return;           /* le carousel et le cadre coin restent nus */

    /* on ne saute pas dans le cycle : on attend le cadre qui va
       avec le geste en tete. A pas fixe on retombait toujours sur
       un rang impair, et pas un seul cadre de texte n'etait servi. */
    if (i - dernier >= ECART) {
      const g = CYCLE[c % CYCLE.length];
      if (g[0] === "p" ? ph : tx) { look[i] = g; c++; dernier = i; return; }
    }
    /* pas de geste ici : une ligne posee sur l'image de temps en
       temps, pour que les photos ne soient pas toutes muettes */
    if (ph && i - ligne >= 7) { look[i] = "p-line"; ligne = i; }
  });
  return look;
};

/* ── la ligne posee sur une image ─────────────────────────────
   Cassee en lignes courtes et d'egale longueur, puis chacune mise
   a la mesure : d'un seul jet, une phrase longue devient un ruban
   de trois pixels de haut a cote d'un "A BAR" qui claque. Toutes
   les lignes affleurent les deux bords, c'est la regle de la maison. */
function casseLigne(txt) {
  const mots = txt.split(" ");
  const n = Math.min(4, Math.max(1, Math.round(txt.length / 13)));
  const cible = txt.length / n;
  const out = [""];
  mots.forEach(m => {
    const cur = out[out.length - 1];
    if (cur && cur.length + m.length + 1 > cible * 1.2 && out.length < n) out.push(m);
    else out[out.length - 1] = cur ? cur + " " + m : m;
  });
  return out.filter(Boolean);
}

/* ── rendu ────────────────────────────────────────────────────
   Une seule fonction pour les deux pages. `dir` est le dossier
   des photos, `small` reduit les marges pour l'apercu. */
window.renderFeed = function (host, dir, small) {
  const BG = {k:"background:var(--noir);color:#fff",
              e:"background:var(--encre);color:var(--papier)",
              w:"background:var(--blanc);color:var(--encre)",
              l:"background:var(--lait);color:var(--encre)"};

  const look = window.TREMA_LOOK(window.TREMA_FEED);

  host.innerHTML = window.TREMA_FEED.map((o, i) => {
    const n = `<span class="n">${String(i+1).padStart(2,"0")}</span>`;
    const k = look[i] ? " " + look[i] : "";
    if (o.p) {
      /* Couches emises pour chaque photo mais masquees : seul le
         style creatif les revele, en rotation. Le texte pose sur
         l'image est la premiere proposition de la legende, coupee
         au premier point — au-dela ca ne se lit plus sur une photo. */
      const line = (o.c || "").split(".")[0].trim();
      const src  = `${dir}/${o.p}.jpg`;
      /* la decoupe reprend la meme image en fond de couche : nette
         dans le signe, tandis que celle du dessous part au flou */
      return `<div class="post ph${k}">${n}
        <img src="${src}" alt="" loading="lazy">
        <div class="cut"><i class="sh"></i>
          <i class="sharp" style="background-image:url('${src}')"></i></div>
        <div class="shade"></div>
        <div class="ovl">${casseLigne(line).map(l => `<span>${l}</span>`).join("")}</div>
        <i class="omark"></i>
        <i class="oedge"></i></div>`;
    }
    if (o.car) {
      const slides = o.car.map((sl, k) => {
        const ls = sl.t.map(l => l === "@mark"
          ? `<span class="wm-line"><i class="wordmark"></i></span>`
          : `<span>${l}</span>`).join("");
        return `<div class="sl${k ? "" : " on"}"><div class="fit">${ls}</div>
          <i class="sig"></i></div>`;
      }).join("");
      const dots = o.car.map((_, k) => `<i class="${k ? "" : "on"}"></i>`).join("");
      return `<div class="post car" data-n="${o.car.length}">${n}${slides}
        <span class="swipe">⧉ ${o.car.length}</span><span class="dots">${dots}</span></div>`;
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
    /* INTERDIT : composer le nom de la marque en typo, et a plus
       forte raison au pluriel. Des que le mot tombe sur "trema" ou
       "tremas", on sort le fichier logotrema.svg. Le point derriere
       est permis, il ne fait pas partie du dessin. */
    const last = flat[flat.length - 1] || "trema";
    const raw = last.split(" ").pop().toLowerCase().replace(/[.,]$/, "");
    const isMark = /^tremas?$/.test(raw);
    const word = isMark
      ? `<i class="wordmark"></i><em>.</em>`
      : raw + ".";
    const note = flat.join(" ").toUpperCase();

    /* Couches decoratives emises pour chaque texte mais masquees :
       seul le style "creatif" les revele, en rotation. Emettre plutot
       que re-rendre garde une seule source pour le message. */
    return `<div class="post tx${mod}${k}" style="${BG[o.s]}">${n}
      <div class="pat"></div>
      <div class="bleed"><i class="wordmark"></i></div>
      <div class="giant"><svg viewBox="0 0 78 91"><use href="#tm"/></svg></div>
      <i class="edge"></i>
      <div class="fit">${lines}</div>
      <div class="cnr"><b>${word}</b><i>${note}</i></div>
      <i class="sig"></i></div>`;
  }).join("");

  host.querySelectorAll(".post.car").forEach(car => {
    car.addEventListener("click", () => {
      const sl = [...car.querySelectorAll(".sl")], dt = [...car.querySelectorAll(".dots i")];
      const i = sl.findIndex(s => s.classList.contains("on"));
      const j = (i + 1) % sl.length;
      sl[i].classList.remove("on"); sl[j].classList.add("on");
      dt[i].classList.remove("on"); dt[j].classList.add("on");
    });
  });

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
/* Mesure la chasse reelle d'une ligne, puis la met a la mesure de
   sa colonne. Le detour par max-content n'est pas cosmetique : un
   span en display:block est etire par sa boite, scrollWidth renvoie
   alors la largeur de la boite et le calcul tourne en rond — toute
   la typo du feed etait restee bloquee a 10px. */
function mesure(sp, box) {
  if (!box) return;
  sp.style.fontSize = "10px";
  sp.style.width = "max-content";
  const w = sp.scrollWidth;
  sp.style.width = "";
  if (w) sp.style.fontSize = (10 * box / w) + "px";
}

function fitAll(host) {
  /* le mot du cadre "coin" se cale sur la largeur, comme les lignes :
     il doit etre entier, pas rogne par le bord */
  /* le texte pose sur une photo se cale sur la largeur, comme le reste */
  host.querySelectorAll(".post .ovl span").forEach(sp => {
    const cell = sp.closest(".post");
    mesure(sp, cell ? cell.clientWidth * 0.84 : 0);
  });

  host.querySelectorAll(".post .cnr b, .post.cn b").forEach(b => {
    const cell = b.closest(".post");
    const box = cell ? cell.clientWidth * 0.92 : 0;
    if (!box) return;
    /* Quand le nom est le logotype, il n'y a plus de texte a mesurer :
       il ne reste que le point. Mesure dessus, il montait a 690px et
       devorait le cadre pendant que le dessin tombait a 25 x 6 px.
       On calcule donc le corps pour que le logotype, large de 2.9em,
       remplisse la mesure. Le point est compose dans le meme em :
       juste par construction, sans rien mesurer. */
    const dessin = b.querySelector(".wordmark");
    if (dessin) {
      /* en em, la largeur du logotype se resout sur le corps du
         dessin lui-meme et non sur celui du mot : il tombait a 9px.
         On le pose en pixels, et le corps du point suit sa hauteur
         pour garder la proportion voulue par la feuille de style. */
      const w = box * 0.86;
      dessin.style.width  = w + "px";
      dessin.style.height = (w / 4) + "px";
      b.style.fontSize = (w / 4 / 0.72) + "px";
      return;
    }
    mesure(b, box);
  });
  host.querySelectorAll(".post.tx .fit, .post.car .fit").forEach(fit => {
    const box = fit.clientWidth;
    if (!box) return;
    fit.querySelectorAll("span").forEach(sp => {
      const mark = sp.querySelector(".wordmark");
      if (mark) { mark.style.width = box + "px"; mark.style.height = (box/4) + "px"; return; }
      mesure(sp, box);
    });
  });
}
