import transcript from "./data/transcript.json";
import { formatTime } from "./formatTime.ts";
import { useRef} from "react";

export default function App() {
    const playerRef = useRef<HTMLIFrameElement>(null);

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
            <ol className="transcript">
                {transcript.segments.map((segment) => (
                    <li className="line" key={segment.start}>
                        <button className="line__button" onClick={() => jumpTo(segment.start)}>
                            <span className="line__time">{formatTime(segment.start)}</span>
                            <span className="line__text">{segment.text}</span>
                        </button>
                    </li>
                ))}
            </ol>
        </section>
      </main>

      <footer className="footer">
        <span className="status">slice 0 — deployed, empty, on purpose</span>
      </footer>
    </div>
  );
}
