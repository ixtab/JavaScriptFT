onload = inicio;
var i = 0;
function inicio(){
	//document.getElementById("boton").addEventListener("click", calcular);
	document.getElementById("boton").onmousedown = calcular;
	document.onmousemove = mover;
}

function tipoTriangulo(lado_1, lado_2, lado_3){
	if (lado_1==lado_2 && lado_2==lado_3) {
		return "Equilatero";
	} else if (lado_1 == lado_2 || lado_1 == lado_3 || lado_2 == lado_3){
		return "Isosceles";
	} else {
		return "Escaleno";
	}
}

function calcular(){

	var lados = document.getElementsByTagName("input");
	var l1, l2, l3;
	var resul = document.getElementById('resultado');

	l1 = lados[0].value;
	l2 = lados[1].value;
	l3 = lados[2].value;

	resul.innerText = "Tipo de Triangulo: " + tipoTriangulo(l1, l2, l3);
	lados[0].focus();
	for (let i = 0; i < 3 ;i++){
		lados[i].placeholder = lados[i].value;
		lados[i].value = "";
	}
}

function mover(){
	i++;
	document.title = "X: " + event.clientX +
	 ". Y:" + event.clientY + ". "+ i;
}