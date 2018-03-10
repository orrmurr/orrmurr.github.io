var galleryClickToggle = false;
var galleryClick = function(getThis){
  galleryClickToggle = true;
  var windowScrollY = window.scrollY + "px";
  var getThisInnerHtml = $(getThis.innerHTML);
  // div
  createDiv = document.createElement("div");
  createDiv.id = "galleryClickDiv";
  createDiv.setAttribute("style", "width:100%; height:100%; background:#fff; cursor:pointer; padding:0 0 100%;"); //패딩 안주면 검색 후 오프클릭 영역이 줄어듬
  createDiv.setAttribute("onclick", "galleryClickDivRemove(); changeGalleryPageEffect(); galleryClickToggle=false;");
  document.getElementById("NewWaterfall").appendChild(createDiv);
  // div2
  createDiv2 = document.createElement("div");
  createDiv2.id = "galleryClickDiv2";
  createDiv2.setAttribute("class", "galleryClickDiv2");
  createDiv2.style.top=windowScrollY;
  document.getElementById(createDiv.id).appendChild(createDiv2);
  // img
  createImg = document.createElement("img");
  createImg.setAttribute("src", getThisInnerHtml[0].src);
  createImg.setAttribute("style", "width:100%; height:100%;");
  document.getElementById(createDiv2.id).appendChild(createImg);
  // span
  createSpan = document.createElement("span");
  createTextNode = document.createTextNode(getThisInnerHtml[1].innerHTML);
  createSpan.appendChild(createTextNode);
  createSpan.setAttribute("class", "f-ng");
  createSpan.setAttribute("style", "width:100%; font-size:14px; text-align:right; color:#ccc; padding:10px 0 100px 0;"); //패딩 안주면 갤러리 맨 밑에 딱 붙음
  document.getElementById(createDiv2.id).appendChild(createSpan);
};
var galleryClickDivRemove = function(){
  $("#galleryClickDiv").remove();
};
