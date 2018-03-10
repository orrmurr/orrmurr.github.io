var changeGalleryPageEffect = function(){
	var createDiv = document.createElement("div");
	var getGalleryFrame = document.getElementById("galleryFrame");
	createDiv.setAttribute("class", "changeGalleryPageEffectClass");
	getGalleryFrame.appendChild(createDiv);
	setTimeout(function(){
		getGalleryFrame.removeChild(createDiv);
	}, 400); // 사라지는 속도 - style.css .changeGalleryPageEffectClass animation-duration: 700ms;
};
