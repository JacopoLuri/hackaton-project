import React, { Component } from "react";

export const ApiContext = React.createContext();

class ApiProvider extends Component {
    state = {
        apiData: [],
    };
    /* functions */
    test = () => {
        console.log(this.state.apiData);
    };
    /* api calls */
    componentDidMount() {
        /* add your api link inside fetch */
        fetch("https://api.chucknorris.io/jokes/random")
            .then(response => response.json())
            .then(data => this.setState({ apiData: data }))
    }

    render() {
        return (
            <ApiContext.Provider
                value={{
                    state: this.state,
                    test: this.test,
                    /* if you write new functions write them here as i did with the test function */
                }}
            >
                {this.props.children}
            </ApiContext.Provider>
        );
    }
}
export default ApiProvider;