import React from 'react';
import logo from './logo.svg';
import './App.css';

interface IPlayer {
    player: string;
}
const List: React.FC<IPlayer> = ({ player} : IPlayer) => {
    return (
        <div >
            name: {player}
        </div>
    );
}

export default List;
