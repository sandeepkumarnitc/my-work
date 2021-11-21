import React from 'react';

const ScoreBoard = function(props){
    return(
        <div>
            <table>
                <tr>
                    <td>Total Games</td><td>O Wins</td><td>X Wins</td><td>Stalemate</td>
                </tr>
                <tr>
                    <td>{props.TotalGames}</td><td>{props.OWins}</td><td>{props.XWins}</td><td>{props.Stalemate}</td>
                </tr>
            </table>
        </div>
    );
}

export default ScoreBoard;