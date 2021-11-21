import React from 'react';

const Cell = function (props) {

    const label = props.value || "_";

   

    const style = {
        color: props.value ? "black" : "transparent",
        cursor: (props.value || props.gameOver) ? "not-allowed" : "pointer"
    }

    return <button  style={style} onClick={() => props.onMove(props.id)}
        className='cell'>
        {label}
    </button>;
};




export default Cell;

