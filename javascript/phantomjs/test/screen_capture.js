var url = 'https://developers.google.com/speed/pagespeed/insights/?url=http%3A%2F%2Fseoanswer.jp', page = new WebPage();

page.open(url, function(status) {
	if (status !== 'success') {
		console.log('Unable to access network');
		phantom.exit();
		return;
	} else {
		window.setTimeout(function () {
			page.render('google_test.png');
			phantom.exit();
		}, 10000);
	}
});
