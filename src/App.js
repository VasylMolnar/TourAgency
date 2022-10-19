import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home/HomePages';
import Gallery from './pages/Gallery/GalleryPages.jsx';

function App() {
  return (
    <>
      <Lin href="/gallery">Gallery</Lin>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </>
  );
}

export default App;
