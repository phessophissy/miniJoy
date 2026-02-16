import { useState } from 'react'

function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="top-header section" aria-label="MiniJoy header">
      <div className="brand-wrap">
        <div className="brand-line">
          <img src="/wood-mark.svg" alt="" aria-hidden="true" />
          <div>
            <p className="eyebrow">miniJoy</p>
            <strong className="brand-title">Wooden Rare NFTs</strong>
          </div>
        </div>
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
