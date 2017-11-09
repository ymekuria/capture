import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { getUserScreens } from '../actions'


class HomeScreen extends Component {
	componentDidMount() {
		this.props.getUserScreens();

	}

	renderScreenSources = () => {
		return _.map(this.props.screenSources, (source) => {
			return (
				<div>
					<div>

					</div>
				</div>

			)
		});
	}


	render() {
		console.log('this.props.sources', this.props.screenSources)
		return (
			<div>
				<div>HomeScreen</div>
				<div>HomeScreen</div>
			</div>
		);
	}
}

function mapStateToProps({ screenSources }) {
	return { screenSources };
}
export default connect(mapStateToProps, { getUserScreens })(HomeScreen);
