// initialize
$(document).ready( function(){
	setTimeoutDelay = 200;
	importJs('getFileNameFromFolder');
	// importJs('parseJsonData');
	importJs('addEventListnerMouseenterAndClick');
	setTimeout(function(){
		importJs('toTopButton');
		importJs('search');
		importJs('newWaterfall');
		importJs('createGallery');
		importJs('changeGalleryPageEffect');
		$("#gallery").load("../templates/gallery.html");
		// DOM 생성, JSON 데이터 가져온 뒤 실행
		setTimeout(function(){
			importJs('repeatGallery');
			importJs('headerButtons');
			importJs('scrollPaging');
			importJs('galleryClick');
			setTimeout(function(){
				$('#NewWaterfall').NewWaterfall();
			}, setTimeoutDelay);
		}, setTimeoutDelay);
	}, setTimeoutDelay);
});
