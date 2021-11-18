import React from 'react';
import OnlyHeader from './components/site-header'
import GameLayout from './components/game-layout';

export default class App extends React.Component{
    render(){
        return(
            <div className="mainLayout">
                <div><OnlyHeader title="Tic Tac Toe" color="white"/></div>
                <div className="container">
                    <GameLayout/>
                </div>
            </div>
        );
    }
}