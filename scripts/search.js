var searchGalleryHide = function(){
  $("#NewWaterfall > li > img").hide();
  $("#NewWaterfall > li > span").hide();
};

var search = function(getInput){
  searchGalleryHide();
  var getInputValue = $("#NewWaterfall > li > span:contains(" + getInput.value + ")");
  $(getInputValue).parent().children().show();
  if(getInputValue.length == getParseJsonData.length){
    searchGalleryHide();
  }
};
