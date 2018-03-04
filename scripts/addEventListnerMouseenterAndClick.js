var addEventListnerMouseenterAndClick = function(getElement, getFunction){
  getElement.addEventListener("mouseenter", function(){
    getFunction(this);
  }, false);
  getElement.addEventListener("click", function(){
    getFunction(this);
  }, false);
};
