var buttonHover = function(headerButton){
	var getButtonClass = document.getElementsByClassName("buttonClass");
	var getButtonId = document.getElementById(headerButton);
	for (var i = 0; i < getButtonClass.length; i++) {
		getButtonClass[i].style.color = "rgba(255,255,255,0.6)"
	};
	getButtonId.style.color = "rgba(255,255,255,0.3)";
};


// <!-- background:linear-gradient(135deg, #301432, #333333, #10043d); -->
