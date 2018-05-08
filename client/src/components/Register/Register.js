import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";
//import {} from 'reactstrap';

class Register extends Component {

  state = {
    username: "",
    password: ""
  };

  onClick = (e) => {
    e.preventDefault();
    if (this.state.username != "" && this.state.password != "") {
      const u = this.state.username;
      const p = this.state.password;
      axios.get("/api/user", {
        params: {
          username: u,
          password: p
        }
      })
        .then(res => {
          console.log(res)
        })
      {/*axios.post("/api/user", this.state)
        .then(res => this.props.history.push("/"))
        .catch(err => console.log(err));*/}
    }
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