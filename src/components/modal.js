import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';

export default ({ isModalOpen, callToAction, confirmLabel, onModalConfirm, onModalCancel }) => {
  const { modalStyles, buttonContainerStyles, buttonStyles } = styles;
  return (
    <Modal
      isOpen={isModalOpen}
      contentLabel="Modal"
      style={modalStyles}
    >
      <p>{callToAction}</p>
      <div style={buttonContainerStyles}>
        <button
          className="waves-effect waves-light red btn"
          style={buttonStyles}
          onClick={onModalCancel}
        >
          Cancel
        </button>
        <button className="btn"
          style={buttonStyles}
          onClick={onModalConfirm}
        >
          {confirmLabel}
        </button>
      </div>
    </Modal>
  );
};

const styles = {
  modalStyles: {
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 1000,
      opacity: 1,
      backgroundColor: 'rgba(255, 255, 255, 0)'
    },
    content: {
      position: 'absolute',
      top: '14em',
      left: '14em',
      right: '14em',
      bottom: '14em',
      border: '1px solid #ccc',
      background: 'rgb(241, 237, 237)',
      overflow: 'auto',
      WebkitOverflowScrolling: 'touch',
      borderRadius: '4px',
      outline: 'none',
      padding: '20px'
    },
  },
  buttonContainerStyles: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  buttonStyles: {
    margin: '.2em'
  }
};
