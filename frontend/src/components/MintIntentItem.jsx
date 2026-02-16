function MintIntentItem({ log }) {
  return (
    <li className={`mint-row ${log.status || ''}`}>
      <strong>{log.contractName}</strong>
      <span>{log.network}</span>
      <span>{log.fee} STX</span>
      <small>{log.timestamp}</small>
      {log.txid ? <code className="mint-txid">txid: {log.txid}</code> : null}
      {log.error ? <code className="mint-error">{log.error}</code> : null}
    </li>
  )
}

export default MintIntentItem
