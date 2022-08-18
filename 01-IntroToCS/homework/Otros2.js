'use strict'

function BinarioADecimal(num) {
    // tu codigo aca
    let sum = 0;

    for (let i = 0; i < num.length; i++) {
       sum += +num[i] * 2 ** (num.length - 1 - i);
    }
    return sum;
}

console.log(BinarioADecimal("1011"));



function DecimalABinario(num) {
    // tu codigo aca
    // se espera un numero, retorna un string
    if (number > 0) {
        return convertToBinary( parseInt(number / 2) ) + (number % 2)
    };
    return '';
}


console.log(convertToBinary(25));
console.log(convertToBinary(8));




BinarioADecimal('1001')
module.exports = {
    BinarioADecimal,
    DecimalABinario,
}