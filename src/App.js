import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home/HomePages';
import Gallery from './pages/Gallery/GalleryPages';
import Hotel from './pages/Hotel/Hotel';
import Hotels from './pages/Hotels/Hotels';
import User from './pages/User/User.jsx';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/hotels" element={<Hotels />} />
          <Route path="/hotels/:id" element={<Hotel />} />
          <Route path="/user" element={<User />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
