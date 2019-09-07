import React from 'react';
import logo from './logo.svg';

import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <Router>
          <Routes />
        </Router>
      </header>
    </div>
  );
}

export default App;