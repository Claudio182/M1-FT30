"use strict";

const { isString } = require("markdown-it/lib/common/utils");

/*
Implementar la clase LinkedList, definiendo los siguientes métodos:
    - add: agrega un nuevo nodo al final de la lista;
    - remove: elimina el último nodo de la lista y retorna su valor (tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía);
    - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro puede ser un valor o un callback. En el primer caso, buscamos un nodo cuyo valor coincida con lo buscado; en el segundo, buscamos un nodo cuyo valor, al ser pasado como parámetro del callback, retorne true. 
    Ejemplo: 
    search(3) busca un nodo cuyo valor sea 3;
    search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número par, busca un nodo cuyo valor sea un número par.
    En caso de que la búsqueda no arroje resultados, search debe retornar null.
*/

function LinkedList() {
    this.head = null
    this._length = 0
}

function Node(value) {
    this.data = value
    this.next = null
}

LinkedList.prototype.add = function(data) {
    let nodo = new Node(data)
    let first = this.head
    
    if (!first){
        this.head = nodo
        this._length++
        return nodo
    }

    let pointer = this.head

    while(pointer.next){
        pointer = pointer.next
    }
    pointer.next = nodo
    this._length++
}

LinkedList.prototype.remove = function() {
    let pointer = this.head
    let temp

    if (!this.head) {
        return null
    }
    else if (this.head.next === null) {
        temp = this.head.data
        this.head = null
        this._length--
        return temp
    }
    else {
        let prePointer
        while(pointer.next !== null) {
            prePointer = pointer
            pointer = pointer.next
        }
        temp = pointer.data
        prePointer.next = null
        this._length--
        return temp
    }
}

LinkedList.prototype.search = function(value) {
    let pointer = this.head
    if (typeof value === 'function') {
        while(pointer) {
            if (value(pointer.data)){
                return pointer.data
            }
            pointer = pointer.next
        }
    }else{
        while(pointer) {
            if (pointer.data === value){
                return pointer.data
            }
            pointer = pointer.next
        }
        return null
    }
}

/* const lista1 = new LinkedList()
lista1.add('first');
lista1.add('second');
console.log(lista1)
lista1.remove()
console.log(lista1)
 */


/* 
lista1.add('two');
lista1.add('three');
lista1.add('one');
lista1.add('four');

console.log(lista1.search( x => x.length === 5? true: false )) */
/*lista1.add('Claudio')
lista1.add('Veronica')
lista1.add('Sebastian')

lista1.remove()

console.log(lista1) */
/*
Implementar la clase HashTable.

Nuetra tabla hash, internamente, consta de un arreglo de buckets (slots, contenedores, o casilleros; es decir, posiciones posibles para almacenar la información), donde guardaremos datos en formato clave-valor (por ejemplo, {instructora: 'Ani'}).
Para este ejercicio, la tabla debe tener 35 buckets (numBuckets = 35). (Luego de haber pasado todos los tests, a modo de ejercicio adicional, pueden modificar un poco la clase para que reciba la cantidad de buckets por parámetro al momento de ser instanciada.)

La clase debe tener los siguientes métodos:
    - hash: función hasheadora que determina en qué bucket se almacenará un dato. Recibe un input alfabético, suma el código numérico de cada caracter del input (investigar el método charCodeAt de los strings) y calcula el módulo de ese número total por la cantidad de buckets; de esta manera determina la posición de la tabla en la que se almacenará el dato.
    - set: recibe el conjunto clave valor (como dos parámetros distintos), hashea la clave invocando al método hash, y almacena todo el conjunto en el bucket correcto.
    - get: recibe una clave por parámetro, y busca el valor que le corresponde en el bucket correcto de la tabla.
    - hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con esa clave (retorna un booleano).

Ejemplo: supongamos que quiero guardar {instructora: 'Ani'} en la tabla. Primero puedo chequear, con hasKey, si ya hay algo en la tabla con el nombre 'instructora'; luego, invocando set('instructora', 'Ani'), se almacenará el par clave-valor en un bucket específico (determinado al hashear la clave)
*/

function HashTable() {
    this.data = new Object()
    this._length = 0
    this.numBuckets = 35
}

HashTable.prototype.hash = function(key) {
    let hash
    for(let i = 0; i < key.length; i++) {
        hash = hash + key.charCodeAt(i)
    }
    return hash % this.numBuckets
}

HashTable.prototype.set = function(key, value) {
    let hash = this.hash(key)
    if (typeof key !== 'string') throw new TypeError('Key must be string')
    
    if (!this.data[hash]){
        this.data[hash] = []
    }
    this.data[hash].push({key: value}) 
    this._length++
}

HashTable.prototype.get = function(key) {
    let hash = this.hash(key)
    return this.data[hash]
}

HashTable.prototype.hasKey = function(key) {
    let hash = this.hash(key)
    if (this.data.hasOwnProperty(parseInt(hash))){ 
        return true
    }else{
        return false
    } 
}

let tabla = new HashTable()
tabla.set('holi', 3)
tabla.set('adios', 9)
console.log(tabla)
console.log(tabla.length)

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
    Node,
    LinkedList,
    HashTable,
};
