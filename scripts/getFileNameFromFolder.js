var getFileNameFromFolder = function(){
  // 검색할 확장자
  var fileExtension = [".png", "jpg", ".jpeg", ".gif"];
  $.ajax({
      url: '../images',
      success: function (data) {
         getFileNameFromFolder = [];
         for (var i = 0; i < fileExtension.length; i++) {
           $(data).find("a:contains(" + fileExtension[i] + ")").each(function () {
             var filename = this.href.replace(window.location.host, "").replace("http:///images/", "");
             getFileNameFromFolder.push(filename);
           });
         }
       }
    });
};
getFileNameFromFolder();
