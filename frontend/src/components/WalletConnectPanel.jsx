import { useState } from 'react'
import { formatAddress } from '../utils/format'

function WalletConnectPanel({ connected, walletAddress, pending, onConnect, onDisconnect, error }) {
  const shortAddress = formatAddress(walletAddress)
  const [copied, setCopied] = useState(false)
  const [copyError, setCopyError] = useState('')
  const statusLabel = connected ? 'Connected' : 'Disconnected'
  const statusClass = connected ? 'online' : 'offline'

  const handleCopy = async () => {
    if (!walletAddress) return
    try {
      await navigator.clipboard.writeText(walletAddress)
      setCopied(true)
      setCopyError('')
      setTimeout(() => setCopied(false), 1200)
    } catch (err) {
      setCopyError('Clipboard unavailable. Copy manually.')
      setCopied(false)
    }
  }

  return (
    <div className="wallet-panel">
      <div className="wallet-header">
        <p className="wallet-title">Wallet Session</p>
        <span className={`wallet-status ${statusClass}`}>{statusLabel}</span>
      </div>
      <label>
        <span>Connected Stacks Address</span>
        <input type="text" value={walletAddress} readOnly placeholder="Connect wallet to load address" />
      </label>
      <small>{shortAddress ? `Address: ${shortAddress}` : 'No address loaded yet.'}</small>
      <div className="wallet-actions">
        <button type="button" onClick={connected ? onDisconnect : onConnect} disabled={pending}>
          {pending ? 'Waiting for wallet...' : connected ? 'Disconnect Wallet' : 'Connect Wallet'}
        </button>
        <button type="button" onClick={handleCopy} disabled={!walletAddress}>
          {copied ? 'Copied' : 'Copy Address'}
        </button>
      </div>
      <small>
        {connected
          ? 'Connected through @stacks/connect.'
          : 'No active wallet session. Use Leather or another SIP-030 wallet.'}
      </small>
      {copyError ? <small className="wallet-error">{copyError}</small> : null}
      {error ? <small className="wallet-error">{error}</small> : null}
    </div>
  )
}

export default WalletConnectPanel
