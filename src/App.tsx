import React from 'react';
import logo from './logo.svg';
import './App.css';
import List from './List';
import Player from './Player'

function App() {
  const player = {name:"Messi"};
const players = [{name:"neymar"},{name:"beffen"},{name:"fleffen"}];
  return (
    <div className="App">
      Football app
      <List players = {players}/>
      <Player name={'Mbappe'}></Player>
    </div>
  );
}

export default App;
