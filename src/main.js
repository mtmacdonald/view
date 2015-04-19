var h = require('virtual-dom/h');
var diff = require('virtual-dom/diff');
var patch = require('virtual-dom/patch');
var createElement = require('virtual-dom/create-element');

/*
  View engine uses virtual-dom to patch the DOM
*/

function Draw () {

  var initialized = false;
  var tree;
  var dom;

  var props = {
        style: {
            textAlign: 'center',
            lineHeight: (100) + 'px',
            border: '1px solid red',
            width: (100) + 'px',
            height: (100) + 'px'
        }
    };

  var selector = 'div';

  this.render = function (selector, properties, children) {
    return h(selector, properties, children);
  }

  this.draw = function (count) {
    if (!initialized) {
      tree = this.render(selector, props, [String(count)]);
      dom = createElement(tree);
      document.getElementById('dynamic-content').appendChild(dom);
      initialized = true;
    } else {
      var newTree = this.render(selector, props, [String(count)]);
      var patches = diff(tree, newTree);
      patch(dom, patches);
      tree = newTree;
    }
  }
}

module.exports = Draw;