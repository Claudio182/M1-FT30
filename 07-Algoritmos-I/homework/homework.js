'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
    // Factorear el número recibido como parámetro y devolver en un array
    // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
    // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
    // Tu código:

}

function bubbleSort(array) {
    // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
    // el array recibido como parámetro
    // Devolver el array ordenado resultante
    // Tu código:


    do {
        var swap = false
        for (let i = 0; i < array.length; i++){
            
            if (array[i] > array[i + 1]) {
                let temp = array[i]
                array[i] = array[i + 1]
                array[i + 1] = temp
                swap = true
                
            }else { continue }
            
        }
        
    }while (swap)
    
    return array
}


function insertionSort(array) {
    // Implementar el método conocido como insertionSort para ordenar de menor a mayor
    // el array recibido como parámetro utilizando arreglos
    // Devolver el array ordenado resultante
    // Tu código:

    for (let i = 1; i < array.length; i++) {
        let temp = array[i]
        let x = i - 1
        
        while(x >= 0 && array[x] > temp){
            array[x + 1] = array[x]
            x--
        }
        array[x + 1]= temp
    }

    return array

}


function selectionSort(array) {
    // Implementar el método conocido como selectionSort para ordenar de menor a mayor
    // el array recibido como parámetro utilizando dos arreglos
    // Devolver el array ordenado resultante
    // Tu código:

    let aux
    let min
    let count = 0

    for (let i = count; i < array.length - count; i++) {
        //let pointer = array[i]
        for (let j = count + 1; j < array.length - count; i++) {
            min = array[j]
            if (array[j] < array[i]) {
            }
        }
        aux = array[i]
        array[i] = array[j]
        array[j] = aux
        count++
    }
    return array
}

console.log(selectionSort([5, 1, 4, 2, 8]))

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
    factorear,
    bubbleSort,
    insertionSort,
    selectionSort,
};
