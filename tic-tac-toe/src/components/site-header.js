import React from 'react';

const SiteHeader = function(props){
    const styles ={color:props.color || "blue"}
    return (
        <div className="header" color={props.color}>
            <h1 style={styles}>{props.title}</h1>
        </div>
    );
}

export default SiteHeader;