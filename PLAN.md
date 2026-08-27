# Plan

Working schedule for Transcript Nav. Ship target: **Sunday 2026-08-30.**

Companion to `DECISIONS.md` — that file is *why*, this file is *when*.

**Live: https://transcript-nav.vercel.app/** — Vercel builds on every push to
main.

**Reality check:** this gets built on weeknight evenings after a full workday.
Roughly two usable hours a night, on a tank someone else already drained.
Every slice below is sized for that, not for a free Saturday. Scope was cut to
match; see "Cut" at the bottom.

---

## The standard

**Nothing ships in this repo that I can't explain out loud.**

Not "no AI" — that isn't realistic on this timeline and isn't how anyone works
now. The bar is *defensible*: if someone points at a line and asks what it
does, I can answer without looking it up.

Understand-before-**ship**, not understand-before-run. Running code I haven't
read yet is fine. Committing it to Sunday's build without reading it is not.

---

## How I'm learning React

Just-in-time, not just-in-case. Each evening introduces one new idea, in the
order the project actually needs it. The broad survey course comes after ship.

**Method: break it and predict.** Read it, deliberately break it, say out loud
what will happen, *then* save and check. Being wrong is the point — that's
where recognition was masquerading as understanding.

Safety net: `git status` clean before starting, `git checkout .` undoes it all.

---

## Slices

| # | Slice | State | New idea |
|---|---|---|---|
| 0 | Shell UI, deployed empty | done | what a component is |
| 1 | Transcript data in the repo | done | — |
| 2 | Transcript renders on screen | done | props, `.map()`, `key` |
| 3 | Video embeds + click a line to jump | done | `useRef` |
| 4 | Search filters the transcript | done | `useState`, controlled inputs |
| 5 | Highlight matches + result count | done | derived state |
| 6 | Timeline markers (stretch) | cuttable | — |
| — | **Consolidation — no new features** | **Sun** | — |
| 7a | Mobile layout + empty state | done | — |
| 7b | README + demo gif | **next** | — |
| 8 | Deployed to Vercel | done | — |
| — | *Reserve — only if something broke* | Mon | — |

**Slices 3 and 4 are the product, and both are done.** Everything remaining is
polish and can be traded away.

**Friday is consolidation, and it is not a detour.** The standard says nothing
ships that I can't explain, and right now that standard is being violated
across the whole app. A working demo I can't discuss in an interview is worth
less than a smaller one I can. Friday: the two react.dev ref pages, a line-by-
line walk through `App.tsx`, and the `DECISIONS.md` cleanup.

Sunday is buffer, not work. Something breaks on Friday. Something always
breaks on Friday.

Back on the original slotting as of Wed night — slices 2 and 3 both landed
that evening. Sunday buffer is intact, Monday reserve untouched.

**Ship target stays Sunday 08-30.** Monday is reserve for a slice that blew
up, not four extra hours of scope. A deadline you've already softened stops
working as a deadline.

---

## Cut

Written down so it can't be relitigated at 1am.

- **Virtualization.** `DECISIONS.md` defers it until jank is measured, and
  there's no time to measure jank. Not measuring is the reason — say exactly
  that if asked.
- **Scroll sync** (transcript auto-following playback). Real feature, invisible
  in a demo gif, costs an evening. Not worth it this week.
- Everything under "Not building" in `DECISIONS.md`.

---

## Owed

- `DECISIONS.md` cleanup: delete the speaker-data decision, reword the Spring
  Boot line to a trigger condition, add my own entry on the ingest output-path
  switch.
- Vitest + move the `formatTime` cases into a real test file (~15 min, Sat).

---

## Log

One line per day: what got done, and the first thing to do next. This is the
breadcrumb — it's what makes a cold start survivable.

Days are marked by me saying "New Day!", not by the calendar — sessions run
late and roll past midnight.

- **Mon 08-24** — audited DECISIONS (4 can't-defends → resolved, cut the speaker-data one).
  Broke and predicted main.tsx + App.tsx. Next: slice 1, transcript JSON shape.
- **Tue 08-25** — slice 1 done. `ingest.py` fetches + merges captions into 405
  sentence-sized chunks (raw caption lines were 3–6 words, unsearchable).
  NASA Artemis II transcript committed — human captions, 62 min, public domain.
  Next: slice 2, render the list.
- **Wed 08-26** — slice 2 done. Wrote `formatTime` from scratch, 5/5 on its
  cases, now `src/formatTime.ts` with its first type annotations. 405 lines
  rendering with a timestamp column. Next: slice 3, video embed +
  click-to-jump.
- **Wed 08-26 (pt 2)** — slice 3 done. YouTube iframe embedded; clicking a
  transcript line seeks the player via `postMessage` (skipped the official
  IFrame API — async script load + global ready callback fight React's
  lifecycle). `useRef` to reach the iframe. Lines are real `<button>`s, so
  keyboard-navigable. Pushed. Next: slice 4, search.
- **Thu 08-27** — slice 4 done. Search box (`useState` + controlled input),
  `.filter()` on the segments with both sides lowercased. Empty query shows all
  405 for free, since every string contains "". **The product is complete:**
  video, transcript, click-to-jump, search. Next: Friday consolidation — no new
  features.
- **Thu 08-27 (pt 2)** — slice 5 done (result count, empty state, highlighted
  matches via index-walking rather than regex, so a `(` in the search box can't
  crash it). First real `npm run build` of the week: clean, no type errors.
  **Deployed to Vercel** — the deploy `DECISIONS.md` claimed at slice 0 had
  never actually happened; that entry was false and the audit missed it.
  Mobile layout fixed (16:9 video, 44px tap targets, dvh height, 16px input to
  stop iOS zooming). Verified on a real phone. Next: README.
