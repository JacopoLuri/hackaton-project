import Navbar from "../navbar/Navbar";
import "../tutorial/Tutorial.css";
import { Link } from "react-router-dom";

const Tutorial = () => (
  <div className="tuto-frame">
    <Navbar />
    <div className="intro-text">
      <h1 className="title-intro">Welcometh thee not restful traveleth'r</h1>
      <p>
        {" "}
        Raiseth an image of thee, h're! To witness the witchcraft and charm. One
        wilt raiseth an image. From thine mem'ry boxeth. So as to seeth the
        col'r appeareth wh're. Black hath used to beest.
      </p>
    </div>
        <button className="tuto-button"><Link to="/page2" style={{ textDecoration: "none", color: "antiquewhite", fontSize: 25 }}>
        Presseth button to starteth
        </Link></button>
  </div>
);

export default Tutorial;
