"use strict";

// function BinarioADecimal(num) {
//   // tu codigo aca

// }

// En Binario a decimal recibimos un string y retornamos un número
function BinarioADecimal(string) {
  // tu codigo aca
  // console.log("hola string", string)
  var result = 0;
  var count = string.length - 1
  for (let i = 0; i < string.length; i++) {
    result = result + string[i] * Math.pow(2, count);
    // var lugarPotencia =string.length - 1 
    // console.log("count is: ", count)
    count--
  }
  // console.log("result is: ", result)
  return result;
  //
}
BinarioADecimal("10001010")
// BinarioADecimal()
// function sumar (a,b){
//   var result = a+b
//   return result
// }
// // console.log(sumar(8,7))

// En decimal a binario recibimos un número y retornamos un string
function DecimalABinario(num) {
  // tu codigo aca
  var result = "";
  var numero = num
  while (numero>0) {
    // console.log("numero es",numero)
    result = numero%2 +result
    numero = Math.floor(numero/2)
  }

  return result

}

/*
Los 2 (dos) métodos que no debemos usar son:
parseInt // para pasar de cadena a número, y
toString() // para pasar de número a string.

Los otros métodos si podemos usar.
*/

module.exports = {
  BinarioADecimal,
  DecimalABinario,
};
