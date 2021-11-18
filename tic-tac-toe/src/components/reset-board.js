import React from 'react';

const ResetBoard = function(props){
    const styles={
        background:"red"
    }
    return(
        <button id="btnReset" style={styles}><b>RESET</b></button>
    )
}

export default ResetBoard;