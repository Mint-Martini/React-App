import React from 'react';
import MenuButton from  './MenuButton'
import Menu from "./Menu"



export default class SideMenu extends React.Component {
    constructor(props, context) {
        super(props, context);
       
        this.state = {
          visible: false
        };
       
        this.toggleMenu = this.toggleMenu.bind(this);
        this.handleMouseDown = this.handleMouseDown.bind(this);
      }

      handleMouseDown(e) {
        this.toggleMenu();
     
        console.log("clicked");
        e.stopPropagation();
      }

      
       
      toggleMenu() {
        this.setState({
            visible: !this.state.visible
        });
      }




    render () {
        return (
          
          <div>
            
            <div styles="float: left;">
                 <MenuButton handleMouseDown={this.handleMouseDown}/>
            </div>
                 <Menu valID={this.props.valID} functionCallChild={this.props.functionCall}  menuVisibility={this.state.visible}/>

       </div>
    )}
        }
