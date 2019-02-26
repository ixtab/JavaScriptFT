$(document).ready(function() {
	$("h1").text("Hola Universo");
	$("h1").html("<spam style='color: red'>¿Hola?</spam>");
	$("h1").prepend("Hola Universo, ");
	$("#boton1").click(botonPulsado);
	var ancho = 100;
	var fontTam = 20;
	$('h1').css("font-size", "20px")
	$("h1").on("mouseenter", function(){
		$(this).addClass = "1";
		
		if (!$(this).attr('class') == "1"){
		
			$(this).animate({
				opacity: '0.1',
				fontSize: fontTam
				},
				500, function()
				{
	  				$("h1").animate({
	  					fontSize: 20,
	  					},200);;
				});
		}
	ancho = ancho + 100;
	fontTam = fontTam + 20;
	});
});

function botonPulsado(){
	$("h1").animate({
    opacity: '1',
    fontSize: 20
  }, 500);

}

var a = 5;

var b = a > 5 ? "mayor 5" : "menor  o igual a 5";

