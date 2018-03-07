// initialize
$(document).ready( function(){
	setTimeoutDelay = 100;
	importJs('enterKey');
	importJs('addEventListnerMouseenterAndClick');
	importJs('newWaterfall');
	importJs('repeatGalleryByJson');
	importJs('changeGalleryPageEffect');
	importJs('headerButtonsFunction');
	importJs('toTopButton');
	$("#gallery").load("../templates/gallery.html");
	// DOM생성뒤에 실행
	setTimeout(function(){
		repeatGalleryByJson();
		setTimeout(function(){
			$('#NewWaterfall').NewWaterfall();
		}, setTimeoutDelay);
	}, setTimeoutDelay);
});
