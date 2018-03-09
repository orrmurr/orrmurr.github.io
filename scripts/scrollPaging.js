var scrollPaging = function(){
  var windowInnerHeight = window.innerHeight;
  window.onscroll = function(){
    if (window.scrollY >= windowInnerHeight){
      windowInnerHeight += window.innerHeight;
      repeatGalleryByJson();
    }
    toTopButton(); //top button show&hide
  };
};
scrollPaging();
