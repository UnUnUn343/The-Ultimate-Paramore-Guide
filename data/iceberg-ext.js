// Outside sources for iceberg entries, found by web search and kept only when the page title matches the entry.
// Key = regex source tested against the entry title; value = [{label, url}] and/or [{note}] (a correction or caveat from the sources).
window.ICE_EXT = window.ICE_EXT || {};
Object.assign(ICE_EXT, {
  "good 4 u": [
    { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Good_4_U" },
    { label: "Rolling Stone", url: "https://www.rollingstone.com/music/music-news/olivia-rodrigo-good-4-u-paramore-hayley-williams-writing-credit-1216729/" },
    { label: "Kerrang!", url: "https://www.kerrang.com/paramore-have-been-given-a-writing-credit-for-olivia-rodrigos-good-4-u" },
    { label: "Stereogum", url: "https://stereogum.com/2158648/olivia-rodrigo-gives-paramore-writing-credits-on-good-4-u/news" },
    { label: "The A.V. Club", url: "https://www.avclub.com/paramores-hayley-williams-receives-writing-credit-on-ol-1847555852" },
    { note: "Per the reports, the credits were added about three months after release, as an interpolation of “Misery Business”; the publisher Warner Chappell announced it." }],
  "Misery Business Brief Retirement": [
    { label: "The FADER", url: "https://www.thefader.com/2018/09/09/paramore-is-retiring-misery-business-from-live-shows" },
    { label: "Spin", url: "https://www.spinmagazine.com/2018/09/paramore-retiring-misery-business-from-live-shows/" },
    { label: "Refinery29", url: "https://refinery29.com/en-us/2018/09/209384/paramore-retires-controversial-misery-business-from-live-show" },
    { label: "DIY", url: "https://diymag.com/news/paramore-are-apparently-going-to-retire-misery-business-from-their-live-shows" },
    { note: "Reports say the retirement was announced at Paramore's Art + Friends festival in Nashville (September 2018), and that the song came back at a 2022 show in Bakersfield, California." }],
  "World Records": [
    { label: "Mic", url: "https://www.mic.com/articles/80735/paramore-broke-10-world-records-in-their-new-music-video" },
    { label: "IMVDb — director interview", url: "https://imvdb.com/blog/2014/02/video-chats-sophia-peer-on-aint-it-fun-by-paramore" },
    { note: "Sources disagree on who certified the records (some say Guinness, more say RecordSetter, for “most world records set in a music video”). The video was directed by Sophia Peer." }],
  "Band drama": [
    { label: "Rolling Stone — settlement", url: "https://www.rollingstone.com/music/music-news/paramore-settle-lawsuit-with-former-bassist-119785/" },
    { label: "NME", url: "https://www.nme.com/news/music/paramore-lawsuit-jeremy-davis-2070946" },
    { label: "Stereogum", url: "https://stereogum.com/1940756/paramore-settle-legal-dispute-with-former-bassist/news" },
    { label: "Diffuser", url: "https://diffuser.fm/paramore-jeremy-davis-lawsuit/" },
    { note: "The Jeremy Davis lawsuit was reported settled in May 2017 on undisclosed terms; the dispute was whether he was a partner or an employee of Varoom Whoa." }],
  "Coachella 2022": [
    { label: "The FADER", url: "https://www.thefader.com/2022/04/24/billie-eilish-hayley-williams-coachella" },
    { label: "Spin", url: "https://www.spinmagazine.com/2022/04/hayley-williams-billie-eilish-misery-business-paramore-coachella-weekend-two/" },
    { label: "Loudwire", url: "https://loudwire.com/hayley-williams-misery-business-billie-eilish-coachella-video/" },
    { label: "The Line of Best Fit", url: "https://www.thelineofbestfit.com/news/latest-news/billie-eilish-brings-out-hayley-williams-to-play-misery-business-coachella" }],
  "Love Rising": [
    { label: "Rolling Stone — review", url: "https://www.rollingstone.com/music/music-features/love-rising-benefit-concert-drag-review-1234700793/" },
    { label: "Rolling Stone — the Deana Carter cover", url: "https://www.rollingstone.com/music/music-news/hayley-williams-deana-carter-cover-love-rising-watch-1234700632/" },
    { note: "Reports describe a March 2023 benefit for LGBTQ+ causes at Bridgestone Arena in Nashville; Hayley played “Inordinary” and a Deana Carter cover." }],
  "Miracle's concert outro": [
    { label: "Nashville clip (fan upload)", url: "https://www.youtube.com/watch?v=_Av6RN776I4" },
    { label: "Philadelphia, 17 Oct 2009 (fan upload)", url: "https://www.youtube.com/watch?v=nEvgHLBGrv4" }],
  "Pressure in The Sims": [
    { note: "Searches agree a Simlish “Pressure” appears on the console version of The Sims 2, but they did not confirm which radio station plays it, so the “Pop Funk” detail from the video is unchecked." }],
  "Airplanes": [
    { label: "Wikipedia — Airplanes", url: "https://en.wikipedia.org/wiki/Airplanes_(song)" },
    { label: "Know Your Meme — MordeTwi", url: "https://knowyourmeme.com/memes/mordetwi" },
    { label: "Stereogum — Hayley sings it again", url: "https://stereogum.com/2511862/hayley-williams-sings-airplanes-for-the-first-time-in-16-years/news" },
    { note: "Know Your Meme traces the ship to a 2012 DeviantArt drawing; it gives conflicting dates (2020 vs 2021) for the tweet that referenced Hayley. No statement from Hayley about it turned up." }],
  "Final RIOT": [
    { label: "Wikipedia — The Final Riot!", url: "https://en.wikipedia.org/wiki/The_Final_Riot!" },
    { label: "Punktastic — DVD review", url: "https://www.punktastic.com/album-reviews/paramore-the-final-riot-dvd" },
    { note: "Per Wikipedia and mirrors: filmed 12 August 2008 at the Congress Theater in Chicago; it includes the documentary “40 Days of Riot!” (the deluxe edition adds “40 MORE Days of Riot!”). Release dates differ between sources." }],
  "Tiny Desk": [
    { label: "NPR — Tiny Desk Concert", url: "https://www.npr.org/2017/10/02/554524822/paramore-tiny-desk-concert" },
    { label: "The FADER", url: "https://www.thefader.com/2017/10/02/paramore-npr-tiny-desk-concert-after-laughter" },
    { label: "Spin", url: "https://www.spinmagazine.com/2017/10/paramore-tiny-desk-video/" },
    { note: "The 2017 Tiny Desk was filmed 13 September and published 2 October 2017; the three songs were “Hard Times”, “Fake Happy” and “26”." }],
  "Reading Festival": [
    { label: "DIY — “reign victorious”", url: "https://diymag.com/news/paramore-reign-victorious-at-reading-2014" },
    { label: "Louder", url: "https://www.loudersound.com/reviews/reading-festival-paramore" },
    { label: "RTÉ — the power failure", url: "https://www.rte.ie/entertainment/2014/0823/638899-reading-power-failure-for-paramore" },
    { label: "Drowned in Sound", url: "https://drownedinsound.com/in_depth/4148152" },
    { note: "Reports say a short power failure hit the 2014 Reading set; Hayley later joked it might have been the best thing that could have happened." }],
  "Taylor Hawkins": [
    { label: "Far Out", url: "https://faroutmagazine.co.uk/how-paramore-ended-up-with-taylor-hawkins-drum-kit/" },
    { label: "The A.V. Club", url: "https://www.avclub.com/paramore-hayley-williams-foo-fighters-taylor-hawkins-1848890983" },
    { note: "This comes from Hayley's own account on her 2022 BBC podcast Everything Is Emo; No independent confirmation turned up." }],
  "Kuwait": [
    { label: "Edwards AFB — the VH1 Divas special", url: "https://www.edwards.af.mil/News/Article/395097/edwards-airmen-enjoy-salute-as-vhi-divas-give-back-to-military" },
    { label: "BroadwayWorld", url: "https://www.broadwayworld.com/bwwtv/article/Perry-Hilson-More-Lead-VH1-Divas-Salute-The-Troops-125-20101206" },
    { note: "Reports: the Paramore set was taped at Army Camp Arifjan in Kuwait and aired in “VH1 Divas Salute the Troops” on 5 December 2010; they played “My Hero” (a Foo Fighters cover) and “The Only Exception”." }],
  "^Stay The Night$": [
    { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Stay_the_Night_(Zedd_song)" },
    { label: "Complex", url: "https://www.complex.com/music/2013/09/zedd-ft-hayley-williams-stay-the-night" },
    { label: "mxdwn — the video", url: "https://music.mxdwn.com/2013/09/23/news/watch-zedd-releases-official-video-for-stay-the-night-featuring-hayley-williams-of-paramore/" },
    { note: "A 2013 Zedd single featuring Hayley, from the deluxe edition of Clarity; sources give 10 or 23 September 2013 for its release and it reached number 18 on the Hot 100." }],
  "^Monster$": [
    { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Monster_(Paramore_song)" },
    { label: "Drowned in Sound", url: "https://www.drownedinsound.org/archive-listen-new-paramore-track-monster-4142817/" },
    { label: "Paramore Wiki", url: "https://paramore.fandom.com/wiki/Monster" },
    { note: "Released 7 June 2011 for Transformers: Dark of the Moon, the band's first music after the Farro brothers left; written by Hayley and Taylor, produced by Rob Cavallo; certified gold in 2016." }],
  "Spotify US": [
    { label: "Uproxx", url: "https://uproxx.com/indie/paramore-twilight-soundtrack-spotify" },
    { label: "CinemaBlend", url: "https://cinemablend.com/news/2569493/2-iconic-songs-twilight-sage-soundtrack-paramore-streaming-fan-reactions" },
    { label: "Cheat Sheet — why they were missing", url: "https://www.cheatsheet.com/news/why-isnt-decode-by-paramore-on-spotify.html" },
    { label: "Wikipedia — Decode", url: "https://en.wikipedia.org/wiki/Decode_(song)" },
    { note: "Reports date the arrival to around 24 June 2021; the reason they were missing is not confirmed (licensing is the likely guess)." }],
  "BBC Song Covers": [
    { label: "Paste — Passionfruit", url: "https://www.pastemagazine.com/music/paramore/watch-paramore-cover-drakes-passionfruit-in-the-li" },
    { label: "The FADER — Passionfruit", url: "https://www.thefader.com/2017/06/19/paramore-drake-passionfruit" },
    { label: "NME — Passionfruit", url: "https://www.nme.com/news/music/paramore-drake-passionfruit-cover-live-lounge-2090340" },
    { note: "The Drake “Passionfruit” cover is from a 2017 Live Lounge visit; Could not date the Kings of Leon “Use Somebody” cover from a reliable source." }],
  "^Singles Club$": [
    { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Singles_Club_(EP)" },
    { label: "Spin", url: "https://www.spinmagazine.com/2011/11/paramore-unleash-hello-cold-world-singles-club/" },
    { label: "Sputnikmusic — review", url: "https://www.sputnikmusic.com/review/47020/Paramore-Singles-Club" },
    { label: "Paramore Wiki", url: "https://paramore.fandom.com/wiki/Singles_Club_EP" },
    { note: "Sources list four tracks — “Monster”, “Renegade”, “Hello Cold World” and “In the Mourning” — released October to December 2011 through the band's webstore and later a box set; the iceberg lists three." }],
  "Honda Civic Tour": [
    { label: "Honda press release", url: "https://www.prnewswire.com/news-releases/2010-honda-civic-tour-featuring-paramore-announces-performance-dates-on-exhilarating-summer-tour-88804912.html" },
    { label: "PopMatters — Chicago show", url: "https://popmatters.com/130623-honda-civic-tour-18-august-2010-chicago-2496143008.html" },
    { label: "Spin", url: "https://www.spinmagazine.com/2010/07/paramore-kick-summer-shows-tegan-sara/" },
    { note: "Per the press material, the band customised and autographed a 2010 Civic Si and a Honda scooter to give away; entries opened in April and the tour began 23 July 2010 in Raleigh." }],
  "Hate To See Your Heart Break": [
    { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Hate_to_See_Your_Heart_Break" },
    { label: "NPR", url: "https://www.npr.org/blogs/therecord/2014/11/21/365754024/paramore-feat-joy-williams-hate-to-see-your-heart-break" },
    { label: "Rolling Stone", url: "https://www.rollingstone.com/music/music-country/watch-former-civil-wars-singer-joy-williams-duet-with-paramores-hayley-williams-59956/" },
    { note: "The original is on the 2013 self-titled album (written by Hayley and Taylor); Joy Williams, formerly of The Civil Wars and no relation, is a featured vocalist on the duet version." }],
  "^Good Dye Young$": [
    { label: "GDY — founders page", url: "https://gooddyeyoung.com/pages/hayley-williams-brian-oconnor-founders" },
    { label: "Hypebeast", url: "https://hypebeast.com/2023/5/paramore-hayley-williams-hair-dye-brand-good-dye-young-interview" },
    { label: "Nylon", url: "https://nylon.com/articles/hayley-williams-good-dye-young-hair-color-line" },
    { label: "Paste", url: "https://www.pastemagazine.com/business/gooddyeyoung/discovering-a-bold-new-world-with-hayley-williams" },
    { note: "The brand's own founders page says the orange “Riot” formula was its first creation; the best-supported launch year in what was found is about 2016." }],
  "^Walkways$": [
    { label: "Wikipedia — Josh Farro", url: "https://en.wikipedia.org/wiki/Josh_Farro" },
    { label: "Alt Press — review", url: "https://www.altpress.com/?p=140979" },
    { label: "Louder — Life After Paramore", url: "https://www.loudersound.com/features/josh-farro-life-after-paramore" },
    { note: "Sources describe Walkways as a full-length album, released 5 February 2016 under the name Farro." }],
  "bring people on stage": [
    { note: "A Kerrang! review of the band's first Belfast show (22 June 2010; scan on the Interviews page) describes Hayley bringing fans onto the stage for the “Misery Business” finale." }],
  "Summer Tic EP": [
    { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/The_Summer_Tic_EP" },
    { label: "Stereogum — streaming at last", url: "https://stereogum.com/2317013/paramore-finally-put-the-summer-tic-ep-on-streaming-for-debut-albums-20th-anniversary/music" },
    { note: "Per Wikipedia: four songs, sold on the 2006 Warped Tour (the release date is June 18, 2006, though one mirror says August); all four were re-released with the 20th-anniversary edition of All We Know Is Falling on 25 July 2025." }],
  "Holiday Sessions": [
    { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/The_Holiday_Sessions" },
    { label: "Paramore Wiki", url: "https://paramore.fandom.com/wiki/The_Holiday_Sessions" },
    { note: "A die-cut flower-shaped 7-inch with the three Self-Titled interludes (“Moving On”, “Holiday”, “I'm Not Angry Anymore”); 700 copies, 300 of them for Record Store Day on 20 April 2013 in Nashville. Sources describe the flower as pink or red." }],
  "Rainbow Connection": [
    { label: "Paramore Wiki", url: "https://paramore.fandom.com/wiki/Rainbow_Connection" },
    { label: "AntiMusic", url: "https://antimusic.com/news/11/june/29Weezer_and_Paramores_Hayley_Williams_Rainbow_Connection.shtml" },
    { note: "It is Weezer's recording for Muppets: The Green Album (23 August 2011), with Hayley sharing lead vocals with Rivers Cuomo." }],
  "^Teenagers": [
    { label: "Wikipedia — the soundtrack", url: "https://en.wikipedia.org/wiki/Jennifer%27s_Body_(soundtrack)" },
    { label: "Rolling Stone — live version", url: "https://www.rollingstone.com/music/music-news/hayley-williams-jennifers-body-teenagers-live-1235315329/" },
    { label: "Uproxx", url: "https://uproxx.com/indie/hayley-williams-teenagers-jennifers-body" },
    { note: "Reports say “Teenagers” is an original song Hayley wrote and recorded for the Jennifer's Body soundtrack (not a cover, and not the My Chemical Romance song of the same name), and that she first played it live in 2025." }],
  "Hallelujah was supposed": [
    { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Hallelujah_(Paramore_song)" },
    { label: "Paramore Wiki", url: "https://paramore.fandom.com/wiki/Hallelujah" },
    { note: "Could not find an interview or official source for the claim that it was meant for the first album; it appears only on fan wikis. The song was Riot!'s second single (30 July 2007, per a mirror of Wikipedia)." }],
  "Tonight Show Performances": [
    { label: "Punknews — “Ignorance” on Conan", url: "https://www.punknews.org/amp/35381/videos-paramore-ignorance-live-on-conan-obrien" },
    { note: "The 2009 appearance was on Conan O'Brien's run of The Tonight Show (28 September 2009 per a concert listing, “Ignorance”; Rolling Stone also mentions a Monday Tonight Show performance around then). Nothing turned up confirming a “Brick By Boring Brick” performance there." }],
  "No Doubt": [
    { label: "Wikipedia — 2009 Summer Tour", url: "https://en.wikipedia.org/wiki/2009_Summer_Tour" },
    { label: "Spin", url: "https://www.spin.com/2009/02/no-doubt-announce-tour-dates-paramore/" },
    { label: "Punknews", url: "https://www.punknews.org/article/32026" },
    { label: "TicketNews", url: "https://www.ticketnews.com/2009/01/no-doubt-tour-announces-paramore-as-special-guest-for-summer-2009" },
    { note: "Reports: No Doubt's first tour in years, 2 May–12 August 2009, 57 North American shows, with Paramore as the main support and other openers on some dates." }],
  "Remix EP": [
    { label: "Alt Press", url: "https://www.altpress.com/?p=76435" },
    { label: "Paramore Wiki", url: "https://paramore.fandom.com/wiki/Ain%27t_It_Fun" },
    { label: "DIY — the Dutch Uncles remix", url: "https://diymag.com/news/listen-dutch-uncles-remix-paramores-aint-it-fun" },
    { note: "The Ain't It Fun Remixes EP came out 24 June 2014: the radio edit plus Dutch Uncles, Kye Kye and Smash Mode remixes." }],
  "Parahoy": [
    { label: "Pollstar — the 2014 announcement", url: "https://news.pollstar.com/2013/08/23/paramore-caribbean-parahoy/" },
    { label: "DIY — second edition", url: "https://diymag.com/news/paramore-announce-second-edition-of-parahoy-cruise" },
    { label: "Louder — lineup", url: "https://www.loudersound.com/news/paramore-confirm-cruise-lineup" },
    { label: "BroadwayWorld — 2018 return", url: "https://www.broadwayworld.com/bwwtv/article/Paramore-Returns-to-Shore-After-Sold-Out-PARAHOY-Cruise-20180410" },
    { label: "AntiMusic — Aaron Weiss joins, 2018", url: "https://www.antimusic.com/news/18/April/11Paramore_Joined_by_mewithoutYous_Aaron_Weiss_During_Cruise.shtml" },
    { note: "Three Parahoy sailings, with the concert-cruise company Sixthman: 2014 and March 2016 (Norwegian Pearl, from Miami) and the 2018 “Deep Search” edition, which most coverage places on the Norwegian Jade — sources disagree on the 2018 ship and on the 2016 length." }],
  "Mammoth City": [
    { label: "Cross Rhythms", url: "https://crossrhythms.co.uk/articles/news/Mammoth_City_Messengers/12346/p1" },
    { note: "The one source found describes Mammoth City Messengers as seven comics plus three companion albums, created by Jeremy Bose and Matt Bronleewe; it does not mention Hayley, so her role comes only from the iceberg and the band's own accounts." }],
  "Everything Is Emo": [
    { label: "The FADER", url: "https://www.thefader.com/2022/04/29/hayley-williams-paramore-bbc-podcast-everything-is-emo" },
    { label: "Rolling Stone", url: "https://www.rollingstone.com/music/music-news/hayley-williams-everything-is-emo-podcast-1344769/" },
    { label: "The Line of Best Fit", url: "https://thelineofbestfit.com/news/latest-news/hayley-williams-launches-new-music-podcast-everything-is-emo" },
    { note: "A 20-part BBC Sounds series Hayley hosts, launched in late April 2022; Rolling Stone UK reports that BBC Sounds approached her with the pitch." }],
  "^Kiss Off$": [
    { label: "Wikipedia — Hayley Williams", url: "https://en.wikipedia.org/wiki/Hayley_Williams" },
    { note: "Wikipedia describes Kiss-Off as an online beauty and music series Hayley launched in 2015; Nothing turned up tying it to Jeremy Davis's departure." }],
  "Zac.s Film": [
    { label: "The FADER — “Told You So” video", url: "https://www.thefader.com/2017/05/03/paramore-told-you-so-music-video" },
    { label: "AntiMusic — “Fake Happy” video", url: "https://antimusic.com/news/17/November/21Paramore_Release_Zac_Farro_Directed_Fake_Happy_Video.shtml" },
    { note: "The iceberg itself describes “Zac's film” as a collection of polaroids of the band taken on his camera over six or seven years — not a movie. Separately, the sources show he directed Paramore's “Told You So” (2017, with Aaron Joseph) and “Fake Happy” (2017, shot on 35mm) videos." }],
  "MTV Cribs": [
    { note: "Could not find an MTV Cribs episode listing for Paramore or Hayley. The fan archive has a clip titled “Paramore Cribz - Hayley's House” (see the event page), which may be what the iceberg means; searches did turn up a 2009 MTV Unplugged taping." }],
  "TRL": [
    { label: "AOL/People — Hayley on how TRL worked", url: "https://www.aol.com/paramores-hayley-williams-explains-trl-100000257.html" },
    { note: "A People photo caption says Damien Fahey and Rihanna interviewed Paramore on TRL in 2007; No transcript or video of that interview turned up." }],
  "Hard Rock Cafe": [
    { label: "Look to the Stars — Hard Rock memorabilia donation", url: "https://www.looktothestars.org/news/10916-paramores-hayley-williams-kicks-off-hard-rocks-pinktober-campaign" },
    { note: "Could not confirm the fan's sighting of “Now” video costumes at a Hard Rock; the only Hard Rock link found is Hayley's 2013 donation of a “Still Into You” outfit and bicycle to the Hollywood cafe's collection." }],
  "Hamburg": [
    { label: "Wikipedia — After Laughter Tour", url: "https://en.wikipedia.org/wiki/After_Laughter_Tour" },
    { note: "The tour list found has a Hamburg open-air date on 3 July 2017; No review turned up, so it can't be said whether that is the show the iceberg means." }],
  "^Elke": [
    { label: "Nylon", url: "https://www.nylon.com/entertainment/elke-divine-urge-hayley-williams" },
    { label: "No Country for New Nashville — Bonnaroo 2025", url: "https://nocountryfornewnashville.com/2025/05/04/bonnaroo-2025-artist-spotlight-elke/" },
    { note: "Concert listings show Elke (Kayla Graninger, a Nashville singer-songwriter) on bills with Paramore in Brazil in March 2023; Could not confirm whether she toured as part of the band or as support, so treat “toured with the band” on the Big Man, Little Dignity song page as unconfirmed." }],
  "Novel American": [
    { label: "Wikipedia — Josh Farro", url: "https://en.wikipedia.org/wiki/Josh_Farro" },
    { note: "The sources found say Novel American was a band Josh Farro formed after leaving Paramore in 2010, with Zac described as part of it in one of them; No link to Taylor York turned up." }],
  "Self-Titled leaked": [
    { label: "Wikipedia — Paramore (album)", url: "https://en.wikipedia.org/wiki/Paramore_(album)" },
    { note: "No report of a leak turned up. What the sources do show is a planned four-day vinyl stream from 1 April 2013 (one side a day) before the 5 April release." }],
  "Self-titled Cover Change": [
    { label: "Stereogum", url: "https://stereogum.com/2206144/paramore-change-the-cover-of-their-2013-self-titled-album/news" },
    { label: "Loudwire", url: "https://loudwire.com/paramore-officially-change-self-titled-album-cover-new-artwork/" },
    { label: "Kerrang!", url: "https://www.kerrang.com/paramore-have-changed-their-2013-self-titled-album-cover" },
    { label: "Louder", url: "https://www.loudersound.com/news/paramore-change-cover-art-for-self-titled-2013-album" },
    { note: "Reports date the swap to mid-November 2022 on streaming services; none of the coverage found gives an official reason." }],
  "Doll Limbs": [
    { label: "Wikipedia — Flowers for Vases / Descansos", url: "https://en.wikipedia.org/wiki/Flowers_for_Vases_/_Descansos" },
    { label: "Stereogum — the album announcement", url: "https://stereogum.com/2115221/hayley-williams-announces-new-album-flowers-for-vases-descansos-out-tonight/news" },
    { note: "No song called “Doll Limbs” turned up. The sources do describe a teaser campaign before the album in which Hayley mailed doll limbs to fans with a note asking them to plant them." }],
  "Paramore name origin": [
    { label: "American Songwriter", url: "https://americansongwriter.com/behind-the-band-name-paramore/" },
    { label: "Songfacts", url: "https://www.songfacts.com/facts/paramore" },
    { note: "The sources agree on the story: the name came from the maiden name of the mother of an early member, and the band kept it after learning that “paramour” means secret lover; they differ on which member." }],
  "Fan Club": [
    { label: "Paramore Wiki — paramore.net", url: "https://paramore.fandom.com/wiki/Paramore.net" },
    { label: "Fanlore — Paramore", url: "https://fanlore.org/wiki/Paramore" },
    { note: "Fanlore says “Decode” was released on 1 October 2008 on the Paramore Fan Club site and on Stephenie Meyer's website; a fan wiki says paramore.net did not exist until the Riot! era." }],
  "UStream": [
    { note: "Nothing turned up on the band's Ustream broadcasts; the fan archive has clips from their old webisodes that may overlap (see Videos)." }],
  "Conspiracy": [
    { label: "Louder", url: "https://www.loudersound.com/bands-artists/hayley-williams-on-first-paramore-song-she-wrote" },
    { note: "Reports of Hayley's 2025 interview say “Conspiracy” was the first song the band wrote together, from a poem she brought to practice; No source linking it to an Atlantic demo turned up." }],
  "Love.s Not a Competition": [
    { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Love%27s_Not_a_Competition_(But_I%27m_Winning)" },
    { label: "Alt Press — Paramore's best covers", url: "https://www.altpress.com/?p=38810" },
    { label: "Gigwise — the “Use Somebody” cover", url: "https://www.gigwise.com/news/52353/Paramore-Cover-Kings-Of-Leons-Use-Somebody" },
    { note: "The Kaiser Chiefs cover was reported as recorded for BBC Radio 1's Live Lounge on 1 February 2008." }],
  "Video Game Appearances": [
    { label: "Rock Band Wiki — Paramore", url: "https://rockband.fandom.com/wiki/Paramore" },
    { label: "The Loadout — Rock Band 4 DLC", url: "https://www.theloadout.com/rock-band-4-paramore-this-is-why-dlc" },
    { label: "Wikipedia — Misery Business", url: "https://en.wikipedia.org/wiki/Misery_Business" },
    { note: "Per Wikipedia and fan wikis: “Misery Business” is playable in Guitar Hero World Tour (where Hayley is a playable character, unlocked by singing it) and in Rock Band 3, and it appears in Saints Row 2; a 2023 report says it and “This Is Why” came to Rock Band 4 as DLC — Not checked against an official source." }],
  "Guitar Hero": [
    { label: "Wikipedia — Misery Business", url: "https://en.wikipedia.org/wiki/Misery_Business" }],
  "PFA": [
    { label: "Kerrang! — the second EP", url: "https://www.kerrang.com/paramores-hayley-williams-releases-new-solo-ep-reschedules-tour-dates-for-2021" },
    { label: "mxdwn — Petals for Armor II", url: "https://music.mxdwn.com/2020/04/21/news/hayley-williams-releases-petals-for-armor-ii-ep-featuring-songs-from-second-half-of-her-debut-album/" },
    { label: "Far Out", url: "https://faroutmagazine.co.uk/hayley-williams-petals-for-armor-ii/" },
    { note: "Petals for Armor I came out 6 February 2020 (five songs); Petals for Armor II on 21 April 2020 (“Dead Horse”, “My Friend”, “Over Yet”, “Roses/Lotus/Violet/Iris”, “Why We Ever”); the album followed on 8 May 2020 with the two EPs plus five new songs." }],
  "Sunday Sessions": [
    { note: "Reports date the first “Sunday Session” to mid-March 2020: a stripped-down “Leave It Alone” shot on an iPhone, with Joey Howard on bass; Hayley said more would follow." }],
  "Gersberms": [
    { label: "Tubefilter", url: "https://tubefilter.com/2012/11/14/chris-hardwick-waco-valley-germsberms-nerdist/" },
    { label: "Bloody Disgusting", url: "https://bloody-disgusting.com/news/3203945/ermahgerd-theres-an-official-gersberms-music-video/" },
    { label: "GeekDad", url: "https://geekdad.com/2012/11/gersberms-video-from-hard-n-phirm/" },
    { note: "A November 2012 parody of the “Ermahgerd” meme by Hard 'n Phirm (Chris Hardwick and Mike Phirman); reports say Hayley sings the chorus and the Muppets' Swedish Chef has a cameo." }],
  "Stop This Song": [
    { label: "Songfacts", url: "https://www.songfacts.com/facts/paramore/stop-this-song-lovesick-melody" },
    { label: "KIIS — Avril on Hayley's letter", url: "https://ryan.kiisfm.com/content/2022-12-14-avril-lavigne-reveals-hayley-williams-wrote-her-a-thank-you-letter/" },
    { note: "Avril Lavigne said Hayley wrote her a thank-you letter after both played When We Were Young in Las Vegas in October 2022. No source for the “Avril Lavigne” working title turned up — it comes only from the iceberg." }],
  "Touring Members": [
    { label: "We Got This Covered — current members", url: "https://wegotthiscovered.com/music/all-current-paramore-members/" },
    { note: "Sources name Joey Howard (bass), Logan MacKenzie (rhythm guitar and keys, from the first After Laughter tour show on 10 May 2017), Joseph Mullen (percussion) and later Brian Robert Jones on guitar; the dates vary between sources." }],
  "Lindsey Byrnes": [
    { label: "Live Nation — Behind the Lens", url: "https://livenation.com/exclusives/207/behind-lens-lindsey-byrnes" },
    { label: "MPB interview", url: "https://www.mpb.com/en-us/content/interviews/mpb-meets-music-and-lifestyle-photographer-lindsey-byrnes" },
    { label: "Kerrang! — live gallery", url: "https://kerrang.com/exclusive-paramore-live-gallery" },
    { note: "A Los Angeles music photographer who has shot Paramore on tour and for press; her photos are copyrighted, so this page only links to them." }],
  "Fan Names": [
    { label: "TV Tropes — Paramore trivia", url: "https://tvtropes.org/pmwiki/pmwiki.php/Trivia/Paramore" },
    { note: "Sources do not agree on one name: one outlet calls the fans the “Parafamily” and other pages list further nicknames and hashtags; Could not confirm a single official term." }],
  "Black people love Paramore": [
    { label: "Okayplayer — Hayley on Paramore's Black fandom", url: "https://www.okayplayer.com/hayley-williams-on-being-influenced-by-solange-erykah-badu-paramores-black-fandom/477731" },
    { label: "Vice — how Paramore captured Black fans", url: "https://vice.com/en/article/how-paramore-captured-hearts-black-fans" },
    { label: "Nylon", url: "https://nylon.com/articles/black-people-loving-paramore" }],
  "Meet and Greets": [
    { label: "Alt Press — an earlier tour's meet-and-greet contest", url: "https://www.altpress.com/?p=87805" },
    { note: "No official VIP or meet-and-greet listing turned up — most results are resellers — so treat current packages with caution and check the band's own channels." }],
  "Concert Mashups": [
    { label: "Alt Press — “Hard Times” + “Heart of Glass”", url: "https://www.altpress.com/?p=54098" },
    { label: "Uproxx — Heart of Glass, iHeart 2024", url: "https://uproxx.com/indie/paramore-blondie-heart-of-glass-cover-iheart-radio-festival-2024" },
    { label: "Louder — “Burning Down the House”", url: "https://www.loudersound.com/news/listen-to-paramores-cover-of-talking-heads-classic-burning-down-the-house" },
    { label: "Consequence — David Byrne covers “Hard Times”", url: "https://concerts.consequence.net/articles/david-byrne-cover-paramore-hard-times-radio-city-music-hall-watch" },
    { note: "Reports: the “Hard Times” + “Heart of Glass” mashup was played at London's O2 in January 2018 and again at iHeartRadio 2024; the “Burning Down the House” cover is for A24's Stop Making Sense tribute, with a live debut on 9 May 2024 in Paris opening for Taylor Swift." }],
  "Hayley wrote Fences": [
    { label: "Songfacts — Fences", url: "https://www.songfacts.com/facts/paramore/fences" },
    { note: "Hayley herself says she wrote it on the SAT at Belmont University the day after coming back from a Japan tour (her 2025 podcast conversation, on the Now page); outside sources found only repeat it from a fan wiki. Credits list Hayley, Josh Farro and David Bendeth; Riot! was released 12 June 2007, and in an October 2007 interview Hayley said the song is about dealing with fame." }],
  "Misguided Ghosts": [
    { note: "No outside source turned up. The “Behind Brand New Eyes” documentary (on the Brand New Eyes page) has a band member saying they played a magazine on the record; the auto-generated transcript doesn't say who." }],
  "Robert Pattinson": [
    { label: "Far Out", url: "https://faroutmagazine.co.uk/hayley-williams-robert-pattinson-interviewed-each-other/" },
    { label: "Gigwise", url: "https://www.gigwise.com/news/52584/Hayley-Williams-I-Had-Candle-Lit-Meeting-With-Robert-Pattinson" },
    { note: "Reports say the two interviewed each other for a MySpace “Artist on Artist” video filmed in 2008 to promote the first Twilight film (not 2009), a conversation of about six minutes." }],
  "Bedroom Intruder": [
    { label: "Gigwise", url: "https://www.gigwise.com/photos/58099/7/Paramores-Hayley-Williams-New-Found-Glory-Cover-Bed-Intruder-Song" },
    { label: "AceShowbiz", url: "https://www.aceshowbiz.com/news/view/00035002.html" },
    { note: "Reports say Hayley recorded a pop-punk cover of “Bed Intruder Song” with New Found Glory's Jordan Pundik and Relient K's Ethan Luck at Ethan's house in Nashville; Gigwise's coverage is dated 27 August 2010." }],
  "Then Came To Kill": [
    { label: "Metal Music Archives — The Fiancée", url: "https://www.metalmusicarchives.com/album/the-chariot/the-fiancee" },
    { note: "The track is on The Chariot's second album The Fiancée (2007), credited as featuring Hayley — not on Wars and Rumors of Wars." }],
  "dead butterfly": [
    { label: "Far Out — the cover uncovered", url: "https://faroutmagazine.co.uk/how-a-butterfly-defined-paramore-on-brand-new-eyes/" },
    { label: "Rolling Stone — the album announcement", url: "https://www.rollingstone.com/music/music-news/paramore-announce-brand-new-eyes-out-september-29th-107221/" },
    { note: "Per a pre-release MTV interview, Hayley said it was a butterfly she found in her driveway; none of the sources found name the species." }],
  "All I Wanted took": [
    { label: "Rolling Stone — the live debut", url: "https://www.rollingstone.com/music/music-news/paramore-all-i-wanted-live-debut-when-we-were-young-festival-1234616831/" },
    { label: "The Line of Best Fit", url: "https://thelineofbestfit.com/news/paramore-give-all-i-wanted-its-live-debut-at-when-we-were-young-festival" },
    { label: "Vice — from biggest fear to setlist staple", url: "https://www.vice.com/en/article/how-hayley-williams-took-all-i-wanted-from-her-biggest-fear-to-paramore-setlist-staple/" },
    { note: "Reports date the live debut to 23 October 2022 at When We Were Young in Las Vegas; Hayley had said the vocal was too hard and she was scared of it." }],
  "All I Wanted with Billie": [
    { label: "Far Out", url: "https://faroutmagazine.co.uk/billie-eilish-performs-all-i-wanted-with-paramore-at-los-angeles-show/" },
    { note: "Billie Eilish joined Paramore for “All I Wanted” at their Los Angeles show in July 2023." }],
  "Z&T": [
    { note: "Could not confirm this from an outside source; the fan archive has two uploads titled “Z & T - Baby Come Back 2 Me” (see Videos)." }],
  "Paramore 2001": [
    { note: "No source for a 2001 band named Paramore or for Hayley buying the rights to the name turned up; check the iceberg video's own source." }],
  "Grudges is about Zac": [
    { label: "Louder — Zac returns", url: "https://www.loudersound.com/news/paramore-zac-farro-return-studio-album" },
    { label: "No Country for New Nashville — recording with Zac, 2016", url: "https://nocountryfornewnashville.com/2016/06/21/paramore-recording-new-album-with-justin-meldal-johnsen-former-drummer-zac-farro/" },
    { note: "Reports say Zac was confirmed back as Paramore's drummer on 2 February 2017; the song-meaning claim comes from Hayley's own Apple Music interview (on the After Laughter page)." }],
  "Live ?Journal": [
    { label: "Hayley's May 2007 LiveJournal reply (repost)", url: "https://www.drivenfaroff.com/2007/05/31/paramore-not-happy-about-kerrang-article/" },
    { note: "The band used its LiveJournal to answer press directly: in May 2007 Hayley posted a reply to a Kerrang! cover story that the band disliked. The original LiveJournal page is not linked because no web archive could be reached." }],
  "^HalfNoise$": [
    { label: "Spin", url: "https://www.spinmagazine.com/2012/09/ex-paramore-drummer-halfnoise-zac-farro/" },
    { label: "PopMatters", url: "https://www.popmatters.com/the-velvety-face-of-halfnoises-zac-farro-2495395925.html" },
    ],
  // Batch 8 — each link opened/fetched and the claim checked on the page; anything the sources did not support is left out or flagged.
  "^The Factory$": [
    { label: "American Songwriter", url: "https://americansongwriter.com/behind-the-band-name-paramore/" },
    { note: "American Songwriter describes The Factory as a funk cover band Hayley was in before Paramore, with Jeremy Davis and Kimee Read. Other sources differ on the lineup, and none found gives dates." }],
  "Running Out Of Time": [
    { label: "Rolling Stone", url: "https://www.rollingstone.com/music/music-news/paramore-release-running-out-of-time-music-video-1234681071/" },
    { label: "NME", url: "https://www.nme.com/news/music/paramore-vivid-surreal-video-running-out-time-3400296" },
    { label: "Uproxx", url: "https://uproxx.com/indie/paramore-running-out-of-time-video" },
    { label: "DIY", url: "https://diymag.com/news/paramore-running-out-of-time-video" },
    { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Running_Out_of_Time_(song)" },
    { note: "Coverage describes Hayley slipping through a guitar case that works as a portal, away from studio instruments that have come to life and grown huge, into a surreal Alice-in-Wonderland-like world; the video is credited to director Ivanna Borin. No article that explains the references one by one turned up, so that reading is the reviewers', not the band's." }],
  "Twilight|I Caught Myself": [
    { label: "Wikipedia — “Decode”", url: "https://en.wikipedia.org/wiki/Decode_(song)" },
    { label: "Rolling Stone — Hayley on Twilight (2008)", url: "https://www.rollingstone.com/music/news/hayley-williams-on-twilight-i-connected-to-it-immediately-20081124" },
    { label: "Songfacts — “Decode”", url: "https://www.songfacts.com/facts/paramore/decode" },
    { note: "Both “Decode” and “I Caught Myself” are on the 2008 Twilight soundtrack and were recorded in Nashville in September 2008, per Wikipedia. The claim that “I Caught Myself” was written earlier, on the Riot! tour, and only later matched a line in New Moon, comes from a fan wiki quoting Hayley — treat it as secondhand." }],
  "^Colour Me In$": [
    { label: "Spin", url: "https://www.spinmagazine.com/2021/04/hayley-williams-shares-cover-of-broadcasts-colour-me-in/" },
    { label: "DIY", url: "https://diymag.com/2021/04/23/hayley-williams-cover-broadcast-colour-me-in" },
    { label: "The Line of Best Fit", url: "https://www.thelineofbestfit.com/news/latest-news/hayley-williams-releases-cover-of-broadcasts-colour-me-in" },
    { label: "Far Out", url: "https://faroutmagazine.co.uk/hayley-williams-covers-broadcast-with-colour-me-in/" },
    { note: "It is a cover of Broadcast's song (the original opens their 2003 album Haha Sound). Reports date the official single to 23 April 2021; it had first appeared on a 24-hour Bandcamp benefit compilation in 2020." }],
  "Self-Titled Sessions": [
    { label: "Wikipedia — Paramore (album)", url: "https://en.wikipedia.org/wiki/Paramore_(album)" },
    { label: "Mix Online", url: "https://www.mixonline.com/recording/paramore-comes-back-rockin-new-album-366395" },
    { label: "Spin — fourth album finished (2012)", url: "https://spinmagazine.com/2012/11/paramore-finish-recording-fourth-album-2013/" },
    { note: "Recording ran through 2012 and the band said it had finished in November 2012; Justin Meldal-Johnsen produced and Taylor York co-produced, and the album came out in April 2013." }],
  "Hunter Lamb in the Playing God": [
    { label: "Billboard — the video", url: "https://www.billboard.com/music/music-news/paramores-hayley-williams-plays-with-poison-in-playing-god-950800" },
    { label: "Wikipedia — “Playing God”", url: "https://en.wikipedia.org/wiki/Playing_God_(song)" },
    { note: "Could not confirm this one: the coverage and the Wikipedia article describe the video's premise but nothing turned up that names Hunter Lamb, so it stays an iceberg-only claim." }],
  "JERMBeats": [
    { label: "Nashville Scene — Post Trap Entertainment", url: "https://www.nashvillescene.com/music/nashvillecream/jeremy-davis-post-trap-entertainment-looks-at-new-business-models/article_f5baac85-143b-5fad-9e20-74780a66cd48.html" },
    { note: "Post Trap Entertainment is Jeremy Davis's own label; the article covers its business model. A full solo discography was not verified." }],
  // Personal-life entries (kept at the user's request). Only what the person said publicly or reputable outlets reported; where nothing reliable exists the entry says so and the claim is not repeated.
  "Taylor and Hayley have been dating": [
    { label: "ET Online", url: "https://www.etonline.com/paramores-hayley-williams-and-taylor-york-confirm-they-are-officially-dating-191785" },
    { label: "Loudwire", url: "https://loudwire.com/paramore-hayley-williams-dating-taylor-york-relationship/" },
    { note: "Hayley and Taylor confirmed they were dating in a September 2022 interview with The Guardian and declined to say more. The reports give no start date, so “since 2018” is unconfirmed." }],
  "Fans threw condoms": [
    { label: "Bustle", url: "https://www.bustle.com/p/hayley-williams-opened-up-about-the-sexism-she-faced-on-warped-tour-22881907" },
    { label: "BuzzFeed", url: "https://www.buzzfeed.com/tatianatenreyrowhitlock/hayley-williams-recalls-sexist-incident" },
    { label: "2011 interview — the band on floating condoms", url: "https://www.youtube.com/watch?v=ikTbfU7YIQA" },
    { label: "2022 radio interviews — Hayley on Warped Tour", url: "https://www.youtube.com/watch?v=TyWB4qMkPuY" },
    { label: "2020 chat with Phoebe Bridgers — Hayley mentions it again", url: "https://www.youtube.com/watch?v=1mtsutv7dBY" },
    { note: "Hayley told this herself: on Warped Tour 2006, when Trojan was a sponsor, condoms were thrown at her, and one hit her mid-set. In a July 2011 interview the band jokes about condoms at shows (including blown-up ones floating at you, “especially on Warped Tour”), and in a 2022 radio interview Hayley says things like condoms were thrown at her on Warped Tour when she was younger. The written outlets above retell her interview, so the original is the best source for her exact words." }],
  "all about Chad": [
    { label: "Rolling Stone — review of Petals for Armor", url: "https://www.rollingstone.com/music/music-album-reviews/hayley-williams-petals-for-armor-996140/" },
    { label: "Rolling Stone — interview", url: "https://www.rollingstone.com/music/music-features/hayley-williams-petals-for-armor-interview-968642/" },
    { label: "Kerrang! — review", url: "https://kerrang.com/album-review-hayley-williams-petals-for-armor" },
    { note: "Rolling Stone reports she married New Found Glory's Chad Gilbert in 2016 and they divorced about a year later, and Kerrang! reads one Petals for Armor song as about the divorce. Which songs on the iceberg's list are about him is the video's reading — no source that confirms that mapping turned up." }],
  "Two idiots intrude": [
    { note: "No report of this and nothing from Hayley herself turned up, so it stays an unconfirmed iceberg claim." }],
  "Taylor got doxxed": [
    { note: "No reporting that this happened turned up, so it stays an unconfirmed iceberg claim. The site does not repeat any personal details." }],
  "Katy Perry lost": [
    { note: "No reliable source found for this claim, and it is about private matters of named people, so the site does not repeat the details. Treat it as an unverified rumour from the iceberg video." }],
  "Taylor.s Ex": [
    { note: "No reliable source found; it concerns a private matter. The member pages mention it only as a fan theory. Unverified." }],
  "Born For This competition": [
    { label: "Fuse TV interview, March 2007 (fan archive)", url: "https://www.youtube.com/watch?v=X-7QyODIX2E" },
    { note: "Confirmed by the band in a March 2007 Fuse TV interview from the Riot! sessions: after posts on their LiveJournal the label allowed a national contest; one grand-prize winner (Mary, who is afraid of flying and came by train) and four runners-up from driving distance recorded group vocals at the studio, after a warm-up and burgers. The video doesn't name the song, but a last-written song about the fans fits “Born for This”." }],
  "Hidden Corporate Messages": [
    { label: "ParamoreFans.com interview, 14 July 2011", url: "https://www.youtube.com/watch?v=ikTbfU7YIQA" },
    { note: "Confirmed as a joke, not a real name: in the July 2011 interview the band recalls being at Taco Bell trying to think of band names, and a worker suggesting “Hidden Corporate Messages” — with “Fast Food Junkies” as another idea." }],
  "Josh Farro.s homophobic rant": [
    { label: "The A.V. Club", url: "https://avclub.com/paramore-members-address-homophobic-comments-made-by-fo-1845530128" },
    { label: "Stereogum", url: "https://stereogum.com/2104236/paramore-hayley-williams-josh-farro-homophobia-response/news" },
    { label: "SPIN", url: "https://www.spinmagazine.com/2020/10/hayley-williams-rips-former-paramore-bandmate-over-homophobic-comments/" },
    { note: "Confirmed as reported: in late October 2020 a Facebook comment attributed to Josh Farro, comparing homosexuality to pedophilia, went viral; on 28 October Hayley tweeted that there's a reason only three people are left in Paramore, without naming him, and the band posted a statement backing LGBTQ+ fans. Zac Farro then distanced himself in his own letter. Several outlets call the screenshot “alleged” or partly redacted. The guide does not repeat the comment's wording." }],
  "Fruits Hair Lab": [
    { label: "Rolling Stone", url: "https://www.rollingstone.com/music/music-news/hayley-williams-responds-salon-toxic-workplace-allegations-1235133021/" },
    { label: "Stereogum", url: "https://stereogum.com/2283831/paramores-hayley-williams-responds-to-toxic-workplace-accusations/news" },
    { note: "Reported in October 2024: former employees of Fruits Hair Lab, the Nashville salon Hayley co-founded, made allegations in comments under a Good Dye Young post; Hayley replied in the comments that she co-founded and funded the salon but has no job title there, that a manager runs it, and that staff would get unlimited mental-health services from 1 November. Only her reply and the commenters' own words are public; No independent investigation or outcome turned up, so this stays an unresolved allegation." }],
  "In The Mourning is about": [
    { label: "Wikipedia — In the Mourning", url: "https://en.wikipedia.org/wiki/In_the_Mourning" },
    { label: "Paramore Wiki — In the Mourning", url: "https://paramore.fandom.com/wiki/In_the_Mourning" },
    { label: "SPIN, January 2011 — Hayley on Paramore's past", url: "https://www.spin.com/2011/01/hayley-williams-opens-about-paramores-past/" },
    { note: "Reported: the song surfaced as a demo in January 2011, right after the Farro brothers left, and came out on the Singles Club EP in December 2011. Hayley's own description is general — letting a part of you go or die and the struggle of doing so — and she said she didn't want it taken as a new Paramore song; the Farro reading is the widely repeated interpretation, not her statement." }],
  "Paramore is a band": [
    { label: "Gigwise — “Paramore Is A Band”", url: "https://www.gigwise.com/features/40708/Paramore-Is-A-Band" },
    { note: "The slogan matches a real theme from 2008: Gigwise reports the band pushing back on the “Hayley Williams Show” framing in the press, with Josh Farro saying it isn't just her band. Could not confirm the T-shirt detail from any source, so treat the shirts as the video's claim." }],
  "Hayley is a drummer": [
    { label: "Fuse “On the Record” (2009)", url: "https://www.youtube.com/watch?v=0o8Y1b2Ejq0" },
    { label: "Good Hang with Amy Poehler", url: "https://www.youtube.com/watch?v=8OEkf1Z7rV8" },
    { note: "Hayley's own accounts: in the 2009 Fuse interview she says that when she started in music she wanted to be the drummer, as far from the front as possible; on Good Hang (2025) she says she learned drums at church after seeing Zac Hanson on TV, and in the Bialik podcast that she played drums as a child." }],
  "Hayley left the band": [
    { label: "Behind the Brand (2017)", url: "https://www.youtube.com/watch?v=EzBbcfmHQvM" },
    { label: "Apple Music — After Laughter interview", url: "https://www.youtube.com/watch?v=5OrHcukLLyY" },
    { note: "Hayley says she was ready to quit around 2015 and that Taylor told her it was her choice; she has described the period as depression, not a formal departure announcement, and the band kept working. “Left the band” is the iceberg's shorthand for this." }],
  "Taylor was an original member": [
    { label: "Billboard fan Q&A — Taylor on how he joined", url: "https://www.youtube.com/watch?v=c_5npxCIjqg" },
    { note: "Mixed sources: Taylor says he and the Farros had a middle-school band that faded, and that he became an official member about a year before the 2010 Q&A; Josh Farro's 2010 statement, as retold by fans, described him as part of an original lineup. The guide treats him as an early friend who joined formally later." }],
  "Misery Business, Ignorance, and Playing God are all about Josh": [
    { label: "Fuse “On the Record” (2009)", url: "https://www.youtube.com/watch?v=0o8Y1b2Ejq0" },
    { note: "Hayley herself has said she and Josh dated for about three years and that Brand New Eyes songs came from that breakup and the band's strain (Fuse, 2009), and that “Misery Business” was written about a girl Josh dated (Vulture, 2020, as quoted by fans). The Ignorance and Playing God readings are fan and press interpretation, not a track-by-track statement." }]
});

// Round 2 (2026-11): pages found by a title check against English Wikipedia and the Paramore Fandom wiki (the page must exist and match the entry); notes only where a search turned up something specific or found nothing.
Object.assign(ICE_EXT, {
  "^Part II is a sequel": [{ label: "Paramore Wiki: Part II", url: "https://paramore.fandom.com/wiki/Part_II" }, { label: "Wikipedia: Paramore (album)", url: "https://en.wikipedia.org/wiki/Paramore_(album)" },
    { note: "A search summary of the album's coverage says Hayley told fans the band wanted “Let The Flames Begin” to have a sequel; the original post was not located, so treat the wording as reported." }],
  "^Part II wasn't supposed": [{ label: "Paramore Wiki: Part II", url: "https://paramore.fandom.com/wiki/Part_II" },
    { note: "No outside source was found for “wasn't supposed to be a sequel”; the sources that mention it say the band wanted a sequel to the Riot! song." }],
  "^This Is Why is their only title track": [{ label: "Wikipedia: This Is Why (song)", url: "https://en.wikipedia.org/wiki/This_Is_Why_(song)" }],
  "^Still Into You Studio Vocals": [{ label: "Wikipedia: Still Into You", url: "https://en.wikipedia.org/wiki/Still_Into_You" }],
  "^The meaning of The Only Exception": [{ label: "Wikipedia: The Only Exception", url: "https://en.wikipedia.org/wiki/The_Only_Exception" }, { label: "Paramore Wiki: The Only Exception", url: "https://paramore.fandom.com/wiki/The_Only_Exception" }],
  "^The Only Exception was originally an interlude": [{ label: "Wikipedia: The Only Exception", url: "https://en.wikipedia.org/wiki/The_Only_Exception" },
    { note: "No outside source was found for an earlier interlude version; Wikipedia and Songfacts list it as an ordinary Brand New Eyes track, released as the third single in February 2010." }],
  "^Petals For Armor and Flowers For Vases": [{ label: "Wikipedia: Petals for Armor", url: "https://en.wikipedia.org/wiki/Petals_for_Armor" }, { label: "Wikipedia: Flowers for Vases / Descansos", url: "https://en.wikipedia.org/wiki/Flowers_for_Vases_/_Descansos" }],
  "^Playing God is a sequel to Ignorance": [{ label: "Wikipedia: Playing God", url: "https://en.wikipedia.org/wiki/Playing_God" }, { label: "Wikipedia: Ignorance", url: "https://en.wikipedia.org/wiki/Ignorance_(song)" },
    { note: "A Wikipedia-based summary describes the Playing God video, not the song, as a sequel to the Ignorance video; no direct statement from the band was found." }],
  "^Brand New Eyes Title Track": [{ label: "Wikipedia: Brand New Eyes", url: "https://en.wikipedia.org/wiki/Brand_New_Eyes" },
    { note: "The album has no song called “Brand New Eyes”; the scrapped title song is listed under 7 Years in the Making on the B-sides page." }],
  "^Brand New Eyes - Original Names": [{ label: "Wikipedia: Brand New Eyes", url: "https://en.wikipedia.org/wiki/Brand_New_Eyes" }],
  "Cover References Brick By Boring Brick": [{ label: "Wikipedia: Brick by Boring Brick", url: "https://en.wikipedia.org/wiki/Brick_by_Boring_Brick" }, { label: "Wikipedia: Brand New Eyes", url: "https://en.wikipedia.org/wiki/Brand_New_Eyes" }],
  "^Celebrities for Misery Business": [{ label: "Wikipedia: Misery Business", url: "https://en.wikipedia.org/wiki/Misery_Business" }],
  "^The Scrapped Ain.t It Fun MV": [{ label: "Wikipedia: Ain't It Fun", url: "https://en.wikipedia.org/wiki/Ain't_It_Fun" }, { label: "Paramore Wiki: Ain't It Fun", url: "https://paramore.fandom.com/wiki/Ain't_It_Fun" }],
  "^Warped Tour .06 Bible Study": [{ label: "Wikipedia: Warped Tour", url: "https://en.wikipedia.org/wiki/Warped_Tour" }],
  "^Nardwuar$": [{ label: "Wikipedia: Nardwuar", url: "https://en.wikipedia.org/wiki/Nardwuar" },
    { note: "Searches turned up no page about a Nardwuar interview with the band, so the video itself is the only source." }],
  "^The Writing of Singles Club was streamed": [{ label: "Wikipedia: Singles Club (EP)", url: "https://en.wikipedia.org/wiki/Singles_Club_(EP)" }, { label: "Paramore Wiki: Singles Club EP", url: "https://paramore.fandom.com/wiki/Singles_Club_EP" }],
  "^The B Sides$": [{ label: "Paramore Wiki: The B-Sides", url: "https://paramore.fandom.com/wiki/The_B-Sides" }],
  "^Long Distance Call$": [{ label: "Paramore Wiki: Long Distance Call", url: "https://paramore.fandom.com/wiki/Long_Distance_Call" }],
  "^Taylor York was on Interiors Inc": [{ label: "Wikipedia: Taylor York", url: "https://en.wikipedia.org/wiki/Taylor_York" }, { label: "Paramore Wiki: Taylor York", url: "https://paramore.fandom.com/wiki/Taylor_York" }],
  "^Hayley wasn.t the original lead singer": [{ label: "Wikipedia: Paramore", url: "https://en.wikipedia.org/wiki/Paramore" }],
  "^Hayley Williams is good at singing": [{ label: "Wikipedia: Hayley Williams", url: "https://en.wikipedia.org/wiki/Hayley_Williams" }],
  "^You First was almost removed": [{ note: "No outside source was found for “almost removed”; the near-cut story that turned up in searches is about the title track “This Is Why”, which one report says was the last song added at Taylor York's urging." }],
  "^Past and current members": [{ label: "Wikipedia: Paramore", url: "https://en.wikipedia.org/wiki/Paramore" }],
  "^6 Studio Albums": [{ label: "Wikipedia: Paramore", url: "https://en.wikipedia.org/wiki/Paramore" }]
});
// Round 3 (2026-11): web searches; a link is kept only when the page is about the entry, and a note says so when searches found nothing or only part of the claim.
Object.assign(ICE_EXT, {
  "^That.s What You Get was originally a poem": [{ label: "Songfacts: That's What You Get", url: "https://www.songfacts.com/facts/paramore/thats-what-you-get" }, { label: "Paramore Wiki: That's What You Get", url: "https://paramore.fandom.com/wiki/That%27s_What_You_Get" },
    { note: "No outside source says it began as a poem; Songfacts has Josh Farro saying he wrote the music at home and Hayley wrote the lyrics, and credits go to Hayley Williams, Josh Farro and Taylor York." }],
  "^Halloween 2005": [{ label: "Last.fm: Paramore events 2005", url: "https://www.last.fm/zh/music/Paramore/+events/2005" },
    { note: "A Last.fm event list shows a show billed as Straylight Run with Paramore and Plain White T's at The Crowbar in State College in October 2005; no day is given, so Halloween itself is unconfirmed." }],
  "^Paramore- In The Street": [{ note: "No outside source was found for a Paramore recording of “In the Street”; it is a Big Star song that many bands cover, so check the video's own description." }],
  "^Hayley.s break from social media": [{ label: "Loudwire", url: "https://loudwire.com/hayley-williams-quitting-social-media/" }, { label: "UPROXX", url: "https://uproxx.com/indie/hayley-williams-leaving-social-media" }, { label: "Stereogum", url: "https://www.stereogum.com/?p=2163442" },
    { note: "Reports date the announcement to 8 October 2021: she said she was leaving personal social media after about a year of thinking about it; the band's own accounts stayed active. Her accounts were later cleared, and the exact date of that later wipe was not confirmed." }],
  "^Fame on TikTok": [{ label: "Alt Press: Hayley reacts to a Paramore TikTok trend", url: "https://www.altpress.com/?p=182231" }, { label: "JOE: TikTok and Misery Business", url: "https://www.joe.co.uk/entertainment/paramore-misery-business-362496" },
    { note: "Per JOE's headline, the band said TikTok helped convince them to play “Misery Business” again in 2022; no source that measures a TikTok-driven streaming jump for it was found." }],
  "^Paramore has a surprising amount of South American fans": [{ label: "24horas (Chile): sold out in under an hour", url: "https://www.24horas.cl/tendencias/espectaculos/en-menos-de-una-hora-paramore-agota-entradas-para-concierto-en-chile" }, { label: "Rolling Stone Brasil: São Paulo show", url: "https://rollingstone.com.br/noticia/paramore-eletriza-os-fas-em-sao-paulo/" }, { label: "Kerrang!: You First live from South America", url: "https://www.kerrang.com/watch-paramores-high-energy-live-video-of-you-first-from-south-america" },
    { note: "The March 2023 South American leg (Lima, Santiago, Buenos Aires, Rio, São Paulo, Bogotá) sold out fast; a Chilean outlet reports tickets going in under an hour, and Wikimetal notes the band's previous Brazil visit was 2014." }]
});
// Round 4 (2026-11): same rules. Entries that only restate something already researched on this site point to that page.
Object.assign(ICE_EXT, {
  "^The band was almost fired from the label": [{ label: "Wikipedia: Paramore", url: "https://en.wikipedia.org/wiki/Paramore" }, { label: "Hypebot: 360 deal & Farro's blog", url: "https://www.hypebot.com/360-deal-wonders-paramore-called-a-manufactured-product-of-a-major-label-by-former-memebers.md" }, { label: "The Punk Site: Farro brothers explain departure", url: "https://thepunksite.com/news/2010/12/23/farro-brothers-explain-departure-from-paramore-tells-the-backstory/" },
    { note: "Per Wikipedia the label thought the finished demos “were terrible” and the band was nearly dropped; Josh Farro's December 2010 blog (confirmed genuine by Alternative Press) says “Hallelujah” and “Here We Go Again” gave the band leverage. Atlantic's own side is not documented, and only Hayley was signed to the label." }],
  "^Post After Laughter Hiatus": [{ label: "Rolling Stone: Hayley Williams on the break and This Is Why", url: "https://www.rollingstone.com/music/music-features/hayley-williams-paramore-break-up-this-is-why-1234836791/" }, { label: "NME: Paramore on nearly splitting", url: "https://www.nme.com/news/music/paramore-discuss-nearly-split-kept-together-2055532" }],
  "^This Is Why is their only title": [{ label: "American Songwriter: the meaning behind “This Is Why”", url: "https://americansongwriter.com/the-meaning-behind-paramores-stark-post-hardcore-hit-this-is-why" }],
  "^Hayley.s Pink Razor Tattoo": [{ note: "No written source describing this tattoo turned up in searches, so the iceberg video is the source here; other tattoos are better documented (Alt Press covers her TCB lightning bolt, and a matching band tattoo from August 2011 is mentioned elsewhere)." }],
  "^MizBiz Disaster 2010": [{ note: "Searches found no outside page that uses the name “MizBiz” for a 2010 event." }],
  "^Barely Legal$": [{ label: "On this site: B-sides", url: "#bsides" }, { note: "Already covered on the B-sides page (lyrics posted on the band's LiveJournal, dated 4 February 2009); the idea that it became “Playing God” is a fan theory." }],
  "^Take Me Back$": [{ label: "On this site: B-sides", url: "#bsides" }, { note: "Ten seconds shown in the Final Riot! documentary, played by Hayley and Josh; no recording is known." }],
  "^Unheard songs listed on BMI/ASCAP": [{ label: "On this site: B-sides", url: "#bsides" }],
  "^Earlier versions of BNE songs": [{ label: "On this site: B-sides", url: "#bsides" }],
  "^Hayley’s Red Carpet Dresses$": [{ note: "Fashion details are not sourced here; use the photo pages for dated pictures." }]
});
// Round 5 (2026-11): same rules.
Object.assign(ICE_EXT, {
  "^Christianity$": [{ label: "The Christian Post: former guitarist on faith and leaving", url: "https://christianpost.com/news/paramores-former-guitarist-says-faith-led-him-to-leave-band.html" }, { label: "Christian Today: the faith behind the Farro brothers' departure", url: "https://christiantoday.com/news/the-faith-behind-the-farro-brothers-departure-from-paramore" }, { label: "Far Out: Hayley on tearing down Paramore", url: "https://faroutmagazine.co.uk/hayley-williams-explains-why-she-has-to-tear-down-paramore/" },
    { note: "The coverage is mostly Josh Farro's own account (faith as a reason for leaving) and Hayley's later comments about taking apart her old beliefs; she has also said the members are at different points with faith. Treat the aggregator sites that label the band “Christian” or “not Christian” with care." }],
  "^Hayley knows how to cripwalk": [{ label: "Blavity: the choir performance and the resurfaced tweet", url: "https://blavity.com/twitter-caught-wind-of-paramore-performing-with-a-choir-and-reiterated-the-band-is-a-staple-in-the-black-community" },
    { note: "Social posts resurfaced a claim that she learned it as a kid from a childhood friend; that comes second-hand from a tweet and is not verified." }],
  "^Over Yet Workout Video": [{ label: "Kerrang!: the workout video", url: "https://www.kerrang.com/hayley-williams-new-workout-video-is-perfect-for-fans-in-lockdown" }, { label: "Audacy: new solo song Over Yet", url: "https://www.audacy.com/kmbz/news/hayley-williams-shares-workout-video-for-new-solo-song-over-yet" },
    { note: "Released in spring 2020 during lockdown for the solo single “Over Yet” (from Petals for Armor): a roughly four-minute home workout routine." }],
  "^Paramore was kicked off-stage": [{ note: "No report of the band being removed from a stage was found. The nearby reports are about Hayley stopping her own shows: a fight in the Toronto crowd (November 2022) and two fans ejected at Madison Square Garden (2023)." }],
  "^Parasecrets": [{ note: "No outside page uses this name; fan-club coverage appears under “The Paramore Fan Club” and the Singles Club site." }],
  "^Jeremy Davis.s personal YouTube channel": [{ label: "Paramore Wiki: Jeremy Davis", url: "https://paramore.fandom.com/wiki/Jeremy_Davis" },
    { note: "No channel name or address was found in searches. He has released music as JERM (an ONErpm release was reported in May 2021), and an older YouTube video is a 2010 “Rack Review” of his gear." }],
  "^The meaning of When It Rains": [{ note: "No interview in which the band explains the song was found; the credits are Hayley Williams, Josh Farro and Zac Farro, and readings of the lyrics online are fan interpretation." }],
  "^Hayley.s Hair Colors": [{ label: "On this site: the hair page", url: "#hair" }],
  "^Hit Songs$": [{ label: "Wikipedia: Paramore", url: "https://en.wikipedia.org/wiki/Paramore" }],
  "^Miracle was sound checked": [{ label: "Wikipedia: Riot!", url: "https://en.wikipedia.org/wiki/Riot!" }, { note: "“Miracle” is a Riot! track; no outside source about the soundcheck claim was found." }],
  "^The Lost All I Wanted Verse": [{ label: "Louder: the story of “All I Wanted”", url: "https://www.loudersound.com/bands-artists/the-story-of-paramores-all-i-wanted-billie-eilish" }, { note: "That article covers how the song was made; the “lost verse” itself was not confirmed there." }],
  "^The Only Exception.s removal from set lists": [{ note: "No outside source about it being dropped from set lists was found; check dated setlists on setlist.fm." }]
});
// Round 6 (2026-11): same rules.
Object.assign(ICE_EXT, {
  "^C-est Comme Ca": [{ label: "Rolling Stone: the single", url: "https://www.rollingstone.com/music/music-news/paramore-new-song-cest-comme-ca-1234659931/" }, { label: "Songfacts: C'est Comme Ça", url: "https://www.songfacts.com/facts/paramore/cest-comme-ca" },
    { note: "The song is the third single from This Is Why (January 2023); the French title means roughly “it's like that” or “that's just how it is”. The “4 v 7” part of the entry was not found in outside sources." }],
  "^Brand New Eyes Singles Cover Arts": [{ label: "Paramore Wiki: Brand New Eyes (Singles' Cover Art section)", url: "https://paramore.fandom.com/wiki/Brand_New_Eyes" }, { label: "Rolling Stone: the album announcement", url: "https://www.rollingstone.com/music/music-news/paramore-announce-brand-new-eyes-out-september-29th-107221/" }],
  "^Paramore was going to be a screamo band": [{ label: "Stereogum: All We Know Is Falling at 20", url: "https://stereogum.com/2317073/paramore-all-we-know-is-falling-turns-20/reviews/the-anniversary" }, { label: "Louder: the story of the debut album", url: "https://www.loudersound.com/bands-artists/the-story-of-paramores-debut-album-and-how-it-forced-the-scene-to-take-a-long-hard-look-at-itself" },
    { note: "No source says the band was planned as a screamo band; what is documented is Josh Farro's screamed parts on the debut (for example the end of “My Heart”) and reviews pointing to hardcore influences behind the pop-punk." }],
  "^7 Drummers": [{ label: "MusicRadar: Ilan Rubin joins Paramore", url: "https://musicradar.com/rhythm/ilan-rubin-joins-paramore-550931" }, { label: "Wikipedia: Zac Farro", url: "https://en.wikipedia.org/wiki/Zac_Farro" },
    { note: "No official list of every drummer exists in the sources found. Zac Farro left in 2010 and rejoined in 2016–17; Ilan Rubin played on the 2013 album; other touring drummers are named only on fan wikis, so the count of seven is unverified. (Joey Howard is a bassist.)" }],
  "^The Secret Lyrics Blog": [{ note: "Hayley did use LiveJournal to answer press (for example the Kerrang! reply on this site's interviews page); no source was found saying lyrics were posted there or what this blog was." }],
  "^Singing Success Interview": [{ label: "Wikipedia: Hayley Williams", url: "https://en.wikipedia.org/wiki/Hayley_Williams" },
    { note: "No “Singing Success” interview was found. Wikipedia says she took vocal lessons with Brett Manning; a December 2025 podcast listing names her current vocal coach as Doug Peck." }]
});
// Round 7 (2026-11): same rules.
Object.assign(ICE_EXT, {
  "^Alf$": [{ label: "WGRD: Hayley on her dog", url: "https://wgrd.com/hayley-williams-depression-my-dog-reason-im-alive/" }, { label: "Far Out: the Zane Lowe interview", url: "https://faroutmagazine.co.uk/hayley-williams-talks-about-depression-therapy-suicidal-thoughts-zane-lowe/" },
    { note: "In an early-2020 Zane Lowe interview for Apple Music she said her dog Alf, a goldendoodle, was a big part of what kept her going during the After Laughter period." }],
  "^Unlisted Hayley Collabs": [{ label: "Louder: seven of her best guest spots", url: "https://www.loudersound.com/bands-artists/from-taylor-to-turnstile-and-more-hayley-williams-seven-best-guest-spots" }, { label: "Alt Press: 14 songs featuring Hayley Williams", url: "https://www.altpress.com/?p=40820" }, { label: "On this site: B-sides (guest spots)", url: "#bsides" },
    { note: "No source gives a complete list; the guest-spot lists above and the B-sides page are the most complete found." }],
  "^Working Titles of Songs": [{ label: "Paramore Wiki: The B-Sides", url: "https://paramore.fandom.com/wiki/The_B-Sides" }, { note: "No list of working titles was found in outside sources; known demos are listed on the B-sides page." }],
  "^Album Box Sets": [{ label: "DIY: the self-titled deluxe", url: "https://diymag.com/news/paramore-reveal-full-details-of-self-titled-deluxe" }, { label: "DIG!: 10th-anniversary vinyl reissue", url: "https://www.thisisdig.com/paramore-announce-vinyl-reissue-self-titled/" }, { label: "Scene Point Blank: the debut's deluxe", url: "https://www.scenepointblank.com/news/records/2025/07/27/paramores-deluxe-debut/" },
    { note: "Found: a 2013 deluxe box set of the self-titled album, a 2LP 10th-anniversary reissue (2023–24), and a deluxe 2LP of All We Know Is Falling (a Record Store Day 2026 listing gives 18 April 2026). No Riot! or Brand New Eyes box set turned up." }],
  "^Taylor York Golfs": [{ note: "Searches found no source about Taylor York and golf; check the video the entry points to." }],
  "^Ticket Prices": [{ label: "TicketNews: Verified Fan failure and prices (2022)", url: "https://www.ticketnews.com/2022/07/paramore-fans-lash-out-over-verified-fan-failure-ticket-prices/" }, { label: "Stereogum: Hayley's plan against scalpers and bots", url: "https://stereogum.com/2478944/hayley-williams-announces-ticket-sales-plan-to-avoid-scalpers-bots/news" }, { label: "Exclaim!: Hayley on Ticketmaster", url: "https://exclaim.ca/music/article/paramores_hayley_williams_says_ticketmaster_needs_to_get_their_shit_together" },
    { note: "Coverage is about Verified Fan problems, resale prices far above face value, and Hayley criticising Ticketmaster from the stage in Cardiff (April 2023); no official face-value list was found." }]
});
// Round 8: the last 13 entries. Where nothing could be found the note says so rather than guessing.
Object.assign(ICE_EXT, {
  "^Fan accounts": [{ label: "Louder: Paramore wipe their social accounts (Dec 2023)", url: "https://www.loudersound.com/news/paramore-fans-have-questions-after-bands-social-accounts-are-wiped-clean-and-website-is-pulled" }, { label: "Music Box: Paramore and fan communication", url: "https://themusicboxmedia.com/news-extras/paramores-influence-on-cultural-communication-in-music" },
    { note: "No source names specific fan accounts. Press does describe the fan community (LiveJournal in the 2000s, the band's own fan club 2007–2013, today's Instagram and TikTok fan accounts) and how fans reacted when the band's accounts were wiped in December 2023." }],
  "^Edibles": [{ note: "No interview or article about this was found. The guide's This Is Why era page repeats the fan claim that Hayley joked about edibles in a TikTok, so it stays an unconfirmed iceberg item." }],
  "^How-To Videos": [{ label: "MusicRadar: Misery Business snare sound", url: "https://www.musicradar.com/news/paramore-misery-business-snare-drum-sound-recreation-with-no-samples" }, { label: "Wonder How To: “My Heart” on acoustic guitar", url: "https://acoustic-guitar.wonderhowto.com/how-to/play-my-heart-by-paramore-acoustic-guitar-253169" },
    { note: "No official how-to videos from the band were found. Third-party lessons exist (such as the “My Heart” tutorial), and MusicRadar covers how Zac's snare sound on “Misery Business” was made." }],
  "^The Pressure Flip": [{ note: "Sources on the “Pressure” video (director Shane Drake, 2005) describe a couple stuck in jobs they dislike and a recurring pressure dial; none mentions a flip, so this stays unconfirmed. Watch the video to check." }],
  "^Hayley wears glasses": [{ note: "No interview or article about this was found. Her only “glasses” in the press are figurative (talking about nostalgia through rose-tinted glasses), so the item stays unconfirmed." }],
  "^Hayley - neck": [{ label: "Loudwire: Hayley says she headbanged the curvature out of her neck", url: "https://loudwire.com/paramore-hayley-williams-headbanged-curvature-out-of-my-neck/" },
    { note: "Found: coverage of her neck pain from headbanging, and a band shirt that features X-rays of her neck. No source about a neck tattoo turned up, so that reading is not confirmed." }],
  "^Standing Still During CCC": [{ note: "No review or report of this moment was found. Live reviews from the 2023 tour do not mention it, so it stays a fan-recalled item." }],
  "^Note to Self": [{ label: "NME: Hayley shares a note written to her teenage self", url: "https://www.nme.com/news/music/paramores-hayley-williams-shares-note-she-wrote-to-her-teenage-self-3427860" },
    { note: "No Paramore song with this title was found. The closest match is a note Hayley wrote to her teenage self for a friend's newsletter and posted on Instagram Stories." }],
  "^Taylor.s Anxiety": [{ note: "No interview in which Taylor talks about his own anxiety was found. Hayley has spoken about his support during hard periods, but that is her account, not his." }],
  "^The End": [{ note: "Searches found no Paramore song or event with this name, so nothing is confirmed. Check which video or post the entry points to." }],
  "^Brighter Meaning": [{ label: "Paramore Wiki: Brighter", url: "https://paramore.fandom.com/wiki/Brighter" },
    { note: "The song is on All We Know Is Falling (2005), written by Hayley and Josh. The wiki gives a personal explanation, but it is not from an interview or official statement, so it is not repeated here." }],
  "^Yard Sales": [{ label: "Gigwise: Paramore auction items for Japan relief", url: "https://www.gigwise.com/news/62252/Paramore-Auction-Off-Equipment-And-Clothes-For-Japan-Relief-Fund" }, { label: "Look to the Stars: Paramore launch a charity auction", url: "https://www.looktothestars.org/news/6055-paramore-launches-charity-auction-for-japan" },
    { note: "Found: the “Paramore Yard Sale”, an eBay auction of clothes, accessories and gear in March–April 2011, with proceeds going to the Red Cross after the Japan earthquake and tsunami. Reports differ on the item count (30 or more than 60); the final total was not found." }],
  "^Anne$": [{ note: "No outside source was found. The guide's Hayley chapter lists “Ms. Anne” as her first car, her mum's Mazda, as an unconfirmed iceberg item." }]
});
