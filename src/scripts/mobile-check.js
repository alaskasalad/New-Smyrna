// checks if browser is capable of hovering over items without clicking

window.isMobile = function(){
  if(window.matchMedia("(any-hover:none)").matches) {
    return true;
  } else {
    return false;
  }
};