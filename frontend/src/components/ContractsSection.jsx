import { rareContracts } from '../data/contracts'
import ContractCard from './ContractCard'
import SectionTitle from './SectionTitle'

function ContractsSection() {
  return (
    <section className="section" id="contracts" aria-label="Rare contracts">
      <SectionTitle
        eyebrow="Collection"
        title="Rarity Contracts"
        description="Each rarity is deployed to its own contract ID for isolated supply."
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
