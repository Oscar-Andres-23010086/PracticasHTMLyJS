var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

document.addEventListener("DOMContentLoaded", function() {
    alertaMeses();
});

function alertaMeses() {
    for (let i = 0; i < meses.length; i++) {
        alert(meses[i]);
    }
}