import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { getUserScreens } from '../actions'


class HomeScreen extends Component {
	componentDidMount() {
		this.props.getUserScreens();

	}

	renderScreenSources = () => {
		return _.map(this.props.screenSources, ({ id, name, thumbnail}) => {
			let thumbUrl = `'${thumbnail.toDataURL('image/jpeg')}'`
			console.log('thumbUrl', thumbUrl);
			return (
				<div className="row" key={id}>
	        <div className="col s12 m6">
	          <div className="card blue-grey darken-1">
	            <div className="card-content white-text">
	              <span className="card-title">{name.slice(0,20)}</span>
	              <img src={thumbnail.toDataURL()} />
	            </div>
	            <div className="card-action">
	              <a href="#">Record</a>
	            </div>
	          </div>
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
				{this.renderScreenSources()}
			</div>
		);
	}
}

function mapStateToProps({ screenSources }) {
	return { screenSources };
}
export default connect(mapStateToProps, { getUserScreens })(HomeScreen);
