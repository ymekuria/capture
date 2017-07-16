import { Tray } from 'electron';

class CaptureTray extends Tray {
	constructor(iconName) {
		super(iconName)
		this.setToolTip('Capture');
		this.on('click', () =>{});
	}


}


module.exports = CaptureTray;