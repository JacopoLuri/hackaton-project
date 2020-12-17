import { Link } from "react-router-dom";

const Navbar = () => (
    /* IF YOU CHANGE THE LINK TO... REMEMBER TO CHANGE IT ON APP.JS ROUTE AS WELL. */
    <nav>
        <Link to="/">HOME</Link>
        <Link to="/page1">Tutorial</Link>
        <Link to="/page2">Take A Picture</Link>
        <Link to="/page3">About Us</Link>
    </nav>
);

export default Navbar;