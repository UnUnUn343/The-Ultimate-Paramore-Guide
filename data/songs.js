// Song pages (#s/<id>). One page per album track (built from each era's album.tracks) + hand-written "meaning map" annotations for the songs our sources cover.
// No lyrics are stored or shown: annotations are our own paraphrase of what the band, the talk and the video essays say; lyrics link out to Genius.
// v = [youtubeId, seconds]: the moment in a video essay where it's discussed (approximate: the essays' own chapter timestamps). Educational use.
Object.assign(UI, {
  songs: { ua: "Пісні", en: "Songs" },
  songsTag: { ua: "про що кожна пісня — без цитування текстів", en: "what each song is about — without quoting lyrics" },
  songsQuote: { ua: "Тицяй на частини історії пісні, щоб побачити пояснення.", en: "Tap the parts of a song's story to see what they mean." },
  meaningMap: { ua: "Карта змісту", en: "Meaning map" },
  meaningHint: { ua: "наведи або натисни на частину — з'явиться пояснення", en: "hover or tap a part to read it" },
  behind: { ua: "Історія пісні", en: "Behind the song" },
  lyricsTitle: { ua: "Тексти", en: "The lyrics" },
  lyricsBody: { ua: "Тексти пісень захищені авторським правом, тому їх тут немає. Genius має сторінку цієї пісні: текст, довідку про пісню й анотації до рядків, які пишуть його учасники (під кожною анотацією видно авторів). Ми їх не копіюємо й не вбудовуємо, а лише посилаємося; тут — пояснення, написані для цього гіда.", en: "Lyrics are copyrighted, so they aren't here. Genius has a page for this song with the lyrics, a song bio and line-by-line annotations written by its contributors (each annotation lists who wrote it). We don't copy or embed any of it, we only link to it; what you read here is written for this guide." },
  readGenius: { ua: "Genius: текст, довідка й анотації", en: "Genius: lyrics, song bio & annotations" },
  jumpTo: { ua: "Перейти до моменту", en: "Jump to the moment" },
  nextSong: { ua: "Наступна", en: "Next song" },
  prevSong: { ua: "Попередня", en: "Previous song" },
  fromAlbum: { ua: "З альбому", en: "From the album" },
  noMeaning: { ua: "Для цієї пісні в наших джерелах поки немає детальніших пояснень — є лише коротка нотатка нижче.", en: "Our sources don't have deeper explanations for this song yet — just the short note below." }
});
const A = (label, en, ua, v) => ({ l: label, t: { en, ua }, v });
const Lb = (en, ua) => ({ en, ua });
const P1 = "srCmPabfbGs", P2 = "8LVNzDHaFXY";
window.SONG_EXTRA = {
  "misery business": [
    A(Lb("Working title: “Mexico”", "Робоча назва: «Mexico»"), "It began as an acoustic version that sounded like a mariachi tune. The short intro on the album is a real mariachi band hired for the session; then Zac's drums kick in.", "Починалась як акустична версія, схожа на маріачі. Коротке інтро на альбомі грає справжній гурт маріачі, найнятий для запису; далі вступають барабани Зака.", [P1, 2671]),
    A(Lb("Who it's about", "Про кого"), "Hayley's school crush on Josh Farro and the girl he was dating. By the time they wrote it, Hayley and Josh were secretly together.", "Про шкільну закоханість Гейлі в Джоша Фарро й дівчину, з якою він зустрічався. На момент написання Гейлі й Джош уже таємно були разом."),
    A(Lb("The insulting word", "Образливе слово"), "Hayley didn't want to sing the word used for the rival — it “wasn't her”. The producer convinced her she was only describing a situation.", "Гейлі не хотіла співати слово, яким названа суперниця, — казала, що це «не вона». Продюсер переконав її, що вона лише описує ситуацію."),
    A(Lb("The God-name apology", "Вибачення за Боже ім'я"), "Some Christian fans objected to the way God's name is used as an exclamation. Hayley apologised on the band's LiveJournal — faith mattered a lot to the band then.", "Частина християнських фанатів докоряла за вживання Божого імені як вигуку. Гейлі вибачилась у блозі гурту — віра для учасників тоді була важливою."),
    A(Lb("Retired, then back", "Пішла й повернулась"), "Hayley said in 2015 she no longer related to it; in September 2018 the band stopped playing it; at Coachella 2022 she sang it with Billie Eilish (who skipped the word), and it returned to the setlist that autumn.", "У 2015-му Гейлі писала, що вже не впізнає себе в тексті; у вересні 2018-го гурт припинив її грати; на Coachella 2022 вона заспівала її з Біллі Айліш (яка пропустила слово), а восени пісня повернулась у сетлист.")
  ],
  "that s what you get": [
    A(Lb("Counting in 3 and 4", "Рахунок на 3 і 4"), "The verses are in three and the chorus in four, which makes the chorus feel bigger (Mic The Snare's observation).", "Куплети звучать на три, приспів — на чотири, тому приспів здається більшим (спостереження Mic The Snare)."),
    A(Lb("Working title: “Da Shit”", "Робоча назва: «Da Shit»"), "Probably just a funny placeholder; it has nothing to do with the song.", "Імовірно, просто жартівлива заглушка; до пісні вона не стосується.", [P1, 2671]),
    A(Lb("Who wrote it", "Хто автор"), "Credits: Hayley, Josh and Taylor. A rumour says a schoolkid won a song contest and wrote it — nobody has found any evidence of that contest.", "У титрах: Гейлі, Джош і Тейлор. Чутка каже, що її написав школяр, який виграв конкурс, — але жодних доказів конкурсу немає.", [P2, 2700])
  ],
  "crushcrushcrush": [
    A(Lb("The dark side of a crush", "Темний бік закоханості"), "Hayley described it as the opposite of sweet first-love songs: crushes can be frustrating, tedious, dark and angry.", "Гейлі описувала її як протилежність солодким пісням про першу любов: закоханість буває виснажливою, нудною, темною й злою."),
    A(Lb("The “Low” mashup", "Мешап із «Low»"), "Live since 2008, Hayley follows the bridge with the chorus of Flo Rida's “Low”.", "Наживо з 2008-го Гейлі після бриджа співає приспів «Low» Flo Rida."),
    A(Lb("Third single", "Третій сингл"), "Released in January 2008 (US 15 Jan, UK 23 Jan).", "Вийшла в січні 2008-го (США — 15 січня, Британія — 23 січня).")
  ],
  "hallelujah": [
    A(Lb("Meant for the debut", "Мала бути на дебюті"), "It was supposed to be on All We Know Is Falling but didn't make it, for reasons nobody knows. It became the first song written for Riot!.", "Мала бути на All We Know Is Falling, але не потрапила — з невідомої причини. Стала першою піснею, написаною для Riot!.", [P1, 2251]),
    A(Lb("The label story (one side)", "Історія з лейблом (одна сторона)"), "In Josh's 2010 account, Atlantic nearly dropped the band after the first demos and this song plus “Here We Go Again” saved it. The others never confirmed that.", "За версією Джоша 2010 року, Atlantic ледь не вигнав гурт після перших демо, а врятували його ця пісня та «Here We Go Again». Інші цього не підтверджували.", [P2, 2625])
  ],
  "when it rains": [
    A(Lb("Content note", "Увага"), "The song is about someone Hayley knew who took their own life — she asks why they couldn't stay long enough to explain their pain. If this is hard for you, support exists; reach out to someone.", "Пісня про людину, яку знала Гейлі й яка пішла з життя: вона питає, чому та не встигла розповісти про свій біль. Якщо тобі важко — звернись по підтримку.", [P1, 722]),
    A(Lb("A demo exists", "Є демо"), "A demo version appeared on the Riot! special edition (MVI).", "Демо-версія є на спеціальному виданні Riot! (MVI).")
  ],
  "let the flames begin": [
    A(Lb("Working title", "Робоча назва"), "“This Is How We Dance”.", "«This Is How We Dance».", [P1, 2671]),
    A(Lb("“Oh Father”", "«Oh Father»"), "Live versions end with an extended instrumental outro where Hayley repeats “Oh Father” — a prayer-like moment.", "Наживо пісня завершується довгим інструментальним закінченням, де Гейлі повторює «Oh Father» — немов молитва.", [P1, 2303]),
    A(Lb("The sequel", "Продовження"), "“Part II” on the 2013 album continues it. Taylor says they didn't set out to write a sequel; it came naturally.", "«Part II» з альбому 2013 року продовжує її. Тейлор каже, що вони не планували сиквел — воно вийшло природно.", [P1, 768])
  ],
  "miracle": [
    A(Lb("Soundcheck song", "Пісня саундчеків"), "Hayley's dad made the band arrive three hours before every show; they worked on this song daily until it made Riot!.", "Тато Гейлі змушував їх приїжджати за три години до шоу; вони щодня допрацьовували пісню, поки вона не потрапила на Riot!.", [P1, 2750]),
    A(Lb("The prayer outro", "Молитовне закінчення"), "Older live versions ended with Hayley singing a short ballad to God about love, mercy and patience.", "У ранніх живих версіях Гейлі наприкінці співала коротку баладу-звернення до Бога про любов, милосердя й терпіння.", [P1, 1524])
  ],
  "fences": [
    A(Lb("Written during the SAT", "Написана під час SAT"), "Hayley wrote the lyrics on her SAT pages at Belmont University, the day after coming back from Japan on a Fueled by Ramen tour. Her mum, a teacher, said she was proud Hayley knew where to find the answers.", "Гейлі писала текст на аркушах іспиту SAT у Belmont University — наступного дня після повернення з Японії з туром Fueled by Ramen. Мама-вчителька сказала, що пишається тим, що вона знала, де шукати відповіді.", [P1, 2721])
  ],
  "born for this": [
    A(Lb("The fan on the record", "Фанатка на записі"), "Mary Bonney of McLean, Virginia won a band contest and sang the backing vocals — not Hayley.", "Мері Бонні з Мак-Ліна (Вірджинія) виграла конкурс гурту й заспівала бек-вокал — не Гейлі.", [P1, 2280]),
    A(Lb("A sampled riff", "Інтерполяція"), "The song interpolates Refused's “Liberation Frequency”.", "Пісня містить інтерполяцію «Liberation Frequency» гурту Refused."),
    A(Lb("Opening the Final Riot!", "Відкриття Final Riot!"), "On day 3 of rehearsals for the Chicago show they decided to open with it rather than “That's What You Get”.", "На 3-й день репетицій чиказького шоу вирішили відкрити саме нею, а не «That's What You Get».")
  ],
  "all we know": [
    A(Lb("About Jeremy leaving", "Про відхід Джеремі"), "The opening track is about Jeremy leaving mid-recording. Hayley said she wrote the words quickly after he left and that the album's title comes from this song.", "Перший трек — про те, що Джеремі пішов під час запису. Гейлі казала, що написала слова швидко після його відходу, а назва альбому — з цієї пісні."),
    A(Lb("The cover connection", "Зв'язок з обкладинкою"), "The empty red couch and the shadow walking away on the cover stand for the same moment.", "Порожній червоний диван і тінь, що йде геть, на обкладинці — про той самий момент.")
  ],
  "pressure": [
    A(Lb("The flip", "Сальто"), "In the video Jeremy flips off Josh's back — an idea from Story of the Year. Jeremy later said the trick is really about the person not flipping.", "У кліпі Джеремі робить сальто, відштовхнувшись від спини Джоша, — ідея від Story of the Year. Згодом Джеремі казав, що головний у трюку той, хто не стрибає.", [P1, 3089]),
    A(Lb("Simlish", "Сімліш"), "On console versions of The Sims 2 there's a Simlish version of this song on the Pop Funk radio station.", "У консольних версіях The Sims 2 на радіо Pop Funk грає версія цієї пісні сімлішем.", [P1, 446]),
    A(Lb("Heavier than pop-punk", "Важча за поп-панк"), "Hayley says they weren't listening to pop-punk then — they wanted something darker, like Deftones — and writing this turned them into an “emo bop” band.", "Гейлі казала, що вони тоді не слухали поп-панк, а хотіли темніше, як Deftones, — і ця пісня зробила їх «емо-бопом».")
  ],
  "emergency": [
    A(Lb("What it's about", "Про що"), "In a 2005 interview Hayley said it's about love, and not in a good way — people abusing love, which she links to rising divorce rates.", "В інтерв'ю 2005 року Гейлі казала, що це про кохання, але не в доброму сенсі: люди зловживають любов'ю, що вона пов'язує зі зростанням розлучень."),
    A(Lb("The Crab Mix", "Crab Mix"), "The early screamo version with Josh screaming was a Warped Tour 2006 rarity; it reached streaming only in 2025.", "Рання скрімо-версія з гроулінгом Джоша була рідкістю з Warped Tour 2006; на стримінг потрапила лише у 2025-му.")
  ],
  "brighter": [
    A(Lb("A friend lost at 16", "Подруга, яка пішла в 16"), "About Hayley's friend Lanie (Leni in the talk), who fell overboard in a boating accident in Mississippi at 16. The bridge pictures her running away and Hayley waving goodbye as she shines.", "Про подругу Гейлі, Лені (в іншому джерелі — Lanie), яка загинула у 16 років, упавши за борт човна в Міссісіпі. У бриджі вона «біжить геть», а Гейлі махає на прощання.", [P2, 2854])
  ],
  "franklin": [
    A(Lb("The hometown", "Рідне місто"), "About Franklin, Tennessee, and how people there — even friends — didn't know where the band was (they were recording in Orlando). Taylor quietly helped write it.", "Про Франклін у Теннессі й про те, що там навіть друзі не знали, де гурт (вони записувались в Орландо). Тейлор непомітно допомагав її писати.")
  ],
  "conspiracy": [
    A(Lb("The first song", "Перша пісня"), "Hayley brought a poem on a sheet of paper to rehearsal; the guys already had music. They left with their first song.", "Гейлі принесла на репетицію вірш на аркуші; в хлопців уже була музика. Того дня вони пішли з першою піснею.", [P1, 2419]),
    A(Lb("Who it's aimed at", "На кого спрямована"), "Written angry: people thought she had a scheme to ditch her friends, but she wanted to “quit” Atlantic, which didn't acknowledge the band.", "Написана злою: люди думали, що вона хоче кинути друзів, а вона хотіла «кинути» Atlantic, який не визнавав гурт."),
    A(Lb("Music for someone else", "Музика для іншого"), "The instrumental was first made for a different singer, Randall; Hayley sang her poem over it.", "Музику спершу писали для іншого вокаліста — Рендалла; Гейлі заспівала поверх неї свій вірш.", [P2, 4037])
  ],
  "ignorance": [
    A(Lb("A pair with “Playing God”", "Пара з «Playing God»"), "The next track on the album. In both videos the band is trapped in a room with a single lightbulb.", "Наступний трек на альбомі. В обох кліпах гурт опиняється в кімнаті з однією лампочкою.", [P1, 1665]),
    A(Lb("About the band's crisis", "Про кризу гурту"), "About the crisis that nearly split the band and the friendship with Josh deteriorating. Hayley said she wondered how she'd sing it to them for the first time.", "Про кризу, що ледь не розколола гурт, і про дружбу з Джошем, що псувалась. Гейлі думала, як заспіває її їм уперше.", [P1, 1583])
  ],
  "playing god": [
    A(Lb("About being judged", "Про осуд"), "About people who pressure Hayley or restrict what she says because of their faith — and the lyrics imply Josh was one of them. She has never explicitly said so.", "Про людей, що тиснуть на Гейлі через свою віру; з тексту видно, що Джош — один із них. Вона цього прямо ніколи не казала.", [P1, 1583]),
    A(Lb("What Hayley said in 2009", "Що казала Гейлі 2009-го"), "She told Kerrang! in May 2009 that the song is “about self-righteous people and me feeling the blow of that”: it is aimed at people who place blame and should look at themselves first. It was the fifth and last single from the album, and its video, with the band tied up in her basement, is often read as a sequel to the Ignorance video. (Genius quotes the interview on its song page.)", "У травні 2009-го вона сказала Kerrang!, що пісня «про самовпевнених людей і те, як вона відчуває їхній удар»: вона спрямована на тих, хто роздає провину й має спершу глянути на себе. Це п'ятий і останній сингл альбому, а його кліп, де гурт зв'язаний у її підвалі, часто читають як продовження кліпу «Ignorance». (Інтерв'ю цитує сторінка пісні на Genius.)"),
    A(Lb("Was it “Barely Legal”?", "Чи це «Barely Legal»?"), "Fans theorise this reworked a cut song, “Barely Legal” (dated 4 Feb 2009). The band never confirmed it.", "Фанати вважають, що це переробка відкинутої «Barely Legal» (датованої 4 лютого 2009). Гурт цього не підтверджував.", [P2, 2985])
  ],
  "careful": [
    A(Lb("The Bible dispute", "Суперечка про Біблію"), "In his 2010 blog Josh said a Careful lyric contradicted John 8:32. Hayley said the song is about what other people believe to be true about you.", "У блозі 2010 року Джош казав, що рядок із «Careful» суперечить Євангелії від Івана, 8:32. Гейлі пояснювала, що пісня про те, що люди вважають правдою про тебе."),
    A(Lb("The secret blog on screen", "Таємний блог на екрані"), "In the video and the documentary Hayley scrolls a blog dated 20 Jan 2009; fans read a poem above it about fearing a “perfect” housewife life.", "У кліпі та документалці Гейлі гортає блог від 20 січня 2009; фани розібрали над ним вірш про страх «ідеального» життя домогосподарки.")
  ],
  "brick by boring brick": [
    A(Lb("Cover vs song", "Обкладинка й пісня"), "People assume the butterfly-wings line refers to the cover; Hayley confirmed it's the reverse — the song came first and the band liked the image enough to use it.", "Багато хто думає, що рядок про крила метеликів посилається на обкладинку; Гейлі підтвердила, що навпаки: спершу була пісня, а образ сподобався гурту.")
  ],
  "the only exception": [
    A(Lb("Meant as an interlude", "Мала бути інтерлюдією"), "Meant to be a two-minute interlude with Hayley and Josh on guitar; once the band heard the lyrics they made it a full song.", "Мала бути двохвилинною інтерлюдією (Гейлі й Джош на гітарі); почувши текст, гурт зробив із неї повну пісню.", [P1, 2644]),
    A(Lb("The first love song", "Перша пісня про кохання"), "Hayley's first love song: it draws on her parents' divorce and losing faith in love until “the one exception” appeared. She sang it to her mum, who cried.", "Перша пісня Гейлі про кохання: у ній розлучення батьків і втрата віри в любов, доки не з'явився «єдиний виняток». Вона заспівала її мамі — та розплакалась.", [P1, 951]),
    A(Lb("Shelved for years", "Роками не грали"), "Not played from Parahoy 2016 until the 2023 South America tour; fans link that to Chad. Grammy-nominated.", "Не грали з Parahoy 2016-го до туру Південною Америкою 2023-го; фани пов'язують це з Чедом. Номінована на «Греммі».")
  ],
  "misguided ghosts": [
    A(Lb("The kick drum", "Бас-барабан"), "The kick drum sound is Zac thumping a magazine — from the Behind Brand New Eyes documentary.", "Звук бас-барабана — Зак б'є по журналу (з документалки Behind Brand New Eyes).", [P2, 2830]),
    A(Lb("Almost the album title", "Майже назва альбому"), "“Misguided Ghosts” was a working title for the whole album.", "«Misguided Ghosts» була робочою назвою всього альбому.")
  ],
  "all i wanted": [
    A(Lb("13 years unplayed", "13 років не грали"), "Not played live until When We Were Young in 2022; in 2023 Billie Eilish sang it with Hayley in Los Angeles.", "Не грали наживо до When We Were Young 2022; у 2023-му в Лос-Анджелесі її з Гейлі заспівала Біллі Айліш."),
    A(Lb("The crossed-out verse", "Викреслений куплет"), "The Brand New Eyes box-set journal has a verse that didn't make the song — fans read it as being about Chad going on tour.", "У щоденнику з бокс-сету Brand New Eyes є куплет, що не ввійшов у пісню, — фани читають його як про те, що Чед їде в тур.")
  ],
  "ain t it fun": [
    A(Lb("A marimba riff", "Мотив на марімбі"), "Taylor wrote the marimba motif for himself, sure Hayley wouldn't like it. The song grew out of it.", "Тейлор написав мотив на марімбі для себе, певний, що Гейлі він не сподобається. З нього виросла пісня."),
    A(Lb("About moving to LA", "Про переїзд до Л.А."), "About Hayley moving to Los Angeles and meeting “adult life”. It starts with marimba and ends with a gospel choir.", "Про переїзд Гейлі до Лос-Анджелеса й знайомство з «дорослим життям». Починається з марімби, закінчується госпел-хором."),
    A(Lb("Ten world records", "Десять рекордів"), "The video set ten world records. A different version of the video, by “Stay the Night” director Cloud Campos, was scrapped.", "У кліпі встановили десять світових рекордів. Інший варіант кліпу від режисера «Stay the Night» Клауда Кампоса скасували.", [P1, 290]),
    A(Lb("The Grammy", "«Греммі»"), "Won Hayley and Taylor Best Rock Song at the 57th Grammys; the first top-ten US single.", "Принесла Гейлі й Тейлору «Греммі» за найкращу рок-пісню на 57-й церемонії; перший сингл у десятці США.")
  ],
  "still into you": [
    A(Lb("About Chad", "Про Чеда"), "Reportedly about Chad Gilbert, with whom Hayley had then been together for five or six years.", "За чутками — про Чеда Гілберта, з яким Гейлі тоді була вже п'ять–шість років.", [P2, 373]),
    A(Lb("First vocal take", "Перший вокальний дубль"), "Hayley posted a video of her first vocal take (from an iPhone) — the only whole studio take the band has ever shared.", "Гейлі виклала відео свого першого вокального дубля (з айфона) — єдиний цілий студійний дубль, яким гурт поділився."),
    A(Lb("Most streamed", "Найпопулярніша"), "Still the band's most-streamed song on Spotify.", "Досі найпопулярніша пісня гурту в Spotify.")
  ],
  "future": [
    A(Lb("Parahoy 2016", "Parahoy 2016"), "Hayley thought the second Parahoy cruise (March 2016) might be Paramore's last show ever — and “Future” is the song that closes the self-titled album. The band played it at show #2 on 7 March 2016.", "Гейлі вважала, що другий круїз Parahoy (березень 2016) може стати останнім концертом Paramore — а «Future» якраз закриває альбом Paramore. Гурт зіграв її на другому концерті 7 березня 2016-го.", [P2, 2520]),
    A(Lb("The Failure connection", "Зв'язок із Failure"), "Hayley says it's her favourite on the album and was heavily influenced by Failure, one of the band's early inspirations; Failure's Ken Andrews mixed the record.", "Гейлі каже, що це її улюблена пісня альбому й вона сильно під впливом Failure — одного з ранніх натхненників; альбом зводив Кен Ендрюс із Failure."),
    A(Lb("A great closer", "Чудове закриття"), "Mic The Snare ranks it, alongside “Tell Me How”, as his favourite closer on any Paramore album.", "Mic The Snare називає її та «Tell Me How» улюбленими закриттями серед усіх альбомів Paramore.")
  ],
  "grow up": [A(Lb("A reply to “Sad”?", "Відповідь на «Sad»?"), "Fans read it as Hayley's reply to Sherri DuPree's song “Sad”, which warned her about Chad. Hayley and Sherri are reportedly on good terms now. (A fan reading, not confirmed.)", "Фани читають її як відповідь Гейлі на «Sad» Шеррі Дюпрі, що застерігала її щодо Чеда. Нині вони, за повідомленнями, у добрих стосунках. (Фанатська версія, не підтверджена.)", [P2, 60])],
  "part ii": [A(Lb("The sequel", "Продовження"), "A sequel to “Let the Flames Begin”. The idea of continuing your own song came from mewithoutYou, who always write Part IIs; they were on the 2014 Parahoy cruise.", "Продовження «Let the Flames Begin». Ідею продовжувати власну пісню підказали mewithoutYou, які завжди пишуть Part II; вони були на круїзі Parahoy 2014.", [P1, 768])],
  "hard times": [A(Lb("Mashed up live", "Мешап наживо"), "Played with Blondie's “Heart of Glass” in concert.", "Наживо грають із «Heart of Glass» Blondie."), A(Lb("The sound", "Звучання"), "The lead single of After Laughter — bright 80s new wave over some of Hayley's darkest lyrics, written during early sessions she compared to therapy.", "Головний сингл After Laughter — яскрава нова хвиля 80-х поверх одних із найтемніших текстів Гейлі; ранні сесії вона порівнювала з терапією.")],
  "pool": [A(Lb("A relationship you can drown in", "Стосунки, у яких можна втонути"), "Hayley's dark love song about staying in imperfect relationships — she jumps in knowing she could drown. Released two months before the divorce was announced.", "Темна пісня про кохання: Гейлі стрибає у стосунки, знаючи, що можна втонути. Вийшла за два місяці до оголошення про розлучення.", [P2, 373])],
  "grudges": [A(Lb("Zac's return", "Повернення Зака"), "About Zac coming back after years: it feels like nothing's changed, so there's no point holding grudges. Zac sings in the bridge, asking why it took so long.", "Про повернення Зака через роки: наче нічого не змінилось, тож немає сенсу тримати образи. У бриджі Зак підспівує, питаючи, чому знадобилося стільки часу.", [P1, 1072])],
  "26": [A(Lb("Working title", "Робоча назва"), "“What It Costs”.", "«What It Costs».", [P1, 2671]), A(Lb("Holding on to hope", "Триматися за надію"), "A quiet acoustic song about holding on to hope as an act of defiance when something tries to tear you down.", "Тиха акустична пісня про те, щоб триматися за надію як спротив тому, що тягне вниз.")],
  "idle worship": [A(Lb("On the pedestal", "На п'єдесталі"), "About how hard it is when people put you on a pedestal; it leads straight into “No Friend”.", "Про те, як важко, коли тебе ставлять на п'єдестал; одразу переходить у «No Friend».")],
  "no friend": [A(Lb("Aaron Weiss", "Аарон Вайс"), "Recorded with Aaron Weiss of mewithoutYou, who speaks the text over the music — a nod to the band that inspired “Part II”.", "Записана з Аароном Вайсом із mewithoutYou: він начитує текст поверх музики — ляпас до гурту, що надихнув «Part II».")],
  "this is why": [A(Lb("The only title track", "Єдина заголовна"), "The only title track in Paramore's discography. It won a Grammy in an alternative category in 2024.", "Єдина заголовна пісня в дискографії Paramore. У 2024-му перемогла в альтернативній категорії «Греммі».")],
  "running out of time": [A(Lb("Always late", "Вічно запізнююсь"), "About Hayley being always late and disorganised; her friend Taylor Swift, who plans everything, was the inspiration. In the video she pays homage to Vivienne Westwood with the same horns.", "Про те, що Гейлі вічно запізнюється; натхненням стала подруга — Тейлор Свіфт, яка завжди все планує. У кліпі вона віддає шану Вів'єн Вествуд тими самими «ріжками».", [P1, 1128])],
  "c est comme ca": [A(Lb("Four or seven “na”s?", "Чотири чи сім «na»?"), "Fans still argue how many times Hayley sings “na”; slowed down you can hear seven, and the a cappella is on YouTube. In Chile she asked the crowd to stand still for the whole song — a meme.", "Фанати досі сперечаються, скільки разів вона співає «na»; уповільнено чути сім, а акапела є на YouTube. У Чилі вона просила зал стояти нерухомо всю пісню — вийшов мем.")],
  "you first": [A(Lb("Nearly cut", "Ледь не викинули"), "Taylor wasn't satisfied with his guitar parts and almost cut it from the album.", "Тейлору не подобалися його гітарні партії, і пісню ледь не викинули з альбому.", [P1, 1152])],
  "big man little dignity": [A(Lb("Elke", "Ельке"), "Backing vocals by Elke (Kayla Graninger), who toured with the band in 2023.", "Бек-вокал — Ельке (Кейла Ґраніндер), що їздила з гуртом у тур 2023-го.")],
  "dead horse": [A(Lb("The cement boots", "Черевики в цементі"), "In the video Hayley fills her wedding boots with cement. The song is about staying too long (beating a dead horse); fans read it as being about Chad.", "У кліпі Гейлі заливає цементом свої весільні черевики. Пісня про те, що вона залишалась надто довго (б'є мертвого коня); фани читають її як про Чеда.", [P2, 373])],
  "creepin": [A(Lb("A fan theory", "Фанатська теорія"), "Fans believe it's about an ex of Taylor's — Hayley hasn't confirmed that; name withheld.", "Фани вважають, що вона про колишню дівчину Тейлора, — Гейлі цього не підтверджувала; ім'я не наводимо.", [P2, 3240])],
  "over yet": [A(Lb("The workout", "Тренування"), "During lockdown Hayley filmed a workout video to this song using moves she does on stage, like high knees.", "На карантині Гейлі зняла тренування під цю пісню, використовуючи рухи зі сцени, наприклад високі коліна.")],
  "parachute": [A(Lb("A true story", "Правдива історія"), "Hayley says it's a true story about a friend on a flight back from Rio and her own wedding; she wore combat boots to it because looking pretty felt like being vulnerable. (Her words in the 2025 podcast.)", "Гейлі каже, що це правдива історія про друга в літаку з Ріо й про її власне весілля; вона була там у бойових черевиках, бо виглядати гарною означало бути вразливою. (Її слова з подкасту 2025 року.)", ["itPxuldfJ4s", 0])]
};
const slug = s => String(s).normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
window.SONGS = [];
ERAS.forEach(e => {
  const P = ERA_PAGES[e.id];
  if (!P || !P.album) return;
  P.album.tracks.forEach((t, i) => {
    const title = t.t.split(" — ")[0], key = slug(title);
    SONGS.push({ id: key.replace(/ /g, "-"), key, title, era: e.id, n: i + 1, album: t.t.includes(" — ") ? t.t.split(" — ")[1] : e.name, keySong: !!t.key, note: t.note, tag: i });
  });
});

window.SONG_VIDEOS = {
  "miracle": [
    { id: "_Av6RN776I4", type: "clip", title: { en: "Miracle outro — Nashville (fan upload)", ua: "Miracle, кода — Нашвілл (фанатське відео)" }, by: "planecrashdream" },
    { id: "nEvgHLBGrv4", type: "clip", title: { en: "“Miracle Outro” — live in Philadelphia, 17 Oct 2009 (fan upload)", ua: "«Miracle Outro» — наживо у Філадельфії, 17 жовтня 2009 (фанатське відео)" }, by: "RTMorasonMD" }
  ],
  "here we go again": [
    { id: "nOAD27mOxjE", type: "clip", title: { en: "Here We Go Again — the live outro (fan upload)", ua: "Here We Go Again — жива кода (фанатське відео)" }, by: "Salgaja no" },
    { id: "lVEOA6MjPbk", type: "clip", title: { en: "Here We Go Again outro — titled “One Armed Scissor” (fan upload)", ua: "Here We Go Again, кода — у назві «One Armed Scissor» (фанатське відео)" }, by: "marieparawho" },
    { id: "Fy46nLr68rY", type: "clip", title: { en: "Here We Go Again outro — Warped Tour 2011, as titled (fan upload)", ua: "Here We Go Again, кода — Warped Tour 2011, за назвою відео (фанатське відео)" }, by: "Posthardcore lml" }
  ],
  "over yet": [{ id: "KL6UKhr4b84", type: "clip", title: { en: "Over Yet — workout video (Hayley Williams)", ua: "Over Yet — тренування (Hayley Williams)" }, by: "Hayley Williams" }],
  "future": [
    { id: "jVOPFEvt3eM", type: "full", title: { en: "Future — live from Parahoy! Second Voyage (2016, multicam)", ua: "Future — наживо з Parahoy! Second Voyage (2016, мультикамера)" }, by: "Paramore+" },
    { id: "rhjIiW8p0Bs", type: "clip", title: { en: "Future — Parahoy show #2, 7 March 2016 (fan footage)", ua: "Future — Parahoy, концерт №2, 7 березня 2016 (запис фана)" }, by: "wojo4hitz" }
  ]
};
SONGS.push({ id: "parachute", key: "parachute", title: "Parachute", era: "now", n: null, album: "Ego Death at a Bachelorette Party", keySong: true, note: null });


window.SONGS_ERA = { id: "songs", accent: "#E87BAA", bg: "#150E13", hair: [], name: UI.songs, tab: UI.songs, years: "", font: { f: "'Oswald',Impact,sans-serif", tt: "uppercase", track: ".02em", fw: 600, h1s: 1 } };

