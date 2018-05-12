function searchGalleryHide(){
  $("#NewWaterfall > li > img").hide();
  $("#NewWaterfall > li > span").hide();
};

function search(getInput){
  searchGalleryHide();
  var getInputValue = $("#NewWaterfall > li > span:contains(" + getInput.value + ")");
  $(getInputValue).parent().children().show();
  if(getInputValue.length == getFileNameFromImagesFolder.length){
    searchGalleryHide();
  }
};
