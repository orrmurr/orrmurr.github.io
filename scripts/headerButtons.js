// 해당 div 다른 html 파일로 바꾸기
var toggleSearch = false;
var headerButtons = function(getThis){
	if (getThis.id == "ttegululuIcon") {
		$("#gallery").load('../templates/ttegululu.html');
		changeGalleryPageEffect();
	}
	if (getThis.id == "galleryIcon") {
		$("#gallery").load('../templates/gallery.html');
		changeGalleryPageEffect();
		repeatGalleryInitialize(); //repeatGallery Setting 초기화
		setTimeout(function(){
			repeatGallery();
			scrollPaging();
			setTimeout(function(){
				$('#NewWaterfall').NewWaterfall();
			}, setTimeoutDelay);
		}, setTimeoutDelay);
	}
	if (getThis.id == "searchIcon") {
		// toggle search input
		toggleSearch = !toggleSearch;
		if(toggleSearch){
			document.getElementById("searchExtendIcon").style.display = "block";
			document.getElementById("ttegululuIcon").style.visibility = "hidden";
			document.getElementById("galleryIcon").style.visibility = "hidden";
		} else{
			document.getElementById("searchExtendIcon").style.display = "none";
			document.getElementById("ttegululuIcon").style.visibility = "visible";
			document.getElementById("galleryIcon").style.visibility = "visible";
			document.getElementById("searchExtendIconInput").value = null;
		}
		// load all gallery (images 폴더 파일 전체 불러오기)
		$("#gallery").load('../templates/gallery.html');
		changeGalleryPageEffect();
		setTimeout(function(){
			getFileNameFromFolder.forEach(function(dataValue, dataIndex, dataArr){
			  createGallery(dataValue, dataArr.length-dataIndex, dataArr);
			});
			setTimeout(function(){
				$('#NewWaterfall').NewWaterfall();
				searchGalleryHide();
			}, setTimeoutDelay);
		}, setTimeoutDelay);
	}
};
addEventListnerMouseenterAndClick("ttegululuIcon", headerButtons);
addEventListnerMouseenterAndClick("galleryIcon", headerButtons);
addEventListnerMouseenterAndClick("searchIcon", headerButtons);
