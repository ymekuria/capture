const electron = require('electron');
const { app, Menu, Tray }  = electron;

class CaptureTray extends Tray {
	constructor(iconName, contextMenu) {
		super(iconName)
		this.setToolTip('Capture');
		this.setContextMenu(contextMenu);

		this.on('click', this.onClick.bind(this));
		this.on('right-click', this.onClick.bind(this))
	}

	onClick(event, bounds) {

	}

	onRightClick() {
		const menu = Menu.buildFromTemplate([
			{
				label: 'Quit',
				click: () => app.quite()
			}	
		]);

		this.popUpContextMenu(menu);
	}
}


module.exports = CaptureTray;