import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import Home from '../Home/index';
import Newsletter from '../Newsletter'
import './styles.css';

function App() {
  return (
    <BrowserRouter basename="newsletter">
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path=":year/:month" element={<Newsletter />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
