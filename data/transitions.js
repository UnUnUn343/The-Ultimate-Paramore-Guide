// Era page transitions: a short veil in the era's colours with one small motif from that era
// (Origins: ruled notebook paper, AWKIF: the empty red sofa and the figure walking away, Riot!: scribbled lettering,
//  Brand New Eyes: the butterfly, the trio: three circles, Paramore: spray paint, 2015: cracks, After Laughter: pastel stripes,
//  Hiatus: falling petals, This Is Why and Now: the era's own hair colours). Skipped for reduced-motion; the page itself loads underneath.
(() => {
  const css = `
#veil{position:fixed;inset:0;z-index:2000;pointer-events:none;display:none;background:var(--vb,#120E16);overflow:hidden}
#veil.go{display:block;animation:veil-fade 1.15s cubic-bezier(.4,0,.2,1) both}
@keyframes veil-fade{0%{opacity:0}16%{opacity:1}60%{opacity:1}100%{opacity:0}}
#veil svg{position:absolute;inset:0;width:100%;height:100%}
#veil .draw{stroke-dasharray:var(--len,1800);stroke-dashoffset:var(--len,1800);animation:veil-draw .75s .08s ease-out forwards}
@keyframes veil-draw{to{stroke-dashoffset:0}}
#veil .rise{animation:veil-rise .9s var(--d,0s) ease-out both}
@keyframes veil-rise{from{transform:translateY(60px) scale(.6);opacity:0}to{transform:none;opacity:1}}
#veil .walk{animation:veil-walk 1s .1s ease-in both}
@keyframes veil-walk{from{transform:translateX(0)}to{transform:translateX(560px);opacity:.15}}
#veil .fly{animation:veil-fly 1.1s ease-in-out both}
@keyframes veil-fly{0%{transform:translate(-260px,120px)}50%{transform:translate(700px,-40px)}100%{transform:translate(1500px,-160px)}}
#veil .flap{transform-box:view-box;transform-origin:0 0;animation:veil-flap .16s ease-in-out infinite alternate}
@keyframes veil-flap{from{transform:scaleX(1)}to{transform:scaleX(.3)}}
#veil .sweep{animation:veil-sweep .85s var(--d,0s) cubic-bezier(.5,0,.2,1) both}
@keyframes veil-sweep{from{transform:translateX(-1900px)}to{transform:translateX(1900px)}}
#veil .fall{animation:veil-fall var(--du,1.1s) var(--d,0s) ease-in both}
@keyframes veil-fall{from{transform:translate(0,-120px) rotate(0)}to{transform:translate(var(--dx,60px),1000px) rotate(var(--r,200deg))}}
#veil .blur{animation:veil-blur 1s ease-out both}
@keyframes veil-blur{from{filter:blur(0);opacity:1}to{filter:blur(14px);opacity:0}}
`;
  const st = document.createElement("style"); st.textContent = css; document.head.append(st);

  const W = 1600, H = 900, rnd = (a, b, i) => a + ((Math.sin(i * 97.13 + a) + 1) / 2) * (b - a); // deterministic scatter
  const wrap = inner => `<svg viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">${inner}</svg>`;
  const cols = (era, n = 4) => { const c = (era.hair || []).map(h => h.c).filter(Boolean); return (c.length ? c : [accentOf(era)]).slice(-n); };
  const petal = (x, y, c, i) => `<ellipse class="fall" cx="${x}" cy="${y}" rx="14" ry="28" fill="${c}" style="--d:${(i % 11) * .06}s;--du:${(.75 + (i % 5) * .11).toFixed(2)}s;--dx:${(i % 2 ? 1 : -1) * (40 + i * 6)}px;--r:${160 + i * 20}deg;transform-origin:${x}px ${y}px"/>`;

  const M = {
    origins: era => wrap(`<g stroke="var(--vc)" stroke-width="3" fill="none" opacity=".55">${Array.from({ length: 11 }, (_, i) => `<path class="draw" style="--len:1600" d="M60 ${130 + i * 65}H1540"/>`).join("")}<path class="draw" style="--len:900" stroke="#E0524B" d="M210 40V880"/></g>`),
    awkif: era => wrap(`<g><rect x="430" y="470" width="740" height="210" rx="40" fill="#C8272D"/><rect x="400" y="400" width="130" height="260" rx="45" fill="#A81F25"/><rect x="1070" y="400" width="130" height="260" rx="45" fill="#A81F25"/><rect x="470" y="380" width="660" height="130" rx="46" fill="#D63A40"/></g><g class="walk" fill="#05050a"><ellipse cx="1260" cy="700" rx="20" ry="20"/><path d="M1240 720h40l16 120h-26l-8-58-8 58h-26z"/></g>`),
    riot: era => wrap(`<g fill="none" stroke="var(--vc)" stroke-linecap="round" stroke-linejoin="round"><text class="draw" style="--len:1400" x="800" y="540" text-anchor="middle" font-family="'Permanent Marker','Rock Salt','Segoe Print','Bradley Hand','Comic Sans MS',cursive" font-size="270" stroke-width="6">RIOT!</text><path class="draw" style="--len:1500" stroke-width="5" d="M300 640l180-26 160 30 190-34 170 28 200-30 150 26"/><path class="draw" style="--len:1300" stroke-width="4" d="M360 300l60 40-30 50 80-10 40 50"/></g>`),
    bne: era => wrap(`<g class="fly"><g transform="translate(0 440)"><g class="flap"><path d="M0 0C-80-130-210-150-232-62-248 12-120 56-30 30Z" fill="#F2C233" stroke="#1b1407" stroke-width="5"/><path d="M0 0C-64 66-176 132-132 188-98 226-22 130-4 44Z" fill="#E2A81E" stroke="#1b1407" stroke-width="5"/><path d="M0 0C80-130 210-150 232-62 248 12 120 56 30 30Z" fill="#F2C233" stroke="#1b1407" stroke-width="5"/><path d="M0 0C64 66 176 132 132 188 98 226 22 130 4 44Z" fill="#E2A81E" stroke="#1b1407" stroke-width="5"/><circle cx="-140" cy="-40" r="14" fill="#1b1407"/><circle cx="140" cy="-40" r="14" fill="#1b1407"/></g><rect x="-7" y="-46" width="14" height="168" rx="7" fill="#8a6a10"/><path d="M-4-44C-30-90-60-100-80-96M4-44C30-90 60-100 80-96" stroke="#8a6a10" stroke-width="4" fill="none"/></g></g>`),
    trio: era => wrap([0, 1, 2].map(i => `<circle class="rise" style="--d:${i * .16}s" cx="${520 + i * 290}" cy="450" r="${96 + i * 8}" fill="${[...cols(era, 3), "var(--vc)", "var(--vc)", "var(--vc)"][i]}"/>`).join("")),
    paramore: era => wrap(`<g class="blur"><text x="800" y="520" text-anchor="middle" font-family="Impact,'Arial Black',sans-serif" font-size="230" letter-spacing="12" fill="#f4f1ea">GROW UP</text></g>`),
    crisis: era => wrap(`<g fill="none" stroke="#d8d3e2" stroke-opacity=".7" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><path class="draw" style="--len:1700" d="M820 0L790 150 860 260 800 380 880 500 810 640 870 780 830 900"/><path class="draw" style="--len:600" stroke-width="3" d="M860 260L1000 330 1090 300"/><path class="draw" style="--len:500" stroke-width="3" d="M800 380L660 440 600 560"/><path class="draw" style="--len:500" stroke-width="3" d="M880 500L1010 560 1100 700"/><path class="draw" style="--len:400" stroke-width="2" d="M810 640L720 720 690 820"/></g>`),
    al: era => wrap(["#FFD84D", "#FF8FB1", "#7ED6E8", "#B5E48C", "#C9A7FF"].map((c, i) => `<rect class="sweep" style="--d:${i * .07}s" x="-200" y="${i * 190 - 40}" width="2000" height="150" fill="${c}" transform="skewY(-8)"/>`).join("")),
    hiatus: era => wrap(Array.from({ length: 22 }, (_, i) => petal(rnd(60, 1540, i), rnd(-40, 80, i + 3), ["var(--vc)", "#F4A6C0", "#E27A9F"][i % 3], i)).join("")),
    tiw: era => wrap(cols(era, 4).map((c, i, a) => `<rect class="sweep" style="--d:${i * .09}s" x="-200" y="${i * (H / a.length)}" width="2000" height="${H / a.length + 4}" fill="${c}"/>`).join("")),
    now: era => wrap(Array.from({ length: 34 }, (_, i) => `<rect class="fall" x="${rnd(40, 1560, i)}" y="-20" width="14" height="26" rx="3" fill="${[...cols(era, 4), "var(--vc)"][i % 5]}" style="--d:${(i % 9) * .07}s;--dx:${(i % 2 ? 1 : -1) * rnd(20, 120, i)}px;--r:${rnd(120, 420, i)}deg;transform-origin:${rnd(40, 1560, i)}px -20px"/>`).join(""))
  };

  let booted = false, lastKey = null, timer;
  window.eraVeil = (era, isEra) => {
    const key = isEra ? era.id : null, first = !booted; booted = true;
    const changed = key && key !== lastKey; lastKey = key;
    if (first || !changed || !M[era.id] || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let v = document.getElementById("veil");
    if (!v) { v = document.createElement("div"); v.id = "veil"; v.setAttribute("aria-hidden", "true"); document.body.append(v); }
    v.style.setProperty("--vc", accentOf(era)); v.style.setProperty("--vb", era.bg || "#120E16");
    v.innerHTML = M[era.id](era); v.classList.remove("go"); void v.offsetWidth; v.classList.add("go");
    clearTimeout(timer); timer = setTimeout(() => { v.classList.remove("go"); v.innerHTML = ""; }, 1250);
  };
})();
