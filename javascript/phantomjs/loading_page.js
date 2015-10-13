var page = require('webpage').create();
 
page.open('http://seoanswer.jp', function (s) {
    console.log(s);
    phantom.exit();
});
