import React, { Component } from "react";

export const Context = React.createContext();

class Provider extends Component {
    state = {
        example: "example",
    };

    test = () => {
        console.log(this.state.example);
    };

    render() {
        return (
            <Context.Provider
                value={{
                    state: this.state,
                    test: this.test,
                    /* if you write new functions write them here as i did with the test function */
                }}
            >
                {this.props.children}
            </Context.Provider>
        );
    }
}
export default Provider;