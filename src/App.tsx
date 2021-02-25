import React from 'react';
import logo from './logo.svg';
import './App.css';
import List from './List';

function App() {
  const player = {name:"Messi"};

  return (
    <div className="App">
      Football app
      <List player = {player}/>
    </div>
  );
}

export default App;
