import svg1 from '../images/SVG/autor.svg';
import svg2 from '../images/SVG/symbol-defs.svg';
//or href={`${require('../images/SVG/symbol-defs.svg')}#icon-mail`}
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const Header = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const navMenu = () => {
    const menuBtnRef = document.querySelector('[data-menu-button]');
    const mobileMenuRef = document.querySelector('[data-menu]');

    menuBtnRef.classList.toggle('is-open');
    mobileMenuRef.classList.toggle('is-open');

    mobileMenuRef.addEventListener('click', event => {
      if (event.target.nodeName !== 'A') {
        return;
      }
      menuBtnRef.classList.remove('is-open');
      mobileMenuRef.classList.remove('is-open');
    });
  };

  function onTagsContainerClick(event) {
    if (event.target.nodeName !== 'A') {
      return;
    }

    const currentActiveBtn = document.querySelector('.current');

    if (currentActiveBtn) {
      currentActiveBtn.classList.remove('current');
    }

    const nextActiveBtn = event.target;
    nextActiveBtn.classList.add('current');
  }

  function toggleModal() {
    document
      .querySelector('.backdrop__registration')
      .classList.toggle('is-hidden');
  }

  const userPage = () => {
    navigate('/user');
  };

  return (
    <header className="header">
      <div className="container">
        <a href="#" className="logo">
          <span>Tour</span>Agency
        </a>
        <div className="nav-menu" data-menu>
          <nav className="nav__bar">
            <ul className="nav__list" onClick={onTagsContainerClick}>
              <li className="item">
                <Link to="/" className="nav__link current">
                  Головна
                </Link>
              </li>
              <li className="item">
                <a className="nav__link" href="/#tours">
                  Тури
                </a>
              </li>
              <li className="item">
                <a className="nav__link" href="#">
                  Авіарейси
                </a>
              </li>
              <li className="item">
                <a className="nav__link" href="/#hotels">
                  Готелі
                </a>
              </li>
              <li className="item">
                <a className="nav__link" href="/#gallery">
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
              {user ? (
                <a className="nav__link" onClick={userPage}>
                  {user.username}
                </a>
              ) : (
                <a
                  className="nav__link"
                  data-modalreg-open
                  onClick={toggleModal}
                >
                  <svg className="icon-contact" width={16} height={16}>
                    <use href={`${svg1}#icon-user`} />
                  </svg>
                  Профіль
                </a>
              )}
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
