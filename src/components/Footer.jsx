import svg from '../images/SVG/symbol-defs.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="container-adress">
          <div className="footer_address">
            <a href="#" className="site-logo">
              <span>Tour</span>Agency
            </a>
            <address className="footer_address">
              <ul style={{ listStyleType: 'none' }}>
                <li>
                  <a
                    className="Address"
                    href="https://bit.ly/3pXMvUd"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    м. Київ, пр-т Лесі Українки, 26
                  </a>{' '}
                </li>
                <li>
                  <a className="Link" href="mailto:info@touragency.com">
                    info@touragency.com
                  </a>
                </li>
                <li>
                  <a className="tel" href="tel:+380961111111">
                    +38 096 111 11 11
                  </a>{' '}
                </li>
              </ul>
            </address>
          </div>
          <div className="footer_link">
            <h4 className="footer_h4">приєднуйтесь</h4>
            <ul className="footer_ul">
              <li className="item">
                <a
                  href="https://www.instagram.com"
                  className="social__networks"
                >
                  <svg className="icon-team icon-footer" width={20} height={20}>
                    <use href={`${svg}#icon-instagram`} />
                  </svg>
                </a>
              </li>
              <li className="item">
                <a href="https://www.twitter.com" className="social__networks">
                  <svg className="icon-team icon-footer" width={20} height={20}>
                    <use href={`${svg}#icon-twitter`} />
                  </svg>
                </a>
              </li>
              <li className="item">
                <a href="https://www.facebook.com" className="social__networks">
                  <svg className="icon-team icon-footer" width={20} height={20}>
                    <use href={`${svg}#icon-facebook`} />
                  </svg>
                </a>
              </li>
              <li className="item">
                <a href="https://www.linkedin.com" className="social__networks">
                  <svg className="icon-team icon-footer" width={20} height={20}>
                    <use href={`${svg}#icon-linkedin`} />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
          <div className="footer_subscription">
            <form className="subscription_form">
              <label htmlFor="mail" className="join-in">
                Підпишіться на розсилку
              </label>
              <input type="email" name="mail" id="mail" placeholder="E-mail" />
              <button type="submit" className="button">
                Підписатися
                <svg className="icon-send" width={24} height={24}>
                  <use href="./images/SVG/symbol-defs.svg#icon-send" />
                  <use
                    href={`${require('../images/SVG/symbol-defs.svg')}#icon-send`}
                  />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
