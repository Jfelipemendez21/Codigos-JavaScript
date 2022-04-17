function Perro(nombre, edad, vivo){
    this.nombre=nombre
    this.edad= edad
    this.vivo=vivo
};
var perro1 = new Perro ("rex",5,true);
console.log(perro1);
var perro2 = new Perro ("jax",3,false) 
console.log(perro2);

var animal = [perro1, perro2]
console.log(animal); 

var gatos = [{nombre: "felix",edad: "5 meses"},{nombre: "tomy",edad: "1 año" }]

