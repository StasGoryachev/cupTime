export const Header = () => {
  return (
    <header className="header">
      <div className="header__container container">
        <a className="header__logo-link">
          <img className="header__logo" src="image/logo.svg" alt="Логотип Cup Time" />
        </a>
        <nav className="header__nav">
          <ul className="header__menu">
            <li className="header__menu-item">
              <a className="header__menu-link" href="#">Чай</a>
            </li>
            <li className="header__menu-item">
              <a className="header__menu-link" href="#">Кофе</a>
            </li>
            <li className="header__menu-item">
              <a className="header__menu-link" href="#">Чайники</a>
            </li>
            <li className="header__menu-item">
              <a className="header__menu-link" href="#">Турки</a>
            </li>
            <li className="header__menu-item">
              <a className="header__menu-link" href="#">Прочее</a>
            </li>
          </ul>
        </nav>

        <a className="header__cart-link" href="cart.html">6</a>
      </div>
    </header>
  )
}