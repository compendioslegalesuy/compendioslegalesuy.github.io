function limpiar() {
    document.getElementById('fInicial').innerHTM= '' ;
 
    document.getElementById('dias').innerHTM= ''; 

    var caja = document.getElementById("mostrar");
    mostrar.style.display = "none";

} 

function sumarDias(fecha, dias){
    fecha.setDate(fecha.getDate() + dias);
    return fecha;
  }


function calcular() {   
    
    const feriados = [
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

    const dSemana = [
        'domingo',
        'lunes',
        'martes',
        'miércoles',
        'jueves',
        'viernes',
        'sábado',
      ]; 

    var fInicial = document.getElementById('fInicial').value;
    var fInicial2 = new Date(Date.parse(fInicial));
    const fInicial3 = sumarDias( fInicial2 , 1 );
   
    var dHabilSiguiente = new Date(Date.parse(fInicial3)); 
    const diaInicial = calculaHabilesTotales(dHabilSiguiente, 1, feriados);

    const dInicialTram = diaInicial.getDate() + '/' + 
                        (diaInicial.getMonth()+1) + '/' + 
                        diaInicial.getFullYear() ;

    const dInicialSem = dSemana[diaInicial.getDay()];

    const diasTramite = parseInt(document.getElementById('dias').value);
    const resultado = calculaHabilesTotales(diaInicial, diasTramite, feriados);
    
    resulta = resultado.getDate() + '/' +
            (resultado.getMonth() + 1) + '/' + 
             resultado.getFullYear();

    const nombreDia = dSemana[resultado.getDay()];

    document.getElementById('dInicial').innerHTML = dInicialTram;
    document.getElementById('dSemInicial').innerHTML = dInicialSem;

    document.getElementById('fFinal').innerHTML = resulta;
    document.getElementById('dSemana').innerHTML = nombreDia;

    var caja = document.getElementById("mostrar");
    mostrar.style.display = "block";

    }

function calculaHabilesTotales(dInicio, nDias, dFeriados) {
    let diaInicial = new Date(dInicio.getFullYear(), dInicio.getMonth(), dInicio.getDate());
    let i = 1;
    while (nDias > 0 ) {
        let festivo = false;
        diaInicial = new Date(dInicio.getFullYear(), dInicio.getMonth(), dInicio.getDate() + i);
        if (diaInicial.getDay() > 0 && diaInicial.getDay() < 6) {

            let m = diaInicial.getMonth();
            let dia = diaInicial.getDate();

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
    return diaInicial;
} 


// Typeado
var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
};