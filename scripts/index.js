// initialize
$(document).ready( function() {
	$("#content").load("templates/render.html");
});

// menu buttons
var menuButtons = [
  {button:'home', hover:false},
  {button:'render', hover:false},
  {button:'illust', hover:false},
  {button:'typography', hover:false}
];

// 해당 div 다른 html 파일로 바꾸기
var changeContentPage = function(changeContentPage) {
  if (changeContentPage == 'home') {
    $("#content").load('templates/home.html');
  }
  else {
    $("#content").load('templates/'+changeContentPage.innerHTML.trim()+'.'+'html');
  }
  buttonHover(changeContentPage);
	changeContentPageEffect();
	repeatContentByJson();
};

// button hover function
var buttonHover = function(changeContentPage){
	var getButtonHoverClass = document.getElementsByClassName("buttonHoverClass");
	for (var i = 0; i < getButtonHoverClass.length; i++) {
		getButtonHoverClass[i].style.color = "rgba(255,255,255,0.6)"
	}
	// 홈은 스타일 바꿀 필요 없음
	if (changeContentPage != 'home') {
		changeContentPage.style.color = "rgba(255,255,255,0.3)";
	}
};

// change content page effect
var changeContentPageEffect = function(){
	var getChangeContentPageEffect = document.getElementById("changeContentPageEffectId");
	getChangeContentPageEffect.classList.remove("changeContentPageEffectClass");
	getChangeContentPageEffect.offsetWidth = getChangeContentPageEffect.offsetWidth;
	getChangeContentPageEffect.classList.add("changeContentPageEffectClass");
};

// repeat content by Json list
var repeatContentByJson = function() {
    var createImg = document.createElement("img");
    createImg.setAttribute("class", "repeatContentByJsonClass");
    createImg.setAttribute("src", "https://source.unsplash.com/random");
    document.getElementById("repeatContentId").appendChild(createImg);
}





var test = function(){
	alert('test');
};
