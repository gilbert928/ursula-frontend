function Header({ namaToko, subjudul }) {
  return (
    <header className="navbar navbar-dark navbar-ursula">
      <div className="container">
        <div>
          <span className="navbar-brand fw-bold mb-0">{namaToko}</span>
          <div className="text-white-50 small">{subjudul}</div>
        </div>
      </div>
    </header>
  )
}

export default Header
