onload = inicio;

var alumnos = [
	{
		"nombre": "Juan Perez",
		"curso": "1º",
		"calificaciones": [
			{"Metodología": 4},
			{"Bases de Datos": 5},
			{"Javascript": 6},
			{"Visual Basic": 8}
		]
	},
	{
		"nombre": "Maria Garcia",
		"curso": "2º",
		"calificaciones": [
			{"html": 7},
			{"css": 7},
			{"javascript": 9},
			{"java": 6}
		]
	},
	{

		"nombre": "Paula Diaz",
		"curso": "3º",
		"calificaciones": [
			{"Angular": 7},
			{"css": 7},
			{"javascript": 9},
			{"java": 6},
			{"jQuery": 8}
		]
	},
	{
		"nombre": "Javier Lopez",
		"curso": "4º",
		"calificaciones": [
			{"html": 7},
			{"css": 7},
			{"javascript": 9},
			{"java": 6}
		]
	}
];

function inicio(){
	for (let i = 0; i  < alumnos.length; i++){
		opcion = document.createElement("option");
		opcion.innerText = alumnos[i].nombre ;
		opcion.value = i;
		document.getElementById("alumno").appendChild(opcion);
	}
	document.querySelector("#alumno").addEventListener("change",escribeDatos);
	escribeDatos();
}

function escribeDatos(){
	var al = document.getElementById('resultadoAlumno');
	var indice = 0;
	al.innerHTML="";


	var opciones = document.getElementsByTagName("option");

	for (let i = 0; i < opciones.length; i++){
		if (opciones[i].selected) indice = i;
	}
	var p = alumnos[indice];

	var titulo = document.createElement("h2");
	titulo.innerText = p.nombre;
	al.appendChild(titulo);

	var curso = document.createElement("h4");
	curso.innerText = "Curso: " + p.curso;
	al.appendChild(curso);

	var nota = document.createElement("p");
	nota.innerText = "- Calificaciones: " ;
	nota.id = "nota";
	al.appendChild(nota);

	var notas = document.createElement("ul")
	notas.id = "lista";
	nota.appendChild(notas);
	
	for (i in p.calificaciones){
		asignatura = document.createElement("li");
		asignatura.innerText = Object.keys(p.calificaciones[i]) +
	 	": " +Object.values(p.calificaciones[i]);
	 	notas.appendChild(asignatura);
	}

	var notaMedia = 0;
	for (i in p.calificaciones){
		notaMedia = notaMedia + parseInt(Object.values(p.calificaciones[i]));
	}
	notaMedia = notaMedia / p.calificaciones.length;
	mediaP = document.createElement("p");
	mediaP.innerText = "- Media: " + notaMedia
	document.getElementById('resultadoAlumno').appendChild(mediaP);
}
