onload = inicio;

personas = {
	"descripcion": "Listado de Personas",
	"numero": 4,
	"datos": [
		{
			"nombre": "Oscar",
			"apellidos": "Garcia Perez",
			"direccion":{
				"calle": "Perro",
				"numero": "5",
				"piso": "3",
				"puerta": "C"
			}
		},
		{
			"nombre": "Juan",
			"apellidos": "Sanchez Martín",
			"direccion":{
				"calle": "Gato",
				"numero": "2",
				"piso": "bajo",
				"puerta": "H"
			}
		},
		{
			"nombre": "María",
			"apellidos": "Gea Rodriguez",
			"direccion":{
				"calle": "Caballo",
				"numero": "27",
				"piso": "4",
				"puerta": "A"
			}
		},
		{
			"nombre": "Laura",
			"apellidos": "Murillo Diaz",
			"direccion":{
				"calle": "Pez",
				"numero": "2",
				"piso": "6",
				"puerta": "A"
			}
		}
	]
}

function inicio(){
	nuevaPersona  = {
			"nombre": "Federico",
			"apellidos": "Martinez Avarez",
			"direccion":{
				"calle": "Oso",
				"numero": "7",
				"piso": "bajo",
				"puerta": "7"
			}
	};
	personas.datos[4] = nuevaPersona;
	personas.numero = personas.numero + 1;

	for (let i = 0; i  < personas.datos.length; i++){
		opcion = document.createElement("option");
		opcion.innerText = personas.datos[i].nombre +
		 	" " + personas.datos[i].apellidos;
		opcion.value = i;
		document.getElementById("selector").appendChild(opcion);
	}
	document.querySelector("#selector").addEventListener("change",escribeDatos);

}

function escribeDatos(){
	var indice = 0;
	document.getElementById('datos').innerHTML="";
	var opciones = document.getElementsByTagName("option");
	for (let i = 0; i < opciones.length; i++){
		if (opciones[i].selected) indice = i;
	}
	resultado = document.createElement("p");
	p = personas.datos[indice];
	resultado.innerHTML = p.nombre + " " + p.apellidos + 
	". <br>Dirección: Calle " + p.direccion.calle + ", número " + p.direccion.numero 
	+ ", piso " + p.direccion.piso + ", puerta " + p.direccion.puerta;
	document.getElementById('datos').appendChild(resultado);
}