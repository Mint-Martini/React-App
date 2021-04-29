import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HeaderNavi from  "./HeaderNavi"
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import SideMenu from  "./SideBarMenu";
import Game from "./Tic-Tac-Toe/tic"
import TestHome from "./HomeStart"
import CaponesCorner from "./CaponeCorner"



class MainShow extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      "caller" : "Home"
  }
  this.handleClick = this.handleClick.bind(this)
  this.renderMain = this.renderMain.bind(this)
}

handleClick (caller){

  console.log("insideCaller" + caller)

  this.setState({
    "caller" : caller
  })
}

renderMain(){
  console.log(this)
  if(this.state.caller == "Tic")
  {
    return ( <Game></Game>)
  }
  else {
    if (this.state.caller == "Home") {
     return (<TestHome></TestHome> )
    }
    else{
      if (this.state.caller == "Capone") {
        return (<CaponesCorner></CaponesCorner> )
        
      }
    }
  }

}

  render(){

    return(
      <div>
        <HeaderNavi valID="" functionCall={this.handleClick} > </HeaderNavi>
        <SideMenu></SideMenu>
        <div class='testDiv'>
        {this.renderMain()}
        </div>
        
      </div>

    )
   
}
}

ReactDOM.render(
  <React.StrictMode>
    <MainShow>
  
    </MainShow>
    
   </React.StrictMode>,
  document.getElementById('root')
);

