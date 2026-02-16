import { useMemo, useState } from 'react'
import { rareContracts } from '../data/contracts'
import { formatStx, toContractId } from '../utils/format'
import NetworkSelector from './NetworkSelector'
import SectionTitle from './SectionTitle'

function MintStudio({ network, setNetwork }) {
  const [selectedId, setSelectedId] = useState(rareContracts[0].id)
  const [mintLogs, setMintLogs] = useState([])

  const selectedContract = useMemo(
    () => rareContracts.find((contract) => contract.id === Number(selectedId)),
    [selectedId],
  )

  const handleMockMint = () => {
    if (!selectedContract) return
    const log = {
      id: crypto.randomUUID(),
      timestamp: new Date().toISOString(),
      contractName: selectedContract.name,
      fee: selectedContract.feeStx,
      network,
    }
    setMintLogs((prev) => [log, ...prev].slice(0, 6))
  }

  return (
    <section className="section" id="mint" aria-label="Mint studio">
      <SectionTitle
        eyebrow="Action"
        title="Mint Studio"
        description="Connect your Stacks wallet in Hiro and call `mint` on any rare contract."
      />
      <div className="mint-controls">
        <NetworkSelector network={network} onChange={setNetwork} />
        <label>
          <span>Rare Contract</span>
          <select value={selectedId} onChange={(event) => setSelectedId(event.target.value)}>
            {rareContracts.map((contract) => (
              <option key={contract.id} value={contract.id}>
                {contract.rarity} · {contract.name}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div className="mint-preview">
        <p>
          Contract ID:{' '}
          <code>{toContractId(selectedContract.contractAddress, selectedContract.name)}</code>
        </p>
        <p>Fee: {formatStx(selectedContract.feeStx)}</p>
        <button type="button" onClick={handleMockMint}>
          Save Mint Intent
        </button>
      </div>
      <ul className="mint-log" aria-label="Mint intents">
        {mintLogs.length === 0 ? (
          <li className="empty-log">No mint intents yet. Save one to track your next transaction.</li>
        ) : (
          mintLogs.map((log) => (
            <li key={log.id}>
              <strong>{log.contractName}</strong>
              <span>{log.network}</span>
              <span>{log.fee} STX</span>
            </li>
          ))
        )}
      </ul>
    </section>
  )
}

export default MintStudio
