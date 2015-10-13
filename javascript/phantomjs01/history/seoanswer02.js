var page = require('webpage').create();
var url = 'http://ddnb.info';
var d = new Date();
var n0 = d.toLocaleTimeString();
 
page.open(url, function (s) {
	var n1 = d.toLocaleTimeString();
	console.log(n1);
	phantom.exit();
});
