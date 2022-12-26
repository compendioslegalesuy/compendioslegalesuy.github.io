function limpiar() {
    
    document.getElementById('fInicial').innerHTM= ''; 
    var caja = document.getElementById("mostrar");
    mostrar.style.display = "none";
}


function calcular() {

    var fInicial = document.getElementById('fInicial').value;
    var fecha = Date.parse(fInicial);

    var nDias = parseInt(document.getElementById('dias').value);

  //la fecha
  var fechaFin = new Date(fInicial);
  
  //dias a sumar mas un día para no contar el mismo día
  var dias = parseInt(nDias) + 1;
  
  //nueva fecha sumada
  fechaFin.setDate(fechaFin.getDate() + dias);
  //formato de salida para la fecha
  resultado = fechaFin.getDate() + '/' +
    (fechaFin.getMonth() + 1) + '/' + 
    fechaFin.getFullYear();

    document.getElementById('fFinal').innerHTML = resultado;
    var caja = document.getElementById("mostrar");
    mostrar.style.display = "block";

}


/*
*/