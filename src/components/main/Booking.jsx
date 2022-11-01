import React from 'react';
import { Notify } from 'notiflix';
import {
  faBed,
  faCalendarDays,
  faPerson,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { DateRange } from 'react-date-range';
import { useContext, useState } from 'react';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom';
import { SearchContext } from '../../context/SearchContext';

const Booking = ({ type }) => {
  const [destination, setDestination] = useState('');
  const [openDate, setOpenDate] = useState(false);
  const [dates, setDates] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ]);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const navigate = useNavigate();
  const handleOption = (name, operation) => {
    setOptions(prev => {
      return {
        ...prev,
        [name]: operation === 'i' ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  const { dispatch } = useContext(SearchContext);
  const handleSearch = () => {
    if (destination == '') {
      Notify.failure('Введіть щось!');
      return;
    }
    dispatch({ type: 'NEW_SEARCH', payload: { destination, dates, options } });
    navigate('/hotels', { state: { destination, dates, options } });
  };

  return (
    <section className="booking">
      <div className="container">
        <div className="Search">
          <div className="SearchItem">
            <FontAwesomeIcon icon={faBed} className="Icon" />
            <input
              type="text"
              placeholder="Куди ти їдеш?"
              className="SearchInput"
              onChange={e => setDestination(e.target.value)}
            />
          </div>
          <div className="SearchItem">
            <FontAwesomeIcon icon={faCalendarDays} className="Icon" />
            <span
              onClick={() => setOpenDate(!openDate)}
              className="SearchText"
            >{`${format(dates[0].startDate, 'MM/dd/yyyy')} to ${format(
              dates[0].endDate,
              'MM/dd/yyyy'
            )}`}</span>
            {openDate && (
              <DateRange
                editableDateInputs={true}
                onChange={item => setDates([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={dates}
                className="date"
                minDate={new Date()}
              />
            )}
          </div>
          <div className="SearchItem">
            <FontAwesomeIcon icon={faPerson} className="Icon" />
            <span
              onClick={() => setOpenOptions(!openOptions)}
              className="SearchText"
            >{`${options.adult} Дорослі · ${options.children} Діти · ${options.room} Кімнати`}</span>
            {openOptions && (
              <div className="options">
                <div className="optionItem">
                  <span className="optionText">Дорослі</span>
                  <div className="optionCounter">
                    <button
                      disabled={options.adult <= 1}
                      className="optionCounterButton"
                      onClick={() => handleOption('adult', 'd')}
                    >
                      -
                    </button>
                    <span className="optionCounterNumber">{options.adult}</span>
                    <button
                      className="optionCounterButton"
                      onClick={() => handleOption('adult', 'i')}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="optionItem">
                  <span className="optionText">Діти</span>
                  <div className="optionCounter">
                    <button
                      disabled={options.children <= 0}
                      className="optionCounterButton"
                      onClick={() => handleOption('children', 'd')}
                    >
                      -
                    </button>
                    <span className="optionCounterNumber">
                      {options.children}
                    </span>
                    <button
                      className="optionCounterButton"
                      onClick={() => handleOption('children', 'i')}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="optionItem">
                  <span className="optionText">Кімнати</span>
                  <div className="optionCounter">
                    <button
                      disabled={options.room <= 1}
                      className="optionCounterButton"
                      onClick={() => handleOption('room', 'd')}
                    >
                      -
                    </button>
                    <span className="optionCounterNumber">{options.room}</span>
                    <button
                      className="optionCounterButton"
                      onClick={() => handleOption('room', 'i')}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="SearchItem">
            <button className="Btn" onClick={handleSearch}>
              Пошук
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
