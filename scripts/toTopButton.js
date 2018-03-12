var getGalleryFrame = document.getElementById("galleryFrame");

// 버튼 생성 && 삭제
var createToTopButton = function(){
  var createSpan = document.createElement("span");
  var createTextNode = document.createTextNode("top");
  createSpan.appendChild(createTextNode);
  createSpan.id = "toTopButton";
  createSpan.setAttribute("class", "f-ngb goToTop buttonHover");
  createSpan.setAttribute("style", "display:none; position:fixed; right:5%; bottom:5%; width:50px; height:50px; font-size:15px; text-align:center; color:#999; background:#ffffff; box-shadow:0px 1px 3px #ccc; cursor:pointer; border-radius: 50%; padding:15px 0 0 0; z-index:1;");
  getGalleryFrame.appendChild(createSpan);
};
createToTopButton();

// 버튼 보이기 && 숨기기
var getToTopButtonId = document.getElementById("toTopButton");
var headerHeight = document.body.offsetHeight - getGalleryFrame.clientHeight;
var toTopButton = function(){
  if (document.body.scrollTop > headerHeight){
    getToTopButtonId.style.display = "block";
  } else {
    getToTopButtonId.style.display = "none";
  }
};
toTopButton();

// 맨 위로
var toTopButtonFunction = function(){
  var speed = 500; // 스크롤속도
  $(".goToTop").css("cursor", "pointer");
  $('body, html').animate({scrollTop:0}, speed);
};
addEventListnerMouseenterAndClick("toTopButton", toTopButtonFunction);
