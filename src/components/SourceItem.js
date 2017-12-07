import React, { Component } from 'react';

export default ({ source, onSourceClick }) => {
  return (
    <div style={styles.sourceItem}>
      <div className="card">
        <div>
          <img src={source.thumbnail.toDataURL()} alt="" />
          <button
            className="btn-floating  waves-effect waves-light halfway-fab"
            onClick={onSourceClick}
          >
            <i className="material-icons">add</i>
          </button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  sourceItem: {
    display: 'flex',
    flex: 1,
    margin: '10px'
  }
};
