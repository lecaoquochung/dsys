//+++++++++++++++++++++++++++++++++++
var page = new WebPage();
var system = require('system');
var args = system.args; //1: keyword 2:domain 3:ga id 4: title page

if (args.length !=5 ) {
  console.log('Error param.');
  phantom.exit();
}
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
    var randInt = (Math.floor(Math.random() * (max - min + 1)) + min);            
    return randInt;
}

function random_string(count){
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for( var i=0; i < count; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}

function open_web(){
    phantom.cookiesEnabled;
    count++;    
    console.log("**********OPEN WEB: "+count+'*********');
    page.injectJs('jquery-1.6.1.min.js');
    console.log("Request ga");
    
    var keyword = encodeURIComponent(args[1]);
    var domain = encodeURIComponent(args[2]);        
    var ga = args[3]//'UA-16752504-1';
    var title_page = encodeURIComponent(args[4]); 
       
    var url_absolute_encode = '/'; 
    var referer_search = [];    
    referer_search[0] = [
        'yahoo',
        'http%3A%2F%2Fsearch.yahoo.co.jp%2Fsearch%3Fp%3D' + keyword + '%26aq%3D-1%26oq%3D%26ei%3DUTF-8%26fr%3Dtop_ga1_sa%26x%3Dwrt',
        'http://www.google-analytics.com/__utm.gif?utmwv=5.5.4&utms=1&utmn=' + random_time() + '&utmhn=' + domain + '&utmcs=UTF-8&utmsr=1366x768&utmvp=1349x220&utmsc=24-bit&utmul=en-us&utmje=1&utmfl=14.0%20r0&utmdt=' + title_page + '&utmhid=' + random_time() + '&utmr=http%3A%2F%2Fsearch.yahoo.co.jp%2Fsearch%3Fp%3D' + keyword + '%26aq%3D-1%26oq%3D%26ei%3DUTF-8%26fr%3Dtop_ga1_sa%26x%3Dwrt&utmp=' + url_absolute_encode + '&utmht=' + random_time() + '&utmac=' + ga + '&utmcc=__utma%3D' + random_time() + '.' + random_time() + '.1408388725.1407388725.1407388725.1%3B%2B__utmz%3D210319949.1407388725.1.1.utmcsr%3Dyahoo|utmccn%3D%28organic%29|utmcmd%3Dorganic|utmctr%3D' + keyword + '%3B&aip=1&utmu=D~'
    ]; 
    
    referer_search[1] = [
        'facebook',
        'http://l.facebook.com/l.php?u=http%3A%2F%2F'+domain+'%2F&h='+random_string(9)+'&s=1',
        'http://www.google-analytics.com/__utm.gif?utmwv=5.5.4&utms=1&utmn=' + random_time() + '&utmhn=' + domain + '&utmcs=UTF-8&utmsr=1366x768&utmvp=1349x220&utmsc=24-bit&utmul=en-us&utmje=1&utmfl=14.0%20r0&utmdt=' + title_page + '&utmhid=' + random_time() + '&utmr=http://l.facebook.com/l.php?u=http%3A%2F%2F'+domain+'%2F&h='+random_string(9)+'&s=1&utmp=' + url_absolute_encode + '&utmht=' + random_time() + '&utmac=' + ga + '&utmcc=__utma%3D' + random_time() + '.' + random_time() + '.1408388725.1407388725.1407388725.1%3B%2B__utmz%3D210319949.1407388725.1.1.utmcsr%3Dl.facebook.com|utmccn%3D%28referral%29|utmcmd%3Dreferral|utmctr%3D/l.php%3B&aip=1&utmu=D~'
    ];    
    
    referer_search[2] = [
        'nhatrangclub',
        encodeURIComponent('http://nhatrangclub.vn'),
        'http://www.google-analytics.com/__utm.gif?utmwv=5.5.4&utms=1&utmn=' + random_time() + '&utmhn=' + domain + '&utmcs=UTF-8&utmsr=1366x768&utmvp=1349x220&utmsc=24-bit&utmul=en-us&utmje=1&utmfl=14.0%20r0&utmdt=' + title_page + '&utmhid=' + random_time() + '&utmr=' + encodeURIComponent('http://nhatrangclub.vn') + '&utmp=' + url_absolute_encode + '&utmht=' + random_time() + '&utmac=' + ga + '&utmcc=__utma%3D' + random_time() + '.' + random_time() + '.1408388725.1407388725.1407388725.1%3B%2B__utmz%3D210319949.1407388725.1.1.utmcsr%3Dnhatrangclub.vn|utmccn%3D%28referral%29|utmcmd%3Dreferral|utmctr%3D/%3B&aip=1&utmu=D~'
    ];
    
    referer_search[3] = [
        '-',
        'direct',
        'http://www.google-analytics.com/__utm.gif?utmwv=5.5.4&utms='+random_array(1,10)+'&utmn=' + random_time() + '&utmhn=' + domain + '&utmcs=UTF-8&utmsr=1366x768&utmvp=1349x220&utmsc=24-bit&utmul=en-us&utmje=1&utmfl=14.0%20r0&utmdt=' + title_page + '&utmhid=' + random_time() + '&utmr=-&utmp=' + url_absolute_encode + '&utmht=' + random_time() + '&utmac=' + ga + '&utmcc=__utma%3D' + random_time() + '.' + random_time() + '.1408388725.1407388725.1407388725.1%3B%2B__utmz%3D210319949.1407388725.1.1.utmcsr%3D(direct)%7Cutmccn%3D(direct)%7Cutmcmd%3D(none)%3B&utmu=D~'
    ];   
    
    referer_search[4] = [
        'twitter',
        encodeURIComponent('http://t.co/F5usreUyzs'),
        'http://www.google-analytics.com/__utm.gif?utmwv=5.5.4&utms=1&utmn=' + random_time() + '&utmhn=' + domain + '&utmcs=UTF-8&utmsr=1366x768&utmvp=1349x220&utmsc=24-bit&utmul=en-us&utmje=1&utmfl=14.0%20r0&utmdt=' + title_page + '&utmhid=' + random_time() + '&utmr=' + encodeURIComponent('http://t.co/F5usreUyzs') + '&utmp=' + url_absolute_encode + '&utmht=' + random_time() + '&utmac=' + ga + '&utmcc=__utma%3D' + random_time() + '.' + random_time() + '.1408388725.1407388725.1407388725.1%3B%2B__utmz%3D210319949.1407388725.1.1.utmcsr%3Dt.co|utmccn%3D%28referral%29|utmcmd%3Dreferral|utmctr%3D/F5usreUyzs;%3B&aip=1&utmu=D~'
    ];    
    
    referer_search[5] = [
        'bing',
        'http%3A%2F%2Fwww.bing.com%2Fsearch%3Fq%3D' + keyword + '%26qs%3Dn%26form%3DQBLH%26pq%3D' + keyword + '%26sc%3D8-3%26sp%3D-1%26sk%3D%26cvid%3Dd7d0245ad0624a619b5e990f127dd554',
        'http://www.google-analytics.com/__utm.gif?utmwv=5.5.4&utms=1&utmn=' + random_time() + '&utmhn=' + domain + '&utmcs=UTF-8&utmsr=1366x768&utmvp=1349x220&utmsc=24-bit&utmul=en-us&utmje=1&utmfl=14.0%20r0&utmdt=' + title_page + '&utmhid=' + random_time() + '&utmr=http%3A%2F%2Fwww.bing.com%2Fsearch%3Fq%3D' + keyword + '%26qs%3Dn%26form%3DQBLH%26pq%3D' + keyword + '%26sc%3D8-3%26sp%3D-1%26sk%3D%26cvid%3Dd7d0245ad0624a619b5e990f127dd554&utmp=' + url_absolute_encode + '&utmht=' + random_time() + '&utmac=' + ga + '&utmcc=__utma%3D' + random_time() + '.' + random_time() + '.1408388725.1407388725.1407388725.1%3B%2B__utmz%3D210319949.1407388725.1.1.utmcsr%3Dbing|utmccn%3D%28organic%29|utmcmd%3Dorganic|utmctr%3D' + keyword + '%3B&aip=1&utmu=D~'
    ];
    
    referer_search[6] = [
        'google',
        'http://www.google.co.jp/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&ved=0CB4QFjAA&url='+encodeURIComponent('http://'+domain)+'&ei=c67jU-'+random_string(16)+'&usg=AFQjCNGB8HLbYoHyY9WQ-Gm8G_oRwzAdTg&bvm=bv.72676100,d.dGc',
        'http://www.google-analytics.com/__utm.gif?utmwv=5.5.4&utms=1&utmn=' + random_time() + '&utmhn=' + domain + '&utmcs=UTF-8&utmsr=1366x768&utmvp=1349x220&utmsc=24-bit&utmul=en-us&utmje=1&utmfl=14.0%20r0&utmdt=' + title_page + '&utmhid=' + random_time() + '&utmr=http://www.google.co.jp/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&ved=0CB4QFjAA&url='+encodeURIComponent('http://'+domain)+'&ei=c67jU-'+random_string(16)+'&usg=AFQjCNGB8HLbYoHyY9WQ-Gm8G_oRwzAdTg&bvm=bv.72676100,d.dGc&utmp=' + url_absolute_encode + '&utmht=' + random_time() + '&utmac=' + ga + '&utmcc=__utma%3D' + random_time() + '.' + random_time() + '.1408388725.1407388725.1407388725.1%3B%2B__utmz%3D210319949.1407388725.1.1.utmcsr%3Dgoogle|utmccn%3D%28organic%29|utmcmd%3Dorganic|utmctr%3D' + keyword + '%3B&aip=1&utmu=D~'
    ];        
    
    console.log("Randome referer search.");
    var referer_id = random_array(0,referer_search.length-1);
    var url = referer_search[referer_id][2];
    console.log(url);
    console.log("Referer: "+referer_search[referer_id][1]);
    // set our custom referer [sic]
    page.customHeaders = {"Referer" : referer_search[referer_id][1]};
        
    var userAgent = [];
    userAgent[0] = "Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; .NET CLR 1.1.4322)";
    userAgent[1] = "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/35.0.1916.114 Safari/537.36";
    userAgent[2] = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/35.0.1916.153 Safari/537.36";
    userAgent[3] = "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/35.0.1916.114 Safari/537.36";
    userAgent[4] = "Mozilla/5.0 (Windows NT 6.1; WOW64; rv:31.0) Gecko/20100101 Firefox/31.0";
    userAgent[5] = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.9; rv:31.0) Gecko/20100101 Firefox/31.0";
    
    console.log("Randome userAgent.");
    var userAgent_id = random_array(0,userAgent.length-1);
    console.log(userAgent[userAgent_id]);
    page.settings.userAgent = userAgent[userAgent_id];
    
    page.open(url, function (status) {
        console.log("OPEN LINK DONE");
        if (status === 'success') {
            page.injectJs('jquery-1.6.1.min.js');
            
            window.setTimeout(
              function () {                
                phantom.clearCookies();
                open_web();
              },
              random_array(60000,180000)
            );           
        }
    });
    if(count==100){
        phantom.exit();
    }    
}

var count = 0;
open_web();