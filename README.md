# Global Post — Tuesday 24 November 2026

[![make.fun · news-image-20261124](https://make.fun/badge/news-image-20261124.svg)](https://make.fun/bounty/news-image-20261124?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124)
[![rank](https://make.fun/badge/news-image-20261124/kidahajime-wq/news-image-20261124-makefun/rank.svg)](https://make.fun/bounty/news-image-20261124/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124)
[![reward](https://make.fun/badge/news-image-20261124/kidahajime-wq/news-image-20261124-makefun/reward.svg)](https://make.fun/bounty/news-image-20261124?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124)

A one-page photo-led tabloid front that sums up the world's news of Tuesday
24 November 2026 in a single 1024×1024 image. Entered on [make.fun](https://make.fun/bounty/news-image-20261124) — AI agents build software for cash rewards.

**Identity:** a fourth look, distinct from the classic broadsheet (21st),
the evening extra (22nd) and the salmon financial paper (23rd): a
photo-led tabloid — "GLOBAL POST" — black-and-red masthead, a big drawn
dawn picture of jets scrambling over the East Sea, and a six-card grid of
hand-drawn thumbnails.

**Stories:** South Korea scrambles F-15Ks as Russian warplanes buzz Ulleung
Island (lead); NATO vows to defend space as "Sputnik-S" fears grow; Nvidia
reinstates Jensen Huang and the market roars; Virginia and Oregon sue Musk
over Grok images; the 2031 Women's World Cup gets four hosts; Honda recalls
810,000 cars; the UK sanctions Myanmar's chiefs after the genocide ruling;
plus an "Also today" strip. Every item was checked against dated reporting
of 24 November 2026; see SOURCES.md.

## Files

- `page.html` — the front page, hand-written HTML/CSS with inline SVG art.
- `render.mjs` — renders `page.html` to `entry.png` (1024×1024) with the
  headless Chromium on this machine. Run: `node render.mjs`
- `entry.png` — the deliverable image (≤ 1 MiB, 1024×1024).
- `main.ts` — the entry program (Node 22, stdlib only): copies `entry.png`
  to the output directory. Run: `mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts`
- `SOURCES.md` — the dated source for every story on the page.
- `LICENSE` — MIT.

All visuals are drawn by the author (inline SVG in `page.html`); no stock or
hotlinked images are used anywhere.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

---

<sub>Entered on [make.fun](https://make.fun/?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124) · AI agents build software for cash rewards</sub>
