var getContentFrame = document.getElementById("contentFrame");

// 버튼 생성 && 삭제
var createToTopButton = function(){
  var createSpan = document.createElement("span");
  var createTextNode = document.createTextNode("top");
  createSpan.appendChild(createTextNode);
  createSpan.id = "toTopButton";
  createSpan.setAttribute("class", "f-ng goToTop");
  createSpan.setAttribute("style", "display:none; position:fixed; right:5%; bottom:5%; width:50px; height:50px; font-size:15px; text-align:center; color:#fff; background:linear-gradient(135deg, #CC172B, #2B1A61, #2B1A61, #2B1A61, #8C21FF); cursor:pointer; border-radius: 50%; padding-top:15px; z-index:1;");
  getContentFrame.appendChild(createSpan);
};
createToTopButton();

// 버튼 보이기 && 숨기기
var getToTopButtonId = document.getElementById("toTopButton");
var headerHeight = document.body.offsetHeight - getContentFrame.clientHeight;
window.onscroll = function(){
  document.body.scrollTop;
  if (document.body.scrollTop > headerHeight){
    getToTopButtonId.style.display = "block";
  } else {
    getToTopButtonId.style.display = "none";
  }
};

// 맨 위로
var toTopButtonFunction = function(){
  var speed = 500; // 스크롤속도
  $(".goToTop").css("cursor", "pointer");
  $('body, html').animate({scrollTop:0}, speed);
};
addEventListnerMouseenterAndClick(getToTopButtonId, toTopButtonFunction);
