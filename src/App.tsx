import React from 'react';
import logo from './logo.svg';
import './App.css';
import List from './List';
import Player from './Player'
import { BrowserRouter as Router, Route } from "react-router-dom";


function App() {
  const player = { name: "Messi" };
  const players = [{ name: "neymar" }, { name: "beffen" }, { name: "fleffen" }];
  return (
    <Router>
      Football app
      <List players={players}></List>
     
    </Router>
  );
}

export default App;
