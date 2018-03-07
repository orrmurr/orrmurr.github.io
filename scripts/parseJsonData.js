var parseJsonData = function(){
  $.ajax({
    url: "../json/gallery.json",
    dataType: "text",
    success: function (getJsonData){
      getJsonDataToStringify = JSON.stringify(eval('(' + getJsonData + ')'));
      getParseJsonData = $.parseJSON(getJsonDataToStringify);
    }
  });
};
