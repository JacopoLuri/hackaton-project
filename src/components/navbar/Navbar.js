import { Link } from "react-router-dom";
import './Navbar.css';
import React from "react";
import { slide as Menu } from "react-burger-menu";


const Navbar = (props) => {
    return(
   <Menu {...props}>
    <Link to="/">HOME</Link>
    <Link to="/page1">Tutorial</Link>
    <Link to="/page2">Take A Picture</Link>
    <Link to="/page3">About Us</Link>
   </Menu>
    )
    
}
    /* IF YOU CHANGE THE LINK TO... REMEMBER TO CHANGE IT ON APP.JS ROUTE AS WELL. */
   
;

export default Navbar;