'use strict'

function BinarioADecimal(num) {
    // tu codigo aca
    // se espera un string, retorna un numero

    num = Array.from(num)
    let length = num.length - 1
    let result = []

    for (let value of num) {
        if (parseInt(value) === 1) {
            result.push(Math.pow(2, length))
            --length
        } else {
            --length
        }

    }
    console.log(result)
    return result.reduce((acc, el) => acc + el, 0)

}


function DecimalABinario(num) {
    // tu codigo aca
    // se espera un numero, retorna un string
    
    let arrBin = []

    for (; num > 1;) {
        arrBin.unshift(num % 2)
        num = Math.floor(num / 2)
    }

    arrBin.unshift(num)
    arrBin = arrBin.join('')

    return arrBin




}

BinarioADecimal('1001')
module.exports = {
    BinarioADecimal,
    DecimalABinario,
}