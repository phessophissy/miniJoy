import './App.css'
import ContractsSection from './components/ContractsSection'
import FaqSection from './components/FaqSection'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import MintStudio from './components/MintStudio'
import MintSteps from './components/MintSteps'
import WalletNotice from './components/WalletNotice'
import { usePersistentState } from './hooks/usePersistentState'

function App() {
  const [network, setNetwork] = usePersistentState('miniJoy.network', 'mainnet')

  return (
    <main className="app-shell">
      <Header />
      <Hero />
      <WalletNotice />
      <ContractsSection />
      <MintSteps />
      <MintStudio network={network} setNetwork={setNetwork} />
      <FaqSection />
      <Footer />
    </main>
  )
}

export default App
