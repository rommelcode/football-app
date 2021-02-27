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
      <nav>
        <ul>
          <li><a href="/players">Players</a></li>
           </ul>
      </nav>
      <Route path="/" render={() => <h1>Welcome!</h1>} />
      <Route path="/players" {...players} render={props => <List {...props}></List>} />
    </Router>
  );
}

export default App;
