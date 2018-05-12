setTimeoutDelay = 300;
function loadGallery(){
  $("#gallery").load('../templates/gallery.html');
  changeGalleryPageEffect();
  repeatGalleryInitialize(); //repeatGallery Setting 초기화
  setTimeout(function(){
    repeatGallery();
    scrollPaging();
    setTimeout(function(){
      $('#NewWaterfall').NewWaterfall();
    }, setTimeoutDelay/10);
  }, setTimeoutDelay);
};

// load all gallery (images 폴더 파일 전체 불러오기)
function loadAllGallery(){
  $("#gallery").load('../templates/gallery.html');
  changeGalleryPageEffect();
  setTimeout(function(){
    getFileNameFromImagesFolder.forEach(function(dataValue, dataIndex, dataArr){
      createGallery(dataValue, dataArr.length-dataIndex, dataArr);
    });
    setTimeout(function(){
      $('#NewWaterfall').NewWaterfall();
      searchGalleryHide();
    }, setTimeoutDelay/10);
  }, setTimeoutDelay);
};
