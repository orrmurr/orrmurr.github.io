var repeatGalleryByJson = function(){
	// DOM생성뒤에 실행
	setTimeout(function(){
		// 최신순으로 정렬 / 오름차순
		getParseJsonData.reverse().forEach(function(dataValue, dataIndex, dataArr){
			createGallery(dataValue, dataIndex, dataArr);
		});
	}, setTimeoutDelay);
};
