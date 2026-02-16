const steps = [
  'Open Hiro Sandbox or your preferred Stacks wallet environment.',
  'Copy the contract ID from the card in this UI.',
  'Connect wallet using @stacks/connect and submit a `mint` call.',
  'Verify ownership using `get-owner` with token id `u1`.',
]

function MintSteps() {
  return (
    <section className="section" aria-label="Mint steps">
      <h2>Mint Steps</h2>
      <ol className="steps-list">
        {steps.map((step) => (
          <li key={step}>{step}</li>
        ))}
      </ol>
    </section>
  )
}

export default MintSteps
