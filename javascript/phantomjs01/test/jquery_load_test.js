console.log('Loading a web page');
var url = 'https://login.yahoo.com/'; 
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
                console.log('Page evaluate started');               
                //---
                var loginVar = 'ih5d4hf65465fd45h6@yahoo.com.br';
                var pwdVar = 'itsmypass_445f4hd564hd56f46s'; 
                //---
                $("#login_form #username").value = loginVar;
                $("#login_form #passwd").value = pwdVar;
                //---
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
                func(page); 
            });
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