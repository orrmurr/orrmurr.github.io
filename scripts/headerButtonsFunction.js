// 해당 div 다른 html 파일로 바꾸기
var toggleSearch = false;
var headerButtonsFunction = function(getThis){
	if (getThis.id == "ttegululuIcon") {
		$("#gallery").load('../templates/ttegululu.html');
		changeGalleryPageEffect(getThis.id);
	}
	if (getThis.id == "galleryIcon") {
		$("#gallery").load('../templates/gallery.html');
		changeGalleryPageEffect(getThis.id);
		// parseJsonData();
		repeatGalleryByJson();
		setTimeout(function(){
			$('#NewWaterfall').NewWaterfall();
		}, setTimeoutDelay*2);
	}
	if (getThis.id == "searchIcon") {
		toggleSearch = !toggleSearch;
		if(toggleSearch){
			document.getElementById("searchExtendIcon").style.display = "block";
		}
		else{
			document.getElementById("searchExtendIcon").style.display = "none";
		}
	}
};
addEventListnerMouseenterAndClick("ttegululuIcon", headerButtonsFunction);
addEventListnerMouseenterAndClick("galleryIcon", headerButtonsFunction);
addEventListnerMouseenterAndClick("searchIcon", headerButtonsFunction);
