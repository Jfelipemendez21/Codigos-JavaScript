window.onload = iniciar;

function iniciar(){
    var btnCalcular = document.getElementById("btnCalcular");
    btnCalcular.addEventListener("click", clickBtnCalcular); //el metodo del evento, e un metodo que se usa mediante el sonido de un boton
}

function clickBtnCalcular(){ 
    var textoAlt = document.getElementById("txtAlt");
    var altura= textoAlt.value;  
    alert(altura);  

    var textoPeso = document.getElementById("txtPeso");
    var peso= textoPeso.value;
    alert(peso); 

    var imc= peso/ (altura*altura);
    alert("su indice de masa corporal es: " +Math.round(imc));  
}


