// Clousures
// Una clousure es una funcion que tiene acceso a variables de su contexto
// donde se definio. 
// Para que exista una clousure se deben cumplir tres condiciones:
// 1. La funcion debe estar dentro de una funcion (funciones anidadas)
// 2. La funcion padre debe tener una variable 
// 3. La funcion que está dentro debe interactuar con la variable de la funcion padre
// que está fuera de ella.	
// function miClousure(){
//     let mivariableClousure = 10
//     return function (){
//         mivariableClousure -= 5
//         console.log("wwww",mivariableClousure)
//         return mivariableClousure
//     }
// // }
// // let instanciaClousure1 = miClousure() // necesito llamar, invocar la funcion
// // instanciaClousure1()
// // instanciaClousure1()
// // instanciaClousure1()
// // let instanciaClousure2 = miClousure()
// // console.log("que es esto",instanciaClousure2)
// // instanciaClousure2()
// // instanciaClousure2()
// // instanciaClousure2()
// // instanciaClousure2()
// // instanciaClousure2()

// function miNoClousure(){
//     let mivariableNoClousure = 10
//         mivariableNoClousure -= 5
//         console.log("wwww",mivariableNoClousure)
//         return mivariableNoClousure
// }
// let nuevaInstanciaDeMiNoClousure1 = miNoClousure // no debo invocar ya que no puedo guardar algo que is not a function
// let nuevaInstanciaDeMiNoClousure2 = miNoClousure
// nuevaInstanciaDeMiNoClousure1()
// nuevaInstanciaDeMiNoClousure1()
// nuevaInstanciaDeMiNoClousure2() // podemos ver que solo se ejecuta una vez y no acciona como una clousure

// // THIS
// // su implementación implícita según javascript
// //           Contexto          |     Contexto de ejecución
// //      como objeto que        |
// //      ejecuta una function   |
// //            this             |        Pila de ejecución
// //

// const persona = {
//     nombre: 'Juan',
//     saluda: function () {
//         console.log("Hola, soy " + this.nombre);
//     },
//     limpia: function (cosa) {
//         console.log("soy" + this.nombre + " y limpio " + cosa);
//     }
// };

// const persona2 = {
//     nombre: 'Pepito',
// };

// const nuevaPersona = persona.saluda;

// persona.saluda();
// nuevaPersona();
// // This pierde el contexto (objeto) y con ello su contexto de ejecución primero

// console.log("------------------------------------------------------------------------------------------");

// // Aquí aparecen los enlaces explicitos para suplir el problema de this
// // Estos son: bind, call, apply
// // const superNuevitapersona = persona.saluda.bind(persona2)
// // superNuevitapersona()
// let nuavaVariableParaGuardarLaFunctionYSuReferenciaObjeto = persona.saluda.bind(persona2)
// persona.limpia.call(persona2,"mundo")
// // persona.limpia.apply(persona2,["mundo"])



// // var creaFuncion = function(){
// // 	var arreglo = [];
// // 	for ( var i=0; i < 3; i++){
// //       	// IIFE
// // 		arreglo.push(
// // 			function yeye (j){
// // 				return function() {console.log(j);}
// // 			},
// //             yeye(i)
// // 		)
// // 	}
// // 	return arreglo;
// // }

// // var arr = creaFuncion();

// // arr[0]() // 0
// // arr[1]() // 1
// // arr[2]() // 2

console.log("--------------------------------------------------------------------------------------------");

// function ejemploClousure(name,edad){
//     var objetClousureRutaActividades = {
//       club: "Juventud Latina",
//     }
//       return function(newKeyStep,newValueStep){
//         objetClousureRutaActividades.club=objetClousureRutaActividades.club+newValueStep
//         objetClousureRutaActividades.name = name
//         objetClousureRutaActividades.edad = edad
//       console.log(objetClousureRutaActividades)
//       }
//   }
//   var instancioFunctPadreReturn1 = ejemploClousure("Mauro","17")
//   var instancioFunctPadreReturn2 = ejemploClousure("Felipe","33")
// instancioFunctPadreReturn1("step1","correr")

// var instancioFunctPadreReturn3 = ejemploClousure()
// instancioFunctPadreReturn3()
// instancioFunctPadreReturn2("ggggg","dedede")


// var creaFuncion = function(){
// 	var arreglo = [];
// 	for ( var i=0; i < 3; i++){
// 		arreglo.push(
// 			(function(j){
//                 return function(){
//                   console.log(j);  
//                 }
				
// 			}(i))
// 		)
// 	}
// 	return arreglo;
// }

// var arr = creaFuncion();

// arr[0]() // 3 sale un 3, qué esperaban ustedes??
// arr[1]() // 3
// arr[2]() // 3
// console.log(arr)



var persona = {
	nombre: 'Guille',
	apellido: 'Aszyn',
    // logNombre:function(){
    //     console.log(this.nombre);
    // }
}

var logNombre = function(){
	console.log(this.nombre);
}

var logNombrePersona = logNombre.bind(persona);
// el primer parametro de bind es el this!
logNombrePersona();

// BIND DEVUELVE UNA FUNCION!

function multiplica(a, b){
    console.log(a*b)
	return a * b;
}

var multiplicaPorDos = multiplica.bind(this, 2);
// el Bind le `bindeó` el 2 al argumento a.
// y devolvió una función nueva con ese parámetro bindeado.
multiplicaPorDos(3)


var persona = {
	nombre: 'Guille',
	apellido: 'Aszyn',
}

var logNombre = function(){
	console.log(this.nombre);
}

// el primer parametro de call es el this!
logNombre.call(persona);

// Call hace lo mismo que Bind, solo que invoca la función,
// no devuelve una nueva.
// tambien bindea argumentos!
// 
var logNombre = function(arg1, arg2){
	console.log(arg1 +' '+ this.nombre +' '+ arg2);
}

logNombre.call(persona, 'Hola', ', Cómo estas?');

////Hola Guille, Cómo estas?