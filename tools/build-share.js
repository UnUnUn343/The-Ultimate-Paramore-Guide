// Writes a small static stub page for every era, song, member, event and list page (English at /<path>/, Ukrainian at /uk/<path>/), plus sitemap.xml and robots.txt.
// Each stub has its own title, description and share-card image (Open Graph + Twitter), readable text and links for crawlers, then sends visitors on to the real page in the app.
// Run from the site folder:  node tools/build-share.js
const fs = require("fs"), path = require("path"), vm = require("vm");
const ROOT = path.resolve(__dirname, ".."), BASE = "https://ununun343.github.io/The-Ultimate-Paramore-Guide/";
const { ctx, errors } = require("./load-data.js")(ROOT, "en");
if (errors.some(e => !/NodeFilter/.test(e))) { console.error(errors); process.exit(1); }
const run = c => vm.runInContext(c, ctx);
const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const clean = s => String(s || "").replace(/\{\{[\s\S]*?\}\}/g, "").replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();
const cut = (s, n) => { s = clean(s); if (s.length <= n) return s; const t = s.slice(0, n), i = Math.max(t.lastIndexOf(". "), t.lastIndexOf("; ")); return i > n * 0.55 ? t.slice(0, i + 1) : t.replace(/\s\S*$/, "") + "…"; };
const big = u => (u || "").replace("ab67616d00001e02", "ab67616d0000b273"); // Spotify cover: 300px -> 640px version of the same image
const yrs = (y, lg) => String(y).replace(/–$/, lg === "ua" ? "–тепер" : "–now");
const safe = s => !/report|rumou?r|allegedly|supposed|fans? (think|believe|say)|чутк|нібито|за повідомленнями|фанат|above|below|timeline|вище|нижче/i.test(s); // no gossip in a share card
const abs = u => (!u ? "" : (/^https?:/.test(u) ? u : BASE + u.replace(/^\//, "")).replace(/\(/g, "%28").replace(/\)/g, "%29"));

const PAGES = ["songs", "tours", "events", "bsides", "interviews", "iceberg", "hair", "merch", "mv", "videos", "photos", "web", "sources"];
const PAGE_KEY = { songs: "songs", tours: "tours", events: "events", bsides: "bsides", interviews: "interviews", iceberg: "iceberg", hair: "hairPage", merch: "merchPage", mv: "mvPage", videos: "videos", photos: "photos", web: "web", sources: "sources" };
const PAGE_DESC = {
  en: { songs: "Every Paramore song by album, with notes on what the band has said about it.", tours: "Paramore's tours, from the first support slots to the Eras Tour and the solo tour.", events: "Shows, TV spots, festivals and awards across Paramore's history.", bsides: "B-sides, demos, covers and rarities, with players where an official upload exists.", interviews: "Paramore in their own words: video interviews with summaries, and key magazine pieces.", iceberg: "The Paramore iceberg, entry by entry, with sources and honest notes where nothing was found.", hair: "Hayley Williams's hair colours by era, with dates and photos.", merch: "Paramore merch era by era.", mv: "Every official music video: who directed it, where it was shot and what happens.", videos: "A searchable index of Paramore videos.", photos: "Photos from Wikimedia Commons and Flickr under free licences, with credits.", web: "Paramore around the web: official pages, press and old posts.", sources: "Sources and notes: where the facts in this guide come from and how sure each one is." },
  ua: { songs: "Усі пісні Paramore за альбомами, з нотатками про те, що казав гурт.", tours: "Тури Paramore: від перших розігрівів до Eras Tour і сольного туру.", events: "Концерти, ТБ, фестивалі й нагороди в історії Paramore.", bsides: "B-сайди, демо, кавери і раритети з плеєрами там, де є офіційне завантаження.", interviews: "Paramore своїми словами: відеоінтерв'ю з переказами та ключові журнальні матеріали.", iceberg: "Айсберг Paramore пункт за пунктом — з джерелами й чесними примітками там, де нічого не знайшли.", hair: "Кольори волосся Гейлі Вільямс за епохами — з датами й фото.", merch: "Мерч Paramore епоха за епохою.", mv: "Усі офіційні кліпи: хто зняв, де й що відбувається.", videos: "Індекс відео Paramore з пошуком.", photos: "Фото з Wikimedia Commons і Flickr під вільними ліцензіями, з авторами.", web: "Paramore в мережі: офіційні сторінки, преса й старі дописи.", sources: "Джерела й примітки: звідки факти в цьому гіді й наскільки вони певні." }
};

function meta(kind, id, lg) {
  run(`lang=${JSON.stringify(lg)}`);
  const L = o => run(`L`)(o), site = L(run("UI.site")), eras = run("ERAS"), photo = run("realPhoto");
  const era = i => eras.find(e => e.id === i), cover = e => big(e && e.cover);
  const home = abs(run("PHOTOS.band23.src"));
  if (kind === "home") return { path: "", title: site, desc: lg === "ua" ? "Повний двомовний гід по Paramore, епоха за епохою: історія, склад, волосся Гейлі, альбоми, відео й глибокі зрізи." : "A complete, bilingual guide to Paramore, era by era: story, lineup, Hayley's hair, albums, videos and deep cuts.", img: home, hash: "#home", related: [] };
  if (kind === "era") {
    const e = era(id), h = (run("ERA_PAGES")[id] || {}).hero || {}, stats = (h.stats || []).map(L).join(" · ");
    return { path: id, title: `${L(e.name)} (${yrs(e.years, lg)}) — Paramore`, desc: cut([h.quote && L(h.quote).replace(/[.]+$/, "."), stats && stats + "."].filter(Boolean).join(" "), 220), img: cover(e) || home, hash: "#" + id,
      related: [...run("EVENTS").filter(x => x.era === id).map(x => ["e/" + x.id, L(x.title)]), ...run("SONGS").filter(s => s.era === id).map(s => ["s/" + s.id, s.title])] };
  }
  if (kind === "song") {
    const s = run("SONGS").find(x => x.id === id), e = era(s.era), ex = (run("SONG_EXTRA")[s.key] || [])[0];
    const first = ex ? clean(L(ex.t)) : "";
    return { path: "s/" + id, title: `${s.title} — Paramore`, desc: cut(safe(L(s.note)) ? `${L(s.album)} (${yrs(e.years, lg)}). ${L(s.note)}` + (L(s.note).length < 60 && first && safe(first) ? " " + first : "") : (lg === "ua" ? `${s.title} — з альбому ${L(s.album)} (${yrs(e.years, lg)}): що сказав гурт, відео та місце в історії.` : `${s.title}, from ${L(s.album)} (${yrs(e.years, lg)}): what the band has said about it, videos and where it fits in the story.`), 220), img: cover(e) || home, hash: "#s/" + id,
      related: [[s.era, L(e.name)], ...run("SONGS").filter(x => x.era === s.era && x.id !== id).slice(0, 12).map(x => ["s/" + x.id, x.title])] };
  }
  if (kind === "event") {
    const x = run("EVENTS").find(v => v.id === id), e = era(x.era);
    return { path: "e/" + id, title: `${L(x.title)} — Paramore`, desc: cut(`${L(x.when)}. ${L(x.blurb)}`, 220), img: cover(e) || home, hash: "#e/" + id, related: [[x.era, L(e.name)], ...run("EVENTS").filter(v => v.era === x.era && v.id !== id).map(v => ["e/" + v.id, L(v.title)])] };
  }
  if (kind === "member") {
    const m = run("MEMBERS")[id], ph = photo(m.photo), b = (m.beats || [])[0];
    return { path: "m/" + id, title: `${m.name} — Paramore`, desc: cut(`${m.name} — ${L(m.role)}. ${L(m.tagline)}`, 220), img: abs(ph && ph.src) || home, hash: "#m/" + id, related: (m.eras || []).map(i => [i, L(era(i).name)]) };
  }
  const key = PAGE_KEY[id];
  return { path: id, title: `${L(run("UI")[key])} — Paramore`, desc: PAGE_DESC[lg][id], img: home, hash: "#" + id, related: [] };
}

const TXT = { en: { open: "Open this page in the guide", more: "More in the guide", site: "Paramore — The Journey", loc: "en_US", alt: "uk_UA" }, ua: { open: "Відкрити цю сторінку в гіді", more: "Ще в гіді", site: "Paramore — Подорож", loc: "uk_UA", alt: "en_US" } };
const urlOf = (p, lg) => BASE + (lg === "ua" ? "uk/" : "") + (p ? p + "/" : "");
function render(m, lg) {
  const t = TXT[lg], depth = (m.path ? m.path.split("/").length : 0) + (lg === "ua" ? 1 : 0), up = "../".repeat(depth) || "./", other = lg === "ua" ? "en" : "ua";
  const back = up + (lg === "ua" ? "?lang=ua" : "") + m.hash;
  const links = m.related.slice(0, 24).map(([p, label]) => `<li><a href="${rel(m.path, p, lg)}">${esc(label)}</a></li>`).join("");
  return `<!doctype html>
<html lang="${lg === "ua" ? "uk" : "en"}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(m.title)}</title>
<meta name="description" content="${esc(m.desc)}">
<link rel="canonical" href="${urlOf(m.path, lg)}">
<link rel="alternate" hreflang="en" href="${urlOf(m.path, "en")}">
<link rel="alternate" hreflang="uk" href="${urlOf(m.path, "ua")}">
<meta property="og:type" content="website">
<meta property="og:site_name" content="${esc(t.site)}">
<meta property="og:title" content="${esc(m.title)}">
<meta property="og:description" content="${esc(m.desc)}">
<meta property="og:url" content="${urlOf(m.path, lg)}">
<meta property="og:locale" content="${t.loc}">
<meta property="og:locale:alternate" content="${t.alt}">
${m.img ? `<meta property="og:image" content="${esc(m.img)}">\n<meta name="twitter:card" content="summary_large_image">\n<meta name="twitter:image" content="${esc(m.img)}">` : `<meta name="twitter:card" content="summary">`}
<meta name="twitter:title" content="${esc(m.title)}">
<meta name="twitter:description" content="${esc(m.desc)}">
<meta name="theme-color" content="#120E16">
<style>body{margin:0;background:#120E16;color:#EDE7F2;font:16px/1.6 system-ui,sans-serif}main{max-width:640px;margin:0 auto;padding:40px 18px}h1{font-size:30px;line-height:1.2;margin:0 0 12px}a{color:#FF9F43}.go{display:inline-block;margin:18px 0 26px;padding:12px 18px;border:1.5px solid #FF9F43;border-radius:99px;text-decoration:none;font-weight:600}ul{columns:2;padding-left:18px;font-size:14px}</style>
<script>location.replace(${JSON.stringify(back)})</script>
</head>
<body>
<main>
<h1>${esc(m.title.replace(/ — Paramore$/, ""))}</h1>
<p>${esc(m.desc)}</p>
<a class="go" href="${esc(back)}">${esc(t.open)} →</a>
${links ? `<h2>${esc(t.more)}</h2><ul>${links}</ul>` : ""}
</main>
</body>
</html>
`;
}
function rel(from, to, lg) { // link from one stub to another (both are directories under the site root or /uk)
  const depth = (from ? from.split("/").length : 0) + (lg === "ua" ? 1 : 0);
  return "../".repeat(depth) + (lg === "ua" ? "uk/" : "") + to + "/";
}
// the stubs are plain directories: remove the old ones first so deleted entries do not linger
const OWN = ["s", "e", "m", "uk", ...PAGES, ...run("ERAS").map(e => e.id)];
OWN.forEach(d => fs.rmSync(path.join(ROOT, d), { recursive: true, force: true }));
const jobs = [["home", ""], ...run("ERAS").map(e => ["era", e.id]), ...run("SONGS").map(s => ["song", s.id]), ...run("EVENTS").map(e => ["event", e.id]), ...Object.keys(run("MEMBERS")).map(k => ["member", k]), ...PAGES.map(p => ["page", p])];
const urls = [];
for (const lg of ["en", "ua"]) for (const [kind, id] of jobs) {
  const m = meta(kind, id, lg); if (kind === "home" && lg === "en") continue; // the real index.html is the English home page
  const dir = path.join(ROOT, lg === "ua" ? "uk" : "", m.path); fs.mkdirSync(dir, { recursive: true }); fs.writeFileSync(path.join(dir, "index.html"), render(m, lg));
  urls.push(urlOf(m.path, lg));
}
urls.unshift(BASE);
fs.writeFileSync(path.join(ROOT, "sitemap.xml"), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map(u => `  <url><loc>${u}</loc></url>`).join("\n")}\n</urlset>\n`);
fs.writeFileSync(path.join(ROOT, "robots.txt"), `User-agent: *\nAllow: /\nSitemap: ${BASE}sitemap.xml\n`);
console.log("stubs:", urls.length - 1, "pages in sitemap:", urls.length);
