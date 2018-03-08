var search = function(getInput){
  $("#NewWaterfall > li > img").hide();
  $("#NewWaterfall > li > span").hide();
  var temp = $("#NewWaterfall > li > span:contains(" + getInput.value + ")");
  if(temp){
    $(temp).parent().children().show();
  } else {
    $("#NewWaterfall > li > img").show();
    $("#NewWaterfall > li > span").show();
  }
};
