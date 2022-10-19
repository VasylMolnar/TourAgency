import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes basename="/Home">
        <Route path="/" exact component={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
