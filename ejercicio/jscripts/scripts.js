$(()=>{
	$("#boton").delay(4000).fadeIn();
	var pulsado = false;
	$('#boton').click(()=>{
		var euros = $("#euros").val();
		monedas = $('p');
		console.log(monedas);
		$("p").delay(4000).fadeIn();
		monedas[0].innerText = "Euros: " + euros;
		monedas[1].innerText = "Dolares: " + (euros * 1.13523);
		monedas[2].innerText = "Libras: " + (euros * 0.871125);
		monedas[3].innerText = "Ngultrum de Bhutan: " + (euros * 80.7273);
		$("#euros").val("");
		$("#euros").focus();
	});	

});