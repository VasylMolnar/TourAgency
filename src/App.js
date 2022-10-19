import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        {/*<Route path="/" element={<Home />} />*/}
        <Route exact path="/" render={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
