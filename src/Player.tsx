import React from 'react';
import logo from './logo.svg';
import './App.css';


interface IPlayer {
    name:string ;
}


const Player: React.FC<IPlayer> = ({name} : IPlayer) => {
    return (
        <div >
            {name}
        </div>
    );
}

export default Player;
