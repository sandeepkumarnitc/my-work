import React from 'react';

const Moves = function(props) {
    return(
        <div>
            <div><h1>Moves</h1></div>
            <table className="moves">
                <tbody>
                <tr>
                    <td>Number</td><td>Player</td><td>Position</td>
                </tr>
                
                    {props.movesBoard.map( move =>
                        <tr><td>
                                {move.index}
                            </td>
                            <td>
                                {move.player}
                            </td>
                            <td>
                                {move.position}
                            </td>
                        </tr>
                    )}
                    
                
                </tbody>
            </table>
        </div>
    );
}

export default Moves;

//move => <tr><td>{move[0]}</td><td>{move[1]}</td><td>{move[2]}</td></tr>
//<td>{props.movesBoard[0][1]}</td><td>{props.movesBoard[0][1]}</td><td>{props.movesBoard[0][2]}</td>