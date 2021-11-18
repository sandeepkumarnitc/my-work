import React from 'react';

const Status = function(props){
    const styles={
        background:"green"
    }
    return(
        <div className="statusLayout" style={styles}>
            <b>Next Move : O</b>
        </div>
    );
}

export default Status;