import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Lists from "./pages/Lists";
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
        <Route exact path="/home" component={Home} />
        <Route exact path="/" component={Lists} />
        <Route exact path="/list" component={Lists} />
        <Route exact path="/list/:id" component={Lists} />
        <Route exact path="/about" component={About} />
        <Route exact path="/signup" component={Register} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </div>
  </Router>
);

export default App;
