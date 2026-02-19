const deployerAddress = 'SP2KYZRNME33Y39GP3RKC90DQJ45EF1N0NZNVRE09'

function WalletNotice() {
  return (
    <section className="section wallet-notice" aria-label="Deployer wallet">
      <p className="eyebrow">Mainnet Deployer</p>
      <p className="lead">Use this address when verifying contract ownership.</p>
      <code>{deployerAddress}</code>
    </section>
  )
}

export default WalletNotice
