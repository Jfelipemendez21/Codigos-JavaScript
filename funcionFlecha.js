var colores =['negro','blanco','rojo'];
// esta es una funcion clasica 
colores.forEach(function(color){
    console.log(color);
})
// aqui la simplificamos un poco
colores.forEach((color) => {
console.log(color)
}); 
// nos damos cuenta que las funciones flecha son simplemente simplificaciones de una funcion convencional
colores.forEach(color =>{
    console.log(color); 
});
// la desventaja de la funcion flecha es que solo se puede usar en casos donde no sea necesario un constructor o un parametro