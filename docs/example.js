/*
  application logic
*/

var count = 0;

$( document ).ready(function() {

	draw(count);

	setInterval(function () {
	      count++;
	      draw(count);
	}, 1000);

});
