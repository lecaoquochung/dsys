// window.onload = function(){
	// document.getElementById("search_btn").onclick = search;
// }

// function search(){
	// google api
	// var requestURL = "http://ajax.googleapis.com/ajax/services/search/web";
	// requestURL += "?callback=responce";
	// requestURL += "&v=1.0";
	// requestURL += "&q=" + document.getElementById("keyword").value;
	// requestURL += "&rsz=large&";
	// requestURL += "&hl=jp";
	// console.log(requestURL);
	
	// ddnbapis
	// var requestURL = "http://api.ddnb.info/rankmobile/1";
	// requestURL += "?callback=responce";
	// requestURL += "&keyword=" + document.getElementById("keyword").value;
	// requestURL += "&url=" + document.getElementById("url").value;
	// requestURL += "&engine=" + document.getElementById("engine").value;
	// console.log(requestURL);
// 	
	// var scriptElement = document.createElement("script");
	// scriptElement.setAttribute("type", "text/javascript");
	// scriptElement.setAttribute("charset", "utf-8");
	// scriptElement.setAttribute("src", requestURL);
	// document.getElementsByTagName("head")[0].appendChild(scriptElement);
// }

// function responce(data){
	// console.log(data);
	// var txtResult = "";
	// for(var i in data.responseData.results){
		// txtResult += data.responseData.results[i].titleNoFormatting + "<br/>";
		// txtResult += data.responseData.results[i].url + "<br/>";
	// }
	// document.getElementById("search_result").innerHTML = txtResult;
// }
