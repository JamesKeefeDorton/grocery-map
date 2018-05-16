import React, { Component } from 'react';

class Home extends Component {


	componentDidMount() {
		this.setState(this.props.location.state);
		
		
	}
	render() {
		console.log("I am at home ", this.state);
		return (
			<h3>home</h3>
		);
	}
}

export default Home;