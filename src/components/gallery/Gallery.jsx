import { Notify } from 'notiflix/build/notiflix-notify-aio';

const Gallery = () => {
  async function fetchCountries(name, page) {
    const url = 'https://pixabay.com/api/';
    const key = '29730339-d122beaa10b573098fe13e924';
    const filter = `?key=${key}&q=${name}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${page}`;

    return await axios.get(`${url}${filter}`).then(response => response.data);
  }

  function createCards(cards) {
    return cards
      .map(
        ({
          largeImageURL,
          webformatURL,
          tags,
          likes,
          views,
          comments,
          downloads,
        } = {}) => {
          return `<div class='photo-card'>
          <a href=${largeImageURL}>
            <img src=${webformatURL}, loading="lazy", alt=${tags}  />
          </a>
          <div class='info'>
            <p class='info-item'>
              <b>Likes</b>
              ${likes}
            </p>
            <p class='info-item'>
              <b>Views</b>
              ${views}
            </p>
            <p class='info-item'>
              <b>Comments</b>
              ${comments}
            </p>
            <p class='info-item'>
              <b>Downloads</b>
              ${downloads}
            </p>
          </div>
        </div>`;
        }
      )
      .join('');
  }

  const refs = {
    gallery: document.querySelector('.gallery'),
    searchForm: document.querySelector('.search-form'),
    loadMoreBtn: document.querySelector('.load-more'),
  };

  let currentPage = 1;
  let searchValue = '';
  let totalHits = 0;

  //refs.searchForm.addEventListener('submit', searchImage);
  //refs.loadMoreBtn.addEventListener('click', onClickLoadMoreBtn);

  async function searchImage(event) {
    event.preventDefault();
    searchValue = event.currentTarget.searchQuery.value;
    currentPage = 1;

    if (searchValue === '') {
      Notify.failure('Enter something.');
      refs.gallery.textContent = '';
      refs.searchForm.reset();
      refs.loadMoreBtn.classList.add('is-hidden');
      return;
    }

    await fetchCountries(searchValue, currentPage)
      .then(value => {
        totalHits = value.hits.length;

        if (value.totalHits > 40) {
          refs.loadMoreBtn.classList.remove('is-hidden');
        } else {
          refs.loadMoreBtn.classList.add('is-hidden');
        }

        if (value.totalHits == 0) {
          Notify.failure(
            'Sorry, there are no images matching your search query. Please try again.'
          );
          refs.gallery.textContent = '';
          refs.searchForm.reset();
          return;
        }

        refs.gallery.textContent = '';
        const markup = createCards(value.hits);
        refs.gallery.insertAdjacentHTML('afterbegin', markup);
        Notify.success(`Hooray! We found ${totalHits} images.`);
        //lightbox.refresh();
      })
      .catch(error => {
        console.log(error);
        return error;
      });
  }

  async function onClickLoadMoreBtn() {
    currentPage += 1;
    await fetchCountries(searchValue, currentPage)
      .then(value => {
        refs.gallery.insertAdjacentHTML('beforeend', createCards(value.hits));
        totalHits += value.hits.length;
        //lightbox.refresh();
      })
      .catch(error => {
        console.log(error);
        refs.loadMoreBtn.classList.add('is-hidden');
        Notify.failure(
          "We're sorry, but you've reached the end of search results."
        );
        Notify.success(`Hooray! We found ${totalHits} images.`);
        return error;
      });
  }

  /*
  const lightbox = new SimpleLightbox('.photo-card a', {
    captions: true,
    captionsData: 'alt',
    captionDelay: 250,
  });*/

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
          <button type="submit" onClick={searchImage}>
            Пошук
          </button>
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

        <div className="gallery" />
        <button type="button" className="load-more is-hidden">
          Завантажити більше
        </button>
      </div>
    </main>
  );
};

export default Gallery;
