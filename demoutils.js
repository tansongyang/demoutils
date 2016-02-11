var demoutils = (function () {
  'use strict';

  var exports = {};

  // Inspired by John Resig's JS Ninja slides: http://ejohn.org/apps/learn/
  /**
   * Asserts an expression and shows the result.
   * expression may evaluate to a truthy or falsy value.
   * If element is not provided, the result is alerted.
   * @param  {boolean} expression The expression to be evaluated.
   * @param  {string} [description] An optional description of the expression.
   * @param  {HTMLElement|string} [element] An optional element to show results
   * in, or the id of the element to show results in.
   * @return {boolean} The original expression result.
   */
  exports.assert = function assert(expression, description, element) {
    var result = expression ? 'pass' : 'fail';
    description = description || '';

    if (element) {
      if (typeof element === 'string') {
        element = document.getElementById(element);
      }

      element.innerHTML =
        '<span class="demoutils-assert">' +
        '<span class="demoutils-assert-result demoutils-assert-result-' + result +'">' +
        result.toUpperCase() +
        '</span>' +
        (description ? '<span class="demoutils-assert-description">' + ' ' + description + '</span>' : '') +
        '</span>'
    } else {
      alert(result.toUpperCase() + (description ? ' ' + description : ''));
    }
    return expression;
  }

  return exports;
})();