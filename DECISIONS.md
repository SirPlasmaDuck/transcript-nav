# Decisions

One line per real decision. The **why** is the part that matters — six weeks from
now in an interview, this file is the script.

---

**Transcripts are pre-seeded, never fetched at request time.**
YouTube blocks the unofficial transcript endpoints from datacenter IPs, which is
exactly where this deploys. Fetching live would mean the demo breaks at random,
in production, while someone is looking at it. Ingestion runs locally, output is
committed. Side effect: the page has content in under three seconds with zero
network calls.

**The official YouTube Data API was never an option.**
`captions.download` only works for videos on a channel you own and hold OAuth
for. Not a workaround problem — a by-design one.

**Committed demo content is public domain or openly licensed. Copyrighted
material stays local.**
Full verbatim transcripts of copyrighted shows in a public repo invite a
takedown, and a takedown would land while recruiters are clicking the link.
Long copyrighted content is still used locally for performance testing, because
that never leaves the machine.

**Vite + React + TypeScript. No Next.js.**
No routing, no server rendering, no data fetching on a server — Next would add
concepts without solving a problem this project has. TypeScript stays because
the type discipline transfers from Java and because frontend postings expect it.

**Search is client-side for v1. A Spring Boot service comes in v2.**
Single-transcript search over pre-loaded JSON does not need a server. Search
*across* a corpus — tokenizing, indexing, ranking, paginating — does. The
backend gets added when there's a real reason for it to exist, not before.

**Deploy happened before there was anything to deploy.**
Projects die from build config discovered on day nineteen, not from hard
features. The pipeline was proven while the stakes were zero.

**Virtualization is deferred until the jank is measured.**
Optimizing before profiling means guessing. Measuring first means the fix has a
before and an after attached to it.



---

## Not building

Written down so it can't be relitigated at 1am.

- Accounts, auth, saved history, user settings
- Speaker filtering, speaker color-coding, renameable speakers
- Audio diarization
- Summarization or any AI features
- Dark/light theme toggle
- Playlists, collections, anything plural before singular works
