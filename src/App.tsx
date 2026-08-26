import transcript from "./data/transcript.json";
import { formatTime } from "./formatTime.ts";

export default function App() {

  return (
    <div className="app">
      <header className="header">
        <h1>Transcript Nav</h1>
        <p className="tagline">Find the moment. Stop scrubbing.</p>
      </header>

      <main className="panes">
        <section className="pane pane--video">
          <div className="placeholder">
            <span className="placeholder__label">video</span>
            <span className="placeholder__note">slice 3</span>
          </div>
        </section>

        <section className="pane pane--transcript">
            <ol className="transcript">
                {transcript.segments.map((segment) => (
                    <li className="line" key={segment.start}>
                        <span className="line__time">{formatTime(segment.start)}</span>
                        <span className="line__text">{segment.text}</span>
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
