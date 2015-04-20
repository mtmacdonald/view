var view = new View();

function Todo ()
{
	var self = this;
	var widget = new Widget();

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
			view.h('p#plugin'),
			widget.draw('Example app'), //external component
			list(), //internal component
	    	view.h('input#value', { type: 'text' } ),
			view.h('button#add', { onclick: clickHandler }, 'Add')
		]);
		view.render(vdom);
		$('#plugin').foo(); //call jQuery plugin
	}

	function clickHandler () {
		elements.push($('#value').val());
		self.redraw();
	}
}

/*
	A reusable component
*/

function Widget ()
{
	this.draw = function (message) {
		return view.h('p.w-message.w-information', message);
	}
}

/*
	A jQuery plugin
*/

(function($) {
    $.fn.foo = function() {
        this.each( function() {
            $(this).text('Example integrated jQuery plugin');
        });
    }
}(jQuery));

$(document).ready( function() {
	var todo = new Todo();
	todo.redraw();
});
