import React from 'react';
import logo from './logo.svg';
import './App.css';


interface IPlayer {
    player:{name:string} ;
}
// interface IPlayers {
//     players:IPlayer[] ;
// }
const List: React.FC<IPlayer> = ({player} : IPlayer) => {
    return (
        <div >
            name: {player.name}
        </div>
    );
}

export default List;
