import './App.css'
import ContractsSection from './components/ContractsSection'
import FaqSection from './components/FaqSection'
import Header from './components/Header'
import Hero from './components/Hero'
import MintStudio from './components/MintStudio'
import { usePersistentState } from './hooks/usePersistentState'

function App() {
  const [network, setNetwork] = usePersistentState('miniJoy.network', 'mainnet')

  return (
    <main className="app-shell">
      <Header />
      <Hero />
      <ContractsSection />
      <MintStudio network={network} setNetwork={setNetwork} />
      <FaqSection />
    </main>
  )
}

export default App
