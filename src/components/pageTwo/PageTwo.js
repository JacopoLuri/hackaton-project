import Navbar from "./../navbar/Navbar";
import Footer from "./../footer/Footer";
import { Context } from "./../../context/Context";
import { ApiContext } from "../../context/ApiContext";

const PageTwo = () => (
    <Context.Consumer>
        {(value) => (
            <ApiContext.Consumer>
                {(api) => (
                    <>
                        <Navbar />
                        <h1>I AM 2</h1>
                        <button onClick={value.test}>
                            context function run example. i console log the world example
                        </button>
                        <button onClick={api.test}>
                            api context function run example. i console log the world
                            apicontext
                        </button>
                        <Footer />
                    </>
                )}
            </ApiContext.Consumer>
        )}
    </Context.Consumer>
);

export default PageTwo;