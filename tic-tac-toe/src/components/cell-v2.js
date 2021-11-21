import React from 'react';

class Cell extends React.Component {
    constructor(props){
        super(props);
        this.state={
            value:"_"
        };
    }
    render(){
       // console.log('rendered with ',this.state);
        const handleClick = ()=>{
            // We shouldn't change state directly
            //this.state.value="O";
            this.setState({value:"O"});
            
        }
        return <button onClick={handleClick} 
                    className='cell'>
                        {this.state.value}
                    </button>;
    };

}


export default Cell;

