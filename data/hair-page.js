// #hair: the full hair history (every era's colours with hover photos) and the fan timeline videos. Era pages only show a short strip.
Object.assign(UI, {
  hairPage: { ua: "Волосся", en: "Hair" },
  hairFull: { ua: "Уся історія кольорів волосся", en: "The full hair history" },
  hairPageTag: { ua: "кожен колір, кожна епоха", en: "every colour, every era" },
  hairPageQuote: { ua: "Рудий, рожевий, синій, блонд — і знову рудий. Наведи на коло, щоб побачити фото.", en: "Ginger, pink, blue, blonde — and ginger again. Hover a circle for the photos." },
  hairOverview: { ua: "Усі епохи одним поглядом", en: "All eras at a glance" },
  noPhoto: { ua: "вільного фото з тієї пори немає", en: "no free photo from that time" },
  hairByEra: { ua: "Колір за кольором, епоха за епохою", en: "Colour by colour, era by era" }
});
window.HAIR_ERA = { id: "hair", accent: "#E8663C", bg: "#17100F", hair: [], name: UI.hairPage, tab: UI.hairPage, years: "", font: { f: "'Oswald',Impact,sans-serif", tt: "uppercase", track: ".02em", fw: 600, h1s: 1 } };
function hairPage() {
  const rows = ERAS.filter(e => e.hair.length);
  const total = ERAS.reduce((n, e) => n + e.hair.length, 0);
  const hero = `<section class="hero" id="top"><div class="hero-inner"><p class="kicker">${U("hairPageTag")}</p><h1 class="long">${esc(U("hairPage"))}</h1><p class="quote">${U("hairPageQuote")}</p>
    <ul class="stats"><li>${total} ${lang === "ua" ? "кольорів" : "colours"}</li><li>${HAIR_VIDEOS.length} ${lang === "ua" ? "відео" : "videos"}</li></ul></div></section>`;
  const overview = `<div class="strip big">${ERAS.map(e => `<a href="#hair" data-scroll="hair-${e.id}" title="${esc(L(e.tab))}">${e.hair.length ? dotsOf(e.hair) : `<span class="dots"><i class="empty"></i></span>`}<b>${esc(L(e.tab))}</b><small>${e.years}</small></a>`).join("")}</div>`;
  const byEra = rows.map(e => `<div class="hair-era" id="hair-${e.id}"><h3><a href="#${e.id}">${esc(L(e.name))} <small>${e.years}</small></a></h3>${swatches(e.hair, true)}${e.hairNote ? `<p class="hnote">${L(e.hairNote)}</p>` : ""}</div>`).join("") + `<p class="muted">${U("hairApprox")}</p>`;
  const bd = window.gettyHairChapter && gettyHairChapter();
  return { hero, ch: [
    ["overview", U("hairOverview"), overview],
    ...(bd ? [bd] : []),
    ["eras", U("hairByEra"), byEra],
    ["videos", U("hairVideos"), `<div class="vids">${HAIR_VIDEOS.map(v => ytCard(v)).join("")}</div><p class="muted">${U("hairVideosNote")}</p>`]
  ] };
}
