// indexing
var repeatGalleryByJsonInitialize = function(){
	page = 0;
	showPageInitialize = 30 //한 페이지당 보여지는 갤러리 갯수
	getParseJsonDataLength = getParseJsonData.length;
	maxPage = Math.ceil(getParseJsonDataLength/showPageInitialize);
	indexing = getParseJsonDataLength+1;
};
var repeatGalleryByJson = function(){
	if(page < maxPage){
		var getParseJsonDataPaginate = getParseJsonData.slice(page*showPageInitialize, (page+1)*showPageInitialize);
		getParseJsonDataPaginate.forEach(function(dataValue, dataIndex, dataArr){
			indexing-=1;
			createGallery(dataValue, indexing, dataArr);
		});
		page++;
	}
};
repeatGalleryByJsonInitialize();
repeatGalleryByJson();
