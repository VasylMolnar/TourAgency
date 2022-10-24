import { Notify } from 'notiflix/build/notiflix-notify-aio';
import fetchCards from './fetchCards';
import createCards from './createCards';
import throttle from 'lodash.throttle';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

export default function fn() {
  const refs = {
    gallery: document.querySelector('.gallery'),
    searchForm: document.querySelector('.search__form'),
    loadMoreBtn: document.querySelector('.load-more'),
    btn_group: document.querySelector('.btn-group_ul'),
  };

  let currentPage = 1;
  let searchValue = 'Beach';
  let totalHits = 0;

  refs.searchForm.addEventListener('submit', searchForm);
  refs.loadMoreBtn.addEventListener('click', onClickLoadMoreBtn);
  refs.btn_group.addEventListener('click', searchBtn);

  searchCards(searchValue, currentPage);

  let lightbox = new SimpleLightbox('.photo-card a', {
    captions: true,
    captionsData: 'alt',
    captionDelay: 250,
  });

  async function searchCards(searchValue, currentPage) {
    await fetchCards(searchValue, currentPage)
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
          refs.loadMoreBtn.classList.add('is-hidden');
          return;
        }

        refs.gallery.textContent = '';
        const markup = createCards(value.hits);
        refs.gallery.insertAdjacentHTML('afterbegin', markup);
        lightbox.refresh();
        Notify.success(`Ура! Ми знайшли ${value.totalHits} зображень.`);

        window.addEventListener('scroll', throttle(onScrollWindow, 500));

        const { height: cardHeight } = document
          .querySelector('.gallery')
          .firstElementChild.getBoundingClientRect();

        window.scrollBy({
          top: cardHeight * -100,
          behavior: 'smooth',
        });
      })
      .catch(error => {
        console.log(error);
        return error;
      });
  }

  function searchBtn(event) {
    searchValue = event.target.dataset.search;
    currentPage = 1;
    searchCards(searchValue, currentPage);
  }

  function searchForm(event) {
    event.preventDefault();
    searchValue = event.currentTarget.searchQuery.value;
    currentPage = 1;

    if (searchValue === '') {
      Notify.failure('Введіть щось.');
      refs.gallery.textContent = '';
      refs.searchForm.reset();
      refs.loadMoreBtn.classList.add('is-hidden');
      return;
    }

    searchCards(searchValue, currentPage);
  }

  async function onClickLoadMoreBtn() {
    currentPage += 1;
    const response = await fetchCards(searchValue, currentPage);
    refs.gallery.insertAdjacentHTML('beforeend', createCards(response.hits));
    lightbox.refresh();
    totalHits += response.hits.length;

    if (totalHits === response.totalHits) {
      refs.loadMoreBtn.classList.add('is-hidden');
      setTimeout(() => {
        Notify.failure('Вибачте, але ви досягли кінця результатів пошуку.');
      }, 3000);
    }
  }

  async function onScrollWindow() {
    const documentRect = document.documentElement.getBoundingClientRect();
    const heightBeforeLoading = 300;
    if (
      documentRect.bottom <
      document.documentElement.clientHeight + heightBeforeLoading
    ) {
      currentPage += 1;
      const response = await fetchCards(searchValue, currentPage);
      refs.gallery.insertAdjacentHTML('beforeend', createCards(response.hits));
      lightbox.refresh();

      totalHits += response.hits.length;

      if (totalHits === response.totalHits) {
        refs.loadMoreBtn.classList.add('is-hidden');
        setTimeout(() => {
          Notify.failure('Вибачте, але ви досягли кінця результатів пошуку.');
        }, 3000);
      }
    }
  }
}
