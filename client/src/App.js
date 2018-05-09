import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Inventory from "./pages/Inventory";
import Nav from "./components/Nav";
import Register from "./components/Register";
import Login from "./components/Login";

const App = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Inventory} />
      </Switch>
      <Register/>
      <Login/>
    </div>
  </Router>
);

export default App;
