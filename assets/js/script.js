//Obtener la fecha de hoy y separarla

var fechaActual = new Date();

var dd = fechaActual.getDate();
var mm = fechaActual.getMonth()+1;
var yyyy = fechaActual.getFullYear();

//meter el mensaje y todo con la fecha al div

document.getElementById("info").innerHTML = `<div  class="box1 col-3 shadow-lg py-5 px-5 mt-5">
<h1 class="fw-bold">
    ¡Apresúrense!
</h1>
<h2>El plazo máximo para inscribirse es solo 2 días después de la siguiente fecha:</h2>
<h1 class="fecha">${dd} / ${mm} / ${yyyy}</h1>
</div>`