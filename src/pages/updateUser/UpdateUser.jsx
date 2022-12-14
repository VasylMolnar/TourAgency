import './updateUser.scss';
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';
import { useState } from 'react';
import axios from 'axios';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { useNavigate } from 'react-router-dom';

const New = ({ inputs }) => {
  const [file, setFile] = useState('');
  const [info, setInfo] = useState({});
  const [foto, setFoto] = useState('');
  const navigate = useNavigate();

  const handleChange = e => {
    setInfo(prev => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async e => {
    e.preventDefault();

    try {
      const r = new FileReader();
      r.readAsDataURL(file);

      r.addEventListener('load', () => {
        setFoto(r.result);
      });

      if (foto) {
        const newUser = {
          ...info,
          img: foto,
        };

        await axios.put(
          `http://localhost:8800/users/${
            JSON.parse(localStorage.getItem('user'))._id
          }`,
          newUser
        );
        Notify.success('Користувача було оновлено');
        setTimeout(() => {
          navigate('/user');
          window.location.reload();
        }, 500);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="new">
      <div className="newContainer">
        <Header />
        <div className="top">
          <h1>Оновлення даних</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : 'https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg'
              }
              alt=""
            />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label htmlFor="file">
                  Зображення: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={e => setFile(e.target.files[0])}
                  style={{ display: 'none' }}
                />
              </div>

              {inputs.map(input => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input
                    onChange={handleChange}
                    type={input.type}
                    placeholder={input.placeholder}
                    id={input.id}
                  />
                </div>
              ))}
              <button onClick={handleClick}>Надіслати</button>
            </form>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default New;
