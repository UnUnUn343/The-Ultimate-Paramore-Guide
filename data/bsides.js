// B-sides, bonus tracks, covers and rarities.
// Sources: Wikipedia track listings of every edition (fetched 2026-11), Wikipedia list of songs recorded by Paramore, DeadPlayin's iceberg parts 1-2 (sources/ folder + pasted transcripts), the talk.
// Fan-sourced items are tagged "fan"/"unreleased"; unconfirmed theories say so in the note. `yt` = verified id on an official channel (Paramore, Hayley Williams, BBC Radio 1, or the YouTube "- Topic" art-track channel).
// Coverage: everything named in those sources. Not covered: every regional pressing and single b-side worldwide (that needs a Discogs-style database).
Object.assign(UI, {
  bsides: { ua: "B-сайди", en: "B-sides" },
  bsidesTag: { ua: "бонус-треки, кавери, демо й втрачені пісні", en: "bonus tracks, covers, demos & lost songs" },
  bsidesQuote: { ua: "Усе, що не потрапило на альбоми — або потрапило лише на окремі видання.", en: "Everything that didn't make the albums — or only made certain editions." },
  filterAll: { ua: "Усе", en: "All" },
  where: { ua: "Де", en: "Where" },
  listen: { ua: "Послухати", en: "Listen" },
  bsidesCoverage: { ua: "Тут усе, що згадано в джерелах гіда й у треклістах видань з Wikipedia. Повного переліку кожного регіонального видання тут немає — це потребує бази на кшталт Discogs.", en: "This covers everything named in this guide's sources and in Wikipedia's edition tracklists. It isn't every regional pressing — that needs a Discogs-style database." }
});
UI.type = Object.assign(UI.type || {}, {
  bonus: { ua: "Бонус-трек", en: "Bonus track" }, demo: { ua: "Демо", en: "Demo" }, live: { ua: "Наживо", en: "Live" },
  acoustic: { ua: "Акустика", en: "Acoustic" }, cover: { ua: "Кавер", en: "Cover" }, ep: { ua: "EP", en: "EP" }, remix: { ua: "Ремікс", en: "Remix" },
  soundtrack: { ua: "Саундтрек", en: "Soundtrack" }, guest: { ua: "Гостьова участь", en: "Guest spot" },
  unreleased: { ua: "Не вийшла", en: "Unreleased" }, fan: { ua: "Фанатське", en: "Fan-made" }
});

const W = (en, ua) => ({ en, ua });
window.BSIDES = [
  { id: "awkif", era: "awkif", title: W("All We Know Is Falling — extras", "All We Know Is Falling — додатки"), items: [
    { t: "O' Star", type: "bonus", where: W("Japanese edition · The Summer Tic EP · 10th anniversary edition", "Японське видання · The Summer Tic EP · видання до 10-річчя"), yt: "w81xcRihKDc" },
    { t: "This Circle", type: "bonus", where: W("The Summer Tic EP · 10th anniversary edition · 2025 deluxe", "The Summer Tic EP · видання до 10-річчя · делюкс 2025"), yt: "er3LxEFC9Mg" },
    { t: "Emergency (Crab Mix)", type: "bonus", where: W("The Summer Tic EP · 2025 deluxe", "The Summer Tic EP · делюкс 2025"), yt: "dBCqSWdj68M",
      note: W("The early screamo version with Josh screaming. Long a Warped Tour 2006-only rarity; added to the 20th-anniversary deluxe in 2025.", "Рання скрімо-версія з гроулінгом Джоша. Довго була рідкістю лише з Warped Tour 2006; у 2025-му додана до делюкс-видання до 20-річчя.") },
    { t: "Stuck on You", type: "cover", where: W("The Summer Tic EP · 2025 deluxe", "The Summer Tic EP · делюкс 2025"), note: W("Cover of Failure.", "Кавер на Failure.") },
    { t: "Pressure (live)", type: "live", where: W("iTunes deluxe (from The Final Riot!) · 20th-anniversary deluxe", "iTunes делюкс (з The Final Riot!) · делюкс до 20-річчя") },
    { t: "Pressure (acoustic, live from Q101 Chicago)", type: "acoustic", where: W("Riot! special edition (MVI)", "Спеціальне видання Riot! (MVI)") },
    { t: "Here We Go Again (live)", type: "live", where: W("FYE release (Riot! FYE) · 2025 deluxe", "Видання FYE · делюкс 2025") },
    { t: "Emergency (live)", type: "live", where: W("Best Buy and iTunes UK release", "Best Buy та iTunes UK") },
    { t: "My Heart (live)", type: "live", where: W("2025 deluxe", "Делюкс 2025") }
  ] },
  { id: "riot", era: "riot", title: W("Riot! — bonus tracks & editions", "Riot! — бонус-треки та видання"), items: [
    { t: "Stop This Song (Lovesick Melody)", type: "bonus", where: W("Japanese, Best Buy, iTunes UK and iTunes deluxe", "Японське, Best Buy, iTunes UK та iTunes делюкс"), yt: "SCXeXBSrniM",
      note: W("Working title “Avril Lavigne”. {{Per the iceberg video; not confirmed elsewhere.}}", "Робоча назва — «Avril Lavigne». {{За відео-айсбергом; в інших джерелах не підтверджено.}}") },
    { t: "Decoy", type: "bonus", where: "Hot Topic" },
    { t: "Temporary (demo)", type: "demo", where: W("Fueled by Ramen webstore", "Вебмагазин Fueled by Ramen") },
    { t: "Rewind (demo)", type: "demo", where: W("Best Buy, iTunes UK and iTunes deluxe", "Best Buy, iTunes UK та iTunes делюкс") },
    { t: "When It Rains (demo)", type: "demo", where: W("Special edition (MVI)", "Спеціальне видання (MVI)") },
    { t: "Misery Business (acoustic, live from Q101 Chicago)", type: "acoustic", where: W("MVI special edition · iTunes/Amazon MP3 · Rhapsody · iTunes deluxe", "MVI · iTunes/Amazon MP3 · Rhapsody · iTunes делюкс") },
    { t: "For a Pessimist, I'm Pretty Optimistic (live from London)", type: "live", where: W("MVI special edition", "MVI") },
    { t: "Born for This (live from London)", type: "live", where: W("MVI special edition", "MVI") },
    { t: "Misery Business (live from London, video)", type: "live", where: W("iTunes deluxe", "iTunes делюкс") },
    { t: "My Hero (electronic mix)", type: "cover", where: "Rhapsody", note: W("Foo Fighters cover. The band also played “My Hero” for US troops in Kuwait (2010).", "Кавер на Foo Fighters. У 2010-му гурт грав «My Hero» для американських військових у Кувейті.") },
    { t: "I Caught Myself", type: "soundtrack", where: "Twilight (2008)", yt: "GLNni7IL268", note: W("Written on the Riot! tour before Hayley read the books; on Spotify US only since 2021.", "Написана в турі Riot! ще до того, як Гейлі прочитала книжки; у Spotify США лише з 2021-го.") },
    { t: "Decode", type: "soundtrack", where: W("Twilight (2008) · BNE international edition", "«Сутінки» (2008) · міжнародне видання BNE"), yt: "RvnkAtWcKYg" }
  ] },
  { id: "bne", era: "bne", title: W("Brand New Eyes — editions", "Brand New Eyes — видання"), items: [
    { t: "Decode", type: "bonus", where: W("International and Japanese editions", "Міжнародне та японське видання") },
    { t: "Ignorance (acoustic)", type: "acoustic", where: W("Deluxe · Japanese · iTunes/7digital deluxe", "Делюкс · японське · iTunes/7digital") },
    { t: "Where the Lines Overlap (acoustic)", type: "acoustic", where: W("Deluxe edition", "Делюкс") },
    { t: "Brick by Boring Brick (acoustic)", type: "acoustic", where: W("iTunes / 7digital US deluxe", "iTunes / 7digital US делюкс") },
    { t: "Turn It Off (acoustic)", type: "acoustic", where: W("iTunes / 7digital US deluxe", "iTunes / 7digital US делюкс") },
    { t: "Long Distance Call", type: "cover", where: W("Phoenix cover, performed in the past", "Кавер на Phoenix, виконували наживо") },
    { t: "Use Somebody", type: "cover", where: W("BBC Radio 1 Live Lounge (2009)", "BBC Radio 1 Live Lounge (2009)"), note: W("Kings of Leon cover.", "Кавер на Kings of Leon.") },
    { t: "Love's Not a Competition (But I'm Winning)", type: "cover", where: W("BBC Radio session, 2008", "Сесія BBC Radio, 2008"), note: W("Kaiser Chiefs cover.", "Кавер на Kaiser Chiefs.") },
    { t: "Teenagers", type: "soundtrack", where: W("Jennifer's Body (2009)", "«Тіло Дженніфер» (2009)"), yt: "nPLJaenDtTo", note: W("Recorded by Hayley for the film.", "Гейлі записала для фільму.") }
  ] },
  { id: "singles", era: "trio", title: W("2011–2014: singles, EPs & remixes", "2011–2014: сингли, EP та ремікси"), items: [
    { t: "Monster", type: "soundtrack", where: "Transformers: Dark of the Moon (2011)", yt: "PoTEnaAI9Fo" },
    { t: "Singles Club", type: "ep", where: W("Renegade · Hello Cold World · In the Mourning (+ Monster era)", "Renegade · Hello Cold World · In the Mourning"),
      note: W("Released as three singles in late 2011 and bundled as an EP. The box set has four 7\" records; reported at $600+ on eBay.", "Три сингли наприкінці 2011-го, зібрані в EP. У бокс-сеті чотири 7\"-платівки; на eBay — понад $600.") },
    { t: "Rainbow Connection", type: "guest", where: W("The Muppets: The Green Album (2011) with Weezer", "The Muppets: The Green Album (2011) із Weezer") },
    { t: "Escape Route", type: "bonus", where: W("Paramore deluxe · 7\" in the box set · Rdio / limited / Japanese", "Paramore делюкс · 7\" у бокс-сеті · Rdio / ліміт. / японське"), yt: "A7ZY2QtLOoM" },
    { t: "Native Tongue", type: "bonus", where: W("Paramore deluxe · 7\" in the box set · Rdio / limited / Japanese", "Paramore делюкс · 7\" у бокс-сеті · Rdio / ліміт. / японське"), yt: "57-J8K3q-vo" },
    { t: "Tell Me It's Okay (demo)", type: "demo", where: W("Paramore deluxe (digital)", "Paramore делюкс (цифрове)") },
    { t: "Hate to See Your Heart Break (feat. Joy Williams)", type: "bonus", where: W("Paramore deluxe (digital)", "Paramore делюкс (цифрове)") },
    { t: "Live at Red Rocks", type: "live", where: W("Paramore deluxe (digital)", "Paramore делюкс (цифрове)"), note: W("Eight live tracks: Still Into You, Decode, The Only Exception, Brick by Boring Brick, Let the Flames Begin, Part II, Proof, Ain't It Fun.", "Вісім концертних треків: Still Into You, Decode, The Only Exception, Brick by Boring Brick, Let the Flames Begin, Part II, Proof, Ain't It Fun.") },
    { t: "The Holiday Sessions", type: "ep", where: W("7\" pink vinyl, 700 copies", "7\" рожевий вініл, 700 копій"), note: W("The three ukulele interludes from Paramore. 300 copies were sold in Nashville; a listing once asked $480.", "Три інтерлюдії під укулеле з Paramore. 300 копій продали в Нашвіллі; одне оголошення просило $480.") },
    { t: "Ain't It Fun Remixes", type: "remix", where: W("EP, 24 June 2014", "EP, 24 червня 2014"), yt: "V8wADm_lpOw", note: W("Smash Mode, Dutch Uncles, Kye Kye and a Radio mix. The link is the Dutch Uncles remix.", "Smash Mode, Dutch Uncles, Kye Kye та Radio mix. Посилання — на реміс Dutch Uncles.") }
  ] },
  { id: "hayley", era: "hiatus", title: W("Hayley's solo extras & recent releases", "Сольні додатки Гейлі та новіші релізи"), items: [
    { t: "Colour Me In", type: "bonus", where: W("Released after FLOWERS for VASES", "Вийшла після FLOWERS for VASES"), yt: "Fw07dAhZH7c", note: W("Recorded days before the 2020 lockdown.", "Записана за кілька днів до карантину 2020 року.") },
    { t: "Petals for Armor I–III", type: "ep", where: W("Feb, Apr and May 2020", "Лют., квіт. та трав. 2020"), note: W("The album came out as three EPs, one day before the full release.", "Альбом вийшов трьома EP — за день до повного релізу.") },
    { t: "Burning Down the House", type: "cover", where: W("Stop Making Sense: a Tribute Album (2024)", "Stop Making Sense: a Tribute Album (2024)"), yt: "A73voVPhMfY", note: W("Talking Heads cover. The link is the behind-the-scenes video.", "Кавер на Talking Heads. Посилання — на відео «за лаштунками».") },
    { t: "Sanity (demo)", type: "demo", where: W("This Is Why reissue", "Перевидання This Is Why"), yt: "PcqQBdPFm9Y", note: W("Also exists as a “Re:” version with Jack Antonoff.", "Існує й версія «Re:» з Джеком Антонофом.") },
    { t: "Re: This Is Why", type: "remix", where: W("Remix album", "Реміксовий альбом"), note: W("Re-works by Foals, The Linda Lindas, Panda Bear, Zane Lowe, Wet Leg, Domi and JD Beck, Remi Wolf, Bartees Strange, Romy, Claud and Julien Baker.", "Перероблені версії від Foals, The Linda Lindas, Panda Bear, Zane Lowe, Wet Leg, Domi and JD Beck, Remi Wolf, Bartees Strange, Romy, Claud та Julien Baker.") },
    { t: "Passionfruit", type: "cover", where: "BBC Radio 1 Live Lounge", yt: "zqoj_3r9oqg", note: W("Drake cover.", "Кавер на Drake.") }
  ] },
  { id: "guest", era: "trio", title: W("Hayley's guest spots (some uncredited)", "Гостьові участі Гейлі (деякі без згадки)"), items: [
    { t: "Airplanes", type: "guest", where: "B.o.B (2010)", note: W("Hook recorded remotely during the Brand New Eyes tour.", "Приспів записаний дистанційно під час туру Brand New Eyes.") },
    { t: "Stay the Night", type: "guest", where: "Zedd (2013)" },
    { t: "Vicious Love", type: "guest", where: "New Found Glory (2014)" },
    { t: "The Few That Remain", type: "guest", where: "Set Your Goals", note: W("A short rap verse; uncredited.", "Короткий реп-куплет; без згадки в титрах.") },
    { t: "Then Came to Kill", type: "guest", where: "The Chariot (2007)", note: W("Uncredited vocals.", "Вокал без згадки.") },
    { t: "Gersberms", type: "guest", where: "Hard 'n Phirm (2012)", note: W("A joke song about the “Ermahgerd” meme, with the Muppets' Swedish Chef.", "Жартівлива пісня про мем «Ermahgerd» зі Шведським кухарем із «Маппетів».") },
    { t: "As U Wave", type: "guest", where: "HalfNoise", note: W("Not listed in the credits.", "Не вказана серед виконавців.") },
    { t: "Other uncredited appearances", type: "guest", where: W("Per the iceberg list", "За списком айсберга"), note: W("Keep Dreaming Upside Down (October Fall), The Church Channel and Plea (Say Anything), Tangled Up (New Found Glory), Fox's Dream of the Log Flume and All Circles (mewithoutYou), Babe and Wearing Your Ring (What's Eating Gilbert).", "Keep Dreaming Upside Down (October Fall), The Church Channel і Plea (Say Anything), Tangled Up (New Found Glory), Fox's Dream of the Log Flume та All Circles (mewithoutYou), Babe і Wearing Your Ring (What's Eating Gilbert).") },
    { t: "Bed Intruder (punk cover)", type: "cover", where: W("2010, with Jordan Pundik and Ethan Luck", "2010, з Джорданом Пандіком і Ітаном Лаком") }
  ] },
  { id: "lost", era: "awkif", title: W("Unreleased, lost & fan-made", "Невидані, втрачені та фанатські"), items: [
    { t: "The B-Sides (fan-made, 2008)", type: "fan", where: W("17 songs, found on YouTube", "17 пісень, є на YouTube"), note: W("Not an official release: unreleased and demo songs from the AWKIF and Riot! eras plus covers of My Hero (Foo Fighters), Sunday Bloody Sunday (U2) and Stuck on You (Failure).", "Не офіційний реліз: невидані та демо-пісні часів AWKIF і Riot! плюс кавери на My Hero (Foo Fighters), Sunday Bloody Sunday (U2) і Stuck on You (Failure).") },
    { t: "Hallelujah (demo)", type: "demo", where: W("On YouTube", "На YouTube"), note: W("Originally meant for the debut; became the first song written for Riot!.", "Спершу — для дебюту; стала першою піснею, написаною для Riot!.") },
    { t: "Barely Legal", type: "unreleased", where: W("Lyrics posted on the band's LiveJournal", "Текст на LiveJournal гурту"), note: W("Dated 4 Feb 2009, a month before sessions. Fans theorise it was reworked into “Playing God” — the band never confirmed that.", "Датований 4 лютого 2009-го, за місяць до сесій. Фанати вважають, що його переробили на «Playing God» — гурт цього не підтверджував.") },
    { t: "7 Years in the Making", type: "unreleased", where: W("Lyrics only; never recorded", "Лише текст; не записана"), note: W("Believed to be the scrapped “Brand New Eyes” title song Hayley described as too sad and negative.", "Вважають тією самою відкинутою заголовною піснею «Brand New Eyes», яку Гейлі назвала надто сумною й негативною.") },
    { t: "Take Me Back", type: "unreleased", where: W("10 seconds in the Final Riot! documentary", "10 секунд у документалці Final Riot!"), note: W("Played by Hayley and Josh; probably never recorded.", "Грають Гейлі й Джош; найімовірніше, не записана.") },
    { t: "Unnamed AWKIF songs", type: "unreleased", where: "BMI / ASCAP", note: W("Several unreleased songs are registered in these databases — all from the first album.", "У цих базах зареєстровано кілька невиданих пісень — усі з першого альбому.") },
    { t: "Plane Crash Dream", type: "fan", where: W("On YouTube, posted 29 June 2008 by a fan", "На YouTube, викладено 29 червня 2008 фанатом"), note: W("Uploaded as “Josh Farro feat. Hayley Williams”. The description says only “josh singing” and that the slideshow was made by the uploader's little sister from old pictures. {{Nothing there says when or where it was recorded, or that it is an official demo.}}", "Викладено як «Josh Farro feat. Hayley Williams». В описі лише «josh singing» і те, що слайдшоу зробила молодша сестра автора зі старих фото. {{Там не сказано, коли й де це записано, і що це офіційне демо.}}") },
    { t: "Breathe (Until Tomorrow)", type: "fan", where: W("On YouTube, posted 1 Jan 2011", "На YouTube, викладено 1 січня 2011"), note: W("A fan upload with lyrics whose description calls it an original Paramore song. {{The song's origin isn't confirmed anywhere else.}}", "Фанатське відео з текстом, в описі якого це названо оригінальною піснею Paramore. {{Походження пісні ніде більше не підтверджено.}}") },
    { t: "Mammoth City Messengers songs", type: "unreleased", where: W("Before Paramore, 2003", "До Paramore, 2003"), note: W("Hayley sang “Jumping Inside”, “Boomerang”, “All They See Is Love” and “Lift My Hands” on the Christian audio-comic's Volume 1. The player plays “Jumping Inside”, which YouTube lists as an auto-generated art track; the other three were not checked.", "Гейлі заспівала «Jumping Inside», «Boomerang», «All They See Is Love» і «Lift My Hands» у 1-му томі християнського аудіокоміксу. У плеєрі — «Jumping Inside», яку YouTube подає як автоматично створений арт-трек; про решту трьох не перевірено.") },
    { t: "The B-Sides — the full fan track list (Paramore Wiki)", type: "fan", where: W("Paramore Wiki, “The B-Sides” (fan-edited, CC BY-SA)", "Paramore Wiki, «The B-Sides» (редагує спільнота, CC BY-SA)"), note: W("The wiki lists the bootleg as 26 tracks over two discs. Disc 1: Decoy, Another Day, Oh Star, Stop This Song (Lovesick Melody), Just Like Me, Decode (Acoustic), My Hero, Stuck on You, Hello Hello, When It Rains (demo), Emergency (Crab Mix), Rewind, This Circle, Adore, My Number One, Hallelujah (demo), Sunday Bloody Sunday. Disc 2: I Caught Myself, Throwing Punches, Breathe (Until Tomorrow), Swim in Silence, Stay Away, Temporary, Teenagers, Oh Star (demo), In the Mourning (demo). Its notes: “Native Tongue” and “Escape Route” were dropped from the list because Fueled By Ramen officially released both in 2014 on the self-titled deluxe edition, and the Hallelujah demo replaced a “Here We Go Again” demo that turned out to be from the 2006 Live in Anaheim compilation. This is a fan-compiled list of a fan-made CD. {{The origins and dates of most tracks are unverified.}}", "Вікі подає бутлег як 26 треків на двох дисках. Диск 1: Decoy, Another Day, Oh Star, Stop This Song (Lovesick Melody), Just Like Me, Decode (Acoustic), My Hero, Stuck on You, Hello Hello, When It Rains (демо), Emergency (Crab Mix), Rewind, This Circle, Adore, My Number One, Hallelujah (демо), Sunday Bloody Sunday. Диск 2: I Caught Myself, Throwing Punches, Breathe (Until Tomorrow), Swim in Silence, Stay Away, Temporary, Teenagers, Oh Star (демо), In the Mourning (демо). Її примітки: «Native Tongue» та «Escape Route» виключили зі списку, бо Fueled By Ramen офіційно випустив обидві у 2014-му на делюкс-виданні альбому Paramore, а демо Hallelujah замінило демо «Here We Go Again», яке виявилось із збірки Live in Anaheim 2006 року. Це складений фанатами список фанатського диска. {{Походження й дати більшості треків не перевірено.}}") },
    { t: "Another Day", type: "fan", where: W("Fan B-Sides compilation {{Per the Paramore Wiki; fan-compiled, unverified.}}", "Фанатська збірка B-Sides {{За Paramore Wiki; складено фанатами, не перевірено.}}"), note: W("Listed only by the wiki. {{Origin and era unverified.}}", "Є лише у списку вікі. {{Походження й епоха не підтверджені.}}") },
    { t: "Oh Star (and demo)", type: "fan", where: W("Fan B-Sides compilation {{Per the Paramore Wiki; fan-compiled, unverified.}}", "Фанатська збірка B-Sides {{За Paramore Wiki; складено фанатами, не перевірено.}}"), note: W("Appears twice on the wiki's list — once on each disc, the second marked as a demo. {{Origin unverified.}}", "Двічі у списку вікі — по разу на кожному диску, другий раз позначено як демо. {{Походження не підтверджено.}}") },
    { t: "Just Like Me", type: "fan", where: W("Fan B-Sides compilation {{Per the Paramore Wiki; fan-compiled, unverified.}}", "Фанатська збірка B-Sides {{За Paramore Wiki; складено фанатами, не перевірено.}}"), note: W("Listed only by the wiki.", "Є лише у списку вікі.") },
    { t: "Decode (acoustic)", type: "fan", where: W("Fan B-Sides compilation {{Per the Paramore Wiki; fan-compiled, unverified.}}", "Фанатська збірка B-Sides {{За Paramore Wiki; складено фанатами, не перевірено.}}"), note: W("An acoustic take of the Twilight song, listed only by the wiki.", "Акустична версія пісні з «Сутінок», є лише у списку вікі.") },
    { t: "Hello Hello", type: "fan", where: W("Fan B-Sides compilation {{Per the Paramore Wiki; fan-compiled, unverified.}}", "Фанатська збірка B-Sides {{За Paramore Wiki; складено фанатами, не перевірено.}}"), note: W("Listed only by the wiki.", "Є лише у списку вікі.") },
    { t: "Adore", type: "fan", where: W("Fan B-Sides compilation {{Per the Paramore Wiki; fan-compiled, unverified.}}", "Фанатська збірка B-Sides {{За Paramore Wiki; складено фанатами, не перевірено.}}"), note: W("Listed only by the wiki.", "Є лише у списку вікі.") },
    { t: "My Number One", type: "fan", where: W("Fan B-Sides compilation {{Per the Paramore Wiki; fan-compiled, unverified.}}", "Фанатська збірка B-Sides {{За Paramore Wiki; складено фанатами, не перевірено.}}"), note: W("Listed only by the wiki.", "Є лише у списку вікі.") },
    { t: "Throwing Punches", type: "fan", where: W("Fan B-Sides compilation {{Per the Paramore Wiki; fan-compiled, unverified.}}", "Фанатська збірка B-Sides {{За Paramore Wiki; складено фанатами, не перевірено.}}"), note: W("Listed only by the wiki.", "Є лише у списку вікі.") },
    { t: "Swim in Silence", type: "fan", where: W("Fan B-Sides compilation {{Per the Paramore Wiki; fan-compiled, unverified.}}", "Фанатська збірка B-Sides {{За Paramore Wiki; складено фанатами, не перевірено.}}"), note: W("Listed only by the wiki.", "Є лише у списку вікі.") },
    { t: "Stay Away", type: "fan", where: W("Fan B-Sides compilation {{Per the Paramore Wiki; fan-compiled, unverified.}}", "Фанатська збірка B-Sides {{За Paramore Wiki; складено фанатами, не перевірено.}}"), note: W("Listed only by the wiki.", "Є лише у списку вікі.") },
    { t: "In the Mourning (demo)", type: "demo", where: W("Fan B-Sides compilation {{Per the Paramore Wiki; fan-compiled, unverified.}}", "Фанатська збірка B-Sides {{За Paramore Wiki; складено фанатами, не перевірено.}}"), note: W("A demo of the song later released on the Singles Club EP, listed on the wiki's disc 2. {{Origin unverified.}}", "Демо пісні, яка пізніше вийшла на EP Singles Club, у списку вікі на 2-му диску. {{Походження не підтверджено.}}") }
  ] }
];

// Pseudo-era so the B-sides page can reuse the theme code (accent, background, display font).
window.BSIDES_ERA = { id: "bsides", accent: "#D9A441", bg: "#130F10", hair: [], name: UI.bsides, tab: UI.bsides, years: "",
  font: { f: "'Special Elite',monospace", tt: "uppercase", track: ".02em", fw: 400, h1s: .62 } };
