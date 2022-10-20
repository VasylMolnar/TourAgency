import { Notify } from 'notiflix/build/notiflix-notify-aio';
import ImageSearch from './ImageSearch';
import ImageCard from './ImageCard';
import React, { useState, useEffect } from 'react';

const Gallery = () => {
  const [images, SetImages] = useState([]);
  const [name, setTerm] = useState('');
  const key = '29730339-d122beaa10b573098fe13e924';

  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=${key}&q=${name}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40`
    )
      .then(res => res.json())
      .then(data => {
        SetImages(data.hits);
      })
      .catch(err => console.log(err));
  }, [name]);

  return (
    <main className="main__gallery">
      <div className="container">
        <ImageSearch searchText={(text, page) => setTerm(text)} />

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

        <div className="gallery">
          {images.map(image => (
            <ImageCard key={image.id} image={image} />
          ))}
          <button type="button" className="load-more is-hidden">
            Завантажити більше
          </button>
        </div>
      </div>
    </main>
  );
};

export default Gallery;
