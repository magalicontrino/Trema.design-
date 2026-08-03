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
  {t:["@mark","Is yours"], s:"k", it:1,
   c:"trema is yours online."},
  {p:"01-bar-pro",        c:"A bar. Purpose-built for physical places."},
  {sgn:1, s:"k",
   c:"Every place has an address. Not a website — the address itself."},
  {p:"33-espresso-ochre", c:"And what you serve in it."},
  /* La question et sa reponse : deux vues, on balaie. La reponse ne
     s'ecrit pas, elle se montre — le mot "Because" et le picto du
     menu derriere lui. */
  {car:[
     {t:["Why","vinyl","bars","love","@mark?"], rag:1},
     {t:["Because"], rag:1, pic:"menu"},
   ], s:"k",
   c:"Because everything is already in the menu. One link, and it is there."},

  /* ── 2 · ce qu'il y a dessus ── */
  {p:"21-cafe",           c:"A cafe."},
  {t:["Your","menu"], s:"w", big:1, n:"Your place",
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
  /* "La decouverte", posee telle quelle depuis la page Titre : les
     segments alternent capitales grasses et italique bas-de-casse.
     `ti` decrit les lignes, `s:"up"/"it"` le style de chaque segment. */
  /* Le titre compose n'est pas valide : les deux piliers passent au
     drapeau, qui l'est. Capitales, un seul corps, bord droit libre. */
  {t:["Found by","Google","and AIs."], s:"w", rag:1,
   c:"Built for search engines — and AI engines — by design."},
  {p:"22-plate",          c:"Ask an AI where to go tonight."},
  {t:["Your place","has an","answer"], s:"l",
   c:"Google, Maps and AI assistants read your place."},

  /* ── 5 · ce que ca change ── */
  {p:"36-lattice-shadow", c:"Reach is not the same as regulars."},
  /* "Les habitues", le titre de la page Titre, dans le feed. */
  {t:["From","followers to","Regulars."], s:"e", rag:1,
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
  /* le nom au pluriel reste le dessin : "380+" au-dessus du logotype.
     Le compter en typo composerait la marque en police — interdit. */
  {t:["380+","@mark"], s:"k", big:1,
   c:"380+ tremas published, heading to 1,000+."},

  /* ── 8 · l'appel ── */
  {p:"77-comptoir-cafe",        c:"A kitchen, mid-service. Ninety days of Pro, no card."},
  {t:["Create","your","@mark"], s:"e",
   c:"Create and customize your trema in minutes. Start free — your trema already exists."},
];

/* ── rendu ────────────────────────────────────────────────────
   Une seule fonction pour les deux pages. `dir` est le dossier
   des photos, `small` reduit les marges pour l'apercu. */
window.renderFeed = function (host, dir, small) {
  const BG = {k:"background:var(--noir);color:#fff",
              e:"background:var(--encre);color:var(--papier)",
              w:"background:var(--blanc);color:var(--encre)",
              l:"background:var(--lait);color:var(--encre)"};
  /* les titres passent par les variables et non par background/color :
     le contour des segments est peint couleur du fond (var(--bg)), il
     doit donc suivre le fond du cadre, pas celui de la section. */
  const VARS = {k:"--bg:var(--noir);--fg:#fff",
                e:"--bg:var(--encre);--fg:var(--papier)",
                w:"--bg:var(--blanc);--fg:var(--encre)",
                l:"--bg:var(--lait);--fg:var(--encre)"};

  host.innerHTML = window.TREMA_FEED.map((o, i) => {
    const n = `<span class="n">${String(i+1).padStart(2,"0")}</span>`;
    if (o.p) {
      /* Couches emises pour chaque photo mais masquees : seul le
         style creatif les revele, en rotation. Le texte pose sur
         l'image est la premiere proposition de la legende, coupee
         au premier point — au-dela ca ne se lit plus sur une photo. */
      return `<div class="post ph">${n}
        <img src="${dir}/${o.p}.jpg" alt="" loading="lazy"></div>`;
    }
    if (o.car) {
      /* chaque vue porte ses propres reglages : drapeau, picto de fond,
         et le meme jeton @mark que les cadres de texte. */
      const slides = o.car.map((sl, k) => {
        const ls = sl.t.map(l => {
          const m = /^@mark([?!.]?)$/.exec(l);
          return m
            ? `<span class="wm-line"><i class="wordmark"></i>${m[1] ? `<em>${m[1]}</em>` : ""}</span>`
            : `<span>${l}</span>`;
        }).join("");
        const fond = sl.pic
          ? `<i class="carpic" style="--p:url('picto/web/${sl.pic}.svg')"></i>` : "";
        return `<div class="sl${k ? "" : " on"}${sl.rag ? " rag" : ""}">${fond}
          <div class="fit">${ls}</div><i class="sig"></i></div>`;
      }).join("");
      const dots = o.car.map((_, k) => `<i class="${k ? "" : "on"}"></i>`).join("");
      return `<div class="post car" data-n="${o.car.length}" style="${BG[o.s] || ""}">${n}${slides}
        <span class="swipe">⧉ ${o.car.length}</span><span class="dots">${dots}</span></div>`;
    }
    /* le titre compose, tel quel depuis la page Titre : des lignes de
       segments qui alternent capitales grasses et italique bas-de-casse,
       bord a bord. `r` est le rapport de corps de l'italique — sa
       hauteur d'x est basse, composee au meme corps elle paraitrait
       deux fois plus petite. La mise a la mesure est dans fitAll. */
    if (o.ti) {
      const lignes = o.ti.map(l => `<div class="ligne">` +
        l.map(g => `<span class="seg ${g.s}" data-r="${g.s === "it" ? 1.04 : 1}">${g.t}</span>`).join("") +
        `</div>`).join("");
      return `<div class="post tx ti" style="${VARS[o.s] || ""}">${n}
        <div class="titre">${lignes}</div><i class="sig"></i></div>`;
    }
    /* le cadre-signe : le picto sort du format des deux cotes, sans
       un mot. Il ne depend d'aucun style, il est ecrit dans le feed —
       on le veut dans les trois premieres rangees, partout. */
    if (o.sgn) {
      return `<div class="post tx sgn" style="${BG[o.s]}">${n}
        <i class="edge"></i></div>`;
    }
    if (o.corner) {
      return `<div class="post cn" style="${BG[o.s]}">${n}
        <b>${o.corner.w}</b><i>${o.corner.n.join("<br>")}</i></div>`;
    }
    /* INTERDIT de composer le nom en typo : des qu'une ligne tombe sur
       la marque, on sort le dessin. La ponctuation qui suit est permise,
       elle ne fait pas partie du logotype. */
    const lines = o.t.map(l => {
      const m = /^@mark([?!.]?)$/.exec(l);
      return m
        ? `<span class="wm-line"><i class="wordmark"></i>${m[1] ? `<em>${m[1]}</em>` : ""}</span>`
        : `<span>${l}</span>`;
    }).join("");
    const mod = (o.big ? " big" : "") + (o.slab ? " slab" : "")
              + (o.rag ? " rag" : "") + (o.it ? " it" : "");

    /* Deux types de titres, pas plus : le bloc de capitales ici, le
       titre compose plus haut. La couche "coin" n'est plus emise —
       le mot cale en coin ne vit que la ou il est ecrit dans le feed. */
    return `<div class="post tx${mod}" style="${BG[o.s]}">${n}
      <div class="fit">${lines}</div>
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
  /* une seconde passe quand les fontes sont vraiment la : la premiere
     a pu mesurer une police de secours, et les chasses different. */
  document.fonts.ready.then(() => fitAll(host));
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
  /* le titre compose : la regle de la page Titre, un seul corps pour
     tout le bloc. On pose un corps de sonde, on lit la largeur reelle
     de chaque ligne — recouvrements compris — et c'est la plus longue
     qui fixe l'echelle ; les autres s'arretent ou elles s'arretent. */
  host.querySelectorAll(".post.ti .titre").forEach(bloc => {
    const box = bloc.clientWidth;
    if (!box) return;
    const lignes = [...bloc.querySelectorAll(".ligne")];
    const k = lignes.map(l => {
      [...l.children].forEach(x => x.style.fontSize = (100 * (+x.dataset.r || 1)) + "px");
      const w = l.scrollWidth;
      return w ? box / w : 0;
    }).filter(x => x > 0);
    if (!k.length) return;
    const kf = Math.min(...k);
    lignes.forEach(l => [...l.children].forEach(x =>
      x.style.fontSize = (100 * (+x.dataset.r || 1) * kf) + "px"));
  });

  /* le mot du cadre "coin" se cale sur la largeur, comme les lignes :
     il doit etre entier, pas rogne par le bord */
  host.querySelectorAll(".post.cn b").forEach(b => {
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
  /* le drapeau : une seule taille pour le bloc entier. On mesure
     chaque ligne a 10 px, la plus longue donne l'echelle. Le dessin
     du logotype compte pour sa largeur reelle — quatre fois sa
     hauteur — sinon il ne pese rien dans la comparaison. */
  host.querySelectorAll(".post.tx.rag .fit, .post.car .sl.rag .fit").forEach(fit => {
    const box = fit.clientWidth;
    if (!box) return;
    const lignes = [...fit.children];
    const HAUT = 0.62;                 /* le dessin se cale sur la hauteur de capitale */
    const pose = (sp, taille) => {
      sp.style.fontSize = taille + "px";
      const mark = sp.querySelector(".wordmark");
      if (mark) { mark.style.width = (taille*HAUT*4) + "px";
                  mark.style.height = (taille*HAUT) + "px"; }
    };
    let large = 0;
    lignes.forEach(sp => { pose(sp, 10); large = Math.max(large, sp.scrollWidth); });
    if (!large) return;
    lignes.forEach(sp => pose(sp, 10 * box / large));

    /* et il se cale aussi en hauteur : cinq lignes mises a la mesure de
       la plus longue tombaient sous le bas du cadre. La largeur donne un
       plafond, la hauteur en donne un autre, c'est le plus petit qui gagne. */
    const cadre = fit.closest(".post");
    const haut = cadre ? cadre.clientHeight * 0.82 : 0;
    if (haut && fit.scrollHeight > haut) {
      const k = haut / fit.scrollHeight;
      lignes.forEach(sp => pose(sp, parseFloat(sp.style.fontSize) * k));
    }
  });

  host.querySelectorAll(".post.tx:not(.rag) .fit, .post.car .sl:not(.rag) .fit").forEach(fit => {
    const box = fit.clientWidth;
    if (!box) return;
    fit.querySelectorAll("span").forEach(sp => {
      const mark = sp.querySelector(".wordmark");
      if (mark) { mark.style.width = box + "px"; mark.style.height = (box/4) + "px"; return; }
      mesure(sp, box);
    });
  });
}
