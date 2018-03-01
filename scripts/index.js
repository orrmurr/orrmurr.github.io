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
		}, false);
	}
	$("#content").load("templates/home.html");
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
	createDiv.setAttribute("class", "changeContentPageEffectClass");
	document.getElementById("contentFrame").appendChild(createDiv);
	setTimeout(function(){
		document.getElementById("contentFrame").removeChild(createDiv);
	}, 700);
};


// repeat content by Json list






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
