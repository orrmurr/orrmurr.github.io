function parseJsonData(){
  $.ajax({
    url: "../json/gallery.json",
    dataType: "text",
    success: function (getJsonData){
      getJsonDataToStringify = JSON.stringify(eval('(' + getJsonData + ')'));
      getParseJsonData = $.parseJSON(getJsonDataToStringify).reverse(); // 최신순으로 정렬, 오름차순
    }
  });
};
parseJsonData();
