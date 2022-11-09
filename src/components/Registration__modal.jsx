import svg from '../images/SVG/icons.svg';
import axios from 'axios';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

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
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
    email: undefined,
    phone: undefined,
    city: undefined,
    country: undefined,
  });

  const handleChange = e => {
    setCredentials(prev => ({ ...prev, [e.target.id]: e.target.value }));
  };

  //login
  const { loading, error, dispatch } = useContext(AuthContext);
  const handleClickLogin = async e => {
    e.preventDefault();
    dispatch({ type: 'LOGIN_START' });

    try {
      const res = await axios.post(
        'http://localhost:8800/auth/login',
        credentials
      );
      dispatch({ type: 'LOGIN_SUCCESS', payload: res.data.details });
      navigate('/user');
      Notify.success('Вітаємо');
    } catch (err) {
      Notify.warning(err.message);
      dispatch({ type: 'LOGIN_FAILURE', payload: err.response.data });
    }
  };

  //signup
  const handleClickSignup = async e => {
    e.preventDefault();

    try {
      const res = await axios.post(
        'http://localhost:8800/auth/register',
        credentials
      );
      navigate('/');
      Notify.success('Вітаємо з реєстрацією');
    } catch (err) {
      Notify.warning(err.message);
    }
  };

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
                    id="username"
                    type="text"
                    placeholder="Адреса електронної пошти або імя"
                    onChange={handleChange}
                  />
                </div>
                <div className="field">
                  <input
                    id="password"
                    type="password"
                    placeholder="Пароль"
                    onChange={handleChange}
                  />
                </div>
                <div className="pass-link">
                  <a href="#">Забули пароль?</a>
                </div>
                <div className="field btn">
                  <div className="btn-layer" />
                  <input
                    type="submit"
                    disabled={loading}
                    onClick={handleClickLogin}
                  />

                  {error && <span>{error.message}</span>}
                </div>
              </form>
              <form action="#" className="signup">
                <div className="field">
                  <input
                    type="text"
                    id="email"
                    placeholder="Адреса електронної пошти"
                    required
                    onChange={handleChange}
                  />
                </div>
                <div className="field">
                  <input
                    type="text"
                    id="username"
                    placeholder="Імя"
                    required
                    onChange={handleChange}
                  />
                </div>
                <div className="field">
                  <input
                    type="tel"
                    id="phone"
                    placeholder="Телефон"
                    required
                    onChange={handleChange}
                  />
                </div>
                <div className="field">
                  <input
                    type="text"
                    id="country"
                    placeholder="Країна"
                    required
                    onChange={handleChange}
                  />
                </div>
                <div className="field">
                  <input
                    type="password"
                    id="password"
                    placeholder="Пароль"
                    required
                    onChange={handleChange}
                  />
                </div>

                <div className="field btn">
                  <div className="btn-layer" />
                  <input type="submit" onClick={handleClickSignup} />
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
