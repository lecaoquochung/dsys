// var url = 'http://www.google.com/',
var url = 'http://www.google.co.jp/?gws_rd=ssl#q=le+hung+shibuya',
    page = new WebPage();

page.open(url, function(status) {
    if (status !== 'success')
    {
      console.log('Unable to access network');
      phantom.exit();
      return;
    }
    else
    {
        page.includeJs("//ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min.js", function() {
            page.evaluate(function() {
                $('#gbqfq').val("Test");

                $("#gbqfba").click();

            });

            page.render('google_test.png');
            phantom.exit();
        });
    }
});