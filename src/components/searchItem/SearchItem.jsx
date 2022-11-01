import { Link } from 'react-router-dom';
import './searchItem.css';

const SearchItem = ({ item }) => {
  return (
    <div className="searchItem">
      <img src={item.photos[0]} alt="" className="siImg" />
      <div className="siDesc">
        <h1 className="siTitle">{item.name}</h1>
        <span className="siDistance">{item.distance}m з центру</span>
        <span className="siTaxiOp">Безкоштовне таксі</span>
        <span className="siSubtitle">Апартаменти-студіо з кондиціонером</span>
        <span className="siFeatures">{item.desc}</span>
        <span className="siCancelOp">Безкоштовне скасування </span>
        <span className="siCancelOpSubtitle">
          Ви можете скасувати пізніше, тож зафіксуйте цю чудову ціну вже
          сьогодні!
        </span>
      </div>
      <div className="siDetails">
        {item.rating && (
          <div className="siRating">
            <span>Чудово</span>
            <button>{item.rating}</button>
          </div>
        )}
        <div className="siDetailTexts">
          <span className="siPrice">${item.cheapestPrice}</span>
          <span className="siTaxOp">Включає податки та збори</span>
          <Link to={`/hotels/${item._id}`}>
            <button className="siCheckButton">Переглянути</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
