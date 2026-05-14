function CybersecurityDashboard({ stats }) {
  return (
    <section id="security-labs" className="scroll-mt-24 space-y-6">
      <header className="space-y-2">
        <p className="text-sm uppercase tracking-widest text-neon-green">Security Labs</p>
        <h2 className="text-3xl font-bold text-terminal-text">TryHackMe Progress Dashboard</h2>
      </header>

      <div className="grid gap-4 md:grid-cols-2">
        <article className="terminal-panel rounded-xl border border-neon-green/30 p-5">
          <h3 className="mb-3 text-lg font-semibold text-terminal-text">JSON Snapshot</h3>
          <pre className="overflow-x-auto rounded-lg bg-terminal-card/80 p-4 text-sm text-neon-blue">
{`{
  "rank": "${stats.rank}",
  "totalPoints": ${stats.totalPoints},
  "roomsCleared": ${stats.roomsCleared.length}
}`}
          </pre>
        </article>

        <article className="terminal-panel rounded-xl border border-neon-blue/30 p-5">
          <h3 className="mb-3 text-lg font-semibold text-terminal-text">Rooms Cleared</h3>
          <ul className="grid gap-2 text-sm text-terminal-muted sm:grid-cols-2">
            {stats.roomsCleared.map((room) => (
              <li key={room} className="rounded-lg border border-terminal-border bg-terminal-card/70 px-3 py-2">
                {room}
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  )
}

export default CybersecurityDashboard
