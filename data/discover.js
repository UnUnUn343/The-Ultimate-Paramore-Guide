// Discovery: a "surprise me" button (header, or the "r" key), "start here" routes on the home page, and a "keep exploring" rail at the end of era, song, event and member pages.
// Everything is built from the data arrays already on the page; nothing here is copied text.
(() => {
  const T = (en, ua) => (typeof lang === "string" && lang === "ua" ? ua : en);
  const ex = (h, en, ua) => ({ h, en, ua });
  const norm = s => String(s || "").toLowerCase();
  const tx = v => (v && typeof v === "object" ? (typeof lang === "string" && lang === "ua" ? v.ua || v.en : v.en || v.ua) : String(v || ""));
  const e = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const have = h => { // does the target exist? (so a stale route never shows a dead link)
    const [a, b] = h.slice(1).split("/");
    if (a === "s") return (window.SONGS || []).some(s => s.id === b);
    if (a === "e") return (window.EVENTS || []).some(x => x.id === b);
    if (a === "m") return !!(window.MEMBERS || {})[b];
    return true;
  };

  // ---- surprise me
  const pool = () => {
    const P = [];
    (SONGS || []).forEach(s => P.push({ t: "song", label: s.title, h: "#s/" + s.id }));
    (EVENTS || []).forEach(x => P.push({ t: "event", label: tx(x.title), h: "#e/" + x.id }));
    Object.keys(MEMBERS || {}).forEach(k => P.push({ t: "person", label: MEMBERS[k].name, h: "#m/" + k }));
    (ICEBERG || []).forEach(x => P.push({ t: "ice", label: x[2], h: "#iceberg", find: x[2] }));
    (INTERVIEWS || []).forEach(x => P.push({ t: "iv", label: x.title, h: "#interviews", find: x.title }));
    (BSIDES || []).forEach(g => g.items.forEach(i => P.push({ t: "bside", label: i.t, h: "#bsides", find: i.t })));
    (MVS || []).forEach(m => { const s = (SONGS || []).find(x => x.id === m.song); const n = s ? s.title : (m.title || m.song); P.push({ t: "mv", label: n, h: "#mv", find: n }); });
    return P;
  };
  const KIND = { song: ["Song", "Пісня"], event: ["Event or tour", "Подія чи тур"], person: ["Person", "Людина"], ice: ["Iceberg entry", "Пункт айсберга"], iv: ["Interview", "Інтерв'ю"], bside: ["B-side or rarity", "B-сайд чи раритет"], mv: ["Music video", "Кліп"] };
  let toastEl, toastT;
  const toast = msg => {
    toastEl = toastEl || Object.assign(document.body.appendChild(document.createElement("div")), { id: "toast", role: "status" });
    toastEl.textContent = msg; toastEl.classList.add("on"); clearTimeout(toastT); toastT = setTimeout(() => toastEl.classList.remove("on"), 4200);
  };
  window.surprise = () => {
    const P = pool(), types = [...new Set(P.map(x => x.t))];
    let pick, tries = 0;
    do { const t = types[Math.floor(Math.random() * types.length)], of = P.filter(x => x.t === t); pick = of[Math.floor(Math.random() * of.length)]; } while ((pick.h === location.hash && !pick.find) && ++tries < 8);
    window.__find = pick.find || "";
    const same = location.hash === pick.h; if (!same) location.hash = pick.h; else if (window.searchFocus) searchFocus();
    toast("✦ " + T("Surprise", "Сюрприз") + " · " + T(KIND[pick.t][0], KIND[pick.t][1]) + ": " + pick.label);
  };
  const mountBtn = () => {
    const s = document.getElementById("sbtn"); if (!s || document.getElementById("rbtn")) return;
    const b = Object.assign(document.createElement("button"), { id: "rbtn", className: s.className, type: "button", textContent: "✦" });
    const lab = () => { b.title = b.ariaLabel = T("Surprise me", "Здивуй мене"); }; lab(); b.addEventListener("mouseover", lab); b.addEventListener("focus", lab);
    b.addEventListener("click", () => surprise()); s.after(b);
  };
  document.addEventListener("keydown", ev => { if (ev.key === "r" && !ev.ctrlKey && !ev.metaKey && !ev.altKey && !/input|textarea|select/i.test(ev.target.tagName) && !ev.target.isContentEditable) surprise(); });
  mountBtn(); document.addEventListener("DOMContentLoaded", mountBtn);

  // ---- start here
  const PATHS = [
    { en: "I loved After Laughter", ua: "Мені подобається After Laughter", d: ["The sunny pop record with the darkest lyrics, and how the band got there.", "Сонячний поп з найтемнішими текстами — і як гурт до цього дійшов."], steps: [
      ex("#s/hard-times", "“Hard Times”, the first single", "«Hard Times» — перший сингл"), ex("#al", "The After Laughter era", "Епоха After Laughter"), ex("#crisis", "How the band almost ended (2015–16)", "Як гурт мало не завершився (2015–16)"),
      ex("#e/tiny-desk", "Tiny Desk concerts", "Tiny Desk-концерти"), ex("#e/hamburg-2017", "Hamburg 2017: the first show after the divorce", "Гамбург 2017: перший концерт після розлучення"), ex("#m/zac", "Zac's return", "Повернення Зака")] },
    { en: "I want the drama", ua: "Хочу драму", d: ["Exits, a blog post, a lawsuit — each told from the sources, with the rumours marked.", "Відходи, блог, позов — за джерелами, а чутки позначено."], steps: [
      ex("#bne", "Brand New Eyes: songs about each other", "Brand New Eyes: пісні одне про одного"), ex("#m/josh", "Josh Farro: the exit and the blog", "Джош Фарро: відхід і блог"), ex("#crisis", "Jeremy's lawsuit, Hayley's crisis", "Позов Джеремі й криза Гейлі"),
      ex("#m/jeremy", "Jeremy Davis", "Джеремі Девіс"), ex("#iceberg", "The iceberg: rumours, marked as rumours", "Айсберг: чутки, позначені як чутки")] },
    { en: "I came for This Is Why", ua: "Я прийшов(-ла) на This Is Why", d: ["The newest era: post-punk, the Eras Tour, the Grammys.", "Найновіша епоха: пост-панк, Eras Tour, «Греммі»."], steps: [
      ex("#s/this-is-why", "“This Is Why”", "«This Is Why»"), ex("#tiw", "The This Is Why era", "Епоха This Is Why"), ex("#e/eras-tour", "Paramore on the Eras Tour", "Paramore на Eras Tour"), ex("#e/grammys", "The Grammys", "«Греммі»"), ex("#now", "Where the band is now", "Де гурт зараз")] },
    { en: "I want Hayley's solo work", ua: "Хочу сольну творчість Гейлі", d: ["From Petals for Armor to the solo tour.", "Від Petals for Armor до сольного туру."], steps: [
      ex("#hiatus", "The break and the solo albums", "Перерва й сольні альбоми"), ex("#s/simmer", "“Simmer”", "«Simmer»"), ex("#mv", "Music videos, solo ones included", "Кліпи, зокрема сольні"), ex("#e/ego-death-tour", "Ego Death at a Bachelorette Party and the tour", "Ego Death at a Bachelorette Party і тур"), ex("#m/hayley", "Hayley Williams, year by year", "Гейлі Вільямс рік за роком")] },
    { en: "I like deep lore", ua: "Люблю глибоку лору", d: ["Rarities, rumours, old interviews and the long tail of the fandom.", "Раритети, чутки, старі інтерв'ю й довгий хвіст фандому."], steps: [
      ex("#iceberg", "The iceberg, entry by entry", "Айсберг, пункт за пунктом"), ex("#bsides", "B-sides and rarities", "B-сайди й раритети"), ex("#interviews", "Interviews in their own words", "Інтерв'ю їхніми словами"), ex("#videos", "Every video, searchable", "Усі відео з пошуком"), ex("#web", "On the web", "У мережі")] }
  ];
  window.startHere = () => {
    const opts = (() => { const g = {}; SONGS.forEach(s => (g[s.era + "|" + tx(s.album)] = g[s.era + "|" + tx(s.album)] || []).push(s)); return Object.keys(g).map(k => `<optgroup label="${e(k.split("|")[1])}">${g[k].map(s => `<option value="${s.id}">${e(s.title)}</option>`).join("")}</optgroup>`).join(""); })();
    const pick = `<div class="path pick"><h3>${T("I know one song", "Я знаю одну пісню")}</h3><p>${T("Pick it. Its page links on to the album, the people, the videos and the tour.", "Обери її. Сторінка пісні веде далі: альбом, люди, відео й тур.")}</p>
      <label class="sr" for="startsong">${T("Choose a song", "Обери пісню")}</label><select id="startsong"><option value="">${T("Choose a song…", "Обери пісню…")}</option>${opts}</select></div>`;
    const cards = PATHS.map(p => `<div class="path"><h3>${e(T(p.en, p.ua))}</h3><p>${e(T(p.d[0], p.d[1]))}</p><ol>${p.steps.filter(s => have(s.h)).map(s => `<li><a href="${s.h}">${e(T(s.en, s.ua))}</a></li>`).join("")}</ol></div>`).join("");
    return `<div class="paths">${pick}${cards}</div>`;
  };
  document.addEventListener("change", ev => { if (ev.target.id === "startsong" && ev.target.value) location.hash = "#s/" + ev.target.value; });

  // ---- keep exploring (end of era, song, event and member pages)
  const rail = () => {
    const [a, b] = location.hash.slice(1).split("/"), items = [];
    const era = id => ERAS.find(x => x.id === id), chip = (h, label, kind) => items.push(`<a class="rail-i" href="${h}"><small>${e(kind)}</small><b>${e(label)}</b></a>`);
    const evOf = id => (EVENTS || []).filter(x => x.era === id);
    let title = T("Keep exploring", "Дослідити далі");
    if (a === "s") {
      const s = SONGS.find(x => x.id === b); if (!s) return "";
      const E = era(s.era); if (E) chip("#" + E.id, tx(E.name), T("Album · era", "Альбом · епоха"));
      SONGS.filter(x => x.era === s.era && x.id !== s.id && x.keySong).slice(0, 3).forEach(x => chip("#s/" + x.id, x.title, T("Same album", "З того ж альбому")));
      evOf(s.era).slice(0, 3).forEach(x => chip("#e/" + x.id, tx(x.title), T(kindOf(x) === "tour" ? "Tour" : "Event", kindOf(x) === "tour" ? "Тур" : "Подія")));
      if ((MVS || []).some(m => m.song === s.id)) chip("#mv", T("Its music video", "Його кліп"), T("Videos", "Відео"));
    } else if (a === "e") {
      const x = (EVENTS || []).find(v => v.id === b); if (!x) return "";
      const E = era(x.era); if (E) chip("#" + E.id, tx(E.name), T("Era", "Епоха"));
      evOf(x.era).filter(v => v.id !== x.id).slice(0, 4).forEach(v => chip("#e/" + v.id, tx(v.title), T(kindOf(v) === "tour" ? "Tour" : "Event", kindOf(v) === "tour" ? "Тур" : "Подія")));
      SONGS.filter(s => s.era === x.era && s.keySong).slice(0, 3).forEach(s => chip("#s/" + s.id, s.title, T("Song", "Пісня")));
    } else if (a === "m") {
      const m = MEMBERS[b]; if (!m) return "";
      (m.eras || []).slice(0, 6).forEach(id => { const E = era(id); if (E) chip("#" + id, tx(E.name), T("Era", "Епоха")); });
      Object.keys(MEMBERS).filter(k => k !== b).slice(0, 3).forEach(k => chip("#m/" + k, MEMBERS[k].name, T("Person", "Людина")));
    } else if (ERAS.some(x => x.id === a)) {
      evOf(a).slice(0, 5).forEach(x => chip("#e/" + x.id, tx(x.title), T(kindOf(x) === "tour" ? "Tour" : "Event", kindOf(x) === "tour" ? "Тур" : "Подія")));
      SONGS.filter(s => s.era === a && s.keySong).slice(0, 3).forEach(s => chip("#s/" + s.id, s.title, T("Key song", "Ключова пісня")));
      Object.keys(MEMBERS).filter(k => (MEMBERS[k].eras || []).includes(a)).slice(0, 4).forEach(k => chip("#m/" + k, MEMBERS[k].name, T("Person", "Людина")));
    } else return "";
    return items.length ? `<section class="rail" aria-label="${e(title)}"><h3>${e(title)}</h3><div class="rail-g">${items.join("")}</div></section>` : "";
  };
  const prev = window.linkNames;
  window.linkNames = (root, own) => {
    if (prev) prev(root, own);
    if (!root || root.querySelector(".rail")) return;
    const html = rail(); if (!html) return;
    const nav = root.querySelector("nav.pn"); if (nav) nav.insertAdjacentHTML("beforebegin", html); else root.insertAdjacentHTML("beforeend", html);
  };
})();
