// One-off helper: puts canonical + Open Graph + Twitter tags for the home page into index.html (safe to re-run; it replaces its own block).
const fs = require("fs"), path = require("path");
const ROOT = path.resolve(__dirname, ".."), B = "https://ununun343.github.io/The-Ultimate-Paramore-Guide/";
let h = fs.readFileSync(path.join(ROOT, "index.html"), "utf8");
const desc = "A complete, bilingual (UA/EN) guide to Paramore, era by era: story, lineup, Hayley's hair, albums, videos and deep cuts.";
const img = require("./load-data.js")(ROOT, "en").ctx.PHOTOS.band23.src.replace(/\(/g, "%28").replace(/\)/g, "%29");
const block = `<!--share-->
<link rel="canonical" href="${B}">
<link rel="alternate" hreflang="en" href="${B}">
<link rel="alternate" hreflang="uk" href="${B}uk/">
<meta property="og:type" content="website">
<meta property="og:site_name" content="Paramore — The Journey">
<meta property="og:title" content="Paramore — The Journey">
<meta property="og:description" content="${desc}">
<meta property="og:url" content="${B}">
<meta property="og:image" content="${img}">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Paramore — The Journey">
<meta name="twitter:description" content="${desc}">
<meta name="twitter:image" content="${img}">
<meta name="theme-color" content="#120E16">
<!--/share-->`;
h = /<!--share-->[\s\S]*?<!--\/share-->/.test(h) ? h.replace(/<!--share-->[\s\S]*?<!--\/share-->/, () => block) : h.replace(/(<meta name="description" content="[^"]*">)/, (m) => m + "\n" + block);
fs.writeFileSync(path.join(ROOT, "index.html"), h);
console.log(img);
