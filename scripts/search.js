var search = function(inputValue){
  var getInputValue = inputValue.value;
  $("#NewWaterfall > li").hide();
  var temp = $("#NewWaterfall > li > span:contains(" + getInputValue + ")");
  if(temp){
    $(temp).parent().show();
  } else {
    $("#NewWaterfall > li").show();
  }
  // console.log(temp);




  // if(window.event.keyCode == 13){
  //   var getInputValue = document.getElementById("searchExtendIconInput").value;
  //   getParseJsonData.filter(function(filtered){
  //     if(filtered.title == getInputValue){
  //       getParseJsonData = filtered.title;
  //       repeatGalleryByJson();
  //     }
  //     if(filtered.img == getInputValue){
  //       getParseJsonData = filtered.img;
  //       repeatGalleryByJson();
  //     }
  //
  //   });
  //   setTimeout(function(){
  //     $('#NewWaterfall').NewWaterfall();
  //   }, setTimeoutDelay);
  // }
};
