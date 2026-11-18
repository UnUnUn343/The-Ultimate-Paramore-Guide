// Site search: one box for songs, people, eras, events and tours, B-sides, iceberg entries, interviews, merch and the 741 videos.
// The index is built on first open from the same data arrays the pages use, in both languages; nothing is stored or sent anywhere.
(() => {
  const norm = s => String(s || "").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[’'`ʼ]/g, "").replace(/[^a-z0-9а-яіїєґ\s]/g, " ").replace(/\s+/g, " ").trim();
  const tx = v => v && typeof v === "object" ? [v.en, v.ua].filter(Boolean).join(" ") : String(v || "");
  const TYPES = [["era", { ua: "Епохи", en: "Eras" }], ["member", { ua: "Люди", en: "People" }], ["song", { ua: "Пісні", en: "Songs" }], ["event", { ua: "Події й тури", en: "Events & tours" }], ["bside", { ua: "B-сайди", en: "B-sides" }], ["merch", { ua: "Мерч", en: "Merch" }], ["ice", { ua: "Айсберг", en: "Iceberg" }], ["iv", { ua: "Інтерв'ю", en: "Interviews" }], ["video", { ua: "Відео", en: "Videos" }]];
  const W = { era: 8, member: 9, song: 6, event: 5, bside: 3, merch: 3, ice: 2, iv: 2, video: 1 };
  const LG = () => (typeof lang === "string" ? lang : "en"); // app.js keeps the current language in a global `lang`
  let index = null, sel = 0, shown = [];
  const build = () => {
    const out = [], add = (type, label, sub, href, text, find, ext) => out.push({ type, label: String(label), sub: sub || "", href, find: find || "", ext: !!ext, n: norm(label), b: norm(label + " " + (text || "")) });
    (window.ERAS || []).forEach(e => add("era", tx(e.name), e.years, "#" + e.id, tx(e.tab)));
    const UA_NAME = { hayley: "Гейлі Вільямс", josh: "Джош Фарро", zac: "Зак Фарро", jeremy: "Джеремі Девіс", taylor: "Тейлор Йорк", hunter: "Хантер Лемб", jason: "Джейсон Байнам", john: "Джон Гембрі" };
    Object.keys(window.MEMBERS || {}).forEach(k => { const m = MEMBERS[k]; add("member", m.name, tx(m.role), "#m/" + k, tx(m.tagline) + " " + k); const e = out[out.length - 1]; e.n = norm(m.name + " " + (UA_NAME[k] || "")); e.b += " " + e.n; });
    (window.SONGS || []).forEach(s => add("song", s.title, tx(s.album), "#s/" + s.id, tx(s.note) + " " + ((window.SONG_EXTRA || {})[s.key] || []).map(a => tx(a.l) + " " + tx(a.t)).join(" ")));
    (window.EVENTS || []).forEach(e => add("event", tx(e.title), tx(e.when), "#e/" + e.id, tx(e.lead || e.intro || "")));
    (window.BSIDES || []).forEach(g => g.items.forEach(i => add("bside", i.t, tx(i.where), "#bsides", tx(i.note), i.t)));
    (window.MERCH || []).forEach(m => add("merch", tx(m.item), m.y, "#merch", tx(m.note), tx(m.item).split(" ")[0]));
    (window.ICEBERG || []).forEach(e => add("ice", e[2], "", "#iceberg", ((window.ICE_EXT && Object.keys(ICE_EXT).filter(k => new RegExp(k, "i").test(e[2])).map(k => ICE_EXT[k].map(x => x.note || x.label || "").join(" ")).join(" ")) || ""), e[2]));
    (window.INTERVIEWS || []).forEach(i => add("iv", i.title, [i.by, i.outlet, i.date].filter(Boolean).join(" · "), "#interviews", tx(i.desc), i.title));
    (window.VIDEO_INDEX || []).forEach(v => add("video", v.title, v.cat || "", "https://www.youtube.com/watch?v=" + v.id, "", "", true));
    return out;
  };
  const search = q => {
    const phrase = norm(q), toks = phrase.split(" ").filter(Boolean); if (!toks.length) return [];
    const hits = [];
    for (const e of index) {
      if (!toks.every(t => e.b.includes(t))) continue;
      let sc = W[e.type];
      if (e.n === phrase) sc += 20; else if (e.n.startsWith(phrase)) sc += 12; else if (e.n.includes(phrase)) sc += 9; else if (toks.every(t => e.n.includes(t))) sc += 6; else sc -= 2; // text-only matches rank low
      hits.push([sc, e]);
    }
    hits.sort((x, y) => y[0] - x[0]);
    const by = {}; hits.forEach(([sc, e]) => { (by[e.type] = by[e.type] || { top: sc, items: [] }).items.push(e); });
    return TYPES.map(([t, name]) => [t, name, by[t] ? by[t].items : [], by[t] ? by[t].top : -99]).filter(x => x[2].length).sort((x, y) => y[3] - x[3]);
  };
  const esc2 = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const mark = (txt, q) => { let h = esc2(txt); norm(q).split(" ").filter(t => t.length > 1).forEach(t => { const re = new RegExp("(" + t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + ")", "ig"); h = h.replace(re, "<mark>$1</mark>"); }); return h; };
  let box, input, list;
  const open = () => {
    if (!index) index = build();
    if (!box) {
      box = document.createElement("div"); box.id = "sbox"; box.hidden = true;
      box.innerHTML = `<div class="sb-panel" role="dialog" aria-label="Search"><div class="sb-in"><span aria-hidden="true">⌕</span><input type="search" autocomplete="off" spellcheck="false"><kbd>Esc</kbd></div><div class="sb-res" role="listbox"></div></div>`;
      document.body.append(box); input = box.querySelector("input"); list = box.querySelector(".sb-res");
      box.addEventListener("mousedown", e => { if (e.target === box) close(); });
      input.addEventListener("input", draw);
      input.addEventListener("keydown", e => {
        if (e.key === "Escape") close();
        else if (e.key === "ArrowDown" || e.key === "ArrowUp") { e.preventDefault(); move(e.key === "ArrowDown" ? 1 : -1); }
        else if (e.key === "Enter" && shown[sel]) go(shown[sel]);
      });
      list.addEventListener("click", e => { const r = e.target.closest("[data-i]"); if (r) go(shown[+r.dataset.i]); });
    }
    input.placeholder = LG() === "ua" ? "Шукати пісню, людину, подію, відео…" : "Search songs, people, events, videos…";
    box.hidden = false; input.value = ""; draw(); input.focus();
  };
  const close = () => { if (box) box.hidden = true; };
  const draw = () => {
    const q = input.value, groups = search(q); shown = []; sel = 0;
    if (!q.trim()) { list.innerHTML = `<p class="sb-hint">${LG() === "ua" ? "Почни писати: «Playing God», «Тейлор», «Wembley», «мерч 2018»." : "Start typing: “Playing God”, “Taylor”, “Wembley”, “merch 2018”."}</p>`; return; }
    if (!groups.length) { list.innerHTML = `<p class="sb-hint">${LG() === "ua" ? "Нічого не знайшлось." : "Nothing found."}</p>`; return; }
    list.innerHTML = groups.map(([t, name, items]) => { const top = items.slice(0, t === "video" ? 5 : 6); const start = shown.length; top.forEach(e => shown.push(e));
      return `<div class="sb-g"><h4>${esc2(LG() === "ua" ? name.ua : name.en)} <small>${items.length}</small></h4>${top.map((e, i) => `<a class="sb-r" role="option" data-i="${start + i}" href="${e.ext ? e.href : e.href}">${mark(e.label, q)}${e.sub ? `<small>${esc2(e.sub)}</small>` : ""}${e.ext ? `<em>↗</em>` : ""}</a>`).join("")}</div>`; }).join("");
    paint();
  };
  const paint = () => { list.querySelectorAll(".sb-r").forEach(r => r.classList.toggle("on", +r.dataset.i === sel)); list.querySelector(".sb-r.on")?.scrollIntoView({ block: "nearest" }); };
  const move = d => { if (!shown.length) return; sel = (sel + d + shown.length) % shown.length; paint(); };
  const go = e => {
    close();
    if (e.ext) { window.open(e.href, "_blank", "noopener"); return; }
    window.__find = e.find || "";
    if (location.hash === e.href) focus(); else location.hash = e.href;
  };
  // after a page renders, scroll to the matching entry and flash it
  const focus = () => {
    const t = norm(window.__find || ""); window.__find = ""; if (!t) return;
    const cands = document.querySelectorAll("#era li, #era article, #era .bitem, #era .vid, #era .ecard, #era .merch-item, #era .ice");
    for (const el of cands) { if (norm(el.textContent).includes(t)) { el.scrollIntoView({ block: "center" }); el.classList.add("sflash"); setTimeout(() => el.classList.remove("sflash"), 2600); return; } }
  };
  window.searchFocus = () => setTimeout(focus, 250);
  document.addEventListener("click", e => { if (e.target.closest("#sbtn")) { e.preventDefault(); open(); } });
  document.addEventListener("keydown", e => {
    const typing = /input|textarea|select/i.test(e.target.tagName) || e.target.isContentEditable;
    if ((e.key === "/" && !typing && !e.ctrlKey && !e.metaKey) || ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k")) { e.preventDefault(); open(); }
  });
})();
