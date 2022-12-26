function limpiar() {
    document.getElementById('fInicial').innerHTM= '' ;
 
    document.getElementById('dias').innerHTM= ''; 

    var caja = document.getElementById("mostrar");
    mostrar.style.display = "none";

} 

function calcular() {   
    
    const feriados= [
        [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31], //Enero
        [],  // Febrero
        [], // Marzo
        [], // Abril
        [1], // Mayo
        [], //Junio
        [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,18], //Julio
        [25], // Agosto
        [], //Septiembre
        [], //Octubre
        [], //Noviembre
        [25,26,27,28,29,30,31] //Diciembre
    ];
    var fInicial = document.getElementById('fInicial').value;
    var dHabilSiguiente = new Date(Date.parse(fInicial));
    const diaInicial = calcularTotales(dHabilSiguiente, 1, feriados);

    const diasTramite = parseInt(document.getElementById('dias').value);
    const resultado = calcularTotales(diaInicial, diasTramite, feriados);
    
    resulta = resultado.getDate() + '/' +
            (resultado.getMonth() + 1) + '/' + 
             resultado.getFullYear();

    document.getElementById('fFinal').innerHTML = resulta;
    var caja = document.getElementById("mostrar");
    mostrar.style.display = "block";

    }

    function calcularTotales(dInicio, nDias, dFeriados) {
        let diaPropuesto = new Date(dInicio.getFullYear(), dInicio.getMonth(), dInicio.getDate());
        let i = 1;
        while (nDias > 0 ) {
            let festivo = false;
            diaPropuesto = new Date(dInicio.getFullYear(), dInicio.getMonth(), dInicio.getDate() + i);
            if (diaPropuesto.getDay() <= 8) {
    
                let m = diaPropuesto.getMonth();
                let dia = diaPropuesto.getDate();
    
                for (let d in dFeriados[m]) {
                    if (dia === dFeriados[m][d]) {
                        festivo = true;
                        break;
                    }
                } 
    
                if (!festivo) {
                    nDias--;
                }
            }
            i++;
        } 
        return diaPropuesto;
    } 

   