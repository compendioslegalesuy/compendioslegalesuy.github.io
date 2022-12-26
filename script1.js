
// Excluye sábados y domingos.
const addWeekDays = (startDate, count) =>
     Array.from({ length: count }).reduce(date => {
     date = new Date(date.setDate(date.getDate() + 1));
    if (date.getDay() % 6 === 0 )
      date = new Date(date.setDate(date.getDate() + (date.getDay() / 6 + 1) ));
    return date;
     }, startDate);


  function limpiar() {
      document.getElementById('fInicial').innerHTM= '' ;
   
      document.getElementById('dias').innerHTM= ''; 
  
      var caja = document.getElementById("mostrar");
      mostrar.style.display = "none";
  
  } 


function calcularHabiles() {

  var fInicial = document.getElementById('fInicial').value;
  var fecha = Date.parse(fInicial);

  var nDias = parseInt(document.getElementById('dias').value);

  //dias a sumar mas un día para no contar el mismo día
  var dias = parseInt(nDias)+1;
  //la fecha
  var fechaFin = new Date(fInicial);
  //nueva fecha sumada
  var fin = addWeekDays(new Date(fecha), dias); 

  resultado = fin.getDate() + '/' +
  (fin.getMonth() + 1) + '/' + 
  fin.getFullYear();

  document.getElementById('fFinal').innerHTML = resultado;
  var caja = document.getElementById("mostrar");
  mostrar.style.display = "block";

}





