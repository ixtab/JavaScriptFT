
jQuery(document).ready(function() {
	var datos;
	$.get("https://jsonplaceholder.typicode.com/photos", 
        function(data, status){
    		alert("Status: " + status);
    	pintar(data);
  		});
});

function pintar(datos){
	var cuerpo = $("body");
	for (let i = 0; i < datos.length; i++){
		console.log(datos[i]); 
		cuerpo.append('<figure><a href="'+datos[i].url+'"><img src="'+
		datos[i].thumbnailUrl + 
		'" style="width:150px"></a>'+
		'<figcaption>' + datos[i].title +'</figcaption></figure>');
	}
}