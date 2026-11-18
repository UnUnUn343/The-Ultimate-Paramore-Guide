// Official posts: social posts by the band/members shown with the platform's own embed, loaded only when you click (no third-party scripts until then).
// Add one object per post to POSTS. platform: "x" | "instagram" | "facebook" | "archive".
//   x / instagram / facebook: { platform, url, era, by, date, cap: I(en, ua) }  — url = the post's public link.
//   press: an official post that is gone or login-walled, shown from a dated press report that quotes it: { platform: "press", url: "<article>", era, by, iso: "YYYY-MM-DD", date, cap, text: I(en, ua) paraphrase }.
//   archive: for posts that were deleted (the band cleared its social accounts; most old posts are gone): { platform: "archive", url: "<web.archive.org snapshot>", era, by, date, text: I(en, ua) paraphrase, cap }.
//   Verify each link first (X: https://publish.twitter.com/oembed?url=<post url> must return 200; archive: the snapshot must open).
// Nothing renders until POSTS has entries for an era, so an empty list changes nothing on the site.
window.POSTS = window.POSTS || [];
Object.assign(UI, {
  posts: { ua: "Офіційні дописи", en: "Official posts" },
  postsNote: { ua: "Дописи самого гурту й учасників — у рідному вигляді платформ. Старі дописи часто видалені; тоді тут архівна копія з коротким переказом.", en: "Posts by the band and its members, shown the way the platforms show them. Old posts are often deleted; then you get an archived copy with a short summary." },
  postLoad: { ua: "Показати допис", en: "Show the post" },
  postOpen: { ua: "Відкрити оригінал", en: "Open the original" },
  postArchive: { ua: "Архівна копія", en: "Archived copy" },
  postReport: { ua: "Читати репортаж", en: "Read the report" }
});
const POST_NAME = { x: "X / Twitter", instagram: "Instagram", facebook: "Facebook", archive: "Web Archive", press: { ua: "За пресою", en: "Press report" } };
const postCard = p => `<article class="post reveal" data-p="${esc(p.platform)}" data-u="${esc(p.url)}">
  <header><span class="chip">${esc(typeof POST_NAME[p.platform] === "object" ? L(POST_NAME[p.platform]) : (POST_NAME[p.platform] || p.platform))}</span><b>${esc(p.by || "")}</b><small>${esc(p.date || "")}</small></header>
  ${p.cap ? `<p class="pc">${L(p.cap)}</p>` : ""}${p.text ? `<blockquote>${L(p.text)}</blockquote>` : ""}
  <div class="pbody">${p.platform === "archive" || p.platform === "press" ? "" : `<button type="button" class="post-load btn">${U("postLoad")}</button>`}<a href="${esc(p.url)}" target="_blank" rel="noopener" data-ext>${U(p.platform === "archive" ? "postArchive" : p.platform === "press" ? "postReport" : "postOpen")} ↗</a></div></article>`;
function eraPostsChapter(eraId) {
  const list = (window.POSTS || []).filter(p => p.era === eraId).sort((a, b) => String(a.iso || a.date).localeCompare(String(b.iso || b.date)));
  return list.length ? ["posts", U("posts"), `<p class="muted">${U("postsNote")}</p><div class="posts">${list.map(postCard).join("")}</div>`] : null;
}
// Click-to-load: only now does the platform's own script get fetched.
const postScripts = { x: "https://platform.twitter.com/widgets.js", instagram: "https://www.instagram.com/embed.js", facebook: "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v19.0" };
function loadPost(card) {
  const p = card.dataset.p, u = card.dataset.u, body = card.querySelector(".pbody"); body.querySelector(".post-load")?.remove();
  const holder = document.createElement("div"); holder.className = "pembed";
  holder.innerHTML = p === "x" ? `<blockquote class="twitter-tweet" data-dnt="true" data-theme="dark"><a href="${esc(u)}"></a></blockquote>`
    : p === "instagram" ? `<blockquote class="instagram-media" data-instgrm-permalink="${esc(u)}" data-instgrm-version="14" style="max-width:540px;width:100%"></blockquote>`
    : `<div class="fb-post" data-href="${esc(u)}" data-width="500"></div>`;
  body.prepend(holder);
  const done = () => { try { if (p === "x") twttr.widgets.load(holder); else if (p === "instagram") instgrm.Embeds.process(); else FB.XFBML.parse(holder); } catch { /* script blocked: the link below still works */ } };
  const old = document.querySelector(`script[data-post="${p}"]`);
  if (old) return done();
  const s = document.createElement("script"); s.async = true; s.src = postScripts[p]; s.dataset.post = p; s.onload = done; document.head.append(s);
}
document.addEventListener("click", e => { const b = e.target.closest(".post-load"); if (b) loadPost(b.closest(".post")); });

// Official posts, each from a dated press report (the originals are deleted, wiped or behind a login). Wayback snapshots could not be opened from here, so none are used.
POSTS.push(
  { platform: "press", era: "riot", iso: "2007-05-31", date: "31 May 2007", by: "Paramore / Hayley · LiveJournal", url: "https://www.drivenfaroff.com/2007/05/31/paramore-not-happy-about-kerrang-article/",
    cap: { ua: "Відповідь на обкладинкову статтю Kerrang!", en: "Reply to the Kerrang! cover story" },
    text: { ua: "Гейлі пише, що всі четверо раділи кернгівській обкладинці, доки не прочитали статтю, і що, на її думку, в ній немає правди. (Передрук тексту з LiveJournal гурту.)", en: "Hayley writes that all four were excited about the Kerrang! cover until they read the piece, and that she felt it contained no truth. (A repost of the text from the band's LiveJournal.)" } },
  { platform: "press", era: "bne", iso: "2010-12-18", date: "18 Dec 2010", by: "Paramore · official site", url: "https://spinmagazine.com/2010/12/paramore-announce-departure-two-members/",
    cap: { ua: "Заява про відхід Джоша й Зака Фарро", en: "Statement on Josh and Zac Farro leaving" },
    text: { ua: "Пост підписали Гейлі, Джеремі й Тейлор: Джош і Зак повідомили, що йдуть після концерту в Орландо, а решта знала про це місяцями. Пізніше пост видалили; брати казали, що його опублікували без їхньої згоди.", en: "Signed by Hayley, Jeremy and Taylor: Josh and Zac had said they would leave after the Orlando show, and the rest had known for months. The post was later deleted; the brothers said it went out without their permission." } },
  { platform: "press", era: "bne", iso: "2010-12-21", date: "21 Dec 2010", by: "Josh Farro · blog", url: "https://www.hypebot.com/360-deal-wonders-paramore-called-a-manufactured-product-of-a-major-label-by-former-memebers",
    cap: { ua: "Відповідь братів Фарро в блозі Джоша", en: "The Farro brothers' reply on Josh's blog" },
    text: { ua: "У відповіді Paramore названо «штучним продуктом» великого лейблу, збудованим навколо мрії Гейлі. Це лише одна сторона історії; пост і відповідь потім зникли.", en: "The reply calls Paramore a “manufactured product” of a major label built around Hayley's dream. That is one side of the story only; the post and the reply were later removed." } },
  { platform: "press", era: "al", iso: "2017-06-01", date: "June 2017", by: "Hayley Williams · fan letter", url: "https://www.pastemagazine.com/music/paramore/paramores-hayley-williams-writes-open-letter-about",
    cap: { ua: "Лист подяки фанам за After Laughter", en: "Thank-you letter to fans for After Laughter" },
    text: { ua: "Через кілька тижнів після виходу альбому Гейлі пише довгу подяку фанам і окремо згадує Зака: його повернення перетворило запис із оплакування минулого на вшанування його.", en: "A few weeks after release Hayley writes a long thank-you to fans and singles out Zac: his return turned the recording from grieving the past into honouring it." } },
  { platform: "press", era: "hiatus", iso: "2018-05-14", date: "14 May 2018", by: "Hayley Williams · Instagram", url: "https://itsalldead.com/2018/05/14/hayley-williams-reflects-on-one-year-of-after-laughter",
    cap: { ua: "Рік після After Laughter", en: "One year of After Laughter" },
    text: { ua: "У річницю альбому Гейлі пише про депресію, про яку він був, і про те, як нелегко це було.", en: "On the album's anniversary Hayley writes about the depression the record was about and how hard that was." } },
  { platform: "press", era: "hiatus", iso: "2020-01-20", date: "20 Jan 2020", by: "@petalsforarmor · Instagram", url: "https://thelineofbestfit.com/news/latest-news/hayley-williams-announces-debut-solo-single-simmer",
    cap: { ua: "Анонс першого сольного синглу", en: "Announcing the first solo single" },
    text: { ua: "Акаунт Petals For Armor, який Гейлі вела кілька тижнів, оголошує «Simmer»: вихід 22 січня 2020-го. Назва проєкту виявилась назвою альбому.", en: "The Petals For Armor account Hayley had been teasing for weeks announces “Simmer” for 22 January 2020. The project name turned out to be the album title." } },
  { platform: "press", era: "hiatus", iso: "2021-10-08", date: "8 Oct 2021", by: "Hayley Williams · Instagram", url: "https://loudwire.com/hayley-williams-quitting-social-media/",
    cap: { ua: "Гейлі залишає соцмережі", en: "Hayley leaves social media" },
    text: { ua: "Гейлі повідомляє, що більше не користуватиметься соцмережами, щоб бути на зв'язку з фанами: майже рік вона думала над цим рішенням і хоче чіткішої межі між роботою й особистим життям. Акаунти гурту лишаються.", en: "Hayley says she will stop using social media to connect with fans: she had thought about it for almost a year and wants a clearer line between work and private life. The band's accounts stay up." } },
  { platform: "press", era: "paramore", iso: "2023-04-05", date: "5 Apr 2023", by: "Hayley Williams · social media", url: "https://stereogum.com/2219396/hayley-williams-shares-statement-for-todays-10th-anniversary-of-paramores-self-titled-album/news",
    cap: { ua: "10 років альбому Paramore", en: "Ten years of the self-titled album" },
    text: { ua: "Гейлі пише, що альбом потребував «багато сміливості й самовизначення», і що історія гурту сповнена драми, як у реаліті-шоу.", en: "Hayley writes that the record took “a lot of guts and self-determination” and that the band's story has been full of reality-show style drama." } },
  { platform: "press", era: "tiw", iso: "2023-04-09", date: "9 Apr 2023", by: "Hayley Williams · Instagram Story", url: "https://www.nme.com/en_asia/news/music/paramores-hayley-williams-shares-note-she-wrote-to-her-teenage-self-3427941",
    cap: { ua: "Записка собі-підлітку", en: "A note to her teenage self" },
    text: { ua: "Записка, написана для розсилки подруги: Гейлі порадила б собі-підлітку засвоїти, що життя — це «і те, і те».", en: "A note written for a friend's newsletter: Hayley would tell her teenage self to learn that life is “both/and”." } },
  { platform: "press", era: "tiw", iso: "2023-12-26", date: "26 Dec 2023", by: "Paramore · Instagram, X and paramore.net", url: "https://loudersound.com/news/paramore-fans-have-questions-after-bands-social-accounts-are-wiped-clean-and-website-is-pulled",
    cap: { ua: "Гурт стирає акаунти й вимикає сайт", en: "The band clears its accounts and takes the site down" },
    text: { ua: "Instagram і X очищені, paramore.net не відкривається. Офіційного пояснення не було; деякі видання, посилаючись на анонімні джерела, пов'язують це з кінцем контракту з Atlantic.", en: "Instagram and X are wiped and paramore.net no longer opens. There was no official explanation; some outlets, citing anonymous sources, tie it to the end of the Atlantic contract." } }
);