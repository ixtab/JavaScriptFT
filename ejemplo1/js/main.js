onload = inicio;

function police(esto){
	esto.classList.toggle("poli");
}

function inicio() {
	window.addEventListener("click", h_unos);

	var lineas = parseInt(prompt("¿Cuantas lineas quieres?"));
	console.log(lineas);
	cuerpo = document.getElementsByTagName("body")[0];

	for (i =0; i < lineas; i++){
		linea = document.createElement("h1");
		linea.setAttribute("onclick","police(this)")
		linea.innerText = "Holaa";
		linea.id = "cabecera" + i;
		cuerpo.appendChild(linea);
	}
}

function h_unos(){
	var contador = 1;
	var encabezados = document.getElementsByTagName("h1");
	for (i = 0; i < encabezados.length; i++){
		encabezados[i].innerText = encabezados[i].innerText + " nº " + contador;
		encabezados[i].innerHTML = encabezados[i].innerHTML + "<br>";
		contador++;
	}
}