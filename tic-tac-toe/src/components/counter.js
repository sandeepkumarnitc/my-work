import React from "react"; 


const DeltaButton = (props) => { 
  let label = "" + props.value; 
  
  if (props.delta > 0) label += " + "; 
  
  label += " " + props.delta; 
  
  const handleChange = () => { 
    props.onChange(props.value + props.delta); 
  }; 
  return ( 
    <button onClick={handleChange} className="delta-button"> 
      {label} 
    </button> 
  ); 
}; 

export default class Counter extends React.Component { 
  constructor(props) { 
    super(props); 
    this.state = { 
      value: 0 
    }; 
  } 
  render() { 
    const change = (newValue) => { 
      this.setState({ value: newValue }); 
    }; 
    return ( 
      <div className="App"> 
        <DeltaButton onChange={change} value={this.state.value} delta={1} /> 
        <DeltaButton onChange={change} value={this.state.value} delta={10} /> 
        <DeltaButton onChange={change} value={this.state.value} delta={-1} /> 
        <DeltaButton onChange={change} value={this.state.value} delta={-10} /> 
      </div> 
    ); 
  } 
} 