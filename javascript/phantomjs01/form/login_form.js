var page = new WebPage(), 
	testindex = 0, 
	loadInProgress = false,
	t = Date.now(),
	url = 'http://192.168.11.200/phantomjs/form/register.html';

page.onConsoleMessage = function(msg) {
	console.log(msg);
};
 
page.onLoadStarted = function() {
	loadInProgress = true;
	console.log("Loading...");
};
 
page.onLoadFinished = function() {
	loadInProgress = false;
	console.log(">>>>>Done<<<<<");
};
 
var steps = [
	function() {
		console.log("Load Login Page");
		
		// Simulating the front-end browser
		page.settings.userAgent = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_2) AppleWebKit/537.11 (KHTML, like Gecko) Chrome/23.0.1271.6 Safari/537.11";
		
		// Test time loading page
		t1 = Date.now();
		page.open(url);
		time_loading_page = Date.now() - t1;
		console.log('Page loading time: ' + time_loading_page + ' msec');
	},
	
	function() {
		console.log("Enter Username/Password");
		// page.injectJs("jquery.min.js");
		page.injectJs('../jquery/jquery-1.6.1.min.js');
		page.evaluate(function() {
			// $('#ap_email').val('EMAIL ACCOUNT');
			// $('#ap_password').val('PASSWORD');
			$('input[name="username"]').val('test');
			$('input[name="password"]').val('test');
		});
	},
	
	function() {
		console.log('Login');
		page.evaluate(function() {
			console.log(document.title);
			// $('#ap_signin_form').submit(); // Can not submit the form with jQuery
			document.getElementById("loginForm").submit();
		});
	},
	
	function () {
		console.log('Get page content & count link');
		page.injectJs('../js/jquery-1.6.1.min.js');
		page.evaluate(function() {
			$('a').each(function(index, link) {
				$countLink = $('a').length;
				console.log("Total link:"+$countLink);
			  	console.log($(link).attr('href'));
			})
		});
	}
]
 
interval = setInterval(function() {
	if (!loadInProgress && typeof steps[testindex] == "function") {
		console.log("STEP: " + (testindex + 1));
		steps[testindex]();
		//page.render("images/step" + (testindex + 1) + ".png");
		testindex++;
	}
	if (typeof steps[testindex] != "function") {
	console.log("Test complete!");
		t = Date.now() - t;
		console.log('Testing time: ' + t + ' msec');
		phantom.exit();
	}
}, 1000);