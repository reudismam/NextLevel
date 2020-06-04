import React from 'react';
import './App.css';
import Header from './Header';
import Routes from './routes';

function App() {
  let counter = 1;
  

  function handleButtonClick() {
    counter++;
  }
  
  return (
    <div>
    <Routes />
    </div>
  );
}

export default App;
