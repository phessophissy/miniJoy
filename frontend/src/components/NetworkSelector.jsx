function NetworkSelector({ network, onChange }) {
  return (
    <label className="network-control">
      <span>Network</span>
      <select value={network} onChange={(event) => onChange(event.target.value)}>
        <option value="mainnet">Stacks Mainnet</option>
        <option value="testnet">Stacks Testnet</option>
        <option value="sandbox">Hiro Sandbox</option>
      </select>
    </label>
  )
}

export default NetworkSelector
