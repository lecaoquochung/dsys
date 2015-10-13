var page = new WebPage();
var url = phantom.args[0];

page.open(url, function (status) {

  if (status !== 'success') {
      console.log('Unable to access network');
  } else {

    console.log(page.evaluate(function () {

      var arr = document.getElementsByClassName("login-form");
      var i;

      for (i=0; i < arr.length; i++) {

        if (arr[i].getAttribute('method') == "POST") {
          arr[i].elements["email"].value="mylogin@somedomain.com";
          arr[i].elements["password"].value="mypassword";

          // This part doesn't seem to work. It returns the content
          // of the current page, not the content of the page after 
          // the submit has been executed. Am I correctly instrumenting
          // the submit in Phantom?
          arr[i].submit();
          return document.querySelectorAll('html')[0].outerHTML;
        }

      }

      return "failed :-(";

    }));
  }

  phantom.exit();
}
