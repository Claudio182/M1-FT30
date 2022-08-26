'use strict'

const { merge } = require("@11ty/eleventy/src/TemplateData")

// No cambies los nombres de las funciones.

function quickSort(array) {
    // Implementar el método conocido como quickSort para ordenar de menor a mayor
    // el array recibido como parámetro
    // Devolver el array ordenado resultante
    // Tu código:
    let left = []
    let right = []
    let orderer = []
    let pivot = array[Math.floor(array.length / 2)]

    if (array.length <= 1) { return array }

    for (let i = 0; i < array.length; i++) {

        if (array[i] > pivot) {
            right.push(array[i])
        }
        else if (array[i] < pivot) {
            left.push(array[i])
        }
        else {
            orderer.push(array[i])
        }

    }
    return quickSort(left).concat(orderer).concat(quickSort(right))
}

function mergeSort(array) {
    // Implementar el método conocido como mergeSort para ordenar de menor a mayor
    // el array recibido como parámetro
    // Devolver el array ordenado resultante
    // Tu código:

    if (array.length <= 1) { return array }

    let divide = dividelo(array)
    let left = divide[0]
    let right = divide[1]

    return mezcla(mergeSort(left), mergeSort(right))

}

function mezcla(l, r) {
    let iL = 0
    let iR = 0
    let arrOut = []

    while (iL < l.length && iR < r.length) {
        if (l[iL] < r[iR]){
            arrOut.push(l[iL])
            iL++
        }else {
            arrOut.push(r[iR])
            iR++
        }
    }
    return arrOut.concat(l.splice(iL)).concat(r.splice(iR))
}


function dividelo(array) {
    let medio = Math.floor(array.length / 2)
    let left = array.slice(0, medio)
    let right = array.slice(medio)
    return [left, right]
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
    quickSort,
    mergeSort,
};
