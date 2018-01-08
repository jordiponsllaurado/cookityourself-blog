import React from 'react';
import logo from './logo.svg';

const Header = ({ title }) => (
  <div className="App">
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>{title}</h2>
    </div>
  </div>
);

export default Header
