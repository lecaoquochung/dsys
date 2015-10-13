//+++++++++++++++++++++++++++++++++++
var page = new WebPage();
var url = 'http://www.yahoo.co.jp/';
var stepIndex = 0;
//+++++++++++++++++++++++++++++++++++
page.onConsoleMessage = function (msg, line, source) { console.log('console> ' + msg); };
//+++++++++++++++++++++++++++++++++++
page.onAlert = function (msg) { console.log('alert!!> ' + msg); };
//+++++++++++++++++++++++++++++++++++
function add_value_search() {
    console.log("Add value seach");
    page.evaluate(function() {
        //$("#srchtxt").val('diendannhatban info');  
        $("#srchtxt").val('dien dan nhat ban');  
    });
    page.render("add_value_search_"+count+".png");
}
//+++++++++++++++++++++++++++++++++++
function submit_search() {
    console.log("Submit seach");
    page.evaluate(function() {
        $("#srchbtn").trigger('click');             
    });    
    
    window.setTimeout(
      function () {
        page.render("submit_search_"+count+".png");
        //click_link();
        open_web();
      },
      15000 // wait 5,000ms (5s)
    );         
}
//+++++++++++++++++++++++++++++++++++
function click_link() {
    console.log("Click link");
    page.evaluate(function() {
        $('.hd a[href^="http://diendannhatban.info"]:first').on( "click", function() {
            console.log('Clicked.');        
        });        
        $('.hd a[href^="http://diendannhatban.info"]:first').trigger('click');
        console.log($('.hd a[href^="http://diendannhatban.info"]').size());
    });           
    
    window.setTimeout(
      function () {
        page.render("click_link_"+count+".png");
        //phantom.exit();              
      },
      15000 // wait 5,000ms (5s)
    );    
}

//+++++++++++++++++++++++++++++++++++
function open_web(){
    count++;    
    console.log("**********OPEN SEARCH: "+count+'*********');
    page.open(url, function (status) {
        console.log("OPEN LINK: "+url);
        if (status === 'success') {
            var cmd = ""
            page.injectJs('jquery-1.6.1.min.js');
            add_value_search();
            submit_search();            
        }
    });
    if(count==200){
        phantom.exit();
    }    
}

var count = 0;
open_web();
//+++++++++++++++++++++++++++++++++++*