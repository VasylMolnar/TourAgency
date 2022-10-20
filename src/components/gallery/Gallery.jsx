const Gallery = () => {
  return (
    <main className="main__gallery">
      <div className="container">
        <form className="search__form">
          <div className="search">
            <svg width={24} height={24} className="icon">
              <use
                href={`${require('../../images/SVG/search.svg')}#icon-search`}
              />
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

        <ul className="btn-group_ul">
          <li>
            <button className="submit_button" type="button" data>
              Україна
            </button>
          </li>
          <li>
            <button className="submit_button" type="button">
              США
            </button>
          </li>
          <li>
            <button className="submit_button" type="button">
              Франція
            </button>
          </li>
          <li>
            <button className="submit_button" type="button">
              Египет
            </button>
          </li>
          <li>
            <button className="submit_button last" type="button">
              Греція
            </button>
          </li>
          <li>
            <button className="submit_button" type="button">
              Туречина
            </button>
          </li>
          <li>
            <button className="submit_button last" type="button">
              Канада
            </button>
          </li>
        </ul>

        <div className="gallery" />
        <button type="button" className="load-more is-hidden">
          Завантажити більше
        </button>
      </div>
    </main>
  );
};

export default Gallery;
