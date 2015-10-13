
var page 	= new WebPage(),
    // url 	= 'http://192.168.11.200/projects/phantomjs/form/signup.php',
    url 	= 'http://192.168.11.200/phantomjs/form/signup.php',
    // url 	= 'http://creative.givery.co.jp/projects/phantomjs/form/signup.php',
    stepIndex 	= 0,
    userNumber	= 10;

/**
 * From PhantomJS documentation:
 * This callback is invoked when there is a JavaScript console. The callback may accept up to three arguments: 
 * the string for the message, the line number, and the source identifier.
 */
page.onConsoleMessage = function (msg, line, source) {
    console.log('console> ' + msg);
};

/**
 * From PhantomJS documentation:
 * This callback is invoked when there is a JavaScript alert. The only argument passed to the callback is the string for the message.
 */
page.onAlert = function (msg) {
    console.log('alert!!> ' + msg);
};

console.log('Test URL: '+url );
console.log(document.title);
console.log('Number of register user:'+userNumber);

// Callback is executed each time a page is loaded...
var count = 0;
var t = setInterval(function(){
	page.open(url, function (status) {
		if (status === 'success') {
			// State is initially empty. State is persisted between page loads and can be used for identifying which page we're on.
			// Inject jQuery for scraping (you need to save jquery-1.6.1.min.js in the same folder as this file)
			page.injectJs('../js/jquery-1.6.1.min.js');
			// The Loop
		    // for (var i=0;i<userNumber;i++) {
				// setTimeout(autoRegister(),1000); // Make delay for lood
			// }
			autoRegister();
		}
	});
	
	if(count==userNumber){
		clearInterval(t);
		phantom.exit();
	}
	
	count++;
},1000);	

// Auto register user to the form
function autoRegister() {
	stepIndex ++;
	console.log('============================================');
	console.log('USER:'+count);
	console.log('============================================');
	var getNumber = randomString(); // Make random number for username
	var username = 'user'+getNumber;
	console.log(username);
	page.evaluate(function(username) {
		$('input[name="username"]').val(username);
		$('input[name="password"]').val('admin');
		document.getElementById("theForm").submit();
	    console.log('Register: '+username);
	    console.log('Password: admin');
	  },username);
}

function randomString() {
	var chars = "0123456789";
	var string_length = 4;
	var randomstring = '';
	for (var i=0; i<string_length; i++) {
		var rnum = Math.floor(Math.random() * chars.length);
		randomstring += chars.substring(rnum,rnum+1);
	}
	return randomstring;
}