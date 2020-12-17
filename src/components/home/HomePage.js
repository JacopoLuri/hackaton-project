<<<<<<< HEAD
import Navbar from "./../navbar/Navbar";
=======
import React from 'react'
import './HomePage.css'
import clock from '../images/clock.gif'
import button from '../images/button4.png'
import { Link } from "react-router-dom"

>>>>>>> 91e9de71eec5c4e4fc9b0d1260d668bb2b51a8f5

const HomePage = () => (
    <div className="home">
    <>
        <img className="clock-home" src={clock} alt=""/>
    </>
        <h1 className="title">TempEra</h1>
        <div>
        <img  className="button-image" src={button} alt=""/>
        <span className="home-button"><Link to="/page1">WELCOME</Link></span>
        </div>
    </div>
);

export default HomePage;