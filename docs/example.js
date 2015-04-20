function Todo ()
{
	var self = this;
	var view = new View();

	var elements = ['Fish', 'Mangoes', 'Nougat'];

	function list () {
		var items = [];
		elements.forEach( function (element) {
	    	items.push(view.h('p', element));
		});
		return view.h('div', items);
	}

	this.redraw = function () {
		var vdom= view.h('div', [
			list(),
	    	view.h('input#value', { type: 'text' } ),
			view.h('button#add', { onclick: clickHandler }, 'Add'),
		]);
		view.render(vdom);
	}

	function clickHandler () {
		elements.push($('#value').val());
		self.redraw();
	}
}

$(document).ready( function() {
	var todo = new Todo();
	todo.redraw();
});
