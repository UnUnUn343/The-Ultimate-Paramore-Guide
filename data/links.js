// Everything is interlinked: besides band members (names.js), albums, songs, tours and events mentioned in any text become links
// (album → its era page, song → its song page, tour/event → its page) with the same hover card (touch: first tap opens the card).
// Songs are linked when they are in quotes (“…” / «…») or when the title is long enough to be unmistakable; each target is linked once per paragraph.
(() => {
  Object.assign(UI, {
    entSong: { ua: "Пісня", en: "Song" }, entAlbum: { ua: "Альбом", en: "Album" }, entTour: { ua: "Тур", en: "Tour" }, entEvent: { ua: "Подія", en: "Event" }, entOpen: { ua: "Відкрити", en: "Open" }
  });
  const WORD = "A-Za-z0-9_А-Яа-яІіЇїЄєҐґ", AP = "'’";
  const rx = s => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/['’]/g, "['’]").replace(/ /g, "\\s+");
  const norm = s => s.toLowerCase().replace(/[’‘]/g, "'").replace(/\s+/g, " ").trim();
  let B = null; // built on first use, when all data files are loaded

  // [phrase, target]; the longer phrase always wins at the same place
  const ALBUMS = [["All We Know Is Falling", "era:awkif"], ["Riot!", "era:riot"], ["Brand New Eyes", "era:bne"], ["After Laughter", "era:al"], ["This Is Why", "era:tiw"], ["Singles Club", "era:trio"],
    ["Petals for Armor", "era:hiatus"], ["FLOWERS for VASES", "era:hiatus"], ["Flowers for Vases", "era:hiatus"], ["self-titled album", "era:paramore"], ["Self-Titled", "era:paramore"],
    ["Ego Death at a Bachelorette Party", "era:now"]];
  const EVS = [["Honda Civic Tour", "ev:honda-civic-tour"], ["Warped Tour", "ev:warped-tour"], ["The Final Riot!", "ev:final-riot"], ["Final Riot!", "ev:final-riot"], ["MTV TRL", "ev:trl-rihanna"], ["Parahoy!", "ev:parahoy"], ["Parahoy", "ev:parahoy"],
    ["Monumentour", "ev:monumentour-reading"], ["Tiny Desk", "ev:tiny-desk"], ["Coachella", "ev:wwwy-coachella-2022"], ["When We Were Young", "ev:wwwy-coachella-2022"], ["Tonight Show", "ev:tonight-show"], ["Eras Tour", "ev:eras-tour"],
    ["MTV Cribs", "ev:mtv-cribs"], ["Kiss Off", "ev:kiss-off"], ["Ego Death Tour", "ev:ego-death-tour"], ["Brand New Eyes World Tour", "ev:bne-world-tour"], ["Self-Titled Tour", "ev:self-titled-tour"],
    ["After Laughter Tour", "ev:after-laughter-tour"], ["This Is Why Tour", "ev:this-is-why-tour"], ["No Doubt", "ev:no-doubt-2009"], ["Grammys", "ev:grammys"], ["Grammy Awards", "ev:grammys"], ["Grammy", "ev:grammys"]];
  // Ukrainian forms with endings: [regex source, target]
  const STEMS = [["Греммі", "ev:grammys"], ["Кувейт(?:і|у|а|ом)?", "ev:kuwait-2010"], ["Гамбург(?:у|а|і|ом)?", "ev:hamburg-2017"], ["альбом(?:у|і|ом)? Paramore", "era:paramore"], ["самоназван(?:ий|ого|ому|им|ім) альбом(?:у|і|ом)?", "era:paramore"]];

  function build() {
    const exact = new Map(), stems = [], frags = [], q = new Map(), quoted = [];
    const add = (phrase, key, bareOK = true) => { if (bareOK) { exact.set(phrase, key); frags.push([phrase.length, rx(phrase)]); } };
    ALBUMS.forEach(([p, k]) => add(p, k)); EVS.forEach(([p, k]) => add(p, k));
    STEMS.forEach(([s, k]) => { stems.push([new RegExp("^(?:" + s + ")$"), k]); frags.push([s.length, s]); });
    const albumNames = new Set(ALBUMS.map(a => norm(a[0])));
    for (const s of window.SONGS || []) {
      const t = s.title, k = "song:" + s.id; q.set(norm(t), k); quoted.push([t.length, rx(t)]);
      if (t.length >= 11 && /\s/.test(t) && !albumNames.has(norm(t)) && !exact.has(t)) add(t, k);
    }
    const sorted = a => a.sort((x, y) => y[0] - x[0]).map(x => x[1]).join("|");
    return {
      exact, stems, q,
      bare: new RegExp(`(?<![${WORD}${AP}])(?:${sorted(frags)})(?![${WORD}])`, "g"),
      quote: new RegExp(`(?<=[“«"„])(?:${sorted(quoted)})(?=[”»"])`, "gi")
    };
  }
  const resolveBare = t => B.exact.get(t) || (B.stems.find(([r]) => r.test(t)) || [])[1];
  const hrefOf = k => { const [t, id] = k.split(/:(.+)/); return t === "song" ? "#s/" + id : t === "era" ? "#" + id : "#e/" + id; };
  const typeOf = k => { const [t, id] = k.split(/:(.+)/); if (t === "song") return "song"; if (t === "era") return "album"; const e = (window.EVENTS || []).find(x => x.id === id); return e && kindOf(e) === "tour" ? "tour" : "event"; };

  const SKIP = "a,button,h1,h2,h3,h4,script,style,iframe,textarea,input,select,code,figcaption,summary,.tip,.credit,.by,.chip,.num,.mname,.ent,.gcard,.polaroid,[data-nomn],.swatches,.dots,.stretch,.pn,.sb-row,#ncard";
  const BLOCK = "p,li,dd,blockquote,td,.beat,.txt,.desc,div";
  const prevLink = window.linkNames;
  window.linkEntities = root => {
    if (!root || !window.SONGS) return; B = B || build();
    const here = location.hash || "#home", used = new WeakMap();
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, { acceptNode: n => {
      const v = n.nodeValue; if (v.length < 4) return NodeFilter.FILTER_REJECT;
      B.bare.lastIndex = 0; B.quote.lastIndex = 0;
      return ((B.bare.test(v) || (B.quote.lastIndex = 0, B.quote.test(v))) && !n.parentElement.closest(SKIP)) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT; } });
    const nodes = []; while (walker.nextNode()) nodes.push(walker.currentNode);
    for (const n of nodes) {
      const s = n.nodeValue, hits = []; let m;
      B.quote.lastIndex = 0; while ((m = B.quote.exec(s))) { const k = B.q.get(norm(m[0])); if (k) hits.push({ i: m.index, t: m[0], k, p: 0 }); }
      B.bare.lastIndex = 0; while ((m = B.bare.exec(s))) { const k = resolveBare(m[0]); if (k) hits.push({ i: m.index, t: m[0], k, p: 1 }); }
      if (!hits.length) continue;
      hits.sort((a, b) => a.i - b.i || a.p - b.p);
      const blk = n.parentElement.closest(BLOCK) || n.parentElement; let set = used.get(blk); if (!set) used.set(blk, set = new Set());
      let frag = null, last = 0;
      for (const h of hits) {
        if (h.i < last) continue; const href = hrefOf(h.k);
        if (href === here || set.has(h.k)) continue; set.add(h.k);
        frag = frag || document.createDocumentFragment(); frag.append(s.slice(last, h.i));
        const a = document.createElement("a"); a.className = "ent ent-" + typeOf(h.k); a.href = href; a.dataset.e = h.k; a.textContent = h.t; frag.append(a); last = h.i + h.t.length;
      }
      if (frag) { frag.append(s.slice(last)); n.replaceWith(frag); }
    }
  };
  window.linkNames = (root, own) => { if (prevLink) prevLink(root, own); window.linkEntities(root); };

  // the hover card's contents (names.js shows the card and handles hover, touch and positioning)
  const cut = (txt, n) => { if (txt.length <= n) return txt; const s = txt.slice(0, n), i = Math.max(s.lastIndexOf(". "), s.lastIndexOf("; ")); return (i > 80 ? s.slice(0, i + 1) : s.replace(/\s\S*$/, "") + "…"); };
  window.entCard = key => {
    const [t, id] = key.split(/:(.+)/), href = hrefOf(key); let era, title, sub, tag, txt;
    if (t === "song") { const s = SONGS.find(x => x.id === id); if (!s) return ""; era = ERAS.find(e => e.id === s.era); title = s.title; sub = U("entSong") + (s.album ? " · " + L(s.album) : "") + (s.n ? " · №" + s.n : ""); tag = era ? L(era.name) + " · " + era.years : ""; txt = L(s.note || ""); }
    else if (t === "era") { era = ERAS.find(e => e.id === id); if (!era) return ""; const h = ((window.ERA_PAGES || {})[id] || {}).hero || {}; title = L(era.name); sub = U("entAlbum") + " · " + era.years; tag = h.kicker ? L(h.kicker) : ""; txt = h.quote ? L(h.quote) : ""; }
    else { const e = EVENTS.find(x => x.id === id); if (!e) return ""; era = ERAS.find(x => x.id === e.era); title = L(e.title); sub = U(kindOf(e) === "tour" ? "entTour" : "entEvent") + " · " + L(e.when); tag = era ? L(era.name) : ""; txt = L(e.blurb || ""); }
    const pic = era && era.cover ? `<a class="nc-pic" href="${href}"><img src="${era.cover}" alt="${esc(title)}"></a>` : "";
    return `${pic}<div class="nc-body"><a class="nc-name" href="${href}"><b>${esc(title)}</b><small>${esc(sub)}</small></a>${tag ? `<p class="nc-tag">${esc(tag)}</p>` : ""}${txt ? `<p class="nc-txt">${esc(cut(txt, 230))}</p>` : ""}<a class="nc-more" href="${href}">${U("entOpen")} →</a></div>`;
  };
})();
