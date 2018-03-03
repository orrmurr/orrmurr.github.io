var repeatContentByJson = function(repeatContentByJsonId){
	if(repeatContentByJsonId != 'home'){
		setTimeout(function(){
			$.ajax({
				url: "../json/"+repeatContentByJsonId+".json",
				dataType: "text",
				success: function (getJsonData){
					getJsonDataToStringify = JSON.stringify(eval('(' + getJsonData + ')'));
					$.parseJSON(getJsonDataToStringify).reverse().forEach(function(dataValue, dataIndex, dataArr){
						// div
						var createDiv = document.createElement("div");
						createDiv.id = dataIndex;
						createDiv.setAttribute("style", "width:100%; padding-bottom:5%;");
						document.getElementById("repeatContentId").appendChild(createDiv);
						// img
						var createImg = document.createElement("img");
						createImg.setAttribute("style", "width:100%; max-width:1000px; left:50%; transform:translate(-50%, 0%);");
						createImg.setAttribute("src", dataValue.img);
						document.getElementById(createDiv.id).appendChild(createImg);
						// title
						var createSpan = document.createElement("span");
						var createTextNode = document.createTextNode(dataValue.title);
						createSpan.appendChild(createTextNode);
						createSpan.setAttribute("class", "f-ng");
						createSpan.setAttribute("style", "width:100%; max-width:1000px; font-size:12px; text-align:right; color:#ccc; left:50%; transform:translate(-50%, 0%); padding-top:5px;");
						document.getElementById(createDiv.id).appendChild(createSpan);
					});
				}
			});
		}, 10);
	};
};
