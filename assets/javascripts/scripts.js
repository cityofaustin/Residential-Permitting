var initSidebars = function() {
  var asides = $('blockquote');
  asides.each(function() {
    var attachTo = this.previousElementSibling;
    var newHTML = "<span class='original-paragraph'>" + attachTo.innerHTML + "</span>" + this.outerHTML;
    attachTo.className += " breakout-sidebar";
    attachTo.innerHTML = newHTML;
    $(this).remove();
  });
}




var initMobileMenu = function() {
  var drawerButton = $('#drawer-button');
  drawerButton.click(function () {
    $("html").toggleClass("drawer-open");
  });
}


var initProjectMenu = function() {


}






$(document).ready(function(){
  initMobileMenu();
  initSidebars();
  initProjectMenu();

});
