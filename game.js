(function(){
	window.requestAnimFrame = (function(){
		return window.requestAnimationFrame ||
		window.webkitRequestAnimationFrame	||
		window.mozRequestAnimationFrame	||
		window.oRequestAnimationFrame	||
		window.msRequestAnimationFrame	||
		function(callback){
			window.setTimeout(callback, 1000 / 60);
		};
	})();
	
	var ctx = null;
	var Game = {
		canvas: document.getElementById('canvas');
	
		animate: function(){
			
		},
		
		setup: function(){
		},
	};
})();