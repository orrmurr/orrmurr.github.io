var getFileNameFromFolder = function(){
  $.ajax({
      url: "../images",
      dataType: "text",
      crossDomain:true,
      success: function (data) {
        getFileNameFromFolder = data.split("\n");
        getFileNameFromFolder.pop();
       }
    });
};
getFileNameFromFolder();
