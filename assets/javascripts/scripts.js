var initGlossaryAsides = function() {
  var asides = $('.glossary-aside');
  asides.each(function() {
    var attachTo = this.previousElementSibling;
    var newHTML = "<span class='breakout'>" + attachTo.innerHTML + "</span>" + this.outerHTML;
    attachTo.className += " insert-glossary-here";
    attachTo.innerHTML = newHTML;
    this.remove();
  });
}
$(document).ready(function(){
  initGlossaryAsides();

});
