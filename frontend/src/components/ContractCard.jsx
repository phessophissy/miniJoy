import { useState } from 'react'
import { formatMicroStx, formatStx, toContractId } from '../utils/format'

function ContractCard({ contract }) {
  const [copied, setCopied] = useState(false)
  const [copyError, setCopyError] = useState('')
  const contractId = toContractId(contract.contractAddress, contract.name)
  const statusLabel = contract.status === 'available' ? 'Available' : contract.status

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(contractId)
      setCopied(true)
      setCopyError('')
      setTimeout(() => setCopied(false), 1200)
    } catch (error) {
      setCopied(false)
      setCopyError('Clipboard unavailable. Copy manually.')
    }
  }

  return (
    <article className="contract-card">
      <div className="card-topline">
        <p className="contract-rarity" style={{ color: contract.rarityColor }}>
          {contract.rarity}
        </p>
        <span className={`status-badge ${contract.status}`}>{statusLabel}</span>
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
        title={contractId}
      >
        {copied ? 'Copied' : 'Copy Contract ID'}
      </button>
      {copyError ? <small className="contract-fee-sub">{copyError}</small> : null}
    </article>
  )
}

export default ContractCard
