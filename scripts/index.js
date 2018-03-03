// initialize
$(document).ready( function(){
	importJs('headerButtons');
	importJs('buttonHover');
	importJs('changeContentPageEffect');
	importJs('repeatContentByJson');
	importJs('scrollPaging');
	importJs('toTopButton');
	$("#content").load("templates/home.html");
});
