import React, { Component } from "react";
import { Link , NavLink } from "react-router-dom";
import {MenuItems} from "./MenuItems";
import Avatar from "../Components/Avatar";
import logo from "../Components/Images/logo.jpg";
import "./Navbar.css";
import SubMenu from "../Components/Navdropdown";


class Navbar extends Component{
     state = {clicked:false};
     handleClick=()=>{
        this.setState({clicked: !this.state.clicked})
    }
    container = React.createRef();
    state = {
        open: false,
      };
      handleButtonClick = () => {
        this.setState((state) => {
          return {
            open: !state.open,
          };
        });
      };
      //only show to dropdown when clicked the icon
      handleClickOutside = (event) => {
        if (
          this.container.current &&
          !this.container.current.contains(event.target)
        ) {
          this.setState({
            open: false,
          });
        }
      };
      //check that mouse is on iconor somewhere else if somewhere else it will not display user clicks empty space
      componentDidMount() {
        document.addEventListener("mousedown", this.handleClickOutside);
      }
      componentWillUnmount() {
        document.removeEventListener("mousedown", this.handleClickOutside);
      }
    render(){
    return(
        <nav className="NavbarItems">
            <img className="navbar-logo" src={logo} alt="NDEx.com"></img>
            <div className="menu-icon" onClick={this.handleClick}>
                <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>

            </div>
            <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                {MenuItems.map((item,index)=>{
                    return(
                        <li key={index}>
                            <NavLink to={item.url} className={item.cName}><i className={item.icon}></i>{item.title}</NavLink>
                        </li>
                    )}
                 )}
                 <Avatar/>
                 <i className="fa-solid fa-caret-down" onClick={this.handleButtonClick}></i>
                 <div className="container" ref={this.container} >
                    {this.state.open && (<SubMenu/>)}
                 </div>
                 
                 
            
            </ul>
        </nav>
        
    )
 }
}

export default Navbar;
