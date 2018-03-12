// initialize
$(document).ready( function(){
	importJs('parseJsonData');
	setTimeout(function(){
		setTimeoutDelay = getParseJsonData.length; //getParseJsonData 로딩후 적용
		importJs('addEventListnerMouseenterAndClick');
		importJs('newWaterfall');
		setTimeout(function(){
			importJs('toTopButton');
			importJs('search');
			importJs('createGallery');
			importJs('changeGalleryPageEffect');
			$("#gallery").load("../templates/gallery.html");
			// DOM 생성, JSON 데이터 가져온 뒤 실행
			setTimeout(function(){
				importJs('headerButtonsFunction');
				importJs('repeatGalleryByJson');
				importJs('scrollPaging');
				importJs('galleryClick');
				setTimeout(function(){
					$('#NewWaterfall').NewWaterfall();
				}, setTimeoutDelay);
			}, setTimeoutDelay);
		}, setTimeoutDelay);
	}, 100);

});
