import React, { useState } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const ImageSearch = ({ searchText }) => {
  let searchValue = '';
  let currentPage = 1;

  const onSubmit = event => {
    event.preventDefault();
    searchValue = event.currentTarget.searchQuery.value;
    currentPage = 1;
    if (searchValue === '') {
      Notify.failure('Введіть щось.');
      document.querySelector('.gallery').textContent = '';
      document.querySelector('.load-more').classList.add('is-hidden');
      return;
    }

    searchText(searchValue, currentPage);
  };

  return (
    <form className="search__form" onSubmit={onSubmit}>
      <div className="search">
        <svg width={24} height={24} className="icon">
          <use href={`${require('../../images/SVG/search.svg')}#icon-search`} />
        </svg>

        <input
          className="search__input"
          type="text"
          name="searchQuery"
          autoComplete="off"
          placeholder="Пошук країн..."
        />
      </div>
      <button type="submit">Пошук</button>
    </form>
  );
};

export default ImageSearch;
