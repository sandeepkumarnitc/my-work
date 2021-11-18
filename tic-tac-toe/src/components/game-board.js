import React from 'react';

export default class GameBoard extends React.Component{

    
    render(){
        const tableStyles={
            border:"2px solid green"
        }

        const rowStyles={
            border:"1px solid brown",
            width:"30px",
            height:"30px"

        }

        return(
            <table id="gameTable" style={tableStyles}>
                <tbody>
                <tr>
                    <td style={rowStyles}></td><td style={rowStyles}></td><td style={rowStyles}></td>
                </tr>
                <tr>
                    <td style={rowStyles}></td><td style={rowStyles}></td><td style={rowStyles}></td>
                </tr>
                <tr>
                    <td style={rowStyles}></td><td style={rowStyles}></td><td style={rowStyles}></td>
                </tr>
                </tbody>
            </table>
        )
    }
}