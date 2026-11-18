// #sources: every source note in one place. Notes live inside the text as {{note}} (shown as a small ⓘ marker, see app.js L/injectMarks);
// this page reads the data files themselves, so it is always up to date, and adds the iceberg research notes from ICE_EXT.
Object.assign(UI, {
  sources: { ua: "Джерела й примітки", en: "Sources & notes" },
  sourcesTag: { ua: "звідки що взято і наскільки це певно", en: "where things come from, and how sure we are" },
  sourcesQuote: { ua: "У текстах стоять лише маленькі ⓘ — тут усі примітки разом.", en: "The pages carry only a small ⓘ — here are all the notes together." },
  sourcesIntro: { ua: "Тут зібрано, що не вдалося перевірити, де лише одне джерело, де розповідь учасників, а де фанатська версія. Позначки ⓘ у текстах ведуть сюди за змістом.", en: "This is where the things that couldn't be checked live: single sources, band members' own tellings, fan versions and unverified dates. The ⓘ marks in the pages point here." },
  sourcesIce: { ua: "Айсберг — нотатки з пошуків", en: "Iceberg — research notes" },
  sourcesLoading: { ua: "Збираю примітки…", en: "Gathering the notes…" },
  sourcesNone: { ua: "Приміток поки немає.", en: "No notes yet." }
});
window.SOURCES_ERA = { id: "sources", accent: "#B8B0C8", bg: "#111016", hair: [], name: UI.sources, tab: UI.sources, years: "", font: { f: "'Oswald',Impact,sans-serif", tt: "uppercase", track: ".02em", fw: 600, h1s: 1 } };
const SRC_LABEL = {
  "interviews.js": { ua: "Інтерв'ю", en: "Interviews" }, "bsides.js": { ua: "Бі-сайди", en: "B-sides" }, "songs.js": { ua: "Пісні", en: "Songs" },
  "events.js": { ua: "Події", en: "Events" }, "tours.js": { ua: "Тури", en: "Tours" }, "web.js": { ua: "Мережа", en: "Web" }, "eras.js": { ua: "Епохи", en: "Eras" },
  "members.js": { ua: "Учасники", en: "Members" }, "wikidata.js": { ua: "Учасники", en: "Members" }, "videos.js": { ua: "Відео", en: "Videos" }, "extras.js": { ua: "Відео", en: "Videos" }
};
const srcLabel = f => {
  const id = f.replace(/\.js$/, ""), era = ERAS.find(e => e.id === id);
  if (era) return L(era.name);
  if (/^deep-/.test(f)) return lang === "ua" ? "Сторінки учасників" : "Member pages";
  return L(SRC_LABEL[f] || { ua: f, en: f });
};
async function sourcesBuild() {
  const files = [...new Set([...document.scripts].map(s => s.getAttribute("src")).filter(x => x && /^data\/.+\.js/.test(x)))];
  const texts = await Promise.all(files.map(f => fetch(f).then(r => r.text()).catch(() => "")));
  const groups = new Map(), cyr = /[Ѐ-ӿ]/;
  files.forEach((f, i) => {
    const strRe = /"((?:[^"\\]|\\.)*\{\{(?:[^"\\]|\\.)*)"/g; let m;
    while ((m = strRe.exec(texts[i]))) {
      let str = m[1]; try { str = JSON.parse('"' + str + '"'); } catch { /* keep the raw literal */ }
      if (!!cyr.test(str) !== (lang === "ua")) continue;
      const mk = /\{\{([\s\S]+?)\}\}/g; let x;
      while ((x = mk.exec(str))) {
        const before = str.slice(0, x.index).replace(/\{\{[\s\S]*?\}\}/g, "").trim();
        let ctx = before.slice(-110); if (before.length > 110) ctx = "…" + ctx.replace(/^\S*\s/, "");
        const key = srcLabel(files[i].split("/").pop());
        (groups.get(key) || groups.set(key, []).get(key)).push([ctx, x[1].trim()]);
      }
    }
  });
  const li = ([c, n, k]) => `<li>${c ? `<q>${esc(c)}</q> ` : ""}<span>${esc(n)}</span>${k > 1 ? ` <em>×${k}</em>` : ""}</li>`;
  const uniq = items => { const m = new Map(); items.forEach(([c, n]) => { const key = c + "\u0001" + n; (m.get(key) || m.set(key, [c, n, 0]).get(key))[2]++; }); return [...m.values()]; };
  groups.forEach((v, k) => groups.set(k, uniq(v)));
  let html = `<p class="lead">${U("sourcesIntro")}</p>`;
  const ice = Object.entries(window.ICE_EXT || {}).map(([k, v]) => [(ICEBERG.find(e => new RegExp(k, "i").test(e[2])) || [])[2] || k, v.filter(x => x.note).map(x => x.note)]).filter(([, n]) => n.length);
  if (ice.length) html += `<h3 class="src-h">${U("sourcesIce")} · ${ice.length}</h3><ul class="srclist">${ice.map(([t, ns]) => ns.map(n => li([t, n])).join("")).join("")}</ul>`;
  [...groups.entries()].forEach(([g, items]) => { html += `<h3 class="src-h">${esc(g)} · ${items.length}</h3><ul class="srclist">${items.map(li).join("")}</ul>`; });
  return html;
}
function sourcesPage() {
  const hero = `<section class="hero" id="top"><div class="hero-inner"><p class="kicker">${U("sourcesTag")}</p><h1 class="long">${esc(U("sources"))}</h1><p class="quote">${U("sourcesQuote")}</p></div></section>`;
  sourcesBuild().then(html => { const el = document.getElementById("srcbody"); if (el) el.innerHTML = html; }).catch(() => { const el = document.getElementById("srcbody"); if (el) el.textContent = U("sourcesNone"); });
  return { hero, ch: [["all", U("sources"), `<div id="srcbody" class="muted">${U("sourcesLoading")}</div>`]] };
}
