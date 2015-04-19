/*
  application logic
*/

var count = 0;

var vdom = new draw();

$( document ).ready(function() {

	vdom.draw(count);

	setInterval(function () {
	      count++;
	      vdom.draw(count);
	}, 1000);

});
