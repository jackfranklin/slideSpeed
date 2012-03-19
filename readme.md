# slideSpeed() #


slideSpeed() allows you to control elements sliding up or down with a set speed rather than a timing.

The value of 'speed' within this plugin is quite ambiguous and although it probably does have a measurement (think its pixels per 1/100th of a second or something similar, I can't be bothered to work it out. So just think of it as a number that if you want the elements to go faster, you make bigger.

If you do have the brains to work out what element it is - let me know!

This plugin is used instead of jQuery's .slideDown(), .slideUp() or .slideToggle()

for example:

<pre><code>$('div').slideSpeed();</code></pre>

The slideSpeed() plugin can take 3 parameters:

<pre><code>
$('div').slideSpeed({
	speed: 50, //the speed
	slide: 'down', //can be up, down or toggle.
	callback: function(){} // gets fired once the element has done its thing
});
</code></pre>

The values listed in the example above are the defaults for the plugin.

In terms of 'speed' values,  I conducted some tests and noted what the times produced were.

For a div with a height of 600px - I achived the following results:

With a speed value of **20** the div took **3000ms** to animate.
With a speed value of **50** the div took **1200ms** to animate.
With a speed value of **80** the div took **800ms** to animate

I don't currently have any live examples but it doesn't take long to implement!

I would suggest copying the code and placing it in your own js file.

Enjoy!

