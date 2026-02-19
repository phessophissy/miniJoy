import { rareContracts } from '../data/contracts'
import ContractCard from './ContractCard'
import SectionTitle from './SectionTitle'

function ContractsSection() {
  const totalContracts = rareContracts.length

  return (
    <section
      className="section"
      id="contracts"
      aria-label="Rare contracts"
      aria-describedby="contracts-summary"
    >
      <SectionTitle
        eyebrow="Collection"
        title="Rarity Contracts"
        description="Each rarity is deployed to its own contract ID for isolated supply."
      />
      <p className="lead" id="contracts-summary">
        Total contracts: {totalContracts}
      </p>
      <div className="contracts-grid">
        {rareContracts.map((contract) => (
          <ContractCard contract={contract} key={contract.id} />
        ))}
      </div>
    </section>
  )
}

export default ContractsSection
