import './App.css'
import ContractsSection from './components/ContractsSection'
import Header from './components/Header'
import Hero from './components/Hero'

function App() {
  return (
    <main className="app-shell">
      <Header />
      <Hero />
      <ContractsSection />
      <section className="section placeholder">
        <h2>Mint Studio</h2>
        <p>Wallet and mint controls will appear here.</p>
      </section>
    </main>
  )
}

export default App
