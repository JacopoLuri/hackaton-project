import { Switch, Route } from "react-router-dom";
import HomePage from "./components/home/HomePage";
import Tutorial from "./components/tutorial/Tutorial";
import PicturePage from "./components/picturepage/PicturePage";
import AboutUs from "./components/aboutus/AboutUs";
import "./index.css";
import Navbar from "./components/navbar/Navbar";

const App = () => {
  return (
    <div id="App">
      <Navbar pageWrapId={"page-wrap"} outerContainerId={"App"} />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/page1">
          <Tutorial />
        </Route>
        <Route exact path="/page2">
          <PicturePage />
        </Route>
        <Route exact path="/page3">
          <AboutUs />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
