//Los objetos desencadenan eventos.-
onload = inicio;

var ropa = {
	"calzado": "Botas negras",
	"pantalones": "Vaqueros",
	"camiseta": "Negra",
	"cazadora": "Cuero"
}

var persona  = {
	"juan": {
		"nombre": "Juan",
		"apellidos": "García Gómez",
		"hijos": ["Juana", "Pedro", "Jose", "Mari Conchi"],
		"grita": (a)=>{
			alert(a);
		},
		"ropa": ropa,
		"desnudar": function(){
			ropa.calzado = "NADA";
			ropa.pantalones = "NADA";
			ropa.camiseta = "NADA";
			ropa.cazadora = "NADA";
		},
		"llevaPuesto": function(){
			return JSON.stringify(persona.juan.ropa) + "<br>";
		},
		"vestir": function(calzado, pantalones,camiseta,cazadora){
			ropa.calzado = calzado;
			ropa.pantalones = pantalones;
			ropa.camiseta = camiseta;
			ropa.cazadora = cazadora;
		},
	},
	"antonio": {
		"nombre": "Antonio",
		"apellidos": "Perez Velasco",
		"hijos": ["Pablo", "Clemente"],
		grita: (a)=>{
			alert(a);
		},
		"ropa": ropa,
		"desnudar": desnudo(),
		"llevaPuesto": function(){
			return JSON.stringify(persona.antonio.ropa) + "<br>";
		},
		"vestir": function(calzado, pantalones,camiseta,cazadora){
			ropa.calzado = calzado;
			ropa.pantalones = pantalones;
			ropa.camiseta = camiseta;
			ropa.cazadora = cazadora;
		},
	}
}

function inicio(){

	// Juan
	document.write(persona.juan.nombre + " " + persona.juan.apellidos + "<br>");

	document.write("Hijos:<ul>")
	for (let i = 0; i < persona.juan.hijos.length; i++){
		document.write("<li>"+persona.juan.hijos[i]+"</li>");
	}
	document.write("</ul><br>")
	document.write(persona.juan.llevaPuesto());

	persona.juan.grita("holaaaa");

	persona.juan.desnudar();

	document.write(persona.juan.llevaPuesto());

	persona.juan.vestir("chancletas", "bañador", "camisa hawaiana", "toalla");

	document.write(persona.juan.llevaPuesto());

	document.write("<hr>");

	// Antonio

	document.write(persona.antonio.nombre + " " + persona.antonio.apellidos + "<br>");

	document.write("Hijos:<ul>")
	for (let i = 0; i < persona.antonio.hijos.length; i++){
		document.write("<li>"+persona.antonio.hijos[i]+"</li>");
	}
	document.write("</ul><br>")
	document.write(persona.antonio.llevaPuesto());

	persona.antonio.grita("A dormir");

	persona.antonio.desnudar;

	document.write(persona.antonio.llevaPuesto());

	persona.juan.vestir("zapatillas", "pijama", "pijama", "albornoz");

	document.write(persona.antonio.llevaPuesto());

	document.write("<hr>");
}

function desnudo(){
			ropa.calzado = "NADA";
			ropa.pantalones = "NADA";
			ropa.camiseta = "NADA";
			ropa.cazadora = "NADA";
}