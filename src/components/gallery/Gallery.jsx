const Gallery = () => {
  return (
    <main className="main__gallery">
      <div className="container">
        <form className="search__form">
          <div className="search">
            <input
              className="search__input"
              type="text"
              name="searchQuery"
              autoComplete="off"
              placeholder="Search images..."
            />
          </div>
          <button type="submit">Search</button>
        </form>

        <ul className="btn-group_ul">
          <li>
            <button className="submit_button" type="button">
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
          Load more
        </button>
      </div>
    </main>
  );
};

export default Gallery;
