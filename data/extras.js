// Official-video helpers: classify each channel upload by kind and era, build the #videos page, era chapters and song-page matches.
// Functions use helpers from app.js (L, U, esc, chapter...) at call time, so this file can load before it.
Object.assign(UI, {
  videos: { ua: "Усі відео", en: "All videos" },
  videosTag: { ua: "увесь офіційний YouTube-канал Paramore", en: "Paramore's entire official YouTube channel" },
  videosQuote: { ua: "Кліпи, аудіо, концерти, ремікси — і кумедні дрібниці, як рекорди й закулісся.", en: "Videos, audio, live sets, remixes — and the small fun stuff, like the world-record clips and behind-the-scenes." },
  catAll: { ua: "Усе", en: "All" },
  moreOfficial: { ua: "Ще відео цієї епохи", en: "More videos from this era" },
  officialSrc: { ua: "З офіційних каналів @paramore і @hayleywilliams.", en: "From the official @paramore and @hayleywilliams channels." },
  srcFan: { ua: "Фан-архів", en: "Fan archive" },
  fanTitle: { ua: "Фан-архів Paramore History (неофіційний)", en: "Fan archive: Paramore History (unofficial)" },
  fanNote: { ua: "Записи з фанатського каналу @ParamoreHistory; рік береться з назви відео, а епоха — з року.", en: "Clips from the fan channel @ParamoreHistory; the year comes from the video's title and the era from the year." },
  srcBand: { ua: "Канал Paramore", en: "Paramore's channel" },
  srcHayley: { ua: "Канал Гейлі", en: "Hayley's channel" }
});
window.VCATS = { video: { ua: "Кліпи", en: "Music videos" }, audio: { ua: "Аудіо й лірик-відео", en: "Audio & lyric videos" }, live: { ua: "Наживо", en: "Live" }, remix: { ua: "Ремікси та «Re:»", en: "Remixes & “Re:”" }, extra: { ua: "Закулісся й дрібниці", en: "Behind the scenes & extras" }, interview: { ua: "Інтерв'ю", en: "Interviews" } };
const _V = (re, s) => re.test(s);
function classifyVideo(v) {
  const t = v[1];
  let cat = "extra";
  if (_V(/Interview/i, t)) cat = "interview";
  else if (_V(/\(Re: |Remix\)/i, t)) cat = "remix";
  else if (_V(/\[OFFICIAL VIDEO\]|Official Visualizer/i, t)) cat = "video";
  else if (_V(/\(LIVE\)|\(Live|Live at Red Rocks|Live from/i, t)) cat = "live";
  else if (_V(/Official Audio|Lyric Video|Bonus Track|\(Demo\)|Self-Titled Demo/i, t)) cat = "audio";
  else if (_V(/^Paramore - (Brick By Boring Brick|Ignorance|Careful|The Only Exception|Playing God)$/i, t)) cat = "video";
  const e = (re, era) => (re.test(t) ? era : null);
  let era = e(/Reading Festival 2012|Basketball 2012/, "trio")
    || e(/Hello Cold World|In The Mourning|Renegade|Monster/, "trio")
    || e(/Thick Skull|Sanity|This Is Why|The News|Running Out|Liar|Crave|Figure 8|C.est Comme|Big Man|You First|David Byrne|Burning Down|Eras Tour|Encore|Grey Area|in the UK|South America|Apple Music/, "tiw")
    || e(/After Laughter Mural|Hard Times|Told You So|Fake Happy|Rose-Colored|Caught In The Middle|Idle Worship|Grudges|Forgiveness|Tell Me How|No Friend|\b26\b|Pool/, "al")
    || e(/Self-Titled|Still Into You|Ain.t It Fun|Daydreaming|Anklebiters|\bNow\b|Part II|Proof|Last Hope|Be Alone|Future|Grow Up|Fast in My Car|Interlude|Hate To See|Parahoy|Fastest|Most |Longest|Stay The Night|Escape Route|Native Tongue|Red Rocks|Crazy Girls|Tell Me It/, "paramore")
    || e(/Decode|I Caught Myself|Decoy|Hallelujah|Misery Business|crushcrushcrush|That.s What You Get|Fences|Born For This|Let The Flames|When It Rains|Miracle|Pessimist|We Are Broken|Pressure \(Live\)|Emergency \(Live\)/, "riot");
  if (!era) { const st = slug(t).replace(/^paramore /, ""); const hit = SONGS.filter(s => st.startsWith(s.key + " ") || st === s.key).sort((a, b) => b.key.length - a.key.length)[0]; era = hit ? hit.era : "now"; }
  if (/Pressure \[OFFICIAL|Pressure \(LIVE|Emergency \[OFFICIAL|All We Know|Brighter|Franklin|Conspiracy|Whoa|Here We Go|Never Let This Go|My Heart \(Official/.test(t)) era = "awkif";
  if (/Brick By Boring|Ignorance|Careful|The Only Exception|Playing God|Misguided|Looking Up|Turn It Off|Where The Lines|All I Wanted|Feeling Sorry/.test(t) && !/Red Rocks/.test(t)) era = "bne";
  return { id: v[0], title: v[1], cat, era };
}
window.VIDEO_INDEX = OFFICIAL_VIDEOS.map(classifyVideo);
const vcard = v => `<div class="vid vcard" data-c="${v.cat}" data-e="${v.era}" data-s="${v.src || "p"}"><button class="yt" data-id="${v.id}" aria-label="${esc(v.title)}"><img src="https://i.ytimg.com/vi/${v.id}/mqdefault.jpg" alt="" loading="lazy"><span class="play"></span></button><b class="vt">${esc(v.title.replace(/^(Paramore|Hayley Williams)\s*[-–:]\s*/, ""))}</b><small class="by">${v.src === "h" ? "Hayley · " : v.src === "f" ? L(UI.srcFan) + " · " : ""}${L(VCATS[v.cat])}${v.y ? " · " + v.y : ""}</small></div>`;
function videosPage() {
  const eras = ERAS.filter(e => VIDEO_INDEX.some(v => v.era === e.id));
  const hero = `<section class="hero" id="top"><div class="hero-inner"><p class="kicker">${U("videosTag")}</p><h1 class="long">${esc(U("videos"))}</h1><p class="quote">${U("videosQuote")}</p>
    <ul class="stats"><li>${VIDEO_INDEX.length} ${lang === "ua" ? "відео" : "videos"}</li><li>${VIDEO_INDEX.filter(v => v.cat === "video").length} ${lang === "ua" ? "кліпів" : "music videos"}</li></ul></div></section>`;
  const chips = (key, items, all) => `<div class="vfilters" data-k="${key}"><button class="on" data-v="all">${all}</button>${items.map(([v, l]) => `<button data-v="${v}">${esc(l)}</button>`).join("")}</div>`;
  const body = `${chips("c", Object.keys(VCATS).map(k => [k, L(VCATS[k])]), U("catAll"))}${chips("e", eras.map(e => [e.id, L(e.tab)]), U("catAll"))}${chips("s", [["p", L(UI.srcBand)], ["h", L(UI.srcHayley)], ["f", L(UI.srcFan)]], U("catAll"))}
    <div class="vgrid">${VIDEO_INDEX.map(vcard).join("")}</div><p class="muted">${U("officialSrc")} ${U("eduNote")}</p>`;
  return { hero, ch: [["all", U("videos"), body]] };
}
function eraOfficialChapter(eraId) {
  const list = VIDEO_INDEX.filter(v => v.era === eraId).sort((a, b) => ["video", "live", "audio", "remix", "extra", "interview"].indexOf(a.cat) - ["video", "live", "audio", "remix", "extra", "interview"].indexOf(b.cat));
  const off = list.filter(v => v.src !== "f"), fan = list.filter(v => v.src === "f").sort((a, b) => a.y - b.y || a.mo - b.mo);
  return list.length ? ["official", U("moreOfficial"), `${off.length ? `<div class="vgrid">${off.map(vcard).join("")}</div><p class="muted">${U("officialSrc")}</p>` : ""}${fan.length ? `<details class="fanbox"><summary>${U("fanTitle")} · ${fan.length}</summary><p class="muted">${U("fanNote")}</p><div class="vgrid">${fan.map(vcard).join("")}</div></details>` : ""}`] : null;
}
function officialForSong(s) {
  return VIDEO_INDEX.filter(v => { const st = slug(v.title).replace(/^(paramore|hayley williams) /, ""); return st === s.key || st.startsWith(s.key + " "); }).map(v => ({ id: v.id, type: v.cat === "video" ? "video" : v.cat === "live" ? "live" : "clip", title: v.title.replace(/^(Paramore|Hayley Williams)\s*[-–:]\s*/, ""), by: v.src === "h" ? "Hayley Williams" : "Paramore" }));
}
window.VIDEOS_ERA = { id: "videos", accent: "#FF4D4D", bg: "#150D0D", hair: [], name: UI.videos, tab: UI.videos, years: "", font: { f: "'Oswald',Impact,sans-serif", tt: "uppercase", track: ".02em", fw: 600, h1s: 1 } };

// ---- Interviews page + era chapters (data in interviews.js)
const ivVideo = i => ({ id: i.id, type: "interview", title: i.title, by: i.by, desc: i.desc });
const ivPrint = i => `<li class="ivp reveal"><div class="ivh"><span class="chip">${esc(i.outlet)}</span><small>${esc([i.date, i.by].filter(Boolean).join(" · "))}</small></div>
  ${i.url ? `<a class="ivt" href="${i.url}" target="_blank" rel="noopener">${esc(i.title)} ↗</a>` : `<span class="ivt">${esc(i.title)}</span>`}
  ${i.read ? `<details><summary>${U("keyPoints")}</summary><ul>${i.points.map(p => `<li>${L(p)}</li>`).join("")}</ul></details>` : ""}</li>`;
function interviewsPage() {
  const vids = INTERVIEWS.filter(i => i.kind === "video"), prints = INTERVIEWS.filter(i => i.kind === "print");
  const hero = `<section class="hero" id="top"><div class="hero-inner"><p class="kicker">${U("interviewsTag")}</p><h1 class="long">${esc(U("interviews"))}</h1><p class="quote">${U("interviewsQuote")}</p>
    <ul class="stats"><li>${vids.length} ${lang === "ua" ? "відео" : "videos"}</li><li>${prints.length} ${lang === "ua" ? "статей" : "articles"}</li></ul></div></section>`;
  const byEra = list => ERAS.map(e => [e, list.filter(i => i.era === e.id)]).filter(([, l]) => l.length);
  return { hero, ch: [
    ["video", U("videoIv"), `<div class="vids">${vids.map(i => ytCard({ ...ivVideo(i), title: { en: i.title, ua: i.title } })).join("")}</div>`],
    ["print", U("printIv"), byEra(prints).map(([e, l]) => `<h3>${esc(L(e.name))}</h3><ul class="ivlist">${l.map(ivPrint).join("")}</ul>`).join("")],
    ["fan", U("fanTitle"), `<p class="muted">${U("fanNote")}</p>${ERAS.map(e => [e, VIDEO_INDEX.filter(v => v.src === "f" && v.cat === "interview" && v.era === e.id)]).filter(([, l]) => l.length).map(([e, l]) => `<details class="fanbox"><summary>${esc(L(e.name))} · ${l.length}</summary><div class="vgrid">${l.map(vcard).join("")}</div></details>`).join("")}`]
  ] };
}
function eraInterviewChapter(eraId) {
  const list = INTERVIEWS.filter(i => i.era === eraId); if (!list.length) return null;
  const v = list.filter(i => i.kind === "video"), p = list.filter(i => i.kind === "print");
  return ["interviews", U("moreIv"), `${v.length ? `<div class="vids">${v.map(i => ytCard({ ...ivVideo(i), title: { en: i.title, ua: i.title } })).join("")}</div>` : ""}${p.length ? `<ul class="ivlist">${p.map(ivPrint).join("")}</ul>` : ""}`];
}
window.INTERVIEWS_ERA = { id: "interviews", accent: "#7AC7FF", bg: "#0E1218", hair: [], name: UI.interviews, tab: UI.interviews, years: "", font: { f: "'Oswald',Impact,sans-serif", tt: "uppercase", track: ".02em", fw: 600, h1s: 1 } };
