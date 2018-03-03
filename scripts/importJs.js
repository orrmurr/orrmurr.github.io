var importJs = function(js){
	var createScript = document.createElement("script");
	createScript.setAttribute("src", "scripts/"+js+".js");
	document.body.appendChild(createScript);
};
