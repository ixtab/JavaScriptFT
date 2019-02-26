onload = inicio;

function inicio(){
	ejemplo1();
	ejemplo2();
//	ejemplo3();
	ejemplo4();
}


function ejemplo1() {
	document.innerHTML = "<h1>Hola Universo desde JavaScript</h1>";
/*
	var edad = parseInt(prompt("Pon la edad: "));

	if(edad<18){
		document.writeln("<h3>Eres menor de Edad</h3>");
	} 
	else if (edad < 25){
		document.writeln("<h3>Eres joven mayor de Edad</h3>");
	}
	else if (edad < 65){
		document.write("<h3>Eres mayor de Edad</h3>");
	}
	else {
		document.writeln("<h3>Estás jubilado</h3>");
	}*/
}

function ejemplo2(){
	var dia = parseInt(document.getElementById('rango').value);
	var contenedor = document.getElementById('contenedor');

		switch (dia) {
		case 1:
			contenedor.innerHTML = "<h4>Es lunes</h4>";
			break;
		case 2:
			contenedor.innerHTML = "<h4>Es martes</h4>";
			break;
		case 3:
			contenedor.innerHTML = "<h4>Es miércoles</h4>";
			break;
		case 4:
			contenedor.innerHTML = "<h4>Es jueves</h4>";
			break;
		case 5:
			contenedor.innerHTML = "<h4>Es viernes</h4>";
			break;			
		case 6:
			contenedor.innerHTML = "<h4>Es sábado</h4>";
			break;
		case 7:
			contenedor.innerHTML = "<h4>Es domingo</h4>";
			break;		
		default:
			contenedor.innerHTML = "<h4>Error</h4>";
			break;
	}
}

function ejemplo3(){
	var mensaje="";
	var contenedor2 = document.getElementById('contenedor2');
	for(var i = 1; mensaje!="fin"; i++){
		mensaje = prompt("Escribe algo o fin para terminar");
		if (mensaje.toUpperCase() != "FIN"){
			contenedor2.innerHTML = contenedor2.innerHTML + "<br>" + mensaje;
		} else {
			mensaje = mensaje.toLowerCase();
		}
	}
}

function ejemplo4(){
	var contenedor2 = document.getElementById('contenedor3');
	var arrayNombres = ["Ana", "Juan", "Maria", "Pedro"];
	arrayNombres[8] = "Jose";

	for(let i = 0; i < arrayNombres.length; i++){
		contenedor3.innerHTML= contenedor3.innerHTML + i + ".-" + arrayNombres[i]+"<br>";
	}
	for (var n in arrayNombres) { // no recorre los elementos vacios.
		contenedor3.innerHTML= contenedor3.innerHTML + n + ".-" + arrayNombres[n]+"<br>";
	}
}
