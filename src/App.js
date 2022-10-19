import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home/HomePages';
import Gallery from './pages/Gallery/GalleryPages';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
