# Transcript Nav

**→ [transcript-nav.vercel.app](https://transcript-nav.vercel.app/)**

Find a moment in an hour-long recording without dragging the scrubber around
like an idiot. The transcript *is* the navigation: search for a phrase, click
the line, the video jumps there.

> **TODO:** 15-second gif goes here — search, then click, then the video jumps.
> Above everything. Most people won't scroll past it.

---

## What it does

- Full transcript beside the video, timestamped
- Click any line to seek the player to that moment
- Search filters the transcript as you type, with matches highlighted
- Works on a phone

## How it works

**Transcripts are pre-ingested, never fetched at request time.** `ingest.py`
pulls captions on a local machine and writes `src/data/transcript.json`, which
is committed. YouTube blocks the unofficial caption endpoints from datacenter
IPs — exactly where this deploys — so fetching live would mean a demo that
breaks at random while someone is looking at it. The official Data API isn't an
alternative: `captions.download` requires OAuth as the video's owner.

**Caption lines get merged into sentences during ingest.** Raw captions arrive
as 3–6 word display fragments chopped wherever the text hit the edge of the
screen, which makes them useless for search — a phrase can straddle two lines
and match neither. Ingest glues consecutive lines back together at sentence
boundaries and speaker changes. For the demo transcript that's 1,965 fragments
collapsed into 405 searchable chunks.

**The video is embedded, not hosted.** YouTube serves it. Seeking is done by
posting commands straight to the embed rather than loading the official IFrame
Player API — that API needs an async script load and a global ready callback,
which don't compose cleanly with React's lifecycle.

**Search runs entirely in the browser.** One transcript fits in memory, so
filtering an array beats a network round trip. A backend only earns its place
at corpus scale — tokenizing, indexing, ranking across many documents — and
that threshold hasn't been hit.

## Stack

Vite, React 19, TypeScript. No router, no state library, no CSS framework.
Ingestion is a standalone Python script. Deployed on Vercel, which rebuilds on
every push to `main`.

Production bundle is 262 kB raw / 84 kB gzipped, roughly 40% of which is the
transcript itself. That's the cost of bundling the data instead of fetching it:
the page has content with zero network round-trips, no loading state and no
error state. At one transcript it's the right trade. At ten it wouldn't be.

## Running it

```bash
npm install
npm run dev
```

## Ingesting a different video

```bash
pip install youtube-transcript-api
python ingest.py
```

Edit `VIDEO_ID`, `TITLE`, and `LICENSE` at the top of `ingest.py` first. The
`LOCAL_ONLY` switch decides the output filename — set it to `True` for
copyrighted material and the file matches the `*.local.json` rule in
`.gitignore`, so it can't be committed by accident.

## Demo content

[NASA Artemis II daily news conference](https://www.youtube.com/watch?v=j3Pq35gm4qA)
— roughly an hour, human-written captions, public domain as US government work.

Committed demo content is public domain or openly licensed, deliberately. A
full verbatim transcript of copyrighted material in a public repo invites a
takedown, and a takedown would land while someone is clicking the link.
Copyrighted transcripts stay on the local machine for testing.

