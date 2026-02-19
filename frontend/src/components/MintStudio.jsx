import { useEffect, useMemo, useState } from 'react'
import { rareContracts } from '../data/contracts'
import { formatStx, toContractId } from '../utils/format'
import MintIntentItem from './MintIntentItem'
import NetworkSelector from './NetworkSelector'
import SectionTitle from './SectionTitle'
import WalletConnectPanel from './WalletConnectPanel'
import { callMint, connectWallet, disconnectWallet, getWalletState } from '../lib/stacks'

const formatTimestamp = (date) =>
  new Intl.DateTimeFormat('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  }).format(date)

const MAX_LOGS = 8
const networkLabels = {
  mainnet: 'Stacks Mainnet',
  testnet: 'Stacks Testnet',
  sandbox: 'Hiro Sandbox',
}

function MintStudio({ network, setNetwork }) {
  const [selectedId, setSelectedId] = useState(rareContracts[0].id)
  const [mintLogs, setMintLogs] = useState([])
  const [walletAddress, setWalletAddress] = useState('')
  const [connected, setConnected] = useState(false)
  const [pendingWallet, setPendingWallet] = useState(false)
  const [pendingMint, setPendingMint] = useState(false)
  const [walletError, setWalletError] = useState('')

  const selectedContract = useMemo(
    () => rareContracts.find((contract) => contract.id === Number(selectedId)),
    [selectedId],
  )
  const networkLabel = networkLabels[network] || network
  const hasWallet = connected && walletAddress
  const canMint = hasWallet && !pendingMint
  const mintLabel = pendingMint
    ? 'Waiting for signature...'
    : hasWallet
      ? 'Mint with Wallet'
      : 'Connect wallet to mint'

  useEffect(() => {
    const state = getWalletState()
    setWalletAddress(state.address)
    setConnected(state.connected)
  }, [network])

  const handleConnect = async () => {
    setPendingWallet(true)
    setWalletError('')
    try {
      const state = await connectWallet(network)
      setWalletAddress(state.address)
      setConnected(state.connected)
    } catch (error) {
      setWalletError(error?.message || 'Wallet connection was cancelled or rejected.')
    } finally {
      setPendingWallet(false)
    }
  }

  const handleDisconnect = () => {
    const state = disconnectWallet()
    setWalletAddress(state.address)
    setConnected(state.connected)
    setWalletError('')
  }

  const handleClearLogs = () => {
    setMintLogs([])
  }

  const handleMint = async () => {
    if (!selectedContract) return
    if (!connected || !walletAddress) {
      setWalletError('Connect a wallet before minting.')
      return
    }

    setPendingMint(true)
    setWalletError('')

    try {
      const txid = await callMint({
        contractAddress: selectedContract.contractAddress,
        contractName: selectedContract.name,
        feeMicroStx: selectedContract.feeMicroStx,
        network,
        senderAddress: walletAddress,
      })

      const log = {
        id: crypto.randomUUID(),
        timestamp: formatTimestamp(new Date()),
        contractName: selectedContract.name,
        fee: selectedContract.feeStx,
        network,
        txid,
        status: 'submitted',
      }
      setMintLogs((prev) => [log, ...prev].slice(0, MAX_LOGS))
    } catch (error) {
      const log = {
        id: crypto.randomUUID(),
        timestamp: formatTimestamp(new Date()),
        contractName: selectedContract.name,
        fee: selectedContract.feeStx,
        network,
        status: 'failed',
        error: error?.message || 'Transaction rejected by wallet.',
      }
      setMintLogs((prev) => [log, ...prev].slice(0, MAX_LOGS))
      setWalletError(log.error)
    } finally {
      setPendingMint(false)
    }
  }

  return (
    <section className="section" id="mint" aria-label="Mint studio">
      <SectionTitle
        eyebrow="Action"
        title="Mint Studio"
        description="Wallet flow is powered by @stacks/connect and post-condition safety via @stacks/transactions."
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
      <WalletConnectPanel
        connected={connected}
        walletAddress={walletAddress}
        pending={pendingWallet}
        onConnect={handleConnect}
        onDisconnect={handleDisconnect}
        error={walletError}
      />
      <div className="mint-preview">
        <p>
          Contract ID:{' '}
          <code>{toContractId(selectedContract.contractAddress, selectedContract.name)}</code>
        </p>
        <p>Network: {networkLabel}</p>
        <p>Fee: {formatStx(selectedContract.feeStx)}</p>
        <p>Status: {selectedContract.status}</p>
        <p>Supply: {selectedContract.maxSupply}</p>
        <button type="button" onClick={handleMint} disabled={!canMint}>
          {mintLabel}
        </button>
      </div>
      <button
        type="button"
        onClick={handleClearLogs}
        disabled={mintLogs.length === 0}
        aria-label="Clear mint log"
      >
        Clear mint log
      </button>
      <ul
        className="mint-log"
        aria-label="Mint intents"
        aria-live="polite"
        aria-busy={pendingMint}
      >
        {mintLogs.length === 0 ? (
          <li className="empty-log">No mint transactions yet. Connect wallet and submit `mint`.</li>
        ) : (
          mintLogs.map((log) => <MintIntentItem key={log.id} log={log} />)
        )}
      </ul>
    </section>
  )
}

export default MintStudio
