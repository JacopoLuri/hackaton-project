import { Link } from "react-router-dom";

const Navbar = () => (
    /* IF YOU CHANGE THE LINK TO... REMEMBER TO CHANGE IT ON APP.JS ROUTE AS WELL. */
    <nav>
        <Link to="/">HOME</Link>
        <Link to="/page1">PAGE1</Link>
        <Link to="/page2">PAGE2</Link>
        <Link to="/page3">PAGE3</Link>
        <Link to="/page4">PAGE4</Link>
        <Link to="/page5">PAGE5</Link>
    </nav>
);

export default Navbar;