var changeContentPageEffect = function(){
	var createDiv = document.createElement("div");
	var getContentFrame = document.getElementById("contentFrame");
	createDiv.setAttribute("class", "changeContentPageEffectClass");
	getContentFrame.appendChild(createDiv);
	setTimeout(function(){
		getContentFrame.removeChild(createDiv);
	}, 700); // 사라지는 속도 - styel.css .changeContentPageEffectClass animation-duration: 700ms;
};
