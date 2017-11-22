import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import _ from 'lodash';
import { getUserScreens, selectScreenSource } from '../actions';
import Modal from '../components/Modal';

class HomeScreen extends Component {
  state = {
    modalOpen: false,
    selectedScreenSource: null
  }

  componentDidMount() {
    this.props.getUserScreens();
  }

  onModalConfirm = () => {
    // TODO call action creater to start a media recording instance via electron
    // closing modal and calling action creator to with selected screen
    this.setState({ modalOpen: false });
    this.props.selectScreenSource(this.state.currentScreenSelection, this.props.history);

  }
  onModalCancel = () => {
    this.setState({ modalOpen: false });

  }
  renderScreenSources = () => {
    return _.map(this.props.screenSources, source => {
      return (
        <div style={styles.cardItem} onClick={() => 'c'} key={source.id}>
          <div className="card">
            <div>
              <img src={source.thumbnail.toDataURL()} alt="" />
              <button
                className="btn-floating  waves-effect waves-light halfway-fab"
                onClick={() => {
                  this.setState({ modalOpen: true, currentScreenSelection: source });

                }}
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

    )

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


export default connect(mapStateToProps, { getUserScreens, selectScreenSource })(
  HomeScreen
);
