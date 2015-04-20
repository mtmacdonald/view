var view = new View();

/*
	The Todo component
*/

function Todo (parent)
{
	var parent = parent;
	var self = this;

	var widget = new Widget(this);

	var elements = ['Fish', 'Mangoes', 'Nougat'];

	function list () {
		var items = [];
		elements.forEach( function (element) {
	    	items.push(view.h('p', element));
		});
		return view.h('div', items);
	}

	this.draw = function () {
		var vdom= view.h('div', [
			view.h('p#plugin'),
			widget.draw('Example app'), //external component
			list(), //internal component
	    	view.h('input#value', { type: 'text' } ),
			view.h('button#add', { onclick: clickHandler }, 'Add')
		]);
		return vdom;
	}

	function clickHandler () {
		elements.push($('#value').val());
		parent.draw();
	}
}

/*
	A reusable Widget component
*/

function Widget (parent)
{
	var parent = parent;

	this.draw = function (message) {
		return view.h('p.w-message.w-information', message);
	}
}

/*
	A jQuery plugin (e.g. to show integration with lagacy code)
*/

(function($) {
    $.fn.foo = function() {
        this.each( function() {
            $(this).text('Example integrated jQuery plugin');
        });
    }
}(jQuery));

/*
	The page controller
*/

function Page ()
{
	
	var todo = new Todo(this);

	this.draw = function () {
		var vdom = todo.draw();
		view.render(vdom);
		$('#plugin').foo(); //call jQuery plugin
	}
}

$(document).ready( function() {
	var page = new Page();
	page.draw();
});
