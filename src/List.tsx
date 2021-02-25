import React from 'react';
import logo from './logo.svg';
import './App.css';


interface IPlayer {
    name:string ;
}
interface IPlayers {
    players:IPlayer[] ;
}

const List: React.FC<IPlayers> = ({players} : IPlayers) => {
    return (
        <div >
            {players.map( (p)  => <div>{p.name}</div>)}
        </div>
    );
}

export default List;
