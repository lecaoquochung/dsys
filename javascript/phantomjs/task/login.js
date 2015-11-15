console.log("got here");
var page = require('webpage').create();

page.onConsoleMessage = function(msg) {
    console.log(msg);
};

page.settings.userAgent = 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2228.0 Safari/537.36';
page.viewportSize = {width: 1280,height: 768};

page.open("http://www.facebook.com", function(status) {
    if ( status === "success" ) {
        page.evaluate(function() {
              document.querySelector("input[name='email']").value = "test@ittvn.com";
              document.querySelector("input[name='pass']").value = "ittvn123";
              document.querySelector("#login_form").submit();

              console.log("Login submitted!");
        });
        window.setTimeout(function () {
          page.render('colorwheel.png');
          phantom.exit();
        }, 5000);
   }
});
