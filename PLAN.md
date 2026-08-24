# Plan

Working schedule for Transcript Nav. Written with Claude on 2026-08-24; the
decisions in it are mine. Ship target: **Sunday 2026-08-30.**

Companion to `DECISIONS.md` — that file is *why*, this file is *when*.

---

## The standard

**Nothing goes in this repo that I can't explain out loud.**

Not "no AI" — that isn't realistic on this timeline and isn't how anyone works
now. The bar is *defensible*. If someone points at a line and asks what it does,
I can answer without looking it up.

Anything that fails that bar gets read until it passes, or deleted.

---

## How I'm learning React

Just-in-time, not just-in-case. Six concepts, introduced in the order the
project needs them. The broad survey course comes *after* ship, when there's
something to attach it to.

**The method: break it and predict.**

1. Read the file out loud, one line at a time.
2. Deliberately break something.
3. **Before saving — say what will happen.**
4. Save. Watch. Was I right?

Being wrong is the point. That's the exact spot where recognition was
masquerading as understanding.

Safety net: `git status` clean before starting, `git checkout .` to undo all of
it.

---

## The week

| Day | Slice | The one new React idea |
|---|---|---|
| **Mon (tonight)** | audit — no new code | what a component *is* |
| **Tue** | transcript data shape + it renders | props, `.map()` with `key` |
| **Wed** | video embeds + click-to-jump | `useRef`, `useEffect` |
| **Thu** | search + highlight | `useState`, controlled inputs |
| **Fri** | timeline markers + scroll sync | lifting state up |
| **Sat** | mobile, README, demo gif | — |
| **Sun** | buffer | — |

Tuesday is mostly plain JavaScript — parsing and array methods. The genuinely
new React lands Wednesday and Thursday, two concepts each.

Sunday is buffer, not work. Something breaks on Friday. Something always
breaks on Friday.

---

## Cut

Deliberately, so it can't be relitigated at 1am:

- **Virtualization.** `DECISIONS.md` says defer until the jank is measured, and
  there is no time to measure jank. Not measuring is the reason it's cut — say
  exactly that if asked.
- Everything already listed under "Not building" in `DECISIONS.md`.

---

## Log

One line per day: what actually got done, and the first thing to do next.
This is the breadcrumb — it's what makes a cold start on Wednesday survivable.

- **Mon 08-24** — audited DECISIONS (4 can't-defends → resolved, cut the speaker-data one).
  Broke and predicted main.tsx + App.tsx. Next: slice 1, transcript JSON shape.