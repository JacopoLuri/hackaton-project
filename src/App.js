
import { Switch, Route } from "react-router-dom";

import HomePage from "./components/home/HomePage";
import PageOne from "./components/pageOne/PageOne";
import PageTwo from "./components/pageTwo/PageTwo";
import PageThree from "./components/pageThree/PageThree";
import PageFour from "./components/pageFour/PageFour";
import PageFive from "./components/pageFive/PageFive";

const App = () => (
  /* NOTE. IF YOU WANT TO CHANGE THE LINK: CHANGE IT HERE AND INSIDE LINK IN NAVBAR.JS */
  <Switch>
    <Route exact path="/">
      <HomePage />
    </Route>
    <Route exact path="/page1">
      <PageOne />
    </Route>
    <Route exact path="/page2">
      <PageTwo />
    </Route>
    <Route exact path="/page3">
      <PageThree />
    </Route>
    <Route exact path="/page4">
      <PageFour />
    </Route>
    <Route exact path="/page5">
      <PageFive />
    </Route>
  </Switch>
);

export default App;
