
var page = new WebPage(),
    url = 'http://192.168.11.200/phantomjs/form/signup.php',
    // url = 'http://creative.givery.co.jp/projects/phantomjs/form/signup.php',
    stepIndex = 0;

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

// Callback is executed each time a page is loaded...
var count = 1;
var t = setInterval(function(){
 page.open(url, function (status) {
   if (status === 'success') {
  // State is initially empty. State is persisted between page loads and can be used for identifying which page we're on.
  console.log('============================================');
  console.log('Step "' + stepIndex + '"');
  console.log('============================================');

  // Inject jQuery for scraping (you need to save jquery-1.6.1.min.js in the same folder as this file)
  //page.injectJs('http://ajax.googleapis.com/ajax/libs/jquery/1.6.1/jquery.min.js');
  page.injectJs('../jquery/jquery-1.6.1.min.js');
  
  // Our "event loop"
  if(!phantom.state){
    initialize();
  } else {
    phantom.state();
  } 

  // Save screenshot for debugging purposes
  page.render("step" + stepIndex++ + ".png");
   }
 });
 
 if(count==10){
  clearInterval(call);
 }
},1000);

// Step 1
function initialize() {
	var getNumber = randomString(); // Make random number for username
	var username = 'user'+getNumber;
	console.log(username);
	page.evaluate(function(username) {
		$('input[name="username"]').val(username);
		$('input[name="password"]').val('admin');
		console.log(document.title);
		// $('form#theForm').submit(function(){
		// document.theForm.submit();
		document.getElementById("theForm").submit();
		// $('#theForm').submit(function(){
			// // console.log('Submit complete!');
			 // if ( $('input[name="username"]').val() == "" && $('input[name="password"]').val() == "" ) {
			    // // success, element found by waitFor()
				// console.log('NO data ');
			// } else {
			    // // waitFor() timed out
				// console.log('OKIE');
			    // // phantom.exit( 1 );
			// }
		// });
	    console.log('Registering user '+username);
	    console.log('Password: admin');
	  },username);
	// Phantom state doesn't change between page reloads
	// We use the state to store the search result handler, ie. the next step
	// phantom.state = parseResults;
	page.render(username+'.png');
	
	window.setTimeout(
		function () {
			page.render(username+'.png');
			phantom.exit(0);
		},
		5000 // wait 5,000ms (5s)
	);
	
	phantom.state = parseResults; 
	console.log(phantom.state);

}

// Step 2
function parseResults() {
  page.evaluate(function() {
    $('a').each(function(index, link) {
      console.log($(link).attr('href'));
    })
    console.log('Parsed results');
  });
  // If there was a 3rd step we could point to another function
  // but we would have to reload the page for the callback to be called again
  // page.render(username+'_done.png');
  phantom.exit(); 
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

function func_submit() {
    document.theForm.submit();
}