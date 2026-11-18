// Self-titled (2013): the original cover sits on top with "Click me"; clicking makes it fall and shows the cover streaming services have used since 2022.
// The original cover is hotlinked from English Wikipedia (File:ParamoreParamore.png), shown as illustration like the other covers.
Object.assign(UI, {
  cfClick: { ua: "Натисни", en: "Click me" },
  cfOldCap: { ua: "Оригінальна обкладинка 2013 року. Натисни на неї.", en: "The original 2013 cover. Click it." },
  cfNewCap: { ua: "Так альбом виглядає на стримінгу з 2022-го: замість трьох учасників — Гейлі в куртці «Grow Up».", en: "How the album has looked on streaming since 2022: instead of the three members, Hayley in the “Grow Up” jacket." },
  cfBack: { ua: "↺ повернути стару", en: "↺ bring the old one back" }
});
window.coverFlip = era => `<div class="coverflip reveal"><div class="cf-stage"><img class="cf-new" src="${era.cover}" alt="${esc(L(era.name))}">
  <button type="button" class="cf-old" aria-label="${esc(U("cfClick"))}"><img src="${era.coverOld}" alt="${esc(L(era.name))} (2013)"><span class="cf-hint">${U("cfClick")}</span></button></div>
  <p class="cf-cap"><span class="cf-c1">${U("cfOldCap")}</span><span class="cf-c2">${U("cfNewCap")} <button type="button" class="cf-back">${U("cfBack")}</button></span></p></div>`;
document.addEventListener("click", e => {
  const f = e.target.closest(".coverflip"); if (!f) return;
  if (e.target.closest(".cf-old")) f.classList.add("fell");
  else if (e.target.closest(".cf-back")) f.classList.remove("fell");
});
