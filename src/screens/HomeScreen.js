import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import _ from 'lodash';
import { getUserScreens, selectScreenSource } from '../actions';
import Modal from '../components/Modal';

class HomeScreen extends Component {
  state = {
    modalOpen: false
  }

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
        <div style={styles.cardItem} onClick={() => 'c'} key={source.id}>
          <div className="card">
            <div>
              <img src={source.thumbnail.toDataURL()} alt="" />
              <button
                className="btn-floating  waves-effect waves-light halfway-fab"
                onClick={() => {
                  this.setState({ modalOpen: true })
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

  onModalConfirm = () => {
    // TODO call action creater to start a media recording instance via electron
    this.setState({ modalOpen: false });
  }
  onModalCancel = () => {
    this.setState({ modalOpen: false });
  }

  render() {
    console.log('this.state', this.state.modalOpen)
    return (
      <div>
        <Modal isModalOpen={this.state.modalOpen}
          callToAction="Do You Want To Record This Screen?"
          confirmLabel="Record"
          onModalConfirm={() => console.log('confirm')}
          onModalCancel={this.onModalCancel}
        >

        </Modal>
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
