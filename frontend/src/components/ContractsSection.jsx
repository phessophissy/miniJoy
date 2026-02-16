import { rareContracts } from '../data/contracts'
import ContractCard from './ContractCard'

function ContractsSection() {
  return (
    <section className="section" id="contracts" aria-label="Rare contracts">
      <h2>Rarity Contracts</h2>
      <p className="lead">Each rare NFT is deployed as its own contract address.</p>
      <div className="contracts-grid">
        {rareContracts.map((contract) => (
          <ContractCard contract={contract} key={contract.id} />
        ))}
      </div>
    </section>
  )
}

export default ContractsSection
