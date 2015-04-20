/*
  application logic
*/

var count = 0;

var view = new View();

function render (count) {
	return view.h('div', { 
		style: {
        	textAlign: 'center',
        	lineHeight: (100) + 'px',
        	border: '1px solid red',
        	width: (100) + 'px',
        	height: (100) + 'px'
        }
    }, [String(count)]);
}

$( document ).ready(function() {

	var vdom = render(count);
	view.render(vdom);

	setInterval(function () {
	    count++;
	    var vdom = render(count);
	    view.render(vdom);
	}, 1000);

});
