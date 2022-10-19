import svg1 from '../images/SVG/autor.svg';
import svg2 from '../images/SVG/symbol-defs.svg';
//or href={`${require('../images/SVG/symbol-defs.svg')}#icon-mail`}

const Header = () => {
  const navMenu = () => {
    const menuBtnRef = document.querySelector('[data-menu-button]');
    const mobileMenuRef = document.querySelector('[data-menu]');
    const expanded =
      menuBtnRef.getAttribute('aria-expanded') === 'true' || false;

    menuBtnRef.classList.toggle('is-open');
    menuBtnRef.setAttribute('aria-expanded', !expanded);

    mobileMenuRef.classList.toggle('is-open');
  };

  return (
    <header className="header">
      <div className="container">
        <a href="#" className="logo">
          <span>Tour</span>Agency
        </a>
        <div className="nav-menu" data-menu>
          <nav className="nav__bar">
            <ul className="nav__list">
              <li className="item">
                <a className="nav__link current" href="index.html">
                  Головна
                </a>
              </li>
              <li className="item">
                <a className="nav__link" href="#tours">
                  Тури
                </a>
              </li>
              <li className="item">
                <a className="nav__link" href="#">
                  Авіарейси
                </a>
              </li>
              <li className="item">
                <a className="nav__link" href="#">
                  Готелі
                </a>
              </li>
              <li className="item">
                <a className="nav__link" href="#gallery">
                  Галерея
                </a>
              </li>
            </ul>
          </nav>
          <ul className="nav__info">
            <li className="item">
              <a href="mailto:info@touragency.com" className="nav__link">
                <svg className="icon-contact" width={16} height={16}>
                  <use href={`${svg2}#icon-mail`} />
                </svg>
                info@touragency.com
              </a>
            </li>
            <li className="item tell">
              <a href="tell:+380961111111" className="nav__link">
                <svg className="icon-contact" width={16} height={16}>
                  <use href={`${svg2}#icon-phone`} />
                </svg>
                +38 096 111 11 11
              </a>
            </li>
            <li className="item">
              <a className="nav__link" data-modalreg-open>
                <svg className="icon-contact" width={16} height={16}>
                  <use href={`${svg1}#icon-user`} />
                </svg>
                Профіль
              </a>
            </li>
          </ul>
        </div>
        <button
          type="button"
          className="menu-button"
          aria-expanded="false"
          data-menu-button
          onClick={navMenu}
        >
          <svg width={40} height={40}>
            <use
              className="close"
              href={`${require('../images/SVG/symbol-defs.svg')}#icon-menu_close`}
            />
            <use
              className="open"
              href={`${require('../images/SVG/symbol-defs.svg')}#icon-menu_open`}
            />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
