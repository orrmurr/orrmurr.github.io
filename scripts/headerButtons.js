// 해당 div 다른 html 파일로 바꾸기
var toggleSearch = false;
function headerButtons(getThis){
	if (getThis.id == "ttegululuIcon") {
		$("#gallery").load('../templates/ttegululu.html');
		changeGalleryPageEffect();
	}
	if (getThis.id == "galleryIcon") {
		loadGallery();
	}
	if (getThis.id == "searchIcon") {
		// toggle search input
		toggleSearch = !toggleSearch;
		if(toggleSearch){
			document.getElementById("searchExtendIcon").style.display = "block";
			document.getElementById("ttegululuIcon").style.visibility = "hidden";
			document.getElementById("galleryIcon").style.visibility = "hidden";
			loadAllGallery();
		} else{
			document.getElementById("searchExtendIcon").style.display = "none";
			document.getElementById("ttegululuIcon").style.visibility = "visible";
			document.getElementById("galleryIcon").style.visibility = "visible";
			document.getElementById("searchExtendIconInput").value = null;
			loadGallery();
		}
	}
};
addEventListnerMouseenterAndClick("ttegululuIcon", headerButtons);
addEventListnerMouseenterAndClick("galleryIcon", headerButtons);
addEventListnerMouseenterAndClick("searchIcon", headerButtons);
