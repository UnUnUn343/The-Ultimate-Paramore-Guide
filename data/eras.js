// Shared data: UI strings, era list, hair colours, photo credits. Era pages live in data/<id>.js.
// Hair hexes are approximate swatches of the colours named in the project notes (Iceberg part 1), not sampled from photos.
window.ERA_PAGES = {};

window.UI = {
  site: { ua: "Paramore — Подорож", en: "Paramore — The Journey" },
  tag: { ua: "повний гайд з епох гурту", en: "the complete guide, era by era" },
  story: { ua: "Історія", en: "The story" },
  coverMeaning: { ua: "Що означає обкладинка", en: "What the cover means" },
  albumSongs: { ua: "Альбом і ключові пісні", en: "The album & key songs" },
  fullStory: { ua: "вся історія", en: "full story" },
  inEras: { ua: "Епохи", en: "Eras" },
  back: { ua: "Назад до епохи", en: "Back to the era" },
  lyrics: { ua: "текст", en: "lyrics" },
  coverNote: { ua: "Обкладинки альбомів — власність лейблів; тут вони лише як ілюстрація.", en: "Album covers belong to their labels and are shown here only as illustration." },
  chapters: { ua: "Розділи", en: "Chapters" },
  hair: { ua: "Волосся Гейлі", en: "Hayley's hair" },
  hairAll: { ua: "Волосся крізь епохи", en: "Hair across the eras" },
  hairApprox: { ua: "Кольори приблизні — це палітра, не пікселі з фото.", en: "Colours are approximate — a palette, not sampled from photos." },
  hairNone: { ua: "Ця епоха ще не заповнена.", en: "This era isn't filled in yet." },
  watch: { ua: "Дивитися", en: "Watch" },
  essays: { ua: "Відеоесе, щоб зрозуміти більше", en: "Video essays to go deeper" },
  essaysSub: { ua: "Чужі розбори — вони додають контексту, але це думки авторів.", en: "Other people's deep dives — good context, but they're the creators' takes." },
  startHere: { ua: "Саме про цю епоху", en: "Covers this era" },
  wholeStory: { ua: "Вся історія гурту", en: "The whole band story" },
  play: { ua: "Відтворити", en: "Play" },
  openYT: { ua: "Відкрити на YouTube", en: "Open on YouTube" },
  openSpotify: { ua: "Відкрити в Spotify", en: "Open in Spotify" },
  spotifyHint: { ua: "Увійди в Spotify у цьому браузері (з Premium) — тоді заграє весь трек, а не 30 секунд.", en: "Sign in to Spotify in this browser (Premium) to hear full tracks instead of 30-second previews." },
  keySong: { ua: "ключова", en: "key song" },
  tracklist: { ua: "Треклист", en: "Tracklist" },
  lineup: { ua: "Склад", en: "Lineup" },
  deep: { ua: "Цікаві факти й глибокі зрізи", en: "Fun facts & deep cuts" },
  fact: { ua: "Факт", en: "Fact" },
  rumour: { ua: "Чутка / одна сторона", en: "Rumour / one side" },
  iceberg: { ua: "Айсберг", en: "Iceberg" },
  mine: { ua: "З моєї полиці", en: "From my shelf" },
  prev: { ua: "Попередня епоха", en: "Previous era" },
  next: { ua: "Наступна епоха", en: "Next era" },
  soon: { ua: "Скоро", en: "Soon" },
  soonTitle: { ua: "Цей розділ ще будується", en: "This chapter is still being built" },
  soonText: { ua: "Спершу — Riot!, щоб ти міг сказати, що змінити. Решта епох піде в тому самому форматі.", en: "Riot! comes first so you can react to it. Every other era will follow the same format." },
  goRiot: { ua: "До Riot!", en: "Go to Riot!" },
  scroll: { ua: "гортай", en: "scroll" },
  photoNote: { ua: "Фото — з Wikimedia Commons під вільними ліцензіями, з указаним автором.", en: "Photos are from Wikimedia Commons under free licences, credited to their authors." },
  disclaimer: { ua: "Цей сайт — некомерційний освітній фанатський проєкт. Він не пов'язаний із Paramore, їхнім лейблом чи менеджментом і не схвалений ними. Назви, відео, обкладинки й кадри з кліпів належать їхнім власникам; відео та кадри підтягуються з YouTube, а не зберігаються тут.", en: "This is a non-commercial, educational fan project. It is not affiliated with or endorsed by Paramore, their label or their management. Names, videos, covers and music-video frames belong to their owners; videos and frames are loaded from YouTube, not stored here." },
  footer: { ua: "Неофіційний фанатський проєкт. Музика й відео — офіційні вбудовування YouTube і Spotify; тексти пісень не цитуються.", en: "Unofficial fan project. Music and video are official YouTube and Spotify embeds; no song lyrics are quoted." },
  type: { video: { ua: "Офіційний кліп", en: "Official video" }, interview: { ua: "Інтерв'ю", en: "Interview" }, live: { ua: "Наживо", en: "Live" } }
};

// Order matches the nav. `ready` = page built. hair: [{c: hex, ua, en}] (empty = not filled in yet).
window.ERAS = [
  { id: "origins", tab: { ua: "Початок", en: "Origins" }, name: { ua: "Початок", en: "Origins" }, years: "2002–2004",
    hair: [{ c: "#C4561F", ua: "руде", en: "ginger" }, { c: "#1B1B1F", ua: "чорне зі світлими пасмами", en: "black with blonde highlights" }] },
  { id: "awkif", tab: { ua: "AWKIF", en: "AWKIF" }, name: { ua: "All We Know Is Falling", en: "All We Know Is Falling" }, years: "2005",
    hair: [{ c: "#A5321F", ua: "червоно-каштанове (задня обкладинка)", en: "red auburn (back cover)" }] },
  { id: "riot", ready: true, tab: { ua: "Riot!", en: "Riot!" }, name: { ua: "Riot!", en: "Riot!" }, years: "2007–2008", accent: "#FF7A1A",
    hair: [{ c: "#FF7A1A", ua: "помаранчеве", en: "orange" }, { c: "#F2C55C", ua: "світлі пасма (кліп Misery Business)", en: "blonde streaks (Misery Business video)" }] },
  { id: "bne", tab: { ua: "Brand New Eyes", en: "Brand New Eyes" }, name: { ua: "Brand New Eyes", en: "Brand New Eyes" }, years: "2009–2010",
    hair: [{ c: "#FF7A1A", ua: "помаранчеве без пасом", en: "orange, no streaks" }, { c: "#FF6FA8", ua: "рожеве, 2010 (кліп Playing God)", en: "pink, 2010 (Playing God video)" }] },
  { id: "trio", tab: { ua: "Утрьох", en: "The trio" }, name: { ua: "Singles Club і гурт утрьох", en: "Singles Club & the trio" }, years: "2011–2012", hair: [] },
  { id: "paramore", tab: { ua: "Paramore", en: "Paramore" }, name: { ua: "Paramore", en: "Paramore" }, years: "2013",
    hair: [{ c: "#FF6FA8", ua: "наполовину рожеве…", en: "half pink…" }, { c: "#FF7A1A", ua: "…наполовину помаранчеве (Still Into You)", en: "…half orange (Still Into You)" }, { c: "#2F7FD1", ua: "синє (обкладинка делюкс)", en: "blue (deluxe cover)" }] },
  { id: "crisis", tab: { ua: "2015", en: "2015" }, name: { ua: "Криза 2015", en: "The 2015 crisis" }, years: "2015–2016", hair: [] },
  { id: "al", tab: { ua: "After Laughter", en: "After Laughter" }, name: { ua: "After Laughter", en: "After Laughter" }, years: "2017",
    hair: [{ c: "#EDEBE4", ua: "біле / платинове", en: "white / platinum" }] },
  { id: "hiatus", tab: { ua: "Перерва", en: "Hiatus" }, name: { ua: "Перерва й сольні альбоми", en: "Hiatus & the solo albums" }, years: "2018–2022", hair: [] },
  { id: "tiw", tab: { ua: "This Is Why", en: "This Is Why" }, name: { ua: "This Is Why", en: "This Is Why" }, years: "2023",
    hair: [{ c: "#C4561F", ua: "знову руде", en: "back to ginger" }] },
  { id: "now", tab: { ua: "Зараз", en: "Now" }, name: { ua: "Зараз", en: "Now" }, years: "2024–", hair: [] }
];

// Freely licensed photos from Wikimedia Commons. Credit text is shown under each photo.
const _c = f => "https://commons.wikimedia.org/wiki/Special:FilePath/" + f + "?width=960";
const _p = f => "https://commons.wikimedia.org/wiki/File:" + f;
window.PHOTOS = {
  band07:   { src: _c("Paramore_Warped_Tour_2007.jpg"), page: _p("Paramore_Warped_Tour_2007.jpg"), by: "phillyist", lic: "CC BY 2.0", cap: { ua: "Warped Tour, серпень 2007", en: "Warped Tour, August 2007" } },
  hayley07: { src: _c("Hayley_Williams_Warped_Tour_2007.jpg"), page: _p("Hayley_Williams_Warped_Tour_2007.jpg"), by: "phillyist", lic: "CC BY 2.0", cap: { ua: "Гейлі, Warped Tour 2007", en: "Hayley, Warped Tour 2007" } },
  hayleyStage: { src: _c("Paramore_Hayley_Williams.jpg"), page: _p("Paramore_Hayley_Williams.jpg"), by: "Hugo Chisholm", lic: "CC BY-SA 2.5", cap: { ua: "Концерт, липень 2007", en: "Live, July 2007" } },
  hayley08: { src: _c("Hayley_Williams_from_Paramore.jpg"), page: _p("Hayley_Williams_from_Paramore.jpg"), by: "Joe Cereghino", lic: "CC BY 2.0", cap: { ua: "Серпень 2008", en: "August 2008" } },
  hayleyJeremy: { src: _c("Hayley_and_Jeremy_RIOT!_Tour.jpg"), page: _p("Hayley_and_Jeremy_RIOT!_Tour.jpg"), by: "squareahphotography", lic: "CC BY 2.0", cap: { ua: "Гейлі й Джеремі, тур Riot!, серпень 2008", en: "Hayley & Jeremy, Riot! tour, Aug 2008" } },
  josh:     { src: _c("Josh_Farro_Warped_Tour_2007.jpg"), page: _p("Josh_Farro_Warped_Tour_2007.jpg"), by: "phillyist", lic: "CC BY 2.0", cap: { ua: "Джош, 2007", en: "Josh, 2007" } },
  zac:      { src: _c("Zac_Farro_Warped_Tour_2007.jpg"), page: _p("Zac_Farro_Warped_Tour_2007.jpg"), by: "phillyist", lic: "CC BY 2.0", cap: { ua: "Зак, 2007", en: "Zac, 2007" } },
  jeremy:   { src: _c("Paramore_Jeremy_Davis01.jpg"), page: _p("Paramore_Jeremy_Davis01.jpg"), by: "phillyist", lic: "CC BY 2.0", cap: { ua: "Джеремі, 2007", en: "Jeremy, 2007" } },
  taylor:   { src: _c("Paramore_Taylor_York01.jpg"), page: _p("Paramore_Taylor_York01.jpg"), by: "phillyist", lic: "CC BY 2.0", cap: { ua: "Тейлор, 2007", en: "Taylor, 2007" } }
};

// Video essays from LINKS.md (IDs verified earlier by the user). `era` lists eras they clearly cover from the title alone.
window.ESSAYS = [
  { id: "IESb4w_p4gk", by: "Trash Theory", title: "Paramore & Hayley Williams' Love-Hate Relationship with “Misery Business”", era: ["riot"] },
  { id: "SW-B2HpiD5Y", by: "Mic The Snare", title: "DEEP DISCOG DIVE: Paramore", era: ["riot"] },
  { id: "D_GcTnLfAHI", by: "music explained", title: "Every Era of Paramore Explained", era: ["riot"] },
  { id: "a_hCQy0Hd5A", by: "VIZZY", title: "How Hayley Williams Survived EVERYTHING" },
  { id: "R0A-wPN9Vns", by: "Middle 8", title: "When you can't keep the band together" },
  { id: "OXctAZc9-tU", by: "FootofaFerret", title: "A Brief History Of Paramore (Feat. Paramore)" },
  { id: "4wmYTHPeHJ0", by: "Zine To Screen", title: "The Miserable Business of Being in Paramore" },
  { id: "srCmPabfbGs", by: "DeadPlayin", title: "The ULTIMATE Paramore Iceberg Explained!" },
  { id: "8LVNzDHaFXY", by: "DeadPlayin", title: "The ULTIMATE Paramore Iceberg Explained (PART 2)!" },
  { id: "MQ7eIEsBC8U", by: "Mr. Appu", title: "The Most Self-Inflicted Downfall in Music History | Paramore" },
  { id: "u6ACxARCSuI", by: "Mr. Appu", title: "The Most Self-Inflicted Downfall in Music History (Paramore)" }
];

// Per-era look: page background, accent override and album cover (Spotify oEmbed thumbnails, 300px). Accents are picked by eye from the covers/hair.
const _sp = h => "https://image-cdn-ak.spotifycdn.com/image/" + h;
const META = {
  origins:  { accent: "#C4561F", bg: "#15100D" },
  awkif:    { accent: "#C8352B", bg: "#11140E", cover: _sp("ab67616d00001e025cab62839794c2cc3d6a135b") },
  riot:     { bg: "#140E12", cover: _sp("ab67616d00001e02bee754528c08d5ff6799a1eb") },
  bne:      { accent: "#E9B824", bg: "#15130D", cover: _sp("ab67616d00001e02b9abbedc516dd297039977bd") },
  trio:     { accent: "#36C9BC", bg: "#0E1415" },
  paramore: { accent: "#FF6FA8", bg: "#140F15", cover: _sp("ab67616d00001e02532033d0d90736f661c13d35"), coverOld: "https://upload.wikimedia.org/wikipedia/en/e/eb/ParamoreParamore.png" },
  crisis:   { accent: "#8A93A3", bg: "#101216" },
  al:       { accent: "#FF8FB8", bg: "#171019", cover: _sp("ab67616d00001e02dbd83e179619408e5d05cc99") },
  hiatus:   { accent: "#CF1F5F", bg: "#160D12", cover: _sp("ab67616d00001e0220916b6e47a6332717928c88") },
  tiw:      { accent: "#E0612A", bg: "#140F0D", cover: _sp("ab67616d00001e0204ad4e3c0eafac334163cbe4") },
  now:      { accent: "#F5D547", bg: "#14110A" }
};
ERAS.forEach(e => Object.assign(e, META[e.id] || {}));

// Display type per era, matched to the cover typography (seen on the 300px covers). Origins/Trio/Crisis/Hiatus/Now have no cover lettering to follow, so those are my picks.
// f = CSS font stack, tt = text-transform, track = letter-spacing, fw = heading weight, h1s = hero title size factor (wide faces need less).
const FONTS = {
  origins:  { f: "'Special Elite',monospace",            tt: "uppercase", track: ".02em",  fw: 400, h1s: .62 },
  awkif:    { f: "'Josefin Sans',sans-serif",            tt: "none",      track: "0",      fw: 300, h1s: .8 },
  riot:     { f: "'Permanent Marker',cursive",           tt: "uppercase", track: ".01em",  fw: 400, h1s: .72 },
  bne:      { f: "'Cabin',sans-serif",                   tt: "none",      track: "0",      fw: 500, h1s: .85 },
  trio:     { f: "'Space Mono',monospace",               tt: "uppercase", track: "0",      fw: 700, h1s: .5 },
  paramore: { f: "'Rock Salt',cursive",                  tt: "uppercase", track: "0",      fw: 400, h1s: .38 },
  crisis:   { f: "'Bebas Neue',Impact,sans-serif",       tt: "uppercase", track: ".03em",  fw: 400, h1s: 1.1 },
  al:       { f: "'Montserrat',sans-serif",              tt: "uppercase", track: ".22em",  fw: 300, h1s: .5 },
  hiatus:   { f: "'Fraunces',Georgia,serif",             tt: "none",      track: "0",      fw: 600, h1s: .72 },
  tiw:      { f: "'DM Sans',sans-serif",                 tt: "none",      track: "-.01em", fw: 700, h1s: .85 },
  now:      { f: "'Oswald',Impact,sans-serif",           tt: "uppercase", track: ".02em",  fw: 600, h1s: 1 }
};
ERAS.forEach(e => (e.font = FONTS[e.id]));


Object.assign(UI, {
  interview: { ua: "Її словами: інтерв'ю 2025–26", en: "In her own words: the 2025–26 interview" },
  interviewNote: { ua: "Подкаст One Life One Chance (Тобі Морс), дві частини. {{Це її слова з автотранскрипту — у ньому можливі помилки в іменах і назвах.}}", en: "The One Life One Chance podcast (Toby Morse), two parts. {{These are her words from an auto-generated transcript, so names and titles may be mis-heard.}}" },
  unverified: { ua: "не підтверджено", en: "unverified" },
  hairUndated: { ua: "Без дат у наших джерелах", en: "Undated in our sources" }
});

// Hair timeline per era (replaces the short lists above). c = colour, c2 = second colour (split swatch), no c = a cut/styling note.
// w = when, s = style/notes, u = press report we could not verify. Colours are approximate palette values.
const T = (en, ua) => ({ en, ua });
const HAIR = {
  origins: [
    { c: "#B08D57", ua: "натуральне світло-русяве", en: "natural light brown / dirty blonde", w: T("before the dye", "до фарбування"), s: T("first salon visit as a teen", "перший візит у салон підлітком") },
    { c: "#C4561F", ua: "руде", en: "ginger", w: "2004" },
    { c: "#D6362B", ua: "яскраво-руде/червоне (на зустрічах із лейблом)", en: "bright red (at the early label meetings)", w: T("2003–04", "2003–04") },
    { c: "#1B1B1F", c2: "#E8C878", ua: "чорне зі світлими пасмами", en: "black with blonde highlights", w: "2004", s: T("also seen in old Factory-era photos", "є на старих фото часів The Factory") }
  ],
  awkif: [
    { c: "#A5321F", ua: "червоно-каштанове", en: "red auburn", w: T("2005 · back cover", "2005 · задня обкладинка") },
    { c: "#2A2020", c2: "#F0C040", ua: "темне з жовтими кінчиками", en: "dark with yellow/gold tips", w: T("Emergency video", "кліп Emergency"), s: T("the “matchstick” look, made with her stylist Brian O'Connor", "ефект «сірника», зроблений зі стилістом Браяном О'Коннором") }
  ],
  riot: [
    { c: "#FF7A1A", c2: "#F2C55C", ua: "помаранчеве зі світлими пасмами", en: "orange with blonde streaks", w: T("Misery Business video, 2006–07*", "кліп Misery Business, 2006–07*"), s: T("a swoopy, anime-inspired look after a Japan trip (Fruits magazine, Harajuku), dyed by Brian O'Connor. *Sources disagree on 2006 vs 2007.", "пухнастий аніме-образ після поїздки до Японії (журнал Fruits, Харадзюку), фарбував Браян О'Коннор. *Джерела розходяться: 2006 чи 2007.") },
    { c: "#9B2A24", ua: "бордове", en: "maroon", w: T("after the orange", "після помаранчевого"), s: T("she says she went maroon when she got shy about the scene-girl look — and that she only wore the orange for about six months", "каже, що пофарбувалась у бордове, коли засоромилась «сцен-образу», і що помаранчеве носила лише пів року") },
    { c: "#5B2A6B", ua: "темно-фіолетове", en: "dark purple", w: "2008", s: T("she says it didn't suit her", "каже, що їй не пасувало") }
  ],
  bne: [
    { c: "#FF7A1A", ua: "помаранчеве без пасом", en: "orange, no streaks", w: "2009" },
    { c: "#FF6FA8", ua: "рожеве", en: "pink", w: T("2010 · Playing God video", "2010 · кліп Playing God") }
  ],
  trio: [],
  paramore: [
    { c: "#FF6FA8", c2: "#FF7A1A", ua: "наполовину рожеве, наполовину помаранчеве", en: "half pink, half orange", w: T("2013 · Still Into You video", "2013 · кліп Still Into You") },
    { c: "#2F7FD1", ua: "синє", en: "blue", w: T("2013 · deluxe cover", "2013 · обкладинка делюкс") },
    { ua: "чубчик-«бейбі бенґс» і боб", en: "baby bangs and a bob", w: T("the self-titled era", "епоха Paramore (2013)"), s: T("cut with kitchen shears by Danilo (Gwen Stefani's hair guy, who did Girl with the Dragon Tattoo); she shaved her hairline shorter to get the bangs", "обрізав кухонними ножицями Даніло (перукар Гвен Стефані, робив «Дівчину з тату дракона»); щоб вийшов чубчик, вона вкоротила лінію росту волосся") },
    { c: "#FF7A1A", c2: "#2F7FD1", ua: "помаранчеве з блакитним", en: "orange with blue added", w: "2014", s: T("blue hair at Reading Festival 2014 — her own favourite", "синє волосся на Reading 2014 — її улюблене") }
  ],
  crisis: [
    { c: "#FF7A1A", ua: "помаранчевий «Riot» — один із перших відтінків Good Dye Young", en: "the orange “Riot” — one of Good Dye Young's first shades", w: "2016", s: T("a product launch, not a look we can pin to a date on her", "це запуск продукту, а не конкретний образ Гейлі") }
  ],
  al: [
    { c: "#EDEBE4", ua: "біле / платинове", en: "white / platinum blonde", w: "2017", s: T("her stylist describes going blonde as a way to “take back power”", "стиліст називає це способом «повернути собі силу»") },
    { ua: "укладка Poser Paste", en: "Poser Paste styling", w: "2018", s: T("a styling paste used for the After Laughter-era look", "паста для укладки, яку використовували для образу часів After Laughter") }
  ],
  hiatus: [
    { c: "#E8D6A0", ua: "блонд, укладка до підборіддя", en: "blonde, chin-length layers", w: T("2018–20 · Petals for Armor cover", "2018–20 · обкладинка Petals for Armor"), s: T("what we can see on the cover", "те, що видно на обкладинці") },
    { c: "#FF7A1A", ua: "знову помаранчеве", en: "orange again", w: T("2019, and again Dec 2020", "2019 і знову грудень 2020"), u: true, s: T("{{Press reports; not verified.}}", "{{За повідомленнями преси; не перевірено.}}") }
  ],
  tiw: [
    { c: "#C4561F", ua: "знову руде", en: "back to ginger", w: "2022–23", s: T("wavy, as on the album cover", "хвилясте, як на обкладинці") }
  ],
  now: [
    { c: "#C4561F", ua: "руде, трохи нижче плечей", en: "ginger, just below the shoulders", w: "2025", s: T("she says it grew fast; extensions for one shoot", "каже, що швидко відросло; для одних зйомок були нарощені пасма") },
    { ua: "«ліберті-шипи»", en: "Liberty spikes", w: T("a 2025 shoot", "зйомки 2025"), s: T("done by Brian O'Connor for the first time", "Браян О'Коннор робив уперше") }
  ]
};
const HAIR_NOTES = {
  trio: T("Bustle's 2014 retrospective lists a blonde stretch, a pink stretch, a darker “average” shade, an orange-and-yellow phase and “a little bit of everything” — with no dates, so they can't be placed. It also mentions a year when she changed colour nine times on tour.", "Ретроспектива Bustle 2014 року згадує блонд, рожевий, темніший «звичайний» відтінок, помаранчево-жовту фазу та «потроху всього» — але без дат, тож їх не вдається розмістити. Там же є рік, коли вона змінила колір дев'ять разів у турі."),
  crisis: T("Your sources don't describe her hair in 2015–16.", "У використаних джерелах немає опису її волосся у 2015–16."),
  now: T("She says she'd like to let it grow long — and eventually grey — and has talked about trying a mullet.", "Каже, що хоче відростити волосся довге — і зрештою сиве, — і згадувала, що може спробувати «мулет»."),
  riot: T("Good Dye Young later made the orange a product: its first shades in 2016 included “Riot”.", "Згодом Good Dye Young зробив цей помаранчевий продуктом: серед перших відтінків 2016 року був «Riot».")
};
ERAS.forEach(e => { if (HAIR[e.id]) e.hair = HAIR[e.id]; e.hairNote = HAIR_NOTES[e.id]; });

Object.assign(UI, {
  officialTag: { ua: "офіційне", en: "official" },
  fanTag: { ua: "завантажив фанат", en: "fan upload" },
  ytSearch: { ua: "Шукати на YouTube", en: "Search on YouTube" },
  eduNote: { ua: "Посилання на сторонні завантаження — лише для освітніх цілей; тут нічого не розміщено й не завантажено.", en: "Links to third-party uploads are for educational purposes only; nothing is hosted or copied here." }
});

// ---- Hair: from–to years, hover photos (p = PHOTOS keys). ap = approximate: sources give an era or a single video/photo, not exact dates.
Object.assign(UI, { approx: { ua: "приблизно", en: "approx." }, hoverHint: { ua: "наведи, щоб побачити фото", en: "hover for photos" }, yearsLabel: { ua: "Роки", en: "Years" } });
const hs = (id, i, o) => Object.assign(HAIR[id][i], o);
hs("origins", 0, { r: ["2002", "2004"], ap: 1 }); hs("origins", 1, { r: ["2004", "2004"] }); hs("origins", 2, { r: ["2003", "2004"], ap: 1 }); hs("origins", 3, { r: ["2004", "2005"], ap: 1 });
hs("awkif", 0, { r: ["2005", "2006"], ap: 1, p: ["hayley06"] }); hs("awkif", 1, { r: ["2005", "2005"] });
hs("riot", 0, { r: ["2006", "2008"], ap: 1, p: ["hayleyStage", "hayley08"] }); hs("riot", 1, { r: ["2007", "2008"], ap: 1 }); hs("riot", 2, { r: ["2008", "2008"] });
HAIR.riot.push({ c: "#E9CF6B", ua: "світлий блонд", en: "light blonde", w: T("photos from Nov 2006 and Aug 2007", "фото листопада 2006 і серпня 2007"), r: ["2006", "2007"], ap: 1, p: ["hayleyNov06", "hayley07"], s: T("visible in the photos next to the orange — probably lighter or faded stretches", "видно на фото поряд із помаранчевим — імовірно, світліші або вигорілі періоди") });
hs("bne", 0, { r: ["2009", "2010"], ap: 1 }); hs("bne", 1, { r: ["2010", "2010"] });
HAIR.trio.push({ c: "#F0541E", ua: "яскраво-помаранчево-руде", en: "bright orange-red", w: T("March 2011 photo", "фото березня 2011"), r: ["2011", "2011"], p: ["hayley11"], s: T("seen at the Bogotá show — the earliest post-Farro look we can document", "видно на концерті в Боготі — найраніший образ після братів Фарро, який вдається підтвердити") });
hs("paramore", 0, { r: ["2013", "2013"] }); hs("paramore", 1, { r: ["2013", "2014"], ap: 1 }); hs("paramore", 2, { r: ["2013", "2013"], ap: 1 }); hs("paramore", 3, { r: ["2014", "2014"] });
HAIR.paramore.push({ c: "#3CC8C0", ua: "бірюзове", en: "turquoise / teal", w: T("Aug 2014 · Monumentour", "серп. 2014 · Monumentour"), r: ["2014", "2014"], p: ["hayley14"], s: T("what the tour photo shows", "те, що видно на фото з туру") });
hs("crisis", 0, { r: ["2016", "2016"] });
hs("al", 0, { r: ["2017", "2018"], ap: 1, p: ["hayley17"] }); hs("al", 1, { r: ["2018", "2018"] });
hs("hiatus", 0, { r: ["2018", "2020"], ap: 1 }); hs("hiatus", 1, { r: ["2019", "2020"], ap: 1 });
hs("tiw", 0, { r: ["2022", "2023"], ap: 1, p: ["hayley23"] });
hs("now", 0, { r: ["2025", "2025"] }); hs("now", 1, { r: ["2025", "2025"] });

// ---- Frames and labels read from the fan timeline video bAq8_OCOJeU (2004–2021, 11:35). Colour names are the video's own captions; years are the on-screen year, so treat them as the maker's dating.
const V = (c, ua, en, y1, y2, wen, wua, sen, sua, c2) => ({ c, c2, ua, en, r: [String(y1), String(y2)], ap: 1, w: T("fan timeline video · " + wen, "фан-таймлайн · " + wua), s: sen ? T(sen, sua) : undefined });
HAIR.riot.push(
  V("#C23A1E", "червоне після помаранчевого", "red after the orange", 2008, 2008, "2008", "2008", "the video shows an orange stretch followed by a deeper red in 2008", "відео показує помаранчевий період, а за ним глибший червоний у 2008")
);
HAIR.bne.push(
  V("#E8A060", "вигоріле помаранчеве (підпис «Faded»)", "faded orange (caption “Faded”)", 2009, 2009, "2009", "2009"),
  V("#FF7A1A", "фірмове червоно-помаранчево-жовте", "the signature red / orange / yellow", 2010, 2010, "2010", "2010", "the video's own caption for her 2010 look", "власний підпис відео до образу 2010 року", "#F2C55C")
);
HAIR.trio.push(
  V("#7A1F2B", "червоне / помаранчеве / бордове (кінчики)", "red / orange / burgundy ends", 2011, 2011, "2011", "2011"),
  V("#FF7A1A", "коротке помаранчеве", "short orange", 2012, 2012, "2012", "2012")
);
HAIR.paramore.push(
  V("#FF7A1A", "помаранчеве для промо альбому Paramore", "orange for the self-titled promo", 2013, 2013, "2013", "2013"),
  V("#E8C050", "жовто-блондове в пучку", "yellow-blonde in a bun", 2013, 2013, "2013", "2013"),
  V("#C8B89A", "«вигоріле + андеркат»", "“fading + undercut”", 2013, 2014, "2013–14", "2013–14", "the video's caption for the grown-out colour with the shaved side", "підпис відео до відрослого кольору з виголеним боком"),
  V("#EDE0A8", "«тимчасовий блонд» (боб)", "“temporarily blonde” bob", 2014, 2014, "2014", "2014"),
  V("#2FB38A", "зелене / зелено-бірюзове", "green / green-teal", 2014, 2014, "2014 · Monumentour with Fall Out Boy", "2014 · Monumentour з Fall Out Boy", "the video shows it fading to a minty green with orange re-added", "відео показує, як воно вицвітає до м'ятно-зеленого, а потім додається помаранчеве", "#FF7A1A"),
  V("#B8C8C0", "вицвіле пастельне", "faded pastel", 2014, 2014, "2014 · caption “Faded”", "2014 · підпис «Faded»"),
  V("#D01830", "вишнево-червоне (гладкий боб)", "cherry red (sleek bob)", 2014, 2014, "2014 · caption “Cherry red”", "2014 · підпис «Cherry red»"),
  V("#FF7A1A", "помаранчеве з фіолетовим знизу", "orange with purple underneath", 2015, 2015, "2015", "2015", undefined, undefined, "#7A4FB0"),
  V("#C060A8", "рожево-фіолетове («Color sprays»)", "pink-purple (“Color sprays”)", 2015, 2015, "2015 · caption “Color sprays”", "2015 · підпис «Color sprays»")
);
HAIR.crisis.push(
  V("#FF8A1A", "помаранчеве («Wedding hair»)", "orange (“Wedding hair” updo)", 2016, 2016, "2016", "2016", "the video captions the updo she wore for her wedding hair", "відео підписує зачіску, у якій вона була на власному весіллі"),
  V("#F2E070", "вицвіле жовте (підпис «Faded»)", "faded yellow (caption “Faded”)", 2016, 2016, "2016", "2016"),
  V("#37C45A", "зелене", "green", 2016, 2016, "2016", "2016", "Bonnaroo, June 2016 (Getty photo dated 9 June 2016)", "Bonnaroo, червень 2016 (фото Getty від 9 червня 2016)")
);
HAIR.al.push(
  V("#C8CCD0", "сріблясте довге (час виходу After Laughter)", "long silver-white (After Laughter release)", 2017, 2017, "2017 · caption “AL release”", "2017 · підпис «AL release»"),
  V("#E0D0A8", "блонд, кучеряве", "blonde, curly", 2018, 2018, "2018", "2018"),
  V("#A8C8D8", "блакитно-блондове (підпис «Poser paste»)", "blue-tinted blonde (caption “Poser paste”)", 2018, 2018, "2018", "2018"),
  V("#F0A8B8", "рожевий блонд (Good Dye Young)", "pink blonde (Good Dye Young)", 2018, 2018, "2018", "2018", "the video links it to her hair-dye partner Good Dye Young", "відео пов'язує це з її партнером по фарбі Good Dye Young"),
  V("#F2E060", "неонові жовто-рожеві пасма", "neon yellow and pink streaks", 2018, 2018, "2018 · festival stage", "2018 · фестивальна сцена", undefined, undefined, "#FF4FA0"),
  V("#F0A888", "рожево-персикове", "pink-peach", 2018, 2018, "2018 · live", "2018 · наживо")
);
HAIR.hiatus.push(
  V("#8A6A4A", "натуральне (підпис «Natural»)", "natural (caption “Natural”)", 2019, 2019, "2019", "2019"),
  V("#8A6A4A", "натуральне коріння + рожеві кінчики", "natural roots + pink ends", 2019, 2019, "2019", "2019", undefined, undefined, "#F07CA8"),
  V("#B05840", "вицвіле руде (підпис «Fading»)", "fading copper (caption “Fading”)", 2019, 2019, "2019", "2019"),
  V("#E8D8A0", "блонд із рожевими й фіолетовими пасмами", "blonde with pink and purple streaks", 2020, 2020, "2020 · Flowers for Vases era", "2020 · час Flowers for Vases", "the video's caption for the 2020 look", "підпис відео до образу 2020 року", "#C060C0")
);

// From the 2004–2024 reupload (GIafA6SRAVY): same maker, same captions, adds 2021–2024. Frames read: 2021 red-ginger, 2022 "Faded" / "Copper refresh", 2023 purple clip-ins / "She let the guys cut her hair", 2024 shorter layered cut.
HAIR.hiatus.push(
  V("#B8452A", "червоно-руде", "red-ginger", 2021, 2021, "2021 · 2004–2024 reupload", "2021 · повторне завантаження 2004–2024"),
  V("#D9A070", "вицвіле (підпис «Faded»)", "faded (caption “Faded”)", 2022, 2022, "2022 · 2004–2024 reupload", "2022 · повторне завантаження 2004–2024"),
  V("#C8642E", "мідне оновлення (підпис «Copper refresh»)", "copper refresh (caption “Copper refresh”)", 2022, 2022, "2022 · 2004–2024 reupload", "2022 · повторне завантаження 2004–2024")
);
HAIR.tiw.push(
  V("#B8452A", "руде з фіолетовими кліп-пасмами", "ginger with purple clip-in strands", 2023, 2023, "2023 · caption partly unreadable", "2023 · підпис частково нерозбірливий", "the video's caption mentions purple clip-ins around a rerelease", "підпис відео згадує фіолетові кліп-пасма поблизу перевидання", "#9A5FC0"),
  V("#C8642E", "стрижка (підпис «She let the guys cut her hair»)", "a cut (caption “She let the guys cut her hair”)", 2023, 2023, "2023", "2023", "the frame shows copper-orange hair being cut in a salon chair", "на кадрі мідно-помаранчеве волосся стрижуть у перукарському кріслі")
);
HAIR.now.push(
  V("#E0A878", "коротша шарувата стрижка, мідно-русява", "shorter layered cut, strawberry-copper", 2024, 2024, "2024 · 2004–2024 reupload", "2024 · повторне завантаження 2004–2024", "the last frames of the video; one is captioned “Pixie cut” (its year label was cut off, so 2023–24)", "останні кадри відео; один підписаний «Pixie cut» (рік обрізаний, тож 2023–24)")
);

// 2025 solo videos (Ego Death at a Bachelorette Party, Parachute, Glum, Dream Girl in Shibuya) show bright yellow-blonde hair with a fringe — a different look from the ginger row above, so it gets its own row. Undated: the videos carry no date for the shoot.
HAIR.now.push({ c: "#F2E060", ua: "яскраво-жовтий блонд із чубчиком", en: "bright yellow-blonde with a fringe", r: ["2024", "2025"], ap: 1, w: T("the 2025 solo videos", "сольні кліпи 2025"), s: T("what the official videos show; it isn't known when they were shot, so this may sit beside the ginger row rather than replace it", "те, що показують офіційні кліпи; коли їх знімали, невідомо, тож це може бути поряд із рудим, а не замість нього"), v: [{ id: "Bw72CQYfHvY", k: 2 }, { id: "3ctZ0MuCFuk", k: 2 }, { id: "iP3w2GvHNtw", k: 1 }] });
// Emergency: the written sources say dark with yellow tips, but the official video's frames show red-auburn with no yellow — keep the sourced row, flag it.
Object.assign(HAIR.awkif[1], { u: true, s: T("the “matchstick” look, made with her stylist Brian O'Connor — but the official Emergency video's frames show red-auburn hair with no yellow tips, so the sources and the video disagree", "ефект «сірника», зроблений зі стилістом Браяном О'Коннором, — але кадри офіційного кліпу Emergency показують червоно-каштанове волосся без жовтих кінчиків, тож джерела й відео розходяться") });

// Frames from the band's official videos (ids verified earlier with oEmbed; frames eyeballed for the hair): Emergency, Misery Business, Playing God, Still Into You, Hard Times, This Is Why.
Object.assign(UI, { hairMV: { ua: "Кадр з офіційного кліпу", en: "Frame from the official music video" } });
// More: Pressure, All We Know, crushcrushcrush, That's What You Get, Hallelujah, Ignorance, The Only Exception, Monster, Ain't It Fun, Told You So, Rose-Colored Boy, and her own Cinnamon, Simmer, Leave It Alone. Indices are the order before the sort below.
const mv = (id, k) => ({ id, k });
hs("awkif", 0, { v: [mv("mgJ8BZi3vTA", 2), mv("y-MaaxgdUT4", 3), mv("4EHIpDcZvB0", 3)] });
hs("riot", 0, { v: [mv("aCyGvGEtOwc", 3), mv("ei8hPkyJ0bU", 2)] }); hs("riot", 4, { v: [mv("1kz6hNDlEEg", 3), mv("_TYlOXVdVcQ", 2)] });
hs("bne", 0, { v: [mv("OH9A6tn_P6g", 3), mv("-J7J_IWUhls", 2)] }); hs("bne", 1, { v: mv("iDy2wCQYSrU", 1) });
hs("trio", 0, { v: mv("PoTEnaAI9Fo", 3) });
hs("paramore", 0, { v: mv("OblL026SvD4", 1) }); hs("paramore", 5, { v: mv("EFEmTsfFL5A", 2) });
hs("al", 0, { v: [mv("AEB6ibtdPZc", 2), mv("yw-RPm1uOM4", 3)] }); hs("al", 2, { v: mv("yw-RPm1uOM4", 2) }); hs("al", 5, { v: mv("cW5ueE2vUm0", 3) });
hs("hiatus", 0, { v: mv("4x7jORhJntM", 1) }); hs("hiatus", 5, { v: [mv("8lSj5k2K7w0", 2), mv("t3WJjuG1yNQ", 2)] });
hs("tiw", 0, { v: mv("xIYJ7VaSxYY", 2) });

// Free-licence Commons photos matched to the same hair colours (keys live in photos2.js). No free photo exists for 2012, 2015–16, 2019–22 or 2024, so those rows keep only the video frames.
const addp = (id, i, ...k) => { const h = HAIR[id][i]; h.p = (h.p || []).concat(k); };
addp("bne", 0, "h09orange"); addp("bne", 1, "h10hct");
addp("paramore", 2, "h13ams"); addp("paramore", 5, "h13rip"); addp("paramore", 9, "hOKC3");
addp("al", 2, "hayley17"); addp("al", 3, "h18pink"); addp("al", 5, "h18pink");
addp("now", 3, "h26woburn", "h26cph");

// Keep each era's accent colour as it was (first entry), then order every era's hair by start year so the circles read as a timeline. Array.sort is stable, so ties keep their written order.
ERAS.forEach(e => { if (!e.accent && e.hair && e.hair[0] && e.hair[0].c) e.accent = e.hair[0].c; if (e.hair) e.hair.sort((a, b) => (a.r ? +a.r[0] : 9999) - (b.r ? +b.r[0] : 9999)); });

// Frames in the video with no hair caption of their own: 2004 (black, dyed with the Farros), 2005 (“Red auburn”), 2008 (orange → deep red). The video ends at 2021.

// Hair-timeline videos from the user (verified with YouTube oEmbed). The iceberg credits the first as its source for the timeline. Shown in every Hair chapter.
Object.assign(UI, { hairVideos: { ua: "Відео-таймлайни волосся", en: "Hair timeline videos" }, hairVideosNote: { ua: "Хронології волосся від фанатів. {{Відео «2004–2021» переглянуто кадр за кадром — рядки з позначкою «фан-таймлайн» взяті з його підписів і років; решту дат — з письмових джерел. Те саме зроблено з версією 2004–2024 (додає 2021–2024). Відео Oliwia Sitek 2005–2012 — слайдшоу з підписами кольорів без років, тож дат воно не додає.}}", en: "Hair timelines made by fans. {{The 2004–2021 video was gone through frame by frame — rows tagged “fan timeline video” use its captions and on-screen years (the maker's dating, so approximate) — as was the 2004–2024 reupload, which adds 2021–2024. The Oliwia Sitek 2005–2012 video is a slideshow with colour captions but no years, so it adds no dates.}}" } });
window.HAIR_VIDEOS = [
  { id: "GIafA6SRAVY", type: "clip", title: { en: "The Ultimate Hayley Williams hair dye timeline 2004–2024 (reupload)", ua: "Повний таймлайн фарбування Гейлі 2004–2024 (повторне завантаження)" }, by: "Highkey Allpressure" },
  { id: "bAq8_OCOJeU", type: "clip", title: { en: "The Ultimate Hayley Williams hair dye timeline 2004–2021", ua: "Повний таймлайн фарбування Гейлі 2004–2021" }, by: "Highkey Allpressure" },
  { id: "aL7aA_FwyRA", type: "clip", title: { en: "Hayley Williams hair colors 2005–2012", ua: "Кольори волосся Гейлі 2005–2012" }, by: "Oliwia Sitek" }
];
