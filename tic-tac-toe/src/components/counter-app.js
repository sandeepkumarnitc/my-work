import React from "react";


const DeltaButton = (props) => {
    let label="";
    if (props.delta > 0) 
            label += "+";

    label +=  props.delta;

    const style={
        margin:"5px",
        width:"50px",
        height:"30px"
    };

    const handleChange = () => {
        props.onChange(props.value + props.delta);
    };

    return (
        <button style={style} onClick={handleChange} className="delta-button">
            {label}
        </button>
    );
};

const Screen=(props)=> {

    const style={textAlign: 'center'};

    return <h2 style={style} >{props.value}</h2>
};

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0
        };

        //this.change=this.change.bind(this);
    }

    change= (newValue) => {
        this.setState({ value: newValue });
    };
    
    render() {
        return (
            <div className="App" style={{width:"250px"}}>
                <Screen value={this.state.value} />
                <DeltaButton onChange={(newValue)=>this.change(newValue)} value={this.state.value} delta={1} />

                <DeltaButton onChange={this.change} value={this.state.value} delta={10} />
                <DeltaButton onChange={this.change} value={this.state.value} delta={-1} />

                <DeltaButton onChange={this.change} value={this.state.value} delta={-10} />
            </div>
        );
    }
}
