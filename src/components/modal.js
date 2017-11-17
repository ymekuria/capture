import React, { Component } from 'react';

export default ({ header, text, confirmText }) => {
  return (
    <div id="modal1" class="modal">
      <div class="modal-content">
        <h4>{header ? header : ''}</h4>
        <p>{text}</p>
      </div>
      <div class="modal-footer">
        <a class="modal-action modal-close waves-effect waves-green btn-flat">
          {confirmText}
        </a>
      </div>
    </div>
  );
};
