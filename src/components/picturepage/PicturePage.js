import Navbar from "../navbar/Navbar";
import React from 'react'
import { Context } from "../../context/Context";
import { ApiContext } from "../../context/ApiContext";
import './PicturePage.css'

const PicturePage = () => (
   
    <Context.Consumer>
        {(value) => (
            <ApiContext.Consumer>
                {(api) => (
                    <>
                        <Navbar />
                        <h1>I AM PicturePage</h1>
                        <button onClick={api.getRandomUrl}>Take a picture</button>
                        <button onClick={api.colorize}>Colorize</button>
                        <img src={api.state.randomUrl} className={api.state.isBlack ? 'black-pic': 'color-pic'}/>
                    </>
                )}
            </ApiContext.Consumer>
        )}
    </Context.Consumer>
);

export default PicturePage;