var initSidebars = function() {
  var asides = $('blockquote');
  asides.each(function() {
    var attachTo = this.previousElementSibling;
    var newHTML = "<span class='original-paragraph'>" + attachTo.innerHTML + "</span>" + this.outerHTML;
    attachTo.className += " breakout-sidebar";
    attachTo.innerHTML = newHTML;
    this.remove();
  });
}
$(document).ready(function(){
  initSidebars();

});
