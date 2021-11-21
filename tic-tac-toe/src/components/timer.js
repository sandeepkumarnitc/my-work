import React from 'react';


class Timer extends React.Component {

    constructor(props){
        super(props);

        this.state={
            ms:0
        }
    }

    componentDidMount() {
        if(this.props.running)
            this.start();
    }

    componentDidUpdate=(prevProp)=>{


        //Approach #2
        if(prevProp.running!==this.props.running){

            //run this code only if running has changed.
            if(this.props.running)
                this.start();
            else
                this.stop();

        }

    }


    start=()=>{
        if(!this.id)
            this.id=setInterval(()=>{
                //Approach #1.A
                //if(this.props.running){
                    const ms=this.state.ms+100;
                    this.setState({ms});
                // }
            },100)
    }

    stop=()=>{
        if(this.id){
            clearInterval(this.id);
            this.id=null;
        }
    }

    componentWillUnmount=()=>{
        this.stop();
    }

   
    render(){

        let seconds= Math.floor(this.state.ms/1000); //12300 -->12.3 --> 12
        const ms= this.state.ms - seconds*1000;  //12300-12000 = 300
        const hms= Math.floor(ms/100);  //300/100 = 3
        if(seconds<10)
            seconds="0"+seconds;

        return (<div className="timer">
            <p>{this.props.label}</p>
            <p>{seconds}.{hms}</p>
            { this.props.manualControls &&  <div>
                    <button onClick={this.start}>Start</button>
                    <button onClick={this.stop}>Stop</button>
                </div> 
            }
               
          
        </div>)
    }

}








export default Timer;


