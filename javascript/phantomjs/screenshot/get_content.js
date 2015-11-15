var page = new WebPage();
page.onConsoleMessage = function(msg, line, source) {
    console.log('console> ' + msg);
};

page.onAlert = function(msg) {
    console.log('alert!!> ' + msg);
};

page.open('http://diendannhatban.info', function(status) {        
    // list all the a.href links in the hello kitty etsy page
    var links = page.evaluate(function() {        
        return [].map.call(document.querySelectorAll('a'), function(link) {            
            return link.getAttribute('href');
        });
    });
    //console.log(links[2]);
    if (links && links.length > 0) {        
        var domain = '';
        if(links.length>0){
            var matches = links[0].match(/^https?\:\/\/([^\/?#]+)(?:[\/?#]|$)/i);
            domain = matches && matches[1];  // domain will be null if no match is found                                            
        }
        for(var i = 0; i < links.length; ++i) {
            var str_link = links[i];
            if((str_link.indexOf('javascript')==-1 || str_link.indexOf('mailto')==-1) && str_link.indexOf(domain)!=-1){
                if(str_link.indexOf('http')==-1 && str_link.indexOf('https')==-1){
                    str_link = 'http://'+str_link;
                }
                console.log(str_link);
            }            
        }
    }
    phantom.exit();
});