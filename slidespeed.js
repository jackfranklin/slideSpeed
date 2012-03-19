/*
	slideSpeed plugin by @mikestreety
*/

$.fn.slideSpeed = function(options) { 
	// To give some examples of 'speed'
	// Time examples are with a div which is 600px high (follows the format speed: xx / time: xx)
	
	// Speed: 20 / Time: 3000ms
	// Speed: 50 / Time: 1200ms
	// Speed: 80 / Time: 800ms
	
	var defaults = {  
		speed: 50, //pixels per millisecond
		slide: 'down'.toLowerCase(), //can be up, down or toggle - made lowercase to matchif statment below
		callback: function() {} // allows dev to get a callback 
	};  
	var options = $.extend(defaults, options);  
	
	return this.each(function() {
		obj = $(this);
		var distance = obj.height();
		var speed = options.speed;
		var time = (Math.round(distance/speed)) * 100; //make sure the time is an integer to avoid complications
		
		if(options.slide == 'up') { $(this).slideUp(time, options.callback);} // slide Up
		else if(options.slide == 'down') { $(this).slideDown(time, options.callback);} // slide down
		else if(options.slide == 'toggle') {$(this).slideToggle(time, options.callback);}  // slide toggle
		else {$('body').prepend('<div style="background: rgba(0,0,0,0.6); padding: 30px; text-align: center; font-size: 14px; color: #fff; line-height: 1.4; position: absolute; top: 0; left: 0; right: 0; z-index: 50000">It appears you have passed an incorrect <strong>slide</strong> vairable.<br /><br/>The variable you used was <strong>' + options.slide + '</strong>. Please only use <strong>up</strong>, <strong>down</strong> or <strong>toggle</strong></div>');} //incorrect slideage
	}); 
}; 