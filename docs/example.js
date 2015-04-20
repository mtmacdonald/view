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

	var tree = view.render(selector, props, [String(count)]);
	view.draw(tree);

	setInterval(function () {
	      count++;
	      var tree = view.render(selector, props, [String(count)]);
	      view.draw(tree);
	}, 1000);

});
