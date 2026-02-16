import { useState } from 'react'

function WalletConnectPanel() {
  const [walletAddress, setWalletAddress] = useState('')
  const [connected, setConnected] = useState(false)

  const handleToggle = () => {
    setConnected((current) => !current)
  }

  return (
    <div className="wallet-panel">
      <p className="wallet-title">Wallet Session</p>
      <label>
        <span>Stacks Address (optional)</span>
        <input
          type="text"
          value={walletAddress}
          onChange={(event) => setWalletAddress(event.target.value)}
          placeholder="SP..."
        />
      </label>
      <button type="button" onClick={handleToggle}>
        {connected ? 'Disconnect' : 'Connect (UI)'}
      </button>
      <small>{connected ? 'Session active in UI mode.' : 'No active wallet session.'}</small>
    </div>
  )
}

export default WalletConnectPanel
