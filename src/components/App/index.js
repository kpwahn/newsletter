import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
import Home from '../Home/index';
import Newsletter from '../Newsletter'
import './styles.css';

function App() {
  return (
    <BrowserRouter basename="/newsletter">
      <div className="App">
        <Switch>
          <Route path="/">
            <Home />
          </Route>
          <Route path=":year/:month">
            <Newsletter />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
