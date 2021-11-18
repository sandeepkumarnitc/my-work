import React from 'react';
import Reset from './reset-board';
import GameBoard from './game-board';
import Status from './status-board';

export default class GameLayout extends React.Component{
    render(){
        const styles={
            border:"2px solid orange",
            width:"380px",
            align:"center"
        }
        return(
            <div style={styles}>
                <div><Status/></div>
                <div><GameBoard /></div>
                <div><Reset/></div>
            </div>
        );
    }
}