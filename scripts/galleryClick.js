var galleryClick = function(getThis){
  $("#NewWaterfall > li").hide();
  var test = window.scrollY;

  var getThisInnerHtml = $(getThis.innerHTML);
  // div
  createDiv = document.createElement("div");
  createDiv.id = "galleryClickDiv";
  createDiv.setAttribute("style", "position:absoulte; width:100%; height:100%; background:#fff; cursor:pointer;");
  createDiv.style.top="test";
  createDiv.setAttribute("onclick", "galleryClickDivRemove()");
  document.getElementById("NewWaterfall").appendChild(createDiv);
  // img
  createImg = document.createElement("img");
  createImg.setAttribute("style", "width:60%; border-radius:15px;");
  createImg.setAttribute("src", getThisInnerHtml[0].src);
  document.getElementById(createDiv.id).appendChild(createImg);


  // console.log(getThisInnerHtml[0].src);
};
var galleryClickDivRemove = function(){
  $("#NewWaterfall > li").show();
  // document.getElementById("NewWaterfall").style.display="block";
  $("#galleryClickDiv").remove();
};
