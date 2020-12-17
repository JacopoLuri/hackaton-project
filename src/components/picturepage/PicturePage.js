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
                        <button onClick={value.test}>
                            context function run example. i console log the world example
                        </button>
                        <button onClick={api.test}>
                            api context function run example. i console log the world
                            apicontext
                        </button>
                    </>
                )}
            </ApiContext.Consumer>
        )}
    </Context.Consumer>
);

export default PicturePage;