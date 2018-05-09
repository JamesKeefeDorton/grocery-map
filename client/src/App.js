import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ListItems from "./pages/ListItems";
import Nav from "./components/Nav";
import Register from "./components/Register";
import Login from "./components/Login";

const App = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={ListItems} />
      </Switch>
      <Register/>
      <Login/>
    </div>
  </Router>
);

export default App;
