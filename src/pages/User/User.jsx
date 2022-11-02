import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './user.css';
import { useNavigate } from 'react-router-dom';

const User = () => {
  const navigate = useNavigate();

  const exit = () => {
    localStorage.clear();
    navigate('/');
    location.reload();
  };

  return (
    <div>
      <Header />

      <div className="user">
        <h1>Hello</h1>

        <button onClick={exit}>Вихід </button>
      </div>

      <Footer />
    </div>
  );
};

export default User;
