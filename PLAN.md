# Plan

Working schedule for Transcript Nav. Ship target: **Sunday 2026-08-30.**

Companion to `DECISIONS.md` — that file is *why*, this file is *when*.

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
| 2 | Transcript renders on screen | **tonight** | props, `.map()`, `key` |
| 3 | Video embeds + click a line to jump | Wed | `useRef`, `useEffect` |
| 4 | Search filters the transcript | Thu | `useState`, controlled inputs |
| 5 | Highlight matches + result count | Fri | derived state |
| 6 | Timeline markers (stretch) | Fri/Sat | — |
| 7 | Mobile, empty states, README, gif | Sat | — |
| 8 | Buffer | Sun | — |

**Slices 3 and 4 are the product.** Everything else is support. If the week
goes badly, those two are what must exist by Sunday.

Sunday is buffer, not work. Something breaks on Friday. Something always
breaks on Friday.

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

- **Mon 08-24** — audited DECISIONS (4 can't-defends → resolved, cut the speaker-data one).
  Broke and predicted main.tsx + App.tsx. Next: slice 1, transcript JSON shape.
- **Tue 08-25** — slice 1 done. `ingest.py` fetches + merges captions into 405
  sentence-sized chunks (raw caption lines were 3–6 words, unsearchable).
  NASA Artemis II transcript committed, human captions, 62 min. Wrote
  `formatTime` from scratch, 5/5 on its cases, moved to `src/formatTime.ts`
  with its first type annotations. Next: slice 2, render the list.
