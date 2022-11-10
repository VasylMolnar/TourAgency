import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './user.scss';
import { useNavigate } from 'react-router-dom';
import List from '../../components/table/Table';
import Chart from '../../components/chart/Chart';
import useFetch from '../../hooks/useFetch.js';
import React, { useState, useEffect } from 'react';

const User = () => {
  /*
  const navigate = useNavigate();

  const { data } = useFetch(
    `/users/${JSON.parse(localStorage.getItem('user'))._id}`
  );

  const exit = () => {
    localStorage.clear();
    navigate('/');
    location.reload();
  };

  const update = () => {
    navigate('/updateUser');
  };

  return (
    <div className="single">
      <Header />
      <div className="singleContainer">
        <div className="top">
          <div className="left">
            <div className="editButton" onClick={update}>
              Редагувати
            </div>
            <h1 className="title">Інформація</h1>

            {[data].map(item => (
              <div className="item">
                <img src={item.img} alt="img" className="itemImg" />
                <div className="details">
                  <h1 className="itemTitle">{item.username}</h1>
                  <div className="detailItem">
                    <span className="itemKey">Email:</span>
                    <span className="itemValue">{item.email}</span>
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">Телефон:</span>
                    <span className="itemValue">{item.phone}</span>
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">Країна:</span>
                    <span className="itemValue">{item.country}</span>
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">Місто:</span>
                    <span className="itemValue">{item.city}</span>
                  </div>

                  <button className="btnExit" onClick={exit}>
                    Вихід
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="right">
            <Chart aspect={3 / 1} title="User Spending ( Last 6 Months)" />
          </div>
        </div>
        <div className="bottom">
          <h1 className="title">Останні транзакції</h1>
          <List />
        </div>
        <Footer />
      </div>
    </div>
  );
  */
};

export default User;
