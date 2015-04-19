var h = require('virtual-dom/h');
var diff = require('virtual-dom/diff');
var patch = require('virtual-dom/patch');
var createElement = require('virtual-dom/create-element');

/*
  View uses virtual-hypertext format
*/

function render(count)  {
    return h('div', {
        style: {
            textAlign: 'center',
            lineHeight: (100 + count) + 'px',
            border: '1px solid red',
            width: (100 + count) + 'px',
            height: (100 + count) + 'px'
        }
    }, [String(count)]);
}

/*
  View engine uses virtual-dom to patch the DOM
*/

function Draw () {

  var initialized = false;
  var tree;
  var dom;

  this.h = function () {
    return h();
  }

  this.draw = function (count) {
    if (!initialized) {
      tree = render(count);
      console.log(tree);
      dom = createElement(tree);
      document.getElementById('dynamic-content').appendChild(dom);
      initialized = true;
    } else {
      var newTree = render(count);
      var patches = diff(tree, newTree);
      patch(dom, patches);
      tree = newTree;
    }
  }
}

module.exports = Draw;