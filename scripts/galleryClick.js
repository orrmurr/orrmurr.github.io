var galleryClick = function(getThis){
  var windowScrollY = window.scrollY + "px";
  var getThisInnerHtml = $(getThis.innerHTML);
  // div
  createDiv = document.createElement("div");
  createDiv.id = "galleryClickDiv";
  createDiv.setAttribute("style", "width:100%; height:100%; background:#fff; cursor:pointer;");
  createDiv.setAttribute("onclick", "galleryClickDivRemove(); changeGalleryPageEffect();");
  document.getElementById("NewWaterfall").appendChild(createDiv);
  // img
  createImg = document.createElement("img");
  createImg.setAttribute("class", "galleryImgClickClass");
  createImg.style.top=windowScrollY;
  createImg.setAttribute("src", getThisInnerHtml[0].src);
  document.getElementById(createDiv.id).appendChild(createImg);
};
var galleryClickDivRemove = function(){
  $("#galleryClickDiv").remove();
};
