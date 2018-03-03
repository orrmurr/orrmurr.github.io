var changeContentPageEffect = function(){
	var createDiv = document.createElement("div");
	var getContentFrame = document.getElementById("contentFrame");
	createDiv.setAttribute("class", "changeContentPageEffectClass");
	getContentFrame.appendChild(createDiv);
	// styel.css .changeContentPageEffectClass animation-duration: 700ms;
	setTimeout(function(){
		getContentFrame.removeChild(createDiv);
	}, 700);
};
