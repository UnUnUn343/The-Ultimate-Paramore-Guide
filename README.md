# Paramore — The Journey

Static site, no build. Embeds need http(s), not file://.

```
npx serve .          # or: python -m http.server 8465
```

Deploy: push this folder to GitHub Pages or Vercel as-is.

## Add an era
1. Add `data/<id>.js` setting `ERA_PAGES.<id>` (copy `data/riot.js`), and `<script>` it in `index.html`.
2. Set `ready: true` on the era in `data/eras.js`.
3. `renderRiot()` in `app.js` is the only page template; rename it when a second era needs different chapters.

## Rules
- Verify every YouTube id (oEmbed) and Spotify id before use; never invent them.
- Photos: only freely licensed (Wikimedia Commons) with credit, or your own scans in `media/<era>/` via `own: []`.
- Rumours stay tagged `rumour`. No song lyrics.
