function addEventListnerMouseenterAndClick(getId, getFunction){
  var varGetId = document.getElementById(getId);
  varGetId.addEventListener("mouseenter", function(){
    getFunction(this);
  }, false);
  varGetId.addEventListener("click", function(){
    getFunction(this);
  }, false);
};
