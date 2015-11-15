var page = require('webpage').create();
var url = 'http://search.yahoo.co.jp/search?p=ファンキー　内木8&search.x=1&fr=top_ga1_sa&tid=top_ga1_sa&ei=UTF-8&aq=&oq=&afs=';
var enc = encodeURI(url);
var d = new Date();
var n0 = d.toLocaleTimeString();
 
page.open(enc, function (s) {
	var n1 = d.toLocaleTimeString();
	console.log(n1);
	phantom.exit();
});
