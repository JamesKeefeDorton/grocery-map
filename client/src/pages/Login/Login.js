import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import axios from "axios";
import { Container } from "reactstrap";
//import {} from 'reactstrap';
import ListItems from "../../pages/Lists";

class Login extends Component {

  state = {
    username: "",
    password: ""
  };

  onClick = (e) => {
    e.preventDefault();
    if (this.state.username !== "" && this.state.password !== "") {
      axios.get("/api/user/login/" + this.state.username)
        .then(res => {
          if (res.data[0].password === this.state.password) {
            return this.props.history.push("/", {loggedIn: true});
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
  		return (
        <Container>
    			<form>
            <div>
              <label htmlFor="usernameInput">Username</label>
              <input type="text" name="username" autoComplete="username" onChange={this.onChange} />
            </div>
            <div>
              <label htmlFor="passwordInput">Password</label>
              <input type="password" name="password" autoComplete="current-password" onChange={this.onChange} />
            </div>
            <button type="submit" className="btn" onClick={this.onClick}>Login</button>
          </form>
        </Container>
  		);
  }
}

export default Login;