import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Inventory from "./pages/Inventory";
import Nav from "./components/Nav";

const App = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Inventory} />
      </Switch>
    </div>
  </Router>
);

export default App;
