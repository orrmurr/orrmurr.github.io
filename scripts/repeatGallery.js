// indexing
function repeatGalleryInitialize(){
	page = 0;
	showPageInitialize = 30 //한 페이지당 보여지는 갤러리 갯수
	getFileNameFromImagesFolderLength = getFileNameFromImagesFolder.length;
	maxPage = Math.ceil(getFileNameFromImagesFolderLength/showPageInitialize);
	indexing = getFileNameFromImagesFolderLength+1;
};
function repeatGallery(){
	if(page < maxPage){
		var getParseJsonDataPaginate = getFileNameFromImagesFolder.slice(page*showPageInitialize, (page+1)*showPageInitialize);
		getParseJsonDataPaginate.forEach(function(dataValue, dataIndex, dataArr){
			indexing-=1;
			createGallery(dataValue, indexing, dataArr);
		});
		page++;
	}
};
