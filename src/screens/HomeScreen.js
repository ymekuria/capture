import React, { Component } from 'react'
import { TitleBar, Toolbar, ToolbarNav, ToolbarNavItem } from 'react-desktop/macOs';
import capture_tray_icon from '../assets/capture_tray_icon.png';
import './HomeScreen.css';

class HomeScreen extends Component {
	render() {
		return (
      <TitleBar>
        <Toolbar>
          <ToolbarNav>
            <ToolbarNavItem
              title="Item 1"
              icon={}
              selected={}
              onClick={() => }
            />
            <ToolbarNavItem
              title="Item 2"
              icon={}
              selected={}
              onClick={() => }
            />
          </ToolbarNav>
        </Toolbar>
      </TitleBar>			

		)
	}
}

export default HomeScreen;