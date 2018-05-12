function getFileNameFromFolder(){
  $.ajax({
      url: "../images",
      dataType: "text",
      success: function (getFilesName) {
        getFileNameFromFolder = getFilesName.split("\n");
        getFileNameFromFolder.pop();
        console.log(getFilesName);
       }
    });
};
getFileNameFromFolder();
