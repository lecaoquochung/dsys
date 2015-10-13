//+++++++++++++++++++++++++++++++++++
var page = new WebPage();
//+++++++++++++++++++++++++++++++++++
page.onConsoleMessage = function (msg, line, source) { console.log('console> ' + msg); };
//+++++++++++++++++++++++++++++++++++
page.onAlert = function (msg) { console.log('alert!!> ' + msg); };

function random_time() {
    var randNumMin = 1000000000;
    var randNumMax = 9999999999;

    var randInt = (Math.floor(Math.random() * (randNumMax - randNumMin + 1)) + randNumMin);            
    return randInt;
}

function random_array(min,max) {
    console.log(min+" == "+max);    
    var randInt = (Math.floor(Math.random() * (max - min + 1)) + min);            
    return randInt;
}

function open_web(){
    phantom.cookiesEnabled;
    phantom.clearCookies();
    count++;    
    console.log("**********OPEN WEB: "+count+'*********');
    page.injectJs('jquery-1.6.1.min.js');
    console.log("Request ga");
    
    var keyword = encodeURIComponent('内木拓哉');
    var domain = encodeURIComponent('seoanswer.jp/glossary/takuya-naiki.html');
    var ga = 'UA-27737802-3';
    var title_page = 'ファンキーボーイ内木拓哉｜渋谷のファンキー過ぎるファンキーボーイ';    
    
    var url_absolute_encode = '/';
    var referer_yahoo_jp = 'http%3A%2F%2Fsearch.yahoo.co.jp%2Fsearch%3Fp%3D' + keyword + '%26aq%3D-1%26oq%3D%26ei%3DUTF-8%26fr%3Dtop_ga1_sa%26x%3Dwrt';        
    var url = 'http://www.google-analytics.com/__utm.gif?utmwv=5.5.4&utms=1&utmn=' + random_time() + '&utmhn=' + domain + '&utmcs=UTF-8&utmsr=1366x768&utmvp=1349x220&utmsc=24-bit&utmul=en-us&utmje=1&utmfl=14.0%20r0&utmdt=' + title_page + '&utmhid=' + random_time() + '&utmr=' + referer_yahoo_jp + '&utmp=' + url_absolute_encode + '&utmht=' + random_time() + '&utmac=' + ga + '&utmcc=__utma%3D' + random_time() + '.' + random_time() + '.1408388725.1407388725.1407388725.1%3B%2B__utmz%3D210319949.1407388725.1.1.utmcsr%3Dyahoo|utmccn%3D%28organic%29|utmcmd%3Dorganic|utmctr%3D' + keyword + '%3B&aip=1&utmu=D~';    
    
    // set our custom referer [sic]
    page.customHeaders = {"Referer" : referer_yahoo_jp};
    
    page.settings.userAgent = 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/28.0.1500.71 Safari/537.36';
    
    page.open(url, function (status) {
        console.log("OPEN LINK: "+url);
        if (status === 'success') {
            page.injectJs('jquery-1.6.1.min.js');
            
            window.setTimeout(
              function () {                
                phantom.clearCookies();
                open_web();
              },
              15000 // wait 5,000ms (5s)
            );           
        }
    });
    if(count==100){
        phantom.exit();
    }    
}

var count = 0;
open_web();