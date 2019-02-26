onload = inicio;

function inicio(){

	nuevaImagen = document.createElement("img");
	nuevaImagen.src = "https://cdn.civitatis.com/espana/madrid/galeria/madrid.jpg";
	nuevaImagen.id = "imagen";
	
	nuevaImagen.addEventListener("mouseenter", imagen1);
	nuevaImagen.addEventListener("mouseleave", imagen2);

	document.body.appendChild(nuevaImagen);

	//https://www.michaelbromley.co.uk/experiments/chromata/
	var imageElement = document.querySelector("#imagen");
    var chromata = new Chromata(imageElement, {
            colorMode: 'color',
            compositeOperation: 'lighten',
            iterationLimit: 1000000,
            key: 'high',
            lineWidth: 1,
            lineMode: 'square',
            origin: ['bottom'],
            outputSize: 'container',
            pathFinderCount: 500,
            speed: 20,
            turningAngle: Math.PI * 2
        });
    chromata.start();

}

	
function imagen1(){
	document.querySelector('#imagen').src = "imagenes/mil.jpg";
}

function imagen2(){
	document.getElementById('imagen').src = "https://cdn.civitatis.com/espana/madrid/galeria/madrid.jpg";
}