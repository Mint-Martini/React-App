import React, { Component } from "react";
import './MenuButton.css';
 
class MenuButton extends Component {
  render() {
    return (
      <button id="roundButton"
              onMouseDown={this.props.handleMouseDown}>
               <b> Press Me, I Slide the Menu!</b> 
              </button>
    );
  }
}
export default MenuButton;