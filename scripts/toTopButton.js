var getGalleryFrame = document.getElementById("galleryFrame");

// 버튼 생성 && 삭제
var createToTopButton = function(){
  var createSpan = document.createElement("span");
  var createTextNode = document.createTextNode("top");
  createSpan.appendChild(createTextNode);
  createSpan.id = "toTopButton";
  createSpan.setAttribute("class", "f-ngb goToTop buttonHover");
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
