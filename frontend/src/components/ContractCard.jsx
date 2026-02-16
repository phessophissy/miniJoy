import { formatMicroStx, formatStx, toContractId } from '../utils/format'

function ContractCard({ contract }) {
  return (
    <article className="contract-card">
      <p className="contract-rarity">{contract.rarity}</p>
      <h3>{contract.name}</h3>
      <p className="contract-fee">Mint Fee: {formatStx(contract.feeStx)}</p>
      <p className="contract-fee-sub">{formatMicroStx(contract.feeMicroStx)}</p>
      <code>{toContractId(contract.contractAddress, contract.name)}</code>
    </article>
  )
}

export default ContractCard
