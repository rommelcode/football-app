import React from 'react';
import logo from './logo.svg';
import './App.css';
//import List from './List';
import Player from './Player'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Home = () => (
  <React.Fragment>
    <h1>Home</h1>

  </React.Fragment>
);
function App() {
  const id =1;
  const player = "Messi";
  const players = [{ name: "neymar" }, { name: "beffen" }, { name: "flefsfdsfen" }];
  return (
    <Router>
      Football app
      <nav>
        <ul>
          <li>
            <Link to={`player/${id}`} >{id}</Link>
            </li>
        </ul>
      </nav>
      <Route path="/player/:id"  component={()=> <Player name={player}/>} />
      <Route path="/player"  />
      <Route path="/" render={() => <h1>Hello</h1>} />
    </Router>
  );
}

export default App;
