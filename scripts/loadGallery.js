setTimeoutDelay = 200;
function loadGallery(){
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
};
loadGallery();
