// localStorage sirve para guardar algo cuando se refresque la pagina, es decir que el guardado sea permanente
// el JSON.stringify() nos sirve para convertir un arreglo en texto y de esta forma poder usarlo con el localStorage
// JSON.parse() se usa para revertir el .stringify



window.onload= iniciar; 

function iniciar(){
// boton agregar escucha el click
var btnAgregar = document.getElementById("btnAgregar");
btnAgregar.addEventListener("click", clickBtnAgregar)

// Boton borrar escucha click 
var btnBorrar = document.getElementById("btnBorrar");
btnBorrar.addEventListener("click", clickBtnBorrar)
// muestra la nota
mostrarNotas();
}

function clickBtnBorrar (){
    // se limpia todo el localStorage 
    localStorage.clear();
    mostrarNotas(); 
}


function clickBtnAgregar(){
    // traemos el txtNota 
   var txtNota= document.getElementById("txtNota");
//    dfinimos un arreglo vacio para insertar alli las notas
   var notas = [];
   if(localStorage.notas){
       notas = JSON.parse(localStorage.notas);

   }
//    se mete cada valor del txtNota en el arreglo con el .push y se muestra con el .value
   notas.push(txtNota.value);

//   todo el arreglo alejado en el localStoraged va a ser convertido en string 
   localStorage.notas= JSON.stringify(notas);
   mostrarNotas();
}


function mostrarNotas (){
    // trae el divNotas 
     var divNotas= document.getElementById("notas");
    //  le asigna el texto del localStoraged
    var notas = JSON.parse(localStorage.notas); 
    var html = "";
    for (var nota of notas){
        html += nota + "<br>"; 
    }
    divNotas.innerHTML= html;
}



