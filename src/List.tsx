import React from 'react';
import logo from './logo.svg';
import './App.css';


interface IPlayer {
    name:string ;
}
interface IPlayers {
    players:IPlayer[] ;
}


const Player: React.FC<IPlayer> = ({name} : IPlayer) => {
    return (
        <div >
            {name}
        </div>
    );
}


// const List: React.FC<IPlayers> = ({players} : IPlayers) => {
//     return (
//         <div >
//             {players.map( (p)  => <div>{p.name}</div>)}
//         </div>
//     );
// }

// export default List;
