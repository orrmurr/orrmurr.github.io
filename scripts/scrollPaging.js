var scrollPaging = function(){
  var windowInnerHeight = window.innerHeight;
  window.onscroll = function(){
    if (window.scrollY >= windowInnerHeight){
      if(!galleryClickToggle){
        windowInnerHeight += window.innerHeight;
        repeatGallery();
      }
    }
    toTopButton(); //top button show&hide
  };
};
scrollPaging();
