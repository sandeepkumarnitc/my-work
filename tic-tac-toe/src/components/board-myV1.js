import React from 'react';
import Cell from './cell';

export default class Board extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            next : "O",
            cells : ["-","-","-","-","-","-","-","-","-"]
        }
    }

    change=(id)=>{
        if (this.state.next === "O") this.setState({next:"X"})
        else this.setState({next:"O"})
        //this.setState({value:newValue});
        // this.setState({cells:{[id]:this.state.next}})
         
        // console.log("Id ",id)
        // this.setState({value:this.state.cells[id]})

        this.setState({cells:{...this.state.cells,[id]:this.state.next}})
    }

    render(){
    return (
            <div className="board">
                <Cell onChange={this.change} value={this.state.cells[0]} id={0}/>
                <Cell onChange={this.change} value={this.state.cells[1]} id={1}/>
                <Cell onChange={this.change} value={this.state.cells[2]} id={2}/>
                <Cell onChange={this.change} value={this.state.cells[3]} id={3}/>
                <Cell onChange={this.change} value={this.state.cells[4]} id={4}/>
                <Cell onChange={this.change} value={this.state.cells[5]} id={5}/>
                <Cell onChange={this.change} value={this.state.cells[6]} id={6}/>
                <Cell onChange={this.change} value={this.state.cells[7]} id={7}/>
                <Cell onChange={this.change} value={this.state.cells[8]} id={8}/>
            </div>
        );
    }
};

