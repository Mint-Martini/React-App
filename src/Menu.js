import React, { Component } from "react";
import "./Menu.css";
 
class Menu extends Component {



 handleMe(){
     alert("yes")
    }
  render() {
    var visibility = "hide";
 
    if (this.props.menuVisibility) {
      visibility = "show";
    }

 
    return (
      <div id="flyoutMenu"
           onMouseDown={this.props.handleMouseDown} 
           className={visibility}>
        <h4><b>Enjoy The Cha-Cha-Slide this Menu is doing</b></h4>
        <h4>Feel Free to message me on LinkedIn!</h4>
      </div>
    );
  }
}
 
export default Menu;