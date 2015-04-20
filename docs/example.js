
var view = new View();

var elements = ['Fish', 'Mangoes', 'Nougat'];

function renderList () {
	var items = [];
	elements.forEach( function (element) {
    	items.push(view.h('p', element));
	});
	return view.h('div', items);
}

function render () {
	var vdom= view.h('div', [
		renderList(),
    	view.h('input#value', { type: 'text' }),
		view.h('button#add', 'Add'),
	]);
	view.render(vdom);
}

function clickHandler () {
	elements.push($('#value').val());
	render();
}

$( document ).ready(function() {
	render();
	$('#add').on('click', clickHandler);
});
