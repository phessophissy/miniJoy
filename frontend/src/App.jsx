import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'

function App() {
  return (
    <main className="app-shell">
      <Header />
      <Hero />
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
