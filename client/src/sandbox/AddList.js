import React, { Component } from 'react';
import axios from "axios";
import { Container } from "reactstrap";

class AddList extends Component {

  state = {
    userid: "",
    listname: ""
  };

  onClick = (e) => {
    e.preventDefault();
    if (this.state.listname !== "" && this.state.userid !== "") {
      axios.post("/api/list/create/" + this.state.userid, {name: this.state.listname})
        //.then(res => this.props.history.push("/"))
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
            <label htmlFor="useridInput">User ID</label>
            <input type="text" name="userid" onChange={this.onChange} />
          </div>
          <div>
            <label htmlFor="listnameInput">List Name</label>
            <input type="text" name="listname" onChange={this.onChange} />
          </div>
          <button type="submit" className="btn" onClick={this.onClick}>Create List</button>
        </form>
        </Container>
		);
  }
}

export default AddList;