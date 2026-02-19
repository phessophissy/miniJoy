import { rareContracts } from '../data/contracts'

const supplyValues = rareContracts.map((contract) => contract.maxSupply)
const supplyPerContract = supplyValues.every((value) => value === supplyValues[0])
  ? String(supplyValues[0])
  : 'Varies'

const metrics = [
  { label: 'Contracts', value: String(rareContracts.length) },
  { label: 'Supply per contract', value: supplyPerContract },
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
