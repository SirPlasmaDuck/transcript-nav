// Slice 0: a shell. No state, no data, no logic — on purpose.
// This is a function that returns markup. That's all a React component is.

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
          <div className="placeholder">
            <span className="placeholder__label">transcript</span>
            <span className="placeholder__note">slice 2</span>
          </div>
        </section>
      </main>

      <footer className="footer">
        <span className="status">slice 0 — deployed, empty, on purpose</span>
      </footer>
    </div>
  );
}
