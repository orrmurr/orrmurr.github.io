// initialize
$(document).ready( function(){
	$("#content").load("templates/render.html");
});

// menu buttons
// var menuButtons = [
//   {button:'home', hover:false},
//   {button:'render', hover:false},
//   {button:'illust', hover:false},
//   {button:'typography', hover:false}
// ];

// 해당 div 다른 html 파일로 바꾸기
var changeContentPage = function(changeContentPage){
  if (changeContentPage == 'home'){
    $("#content").load('templates/home.html');
  }
  else{
    $("#content").load('templates/'+changeContentPage.innerHTML.trim()+'.'+'html');
  }
  buttonHover(changeContentPage);
	changeContentPageEffect();
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
	var createDiv = document.createElement("div");
	createDiv.setAttribute("class", "changeContentPageEffectClass");
	document.getElementById("contentFrame").appendChild(createDiv);
	setTimeout(function(){
		document.getElementById("contentFrame").removeChild(createDiv);
	}, 700);
};

// repeat content by Json list
var repeatContentByJson = function(changeContentPage){
};
if(changeContentPage){
};
$(document).on("mouseenter", "#test", function(){
	var createImg = document.createElement("div");
	createImg.setAttribute("class", "repeatContentByJsonClass");
	createImg.innerHTML = 'test <br>';
	document.getElementById("repeatContentId").appendChild(createImg);

	// var createImg = document.createElement("img");
	// createImg.setAttribute("class", "repeatContentByJsonClass");
	// createImg.setAttribute("src", "//source.unsplash.com/random");
	// document.getElementById("repeatContentId").appendChild(createImg);
	co('test');
});




var al = function(ale){
	alert(ale);
};

var co = function(con){
	console.log(con);
};
