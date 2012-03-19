Slidespeed allows you to control elements sliding up or down with a set speed rather than a timing.

the variable 'speed' within this plugin is quite ambiguous and although it probably does have a measurement (think its pixels per second 1/100th of a second or something, i can't be bothered to work it out. So just think of it as a number that if you want the elements to go faster, you make bigger.

The plugin is used instead of .slideDown(), .slideUp() or .slideToggle()

e.g. $('div').slideSpeed();

the plugin can take 3 parameters:

$('div').slideSpeed({
	speed: 50, //the speed
	slide: 'down', //whether it is up, down or toggle
	callback: function(){} // gets fired once the element has done its thing
});

The above vairables are the defaults.

In terms of 'speed' i did some tests with the time it takes for it to animate:

[Time examples are with a div which is 600px high (follows the format speed: xx / time: xx)]
	
Speed: 20 / Time: 3000ms
Speed: 50 / Time: 1200ms
Speed: 80 / Time: 800ms

Enjoy!

