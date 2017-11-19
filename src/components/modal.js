import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';

export default ({ isModalOpen, callToAction, children }) => {
  return (
    <Modal
      isOpen={isModalOpen}
      contentLabel="Modal"
      style={styles}
    >
      <div>
        <p>{callToAction}</p>
      </div>;
        {children}
    </Modal>
  );
};

const styles = {
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
    top: '40px',
    left: '40px',
    right: '40px',
    bottom: '40px',
    border: '1px solid #ccc',
    background: '#fff',
    overflow: 'auto',
    WebkitOverflowScrolling: 'touch',
    borderRadius: '4px',
    outline: 'none',
    padding: '20px'
  },
  description: {
    justifyContent: 'center'
  }
};
