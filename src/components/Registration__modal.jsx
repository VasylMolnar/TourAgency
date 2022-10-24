import svg from '../images/SVG/icons.svg';

const Registration_modal = () => {
  function toggleModal() {
    document
      .querySelector('.backdrop__registration')
      .classList.toggle('is-hidden');
  }

  function login() {
    document.querySelector('form.login').style.marginLeft = '0%';
    document.querySelector('.title-text .login').style.marginLeft = '0%';
    document.querySelector('label.login').style.color = 'white';
    document.querySelector('label.signup').style.color = 'black';
  }

  function signup() {
    document.querySelector('form.login').style.marginLeft = '-50%';
    document.querySelector('.title-text .login').style.marginLeft = '-50%';
    document.querySelector('label.login').style.color = 'black';
    document.querySelector('label.signup').style.color = 'white';
  }

  return (
    <div className="registration__modal">
      <div className="backdrop__registration is-hidden">
        <div className="wrapper">
          <div className="title-text">
            <div className="title login">Форма входу</div>
            <div className="title signup">Реєстрація</div>
          </div>
          <div className="form-container">
            <div className="slide-controls">
              <label htmlFor="login" className="slide login" onClick={login}>
                Увійти
              </label>
              <label htmlFor="signup" className="slide signup" onClick={signup}>
                Реєстрація
              </label>
              <input type="radio" name="slide" id="login" defaultChecked />
              <input type="radio" name="slide" id="signup" />
              <div className="slider-tab" />
            </div>
            <div className="form-inner">
              <form action="#" className="login" style={{ marginLeft: '0%' }}>
                <div className="field">
                  <input
                    type="text"
                    placeholder="Адреса електронної пошти"
                    required
                  />
                </div>
                <div className="field">
                  <input type="password" placeholder="Пароль" required />
                </div>
                <div className="pass-link">
                  <a href="#">Забули пароль?</a>
                </div>
                <div className="field btn">
                  <div className="btn-layer" />
                  <input type="submit" defaultValue="Увійти" />
                </div>
              </form>
              <form action="#" className="signup">
                <div className="field">
                  <input
                    type="text"
                    placeholder="Адреса електронної пошти"
                    required
                  />
                </div>
                <div className="field">
                  <input type="password" placeholder="Пароль" required />
                </div>
                <div className="field">
                  <input
                    type="password"
                    placeholder="Підтвердьте пароль"
                    required
                  />
                </div>
                <div className="field btn">
                  <div className="btn-layer" />
                  <input type="submit" defaultValue="Реєстрація" />
                </div>
              </form>
            </div>
          </div>
          <button
            type="submit"
            className="close"
            data-modalreg-close
            onClick={toggleModal}
          >
            <svg className="icon-close" width={11} height={11}>
              <use href={`${svg}#icon-close`} />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Registration_modal;
