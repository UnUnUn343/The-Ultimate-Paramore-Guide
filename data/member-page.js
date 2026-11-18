// Member pages: the story, a year-by-year timeline and thematic chapters (MEMBER_DEEP), and everything the rest of the site holds about the person
// (videos, interviews, photos, iceberg entries, solo songs, guest spots). Uses helpers from app.js (L, U, esc, chapter, beats, photo, vcard, ivPrint…) at call time.
Object.assign(UI, {
  tlTitle: { ua: "Рік за роком", en: "Year by year" },
  tlNote: { ua: "Позначки: «її/його слова» — особисте свідчення; «одна версія» — твердження однієї сторони чи неперевірене; «айсберг» — лише з фанатського відео-айсберга.", en: "Tags: “own account” — the person's own telling; “one side” — one party's claim or unverified; “iceberg” — only from the fan iceberg video." },
  tagOwn: { ua: "власні слова", en: "own account" }, tagR: { ua: "одна версія", en: "one side" }, tagI: { ua: "айсберг", en: "iceberg" },
  moreAbout: { ua: "Ще про", en: "More about" },
  soloSongs: { ua: "Сольні пісні", en: "Solo songs" }, guestSpots: { ua: "Гостьові партії й співпраці", en: "Guest spots & collaborations" },
  onVideo: { ua: "На відео", en: "On video" }, onOwnChannel: { ua: "З її власного каналу", en: "From her own channel" }, fromBand: { ua: "З каналу Paramore", en: "From Paramore's channel" }, fromFan: { ua: "З фанатського архіву", en: "From the fan archive" },
  inInterviews: { ua: "Інтерв'ю й статті", en: "Interviews & articles" }, inPhotos: { ua: "Фото", en: "Photos" }, inIceberg: { ua: "В айсбергу", en: "In the iceberg" },
  yearJump: { ua: "Перейти до року", en: "Jump to a year" }, yearsN: { ua: "записів", en: "entries" }
});
const MEM_RE = { hayley: /hayley/i, josh: /\bjosh\b/i, zac: /\bzac\b|\bzach\b/i, jeremy: /jeremy|\bjerm\b/i, taylor: /\btaylor\b(?!\s+swift|\s+hawkins)/i, jason: /\bjason\b/i, john: /hembree/i, hunter: /\bhunter\b/i };
const tgChip = t => t ? `<span class="tgd ${t}" title="${esc(U(t === "own" ? "tagOwn" : t === "r" ? "tagR" : "tagI"))}"></span>` : "";
const tdots = d => d && d.length ? `<span class="tdots">${d.map(c => `<i style="background:${c}"></i>`).join("")}</span> ` : "";
const goLink = g => g ? ` <a class="chip tlgo" href="${g}">→</a>` : "";
// Timeline: one collapsible chapter per era (with a period photo), years inside; the first chapter is open. Tags are small dots with a legend.
const ERA_BY_YEAR = [[2004, "origins"], [2005, "awkif"], [2008, "riot"], [2010, "bne"], [2012, "trio"], [2014, "paramore"], [2016, "crisis"], [2017, "al"], [2022, "hiatus"], [2023, "tiw"], [9999, "now"]];
const eraOfYear = y => (ERA_BY_YEAR.find(([m]) => y <= m) || [0, "now"])[1];
function memberTimeline(id) {
  const d = MEMBER_DEEP[id]; if (!d || !d.tl) return null;
  const yearOf = e => parseInt(e.y, 10) || 0;
  const eg = ERAS.map(e => ({ e, items: d.tl.filter(x => eraOfYear(yearOf(x)) === e.id) })).filter(g => g.items.length);
  const years = [...new Set(d.tl.map(e => /^\d{4}/.test(e.y) ? e.y.slice(0, 4) : e.y))];
  const nav = `<div class="yrnav" aria-label="${esc(U("yearJump"))}">${years.map(y => `<button type="button" onclick="const t=document.getElementById('tl-${id}-${y}');t?.closest('details')?.setAttribute('open','');t?.scrollIntoView({behavior:'smooth',block:'start'})">${y}</button>`).join("")}</div>`;
  const legend = `<p class="muted tgl"><span class="tgd own"></span> ${U("tagOwn")} <span class="tgd r"></span> ${U("tagR")} <span class="tgd i"></span> ${U("tagI")}</p>`;
  const body = eg.map((g, gi) => {
    const key = (ERA_PAGES[g.e.id] && ERA_PAGES[g.e.id].hero || {}).photo, ph = key && PHOTOS[key];
    const first = stripNotes(L(g.items[0])).replace(/\s+/g, " "), teaser = first.length > 120 ? first.slice(0, 118).replace(/\s\S*$/, "") + "…" : first;
    const byYear = []; g.items.forEach(e => { const k = /^\d{4}/.test(e.y) ? e.y.slice(0, 4) : e.y; let y = byYear.find(x => x.k === k); if (!y) byYear.push(y = { k, items: [] }); y.items.push(e); });
    const thumb = ph ? `<img src="${ph.src}" alt="" loading="lazy" style="object-position:${ph.pos || "center 20%"}">` : `<span class="tle-ph">${esc(g.e.years.split(/[–-]/)[0])}</span>`;
    const yrs = byYear.map(y => `<div class="tlg" id="tl-${id}-${y.k}"><h3>${esc(y.k)} <small>${y.items.length} ${U("yearsN")}</small></h3><ul class="tl">${y.items.map(e => `<li class="reveal ${e.tag ? "tl-" + e.tag : ""}">${e.y !== y.k ? `<b class="when">${esc(e.y)}</b> ` : ""}${tdots(e.dots)}<span>${L(e)}</span> ${tgChip(e.tag)}${goLink(e.go)}</li>`).join("")}</ul></div>`).join("");
    return `<details class="tlera" ${gi === 0 ? "open" : ""} style="--tc:${accentOf(g.e)}"><summary>${thumb}<span class="tle-t"><b>${esc(L(g.e.name))}</b><small>${g.e.years} · ${g.items.length} ${U("yearsN")}</small><em>${esc(teaser)}</em></span></summary>${yrs}</details>`;
  }).join("");
  return ["timeline", U("tlTitle"), `${legend}${nav}${body}`];
}
function memberThemes(id, m) {
  const d = MEMBER_DEEP[id]; if (!d || !d.themes) return null;
  return ["themes", `${U("moreAbout")} ${m.name.split(" ")[0]}`, d.themes.map(t => `<h3 id="th-${id}-${t.id}">${esc(L(t.title))}</h3><ul class="tl">${t.items.map(e => `<li class="reveal ${e.tag ? "tl-" + e.tag : ""}">${tdots(e.dots)}<span>${L(e)}</span> ${tgChip(e.tag)}${(e.links || []).map(([n, u]) => ` <a class="chip" href="${u}" target="_blank" rel="noopener">${esc(n)} ↗</a>`).join("")}${goLink(e.go)}</li>`).join("")}</ul>`).join("")];
}
function memberPage(id) {
  const m = MEMBERS[id], ph = realPhoto(m.photo), re = MEM_RE[id];
  // no free photo of this person exists (Jason, John, Hunter): a designed monogram hero instead of a reused group shot
  const hero = `<section class="hero member ${ph ? "" : "mono-hero"}" id="top">${ph ? `<div class="hero-bg" style="background-image:url('${ph.src}')${ph.pos ? `;background-position:${ph.pos}` : ""}"></div>` : `<div class="hero-mono" aria-hidden="true">${esc(m.name[0])}</div>`}
    <div class="hero-inner"><p class="kicker">${L(m.role)}</p><h1 class="long">${esc(m.name)}</h1><p class="quote">${L(m.tagline)}</p></div>
    ${ph ? `<span class="credit"><a href="${ph.page}" target="_blank" rel="noopener">© ${esc(ph.by)} · ${ph.lic}</a></span>` : `<span class="credit">${U("noPhoto")}</span>`}</section>`;
  const ch = [["story", L(UI.story), `<div class="story-grid"><div>${beats(m.beats)}</div><div class="story-photos">${(m.gallery || []).map((k, i) => photo(k, i % 2 ? "tilt-r" : "tilt-l")).join("")}</div></div>`]];
  const tl = memberTimeline(id); if (tl) ch.push(tl);
  const th = memberThemes(id, m); if (th) ch.push(th);
  if (id === "hayley") {
    const solo = SONGS.filter(s => s.era === "hiatus" || s.era === "now");
    const byAlbum = {}; solo.forEach(s => { const a = typeof s.album === "string" ? s.album : L(s.album); (byAlbum[a] = byAlbum[a] || []).push(s); });
    const guests = BSIDES.flatMap(g => g.items).filter(i => i.type === "guest");
    const where = i => (i.where && typeof i.where === "object") ? L(i.where) : (i.where || "");
    ch.push(["songs", U("soloSongs"), Object.keys(byAlbum).map(a => `<h3>${esc(a)}</h3><div class="strip big">${byAlbum[a].map(s => `<a href="#s/${s.id}"><b>${esc(s.title)}</b></a>`).join("")}</div>`).join("") + `<h3>${U("guestSpots")}</h3><ul class="vlist">${guests.map(i => `<li><span class="y">${esc(where(i))}</span> ${esc(i.t)}</li>`).join("")}</ul><p class="muted"><a href="#bsides">${U("bsides")} →</a></p>`]);
  }
  const wv = WIKI_VIDEOGRAPHY[id];
  if (wv) {
    const lst = wv.map(([t, y, r]) => { const base = slug(t.replace(/\(.*\)/, "")); const hit = VIDEO_INDEX.find(v => { const s = slug(v.title).replace(/^paramore /, ""); return v.cat === "video" && (s === base || s.startsWith(base + " ")); });
      return `<li><span class="y">${y}</span> ${hit ? `<a href="https://youtu.be/${hit.id}" target="_blank" rel="noopener">${esc(t)} ▶</a>` : esc(t)} <small>${esc(r)}</small></li>`; }).join("");
    ch.push(["videography", U("videography"), `<ul class="vlist">${lst}</ul><p class="muted">${U("wikiNote")}</p><h3>${U("wikiLinks")}</h3><ul class="links">${WIKI_LINKS[id].map(p => `<li><a href="https://paramore.fandom.com/wiki/${p}" target="_blank" rel="noopener">${esc(p.replace(/_/g, " "))} ↗</a></li>`).join("")}</ul>`]);
  }
  // on video: her own channel, Paramore's channel, the fan archive (by category)
  const vids = VIDEO_INDEX.filter(v => re.test(v.title));
  if (vids.length) {
    const grp = (list, title) => list.length ? `<details class="fanbox"><summary>${title} · ${list.length}</summary><div class="vgrid">${list.map(vcard).join("")}</div></details>` : "";
    const cats = ["interview", "live", "video", "audio", "remix", "extra"];
    const fan = vids.filter(v => v.src === "f").sort((a, b) => cats.indexOf(a.cat) - cats.indexOf(b.cat) || (a.y || 0) - (b.y || 0));
    ch.push(["onvideo", U("onVideo"), `${grp(vids.filter(v => v.src === "h"), U("onOwnChannel"))}${grp(vids.filter(v => !v.src || v.src === "p"), U("fromBand"))}${cats.map(c => grp(fan.filter(v => v.cat === c), `${U("fromFan")}: ${L(VCATS[c])}`)).join("")}<p class="muted">${U("eduNote")}</p>`]);
  }
  const ivs = id === "hayley" ? INTERVIEWS : INTERVIEWS.filter(i => re.test(i.title) || re.test(i.by || ""));
  if (ivs.length) ch.push(["ivs", U("inInterviews"), `<ul class="ivlist">${ivs.filter(i => i.kind === "print").map(ivPrint).join("")}</ul><div class="vids">${ivs.filter(i => i.kind === "video").map(i => ytCard({ ...ivVideo(i), title: { en: i.title, ua: i.title } })).join("")}</div>`]);
  const rows = GALLERY.filter(([f, y, by, lic, desc]) => re.test(f) || (id !== "taylor" && re.test(desc || "")));
  if (rows.length) ch.push(["photos", `${U("inPhotos")} · ${rows.length}`, `<div class="photogrid">${rows.map(([f, y, by, lic, desc]) => `<a class="ph" href="https://commons.wikimedia.org/wiki/File:${encodeURIComponent(f.replace(/ /g, "_"))}" target="_blank" rel="noopener" title="${esc(desc || f)}"><img loading="lazy" src="https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(f.replace(/ /g, "_"))}?width=360" alt="${esc(desc || f)}"><span>${y} · © ${esc(by)} · ${esc(lic)}</span></a>`).join("")}</div><p class="muted">${U("photoNote")}</p>`]);
  const gm = window.gettyMemberChapter && gettyMemberChapter(id); if (gm) ch.push(gm);
  const ice = ICEBERG.filter(e => re.test(e[2]));
  if (ice.length) ch.push(["ice", `${U("inIceberg")} · ${ice.length}`, `<ul class="icelist">${ice.map(e => `<li class="ice reveal"><div class="ivh"><b>${esc(e[2])}</b> <a class="chip" href="https://www.youtube.com/watch?v=${ICE_VIDEO[e[0]]}&t=${e[3]}s" target="_blank" rel="noopener">▶ ${iceMin(e[3])}</a></div></li>`).join("")}</ul><p class="muted"><a href="#iceberg">${U("iceberg")} →</a></p>`]);
  ch.push(["eras", U("inEras"), `<div class="strip big">${m.eras.map(e => { const E = ERAS.find(x => x.id === e); return `<a href="#${e}"><b>${esc(L(E.tab))}</b><small>${E.years}</small></a>`; }).join("")}</div>`]);
  ch.push(["band", U("lineup"), `<div class="strip big">${Object.keys(MEMBERS).filter(k => k !== id).map(k => `<a href="#m/${k}"><b>${esc(MEMBERS[k].name)}</b><small>${L(MEMBERS[k].role)}</small></a>`).join("")}</div>`]);
  return { hero, ch, theme: ERAS.find(e => e.id === m.eras[0]), prev: null, next: null };
}
