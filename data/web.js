// "On the web" page: Kerrang pieces, the band's live channels (taken from paramore.net), and the old web (lookups only).
// Functions use helpers from app.js / extras.js (L, U, esc, ivPrint) at call time.
Object.assign(UI, {
  web: { ua: "У мережі", en: "On the web" },
  webTag: { ua: "Kerrang!, офіційні сторінки й стара мережа", en: "Kerrang!, official channels and the old web" },
  webQuote: { ua: "Де гурт жив онлайн — тоді й зараз.", en: "Where the band lived online — then and now." },
  webKerrang: { ua: "Kerrang!", en: "Kerrang!" },
  webOfficial: { ua: "Офіційні сторінки сьогодні", en: "Official channels today" },
  webOfficialNote: { ua: "Посилання взято з офіційного сайту paramore.net.", en: "Links taken from the official site, paramore.net." },
  webOld: { ua: "Стара мережа (пошук в архіві)", en: "The old web (archive lookups)" },
  webOldNote: { ua: "Це посилання на пошук у Wayback Machine, а не на конкретні знімки. Відкрий календар і шукай знімки 2005–2012 років.", en: "These are Wayback Machine lookups, not specific snapshots. Open the calendar and look for snapshots from 2005–2012." },
  lookup: { ua: "знайти в архіві", en: "look up in archive" }
});
const WEB_OFFICIAL = [
  ["paramore.net", "https://paramore.net/", { ua: "Офіційний сайт", en: "Official site" }],
  ["Instagram", "https://www.instagram.com/paramore/", { ua: "@paramore", en: "@paramore" }],
  ["TikTok", "https://www.tiktok.com/@paramoreofficial", { ua: "@paramoreofficial", en: "@paramoreofficial" }],
  ["YouTube", "https://www.youtube.com/@paramore", { ua: "Офіційний канал — усі відео на сторінці «Усі відео»", en: "Official channel — every video is on the All videos page" }],
  ["YouTube (Hayley)", "https://www.youtube.com/@hayleywilliams", { ua: "Канал Гейлі: кліпи, турові щоденники, Newport Folk — усе на сторінці «Усі відео»", en: "Hayley's channel: videos, tour diaries, Newport Folk — all on the All videos page" }],
  ["hayleywilliams.net", "https://hayleywilliams.net/", { ua: "Сайт Гейлі, на який веде її YouTube-канал", en: "Hayley's site, linked from her YouTube channel" }],
  ["Spotify", "https://open.spotify.com/artist/74XFHRwlV6OrjEM0A2NCMF", { ua: "Сторінка виконавця", en: "Artist page" }]
];
const WEB_KERRANG = [
  ["Kerrang!", "https://www.kerrang.com/artists/paramore", { ua: "Сторінка новин Paramore на сайті Kerrang!", en: "Kerrang!'s Paramore news page" }, "kerrang.com/artists/paramore"],
  ["Kerrang! Radio", "https://www.hellorayo.co.uk/kerrang/entertainment/music/paramore-sixth-album", { ua: "Пояснення про шостий альбом «This Is Why» від Kerrang! Radio (опубліковано 3 лютого 2026)", en: "Kerrang! Radio's explainer on the sixth album “This Is Why” (published 3 Feb 2026)" }, "Everything to know about “This Is Why”"],
  ["Issue 1209", "https://www.crazyaboutmagazines.com/ourshop/prod_226813-Kerrang-magazine-Paramore-cover-10-May-2008-Issue-1209.html", { ua: "Магазинний лістинг номера Kerrang! із Paramore на обкладинці, 10 травня 2008 (це продаж, а не стаття)", en: "A retailer's listing for the Kerrang! issue with Paramore on the cover, 10 May 2008 (a shop page, not an article)" }, "Kerrang! cover, 10 May 2008"],
  ["LiveJournal, May 2007", "https://www.drivenfaroff.com/2007/05/31/paramore-not-happy-about-kerrang-article/", { ua: "Відповідь Гейлі в LiveJournal гурту на обкладинкову статтю Kerrang! (передрук від 31 травня 2007)", en: "Hayley's reply on the band's LiveJournal to a Kerrang! cover story (repost, 31 May 2007)" }, "Paramore Not Happy About Kerrang Article"]
];
const WEB_OLD = [
  ["LiveJournal", "paramoreband.livejournal.com", { ua: "Блоги й спільноти фанатів епохи емо; шукай спільноти про Paramore.", en: "Blogs and fan communities of the emo era; look for Paramore communities." }],
  ["LiveJournal (parasecrets)", "parasecrets.livejournal.com", { ua: "Назва спільноти з попередніх пошуків. {{Чи збереглася — не перевірено.}}", en: "A community name from earlier research. {{Whether it was saved is unchecked.}}" }],
  ["MySpace", "myspace.com/paramore", { ua: "Сторінка гурту, де в середині 2000-х лунали перші треки.", en: "The band page where early tracks played in the mid-2000s." }],
  ["PureVolume", "purevolume.com/paramore", { ua: "Сайт для незалежних гуртів тієї ж епохи.", en: "A site for up-and-coming bands of the same era." }],
  ["Buzznet", "paramore.buzznet.com", { ua: "Спільнота для фото; шукай фото з туру.", en: "A photo-sharing community; look for tour photos." }],
  ["paramorefans.com", "paramorefans.com", { ua: "Фан-сайт з архівом інтерв'ю.", en: "A fan site with an interview archive." }]
];
Object.assign(UI, {
  webFan: { ua: "Фан-архів: Paramore History", en: "Fan archive: Paramore History" },
  webFanNote: { ua: "Фанатський канал (близько 1,3 тис. відео), який збирає більшість відео про Paramore: концерти, інтерв'ю, закулісся. Це не офіційний канал, а записи від різних авторів. Усі 452 відео з її вкладки «Відео» вже розкладені по епохах, турах, піснях та інтерв'ю.", en: "A fan channel (about 1.3k videos) that collects most Paramore footage: shows, interviews, behind-the-scenes. It is not official and the clips come from many sources. All 452 videos on its Videos tab are already placed on the era, tour, song and interview pages (and on All videos)." },
  webFanAll: { ua: "Увесь канал", en: "The whole channel" }
});
const FAN_PL = [
  ["PLlJWhzcm9QCy4fd1uNkXDwn3ZNj6pxbhK", "Bonnaroo 2018 (full concert)", 2], ["PLlJWhzcm9QCwR18x51jkcczO5oC403vRn", "The European Tour 2007", 7],
  ["PLlJWhzcm9QCwLiguMOwd8qAkLtb3cJ8KV", "The U.S. Headlining Tour 2007", 20], ["PLlJWhzcm9QCwVo1_h4gRiVEq54FJ27ZEh", "Download Festival 2007", 1],
  ["PLlJWhzcm9QCzZtY5ZC8hiUnvS5PS08R_Q", "The Bamboozle 2007", 1], ["PLlJWhzcm9QCzLzsedn7sUiuk3IcpZ2i2T", "Vans Warped Tour 2006", 1],
  ["PLlJWhzcm9QCwNmipJdoFQohG_KSh5lvTv", "Anaheim 2006", 1], ["PLlJWhzcm9QCyzCuZYLAwyGdehZgT_j2Y2", "Beach Fest 2006", 1],
  ["PLlJWhzcm9QCxcNOtA9vMCWpv60bgZojeD", "Cornerstone 2006", 1], ["PLlJWhzcm9QCwleY_Yx09QBBmtr6mVLV_c", "The UK Headlining Tour 2006", 4],
  ["PLlJWhzcm9QCxNr4DwfwnUt36TmuOPfyVd", "The U.S. Headlining Tour 2006", 20], ["PLlJWhzcm9QCw0u8Uaabvhb6nmD7_28vRX", "Punchline's Japan Tour 2006", 3],
  ["PLlJWhzcm9QCwvHhjkDQdozt6_4daXkuah", "The Rocket Summer Tour 2006", 6], ["PLlJWhzcm9QCzeSp5NDc2KIH8WWwGSMpzw", "The Bayside Tour 2006", 4],
  ["PLlJWhzcm9QCyvcqVmd0BMgs5NmGEnLEgd", "The Halifax Tour 2006", 6], ["PLlJWhzcm9QCzXrdSRPopQzOnKTNI3E4Q1", "The Winter Go West Tour 2006", 6],
  ["PLlJWhzcm9QCxCeQZKn8PdQTWgUBUfd-Nt", "The Simple Plan Tour 2005", 1], ["PLlJWhzcm9QCxK_-PjhYN93Cf1bAVRPiun", "The My American Heart Tour 2005", 10],
  ["PLlJWhzcm9QCzh5SjahPyUWOMtibHZDzPi", "Vans Warped Tour 2005", 1], ["PLlJWhzcm9QCzmXz2bZy7AdFLACCGKOtsc", "CBGB 2005", 1]
];
const fanChannel = "https://www.youtube.com/@ParamoreHistory";window.WEB_ERA = { id: "web", accent: "#7ED6A8", bg: "#0D1411", hair: [], name: UI.web, tab: UI.web, years: "", font: { f: "'Oswald',Impact,sans-serif", tt: "uppercase", track: ".02em", fw: 600, h1s: 1 } };
const webLink = (name, href, note, label) => `<li class="ivp reveal"><div class="ivh"><span class="chip">${esc(name)}</span></div><a class="ivt" href="${href}" target="_blank" rel="noopener">${esc(label || href)} ↗</a><p class="muted">${L(note)}</p></li>`;
function webPage() {
  const kerr = INTERVIEWS.filter(i => /^Kerrang!/.test(i.outlet));
  const hero = `<section class="hero" id="top"><div class="hero-inner"><p class="kicker">${U("webTag")}</p><h1 class="long">${esc(U("web"))}</h1><p class="quote">${U("webQuote")}</p></div></section>`;
  return { hero, ch: [
    ["kerrang", U("webKerrang"), `<ul class="ivlist">${kerr.map(ivPrint).join("")}${WEB_KERRANG.map(([n, h, d, l]) => webLink(n, h, d, l)).join("")}</ul>`],
    ["fan", U("webFan"), `<p class="muted">${U("webFanNote")}</p><ul class="ivlist">${webLink("YouTube", fanChannel, { ua: "@ParamoreHistory", en: "@ParamoreHistory" }, U("webFanAll"))}${webLink("YouTube", "https://www.youtube.com/@DecodeTheMonsterV2", { ua: "Рекомендація: повні концерти й документальні фільми — 40 Days of RIOT!, Behind Brand New Eyes, The Final Riot!, Reading & Leeds 2010, Hard Rock Café 2007.", en: "Recommended: full shows and documentaries — 40 Days of RIOT!, Behind Brand New Eyes, The Final Riot!, Reading & Leeds 2010, Hard Rock Café 2007." }, "@DecodeTheMonsterV2")}${FAN_PL.map(([id, n, c]) => webLink(c + (lang === "ua" ? " відео" : c === 1 ? " video" : " videos"), `https://www.youtube.com/playlist?list=${id}`, { ua: "", en: "" }, n)).join("")}</ul>`],
    ["official", U("webOfficial"), `<ul class="ivlist">${WEB_OFFICIAL.map(([n, h, d]) => webLink(n, h, d)).join("")}</ul><p class="muted">${U("webOfficialNote")}</p>`],
    ["old", U("webOld"), `<p class="muted">${U("webOldNote")}</p><ul class="ivlist">${WEB_OLD.map(([n, u, d]) => webLink(n, `https://web.archive.org/web/*/${u}*`, d, `${u} — ${U("lookup")}`)).join("")}</ul><p class="muted">${U("eduNote")}</p>`]
  ] };
}
