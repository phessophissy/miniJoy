import { deployerAddress } from '../data/contracts'

function WalletNotice() {
  return (
    <section className="section wallet-notice" aria-label="Deployer wallet">
      <p className="eyebrow">Mainnet Deployer</p>
      <code>{deployerAddress}</code>
    </section>
  )
}

export default WalletNotice
