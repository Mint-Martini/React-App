import React from 'react';
import ReactDOM from 'react-dom';
import "./HomeStart.css"

class TestHome extends React.Component {
    render(){
        return (
            <React.Fragment>
            <h2>Welcome Friend! To my Little React Website in the world!</h2>
           <h3>I hope you enjoy your stay! </h3>
           <h3>Everything here was written by your favorite <i>(debatable)</i> Developer </h3>
           <h3>Dynamic Data, Functional and Class React Components and so much more!  </h3>
           <h3>Check Out the code <a href="" onClick={() => openInNewTab("https://github.com/Neo4114/React-App")}> Here!</a></h3>
           <h3>Stick Around, Play Tic Tac Toe, See Pictures of my Pug and Slide the side Menu! </h3>
           <h3>Click the Top left (My Name) To follow me on LinkedIn </h3>
           <h4> This is Version 1.0, So please bear with me :D, We are improving!</h4>
            </React.Fragment>
           
        )
    }
}

const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  }

export default TestHome

