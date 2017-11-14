import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import _ from 'lodash';
import { getUserScreens, selectScreenSource } from '../actions';

class HomeScreen extends Component {
  componentDidMount() {
    this.props.getUserScreens();
  }

  onScreenSelect = source => {
		// this.props.history.push('/videos');
    this.props.selectScreenSource(source, this.props.history);
  };

  renderScreenSources = () => {
    return _.map(this.props.screenSources, source => {
      return (
        <div style={styles.cardItem} key={source.id}>
          <div className="card">
            <div>
              <img src={source.thumbnail.toDataURL()} alt="" />
              <button
                className="btn-floating  waves-effect waves-light halfway-fab"
                onClick={() => this.onScreenSelect(source)}
              >
                <i className="material-icons">add</i>
              </button>
            </div>
          </div>
        </div>
      );
    });
  };

  render() {
    return <div style={styles.cardContainer}>{this.renderScreenSources()}</div>;
  }
}

function mapStateToProps({ screenSources, selectedScreenSource }) {
  return { screenSources, selectedScreenSource };
}

const styles = {
  cardContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  cardItem: {
    display: 'flex',
    flex: 1,
    margin: '10px'
  }
};

export default connect(mapStateToProps, { getUserScreens, selectScreenSource })(
  HomeScreen
);
