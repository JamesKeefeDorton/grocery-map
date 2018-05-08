import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";
//import {} from 'reactstrap';

class Register extends Component {

  state = {
    username: "",
    password: "",
    isValid: true
  };

  onClick = (e) => {
    e.preventDefault();
    axios.post("/api/user", this.state)
      .then(res => this.props.history.push("/"))
      .catch(err => console.log(err));
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
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
        <button type="submit" className="btn" onClick={this.onClick}>Register</button>
      </form>
		);
  }
}

export default Register;