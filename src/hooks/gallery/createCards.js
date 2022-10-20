export default function createCards(cards) {
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
