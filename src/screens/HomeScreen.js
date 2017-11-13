import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { getUserScreens } from '../actions';

class HomeScreen extends Component {
  componentDidMount() {
    this.props.getUserScreens();
  }

  onScreenSelect = source => {
    console.log('source ', source);
    // this.props.recordScreen(screen);
  };

  renderScreenSources = () => {
    return _.map(this.props.screenSources, source => {
      return (
        <div style={styles.cardItem} key={source.id}>
          <div className="card">
            <div>
              <img src={source.thumbnail.toDataURL()} alt="" />
              <button
                className="btn-floating halfway-fab"
                onClick={this.onScreenSelect(source)}
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

function mapStateToProps({ screenSources }) {
  return { screenSources };
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

export default connect(mapStateToProps, { getUserScreens })(HomeScreen);
