import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
<<<<<<< HEAD
import ListItems from "./pages/ListItems";
import Navbar from "./components/Navbar";
=======
import Lists from "./pages/Lists";
>>>>>>> master
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import About from "./pages/About";
import AddList from "./sandbox/AddList";

<<<<<<< HEAD
=======
const App = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
      {/*   <Route exact path="/" component={Home} /> */}
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
>>>>>>> master

export default App;

