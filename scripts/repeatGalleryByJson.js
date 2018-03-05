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
					// // div
					var createDiv = document.createElement("div");
					createDiv.id = dataIndex;
					createDiv.setAttribute("class", "buttonHover");
					createDiv.setAttribute("style", "display: inline-block; width:100%; border-radius:6px; padding:8px; cursor:pointer;");
					document.getElementById("repeatGalleryId").appendChild(createDiv);
					// // img
					var createImg = document.createElement("img");
					createImg.setAttribute("style", "width:100%; border-radius:8px;");
					createImg.setAttribute("src", "../images/"+dataValue.img);
					document.getElementById(createDiv.id).appendChild(createImg);
					// // title
					var createSpan = document.createElement("span");
					var createTextNode = document.createTextNode(dataArr.length-dataIndex+". "+dataValue.title);
					createSpan.appendChild(createTextNode);
					createSpan.setAttribute("class", "f-ng");
					createSpan.setAttribute("style", "width:100%; max-width:1000px; font-size:12px; text-align:right; color:#ccc; padding:4px;");
					document.getElementById(createDiv.id).appendChild(createSpan);
				});
			}
		});
	}, 30);
};
