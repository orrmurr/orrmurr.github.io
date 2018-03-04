// initialize
$(document).ready( function(){
	importJs('addEventListnerMouseenterAndClick');
	importJs('headerButtons');
	importJs('buttonHover');
	importJs('changeContentPageEffect');
	importJs('repeatContentByJson');
	importJs('scrollPaging');
	importJs('toTopButton');
	$("#content").load("templates/home.html");
});
