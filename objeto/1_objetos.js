//Definir o declara una función
function saludo (nombre='ICONOS'){
// Interpolación de variables    
alert(`Hola,${nombre}`)
}
//Invocación o ejecución
//saludo('Tete')
//saludo()

//Es buena práctica encapsular tu código en una función anonima ejecutable
(function(d,w){
//alert(d)   
//alert(W)
//alert('Hola')
//console.log('document')    
})(document, window);
/*Objetos Literales*/
(function(c){
c('*****Objetos Literales*****') 
/*Para declarar un variable en JS se utilizaba la palabra "var". Ahora para declarar una variable usamos "const" o "let"¨*/ 
/* Los objetos en JS son una colección de propiedades con sus prespectivos valores. 
Esas propiedades pueden ser atributos o metodos*/
const Muñeca={
 nombre:'Invierno',
 tipo:Hada,
 mitologia:'Celta',
 zapatosrojos: true,
 color:'Azul',
 posa: function(){
c('sentada o parada')
 },
 decora:function(lugar='habitación'){
c(`${this.nombre}decora${lugar}`)
 },
 //*Traerla desde un link de internet*//
 aparecer:function(imagen){
document.write(`<img src="$({http://1.bp.blogspot.com/-dmXc37UHndw/Ta7n2oAArJI/AAAAAAAAADk/hbv-aaFGOKI/s1600/invierno%255B1%255D.png})">`)
 }  
}
c(
Muñeca,
Muñeca.nombre,
Muñeca.tipo,
Muñeca.mitologia,
Muñeca.zapatosrojos,
Muñeca.color    
)
Muñeca.posa()
Muñeca.decora()
Muñeca.decora('Mueble')
Muñeca.aparecer();
/*Clases*/
(function(c){
/*Una clase es un modelo a seguir.*/
class Muñeca{
/* El constructor es un metodo especial que se ejecuta en el momento de instanciar la clase*/
constructor(nombre,tipo,mitologia,zapatosrojos,color){
/*Definición de los atributos de mi clase*/
this.nombre=nombre
this.tipo=tipo
this.mitologia=mitologia
this.zapatosrojos=zapatosrojos
this.color=color        
}
/*Definición de los metodos de la clase*/
ladrar () {
    c('Guauuu guauuu!!!')
  }

  comer (comida = 'croquetas') {
    c(`${this.nombre} come ${comida}`)
  }

  aparecer (imagen) {
    document.write(`<img src="${imagen}">`)
  }
}

//La palabra new me permite crear o INSTANCIAR un objeto de un tipo determinado de clase
const primavera = new Muñeca('primavera', 'Hada', 'celta', true, 'Rosa')
const verano = new Muñeca('verano', 'Hada', 'celta', true, 'Naranja')

c(
  primavera,
  primavera.nombre,
  primavera.tipo,
  primavera.mitologia,
  primavera.zapatosrojos,
  primavera.color,
  verano,
  verano.nombre,
  verano.tipo,
  verano.mitologia,
  verano.zapatosrojos,
  verano.color,
)

primavera.posa()
primavera.decora()
primavera.aparecer('http://3.bp.blogspot.com/-sC81T9B2Fsw/Ta7n9lDs5sI/AAAAAAAAAD4/jFkmROrdrvs/s1600/primavera%255B1%255D.png')

verano.posa()
verano.decora()
verano.aparecer('http://2.bp.blogspot.com/-PCJQSzH8Okg/Ta7oF5NaFaI/AAAAAAAAAEI/cyh1ftqivd0/s1600/verano%255B2%255D.png')

})(console.log);

