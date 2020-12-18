import { Link } from "react-router-dom";
import './Navbar.css';
import React from "react";
import { slide as Menu } from "react-burger-menu";


const Navbar = (props) => {
    return(
        <div className='link-div'>
            <Menu {...props}>
                <Link className='link'  to="/">Home</Link>
                <Link className='link' to="/page1">Tutorial</Link>
                <Link className='link' to="/page2">Picture Colour</Link>
                <Link className='link' to="/page3">About Us</Link>
            </Menu>
        </div>
    )
    
}
;

export default Navbar;