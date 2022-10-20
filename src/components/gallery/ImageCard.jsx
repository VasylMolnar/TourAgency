import React from 'react';

const imageCard = ({ image }) => {
  const tags = image.tags.split(',');

  return (
    <div className="photo-card">
      <a href={image.largeImageURL}>
        <img src={image.webformatURL} alt={tags} />
      </a>

      <div className="info">
        <p className="info-item">
          <b>Likes</b> {image.likes}
        </p>

        <p className="info-item">
          <b>Views</b> {image.views}
        </p>

        <p className="info-item">
          <b>Comments</b>
          {image.comments}
        </p>
        <p className="info-item">
          <b>Downloads</b>
          {image.downloads}
        </p>
      </div>
    </div>
  );
};

export default imageCard;
