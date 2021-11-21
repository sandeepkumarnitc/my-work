import React from 'react';

const Header = function(props){
    //const styles ={color:props.color || "blue"}
    return (
        <div >
            <h1>{props.children}</h1>
        </div>
    );
}

export default Header;