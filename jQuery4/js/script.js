jQuery(document).ready(function() {

	var x = $( window ).width();
	var y = $( window ).height();
	console.log(x, y);
	$("#todo").height(y);

	$(window).on('resize', function(){ //para cuando se cambia el tamaño de la ventana
     	var x = $( window ).width();
		var y = $( window ).height();
		console.log(x, y);
		$("#todo").height(y);
      
});
	
});