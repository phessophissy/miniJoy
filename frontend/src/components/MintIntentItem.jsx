function MintIntentItem({ log }) {
  return (
    <li>
      <strong>{log.contractName}</strong>
      <span>{log.network}</span>
      <span>{log.fee} STX</span>
      <small>{log.timestamp}</small>
    </li>
  )
}

export default MintIntentItem
