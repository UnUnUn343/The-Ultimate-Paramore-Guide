// Tiny hash-routed renderer. Era content = ERA_PAGES[id]; member content = MEMBERS[id]; strings are {ua,en}.
// Routes: #riot (era), #m/hayley (member). Chapter anchors (#story) never change the route.
const $ = (s, r = document) => r.querySelector(s);
const store = {
  get: k => { try { return localStorage.getItem(k); } catch { return null; } },
  set: (k, v) => { try { localStorage.setItem(k, v); } catch {} }
};
let lang = store.get("lang") || (navigator.language.toLowerCase().startsWith("uk") ? "ua" : "en");
// Source notes: write {{note text}} inside any string and L() turns it into an invisible token; injectMarks() (after render) swaps each token
// for a small ⓘ with the note on hover/focus, and #sources lists them all. Tokens survive esc() because they hold only private-use characters.
const NOTES = [];
const noteId = t => { const k = t.trim(); let i = NOTES.indexOf(k); if (i < 0) i = NOTES.push(k) - 1; return i; };
const L = o => { const s = o == null ? "" : typeof o === "string" ? o : o[lang] ?? o.en; return typeof s === "string" && s.includes("{{") ? s.replace(/\s*\{\{([\s\S]+?)\}\}/g, (m, t) => "" + noteId(t) + "") : s; };
const stripNotes = s => String(s).replace(/\d+/g, "");
function injectMarks(root) {
  const tw = document.createTreeWalker(root, NodeFilter.SHOW_TEXT), hit = [];
  while (tw.nextNode()) if (tw.currentNode.nodeValue.includes("")) hit.push(tw.currentNode);
  hit.forEach(n => {
    const frag = document.createDocumentFragment();
    n.nodeValue.split(/(\d+)/).forEach((part, k) => {
      if (k % 2 === 0) { if (part) frag.append(part); return; }
      const s = document.createElement("sup"); s.className = "src"; s.tabIndex = 0; s.setAttribute("role", "note");
      const b = document.createElement("b"); b.textContent = "ⓘ"; const t = document.createElement("span"); t.className = "tip"; t.textContent = NOTES[+part];
      s.append(b, t); frag.append(" ", s);
    });
    n.replaceWith(frag);
  });
  root.querySelectorAll("*").forEach(el => [...el.attributes].forEach(a => { if (a.value.includes("")) a.value = stripNotes(a.value); }));
}
const U = k => L(UI[k]);
const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const yt = id => `https://www.youtube.com/watch?v=${id}`;
const all_count = () => BSIDES.reduce((n, g) => n + g.items.length, 0);
const accentOf = e => e.accent || (e.hair && e.hair[0] && e.hair[0].c) || "#FF7A1A";

const photo = (key, cls = "") => {
  const p = PHOTOS[key];
  if (!p) return "";
  return `<figure class="polaroid ${cls}"><img src="${p.src}" alt="${esc(L(p.cap))}" loading="lazy">
    <figcaption><span>${esc(L(p.cap))}</span><a href="${p.page}" target="_blank" rel="noopener">© ${esc(p.by)} · ${p.lic}</a></figcaption></figure>`;
};
const hbg = h => h.c ? (h.c2 ? `linear-gradient(90deg,${h.c} 50%,${h.c2} 50%)` : h.c) : "repeating-linear-gradient(45deg,#ffffff44 0 3px,#0000 3px 6px)";
const rng = h => h.r ? (h.r[0] === h.r[1] ? h.r[0] : `${h.r[0]}–${h.r[1]}`) + (h.ap ? ` (${U("approx")})` : "") : "";
// h.v = { id, k } or an array of them: a frame from one of the band's official YouTube videos (k = 1/2/3 → the 25/50/75% frame YouTube serves), linked to the video. Hotlinked, not copied.
const mvFig = v => `<figure><a href="https://www.youtube.com/watch?v=${v.id}" target="_blank" rel="noopener"><img src="https://i.ytimg.com/vi/${v.id}/hq${v.k || 2}.jpg" alt="${esc(U("hairMV"))}" loading="lazy"></a><figcaption>▶ ${U("hairMV")} · © Fueled By Ramen / Paramore</figcaption></figure>`;
const pop = h => ((h.p && h.p.length) || h.v) ? `<div class="pop">${(h.p || []).map(k => `<figure><img src="${PHOTOS[k].src}" alt="${esc(L(PHOTOS[k].cap))}" loading="lazy"><figcaption>${esc(L(PHOTOS[k].cap))} · © ${esc(PHOTOS[k].by)}</figcaption></figure>`).join("")}${h.v ? [].concat(h.v).map(mvFig).join("") : ""}</div>` : "";
const gLink = h => { const g = window.hairGettyFor ? hairGettyFor(h) : []; return g.length ? `<a class="glink" href="#hair" data-gcard="${g[0]}">📷 Getty · ${g.length}</a>` : ""; };
const swatches = (hair, big) => hair.length
  ? `<ul class="swatches ${big ? "big" : ""}">${hair.map(h => `<li tabindex="0" class="${h.p || h.v ? "has-photo" : ""}"><i style="background:${hbg(h)}">${h.c ? "" : "✂"}</i><span>${esc(L(h))}${h.u ? ` <em>(${U("unverified")})</em>` : ""}${rng(h) ? `<b class="yrs">${rng(h)}</b>` : ""}${big && (h.w || h.s) ? `<small>${[h.w && L(h.w), h.s && L(h.s)].filter(Boolean).join(" · ")}</small>` : ""}${(h.p || h.v) && big ? `<em class="hint">📷 ${U("hoverHint")}</em>` : ""}${gLink(h)}</span>${big ? pop(h) : ""}</li>`).join("")}</ul>`
  : `<p class="muted">${U("hairNone")}</p>`;
// Short colour strip for an era page: circles with the years; hover or focus shows the photos and the name.
const hairStrip = hair => hair.length
  ? `<ul class="swatches strip-c">${hair.map(h => `<li tabindex="0" class="${h.p || h.v ? "has-photo" : ""}"><i style="background:${hbg(h)}">${h.c ? "" : "✂"}</i><span><b class="yrs">${rng(h)}</b>${esc(L(h))}${h.u ? ` <em>(${U("unverified")})</em>` : ""}${gLink(h)}</span>${pop(h)}</li>`).join("")}</ul>`
  : `<p class="muted">${U("hairNone")}</p>`;
// A row of colour circles for a whole era; hover a circle for its name and years. Over 8 circles they shrink and overlap a little more.
// Era and member pictures: a real photo from that period, else a designed placeholder (never a reused group shot).
const eraPhoto = e => { const k = (ERA_PAGES[e.id]?.hero || {}).photo; return k && PHOTOS[k] ? PHOTOS[k] : null; };
const realPhoto = k => (k && PHOTOS[k] && !/^band\d/.test(k)) ? PHOTOS[k] : null;
const monoCard = (name, tc, cls = "") => `<div class="nophoto mono-card ${cls}" style="--tc:${tc}"><span class="mc-l">${esc(String(name).trim()[0] || "?")}</span><small>${U("noPhoto")}</small></div>`;
const dotsOf = (hair, cls = "") => `<span class="dots ${hair.length > 8 ? "many" : ""} ${cls}">${hair.map(h => `<i title="${esc(L(h) + (rng(h) ? " · " + rng(h) : ""))}" style="background:${hbg(h)}"></i>`).join("")}</span>`;
const beats = (list, cls = "") => `<ol class="beats ${cls}">${list.map(b => `<li class="reveal"><time>${L(b.when)}</time><p>${L(b.text)}</p></li>`).join("")}</ol>`;
const ytCard = (v, wide) => `<div class="vid ${wide ? "wide" : ""}">
  <button class="yt" data-id="${v.id}" aria-label="${U("play")}: ${esc(L(v.title))}">
    <img src="https://i.ytimg.com/vi/${v.id}/hqdefault.jpg" alt="" decoding="async" onerror="this.onerror=null;this.src='https://img.youtube.com/vi/${v.id}/hqdefault.jpg'"><span class="play"></span>
  </button>
  <div class="vmeta"><span class="chip">${L(UI.type[v.type])}</span><b>${esc(L(v.title))}</b>${v.by ? `<small class="by">${U("viaUploader")} ${esc(v.by)}</small>` : ""}${v.desc ? `<p class="vdesc">${L(v.desc)}</p>` : ""}
    <a href="${yt(v.id)}" target="_blank" rel="noopener">${U("openYT")} ↗</a></div></div>`;
const essay = e => `<a class="essay" href="${yt(e.id)}" target="_blank" rel="noopener"><img src="https://i.ytimg.com/vi/${e.id}/mqdefault.jpg" alt="" loading="lazy"><span><small>${esc(e.by)}</small><b>${esc(e.title)}</b></span></a>`;
const chapter = (id, num, title, body) => `<section class="chapter" id="${id}" data-title="${esc(title)}">
  <header class="ch-head reveal"><span class="num">${String(num).padStart(2, "0")}</span><h2>${esc(title)}</h2></header>${body}</section>`;
const sp = id => `<iframe title="Spotify" src="https://open.spotify.com/embed/album/${id}?utm_source=generator&theme=0" width="100%" height="352" frameborder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`;
const genius = t => (window.geniusUrl && geniusUrl(t)) || `https://genius.com/search?q=${encodeURIComponent("Paramore " + t)}`;

function eraChapters(era, P) {
  const ch = []; window.__usedG = new Set();
  if (P.story) ch.push(["story", L(UI.story), `${P.story.lead ? `<p class="lead reveal">${L(P.story.lead)}</p>` : ""}
    <div class="story-grid"><div>${beats(P.story.beats)}</div>
    <div class="story-photos">${window.storyPics ? storyPics(era, P) : (P.story.photos || []).map((k, i) => photo(k, i ? "tilt-r" : "tilt-l")).join("")}</div></div>
    ${P.story.cost ? `<p class="cost reveal">${L(P.story.cost)}</p>` : ""}`]);

  if (P.lineup) ch.push(["lineup", U("lineup"), `<div class="cards">${P.lineup.members.map(x => {
    const m = MEMBERS[x.id] || {}, name = x.name || m.name, role = x.role || m.role;
    // Card link is a stretched link on the name: the photo credit is itself an <a>, and anchors can't nest.
    const title = m.name ? `<a class="stretch" href="#m/${x.id}">${esc(name)}</a>` : esc(name);
    return `<article class="card reveal">${x.photo && realPhoto(x.photo) ? photo(x.photo) : monoCard(name || "?", accentOf(era))}<h3>${title}</h3><p class="role">${L(role)}</p><p>${L(x.note)}</p>${m.name ? `<span class="more">${U("fullStory")} →</span>` : ""}</article>`;
  }).join("")}</div>${P.lineup.left ? `<p class="muted">${L(P.lineup.left)}</p>` : ""}`]);

  if (P.cover) ch.push(["cover", U("coverMeaning"), `<div class="cover-grid">${era.cover && era.coverOld && window.coverFlip ? coverFlip(era) : era.cover ? `<img class="cover-img reveal" src="${era.cover}" alt="${esc(L(era.name))}">` : ""}<div>${P.cover.map(p => `<p class="reveal">${L(p)}</p>`).join("")}</div></div>`]);

  if (P.album) {
    const embeds = [].concat(P.album.spotify || []);
    ch.push(["album", P.album.title ? L(P.album.title) : U("albumSongs"), `<div class="album-grid ${embeds.length ? "" : "solo"}">${embeds.length ? `<div class="spot">${embeds.map(sp).join("")}
      <p class="muted">${U("spotifyHint")} ${embeds.map(i => `<a href="https://open.spotify.com/album/${i}" target="_blank" rel="noopener">${U("openSpotify")} ↗</a>`).join(" · ")}</p></div>` : ""}
      <ol class="tracks">${P.album.tracks.map((t, i) => `<li class="${t.key ? "key" : ""}"><span class="n">${String(i + 1).padStart(2, "0")}</span>
        <div><b>${hasSong(t.t) ? `<a class="tlink" href="${songHref(t.t)}">${esc(t.t)}</a>` : esc(t.t)}</b>${t.key ? `<em>${U("keySong")}</em>` : ""} <a class="lyr" href="${genius(t.t.split(" — ")[0])}" target="_blank" rel="noopener">${U("lyrics")} ↗</a>${t.note ? `<p>${L(t.note)}</p>` : ""}</div></li>`).join("")}</ol></div>`]);
  }

  // Hair is a short strip here (hover a circle for the photos); the full history and the timeline videos live on #hair.
  if (era.hair.length) ch.push(["hair", U("hair"), `${hairStrip(era.hair)}${era.hairNote ? `<p class="hnote">${L(era.hairNote)}</p>` : ""}<p class="hair-more"><a class="btn" href="#hair">${U("hairFull")} →</a></p>`]);

  const S = P.spot;
  if (S) ch.push(["spotlight", L(S.title), `<div class="mb-grid"><div>${S.paras.map(p => `<p class="reveal">${L(p)}</p>`).join("")}</div>${S.video ? ytCard({ id: S.video, type: "video", title: S.vtitle || S.title }, true) : ""}</div>
    ${S.after ? `<h3 class="reveal">${L(S.afterTitle)}</h3>${beats(S.after, "after")}` : ""}`]);

  if (P.watch && P.watch.length) ch.push(["watch", U("watch"), `<div class="vids">${P.watch.map(v => ytCard(v)).join("")}</div>`]);

  if (P.interview) ch.push(["interview", L(P.interview.title || UI.interview), `<p class="muted">${L(P.interview.note || UI.interviewNote)}</p>${P.interview.videos && P.interview.videos.length ? `<div class="vids">${P.interview.videos.map(v => ytCard(v)).join("")}</div>` : ""}${P.interview.source ? `<p class="muted">${U("source")}: <a href="${P.interview.source}" target="_blank" rel="noopener">${esc(P.interview.source.replace(/^https?:\/\//, ""))} ↗</a></p>` : ""}${beats(P.interview.points)}`]);

  const ic = eraInterviewChapter(era.id); if (ic) ch.push(ic);
  const oc = eraOfficialChapter(era.id); if (oc) ch.push(oc);
  const gty = window.eraGettyChapter && eraGettyChapter(era.id); if (gty) ch.push(gty);
  const pst = window.eraPostsChapter && eraPostsChapter(era.id); if (pst) ch.push(pst);

  const es = ESSAYS.filter(e => e.era?.includes(era.id)), rest = ESSAYS.filter(e => !e.era?.includes(era.id));
  ch.push(["essays", U("essays"), `<p class="muted">${U("essaysSub")}</p>
    ${es.length ? `<h3>${U("startHere")}</h3><div class="essays">${es.map(essay).join("")}</div>` : ""}
    <h3>${U("wholeStory")}</h3><div class="essays">${rest.map(essay).join("")}</div>`]);

  if (P.facts) ch.push(["deep", U("deep"), `<div class="notes">${P.facts.map((f, i) => `<div class="note ${f.tag} reveal" style="--r:${[-1.6, 1.2, -0.8, 1.8, -1.2][i % 5]}deg"><span class="tag">${U(f.tag)}</span><p>${L(f.text)}</p></div>`).join("")}</div>
    ${P.own && P.own.length ? `<h3>${U("mine")}</h3><div class="mine">${P.own.map(o => `<figure class="polaroid"><img src="${o.src}" alt="${esc(L(o.cap))}" loading="lazy"><figcaption><span>${esc(L(o.cap))}</span></figcaption></figure>`).join("")}</div>` : ""}`]);
  return ch;
}

function eraHero(era, P) {
  const h = P.hero || {}, ph = h.photo && PHOTOS[h.photo];
  return `<section class="hero ${ph ? "" : "noimg"}" id="top">
    ${ph ? `<div class="hero-bg" style="background-image:url('${ph.src}')${ph.pos ? `;background-position:${ph.pos}` : ""}"></div>` : `<div class="hero-mono hero-yrs" aria-hidden="true">${esc(era.years)}</div>`}
    <div class="hero-inner">
      <p class="kicker">${L(h.kicker) || era.years}</p>
      <h1 class="${(h.title || L(era.name)).length > 12 ? "long" : ""}">${esc(h.title || L(era.name))}</h1>
      ${h.quote ? `<p class="quote">${L(h.quote)}</p>` : ""}
      ${h.stats ? `<ul class="stats">${h.stats.map(s => `<li>${L(s)}</li>`).join("")}</ul>` : ""}
      ${swatches(era.hair.slice(0, 4))}
      ${era.hair.length > 4 ? dotsOf(era.hair, "herodots") : ""}
    </div>
    ${era.cover ? `<img class="sleeve" src="${era.cover}" alt="${esc(L(era.name))}">` : ""}
    <a class="cue" href="#story">${U("scroll")} ↓</a>
    ${ph ? `<span class="credit"><a href="${ph.page}" target="_blank" rel="noopener">© ${esc(ph.by)} · ${ph.lic}</a></span>` : ""}
  </section>`;
}

function blink(i) {
  const bl = BSIDE_LINKS[i.t], q = encodeURIComponent("Paramore " + i.t);
  const pid = i.yt || (bl && bl.id);
  if (pid) { const tag = i.yt || bl.official ? U("officialTag") : U("fanTag") + " · " + esc(bl.by);
    return `<div class="vid bvid"><button class="yt" data-id="${pid}" aria-label="${U("play")}: ${esc(i.t)}"><img src="https://i.ytimg.com/vi/${pid}/hqdefault.jpg" alt="" loading="lazy" decoding="async"><span class="play"></span></button>
      <div class="bmeta"><span>${U("listen")} ▶ <small>${tag}</small></span><a href="${yt(pid)}" target="_blank" rel="noopener">${U("openYT")} ↗</a></div></div>`; }
  return `<a class="blink alt" href="https://www.youtube.com/results?search_query=${q}" target="_blank" rel="noopener">${U("ytSearch")} ↗</a>`;
}

function bsidesPage() {
  const all = BSIDES.flatMap(g => g.items);
  const types = [...new Set(all.map(i => i.type))];
  const hero = `<section class="hero" id="top"><div class="hero-inner">
    <p class="kicker">${U("bsidesTag")}</p><h1 class="long">${esc(U("bsides"))}</h1><p class="quote">${U("bsidesQuote")}</p>
    <ul class="stats"><li>${all.length} ${lang === "ua" ? "позицій" : "entries"}</li><li>${all.filter(i => i.yt).length} ${lang === "ua" ? "з офіційним посиланням" : "with an official link"}</li></ul></div></section>`;
  const filters = `<div class="filters" role="group"><button class="on" data-f="all">${U("filterAll")}</button>${types.map(t => `<button data-f="${t}">${L(UI.type[t])}</button>`).join("")}</div>`;
  const row = i => {
    const E = ERAS.find(e => e.id === i.era);
    return `<li class="bitem reveal" data-type="${i.type}"><div class="bt"><b>${esc(i.t)}</b><span class="chip">${L(UI.type[i.type])}</span></div>
      <p class="bw"><small>${U("where")}:</small> ${esc(L(i.where))}</p>${i.note ? `<p class="bn">${L(i.note)}</p>` : ""}
      ${blink(i)}</li>`;
  };
  const ch = BSIDES.map(g => [g.id, L(g.title), `<ul class="blist">${g.items.map(row).join("")}</ul>`]);
  ch[0][2] = filters + ch[0][2];
  ch.push(["coverage", lang === "ua" ? "Про повноту" : "About coverage", `<p class="muted">${U("bsidesCoverage")}</p>`]);
  return { hero, ch };
}
const kindOf = e => e.kind || "event";
function eventsIndex(kind = "event") {
  const list = EVENTS.filter(e => kindOf(e) === kind), isT = kind === "tour";
  const hero = `<section class="hero" id="top"><div class="hero-inner"><p class="kicker">${U(isT ? "toursTag" : "eventsTag")}</p><h1 class="long">${esc(U(isT ? "tours" : "events"))}</h1><p class="quote">${U(isT ? "toursQuote" : "eventsQuote")}</p>
    <ul class="stats"><li>${list.length} ${isT ? (lang === "ua" ? "турів" : "tours") : (lang === "ua" ? "подій" : "events")}</li><li>${list.reduce((n, e) => n + e.videos.length, 0)} ${lang === "ua" ? "відео" : "videos"}</li></ul></div></section>`;
  const card = e => `<a class="ecard reveal" href="#e/${e.id}" style="--thumb:url('${ERAS.find(x => x.id === e.era).cover || ""}')"><small>${L(e.when)}</small><b>${esc(L(e.title))}</b><span>${esc(L(ERAS.find(x => x.id === e.era).tab))}</span></a>`;
  const sorted = [...list].sort((a, b) => ERAS.findIndex(x => x.id === a.era) - ERAS.findIndex(x => x.id === b.era));
  return { hero, ch: [["all", U(isT ? "tours" : "events"), `<div class="egrid">${sorted.map(card).join("")}</div><p class="muted">${U("eduNote")}</p>`]] };
}function eventPage(id) {
  const e = EVENTS.find(x => x.id === id), E = ERAS.find(x => x.id === e.era);
  const hp = (e.photos[0] && PHOTOS[e.photos[0]]) || (ERA_PAGES[e.era].hero && ERA_PAGES[e.era].hero.photo && PHOTOS[ERA_PAGES[e.era].hero.photo]);
  const hero = `<section class="hero" id="top">${hp ? `<div class="hero-bg" style="background-image:url('${hp.src}')"></div>` : ""}<div class="hero-inner"><p class="kicker">${L(e.when)} · ${esc(L(E.tab))}</p><h1 class="long">${esc(L(e.title))}</h1><p class="quote">${L(e.blurb)}</p></div></section>`;
  const q = encodeURIComponent(e.search);
  const ch = [
    ["details", U("keyFacts"), `<ul class="facts">${e.facts.map(f => `<li class="reveal">${L(f)}</li>`).join("")}</ul>${e.photos.length ? `<div class="gal">${e.photos.map(k => photo(k)).join("")}</div>` : ""}`]
  ];
  if (e.videos.length) ch.push(["watch", U("watch"), `<div class="vids">${e.videos.map(v => ytCard(v)).join("")}</div><p class="muted">${U("eduNote")}</p>`]);
  const fan = fanForEvent(id).sort((a, b) => a.y - b.y || a.mo - b.mo);
  if (fan.length) ch.push(["fan", U("fanTitle"), `<p class="muted">${U("fanNote")}</p><div class="vgrid">${fan.map(vcard).join("")}</div>`]);
  ch.push(["more", U("moreFind"), `<ul class="links"><li><a href="https://www.youtube.com/results?search_query=${q}" target="_blank" rel="noopener">${U("searchYT")} ↗</a></li><li><a href="https://commons.wikimedia.org/w/index.php?search=${q}&ns6=1" target="_blank" rel="noopener">${U("searchPics")} ↗</a></li><li><a href="#${e.era}">${esc(L(E.name))} →</a></li><li><a href="${kindOf(e) === "tour" ? "#tours" : "#events"}">${U("backEvents")} →</a></li></ul>`]);
  return { hero, ch, theme: E };
}
function homePage() {
  const hair = e => dotsOf(e.hair);
  const hero = `<section class="hero home" id="top"><div class="hero-bg" style="background-image:url('${PHOTOS.band23.src}');background-position:${PHOTOS.band23.pos}"></div><div class="hero-inner">
    <p class="kicker">${U("tag")}</p><h1>Paramore</h1><p class="quote">${lang === "ua" ? "Двадцять років, одинадцять епох, одна історія, що не вмирає." : "Twenty years, eleven eras, one story that won't die."}</p>
    <a class="btn" href="#origins">${lang === "ua" ? "Почати подорож" : "Start the journey"} →</a></div>
    <span class="credit"><a href="${PHOTOS.band23.page}" target="_blank" rel="noopener">© ${PHOTOS.band23.by} · ${PHOTOS.band23.lic}</a></span></section>`;
  // era tiles show a photo from that era; Origins has none, so it gets a designed placeholder (big year over a striped field)
  const tile = e => { const ph = eraPhoto(e); return `<a class="tile reveal ${ph ? "" : "noimg"}" href="#${e.id}" style="--tc:${accentOf(e)};--cv:url('${ph ? ph.src : ""}');--cp:${ph?.pos || "center"}">${ph ? "" : `<span class="ph-big">${e.years.split(/[–-]/)[0]}</span>`}<span class="yr">${e.years}</span><b>${esc(L(e.name))}</b>${hair(e)}</a>`; };
  const person = k => { const m = MEMBERS[k], ph = realPhoto(m.photo); return `<a class="tile person reveal ${ph ? "" : "noimg"}" href="#m/${k}" style="--tc:${accentOf(ERAS.find(x => x.id === m.eras[0]))};--cv:url('${ph ? ph.src : ""}')">${ph ? "" : `<span class="ph-big mono">${esc(m.name[0])}</span><small class="ph-note">${U("noPhoto")}</small>`}<b>${esc(m.name)}</b><span class="yr">${L(m.role)}</span></a>`; };
  const deep = [["#songs", U("songs"), SONGS.length + " " + (lang === "ua" ? "пісень" : "songs"), "#E87BAA"], ["#iceberg", U("iceberg"), ICEBERG.length + " " + (lang === "ua" ? "пунктів" : "entries"), "#9AD8F0"], ["#hair", U("hairPage"), ERAS.reduce((n, e) => n + e.hair.length, 0) + " " + (lang === "ua" ? "кольорів" : "colours"), "#E8663C"], ["#merch", U("merchPage"), MERCH.length + " " + (lang === "ua" ? "позицій" : "items"), "#F5A25D"], ["#interviews", U("interviews"), INTERVIEWS.length + " " + (lang === "ua" ? "інтерв'ю" : "interviews"), "#7AC7FF"], ["#videos", U("videos"), VIDEO_INDEX.length + " " + (lang === "ua" ? "відео" : "videos"), "#FF4D4D"], ["#tours", U("tours"), EVENTS.filter(e => kindOf(e) === "tour").length + " " + (lang === "ua" ? "турів" : "tours"), "#FF9F43"], ["#events", U("events"), EVENTS.filter(e => kindOf(e) === "event").length + " " + (lang === "ua" ? "подій" : "events"), "#F5D547"], ["#bsides", U("bsides"), all_count() + " " + (lang === "ua" ? "позицій" : "entries"), "#D9A441"], ...(window.GALLERY ? [["#photos", U("photos"), GALLERY.length + " " + (lang === "ua" ? "фото" : "photos"), "#4FB3D9"]] : []), ["#web", U("web"), (INTERVIEWS.filter(i => /^Kerrang!/.test(i.outlet)).length + WEB_KERRANG.length + WEB_OFFICIAL.length + WEB_OLD.length) + " " + (lang === "ua" ? "посилань" : "links"), "#7ED6A8"], ["#sources", U("sources"), "ⓘ", "#B8B0C8"]].map(([h, t, s, c]) => `<a class="tile reveal" href="${h}" style="--tc:${c}"><span class="yr">${s}</span><b>${esc(t)}</b></a>`).join("");
  return { hero, ch: [["eras", lang === "ua" ? "Епохи" : "The eras", `<div class="tiles">${ERAS.map(tile).join("")}</div>`], ["people", U("lineup"), `<div class="tiles">${Object.keys(MEMBERS).map(person).join("")}</div>`], ["dig", lang === "ua" ? "Копати глибше" : "Dig deeper", `<div class="tiles">${deep}</div>`]] };
}
function galleryPage() {
  const rows = GALLERY.map(([f, y, by, lic, desc, x]) => ({ f, y, by, lic, desc, x, who: /hayley/i.test(f) ? "hayley" : /taylor/i.test(f) ? "taylor" : /zac|zach/i.test(f) ? "zac" : /josh/i.test(f) ? "josh" : /jeremy/i.test(f) ? "jeremy" : "band", fun: /funny|silly|goofy|tongue|costume|mask|joke|dancing|faces?\b|hat\b|crazy|wacky/i.test(f + " " + desc) }));
  const years = [...new Set(rows.map(r => r.y).filter(Boolean))].sort();
  const hero = `<section class="hero" id="top"><div class="hero-bg" style="background-image:url('${PHOTOS.band09.src}')"></div><div class="hero-inner"><p class="kicker">Wikimedia Commons · Flickr (CC)</p><h1 class="long">${esc(U("photos"))}</h1><p class="quote">${U("photosQuote")}</p>
    <ul class="stats"><li>${rows.length} ${lang === "ua" ? "фото" : "photos"}</li><li>${years[0]}–${years[years.length - 1]}</li></ul></div></section>`;
  const chips = (key, vals, label) => `<div class="filters" data-key="${key}"><button class="on" data-v="all">${label}</button>${vals.map(v => `<button data-v="${v}">${v}</button>`).join("")}</div>`;
  const whoLbl = { hayley: "Hayley", taylor: "Taylor", zac: "Zac", josh: "Josh", jeremy: "Jeremy", band: lang === "ua" ? "Гурт/інше" : "Band / other" };
  const body = `${chips("y", years, U("filterAll"))}
    <div class="filters" data-key="w"><button class="on" data-v="all">${U("filterAll")}</button>${Object.keys(whoLbl).map(k => `<button data-v="${k}">${whoLbl[k]}</button>`).join("")}${rows.some(r => r.fun) ? `<button data-v="fun">${U("candid")}</button>` : ""}</div>
    <div class="photogrid">${rows.map(r => `<a class="ph" href="${r.x ? esc(r.x.page) : `https://commons.wikimedia.org/wiki/File:${encodeURIComponent(r.f.replace(/ /g, "_"))}`}" target="_blank" rel="noopener" data-y="${r.y}" data-w="${r.who}" data-fun="${r.fun ? 1 : 0}" title="${esc(r.desc || r.f)}"><img loading="lazy" src="${r.x ? esc(r.x.src) : `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(r.f.replace(/ /g, "_"))}?width=360`}" alt="${esc(r.desc || r.f)}"><span>${r.y} · © ${esc(r.by)} · ${esc(r.lic)}</span></a>`).join("")}</div>
    <p class="muted">${U("photoNote")}</p>`;
  return { hero, ch: [["all", U("photos"), body]] };
}
const songHref = t => `#s/${slug(String(t).split(" — ")[0]).replace(/ /g, "-")}`;
const hasSong = t => SONGS.some(s => s.key === slug(String(t).split(" — ")[0]));
function songVideos(s) {
  const out = [...(SONG_VIDEOS[s.key] || [])], seen = new Set(out.map(v => v.id));
  const P = ERA_PAGES[s.era];
  ((P && P.watch) || []).forEach(v => { const en = typeof v.title === "string" ? v.title : v.title.en; if (!seen.has(v.id) && slug(en).startsWith(s.key)) { out.push(v); seen.add(v.id); } });
  Object.keys(BSIDE_LINKS).forEach(k => { const b = BSIDE_LINKS[k]; if (!seen.has(b.id) && slug(k).startsWith(s.key)) { out.push({ id: b.id, type: "clip", title: k, by: b.by }); seen.add(b.id); } });
  officialForSong(s).forEach(v => { if (!seen.has(v.id)) { out.push(v); seen.add(v.id); } });
  return out;
}
function songsIndex() {
  const hero = `<section class="hero" id="top"><div class="hero-inner"><p class="kicker">${U("songsTag")}</p><h1 class="long">${esc(U("songs"))}</h1><p class="quote">${U("songsQuote")}</p>
    <ul class="stats"><li>${SONGS.length} ${lang === "ua" ? "пісень" : "songs"}</li><li>${Object.keys(SONG_EXTRA).length} ${lang === "ua" ? "з картою змісту" : "with a meaning map"}</li></ul></div></section>`;
  const groups = {}; SONGS.forEach(s => (groups[s.era + "|" + L(s.album)] = groups[s.era + "|" + L(s.album)] || []).push(s));
  const ch = Object.keys(groups).map(k => { const [eid, album] = k.split("|"); const E = ERAS.find(x => x.id === eid);
    return [eid + "-" + slug(album).replace(/ /g, "-"), `${album} · ${E.years}`, `<ol class="slist">${groups[k].map(s => `<li><a class="song ${SONG_EXTRA[s.key] ? "rich" : ""}" href="#s/${s.id}"><span class="n">${s.n ? String(s.n).padStart(2, "0") : "·"}</span><b>${esc(s.title)}</b>${SONG_EXTRA[s.key] ? `<em>${U("meaningMap")}</em>` : ""}</a></li>`).join("")}</ol>`]; });
  return { hero, ch };
}
function songPage(id) {
  const s = SONGS.find(x => x.id === id), E = ERAS.find(x => x.id === s.era), P = ERA_PAGES[s.era] || {}, X = SONG_EXTRA[s.key];
  const hero = `<section class="hero" id="top"><div class="hero-inner"><p class="kicker">${esc(L(s.album))}${s.n ? ` · #${s.n}` : ""}</p><h1 class="${s.title.length > 12 ? "long" : ""}">${esc(s.title)}</h1>
    ${X ? `<p class="quote">${L(X[0].t)}</p>` : ""}</div>${E.cover ? `<img class="sleeve" src="${E.cover}" alt="${esc(L(E.name))}">` : ""}</section>`;
  const ch = [];
  ch.push(["map", U("meaningMap"), X
    ? `<p class="muted">${U("meaningHint")}</p><div class="amap"><div class="achips">${X.map((a, i) => `<button class="achip ${i ? "" : "on"}" data-i="${i}">${L(a.l)}</button>`).join("")}</div>
       <div class="apanels">${X.map((a, i) => `<div class="apanel" data-i="${i}" ${i ? "hidden" : ""}><p>${L(a.t)}</p>${a.v ? `<a class="jump" href="https://youtu.be/${a.v[0]}?t=${a.v[1]}" target="_blank" rel="noopener">▶ ${U("jumpTo")} ≈ ${Math.floor(a.v[1] / 60)}:${String(a.v[1] % 60).padStart(2, "0")}</a>` : ""}</div>`).join("")}</div></div>`
    : `<p class="muted">${U("noMeaning")}</p>`]);
  if (s.note) ch.push(["behind", U("behind"), `<p class="reveal">${L(s.note)}</p><p><a href="#${E.id}">${esc(L(E.name))} →</a></p>`]);
  const vids = songVideos(s), sp = P.album && [].concat(P.album.spotify || [])[0];
  if (vids.length || sp) ch.push(["watch", U("watch"), `${vids.length ? `<div class="vids">${vids.map(v => ytCard(v)).join("")}</div>` : ""}${sp ? `<div class="spot song-spot">${sp.length ? `<iframe title="Spotify" src="https://open.spotify.com/embed/album/${sp}?utm_source=generator&theme=0" width="100%" height="352" frameborder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>` : ""}</div>` : ""}<p class="muted">${U("eduNote")}</p>`]);
  ch.push(["lyrics", U("lyricsTitle"), `<p>${U("lyricsBody")}</p><p><a class="btn" href="${genius(s.title)}" target="_blank" rel="noopener">${U("readGenius")} ↗</a></p>`]);
  const sib = SONGS.filter(x => x.era === s.era && x.album === s.album), i = sib.indexOf(s);
  ch.push(["album", U("fromAlbum"), `<ol class="slist">${sib.map(x => `<li><a class="song ${x === s ? "now" : ""}" href="#s/${x.id}"><span class="n">${x.n ? String(x.n).padStart(2, "0") : "·"}</span><b>${esc(x.title)}</b></a></li>`).join("")}</ol>`]);
  return { hero, ch, theme: E, prev: sib[i - 1], next: sib[i + 1] };
}
function route() {
  const [a, b] = location.hash.slice(1).split("/");
  if (a === "m" && MEMBERS[b]) return { member: b };
  if (a === "bsides") return { bsides: true };
  if (a === "home" || !a) return { home: true };
  if (a === "songs") return { songs: true };
  if (a === "s" && SONGS.some(x => x.id === b)) return { song: b };
  if (a === "photos" && window.GALLERY) return { photos: true };
  if (a === "events") return { events: true };
  if (a === "tours") return { tours: true };
  if (a === "videos") return { videos: true };
  if (a === "interviews") return { interviews: true };
  if (a === "web") return { web: true };
  if (a === "iceberg") return { iceberg: true };
  if (a === "hair") return { hair: true };
  if (a === "merch" && window.MERCH) return { merch: true };
  if (a === "sources") return { sources: true };
  if (a === "e" && EVENTS.some(x => x.id === b)) return { event: b };
  let idx = ERAS.findIndex(e => e.id === a);
  if (idx < 0) idx = ERAS.findIndex(e => e.id === "riot");
  return { idx };
}

function render() {
  const r = route();
  let era, hero, ch, prev, next, title, songNav;
  if (r.merch) {
    ({ hero, ch } = merchPage()); era = MERCH_ERA; title = U("merchPage");
  } else if (r.hair) {
    ({ hero, ch } = hairPage()); era = HAIR_ERA; title = U("hairPage");
  } else if (r.sources) {
    ({ hero, ch } = sourcesPage()); era = SOURCES_ERA; title = U("sources");
  } else if (r.iceberg) {
    ({ hero, ch } = icebergPage()); era = ICEBERG_ERA; title = U("iceberg");
  } else if (r.web) {
    ({ hero, ch } = webPage()); era = WEB_ERA; title = U("web");
  } else if (r.interviews) {
    ({ hero, ch } = interviewsPage()); era = INTERVIEWS_ERA; title = U("interviews");
  } else if (r.videos) {
    ({ hero, ch } = videosPage()); era = VIDEOS_ERA; title = U("videos");
  } else if (r.tours) {
    ({ hero, ch } = eventsIndex("tour")); era = EVENTS_ERA; title = U("tours");
  } else if (r.songs) {
    ({ hero, ch } = songsIndex()); era = SONGS_ERA; title = U("songs");
  } else if (r.song) {
    const sp = songPage(r.song); ({ hero, ch } = sp); era = sp.theme; title = SONGS.find(x => x.id === r.song).title; songNav = sp;
  } else if (r.photos) {
    ({ hero, ch } = galleryPage()); era = PHOTOS_ERA; title = U("photos");
  } else if (r.home) {
    ({ hero, ch } = homePage()); era = HOME_ERA; title = lang === "ua" ? "Головна" : "Home";
  } else if (r.events) {
    ({ hero, ch } = eventsIndex("event")); era = EVENTS_ERA; title = U("events");
  } else if (r.event) {
    const ev = eventPage(r.event); ({ hero, ch } = ev); era = ev.theme; title = L(EVENTS.find(x => x.id === r.event).title);
  } else if (r.bsides) {
    ({ hero, ch } = bsidesPage()); era = BSIDES_ERA; title = U("bsides");
  } else if (r.member) {
    const m = memberPage(r.member);
    ({ hero, ch } = m); era = m.theme; title = MEMBERS[r.member].name;
  } else {
    era = ERAS[r.idx]; prev = ERAS[r.idx - 1]; next = ERAS[r.idx + 1]; title = L(era.name);
    const P = ERA_PAGES[era.id];
    hero = eraHero(era, P); ch = eraChapters(era, P);
  }
  const root = document.documentElement.style;
  root.setProperty("--accent", accentOf(era));
  root.setProperty("--bg", era.bg || "#120E16");
  root.setProperty("--cover", era.cover ? `url('${era.cover}')` : "none");
  const ft = era.font; root.setProperty("--display", ft.f); root.setProperty("--tt", ft.tt); root.setProperty("--track", ft.track); root.setProperty("--fw", ft.fw); root.setProperty("--h1s", ft.h1s);
  document.documentElement.lang = lang === "ua" ? "uk" : "en";
  document.title = `${title} — ${L(UI.site)}`;
  $("#tag").textContent = U("tag");
  document.querySelectorAll(".lang button").forEach(b => b.classList.toggle("on", b.dataset.lang === lang));
  $("#eras").innerHTML = ERAS.map(e => `<a href="#${e.id}" class="${!r.hair && !r.sources && !r.iceberg && !r.web && !r.interviews && !r.videos && !r.tours && !r.songs && !r.song && !r.photos && !r.home && !r.member && !r.bsides && !r.events && !r.event && e.id === era.id ? "on" : ""}" ${!r.hair && !r.sources && !r.iceberg && !r.web && !r.interviews && !r.videos && !r.tours && !r.songs && !r.song && !r.photos && !r.home && !r.member && !r.bsides && !r.events && !r.event && e.id === era.id ? 'aria-current="page"' : ""}>
    <i style="background:${accentOf(e)}"></i><b>${esc(L(e.tab))}</b><small>${e.years}</small></a>`).join("") +
    `<a href="#merch" class="${r.merch ? "on" : ""}"><i style="background:#F5A25D"></i><b>${esc(U("merchPage"))}</b><small>${MERCH.length}</small></a>` +
    `<a href="#hair" class="${r.hair ? "on" : ""}"><i style="background:#E8663C"></i><b>${esc(U("hairPage"))}</b><small>${ERAS.reduce((n, e) => n + e.hair.length, 0)}</small></a>` +
    `<a href="#songs" class="${r.songs || r.song ? "on" : ""}"><i style="background:#E87BAA"></i><b>${esc(U("songs"))}</b><small>${SONGS.length}</small></a>` +
    `<a href="#iceberg" class="${r.iceberg ? "on" : ""}"><i style="background:#9AD8F0"></i><b>${esc(U("iceberg"))}</b><small>${ICEBERG.length}</small></a>` +
    `<a href="#web" class="${r.web ? "on" : ""}"><i style="background:#7ED6A8"></i><b>${esc(U("web"))}</b><small>${INTERVIEWS.filter(i => /^Kerrang!/.test(i.outlet)).length + WEB_KERRANG.length + WEB_OFFICIAL.length + WEB_OLD.length}</small></a>` +
    `<a href="#interviews" class="${r.interviews ? "on" : ""}"><i style="background:#7AC7FF"></i><b>${esc(U("interviews"))}</b><small>${INTERVIEWS.length}</small></a>` +
    `<a href="#videos" class="${r.videos ? "on" : ""}"><i style="background:#FF4D4D"></i><b>${esc(U("videos"))}</b><small>${VIDEO_INDEX.length}</small></a>` +
    `<a href="#tours" class="${r.tours || (r.event && kindOf(EVENTS.find(x => x.id === r.event)) === "tour") ? "on" : ""}"><i style="background:#FF9F43"></i><b>${esc(U("tours"))}</b><small>${EVENTS.filter(e => kindOf(e) === "tour").length}</small></a>` +
    `<a href="#events" class="${r.events || (r.event && kindOf(EVENTS.find(x => x.id === r.event)) === "event") ? "on" : ""}"><i style="background:#F5D547"></i><b>${esc(U("events"))}</b><small>${EVENTS.filter(e => kindOf(e) === "event").length}</small></a>` +
    (window.GALLERY ? `<a href="#photos" class="${r.photos ? "on" : ""}"><i style="background:#4FB3D9"></i><b>${esc(U("photos"))}</b><small>${GALLERY.length}</small></a>` : "") +
    `<a href="#bsides" class="${r.bsides ? "on" : ""}"><i style="background:${BSIDES_ERA.accent}"></i><b>${esc(U("bsides"))}</b><small>${all_count()}</small></a>` +
    `<a href="#sources" class="${r.sources ? "on" : ""}"><i style="background:#B8B0C8"></i><b>${esc(U("sources"))}</b><small>ⓘ</small></a>`;
  $("#eras .on")?.scrollIntoView({ inline: "center", block: "nearest" });
  const nav = (a, isPrev) => a ? `<a href="#${a.id}"><small>${isPrev ? U("prev") : U("next")}</small><b>${esc(L(a.name))}</b><span>${a.years}</span></a>` : "<span></span>";
  $("#era").innerHTML = hero + ch.map((c, i) => chapter(c[0], i + 1, c[1], c[2])).join("") +
    (r.hair || r.merch || r.sources || r.iceberg || r.web || r.interviews || r.videos || r.tours || r.songs || r.photos || r.home || r.bsides || r.events ? "" : r.song ? `<nav class="pn">${songNav.prev ? `<a href="#s/${songNav.prev.id}"><small>${U("prevSong")}</small><b>${esc(songNav.prev.title)}</b></a>` : "<span></span>"}${songNav.next ? `<a href="#s/${songNav.next.id}"><small>${U("nextSong")}</small><b>${esc(songNav.next.title)}</b></a>` : "<span></span>"}</nav>` : r.event ? `<nav class="pn"><a href="${kindOf(EVENTS.find(x => x.id === r.event)) === "tour" ? "#tours" : "#events"}"><small>${U("backEvents")}</small><b>${esc(U(kindOf(EVENTS.find(x => x.id === r.event)) === "tour" ? "tours" : "events"))}</b></a><span></span></nav>` : r.member ? `<nav class="pn"><a href="#${era.id}"><small>${U("back")}</small><b>${esc(L(era.name))}</b><span>${era.years}</span></a><span></span></nav>` : `<nav class="pn">${nav(prev, true)}${nav(next, false)}</nav>`);
  injectMarks($("#era"));
  if (window.linkNames) linkNames($("#era"), r.member);
  if (window.gettyInit) gettyInit($("#era"));
  if (r.iceberg && window.iceDepth) iceDepth();
  $("#foot").innerHTML = `<p>${U("photoNote")}</p><p>${U("coverNote")}</p><p>${U("footer")}</p><p>${U("disclaimer")}</p>`;
  scrollTo({ top: 0, behavior: "instant" }); // html has smooth scrolling; a new page must start at the top at once
  observe();
  window.searchFocus && searchFocus();
  window.eraVeil && eraVeil(era, r.idx !== undefined);
}

let io;
function observe() {
  io?.disconnect();
  const chapters = [...document.querySelectorAll(".chapter")];
  $("#rail")?.remove();
  if (chapters.length) {
    const rail = document.createElement("nav");
    rail.id = "rail"; rail.setAttribute("aria-label", U("chapters"));
    rail.innerHTML = chapters.map(c => `<a href="#${c.id}" data-for="${c.id}"><span>${esc(c.dataset.title)}</span></a>`).join("");
    document.body.append(rail);
    rail.addEventListener("click", e => { const a = e.target.closest("a"); if (a) { e.preventDefault(); document.getElementById(a.dataset.for).scrollIntoView({ behavior: "smooth" }); } });
  }
  io = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) document.querySelectorAll("#rail a").forEach(a => a.classList.toggle("on", a.dataset.for === e.target.id));
  }), { rootMargin: "-35% 0px -55% 0px" });
  chapters.forEach(el => io.observe(el));
  const rv = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); rv.unobserve(e.target); } }), { rootMargin: "0px 0px -8% 0px" });
  document.querySelectorAll(".reveal").forEach(el => rv.observe(el));
}

document.addEventListener("click", e => {
  const sc = e.target.closest("[data-scroll]");
  if (sc) { e.preventDefault(); document.getElementById(sc.dataset.scroll)?.scrollIntoView({ behavior: "smooth" }); return; }
  const b = e.target.closest(".yt");
  if (b) {
    const f = document.createElement("iframe");
    f.src = `https://www.youtube-nocookie.com/embed/${b.dataset.id}?autoplay=1&rel=0`;
    f.allow = "autoplay; encrypted-media; picture-in-picture; fullscreen"; f.allowFullscreen = true; f.title = "YouTube";
    b.replaceWith(f);
  }
  const vf = e.target.closest(".vfilters button");
  if (vf) {
    vf.parentElement.querySelectorAll("button").forEach(x => x.classList.toggle("on", x === vf));
    const val = k => (document.querySelector(`.vfilters[data-k=${k}] button.on`) || {}).dataset?.v || "all"; const c = val("c"), en = val("e"), sr = val("s");
    document.querySelectorAll(".vcard").forEach(p => (p.hidden = (c !== "all" && p.dataset.c !== c) || (en !== "all" && p.dataset.e !== en) || (sr !== "all" && p.dataset.s !== sr)));
    return;
  }
  const ac = e.target.closest(".achip");
  if (ac) { document.querySelectorAll(".achip").forEach(x => x.classList.toggle("on", x === ac)); document.querySelectorAll(".apanel").forEach(p => (p.hidden = p.dataset.i !== ac.dataset.i)); return; }
  const gf = e.target.closest(".filters[data-key] button");
  if (gf) {
    const grp = gf.parentElement; grp.querySelectorAll("button").forEach(x => x.classList.toggle("on", x === gf));
    const val = k => (document.querySelector(`.filters[data-key=${k}] button.on`) || {}).dataset?.v || "all"; const y = val("y"), w = val("w");
    document.querySelectorAll(".ph").forEach(p => (p.hidden = (y !== "all" && p.dataset.y !== y) || (w === "fun" ? p.dataset.fun !== "1" : w !== "all" && p.dataset.w !== w)));
    return;
  }
  const f = e.target.closest(".filters button");
  if (f) {
    document.querySelectorAll(".filters button").forEach(x => x.classList.toggle("on", x === f));
    document.querySelectorAll(".bitem").forEach(i => (i.hidden = f.dataset.f !== "all" && i.dataset.type !== f.dataset.f));
  }
  const l = e.target.closest(".lang button");
  if (l) { lang = l.dataset.lang; store.set("lang", lang); const y = scrollY; render(); scrollTo({ top: y, behavior: "instant" }); }
});
document.addEventListener("mouseover", e => { const ac = e.target.closest(".achip"); if (ac && !ac.classList.contains("on")) ac.click(); });
addEventListener("hashchange", () => { const a = location.hash.slice(1).split("/")[0]; if (a === "m" || a === "e" || a === "bsides" || a === "events" || a === "home" || a === "photos" || a === "songs" || a === "tours" || a === "videos" || a === "interviews" || a === "web" || a === "iceberg" || a === "hair" || a === "merch" || a === "sources" || a === "s" || ERAS.some(e => e.id === a)) render(); });
render();



















