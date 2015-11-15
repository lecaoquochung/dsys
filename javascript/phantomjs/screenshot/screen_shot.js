var page = require('webpage').create(),
    system = require('system'),
    t, address;

if (system.args.length === 1) {
    console.log('Usage: screen_shot.js < URL>');
    phantom.exit();
}

t = Date.now();
address = system.args[1];
page.open(address, function () {
	var d = new Date(); 
	var year = d.getFullYear();	
	var month = d.getMonth()+1;	
	var day = d.getDate();	
	var hour = d.getHours();
	var min = d.getMinutes();	
	var second = d.getSeconds()
	console.log(window.location.hostname+year+"-"+month+"-"+day+"_"+hour+"-"+min+"-"+second);	 
	page.render(window.location.hostname+year+"-"+month+"-"+day+"_"+hour+"-"+min+"-"+second+'.png');
    phantom.exit();
});