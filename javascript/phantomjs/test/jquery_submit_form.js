console.log('Loading a web page');
var url = 'http://192.168.11.200/phantomjs/form/register.html'; 
var page = require('webpage').create();
console.log('Setting error handling');
page.onConsoleMessage = function (msg) {
    console.log(msg);
};
page.onError = function (msg, trace) {
    console.log(msg);
    trace.forEach(function(item) {
        console.log('  ', item.file, ':', item.line);
    })
    phantom.exit();
}
console.log('Error handling is set');
console.log('Opening page');
page.open(url, function (status) {
    if (status != 'success') {
        console.log('F-' + status);
    } else {
        console.log('S-' + status); 
        //-------------------------------------------------     
        var jsLoc = '';
        jsLoc = 'jquery.min.js'; // to load local
        //jsLoc = 'http://ajax.googleapis.com/ajax/libs/jquery/1.6.1/jquery.min.js'; // to load remote
        var func = function(pg){
            console.log('Function called');
            console.log('Page evaluating');
            console.log(pg);
            pg.evaluate(function() {
				console.log('Submit form');
				$('#containt input[name="username"]').val('kiet');
				$('#containt input[name="password"]').val('123456');
			});
			$('#containt form').submit(function(){
				console.log($('body').html());
			});			
            console.log('Rendering');
            pg.render('ystsA.png');
            console.log('Rendered');
        }
        if (typeof jQuery == 'undefined') {  
            console.log('JQuery Loading');  // <<<<==== Execute only until here
            console.log('Source:['+jsLoc+']');
            var rs = page.includeJs(jsLoc, function()  // <<<<===== Fail here, jsLoc was changed to load locally and after tried remotely, i tried use page.injectJs but fail too
            { 
                console.log('JQuery Loaded');  // <<<< ===== Never reach here, no matter if loading local or remote script in include above
                //func(page); 				
            });
			func(page); 				
            page.render('ystsB.png');
        } else {
            console.log('JQuery Already Loaded');
            func(page);
            page.render('ystsC.png');
        }
        //-------------------------------------------------
    }
    phantom.exit();
});