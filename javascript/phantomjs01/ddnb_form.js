var page = require('webpage').create(),
    system = require('system'),
    t, address;

if (system.args.length === 1) {
    console.log('Usage: loadspeed.js <some URL>');
    phantom.exit();
}

t = Date.now();
address = system.args[1];
page.open(address, function (status) {
    if (status !== 'success') {
        console.log('FAIL to load the address');
    } else {
		console.log(page.evaluate(function () {

		  var arr = document.getElementsByClassName("input");
		  var i;

		  for (i=0; i < arr.length; i++) {
return arr[i].getAttribute('method');
			if (arr[i].getAttribute('method') == "POST") {
			  arr[i].elements["fname"].value="kiet";
			  arr[i].elements["age"].value="27";

			  // This part doesn't seem to work. It returns the content
			  // of the current page, not the content of the page after 
			  // the submit has been executed. Am I correctly instrumenting
			  // the submit in Phantom?
			  arr[i].submit();
			  return document.querySelectorAll('html')[0].outerHTML;
			}

		  }
		 //page.render('form.png');
		  return "failed :-(";		
		}));
    }
    phantom.exit();
});