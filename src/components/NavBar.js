import React, { Component } from 'react';

class NavBar extends Component {
  render(){
    return (
      <div>
        <nav>
          <div className="nav-wrapper blue-grey darken-3">
            <a href="" className="brand-logo"><i className="material-icons yellow-text">account_balance_wallet</i>Capture</a>
            <ul className="right hide-on-med-and-down">
              <li><a href=""><i className="material-icons yellow-text">search</i></a></li>
              <li><a href=""><i className="material-icons yellow-text">radio_button_checked</i></a></li>
              <li><a href=""><i className="material-icons yellow-text">stop</i></a></li>
              <li><a href=""><i className="material-icons yellow-text">delete</i></a></li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
