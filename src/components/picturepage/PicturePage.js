import Navbar from "../navbar/Navbar";
import { Context } from "../../context/Context";
import { ApiContext } from "../../context/ApiContext";
import './PicturePage.css'
import clock from '/Users/deanleonard/Documents/hackaton-project/src/components/images/clock.png'
import frame from '/Users/deanleonard/Documents/hackaton-project/src/components/images/frame.png'
import dial from '/Users/deanleonard/Documents/hackaton-project/src/components/images/clock-dial.png'
import cog from '/Users/deanleonard/Documents/hackaton-project/src/components/images/cog.png'
import syringe from '/Users/deanleonard/Documents/hackaton-project/src/components/images/syringe.png'
import border from '/Users/deanleonard/Documents/hackaton-project/src/components/images/steampunk-border copy.png'
import apiPicture from '/Users/deanleonard/Documents/hackaton-project/src/components/images/birds.jpeg'
const PicturePage = () => (
    <Context.Consumer>
        {(value) => (
            <ApiContext.Consumer>
                {(api) => (
                    <>
                        <Navbar />
                        <div className='picture-body'>
                        <img className='clock-header' src={clock} />
                        <div className='framediv'>
                        <img className='frame' src={frame}/>
                        <img className='api-picture' src={apiPicture} />
                        </div >
                        <div className='btn-container'>
                        <button className='btn-take-picture' onClick={value.test}>
                           Take A Picture
                        </button>
                        <button className='btn-colour-picture' onClick={api.test}>
                          Colour The Picture
                        </button>
                        <div className='picture-div'>
                            <img className='syringe' src={syringe} />
                            <img className='dial' src={dial} />
                            <img className='cog' src={cog} />
                        </div>
                        </div>
                        </div>
                    </>
                )}
            </ApiContext.Consumer>
        )}
    </Context.Consumer>
);

export default PicturePage;