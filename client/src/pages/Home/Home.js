import React, { Component } from 'react';
import { Container } from "reactstrap";

class Home extends Component {
	state = {
		loggedIn: false
	};

	componentDidMount() {
		this.setState(this.props.location.state);
  }

	render() {
		return (
			<Container>
			{console.log(this.props)}
				<h3>Home</h3>
				<h3>{this.state.loggedIn.toString()}</h3>
				{
					this.state.loggedIn ? (
						<h3>Logged In</h3>
					) : (
						<h3>No Results to Display</h3>
					)
				}
			</Container>
		);
	}
}

export default Home;