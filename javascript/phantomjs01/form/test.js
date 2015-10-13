for(var i=0;i<10;i++){
	page.open(url, setInterval(function (status) {
	  if (status === 'success') {
	    // State is initially empty. State is persisted between page loads and can be used for identifying which page we're on.
	    console.log('============================================');
	    console.log('Step "' + stepIndex + '"');
	    console.log('============================================');
	
	    // Inject jQuery for scraping (you need to save jquery-1.6.1.min.js in the same folder as this file)
	    //page.injectJs('http://ajax.googleapis.com/ajax/libs/jquery/1.6.1/jquery.min.js');
	    page.injectJs('../jquery/jquery-1.6.1.min.js');
	
	    // Our "event loop"
	    if(!phantom.state){
	      initialize();
	    } else {
	      phantom.state();
	    } 
	
	    // Save screenshot for debugging purposes
	    page.render("step" + stepIndex++ + ".png");
	  }
	}),1000);
}