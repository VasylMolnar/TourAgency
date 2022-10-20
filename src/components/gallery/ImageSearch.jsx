import React, { useState } from 'react';

const ImageSearch = ({ searchText }) => {
  const [text, setText] = useState('');
  const page = 1;
  const onSubmit = e => {
    e.preventDefault();
    searchText(text, page);
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
