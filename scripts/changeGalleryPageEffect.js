function changeGalleryPageEffect(){
	var createDiv = document.createElement("div");
	var getGalleryFrame = document.getElementById("galleryFrame");
	createDiv.setAttribute("class", "changeGalleryPageEffectClass");
	getGalleryFrame.appendChild(createDiv);
	setTimeout(function(){
		getGalleryFrame.removeChild(createDiv);
	}, 200); // style.css > animationDurationSetting 세팅 똑같이 바꿔줘야 됨
};
