import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home/Home';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
