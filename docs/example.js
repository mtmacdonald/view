/*
  application logic
*/

var count = 0;

var vdom = new draw();

/*
  View uses virtual-hypertext format
*/

function render(count)  {
    return vdom.h('div', {
        style: {
            textAlign: 'center',
            lineHeight: (100 + count) + 'px',
            border: '1px solid red',
            width: (100 + count) + 'px',
            height: (100 + count) + 'px'
        }
    }, [String(count)]);
}

$( document ).ready(function() {

	var fizz = render(count);
	console.log(fizz);
	vdom.draw(count);

	setInterval(function () {
	      count++;
	      vdom.draw(count);
	}, 1000);

});
