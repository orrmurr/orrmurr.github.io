function scrollPaging(){
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
