import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import axios from "axios";
<<<<<<< HEAD
import { Container } from "reactstrap";
=======
//import {} from 'reactstrap';
import ListItems from "../../pages/Lists";
>>>>>>> master

class Login extends Component {

  state = {
    username: "",
    password: "",
    loggedIn: false
  };

  onClick = (e) => {
    e.preventDefault();
    if (this.state.username !== "" && this.state.password !== "") {
      axios.get("/api/user/login/" + this.state.username)
        .then(res => {
          if (res.data[0].password === this.state.password) {
            //this.setState({
            //  loggedIn: true
            //});
            this.props.callback();
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
    if (this.state.loggedIn) {
      return(
          <Redirect to="/item" />
      );
    } else {
  		return (
        <Container>
    			<form>
            <div>
              <label htmlFor="usernameInput">Username</label>
              <input type="text" name="username" autocomplete="username" onChange={this.onChange} />
            </div>
            <div>
              <label htmlFor="passwordInput">Password</label>
              <input type="password" name="password" autocomplete="current-password" onChange={this.onChange} />
            </div>
            <button type="submit" className="btn" onClick={this.onClick}>Login</button>
          </form>
        </Container>
  		);
    }
  }
}

export default Login;