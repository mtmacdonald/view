
var view = new View();

var elements = ['Fish', 'Mangoes', 'Nougat'];

function list () {
	var items = [];
	elements.forEach( function (element) {
    	items.push(view.h('p', element));
	});
	return view.h('div', items);
}

function redraw () {
	var vdom= view.h('div', [
		list(),
    	view.h('input#value', { type: 'text' }),
		view.h('button#add', 'Add'),
	]);
	view.render(vdom);
}

function clickHandler () {
	elements.push($('#value').val());
	redraw();
}

$( document ).ready(function() {
	redraw();
	$('#add').on('click', clickHandler);
});
