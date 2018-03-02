// initialize
$(document).ready( function(){
	// menu buttons
	var menuButtons = [
		"home",
		"render",
		"illust",
		"typography"
	];
	for(var i = 0; i < menuButtons.length; i++){
		if(i>0){
			var createSpan = document.createElement("span");
			createSpan.setAttribute("class", "buttonClass f-ngl");
			createSpan.id = menuButtons[i];
			var buttonName = document.createTextNode(menuButtons[i]);
			createSpan.appendChild(buttonName)
			document.getElementById("buttons").appendChild(createSpan);
		}
		// 해당 div 다른 html 파일로 바꾸기
		var getButtonId = document.getElementById(menuButtons[i]);
		getButtonId.addEventListener("mouseenter", function(){
			$("#content").load('templates/'+this.id+'.'+'html');
			buttonHover(this.id);
			changeContentPageEffect();
			repeatContentByJson(this.id);
		}, false);
	}
	$("#content").load("templates/home.html");

var test = 'render';
// 	$.ajax({
// 		url: "../json/"+test+".json",
// 		dataType: "text",
// 		success: function (dataTest){
// 			co(dataTest);
// 		}
// 	});


$.getJSON('../json/render.json', function(data) {
  alert(data);
});


// "../json/"+test+".json"





});

// button hover function
var buttonHover = function(menuButton){
	var getButtonClass = document.getElementsByClassName("buttonClass");
	var getButtonId = document.getElementById(menuButton);
	for (var i = 0; i < getButtonClass.length; i++) {
		getButtonClass[i].style.color = "rgba(255,255,255,0.6)"
	};
	getButtonId.style.color = "rgba(255,255,255,0.3)";
};

// change content page effect
var changeContentPageEffect = function(){
	var createDiv = document.createElement("div");
	var getContentFrame = document.getElementById("contentFrame");
	createDiv.setAttribute("class", "changeContentPageEffectClass");
	getContentFrame.appendChild(createDiv);
	setTimeout(function(){
		getContentFrame.removeChild(createDiv);
	}, 700);
};

// repeat content by Json list
var repeatContentByJson = function(repeatContentByJsonId){
	if(repeatContentByJsonId != 'home'){
		setTimeout(function(){
			// data.forEach(function(dataValue, dataIndex){
			var createImg = document.createElement("img");
			createImg.setAttribute("class", "repeatContentByJsonClass");
			createImg.setAttribute("src", "../images/test.png");
			document.getElementById("repeatContentId").appendChild(createImg);
			// });
		}, 10);
	};
};

var al = function(ale){
	alert(ale);
};

var co = function(con){
	console.log(con);
};
