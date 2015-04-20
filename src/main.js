var h = require('virtual-dom/h');
var diff = require('virtual-dom/diff');
var patch = require('virtual-dom/patch');
var createElement = require('virtual-dom/create-element');

function View () {

  var initialized = false;
  var tree;
  var dom;

  this.render = function (selector, properties, children) {
    return h(selector, properties, children);
  }

  this.draw = function (latestTree) {
    if (!initialized) {
      tree = latestTree;
      dom = createElement(tree);
      document.getElementById('dynamic-content').appendChild(dom);
      initialized = true;
    } else {
      var newTree = latestTree;
      var patches = diff(tree, newTree);
      patch(dom, patches);
      tree = newTree;
    }
  }
}

module.exports = View;