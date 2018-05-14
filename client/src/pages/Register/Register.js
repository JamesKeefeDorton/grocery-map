import React, { Component } from 'react';
import axios from "axios";
import { Container } from "reactstrap";

class Register extends Component {

  state = {
    username: "",
    password: ""
  };

  onClick = (e) => {
    e.preventDefault();
    if (this.state.username !== "" && this.state.password !== "") {
      axios.post("/api/user/register", this.state)
        .then(res => this.props.history.push("/"))
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
            <label for="usernameInput">Username</label>
            <input type="text" name="username" onChange={this.onChange} />
          </div>
          <div>
            <label for="passwordInput">Password</label>
            <input type="password" name="password" onChange={this.onChange} />
          </div>
          <button type="submit" className="btn" onClick={this.onClick}>Sign Up</button>
        </form>
        </Container>
		);
  }
}

export default Register;