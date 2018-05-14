import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ListItems from "./pages/ListItems";
import Navbar from "./components/Navbar";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import About from "./pages/About";

class App extends React.Component {
  state = {
    loggedIn: false
  }

  handleLogin = () => {
    this.setState({
      loggedIn: true
    });
  }

  render () {
    if (this.state.loggedIn) {
      <Router>
        <div id="LoggedIn">
          <Navbar />
          <Switch>
            <Route exact path="/" component={ListItems} />
            <Route exact path="/about" component={About} />
          </Switch>
        </div>
      </Router>
    } else {
      return (
        <Router>
          <div id="notLoggedIn">
            <Navbar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/signup" component={Register} />
              <Route exact path="/login" render={ () => <Login callback={this.handleLogin} /> } /> 
            </Switch>
          </div>
        </Router>
      );
    }
  }
}

export default App;

