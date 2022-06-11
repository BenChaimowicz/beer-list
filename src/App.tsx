import React, { useEffect, useState } from 'react';
import './App.css';
import BeerList from './components/BeerList';

function App() {


  return (
    <div className="App">
      <header className="App-header">
          <h1 className='title'>Beers</h1>
      </header>
          <BeerList></BeerList>
    </div>
  );
}

export default App;
