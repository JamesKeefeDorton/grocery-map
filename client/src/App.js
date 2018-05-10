import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ListItems from "./pages/ListItems";
import Nav from "./components/Nav";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import About from "./pages/About";

const App = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/signup" component={Register} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </div>
  </Router>
);

export default App;
