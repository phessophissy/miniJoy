import './App.css'
import Header from './components/Header'

function App() {
  return (
    <main className="app-shell">
      <Header />
      <header className="section hero">
        <p className="eyebrow">Bitcoin L2 NFTs</p>
        <h1>miniJoy</h1>
        <p className="lead">
          Five rare NFT contracts on Stacks, crafted with a carved-wood visual style.
        </p>
      </header>
      <section className="section placeholder">
        <h2>Rarity Contracts</h2>
        <p>Contract cards will appear here.</p>
      </section>
      <section className="section placeholder">
        <h2>Mint Studio</h2>
        <p>Wallet and mint controls will appear here.</p>
      </section>
    </main>
  )
}

export default App
