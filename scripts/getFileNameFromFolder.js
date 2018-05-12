function getFileNameFromFolder(){
  $.ajax({
      url: "../images",
      dataType: "text",
      success: function (data) {
        getFileNameFromFolder = data.split("\n");
        getFileNameFromFolder.pop();
       }
    });
};
getFileNameFromFolder();
