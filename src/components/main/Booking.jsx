import React from 'react';
import img from '../../images/logo/contact-img.svg';

const Booking = () => {
  return (
    <section className="section booking">
      <div className="container">
        <h1>
          РЕЗЕРВУВАТИ <span>ЗАРАЗ</span>
        </h1>
        <div className="row">
          <div className="image">
            <img src={img} alt loading="lazy" />
          </div>
          <form className="form">
            <label>
              Куди
              <input type="text" placeholder="назва місця" />
            </label>
            <label>
              Скільки
              <input type="number" placeholder="кількість гостей" />
            </label>
            <label>
              Прибуття
              <input type="date" />
            </label>
            <label>
              Виїжджаючи
              <input type="date" />
            </label>
            <button className="booking__button" type="submit">
              Резервувати
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Booking;
