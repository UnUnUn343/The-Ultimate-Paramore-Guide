// Loads the site's data files in Node, the way index.html loads them, with a fake DOM, so tools can read ERAS, SONGS, EVENTS, MEMBERS... outside a browser.
const fs = require("fs"), path = require("path"), vm = require("vm");
module.exports = function load(root, langCode) {
  const html = fs.readFileSync(path.join(root, "index.html"), "utf8");
  const scripts = [...html.matchAll(/<script src="([^"]+)"/g)].map(m => m[1]);
  const noop = () => {};
  const el = () => new Proxy(function () {}, { get: (t, k) => (k === Symbol.toPrimitive ? () => "" : k === "style" || k === "dataset" || k === "classList" || k === "children" ? el() : k === "length" ? 0 : k === "querySelectorAll" ? () => [] : el()), set: () => true, apply: () => el() });
  const store = {};
  const ctx = {
    console, URLSearchParams, URL, setTimeout: noop, clearTimeout: noop, setInterval: noop, addEventListener: noop, removeEventListener: noop, requestAnimationFrame: noop, scrollTo: noop,
    localStorage: { getItem: k => (k === "lang" ? langCode : store[k] || null), setItem: (k, v) => { store[k] = v; } },
    navigator: { language: langCode === "ua" ? "uk" : "en" }, location: { hash: "#home", href: "http://localhost/", search: "" },
    matchMedia: () => ({ matches: false, addEventListener: noop, addListener: noop }), IntersectionObserver: function () { this.observe = noop; this.disconnect = noop; },
    document: el(), history: { replaceState: noop, pushState: noop }, fetch: () => Promise.reject(new Error("no network")), CSS: { supports: () => false }
  };
  ctx.window = ctx; ctx.self = ctx; ctx.globalThis = ctx; vm.createContext(ctx);
  const errors = [];
  for (const s of scripts) {
    if (/^https?:/.test(s)) continue;
    try { vm.runInContext(fs.readFileSync(path.join(root, s), "utf8"), ctx, { filename: s }); } catch (e) { errors.push(s + ": " + e.message); }
  }
  return { ctx, errors, scripts };
};
