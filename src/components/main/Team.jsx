import svg from '../../images/SVG/symbol-defs.svg';

const Team = () => {
  return (
    <section className="section team">
      <div className="container">
        <h2 className="section-title">Наша команда</h2>
        <ul className="team__ul">
          <li className="team__li">
            <figure>
              <picture>
                <source
                  srcSet={require('../../images/team/Igor-480.jpg')}
                  media="(max-width: 767px)"
                />
                <source
                  srcSet={require('../../images/team/Igor-768.jpg')}
                  media="(max-width: 1199px)"
                />
                <source
                  srcSet={require('../../images/team/Igor.jpg')}
                  media="(min-width: 1200px)"
                />
                <img
                  src={require('../../images/team/Igor-480.jpg')}
                  alt="Ігор Дем'яненко"
                />
              </picture>
              <figcaption className="figcaption">
                Ігор Дем'яненко
                <p className="figcaption_p">Директор фірми </p>
                <ul className="figure_ul">
                  <li className="item">
                    <a
                      href="https://www.instagram.com"
                      className="social__networks"
                    >
                      <svg className="icon-team" width={20} height={20}>
                        <use href={`${svg}#icon-instagram`} />
                      </svg>
                    </a>
                  </li>
                  <li className="item">
                    <a
                      href="https://www.twitter.com"
                      className="social__networks"
                    >
                      <svg className="icon-team" width={20} height={20}>
                        <use href={`${svg}#icon-twitter`} />
                      </svg>
                    </a>
                  </li>
                  <li className="item">
                    <a
                      href="https://www.facebook.com"
                      className="social__networks"
                    >
                      <svg className="icon-team" width={20} height={20}>
                        <use href={`${svg}#icon-facebook`} />
                      </svg>
                    </a>
                  </li>
                  <li className="item">
                    <a
                      href="https://www.linkedin.com"
                      className="social__networks"
                    >
                      <svg className="icon-team" width={20} height={20}>
                        <use href={`${svg}#icon-linkedin`} />
                      </svg>
                    </a>
                  </li>
                </ul>
              </figcaption>
            </figure>
          </li>
          <li className="team__li">
            <figure>
              <picture>
                <source
                  srcSet={require('../../images/team/Olga-480.jpg')}
                  media="(max-width: 767px)"
                />
                <source
                  srcSet={require('../../images/team/Olga-768.jpg')}
                  media="(max-width: 1199px)"
                />
                <source
                  srcSet={require('../../images/team/Olga.jpg')}
                  media="(min-width: 1200px)"
                />
                <img
                  src={require('../../images/team/Olga-480.jpg')}
                  alt="Ольга Рєпіна"
                />
              </picture>
              <figcaption className="figcaption">
                Ольга Рєпіна
                <p className="figcaption_p">Головний менеджер</p>
                <ul className="figure_ul">
                  <li className="item">
                    <a
                      href="https://www.instagram.com"
                      className="social__networks"
                    >
                      <svg className="icon-team" width={20} height={20}>
                        <use href={`${svg}#icon-instagram`} />
                      </svg>
                    </a>
                  </li>
                  <li className="item">
                    <a
                      href="https://www.twitter.com"
                      className="social__networks"
                    >
                      <svg className="icon-team" width={20} height={20}>
                        <use href={`${svg}#icon-twitter`} />
                      </svg>
                    </a>
                  </li>
                  <li className="item">
                    <a
                      href="https://www.facebook.com"
                      className="social__networks"
                    >
                      <svg className="icon-team" width={20} height={20}>
                        <use href={`${svg}#icon-facebook`} />
                      </svg>
                    </a>
                  </li>
                  <li className="item">
                    <a
                      href="https://www.linkedin.com"
                      className="social__networks"
                    >
                      <svg className="icon-team" width={20} height={20}>
                        <use href={`${svg}#icon-linkedin`} />
                      </svg>
                    </a>
                  </li>
                </ul>
              </figcaption>
            </figure>
          </li>
          <li className="team__li">
            <figure>
              <picture>
                <source
                  srcSet={require('../../images/team/Nikolay-480.jpg')}
                  media="(max-width: 767px)"
                />
                <source
                  srcSet={require('../../images/team/Nikolay-768.jpg')}
                  media="(max-width: 1199px)"
                />
                <source
                  srcSet={require('../../images/team/Nikolay.jpg')}
                  media="(min-width: 1200px)"
                />
                <img
                  src={require('../../images/team/Nikolay-480.jpg')}
                  alt="Микола Тарасов"
                />
              </picture>
              <figcaption className="figcaption">
                Микола Тарасов
                <p className="figcaption_p">Гід в багатоденних турах</p>
                <ul className="figure_ul">
                  <li className="item">
                    <a
                      href="https://www.instagram.com"
                      className="social__networks"
                    >
                      <svg className="icon-team" width={20} height={20}>
                        <use href={`${svg}#icon-instagram`} />
                      </svg>
                    </a>
                  </li>
                  <li className="item">
                    <a
                      href="https://www.twitter.com"
                      className="social__networks"
                    >
                      <svg className="icon-team" width={20} height={20}>
                        <use href={`${svg}#icon-twitter`} />
                      </svg>
                    </a>
                  </li>
                  <li className="item">
                    <a
                      href="https://www.facebook.com"
                      className="social__networks"
                    >
                      <svg className="icon-team" width={20} height={20}>
                        <use href={`${svg}#icon-facebook`} />
                      </svg>
                    </a>
                  </li>
                  <li className="item">
                    <a
                      href="https://www.linkedin.com"
                      className="social__networks"
                    >
                      <svg className="icon-team" width={20} height={20}>
                        <use href={`${svg}#icon-linkedin`} />
                      </svg>
                    </a>
                  </li>
                </ul>
              </figcaption>
            </figure>
          </li>
          <li className="team__li">
            <figure>
              <picture>
                <source
                  srcSet={require('../../images/team/Mikhail-480.jpg')}
                  media="(max-width: 767px)"
                />
                <source
                  srcSet={require('../../images/team/Mikhail-768.jpg')}
                  media="(max-width: 1199px)"
                />
                <source
                  srcSet={require('../../images/team/Mikhail.jpg')}
                  media="(min-width: 1200px)"
                />
                <img
                  src={require('../../images/team/Mikhail-480.jpg')}
                  alt="Михайло Єрмаков"
                />
              </picture>
              <figcaption className="figcaption">
                Михайло Єрмаков
                <p className="figcaption_p">Екскурсовод</p>
                <ul className="figure_ul">
                  <li className="item">
                    <a
                      href="https://www.instagram.com"
                      className="social__networks"
                    >
                      <svg className="icon-team" width={20} height={20}>
                        <use href={`${svg}#icon-instagram`} />
                      </svg>
                    </a>
                  </li>
                  <li className="item">
                    <a
                      href="https://www.twitter.com"
                      className="social__networks"
                    >
                      <svg className="icon-team" width={20} height={20}>
                        <use href={`${svg}#icon-twitter`} />
                      </svg>
                    </a>
                  </li>
                  <li className="item">
                    <a
                      href="https://www.facebook.com"
                      className="social__networks"
                    >
                      <svg className="icon-team" width={20} height={20}>
                        <use href={`${svg}#icon-facebook`} />
                      </svg>
                    </a>
                  </li>
                  <li className="item">
                    <a
                      href="https://www.linkedin.com"
                      className="social__networks"
                    >
                      <svg className="icon-team" width={20} height={20}>
                        <use href={`${svg}#icon-linkedin`} />
                      </svg>
                    </a>
                  </li>
                </ul>
              </figcaption>
            </figure>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Team;
