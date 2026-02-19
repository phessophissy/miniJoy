import SectionTitle from './SectionTitle'

const steps = [
  'Open Hiro Sandbox or your preferred Stacks wallet.',
  'Copy the contract ID from the card in this UI.',
  'Connect wallet using @stacks/connect and submit a `mint` call.',
  'Verify ownership using `get-owner` with token id `u1`.',
]

function MintSteps() {
  return (
    <section className="section" id="steps" aria-label="Mint steps">
      <SectionTitle
        eyebrow="Guide"
        title="Mint Steps"
        description="Follow these steps to mint a one-of-one rarity contract."
      />
      <ol className="steps-list">
        {steps.map((step) => (
          <li key={step}>{step}</li>
        ))}
      </ol>
    </section>
  )
}

export default MintSteps
