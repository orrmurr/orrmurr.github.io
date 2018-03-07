// initialize
$(document).ready( function(){
	setTimeoutDelay = 50;
	importJs('addEventListnerMouseenterAndClick');
	importJs('parseJsonData');
	importJs('search');
	importJs('newWaterfall');
	importJs('headerButtonsFunction');
	importJs('createGallery');
	importJs('repeatGalleryByJson');
	importJs('changeGalleryPageEffect');
	importJs('toTopButton');
	$("#gallery").load("../templates/gallery.html");
	// DOM생성뒤에 실행
	setTimeout(function(){
		parseJsonData();
		repeatGalleryByJson();
		setTimeout(function(){
			$('#NewWaterfall').NewWaterfall();
		}, setTimeoutDelay*2);
	}, setTimeoutDelay);
});
