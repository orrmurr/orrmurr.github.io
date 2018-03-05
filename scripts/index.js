// initialize
$(document).ready( function(){
	importJs('enterKey');
	importJs('addEventListnerMouseenterAndClick');
	importJs('repeatGalleryByJson');
	importJs('changeGalleryPageEffect');
	importJs('headerButtonsFunction');
	importJs('scrollPaging');
	importJs('toTopButton');
	$("#gallery").load("../templates/gallery.html");
	// DOM생성뒤에 실행
	setTimeout(function(){
		repeatGalleryByJson();
	}, 30);
});
