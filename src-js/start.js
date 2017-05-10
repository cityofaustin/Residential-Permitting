'use strict';

var select = require('../node_modules/uswds/src/js/utils/select');

function initGlossaryAsides() {
  var asides = select('.glossary-aside');
  asides.forEach(function (el) {
    var attachTo = el.previousElementSibling;
    var newHTML = "<span class='breakout'>" + attachTo.innerHTML + "</span>" + el.outerHTML;
    attachTo.className += " insert-glossary-here";
    attachTo.innerHTML = newHTML;
    el.remove();
  });
}
initGlossaryAsides();
