import { formatAddress } from '../utils/format'

function WalletConnectPanel({ connected, walletAddress, pending, onConnect, onDisconnect, error }) {
  const shortAddress = formatAddress(walletAddress)

  return (
    <div className="wallet-panel">
      <p className="wallet-title">Wallet Session</p>
      <label>
        <span>Connected Stacks Address</span>
        <input type="text" value={walletAddress} readOnly placeholder="Connect wallet to load address" />
      </label>
      <small>{shortAddress ? `Address: ${shortAddress}` : 'No address loaded yet.'}</small>
      <button type="button" onClick={connected ? onDisconnect : onConnect} disabled={pending}>
        {pending ? 'Waiting for wallet...' : connected ? 'Disconnect Wallet' : 'Connect Wallet'}
      </button>
      <small>
        {connected
          ? 'Connected through @stacks/connect.'
          : 'No active wallet session. Use Leather or another SIP-030 wallet.'}
      </small>
      {error ? <small className="wallet-error">{error}</small> : null}
    </div>
  )
}

export default WalletConnectPanel
