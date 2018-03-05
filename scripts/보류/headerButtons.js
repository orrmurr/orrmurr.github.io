// 헤더 메뉴 버튼생성
var headerButtons = [
	"home",
	"render",
	"illust",
	"typography"
];
for(var i = 0; i < headerButtons.length; i++){
	if(i>0){
		var createSpan = document.createElement("span");
		createSpan.setAttribute("class", "buttonClass f-ngl");
		createSpan.id = headerButtons[i];
		var buttonName = document.createTextNode(headerButtons[i]);
		createSpan.appendChild(buttonName)
		document.getElementById("buttons").appendChild(createSpan);
	}
	// 해당 div 다른 html 파일로 바꾸기
	var getHeaderButtonsId = document.getElementById(headerButtons[i]);
	getHeaderButtonsId.addEventListener("mouseenter", function(){
		$("#gallery").load('templates/'+this.id+'.'+'html');
		buttonHover(this.id);
		changegalleryPageEffect();
		repeatgalleryByJson(this.id);
  }, false);
  getHeaderButtonsId.addEventListener("click", function(){
		$("#gallery").load('templates/'+this.id+'.'+'html');
		buttonHover(this.id);
		changegalleryPageEffect();
		repeatgalleryByJson(this.id);
  }, false);
}
