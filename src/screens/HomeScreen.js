import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import Card from 'material-ui/Card';
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
			      <div className="card">
			        <div className="card-image">
								<img src={thumbnail.toDataURL()} />
			          <span className="card-title">{name.slice(0,20)}</span>
			          <a className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">add</i></a>
			        </div>
			      </div>
			    </div>
			  </div>
			)
		});
	}


	render() {
		return (
			<div>
				{this.renderScreenSources()}
			</div>
		);
	}
}

function mapStateToProps({ screenSources }) {
	return { screenSources };
}
export default connect(mapStateToProps, { getUserScreens })(HomeScreen);
