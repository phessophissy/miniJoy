import SectionTitle from './SectionTitle'

const entries = [
  {
    q: 'Why are there five contracts?',
    a: 'Each rare NFT has its own contract address so rarity is isolated per contract.',
  },
  {
    q: 'What are the mint fees?',
    a: 'Fees range from 0.0001 STX to 0.001 STX depending on rarity tier.',
  },
  {
    q: 'Which network should I use?',
    a: 'Use mainnet for real mints, testnet for practice, and Sandbox for manual calls.',
  },
  {
    q: 'Where do contract IDs come from?',
    a: 'Each card includes the contract ID in the format ADDRESS.contract-name.',
  },
  {
    q: 'Which wallet should I use?',
    a: 'Any SIP-030 compatible wallet works. Leather is a common choice.',
  },
  {
    q: 'Can I mint directly in Hiro Sandbox?',
    a: 'Yes. Copy the contract ID from a card and call the `mint` function in Sandbox.',
  },
]

function FaqSection() {
  return (
    <section className="section" id="faq" aria-label="Frequently asked questions">
      <SectionTitle title="FAQ" description="Quick answers for deployment and minting flow." />
      <div className="faq-list">
        {entries.map((entry) => (
          <article key={entry.q} className="faq-item">
            <h3>{entry.q}</h3>
            <p>{entry.a}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default FaqSection
