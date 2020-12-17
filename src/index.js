
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import Provider from "./context/Context";
import ApiProvider from "./context/ApiContext";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider>
        <ApiProvider>
          <App />
        </ApiProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
