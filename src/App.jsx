import React from 'react';
import './App.css';
import { Actions, Navbar, Output, UnsplacePage } from 'components';
import { useStateContext } from 'hooks';

const App = () => {
  const { showUnsplacePage } = useStateContext();
  return (
    <div className="App">
      <Navbar />
      <Output />
      <Actions />
      {showUnsplacePage && <UnsplacePage />}
    </div>
  );
};

export { App };
