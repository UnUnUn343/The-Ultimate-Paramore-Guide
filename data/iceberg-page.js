// #iceberg: every entry of the two-part Paramore iceberg video, each linked to its moment in the video, to matching pages on this site,
// to matching videos already in VIDEO_INDEX, and (ICE_EXT, filled in as research is verified) to outside sources. Functions use app.js helpers at call time.
Object.assign(UI, {
  iceberg: { ua: "Айсберг", en: "The Iceberg" },
  iceTag: { ua: "кожен пункт айсберга Paramore та все, що до нього знайдено", en: "every entry of the Paramore iceberg, and everything found for it" },
  iceQuote: { ua: "Від відомого до майже невидимого — по шарах.", en: "From well-known to nearly invisible — tier by tier." },
  iceNote: { ua: "Назви пунктів — заголовки з двох відео-айсбергів (частина 1 і 2); посилання «▶» веде приблизно до моменту в відео, тож може потрапити на кілька секунд раніше. Відео нижче — вже існуючі на цьому сайті; «знайти» — лише пошук. Шість пунктів стосуються приватного життя чи чужих даних — їх навмисно не досліджували.", en: "Entry names are the headings of the two iceberg videos (parts 1 and 2); the “▶” link jumps to about that moment, so it may land a few seconds early. The videos listed are ones already on this site; “search” is only a search. Six entries concern private lives or other people's personal data — those were deliberately not researched." },
  icePart: { ua: "Частина", en: "Part" }, iceTier: { ua: "Рівень", en: "Tier" }, iceSkip: { ua: "приватне — не досліджено", en: "personal — not researched" },
  iceVids: { ua: "відео на сайті", en: "videos on this site" }, iceSearch: { ua: "знайти на YouTube", en: "search YouTube" }, iceExt: { ua: "джерела", en: "sources" }
});
// nothing is skipped now: the personal-life entries are researched like the rest; where no reliable source exists the entry says so (see ICE_EXT)
const ICE_SKIP = /(?!)/;
// [entry title, page on this site]
const ICE_PAGE = [[/Parahoy/i, "#e/parahoy"], [/Honda Civic/i, "#e/honda-civic-tour"], [/Warped Tour/i, "#e/warped-tour"], [/Tonight Show/i, "#e/tonight-show"], [/TRL/, "#e/trl-rihanna"], [/Kuwait/i, "#e/kuwait-2010"],
  [/Hamburg/i, "#e/hamburg-2017"], [/MTV Cribs/i, "#e/mtv-cribs"], [/Tiny Desk/i, "#e/tiny-desk"], [/Reading Festival/i, "#e/monumentour-reading"], [/Kiss Off/i, "#e/kiss-off"], [/Coachella/i, "#e/wwwy-coachella-2022"],
  [/B Sides/i, "#bsides"], [/No Doubt/i, "#e/no-doubt-2009"], [/Eras Tour|Taylor Swift/i, "#e/eras-tour"], [/Final RIOT|Hard Rock/i, "#e/final-riot"], [/Grammy/i, "#e/grammys"], [/Past and current members|Touring Members/i, "#m/hayley"], [/Hayley’s Hair|Hayley's Hair/i, "#riot"],
  [/Singles Club/i, "#trio"], [/Post After Laughter Hiatus/i, "#hiatus"], [/This Is Why/i, "#tiw"], [/Petals For Armor|PFA/i, "#hiatus"], [/Self-?titled/i, "#paramore"]];
// [entry title, regex run on the titles of VIDEO_INDEX, max shown]
const ICE_VID = [[/Twilight/, /\bDecode\b|I Caught Myself/i, 8], [/World Records/, /Ain.t It Fun.*(OFFICIAL VIDEO)|Record Setter/i, 6], [/Stay The Night/, /Stay The Night|Zedd/i, 6], [/Misery Business Brief/, /Misery Business/i, 8],
  [/When It Rains/, /When It Rains/i, 6], [/Part II/, /Part II/i, 6], [/Monster/, /Monster/i, 6], [/Singles Club/, /Hello Cold World|Renegade|In The Mourning|Monster/i, 8], [/BBC/, /BBC Radio 1|Live Lounge|Big Weekend/i, 8],
  [/Still Into You/, /Still Into You/i, 8], [/Tonight Show/, /Tonight Show|Late Show/i, 6], [/Only Exception/, /Only Exception/i, 8], [/Petals For Armor and Flowers/, /Simmer|Cinnamon|Dead Horse|Leave It Alone|Petals/i, 8],
  [/Coachella/, /Billie Eilish/i, 6], [/Grudges/, /Grudges/i, 6], [/Running Out/, /Running Out/i, 6], [/You First/, /You First/i, 6], [/Joy Williams/, /Joy Williams|Christmas/i, 6], [/Good Dye Young/, /Good Dye Young|GDY|Beautycon/i, 8],
  [/South American/, /South America|São Paulo|Latin America/i, 6], [/Live ?Journal/i, /LiveJournal/i, 6], [/bring people on stage/, /brought to the stage|with a fan|contest winners|fan in a wheelchair/i, 8], [/Parahoy/, /Parahoy/i, 8], [/Miracle/, /Miracle/i, 6],
  [/Summer Tic/, /Summer Tic/i, 4], [/Playing God|Ignorance/, /Playing God|Ignorance/i, 8], [/No Doubt/, /No Doubt/i, 6], [/Fan Club/, /FAN CLUB|PARAMORE\.NET/i, 6], [/HalfNoise/, /HALFNOISE/i, 8],
  [/Remix EP/, /\(Re: |Remix\)/i, 8], [/Hallelujah/, /Hallelujah/i, 6], [/Born For This/, /Born For This/i, 6], [/Hard Rock/, /Hard Rock/i, 6], [/Brand New Eyes Title|BNE|Brand New Eyes' Cover|Earlier versions of BNE/, /Brand New Eyes|Behind Brand/i, 8],
  [/Fences/, /Fences/i, 6], [/I Caught Myself/, /I Caught Myself/i, 6], [/Honda Civic/, /Honda Civic|scooter|Smart cars/i, 8], [/How-To/, /How To|Funny Moments|OLD TUTORIAL|Webisodes/i, 10], [/Pressure/, /Pressure/i, 8],
  [/Mammoth City/, /Mammoth City/i, 4], [/UStream|Ustream/, /WEBISODES|Ustream/i, 4], [/Brick By Boring/, /Brick By Boring/i, 6], [/Alf/, /\bAlf\b/, 6], [/All I Wanted/, /All I Wanted/i, 6], [/Love Rising/, /Love Rising/i, 6],
  [/Red Carpet/, /Red Carpet/i, 6], [/Billie Eilish/, /Billie Eilish/i, 6], [/TRL/, /\bTRL\b|Rihanna/i, 6], [/Video Game/, /ROCK BAND|Guitar Hero/i, 4], [/CCC/, /Caught in The Middle|C.est Comme/i, 6], [/Scrapped Ain/, /Ain.t It Fun/i, 8],
  [/Self-Titled Sessions/, /Self.?Titled/i, 8], [/Tiny Desk/, /Tiny Desk/i, 4], [/Cribs/, /Cribz/i, 4], [/Sunday Sessions/, /Sunday Session/i, 6], [/Reading Festival/, /Reading/i, 6], [/Teenagers/, /Teenagers/i, 4], [/Over Yet/, /Over Yet/i, 4],
  [/In The Mourning/, /In The Mourning/i, 6], [/Long Distance/, /Long Distance Call/i, 4], [/Kuwait/, /KUWAIT|VH1 Divas/i, 4], [/Hamburg/, /Hamburg/i, 4], [/Singing Success/, /SINGINGSUCCESS/i, 4], [/Bible Study/, /BIBLE STUDY/i, 4],
  [/Nardwuar/, /NARDWUAR/i, 4], [/Kiss Off/, /Kiss Off/i, 4], [/Parahoy 2016/, /Parahoy 2016|Oh Star/i, 6], [/Unlisted Hayley Collabs/, /FEAT\.|feat\./i, 14], [/Brighter/, /Brighter/i, 4], [/Hunter Lamb/, /Playing God/i, 4],
  [/Taylor singing Airplanes/, /Airplanes/i, 4], [/Halloween 2005/, /Halloween/i, 4], [/drummer/i, /DRUMMER|drum lesson|Drum lesson/i, 4], [/Condoms/i, /CONDOMS/i, 2], [/Misguided Ghosts/, /Behind Brand|Misguided/i, 4]];
window.ICE_EXT = window.ICE_EXT || {};  // [title regex source] -> [{label, url}], verified links found by research
const iceMin = s => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;
const iceHit = e => {
  const t = e[2], out = { pages: [], vids: [], songs: [], ext: [] };
  ICE_PAGE.forEach(([re, h]) => { if (re.test(t) && !out.pages.includes(h)) out.pages.push(h); });
  const seen = new Set();
  ICE_VID.forEach(([re, vre, n]) => { if (!re.test(t)) return; VIDEO_INDEX.filter(v => vre.test(v.title) && !seen.has(v.id)).sort((a, b) => (a.src === "f") - (b.src === "f")).slice(0, n).forEach(v => { seen.add(v.id); out.vids.push(v); }); });
  SONGS.filter(s => s.title.length >= 7 && t.toLowerCase().includes(s.title.toLowerCase())).slice(0, 3).forEach(s => out.songs.push(s));
  Object.keys(ICE_EXT).forEach(k => { if (new RegExp(k, "i").test(t)) out.ext.push(...ICE_EXT[k]); });
  return out;
};
const iceRow = e => {
  const [part, , t, sec] = e, skip = ICE_SKIP.test(t), h = skip ? { pages: [], vids: [], songs: [], ext: [] } : iceHit(e);
  const mom = `<a class="chip" href="https://www.youtube.com/watch?v=${ICE_VIDEO[part]}&t=${sec}s" target="_blank" rel="noopener">▶ ${iceMin(sec)}</a>`;
  const links = [...h.songs.map(s => `<a class="chip" href="#s/${s.id}">♪ ${esc(s.title)}</a>`), ...h.pages.map(p => `<a class="chip" href="${p}">→ ${esc(p.replace(/^#e?\/?/, "") || p)}</a>`), ...h.ext.filter(x => x.url).map(x => `<a class="chip" href="${x.url}" target="_blank" rel="noopener">${esc(x.label)} ↗</a>`)].join(" ");
  const notes = h.ext.filter(x => x.note).map(x => L("{{" + x.note + "}}")).join(""); // each research note becomes a small ⓘ marker (full text on #sources)
  const vids = h.vids.length ? `<details class="fanbox"><summary>${h.vids.length} ${U("iceVids")}</summary><div class="vgrid">${h.vids.map(vcard).join("")}</div></details>` : "";
  const find = skip ? `<small class="muted">${U("iceSkip")}</small>` : `<a class="chip" href="https://www.youtube.com/results?search_query=${encodeURIComponent("Paramore " + t)}" target="_blank" rel="noopener">${U("iceSearch")} ↗</a>`;
  return `<li class="ice reveal"><div class="ivh"><b>${esc(t)}</b>${notes} ${mom} ${links} ${find}</div>${vids}</li>`;
};
window.ICEBERG_ERA = { id: "iceberg", accent: "#9AD8F0", bg: "#0B1218", hair: [], name: UI.iceberg, tab: UI.iceberg, years: "", font: { f: "'Oswald',Impact,sans-serif", tt: "uppercase", track: ".02em", fw: 600, h1s: 1 } };
function icebergPage() {
  const hero = `<section class="hero" id="top"><div class="hero-inner"><p class="kicker">${U("iceTag")}</p><h1 class="long">${esc(U("iceberg"))}</h1><p class="quote">${U("iceQuote")}</p>
    <ul class="stats"><li>${ICEBERG.length} ${lang === "ua" ? "пунктів" : "entries"}</li><li><a href="https://www.youtube.com/watch?v=${ICE_VIDEO.p1}" target="_blank" rel="noopener">${U("icePart")} 1 ↗</a> · <a href="https://www.youtube.com/watch?v=${ICE_VIDEO.p2}" target="_blank" rel="noopener">${U("icePart")} 2 ↗</a></li></ul></div></section>`;
  const ch = [];
  ["p1", "p2"].forEach(p => { const tiers = [...new Set(ICEBERG.filter(e => e[0] === p).map(e => e[1]))].sort((a, b) => a - b);
    tiers.forEach(t => ch.push([`${p}t${t}`, `${U("icePart")} ${p === "p1" ? 1 : 2} · ${U("iceTier")} ${t}`, `${ch.length === 0 ? `<p class="muted">${U("iceNote")}</p>` : ""}<ul class="icelist">${ICEBERG.filter(e => e[0] === p && e[1] === t).map(iceRow).join("")}</ul>`])); });
  return { hero, ch };
}

// The deeper you scroll, the darker and narrower the page gets and the dimmer the text; each chapter shows its depth.
window.iceDepth = () => {
  const cs = [...document.querySelectorAll("#era .chapter")], n = cs.length;
  cs.forEach((c, i) => {
    const dp = n > 1 ? i / (n - 1) : 0; c.classList.add("ice-ch"); c.style.setProperty("--depth", dp.toFixed(3));
    const h = c.querySelector(".ch-head");
    if (h && !h.querySelector(".ice-m")) { const m = document.createElement("span"); m.className = "ice-m"; m.textContent = i === 0 ? "0 m" : "−" + Math.round(dp * 800) + " m"; h.append(m); }
  });
};
