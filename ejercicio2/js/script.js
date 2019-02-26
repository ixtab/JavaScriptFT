onload = inicio;

var x = 0;

function comprueba(){
	var evento = window.event;
		console.log(evento);
	x = x + 10;
	inicio();
	evento.preventDefault();
}
function inicio(){
	if (x>0){
		document.getElementById('contenedor').innerHTML ="";
	}

	for(var i = x; i < (x + 10) ; i++){
			a = document.createElement("H4");
			a.innerText = "charCode " + i + ": " + String.fromCharCode(i)
			document.getElementById('contenedor').appendChild(a);
		
	}
}