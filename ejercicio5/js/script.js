onload = inicio;
var receta = {
 	"receta": "Bizcocho",
 	"ingredientes": [{
 			"ingrediente": "Huevos",
 			"cantidad": 3,
 			"medida": "unidad"
 		},
 		{
 			"ingrediente": "Yogurt natural",
 			"cantidad": 1,
 			"medida": "unidad"
 		},
 		{
 			"ingrediente": "Levadura",
 			"cantidad": 1,
 			"medida": "sobre"
 		},
 		{
 			"ingrediente": "Azúcar",
 			"cantidad": 2,
 			"medida": "Medidas de vaso de yogurt"
 		},
 		{
 			"ingrediente": "Sal",
 			"cantidad": 1,
 			"medida": "Pizca"
 		},
 		{
 			"ingrediente": "Harina",
 			"cantidad": 2,
 			"medida": "Medidas de vaso de yogurt"
 		},
 		{
 			"ingrediente": "Cola cao",
 			"cantidad": 1,
 			"medida": "Medida de vaso de yogurt"
 		},
 		{
 			"ingrediente": "Aceite",
 			"cantidad": 1,
 			"medida": "Medida de vaso de yogurt"
 		}
 	]
 }


function inicio(){
	document.querySelector("#titulo").innerText = receta.receta;

	for (var i = 0; i < receta.ingredientes.length; i++){
		fila = document.createElement("tr");
		fila.innerHTML = "<td>"+ receta.ingredientes[i].ingrediente +"</td>"+
			"<td>"+ receta.ingredientes[i].cantidad +"</td>"+
			"<td>"+ receta.ingredientes[i].medida +"</td>"
		document.getElementsByTagName("table")[0].appendChild(fila);
	}
}