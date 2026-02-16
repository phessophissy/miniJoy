const metrics = [
  { label: 'Contracts', value: '5' },
  { label: 'Supply per contract', value: '1' },
  { label: 'Mint fee range', value: '0.0001 - 0.001 STX' },
]

function StatsStrip() {
  return (
    <section className="stats-strip" aria-label="Collection stats">
      {metrics.map((metric) => (
        <article className="stat-chip" key={metric.label}>
          <small>{metric.label}</small>
          <strong>{metric.value}</strong>
        </article>
      ))}
    </section>
  )
}

export default StatsStrip
