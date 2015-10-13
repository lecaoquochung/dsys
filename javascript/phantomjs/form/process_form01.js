var page = new WebPage(), testindex = 0, loadInProgress = false;
 
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
		page.settings.userAgent = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_2) AppleWebKit/537.11 (KHTML, like Gecko) Chrome/23.0.1271.6 Safari/537.11";
		// page.open("https://www.amazon.com/ap/signin?_encoding=UTF8&openid.assoc_handle=usflex&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.mode=checkid_setup&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&openid.ns.pape=http%3A%2F%2Fspecs.openid.net%2Fextensions%2Fpape%2F1.0&openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.amazon.com%2Fgp%2Fyourstore%2Fhome%3Fie%3DUTF8%26ref_%3Dgno_signin");
		page.open("http://192.168.11.200/phantomjs/form/register.html");
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
			// $('#ap_signin_form').submit();
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
	phantom.exit();
	}
}, 1000);