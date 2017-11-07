import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUserScreens } from '../actions'


class HomeScreen extends Component {
	componentDidMount() {
		this.props.getUserScreens();

	}


	render() {

		return (
		<div>
			<div>HomeScreen</div>
			<div>HomeScreen</div>
		</div>
		);
	}
}

export default connect(null, { getUserScreens })(HomeScreen);
