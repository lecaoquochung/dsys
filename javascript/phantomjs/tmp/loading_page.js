var page = require('webpage').create();
 
page.open('http://www.seoanswer.jp', function (s) {
    console.log(s);
    phantom.exit();
});
