import React from 'react';
import logo from './logo.svg';
import './App.css';
import List from './List';

function App() {
  const player = {name:"Messi"};
const players = [{name:"neymar"},{name:"beffen"}];
  return (
    <div className="App">
      Football app
      <List players = {players}/>
    </div>
  );
}

export default App;
