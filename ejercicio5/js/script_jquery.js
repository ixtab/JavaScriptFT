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
var desplegado = true;
$(document).ready(function() {
	pintar();
	$("button").eq(0).click(function(){
		anadir();
	});

	$("#titulo").click(function(){
		$("#receta").slideToggle(1000);
	});  
	
});s

function pintar(){
	$("table").html("<tr><th>Ingrediente</th><th>Cantidad</th><th>Medida</th></tr>");

	$("#titulo").text(receta.receta);
	for (var i = 0; i < receta.ingredientes.length; i++){
		fila = document.createElement("tr");
		fila.innerHTML = "<td>"+ receta.ingredientes[i].ingrediente +"</td>"+
			"<td>"+ receta.ingredientes[i].cantidad +"</td>"+
			"<td>"+ receta.ingredientes[i].medida +"</td>"
		$("table").append(fila);
	}
}

function anadir(){
	if($("#ingr").val() != "" || null){
		var posicion = receta.ingredientes.length;
		var nuevoIngrediente = '{"ingrediente": "' + $("#ingr").val() + '",'+
			'"cantidad": "' + $("#canti").val() + '",' +
			'"medida": "' + $("#medi").val() + '"}';
		receta.ingredientes[posicion] = JSON.parse(nuevoIngrediente);
		console.log(receta.ingredientes.length);
		pintar();
		$("#ingr").val("");
		$("#canti").val("");
		$("#medi").val("");
	}
}

function quitar(){
	encontrado = false;
	for(let i = 0; i < receta.ingredientes.length; i++){
		if ($("#ing_quitar").val().toUpperCase() == receta.ingredientes[i].ingrediente.toUpperCase()){
			for(let j= i; j< receta.ingredientes.length-1; j++){
				receta.ingredientes[j] = receta.ingredientes[j+1];
			}
			receta.ingredientes.splice([receta.ingredientes.length-1],1);
			pintar();
			encontrado = true;
			$("#ing_quitar").val("");
		} 
	}
	if(!encontrado){
		alert($("#ing_quitar").val() + " no encontrado");
		$("#ing_quitar").val("");
	}
}