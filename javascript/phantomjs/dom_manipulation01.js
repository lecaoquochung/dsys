console.log("Starting reading page.Please wait...");

var page = require('webpage').create();
stepIndex = 0;

page.open('http://www.sample.com', function() {
	if (status === 'success') {
		
		console.log('============================================');
		console.log('Step "' + stepIndex + '"');
		console.log('============================================');
		
		page.injectJs('jquery/jquery-1.6.1.min.js');
		
		// "event loop"
		if(!phantom.state){
		  initialize();
		} else {
		  phantom.state();
		} 
		
		// Save screenshot for debugging purposes
		page.render("step" + stepIndex++ + ".png");
	}
});


// Step 1
function initialize() {
	page.evaluate(function() {
		//$("button").click();
		$("body").html();
		console.log('Loading page DOM');
	});
	
	phantom.state = parseResults; 
}

// Step 2
function parseResults() {
	page.evaluate(function() {
		$("body").html();
		console.log('Parsed results');
	});
	// If there was a 3rd step we could point to another function
	// but we would have to reload the page for the callback to be called again
	phantom.exit(); 
}