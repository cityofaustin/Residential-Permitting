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




var initMobileMenus = function() {

  var html = $("html");

  var menuButton = $("#drawer-button--menu");
  menuButton.click(function () {
    html.toggleClass("drawer-open--menu");
  });

  var translateButton = $("#drawer-button--translate");
  translateButton.click(function () {
    html.toggleClass("drawer-open--translate");
    if (html.hasClass("drawer-open--translate")) {
      $(window).scrollTop(0);
    }
  });

  var searchButton = $("#drawer-button--search");
  searchButton.click(function () {
    html.toggleClass("drawer-open--search");
  });
  var cancelSearchButton = $("#cancel-button--search");
  cancelSearchButton.click(function () {
    html.toggleClass("drawer-open--search");
  });

}


var initProjectMenu = function() {


}






$(document).ready(function(){
  initMobileMenus();
  initSidebars();
  initProjectMenu();

});
