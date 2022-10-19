import src1 from '../../images/tour/g-6.jpg';
import src2 from '../../images/tour/p-3.jpg';
import src3 from '../../images/tour/korea.jpg';
import svg from '../../images/SVG/symbol.svg';
import { Link } from 'react-router-dom';

const Gallery = () => {
  return (
    <section className="section gallery" id="gallery">
      <div className="overflow-hidden text-gray-700">
        <h2 className="section-title">Галерея наших відвідувачів</h2>
        <div className="px-5 py-2 mx-auto lg:pt-24 lg:px-32">
          <div className="flex flex-wrap -m-1 md:-m-2">
            <div className="flex flex-wrap w-1/2">
              <div className="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp"
                />
              </div>
              <div className="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src={src1}
                />
              </div>
              <div className="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
                />
              </div>
            </div>
            <div className="flex flex-wrap w-1/2">
              <div className="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src={src2}
                />
              </div>
              <div className="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp"
                />
              </div>
              <div className="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src={src3}
                />
              </div>
            </div>
          </div>
        </div>
        <Link to="/gallery" type="submit" className="button">
          Більше
          <svg className="icon-send" width="24" height="24">
            <use href={`${svg}#icon-arrow-right2`} />
          </svg>
        </Link>
      </div>
    </section>
  );
};

export default Gallery;
