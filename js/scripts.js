$("#send").click(function(){
  if($("#nombre").val()!='' && $("#apellido").val()!='' && $("#telefono").val()!='' && $("#acepto").is(':checked')){
    send();
  }else{
    var campos = "";
    var polit = "";
    if($("#nombre").val()=='' || $("#apellido").val()=='' || $("#telefono").val()==''){
      var campos = "Todos los campos son requeridos.<br>";
    }
    if(!$("#acepto").is(':checked')){
      var polit = "Se deben aceptar las políticas de privacidad";
    }
    swal({ title: "Un momento", text: campos + polit, html: true, type: 'warning' });
  }
});

function send(){
  $.ajax({
    url: 'send.php',
    type: 'POST',
    dataType: 'html',
    data:{ 
      a: $("#nombre").val(),
      b: $("#apellido").val(),
      c: $("#telefono").val()
    }
  })
  .done(function(html){
    window.location = "//www.doncarro.net/gracias.php";
  })
  .fail(function() {
    swal(html);
  })
}

function privacy(){
  swal({
    title: "Políticas de Privacidad",
    text: "La información en esta página Web sólo tiene fines de información general. La información es proporcionada por Don Carro, y mientras nos esforzamos por mantener la información actualizada y correcta, no hacemos ninguna representación o garantía de ningún tipo, expresa o implícita, acerca de la integridad, exactitud, fiabilidad, adecuación o disponibilidad con respecto a la promoción del Día de los Inocentes.<br><br>En ningún caso seremos responsables por cualquier pérdida o daño incluyendo, sin limitación, indirecto o consecuente, o cualquier pérdida o daño derivado de la pérdida de datos o de beneficios que surjan de o en conexión con el uso de esta página Web. Nos esforzamos por mantener la página Web en funcionamiento y sin problemas. Sin embargo, Don Carro no asume ninguna responsabilidad por, y no será responsable por, cualquier problema legal, de contabilidad o gubernamental fuera de nuestro control.",
    type: "info",
    confirmButtonText: "Acepto",
    html: true
  });
}