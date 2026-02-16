const steps = [
  'Open Hiro Sandbox and deploy the miniJoy contracts.',
  'Copy the contract ID from the card in this UI.',
  'Call the public `mint` function with the exact fee for the selected rarity.',
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
