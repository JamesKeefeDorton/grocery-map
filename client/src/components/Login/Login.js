import React, { Component } from 'react';
//import { Link } from "react-router-dom";
import axios from "axios";
//import {} from 'reactstrap';
import Inventory from "../../pages/Inventory";

class Login extends Component {

  state = {
    username: "",
    password: "",
    loggedIn: false
  };

  onClick = (e) => {
    e.preventDefault();
    if (this.state.username != "" && this.state.password != "") {
      axios.get("/api/user/login/" + this.state.username)
        .then(res => {
          if (res.data[0].password === this.state.password) {
            this.setState({
              loggedIn: true
            });
          }
        })
        .catch(err => console.log(err));
    }
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    {if (this.state.loggedIn) {
      return(<Inventory/>);
    } else {
  		return (
  			<form>
          <div>
            <label for="usernameInput">Username</label>
            <input type="text" name="username" onChange={this.onChange} />
          </div>
          <div>
            <label for="passwordInput">Password</label>
            <input type="password" name="password" onChange={this.onChange} />
          </div>
          <button type="submit" className="btn" onClick={this.onClick}>Login</button>
        </form>
  		);
    }}
  }
}

export default Login;