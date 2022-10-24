import React, { useState, useEffect } from 'react';
import fn from '../../hooks/gallery/index';

const Gallery = () => {
  /*
  const [name, setValue] = useState('Beach');

  let page = 1;
  let totalHits = 0;

  useEffect(() => {
    const refs = {
      gallery: document.querySelector('.gallery'),
      searchForm: document.querySelector('.search__form'),
      loadMoreBtn: document.querySelector('.load-more'),
    };

    fetchCards(name, page)
      .then(value => {
        totalHits = value.hits.length;

        if (value.totalHits > 40) {
          refs.loadMoreBtn.classList.remove('is-hidden');
        } else {
          refs.loadMoreBtn.classList.add('is-hidden');
        }

        if (value.totalHits == 0) {
          Notify.failure(
            'Вибачте, немає зображень, які відповідають вашому пошуковому запиту. Будь ласка спробуйте ще раз.'
          );
          refs.gallery.textContent = '';
          refs.searchForm.reset();
          return;
        }

        refs.gallery.textContent = '';
        const markup = createCards(value.hits);
        refs.gallery.insertAdjacentHTML('afterbegin', markup);
        Notify.success(`Вітаю! Ми знайшли ${totalHits} зображень.`);
        //lightbox.refresh();
      })
      .catch(error => {
        console.log(error);
        return error;
      });
  }, [name]);

  async function onClickLoadMoreBtn() {
    const refs = {
      gallery: document.querySelector('.gallery'),
      searchForm: document.querySelector('.search-form'),
      loadMoreBtn: document.querySelector('.load-more'),
    };

    page++;
    await fetchCards(name, page)
      .then(value => {
        refs.gallery.insertAdjacentHTML('beforeend', createCards(value.hits));
        totalHits += value.hits.length;
        //lightbox.refresh();
      })
      .catch(error => {
        console.log(error);
        refs.loadMoreBtn.classList.add('is-hidden');
        Notify.failure('Вибачте, але ви досягли кінця результатів пошуку.');
        return error;
      });
  }

  return (
    <main className="main__gallery">
      <div className="container">
        <ImageSearch
          searchText={(text, page) => {
            page = 1;
            setValue(text);
          }}
        />

        <ul className="btn-group_ul">
          <li>
            <button
              className="submit_button"
              type="button"
              data-search="Ukraine"
            >
              Україна
            </button>
          </li>
          <li>
            <button className="submit_button" type="button" data-search="USA">
              США
            </button>
          </li>
          <li>
            <button
              className="submit_button"
              type="button"
              data-search="France"
            >
              Франція
            </button>
          </li>
          <li>
            <button className="submit_button" type="button" data-search="Egypt">
              Египет
            </button>
          </li>
          <li>
            <button
              className="submit_button last"
              type="button"
              data-search="Greece"
            >
              Греція
            </button>
          </li>
          <li>
            <button
              className="submit_button"
              type="button"
              data-search="Turkey"
            >
              Туречина
            </button>
          </li>
          <li>
            <button
              className="submit_button last"
              type="button"
              data-search="Canada"
            >
              Канада
            </button>
          </li>
        </ul>

        <div className="gallery"></div>
        <button
          type="button"
          className="load-more is-hidden"
          onClick={onClickLoadMoreBtn}
        >
          Завантажити більше
        </button>
      </div>
    </main>
  );
  */

  useEffect(() => {
    fn();
  });

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
            <button
              className="submit_button"
              type="button"
              data-search="Ukraine"
            >
              Україна
            </button>
          </li>
          <li>
            <button className="submit_button" type="button" data-search="USA">
              США
            </button>
          </li>
          <li>
            <button
              className="submit_button"
              type="button"
              data-search="France"
            >
              Франція
            </button>
          </li>
          <li>
            <button className="submit_button" type="button" data-search="Egypt">
              Египет
            </button>
          </li>
          <li>
            <button
              className="submit_button last"
              type="button"
              data-search="Greece"
            >
              Греція
            </button>
          </li>
          <li>
            <button
              className="submit_button"
              type="button"
              data-search="Turkey"
            >
              Туречина
            </button>
          </li>
          <li>
            <button
              className="submit_button last"
              type="button"
              data-search="Canada"
            >
              Канада
            </button>
          </li>
        </ul>

        <div className="gallery"></div>
        <button type="button" className="load-more is-hidden">
          Завантажити більше
        </button>
      </div>
    </main>
  );
};

export default Gallery;
