import React, { Component } from 'react';

class Home extends Component {
	componentDidMount() {
		console.log("ended here from map list ", this.props.location.state.detail);
	}
	render() {
		return (
			<h3>Home</h3>
		);
	}
}

export default Home;