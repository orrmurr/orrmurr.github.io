var repeatGalleryByJson = function(){
	// DOM생성뒤에 실행
	setTimeout(function(){
		$.ajax({
			url: "../json/gallery.json",
			dataType: "text",
			success: function (getJsonData){
				getJsonDataToStringify = JSON.stringify(eval('(' + getJsonData + ')'));
				// 최신순으로 정렬 / 오름차순
				$.parseJSON(getJsonDataToStringify).reverse().forEach(function(dataValue, dataIndex, dataArr){
					// li
					var createUl = document.createElement("li");
					createUl.id = "li"+dataIndex;
					createUl.setAttribute("class", "buttonHover");
					createUl.setAttribute("style", "border-radius:6px; cursor:pointer;");
					document.getElementById("NewWaterfall").appendChild(createUl);
					// img
					var createImg = document.createElement("img");
					createImg.setAttribute("style", "width:100%; border-radius:15px; padding:8px;");
					createImg.setAttribute("src", "../images/"+dataValue.img);
					document.getElementById(createUl.id).appendChild(createImg);
					// title
					var createSpan = document.createElement("span");
					var createTextNode = document.createTextNode(dataArr.length-dataIndex+". "+dataValue.title);
					createSpan.appendChild(createTextNode);
					createSpan.setAttribute("class", "f-ng");
					createSpan.setAttribute("style", "width:100%; font-size:12px; text-align:right; color:#ccc; padding:0 9px 9px;");
					document.getElementById(createUl.id).appendChild(createSpan);
				});
			}
		});
	}, setTimeoutDelay);
};
