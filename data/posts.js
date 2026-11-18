// Official posts: social posts by the band/members shown with the platform's own embed, loaded only when you click (no third-party scripts until then).
// Add one object per post to POSTS. platform: "x" | "instagram" | "facebook" | "archive".
//   x / instagram / facebook: { platform, url, era, by, date, cap: I(en, ua) }  — url = the post's public link.
//   archive: for posts that were deleted (the band cleared its social accounts; most old posts are gone): { platform: "archive", url: "<web.archive.org snapshot>", era, by, date, text: I(en, ua) paraphrase, cap }.
//   Verify each link first (X: https://publish.twitter.com/oembed?url=<post url> must return 200; archive: the snapshot must open).
// Nothing renders until POSTS has entries for an era, so an empty list changes nothing on the site.
window.POSTS = window.POSTS || [];
Object.assign(UI, {
  posts: { ua: "Офіційні дописи", en: "Official posts" },
  postsNote: { ua: "Дописи самого гурту й учасників — у рідному вигляді платформ. Старі дописи часто видалені; тоді тут архівна копія з коротким переказом.", en: "Posts by the band and its members, shown the way the platforms show them. Old posts are often deleted; then you get an archived copy with a short summary." },
  postLoad: { ua: "Показати допис", en: "Show the post" },
  postOpen: { ua: "Відкрити оригінал", en: "Open the original" },
  postArchive: { ua: "Архівна копія", en: "Archived copy" }
});
const POST_NAME = { x: "X / Twitter", instagram: "Instagram", facebook: "Facebook", archive: "Web Archive" };
const postCard = p => `<article class="post reveal" data-p="${esc(p.platform)}" data-u="${esc(p.url)}">
  <header><span class="chip">${esc(POST_NAME[p.platform] || p.platform)}</span><b>${esc(p.by || "")}</b><small>${esc(p.date || "")}</small></header>
  ${p.cap ? `<p class="pc">${L(p.cap)}</p>` : ""}${p.text ? `<blockquote>${L(p.text)}</blockquote>` : ""}
  <div class="pbody">${p.platform === "archive" ? "" : `<button type="button" class="post-load btn">${U("postLoad")}</button>`}<a href="${esc(p.url)}" target="_blank" rel="noopener" data-ext>${U(p.platform === "archive" ? "postArchive" : "postOpen")} ↗</a></div></article>`;
function eraPostsChapter(eraId) {
  const list = (window.POSTS || []).filter(p => p.era === eraId).sort((a, b) => String(a.date).localeCompare(String(b.date)));
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
