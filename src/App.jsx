import React from 'react';
import './App.css';
import { Actions, Navbar, Output } from 'components';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Output />
      <Actions />
    </div>
  );
};

export { App };
