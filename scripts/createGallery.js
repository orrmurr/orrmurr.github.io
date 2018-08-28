function createGallery(dataValue, dataIndex, dataArr){
  // li
  createli = document.createElement("li");
  createli.id = dataIndex+dataValue;
  createli.setAttribute("class", "buttonHover");
  createli.setAttribute("style", "border-radius:6px; cursor:pointer;");
  createli.setAttribute("onclick", "galleryClick(this)");
  document.getElementById("NewWaterfall").appendChild(createli);
  // img
  createImg = document.createElement("img");
  createImg.setAttribute("style", "width:100%; border-radius:15px; padding:8px;");
  createImg.setAttribute("src", "../gallery_images/"+dataValue);
  document.getElementById(createli.id).appendChild(createImg);
  // span
  createSpan = document.createElement("span");
  createTextNode = document.createTextNode(dataIndex+". "+dataValue.slice(0, dataValue.lastIndexOf(".")));
  createSpan.appendChild(createTextNode);
  createSpan.setAttribute("class", "f-ng");
  createSpan.setAttribute("style", "width:100%; font-size:12px; text-align:right; color:#ccc; padding:0 9px 9px;");
  document.getElementById(createli.id).appendChild(createSpan);
};
