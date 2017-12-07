import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import _ from 'lodash';
import SourceItem from '../components/SourceItem';
import Modal from '../components/Modal';

import {
  getUserScreens,
  selectScreenSource,
  createMediaStream
} from '../actions';

class SourcesScreen extends Component {
  state = {
    modalOpen: false
  };

  componentDidMount() {
    this.props.getUserScreens();
  }

  onModalConfirm = () => {
    const { createMediaStream, selectedScreenSource, history } = this.props;

    this.setState({ modalOpen: false });
    createMediaStream(selectedScreenSource, history);
  };

  onModalCancel = () => {
    this.setState({ modalOpen: false });
  };

  onSourceClick = (source) => {
    this.setState({ modalOpen: true });

    this.props.selectScreenSource(source);
  };

  renderScreenSources = () => {
    return _.map(this.props.screenSources, source => {
      return (
        <SourceItem
          key={source.id}
          source={source}
          onSourceClick={this.onSourceClick}
        />
      );
    });
  };

  render() {
    return (
      <div>
        <Modal
          callToAction="Do You Want To Record This Screen?"
          confirmLabel="Record"
          isModalOpen={this.state.modalOpen}
          onModalConfirm={this.onModalConfirm}
          onModalCancel={this.onModalCancel}
        />
        <div style={styles.cardContainer}>{this.renderScreenSources()}</div>;
      </div>
    );
  }
}

const mapStateToProps = ({ screenSources, selectedScreenSource }) => {
  return { screenSources, selectedScreenSource };
};

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

export default connect(mapStateToProps, {
  getUserScreens,
  selectScreenSource,
  createMediaStream
})(SourcesScreen);
