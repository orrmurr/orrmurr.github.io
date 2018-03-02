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
			$.ajax({
				url: "../json/"+repeatContentByJsonId+".json",
				dataType: "text",
				success: function (getJsonData){
					getJsonDataToStringify = JSON.stringify(eval('(' + getJsonData + ')'));
					$.parseJSON(getJsonDataToStringify).forEach(function(dataValue, dataIndex, dataArr){
						// div
						var createDiv = document.createElement("div");
						createDiv.id = dataIndex;
						createDiv.setAttribute("style", "width:100%; padding-bottom:5%;");
						document.getElementById("repeatContentId").appendChild(createDiv);
						// title
						var createSpan = document.createElement("span");
						var createTextNode = document.createTextNode(dataValue.title);
						createSpan.appendChild(createTextNode);
						createSpan.setAttribute("class", "f-ngl");
						createSpan.setAttribute("style", "width:100%; max-width:1000px; font-size:20px; color:#aaa; left:50%; transform:translate(-50%, 0%); padding-top:5px; padding-bottom:5px;");
						document.getElementById(createDiv.id).appendChild(createSpan);
						// img
						var createImg = document.createElement("img");
						createImg.setAttribute("style", "width:100%; max-width:1000px; left:50%; transform:translate(-50%, 0%);");
						createImg.setAttribute("src", dataValue.img);
						document.getElementById(createDiv.id).appendChild(createImg);
					});
				}
			});
		}, 10);
	};
};

var al = function(ale){
	alert(ale);
};

var co = function(con){
	console.log(con);
};
