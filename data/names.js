// Band members' names: highlighted everywhere in the page text, linked to the member page, with a short hover card (photo, role, tagline, the first lines of the story).
// Taylor Swift, Josh Dun and the like are not touched: a bare first name is skipped when a capitalised word follows it.
(() => {
  const NF = "(?![A-Za-z])", CY = "А-Яа-яІіЇїЄєҐґ'’";
  const en = (first, last) => `(?<![A-Za-z])${first}(?: ${last}${NF}|(?![A-Za-z])(?!\\s+[A-Z][a-z]))`;
  const ua = (stem, ends, last) => `(?<![${CY}])${stem}(?:${ends})?(?: ${last}(?:${ends})?)?(?![${CY}])`;
  const defs = [
    ["hayley", en("Hayley", "(?:Nichole )?Williams"), ua("Гейлі", "", "Вільямс")],
    ["josh", en("Josh(?:ua)?", "Farro"), ua("Джош", "а|у|ем|еві|і", "Фарро")],
    ["zac", en("Zac(?:h)?", "Farro"), ua("Зак", "а|у|ом|ові", "Фарро")],
    ["jeremy", en("Jeremy", "Davis"), ua("Джеремі", "", "Девіс(?:а|у|ом)?")],
    ["taylor", en("Taylor", "York"), `(?<![${CY}])Тейлор(?:а|у|ом|ові)?(?: Йорк(?:а|у|ом)?)?(?![${CY}])(?!\\s+(?:Свіфт|Гокінс|Момсен))`],
    ["hunter", en("Hunter", "Lamb"), ua("Хантер", "а|у|ом", "Лемб(?:а|у|ом)?")],
    ["jason", `(?<![A-Za-z])Jason Bynum${NF}`],
    ["john", `(?<![A-Za-z])John Hembree${NF}`]
  ];
  const ids = defs.map(d => d[0]);
  const RE = new RegExp(defs.map(d => d.slice(1).map(p => `(${p})`).join("|")).join("|"), "g");
  // group index -> member id
  const owner = []; defs.forEach(d => d.slice(1).forEach(() => owner.push(d[0])));
  const SKIP = "a,button,h1,h2,h3,h4,script,style,iframe,textarea,input,select,code,figcaption,.tip,.credit,.by,.chip,.num,.mname,.gcard,.polaroid,[data-nomn],.swatches,.dots,.stretch";
  const cut = (txt, n) => { if (txt.length <= n) return txt; const s = txt.slice(0, n), i = Math.max(s.lastIndexOf(". "), s.lastIndexOf("; ")); return (i > 80 ? s.slice(0, i + 1) : s.replace(/\s\S*$/, "") + "…"); };
  window.linkNames = (root, own) => {
    if (!root || !window.MEMBERS) return;
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, { acceptNode: n => (n.nodeValue.length < 3 || !RE.test(n.nodeValue) || (RE.lastIndex = 0, n.parentElement.closest(SKIP))) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT });
    const nodes = []; while (walker.nextNode()) nodes.push(walker.currentNode);
    for (const n of nodes) {
      const s = n.nodeValue; RE.lastIndex = 0; let m, last = 0, frag = null;
      while ((m = RE.exec(s))) {
        let g = 1; while (g < m.length && m[g] === undefined) g++;
        const id = owner[g - 1]; if (!id || id === own || !MEMBERS[id]) continue;
        frag = frag || document.createDocumentFragment();
        frag.append(s.slice(last, m.index));
        const a = document.createElement("a"); a.className = "mname"; a.href = "#m/" + id; a.dataset.m = id; a.textContent = m[0]; frag.append(a);
        last = m.index + m[0].length;
      }
      if (frag) { frag.append(s.slice(last)); n.replaceWith(frag); }
    }
  };
  // hover card (one shared element)
  let card, timer, cur;
  const show = a => {
    const id = a.dataset.m, m = MEMBERS[id]; if (!m) return; cur = a;
    card = card || Object.assign(document.body.appendChild(document.createElement("div")), { id: "ncard" });
    card.onmouseenter = () => clearTimeout(timer); card.onmouseleave = hide;
    const ph = typeof realPhoto === "function" ? realPhoto(m.photo) : null, b = (m.beats || [])[0];
    card.innerHTML = `<a class="nc-pic" href="#m/${id}">${ph ? `<img src="${ph.src}" alt="${esc(m.name)}">` : `<span class="nc-mono">${esc(m.name[0])}</span>`}</a>
      <div class="nc-body"><a class="nc-name" href="#m/${id}"><b>${esc(m.name)}</b><small>${L(m.role)}</small></a>
      <p class="nc-tag">${L(m.tagline)}</p>${b ? `<p class="nc-txt"><i>${typeof b.when === "object" ? L(b.when) : esc(b.when)}</i> ${esc(cut(L(b.text), 230))}</p>` : ""}<a class="nc-more" href="#m/${id}">${U("fullStory")} →</a></div>`;
    card.hidden = false; card.style.visibility = "hidden";
    const r = a.getBoundingClientRect(), w = card.offsetWidth, h = card.offsetHeight;
    let x = Math.min(Math.max(8, r.left), innerWidth - w - 8), y = r.bottom + 8; if (y + h > innerHeight - 8) y = Math.max(8, r.top - h - 8);
    card.style.left = x + "px"; card.style.top = y + "px"; card.style.visibility = "visible";
  };
  const hide = () => { clearTimeout(timer); timer = setTimeout(() => { if (card) card.hidden = true; }, 220); };
  document.addEventListener("mouseover", e => { const a = e.target.closest?.("a.mname"); if (a) { clearTimeout(timer); timer = setTimeout(() => show(a), 180); } });
  document.addEventListener("mouseout", e => { if (e.target.closest?.("a.mname")) hide(); });
  document.addEventListener("focusin", e => { const a = e.target.closest?.("a.mname"); if (a) show(a); });
  document.addEventListener("click", () => { if (card) card.hidden = true; });
})();
