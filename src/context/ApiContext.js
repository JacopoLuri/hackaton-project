import React, { Component } from "react";
import { createApi } from "unsplash-js";

export const ApiContext = React.createContext();

const apiCall = createApi({
    accessKey: process.env.REACT_APP_UNSPLASH_KEY,
});

class ApiProvider extends Component {
    state = {
        apiData: {},
        randomUrl: "",
    };
    
    componentDidMount() {
        apiCall.search.getPhotos({ query: 'steampunk', page: 1, perPage: 30 })
            .then(result => {
                const photo = result.response;
                this.setState({
                    apiData: photo,
                });
            });
    }

    getRandomUrl = () => {
        this.setState({
            randomUrl: this.state.apiData.results[Math.floor(Math.random() * 30)].urls.regular,
        })
    }

    render() {
        return (
            <ApiContext.Provider
                value={{
                    state: this.state,
                    getRandomUrl: this.getRandomUrl,
                }}
            >
                {this.props.children}
            </ApiContext.Provider>
        );
    }
}
export default ApiProvider;