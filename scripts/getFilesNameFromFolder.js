function getFileNameFromFolder(){



  $.ajax({
    url : "https://ttegululu.github.io/scripts/getFilesNameFromFolder.js",
    dataType : "jsonp",
    jsonp : "callback",
    success : function(getFilesName){
      getFileNameFromFolder = getFilesName.split("\n");
      getFileNameFromFolder.pop();
    }
  });



  // $.ajax({
  //     url: "../images",
  //     dataType: "text",
  //     success: function (getFilesName) {
  //       getFileNameFromFolder = getFilesName.split("\n");
  //       getFileNameFromFolder.pop();
  //      }
  //   });



};
getFileNameFromFolder();
