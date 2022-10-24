import svg from '../images/SVG/icons.svg';
import svg2 from '../images/SVG/symbol-defs.svg';
const Email_modal = () => {
  function toggleModal() {
    document.querySelector('[data-modal]').classList.toggle('is-hidden');
  }

  return (
    <div className="email__modal">
      <div className="backdrop is-hidden" data-modal>
        <div className="modal">
          <form className="modal_form">
            <p className="modal_title">
              Залиште свої дані, ми вам передзвонимо
            </p>
            <label className="form_item">
              <span className="form_label">Ім'я</span>
              <input type="text" className="form-input" name="name" />
              <svg className="icon" width={12} height={12}>
                <use href={`${svg2}#icon-name`} />
              </svg>
            </label>
            <label className="form_item">
              <span className="form_label">Телефон</span>
              <input
                type="tel"
                className="form-input"
                name="phone"
                placeholder=" "
              />
              <svg className="icon" width={12} height={12}>
                <use href={`${svg}#icon-phone`} />
              </svg>
            </label>
            <label className="form_item">
              <span className="form_label">Пошта</span>
              <input
                type="email"
                className="form-input"
                name="mail"
                placeholder=" "
              />
              <svg className="icon" width={15} height={12}>
                <use href={`${svg2}#icon-post`} />
              </svg>
            </label>
            <label className="form_item ">
              <span className="form_label">Коментар</span>
              <textarea
                className="form_textarea"
                name="comment"
                placeholder="Введіть текст"
                defaultValue={''}
              />
            </label>
            <label className="form_checkbox">
              <input
                className="form_input"
                type="checkbox"
                name="policy"
                defaultValue
              />
              <span className="icon-checkbox" />
              <span className="checkbox_span">
                Погоджуюся з розсилкою та приймаю
                <a className="checkbox_link" href="#">
                  Умови договору
                </a>
              </span>
            </label>
            <div className="button_submit">
              <button type="submit" className="form_button">
                Відправити
              </button>
            </div>
          </form>
          <button
            type="submit"
            className="close"
            data-modal-close
            onClick={toggleModal}
          >
            <svg className="icon-close" width={11} height={11}>
              <use href={`${svg}#icon-close`} />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Email_modal;
