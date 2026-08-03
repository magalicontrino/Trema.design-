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
  /* Le feed est bati sur le vocabulaire, et sur rien d'autre. Chaque
     cadre de texte EST une composition de la page Compositions, avec
     ses mots a elle. UNE PHOTO ENTRE CHAQUE COMPOSITION, sans
     exception : les quatre compositions qui portent deja une image
     comptent comme des photos et occupent une place de photo.

     Vingt-sept cadres, neuf rangees pleines. Le compte n'est pas
     libre : le profil affiche trois colonnes, et une rangee entamee se
     voit tout de suite. Quatorze compositions, treize photos — le feed
     ouvre et ferme donc sur une composition, la premiere disant ce que
     c'est, la derniere appelant a le faire.

     TROIS ALTERNANCES, et elles font tout le rythme.

     Les fonds : un noir, un blanc, un noir, un blanc. Le feed etait aux
     deux tiers noir et s'assombrissait en descendant. Le fond d'une
     composition est libre — la meme se pose sur l'un ou sur l'autre —
     donc rien n'obligeait a ce noir continu. Seul Le masque est fixe :
     son signe est blanc, il lui faut le noir.

     Les photos : un lieu, un objet. Sans cette regle on enchaine les
     gros plans de nourriture et on oublie que trema s'adresse a des
     commercants.

     Les variations du signe : une tous les trois ou quatre cadres de
     texte. Rangees dans l'ordre du vocabulaire elles s'enchainaient,
     et on scrollait a travers plusieurs pictos d'affilee.

     QUATRE COMPOSITIONS RESTENT HORS DU FEED, et c'est voulu : le
     sommaire, le signe repete, le signe centre et la signature. Elles
     restent au vocabulaire — une composition n'a pas a etre postee
     pour exister. Le sommaire est une carte a lire, pas a survoler ;
     le signe repete est une matiere, un fond ; le signe centre et la
     signature ferment un document, et un feed ne se ferme pas. */

  {nom:"Le bloc", t:["Every place","has an","address"], s:"k",
   c:"Every place has an address. trema is yours online."},
  {p:"80-salle-restaurant", mot:"lagaleriedesarts", nom:"La carte de lieu",
   c:"La Galerie des Arts. Every place has an address — here is theirs."},

  {nom:"Le signe", sgn:1, adr:"tre.ma/", s:"w",
   c:"Not a website. The address itself."},
  {p:"37-journal-titre",  c:"A front page, held out of the sea."},

  {nom:"Le chiffre", t:["380+","@mark"], s:"k", big:1,
   c:"380+ tremas published, heading to 1,000+."},
  {p:"21-cafe",           c:"A cafe."},

  {nom:"Le titre compose", ti:[[{t:"All", s:"up"}], [{t:"about", s:"it"}], [{t:"Your", s:"up"}],
       [{t:"place.", s:"it"}], [{t:"One", s:"up"}], [{t:"link", s:"it"}]], s:"w",
   c:"All about your place. One link."},
  {p:"71-creole-vermillon", c:"Mango, mint, rocket, red onion. Vermilion table, striped light."},

  {nom:"Le masque", sgn:"fil", adr:"Every place has an address", s:"k",
   c:"Every place has an address — cut into the mark itself."},
  {p:"36-lattice-shadow", sph:1, nom:"Le signe sur la photo",
   c:"The mark laid whole over the frame — the inverse of the cut-out."},

  {nom:"Le bloc clair", t:["Nothing","to build.","Nothing to","maintain."], s:"w",
   c:"Nothing to build, nothing to maintain."},
  {p:"52-red-panel",      c:"Perforated red wood, one brass bar."},

  {nom:"Le drapeau", t:["Why","vinyl","bars","love ?"], s:"k", rag:1,
   c:"Why do vinyl bars love trema? Because everything is already in the menu."},
  {p:"24-gallery",        c:"A gallery. Nothing to build."},

  {nom:"Le signe et le logotype", sgn:"duo", s:"w",
   c:"The mark and the name. Both drawn, neither typed."},
  {p:"76-tomates-plateau", c:"Straight out of the oven, steel tray on concrete."},

  {nom:"Checklist", coches:["Menu","Hours","Photos","Reviews","News","Community"], s:"k",
   c:"Menu, hours, photos, reviews, news and community. It is all there."},
  {p:"01-bar-pro",        c:"A bar. Purpose-built for physical places."},

  {nom:"Le mot seul", t:["One","link"], s:"w", big:1,
   c:"Everything about your place. One link."},
  {p:"20-magazines", phc:1, nom:"Le picto sur la photo", c:"Signed, not decorated."},

  {nom:"Le titre compose, clair sur noir", ti:[[{t:"All", s:"up"}], [{t:"about", s:"it"}],
       [{t:"Your", s:"up"}, {t:"place.", s:"it"}],
       [{t:"One", s:"up"}, {t:"link", s:"it"}]], s:"k",
   c:"The same words, cut in four. It is the cut that lets it breathe."},
  {p:"11-florist-std",    c:"A florist. Found where people actually look."},

  {nom:"Le signe entier", sgn:"ent", adr:"tre.ma", s:"w",
   c:"tre.ma — the whole mark, this time."},
  {p:"22-plate", dec:1, nom:"La photo decoupee", c:"A plate, cut into the mark."},

  {nom:"Le coin", corner:{w:"Yours.", n:["A BIO LINK","LISTS LINKS.","YOURS IS THE","DESTINATION"]}, s:"k",
   c:"A bio link lists your links. Your trema is the destination."},
  {p:"34-blue-door",      c:"A door. A website is a project."},

  {nom:"Le bloc", t:["Create","your","@mark"], s:"w",
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
    const n = `<span class="n">${String(i+1).padStart(2,"0")}</span>`
      /* le nom de la composition, montre au survol seulement : on doit
         pouvoir nommer un cadre sans quitter le feed, et ne rien voir
         quand on le regarde pour ce qu'il est. */
      + (o.nom ? `<span class="nomc">${o.nom}</span>` : "");
    if (o.p) {
      /* Couches emises pour chaque photo mais masquees : seul le
         style creatif les revele, en rotation. Le texte pose sur
         l'image est la premiere proposition de la legende, coupee
         au premier point — au-dela ca ne se lit plus sur une photo. */
      /* `phc` signe la photo du picto en coin, `dec` la decoupe dans
         le dessin. Sans l'un ni l'autre, la photo reste nue — c'est le
         cas le plus frequent, et il doit le rester. */
      const mode = (o.phc ? " phc" : "") + (o.dec ? " dec" : "")
                 + (o.sph ? " sph" : "") + (o.mot ? " cli" : "");
      const nom = o.mot
        ? `<div class="ov"><b><i class="pic"></i><u class="bar"></u><em>${o.mot}</em></b></div>` : "";
      return `<div class="post ph${mode}">${n}
        <img src="${dir}/${o.p}.jpg" alt="" loading="lazy">${nom}</div>`;
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
          <div class="fit">${ls}</div></div>`;
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
        <div class="titre">${lignes}</div></div>`;
    }
    /* le cadre-signe : le picto sort du format des deux cotes, sans
       un mot. Il ne depend d'aucun style, il est ecrit dans le feed —
       on le veut dans les trois premieres rangees, partout. */
    /* le cadre-signe et ses cinq variations. `sgn` porte le nom de la
       variation — entier, centre, logotype, masque, repete — et `adr`
       le texte qui l'accompagne. Sans variation, c'est le signe qui
       sort du format des deux cotes. */
    if (o.sgn) {
      const v = typeof o.sgn === "string" ? " " + o.sgn : "";
      const wm = o.sgn === "duo" ? `<i class="wm"></i>` : "";
      const adr = o.adr ? `<u>${o.adr}</u>` : "";
      return `<div class="post tx sgn${v}" style="${BG[o.s]}">${n}
        <i class="edge"></i>${wm}${adr}</div>`;
    }
    /* la checklist : les cases sont cochees d'un V trace au filet, et
       le corps se pose sur la LIGNE, jamais sur la case. */
    if (o.coches) {
      const lignes = o.coches.map(l =>
        `<span class="on"><i class="bx"></i>${l}</span>`).join("");
      return `<div class="post tx liste" style="${BG[o.s]}">${n}
        <div class="fit">${lignes}</div></div>`;
    }
    /* le sommaire : la carte divisee en six, un picto et un mot par
       case. Il ne passe pas par la mise a la mesure — son corps est
       declare en cqw et doit rester petit. */
    if (o.pictos) {
      const cases = o.pictos.map(([p, l]) =>
        `<span class="cel"><i style="--p:url('picto/web/${p}.svg')"></i><em>${l}</em></span>`).join("");
      return `<div class="post tx som" style="${BG[o.s]}">${n}
        <div class="grid">${cases}</div></div>`;
    }
    /* la signature : le logotype seul, centre. Un dessin, pas un mot. */
    if (o.sign) {
      return `<div class="post tx sign" style="${BG[o.s]}">${n}
        <i class="wm"></i></div>`;
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
      </div>`;
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
  /* l'adresse de la carte de lieu : mise a la mesure, sur une ligne.
     Une taille fixe ne peut pas convenir — la longueur de l'adresse
     change a chaque lieu, et c'est elle qui doit remplir la ligne. */
  host.querySelectorAll(".post.ph.cli b").forEach(b => {
    const cell = b.closest(".post");
    const box = cell ? cell.clientWidth * 0.78 : 0;
    if (box) mesure(b, box);
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

  /* la checklist : un seul corps pour toutes les lignes, cale a 62 % de
     la mesure — une liste ne remplit pas la case, et c'est ce retrait
     qui la fait lire comme une liste. Le corps se pose sur la ligne :
     pose sur la case, elle devenait enorme pendant que le mot restait
     petit, et les six cases se soudaient en une barre noire. */
  host.querySelectorAll(".post.tx.liste .fit").forEach(fit => {
    const box = fit.clientWidth;
    if (!box) return;
    const lignes = [...fit.children];
    const pose = t => lignes.forEach(l => l.style.fontSize = t + "px");
    pose(100);
    const k = Math.min(...lignes.map(l => l.scrollWidth ? box * 0.62 / l.scrollWidth : Infinity));
    if (!isFinite(k)) return;
    pose(100 * k);
    const cadre = fit.closest(".post");
    const haut = cadre ? cadre.clientHeight * 0.82 : 0;
    if (haut && fit.scrollHeight > haut) pose(100 * k * haut / fit.scrollHeight);
  });

  host.querySelectorAll(".post.tx:not(.rag):not(.liste) .fit, .post.car .sl:not(.rag) .fit").forEach(fit => {
    const box = fit.clientWidth;
    if (!box) return;
    fit.querySelectorAll("span").forEach(sp => {
      const mark = sp.querySelector(".wordmark");
      if (mark) { mark.style.width = box + "px"; mark.style.height = (box/4) + "px"; return; }
      mesure(sp, box);
    });
  });

  /* ══ GARDE-FOU DE HAUTEUR ═════════════════════════════════════
     UNE COMPOSITION VALIDEE DOIT ETRE POSTABLE TELLE QUELLE. Si elle
     tient sur la page Compositions, elle doit tenir dans le cadre du
     feed — sinon "valide" ne veut rien dire.

     La mise a la mesure ne regle que la LARGEUR. Six lignes courtes,
     comme le titre compose un mot par ligne, passent la largeur sans
     difficulte et sortent par le bas : c'est exactement ce qui vient
     d'arriver, "One link" etait coupe. La page Compositions, elle,
     calait deja en hauteur ; le feed non. Les deux le font maintenant.

     On reduit TOUT le bloc dans la meme proportion. Reduire ligne a
     ligne casserait le corps unique, qui est la regle de la moitie des
     compositions. Le dessin du logotype suit dans le meme rapport : en
     pixels il ne se resout pas sur le corps, il faut le remettre a
     l'echelle a la main. */
  host.querySelectorAll(".post").forEach(post => {
    const bloc = post.querySelector(".fit, .titre");
    if (!bloc) return;
    const st = getComputedStyle(post);
    const dispo = post.clientHeight - parseFloat(st.paddingTop) - parseFloat(st.paddingBottom);
    if (!(dispo > 0) || bloc.scrollHeight <= dispo) return;
    /* 0.98 et non 1 : cale au pixel pres, un arrondi de rendu suffit a
       remettre une ligne d'italique un cheveu sous le bord, et une
       descendante se retrouve rognee. Ce pour-cent d'air ne se voit
       pas et supprime le cas limite. */
    const k = dispo * 0.98 / bloc.scrollHeight;
    const mettre = x => {
      if (x.style.fontSize) x.style.fontSize = (parseFloat(x.style.fontSize) * k) + "px";
      if (x.classList.contains("wordmark") && x.style.width) {
        x.style.width  = (parseFloat(x.style.width) * k) + "px";
        x.style.height = (parseFloat(x.style.height) * k) + "px";
      }
    };
    mettre(bloc);
    bloc.querySelectorAll("*").forEach(mettre);
  });
}
