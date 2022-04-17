setInterval(()=> {
var reloj= document.getElementsByClassName("reloj")[0];
var tiempoActual= new Date();
var hora = tiempoActual.getHours();
if (hora < 10){
    hora= `0${hora}`;
}
var minutos = tiempoActual.getMinutes();
if (minutos < 10){
    minutos= `0${minutos}`;
}
var segundos = tiempoActual.getSeconds(); 
if (segundos < 10){
    segundos= `0${segundos}`;
}
reloj.innerHTML= `${hora}:${minutos}:${segundos}`; 
}, 1000); 