import React from 'react';
import Cell from './cell';

class Board extends React.Component {

    constructor(props) {
        super(props);
        this.state={
            next: "O",
            cells:[
                null, null, null,
                null, null, null, 
                null, null, null
            ]
        }
    }

    handleCellClick=(id)=>{
        console.log("cell",id, "clicked");
        
        let cells= [...this.state.cells]; //create a new array with existing values
        
        if(cells[id]!==null)
            return;

        cells[id]=this.state.next;
        
        this.setState({cells:cells});

        const next= this.state.next==="O" ? "X" : "O";
        this.setState({next});

    }

    render = ()=>{
        
        return (
                <div className="board">
                    <Cell id={0} value={this.state.cells[0]} onMove={this.handleCellClick} />
                    <Cell id={1} value={this.state.cells[1]} onMove={this.handleCellClick}/>
                    <Cell id={2} value={this.state.cells[2]} onMove={this.handleCellClick}/>
                    <Cell id={3} value={this.state.cells[3]} onMove={this.handleCellClick}/>
                    <Cell id={4} value={this.state.cells[4]} onMove={this.handleCellClick}/>
                    <Cell id={5} value={this.state.cells[5]} onMove={this.handleCellClick}/>
                    <Cell id={6} value={this.state.cells[6]} onMove={this.handleCellClick}/>
                    <Cell id={7} value={this.state.cells[7]} onMove={this.handleCellClick}/>
                    <Cell id={8} value={this.state.cells[8]} onMove={this.handleCellClick}/>
                </div>
            );
    }

}

 


const BoardV1 = (props)=>{


    return (
            <div className="board">
                <Cell />
                <Cell />
                <Cell />
                <Cell />
                <Cell />
                <Cell/>
                <Cell/>
                <Cell/>
                <Cell/>
            </div>
        );
};


export default Board;

