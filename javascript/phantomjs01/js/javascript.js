var d = new Date(); 
var year = d.getFullYear();	
var month = d.getMonth()+1;	
var day = d.getDate();	
var hour = d.getHours();
var min = d.getMinutes();	
var second = d.getSeconds()	
// console.log(year+"-"+month+"-"+day+"_"+hour+"-"+min+"-"+second);
// console.log(window.location.href);console.log(document.title);

function randomString() {
	var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
	var string_length = 8;
	var randomstring = '';
	for (var i=0; i<string_length; i++) {
		var rnum = Math.floor(Math.random() * chars.length);
		randomstring += chars.substring(rnum,rnum+1);
	}
	return randomstring;
}