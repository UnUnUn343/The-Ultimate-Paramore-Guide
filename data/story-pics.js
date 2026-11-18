// "The story" photo column: the photos set by hand in the era file, then as many more as fit the length of the text:
// free Commons photos from the era's years first (spread over the years), then Getty press photos (their own embed, so none of them repeats in the press chapter).
const STORY_SKIP = /symbol|logo|cover|carátula|signature|assinatura|poster|crop|deriv|setlist|ticket|monument|thomas|half\s?noise|church|bishop/i;
const STORY_ABOUT = /paramore|hayley|taylor york|farro|jeremy davis|zac |josh /i; // only photos that are clearly of the band or its members
function eraYearRange(era) {
  const m = String(era.years || "").match(/(\d{4})(?:\D+(\d{4})?)?/); if (!m) return [0, 0];
  return [+m[1], m[2] ? +m[2] : (/–\s*$/.test(era.years) ? 2026 : +m[1])];
}
const spread = (list, n) => list.length <= n ? list : Array.from({ length: n }, (_, i) => list[Math.floor(i * list.length / n)]);
const galFig = (r, cls) => {
  const [f, y, by, lic, desc, x] = r, name = encodeURIComponent(f.replace(/ /g, "_"));
  const src = x ? x.src : `https://commons.wikimedia.org/wiki/Special:FilePath/${name}?width=560`, page = x ? x.page : `https://commons.wikimedia.org/wiki/File:${name}`;
  return `<figure class="polaroid ${cls}"><img src="${src}" alt="${esc(desc || f)}" loading="lazy"><figcaption><span>${y}</span><a href="${page}" target="_blank" rel="noopener">© ${esc(by)} · ${lic}</a></figcaption></figure>`;
};
window.storyPics = (era, P) => {
  window.__usedG = window.__usedG || new Set();
  const explicit = (P.story.photos || []).filter(k => PHOTOS[k]);
  // photo column should be about as tall as the text, not taller: text ~0.68 px per character, one photo ~395 px (measured at 1024-1400 px wide)
  const textLen = (P.story.beats || []).reduce((n, b) => n + String(L(b.when)).length + String(L(b.text)).length, 0);
  const N = Math.max(2, Math.min(9, Math.round(textLen * 0.68 / 395)));
  const have = explicit.map(k => PHOTOS[k].src.toLowerCase());
  const [y0, y1] = eraYearRange(era);
  const free = spread((window.GALLERY || []).filter(r => +r[1] >= y0 && +r[1] <= y1 && STORY_ABOUT.test(r[0] + " " + (r[4] || "")) && !STORY_SKIP.test(r[0] + " " + (r[4] || "")) && !have.some(s => s.includes(encodeURIComponent(r[0].replace(/ /g, "_")).toLowerCase()))), Math.max(0, N - explicit.length));
  const room = Math.max(0, N - explicit.length - free.length);
  const gets = room ? spread((window.GETTY || []).filter(g => g.era === era.id && (g.who.includes("hayley") || g.who.includes("band"))), room) : [];
  gets.forEach(g => window.__usedG.add(g.gid));
  let i = 0;
  return explicit.map(k => photo(k, i++ % 2 ? "tilt-r" : "tilt-l")).join("") + free.map(r => galFig(r, i++ % 2 ? "tilt-r" : "tilt-l")).join("") + gets.map(g => gettyCard(g)).join("");
};
