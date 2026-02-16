import { useState } from 'react'

function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="top-header section" aria-label="MiniJoy header">
      <div className="brand-wrap">
        <p className="eyebrow">miniJoy</p>
        <strong className="brand-title">Wooden Rare NFTs</strong>
      </div>
      <button className="menu-button" type="button" onClick={() => setOpen((value) => !value)}>
        Menu
      </button>
      <nav className={`header-nav ${open ? 'open' : ''}`} aria-label="Primary navigation">
        <a href="#contracts">Contracts</a>
        <a href="#mint">Mint</a>
        <a href="#faq">FAQ</a>
      </nav>
    </header>
  )
}

export default Header
