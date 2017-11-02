module.exports = {
  startUrl: process.env.DEV_URL ||
  	 url.format({
  		 pathname: path.join(__dirname, './build/index.html'),
  		 protocol: 'file:',
  		 slashes: true
  	 })
}
