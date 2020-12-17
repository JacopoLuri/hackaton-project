import { Link } from "react-router-dom";
import './Navbar.css';
import React from "react";
import { slide as Menu } from "react-burger-menu";


const Navbar = (props) => {
    return(
        <div className='link-div'>
   <Menu {...props}>
    
    <Link className='link'  to="/">HOME</Link>
    <Link className='link' to="/page1">TUTORIAL</Link>
    <Link className='link' to="/page2">PICTURE COLOUR</Link>
    <Link className='link' to="/page3">ABOUT US</Link>
   </Menu>
   </div>
    )
    
}
    /* IF YOU CHANGE THE LINK TO... REMEMBER TO CHANGE IT ON APP.JS ROUTE AS WELL. */
   
;

export default Navbar;