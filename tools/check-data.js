// Quick sanity check of the loaded data: node tools/check-data.js
const path = require("path"), vm = require("vm");
const { ctx, errors } = require("./load-data.js")(path.resolve(__dirname, ".."), "en");
const v = c => vm.runInContext(c, ctx);
console.log("load errors:", errors);
const ego = v('SONGS.filter(s => s.era === "now")');
console.log("now-era songs:", ego.length, ego.map(s => s.n + "." + s.id).join(" "));
console.log("without notes:", ego.filter(s => !(v("SONG_EXTRA")[s.key] || []).length).map(s => s.id).join(", "));
console.log("duplicate song ids:", v("SONGS.map(s => s.id).filter((x, i, a) => a.indexOf(x) !== i)").join(", "));
console.log("music videos:", v("MVS.length"), "| videos pointing at a missing song:", v("MVS.filter(m => !SONGS.find(s => s.id === m.song)).map(m => m.song)").join(", "));
console.log("hero stats:", v('ERA_PAGES.now.hero.stats.length'), "| beats:", v("ERA_PAGES.now.story.beats.length"));
