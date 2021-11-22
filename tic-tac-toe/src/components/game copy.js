import React from 'react';
import Board from './board';
import StatusMessage from './status';
import ResetButton from './reset-button';
import {checkGame} from '../services/tick-tac-toe';
import Timer from './timer';
import Moves from './moves'
import ScoreBoard from './score-board'


class Game extends React.Component {


    getInitState=()=>{
        return {
            next: "O",
            cells:[
                null, null, null,
                null, null, null, 
                null, null, null
            ],
            message:"Next Move 'O'",
            moves:0,
            gameOver:false,
            renderCount:0,
            gameNumber:0,
            
            movesBoard : [
                []
            ]
        };
    }

    
    componentDidMount() {
       // this.oTimer.current.start();
      
    }

    handleCellClick=(id)=>{
        let gameOver = this.state.gameOver;
        
        let cells= [...this.state.cells]; //create a new array with existing values
        
        if(cells[id]!==null)
            return;
        
        if(gameOver)
            return;
        cells[id]=this.state.next;
        let result= checkGame(cells);
        let message="";

        const next= this.state.next==="O" ? "X" : "O";
        // const toStop= this.state.next==="O"? this.oTimer: this.xTimer;
        // const toStart= next==="X"? this.xTimer: this.oTimer;
        // toStop.current.stop();
        // toStart.current.start();

        let moves=this.state.moves+1;
        let TotalGame = this.state.TotalGame;
        let OWins = this.state.OWins;
        let XWins = this.state.XWins;
        let Stalemate = this.state.Stalemate;

        if(result.winner){
            message=`${result.winner} Wins`;
            TotalGame += 1;
            result.winner === "O" ? OWins += 1 : XWins += 1;
            gameOver = true;
        } else if(result.gameOver){
            message=`Game ends Stalemate`;
            TotalGame += 1;
            Stalemate += 1;
            gameOver = true;
        } else{
            message= `Moves: ${moves}, Next: '${next}'`;
        }

        this.setState({gameNumber:this.state.gameNumber+1})

        const movesScore = [...this.state.movesBoard]
        movesScore.push([this.state.gameNumber+1,this.state.next,id+1])
        this.setState({movesBoard:movesScore});
        
        this.setState({cells:cells});

        this.setState({next,message,moves,TotalGame,OWins,XWins,Stalemate,gameOver});
        console.log("Game Over " ,this.state.gameOver);

    }

    

    
    constructor(props) {
        super(props);
        
        this.state = this.getInitState();
        this.state.TotalGame=0;
        this.state.OWins=0;
        this.state.XWins=0;
        this.state.Stalemate=0;
        this.oTimer=React.createRef();
        this.xTimer=React.createRef();
        //this.getInitState = this.getInitState.bind(this);
    }

    

    render=()=>{


        const handleReset=()=>{
            this.setState(this.getInitState());
        }

        //this.setState({renderCount:this.state.renderCount+1});
        
        return (
            <div className="game">
                {/* <div className="clocks">
                    <Timer ref={this.oTimer} running={this.state.next==="O"} label="O" manualControls={true} />
                    <Timer ref={this.xTimer} running={this.state.next==="X"} label="X" manualControls={true} />     
                </div> */}
               
                <StatusMessage message={this.state.message}/>
                <ScoreBoard TotalGames={this.state.TotalGame} OWins={this.state.OWins} XWins={this.state.XWins} Stalemate={this.state.Stalemate}/>
                <Board cells={this.state.cells} onCellClick={this.handleCellClick} gameOver={this.state.gameOver}/>
                <ResetButton  visible={this.state.moves>0} onReset={handleReset} caption="Reset Game"/>
                <Moves movesBoard={this.state.movesBoard}/>
            </div>
            );
    }


}



const _Game = (props)=>{


    return (
        <div className="game">
            <Timer/>
            <StatusMessage/>
            <Board/>
            <button className='reset-button'>Reset</button>
        </div>
        );
};


export default Game;

