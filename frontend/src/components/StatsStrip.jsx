import { rareContracts } from '../data/contracts'
import { formatStxRange } from '../utils/format'

const supplyValues = rareContracts.map((contract) => contract.maxSupply)
const supplyPerContract = supplyValues.every((value) => value === supplyValues[0])
  ? String(supplyValues[0])
  : 'Varies'
const totalSupply = supplyValues.reduce((sum, value) => sum + value, 0)
const feeStxValues = rareContracts.map((contract) => contract.feeStx)
const sortedFeeStx = [...feeStxValues].sort((a, b) => Number(a) - Number(b))
const feeRange = formatStxRange(sortedFeeStx[0], sortedFeeStx[sortedFeeStx.length - 1])

const metrics = [
  { label: 'Contracts', value: String(rareContracts.length) },
  { label: 'Total supply', value: String(totalSupply) },
  { label: 'Supply per contract', value: supplyPerContract },
  { label: 'Mint fee range', value: feeRange },
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
