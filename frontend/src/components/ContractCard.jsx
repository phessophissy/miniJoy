import { useState } from 'react'
import { formatMicroStx, formatStx, toContractId } from '../utils/format'

function ContractCard({ contract }) {
  const [copied, setCopied] = useState(false)
  const contractId = toContractId(contract.contractAddress, contract.name)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(contractId)
    setCopied(true)
    setTimeout(() => setCopied(false), 1200)
  }

  return (
    <article className="contract-card">
      <div className="card-topline">
        <p className="contract-rarity" style={{ color: contract.rarityColor }}>
          {contract.rarity}
        </p>
        <span className={`status-badge ${contract.status}`}>{contract.status}</span>
      </div>
      <h3>{contract.name}</h3>
      <p className="contract-fee">Mint Fee: {formatStx(contract.feeStx)}</p>
      <p className="contract-fee-sub">{formatMicroStx(contract.feeMicroStx)}</p>
      <p className="contract-fee-sub">Supply: {contract.maxSupply} of {contract.maxSupply}</p>
      <p className="contract-fee-sub">Token URI</p>
      <code>{contract.tokenUri}</code>
      <code>{contractId}</code>
      <button
        className="copy-button"
        type="button"
        onClick={handleCopy}
        aria-label={`Copy ${contract.name} contract id`}
        aria-live="polite"
      >
        {copied ? 'Copied' : 'Copy Contract ID'}
      </button>
    </article>
  )
}

export default ContractCard
