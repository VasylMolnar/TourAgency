const Gallery = () => {
  return (
    <main className="main">
      <div className="container">
        <ul className="btn-group_ul">
          <li>
            <button className="submit_button" type="button">
              Усі
            </button>
          </li>
          <li>
            <button className="submit_button" type="button">
              Веб-сайти
            </button>
          </li>
          <li>
            <button className="submit_button" type="button">
              Додатки
            </button>
          </li>
          <li>
            <button className="submit_button" type="button">
              Дизайн
            </button>
          </li>
          <li>
            <button className="submit_button last" type="button">
              Маркетинг
            </button>
          </li>
        </ul>
      </div>
    </main>
  );
};

export default Gallery;
