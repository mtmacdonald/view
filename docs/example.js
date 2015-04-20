/*
  application logic
*/

var count = 0;

var view = new View();

var selector = 'div';

var props = {
    style: {
        textAlign: 'center',
        lineHeight: (100) + 'px',
        border: '1px solid red',
        width: (100) + 'px',
        height: (100) + 'px'
    }
};

$( document ).ready(function() {

	var tree = view.h(selector, props, [String(count)]);
	view.render(tree);

	setInterval(function () {
	      count++;
	      var tree = view.h(selector, props, [String(count)]);
	      view.render(tree);
	}, 1000);

});
