var page = require('webpage').create(),
    system = require('system'),
    t, address;

if (system.args.length === 1) {
    console.log('Usage: loadpage.js < URL>');
    phantom.exit();
}

t = Date.now();
address = system.args[1];
page.open(address, function () {
	// page.includeJs("http://ajax.googleapis.com/ajax/libs/jquery/1.6.1/jquery.min.js", function() {
	    // if (status !== 'success') {
	        // console.log('FAIL to load the address');
	    // } else {
	    	// $('body').html();
// 	    	
	        // t = Date.now() - t;
	        // console.log('Loading time ' + t + ' msec');
	    // }
	    // phantom.exit();
	// });
	  page.includeJs("http://ajax.googleapis.com/ajax/libs/jquery/1.6.1/jquery.min.js", function() {
        page.evaluate(function() {
            var dom = $('body').html();
            console.log(dom);
            $("button").click();
        });
        phantom.exit();
    });
});