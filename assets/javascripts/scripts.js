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
  if ($("body").hasClass("layout--project")) {

    var stickyFence = $("#go");
    var projectThumb = $("#go .project-thumb");
    var projectsMenu = $(".in-page-nav");
    var projectsMenuButton = $("#mobile-project-menu-button");

    projectsMenuButton.click(function () {
      projectsMenu.toggleClass("project-menu-open");
    });


    $(window).scroll(function(){

      if($(window).scrollTop() > stickyFence.offset().top){
        projectThumb.addClass("visible");
      }

      if($(window).scrollTop() < stickyFence.offset().top){
        projectThumb.removeClass("visible");
      }

    });
  }

}

var initLinkAttributes = function() {

  $("a").each(function() {
    var is_relative = new RegExp("//" + window.location.host + "/");
    var is_file = new RegExp(".pdf");
    if (!is_relative.test(this.href)) {
      $(this).attr("target","_blank");
      $(this).addClass("link--external");
    }
    if (is_file.test(this.href)) {
      $(this).attr("target","_blank");
      $(this).addClass("link--file");
    }

  });
}





$(document).ready(function(){
  initMobileMenus();
  initSidebars();
  initProjectMenu();
  initLinkAttributes();

});
