var page = require('webpage').create();

page.onConsoleMessage = function (msg) {
    console.log('From Page Console: '+msg);
};

page.onInitialized = function() {

}

page.onLoadFinished = function (status) {
//phantom.exit();
};

page.open('http://diendannhatban.info',function(status) {
	page.evaluate(function () {                
		"use strict";
                console.log(document.title);
		//The Referrer we want to set
		var myReferrer = 'http://ddnb.info';
		
		function showInfo(){
			console.log("window.document.referrer is: '" + window.document.referrer + "' of type: '" + typeof window.document.referrer+"'");
		};
		

		//Before
		console.log("Status Quo");
		showInfo();

		// Trying to delete the property
		console.log("Deleting document.referrer");
		delete window.document.referrer;
		showInfo();

		// Manually setting the referrer
		console.log('Manual overwrite')
		window.document.referrer = myReferrer;
		showInfo();

		// defining a getter method
		console.log('testing defineGetter');
		window.document.__defineGetter__('referrer', function () {
			return myReferrer;
		});
		showInfo();                                
	});    
        
        phantom.exit();
})