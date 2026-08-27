import transcript from "./data/transcript.json";
import { formatTime } from "./formatTime.ts";
import { useRef, useState, ReactNode } from "react";

function highlight(text: string, query: string): ReactNode {
    if (query === "") return text;

    const haystack = text.toLowerCase();
    const needle = query.toLowerCase();

    const pieces: ReactNode[] = [];
    let cursor = 0;
    let n = 0;

    while (true) {
        const hit = haystack.indexOf(needle, cursor);
        if (hit === -1) break;

        if (hit > cursor) {
            pieces.push(text.slice(cursor, hit));
        }

        pieces.push(<mark key={n}>{text.slice(hit, hit + needle.length)}</mark>);

        n = n + 1;
        cursor = hit + needle.length;
    }

    pieces.push(text.slice(cursor));
    return pieces;
}

export default function App() {
    const playerRef = useRef<HTMLIFrameElement>(null);
    const [query, setQuery] = useState("");

    function jumpTo(seconds: number) {
        playerRef.current?.contentWindow?.postMessage(
            JSON.stringify({
                event: "command",
                func: "seekTo",
                args: [seconds, true],
            }),
                "https://www.youtube.com"
        );
    }
    const results = transcript.segments.filter((segment) =>
        segment.text.toLowerCase().includes(query.toLowerCase()))
  return (
    <div className="app">
      <header className="header">
        <h1>Transcript Nav</h1>
        <p className="tagline">Find the moment. Stop scrubbing.</p>
      </header>

      <main className="panes">
        <section className="pane pane--video">
          <iframe
            className="player"
            src={`https://www.youtube.com/embed/${transcript.videoId}?enablejsapi=1`}
            title={transcript.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; picture-in-picture"
            allowFullScreen
            ref={playerRef}
          />
        </section>

        <section className="pane pane--transcript">
            <input
                className="search"
                type="search"
                placeholder={"Search the transcript..."}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                />
            <p className="results">
                {results.length} of {transcript.segments.length} lines
            </p>
            {results.length == 0 ? (
                <p className="empty">No lines match "{query}"</p>
            ) : (
            <ol className="transcript">
                {results.map((segment) => (
                    <li className="line" key={segment.start}>
                        <button className="line__button" onClick={() => jumpTo(segment.start)}>
                            <span className="line__time">{formatTime(segment.start)}</span>
                            <span className="line__text">{highlight(segment.text, query)}</span>
                        </button>
                    </li>
                ))}
            </ol>
                )}
        </section>
      </main>

      <footer className="footer">
        <span className="status"></span>
      </footer>
    </div>
  );
}
