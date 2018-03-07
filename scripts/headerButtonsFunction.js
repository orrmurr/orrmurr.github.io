// 해당 div 다른 html 파일로 바꾸기
var headerButtonsFunction = function(getThis){
	if (getThis.id == "ttegululuIcon") {
		$("#gallery").load('../templates/ttegululu.html');
		changeGalleryPageEffect(getThis.id);
	} else {
		$("#gallery").load('../templates/gallery.html');
		changeGalleryPageEffect(getThis.id);
		repeatGalleryByJson();
		setTimeout(function(){
			$('#NewWaterfall').NewWaterfall();
		}, setTimeoutDelay);
	}
};
addEventListnerMouseenterAndClick("ttegululuIcon", headerButtonsFunction);
addEventListnerMouseenterAndClick("galleryIcon", headerButtonsFunction);
