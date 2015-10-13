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
				console.log(arr.length);
		  console.log(arr);
		  var i;

		  for (i=0; i < arr.length; i++) {

			if (arr[i].getAttribute('method') == "POST") {
			  arr[i].elements["fname"].value="test01";
			  arr[i].elements["age"].value="12";

			  // This part doesn't seem to work. It returns the content
			  // of the current page, not the content of the page after 
			  // the submit has been executed. Am I correctly instrumenting
			  // the submit in Phantom?
			  arr[i].submit();
			  return document.querySelectorAll('html')[0].outerHTML;
			}

		  }
		 page.render('form.png');
		  return "failed :-(";		
		}));
    }
    phantom.exit();
});