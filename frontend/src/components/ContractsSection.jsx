import { rareContracts } from '../data/contracts'
import ContractCard from './ContractCard'
import SectionTitle from './SectionTitle'

function ContractsSection() {
  return (
    <section className="section" id="contracts" aria-label="Rare contracts">
      <SectionTitle
        eyebrow="Collection"
        title="Rarity Contracts"
        description="Each rare NFT is deployed as its own contract address."
      />
      <div className="contracts-grid">
        {rareContracts.map((contract) => (
          <ContractCard contract={contract} key={contract.id} />
        ))}
      </div>
    </section>
  )
}

export default ContractsSection
