function Header() {
  return (
    <header className="top-header section" aria-label="MiniJoy header">
      <div className="brand-wrap">
        <p className="eyebrow">miniJoy</p>
        <strong className="brand-title">Wooden Rare NFTs</strong>
      </div>
      <nav className="header-nav" aria-label="Primary navigation">
        <a href="#contracts">Contracts</a>
        <a href="#mint">Mint</a>
        <a href="#faq">FAQ</a>
      </nav>
    </header>
  )
}

export default Header
