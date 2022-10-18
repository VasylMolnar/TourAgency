import img1 from '../../images/tour/g-3.jpg';
import img2 from '../../images/tour/g-5.jpg';
import img3 from '../../images/tour/p-1.jpg';
import img4 from '../../images/tour/p-4.jpg';
import img5 from '../../images/tour/p-5.jpg';
import img6 from '../../images/tour/p-2.jpg';
import img7 from '../../images/tour/p-3.jpg';
import img8 from '../../images/tour/g-7.jpg';
import img9 from '../../images/tour/g-8.jpg';
import img10 from '../../images/tour/g-9.jpg';

const Tour = () => {
  return (
    <section className="section tours" id="tours">
      <div className="container">
        <h1>Гарячі тури</h1>
        <ul className="tours__ul">
          <li className="tours__li">
            <div className="photo">
              <h3 className="description">Афінський акрополь</h3>
              <img src={img1} alt="Афінський акрополь" />
              <p className="text">
                Ресурс пропонує комплексні пропозиції з різним рівнем
                функціоналу та сервісів. Все це дозволить відвідувачу отримати
                вичерпні відомості про компанію чи приватну особу.
                <button className="text__btn">Більше</button>
              </p>
            </div>
          </li>
          <li className="tours__li">
            <div className="photo">
              <img src={img2} alt="Пізанська вежа" />
              <h3 className="description">Пізанська вежа</h3>
              <p className="text">
                Ресурс пропонує комплексні пропозиції з різним рівнем
                функціоналу та сервісів. Все це дозволить відвідувачу отримати
                вичерпні відомості про компанію чи приватну особу.
                <button className="text__btn">Більше</button>
              </p>
            </div>
          </li>
          <li className="tours__li">
            <div className="photo">
              <img src={img3} alt="Gateway Of India Mumbai" />
              <h3 className="description">Gateway Of India Mumbai</h3>
              <p className="text">
                Ресурс пропонує комплексні пропозиції з різним рівнем
                функціоналу та сервісів. Все це дозволить відвідувачу отримати
                вичерпні відомості про компанію чи приватну особу.
                <button className="text__btn">Більше</button>
              </p>
            </div>
          </li>
          <li className="tours__li">
            <div className="photo">
              <img src={img4} alt="Париж" />
              <h3 className="description">Париж</h3>
              <p className="text">
                Ресурс пропонує комплексні пропозиції з різним рівнем
                функціоналу та сервісів. Все це дозволить відвідувачу отримати
                вичерпні відомості про компанію чи приватну особу.
                <button className="text__btn">Більше</button>
              </p>
            </div>
          </li>
          <li className="tours__li">
            <div className="photo">
              <img src={img5} alt="Arakurayama Sengen Park" />
              <h3 className="description">Arakurayama Sengen Park</h3>
              <p className="text">
                Ресурс пропонує комплексні пропозиції з різним рівнем
                функціоналу та сервісів. Все це дозволить відвідувачу отримати
                вичерпні відомості про компанію чи приватну особу.
                <button className="text__btn">Більше</button>
              </p>
            </div>
          </li>
          <li className="tours__li">
            <div className="photo">
              <img src={img6} alt="Banff National Park" />
              <h3 className="description">Banff National Park</h3>
              <p className="text">
                Ресурс пропонує комплексні пропозиції з різним рівнем
                функціоналу та сервісів. Все це дозволить відвідувачу отримати
                вичерпні відомості про компанію чи приватну особу.
                <button className="text__btn">Більше</button>
              </p>
            </div>
          </li>
          <li className="tours__li">
            <div className="photo">
              <img src={img7} alt="Hickson Road Reserve" />
              <h3 className="description">Hickson Road Reserve</h3>
              <p className="text">
                Ресурс пропонує комплексні пропозиції з різним рівнем
                функціоналу та сервісів. Все це дозволить відвідувачу отримати
                вичерпні відомості про компанію чи приватну особу.
                <button className="text__btn">Більше</button>
              </p>
            </div>
          </li>
          <li className="tours__li">
            <div className="photo">
              <img src={img8} alt="Balloons" />
              <h3 className="description">Balloons</h3>
              <p className="text">
                Ресурс пропонує комплексні пропозиції з різним рівнем
                функціоналу та сервісів. Все це дозволить відвідувачу отримати
                вичерпні відомості про компанію чи приватну особу.
                <button className="text__btn">Більше</button>
              </p>
            </div>
          </li>
          <li className="tours__li">
            <div className="photo">
              <img src={img9} alt="Camping" />
              <h3 className="description">Camping</h3>
              <p className="text">
                Ресурс пропонує комплексні пропозиції з різним рівнем
                функціоналу та сервісів. Все це дозволить відвідувачу отримати
                вичерпні відомості про компанію чи приватну особу.
                <button className="text__btn">Більше</button>
              </p>
            </div>
          </li>
          <li className="tours__li">
            <div className="photo">
              <img src={img10} alt="Pyramids" />
              <h3 className="description">Pyramids</h3>
              <p className="text">
                Ресурс пропонує комплексні пропозиції з різним рівнем
                функціоналу та сервісів. Все це дозволить відвідувачу отримати
                вичерпні відомості про компанію чи приватну особу.
                <button className="text__btn">Більше</button>
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Tour;
