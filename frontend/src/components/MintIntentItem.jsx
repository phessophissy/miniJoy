function MintIntentItem({ log }) {
  return (
    <li>
      <strong>{log.contractName}</strong>
      <span>{log.network}</span>
      <span>{log.fee} STX</span>
    </li>
  )
}

export default MintIntentItem
