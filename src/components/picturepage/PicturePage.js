import Navbar from "../navbar/Navbar";
import { Context } from "../../context/Context";
import { ApiContext } from "../../context/ApiContext";

const PicturePage = () => (
    <Context.Consumer>
        {(value) => (
            <ApiContext.Consumer>
                {(api) => (
                    <>
                        <Navbar />
                        <h1>I AM PicturePage</h1>
                        <button onClick={api.getRandomUrl}>Take a picture</button>
                        <img src={api.state.randomUrl} />
                    </>
                )}
            </ApiContext.Consumer>
        )}
    </Context.Consumer>
);

export default PicturePage;