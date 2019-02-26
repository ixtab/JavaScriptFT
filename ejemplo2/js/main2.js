
$(function(){
	$('#boton').click(()=>{
		$("p").hide();
		$("#boton").hide();
	})
	$(".jq").html("JQuery Funcionando");


});

var pulsado = false;
function ejemplo1(){

	var a = 3;
	var b = 5;
	var c;

	b = a++; //Incremento después de uso (asigna a a b y luego suma 1)
	c = ++a; //Incremento antes de uso (suma 1 a a y luego asigna)

	if (!pulsado){

		$("#resultado").html("a = 3;<br>b = 0;<br>b = a++;<br>b = " + b +
	 	"<br>" + "b = ++a;<br>b = " + c );
	 	pulsado =  true;
	} else {
		$("#resultado").html("");
		pulsado = false;
	}

}
