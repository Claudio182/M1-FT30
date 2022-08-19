// function saludar(){
//     // todo lo que se encuentra aquí vemos que pasa
//     var nombre="mau"
    
//     // -------
// 	return function pepe(){
// 		console.log("hola");
// 	}
// }
// // var saludarLaFunctionToda = saludar; // function saludar(){var nombre="mau"console.log(nombre)return function pepe(){console.log("hola");}}
// var saludarLaFunctionQueEstaEnElReturn = saludar(); // function pepe(){console.log("hola");}
// // console.log(saludarLaFunctionToda)
// // console.log(saludarLaFunctionQueEstaEnElReturn)

// // saludarLaFunctionToda()
// saludarLaFunctionQueEstaEnElReturn()
// saludarLaFunctionQueEstaEnElReturn()
// saludarLaFunctionQueEstaEnElReturn()
// function saludar( saludo ){
    
// 	return function( nombre ){
// 		console.log(saludo + ' ' + nombre);
// 	}
// }

// var saludarHola = saludar('Hola'); // Esto devuelve una función
// var saludarChau = saludar('Chau');
// saludarHola('Toni'); // 'Hola Toni'
// saludarChau('Toni')




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


// function hacerSaludo( lenguaje ){
// 	if ( lenguaje === 'en'){
// 		return function(){
// 			console.log('Hi!');
// 		}
// 	}

// 	if ( lenguaje === 'es'){
// 		return function(){
// 			console.log('Hola!');
// 		}
// 	}
// }

// var saludoIngles = hacerSaludo('en'); // return function(){console.log('Hi!');}
// var saludoEspaniol = hacerSaludo('es'); // return function(){console.log('Hola!');}
// saludoIngles()


function clousureCadenaString (){
    var cadenaInicial = "WWW."
    return function(continuarCadena){
        cadenaInicial = cadenaInicial + continuarCadena
        //console.log(cadenaInicial)
        return cadenaInicial
    }
}

var InstanciaClousureCadenaString01 = clousureCadenaString()
var InstanciaClousureCadenaString02 = clousureCadenaString()
var InstanciaClousureCadenaString03 = clousureCadenaString()
console.log("01",InstanciaClousureCadenaString01("casa"))
console.log("01",InstanciaClousureCadenaString01(".CIUDAD"))
console.log("01",InstanciaClousureCadenaString01(".POderrrrrrrrrrr"))
console.log("02",InstanciaClousureCadenaString02())
console.log("03",InstanciaClousureCadenaString03("slkgdñkjgñklsdjg"))


var nombre = 34

function a(){
    nombre ="we"
}
function b(){
    nombre ="rtttttttttt"
}
a()
b()
console.log(nombre)
