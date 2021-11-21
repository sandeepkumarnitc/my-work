import React from 'react';




const Cell = (props)=>{
    
    let value=  "_";
    const handleClick = ()=>{
        value="O";
        console.log('value changed to ',value);
    }

    return <button onClick={handleClick} 
        className='cell'>
            {value}
        </button>;
};


export default Cell;

