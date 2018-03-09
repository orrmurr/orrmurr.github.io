// initialize
$(document).ready( function(){
	setTimeoutDelay = 50;
	importJs('parseJsonData');
	importJs('addEventListnerMouseenterAndClick');
	importJs('toTopButton');
	importJs('search');
	importJs('newWaterfall');
	importJs('headerButtonsFunction');
	importJs('createGallery');
	importJs('changeGalleryPageEffect');
	$("#gallery").load("../templates/gallery.html");
	// DOM 생성, JSON 데이터 가져온 뒤 실행
	setTimeout(function(){
		importJs('repeatGalleryByJson');
		importJs('scrollPaging');
		importJs('galleryClick');
		$('#NewWaterfall').NewWaterfall();
	}, setTimeoutDelay);
});
