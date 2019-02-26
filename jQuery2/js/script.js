
jQuery(document).ready(function() {
	var datos;
	$.get("https://jsonplaceholder.typicode.com/posts", 
        function(data, status){
    		alert("Status: " + status);
    	pintar(data);
  		});
});

function pintar(datos){
	var cuerpo = $("body");
	
	for (let i = 0; i < datos.length; i++){
		var linea = "";
		for(key in datos[i]){
			linea = linea + "<br><b>" + key + "</b>: " + datos[i][key] + ".";
		}
	cuerpo.append("<p>" + linea + "</p>");
	console.log(linea);

	}
}