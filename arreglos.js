// var nombres = [];

// nombres.push("Lucas");
// nombres.push("Juan");
// nombres.push("Pedro");
// nombres.push("Felipe");
// nombres.push("David");

// for (var i= 0; i < nombres.length;i++){
//     var nombres = nombres[i]; 
//     alert(nombres);
// }

window.onload= iniciar;

var tareas = []; 

function iniciar (){
    var Agregar = document.querySelector(".btnAgregar")
    Agregar.addEventListener ("click", clickBtnAgregar);

}
function clickBtnAgregar (){
    var Tarea = document.querySelector(".txtTarea");
    var Tarea = Tarea.value; 
    tareas.push(Tarea); 
    mostrarTareas (); 
}

function mostrarTareas (){
    var listado = document.querySelector(".listado")
    var lis_tareas = " "; 
    for (var Tarea of tareas ){
        lis_tareas += ( Tarea + "<br/>");
    }
    listado.innerHTML = lis_tareas; 
}
