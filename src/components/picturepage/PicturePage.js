import Navbar from "../navbar/Navbar";
import React from "react";
import { ApiContext } from "../../context/ApiContext";
import "./PicturePage.css";
import clock from "../../components/images/clock.png";
import frame from "../../components/images/frame.png";
import dial from "../../components/images/clock-dial.png";
import cog from "../../components/images/cog.png";
import syringe from "../../components/images/syringe.png";

const PicturePage = () => (
  <ApiContext.Consumer>
    {(api) => (
      <div className="body-div">
        <Navbar />
        <div className="picture-body">
          <img className="clock-header" src={clock} />
          <div className="framediv">
            <img className="frame" src={frame} />

            <div className="api-image-container">
              <img
                src={api.state.randomUrl}
                id="api-picture"
                className={api.state.isBlack ? "black-pic" : "color-pic"}
              />
            </div>
          </div>
          <div className="btn-container">
            <button className="btn-take-picture" onClick={api.getRandomUrl}>
              Take A Picture
            </button>
            <button className="btn-colour-picture" onClick={api.colorize}>
              Colour The Picture
            </button>
            <div className="picture-div">
              <img className="syringe" src={syringe} />
              <img className="dial" src={dial} />
              <img className="cog" src={cog} />
            </div>
          </div>
        </div>
      </div>
    )}
  </ApiContext.Consumer>
);

export default PicturePage;
