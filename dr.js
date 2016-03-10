(function($) 
{ 
	$.fn.dragablle = function() 
	{ 
		this.each(function(index, ele) 
		{
			var mouse_down = false;

			function mouse_down_deposer(event) 
			{
			  mouse_down = true;
			}

			function on_mouse_up(event)
			{
			 mouse_down = false;
			}

			document.onmousemove = on_mouse_move;
			document.onmouseup = on_mouse_up;
			document.onmousedown = mouse_down_deposer;

			function on_mouse_move(event) 
			{
			  if (mouse_down === true) 
			    {
			    	$(ele).offset( { top: event.clientY - $(ele).innerHeight() / 2, left: event.clientX - $(ele).innerWidth() / 2 } )
			    }
			} 
		}); 

		return this; 
	}; 
})(jQuery);