function setEqualHeight(columns)  { 

	var tallestcolumn = 0;  
	columns.each(  
		function() {  
			var currentHeight = $(this).height();  
				if(currentHeight > tallestcolumn) {  
					tallestcolumn  = currentHeight;  
				}  
		}	  
	);  
	
	columns.css("min-height", tallestcolumn)
	//columns.height(tallestcolumn);  
}//end of setEqualHeight function 

$(document).ready(function() {  
	setEqualHeight($("#wrapper > article, nav, aside"));  
//sets the initial height of article, nav, and aside when the page loads
	});  
	
	
	$(window).bind('resize', function(){
    window.resizeEvt;
    $(window).resize(function(){
        clearTimeout(window.resizeEvt);
        window.resizeEvt = setTimeout(function(){
		$("article, nav, aside").css("min-height", 0)
       setEqualHeight($("#wrapper > article, nav, aside")); 
	   //sets the height of article, nav, and aside when the browser is sized down or up
	   //the reason for the 200 millisecond delay in calling the setEqualHeight function is so that the function doesn't get called multiple times since the trigger will happen continuously as the user resizes the browser.
        }, 200);
    });
});
	
	

	
	/* 	<script src="	http://code.jquery.com/jquery-latest.js"></script>
	
	<script type="text/javascript" src="equalCols.js"></script>*/