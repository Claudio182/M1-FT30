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

/* function LinkedList() {
    this.head = null
    this.tail = null
    this.size = 0
}

function Node(value) {
    this.data = value
    this.next = null
} */

/* LinkedList.prototype.add = function (value, tail = false) {
    // Si la lista se ncuentra vacia: crear instancia de nodo,
    // asignar referenia a head, aumentar length, devolver nodo
    if (!this.head) {
        this.head = new Node(value)
        this.tail = this.head
        this.size++
        return this.head
    }
    // Usando tail como registro de ultimo nodo
    else if (tail){
        this.tail.next = new Node(value)
        this.tail = this.tail.next
        this.size++
        return tail.next
    }
    // Busqueda ultimo nodo de forma iterativa
    let current = this.head
    while (current.next) {
        current = current.next
    }
    current.next = new Node(value)
    this.tail = current.next
    this.size++
    return current.next
} */

/* LinkedList.prototype.remove = function () {
    // Caso donde la lista se enuentre vacia
    if (!this.head) {return 'Lista vacia'} 
    // Caso donde solo existe un nodo en la lista
    if (this.size === 1) {
        let nodo = this.head
        this.head = null
        this.tail = null
        this.size--
        return nodo
    }
    // Caso iterativo
    let current = this.head
    let preCurrent
    while (current.next) {
        preCurrent = current
        current = current.next
    }
    this.tail = preCurrent
    preCurrent.next = null
    this.size--
    return current
} */

/* LinkedList.prototype.search = function (arg) {
    // Cado lista vacia
    if (!this.head) return 'Lista vacia'
    // Caso cb
    let current = this.head
    if (typeof arg === 'function') {
        while (current) {
            arg(current)? current.data: current = current.next
        }
        return null
    }
    // Caso busqueda por valor
    while(current) {
        if (current.data === arg) {
            return current.data
        }
        current = current.next
    }
    return null
} */


//Confecionar una estrutura de datos stack mediante LnkedList

function Stack () {
    this.head = null
    this.size = 0
}

function Node (value) {
    this.data = value
    this.next = null
}

Stack.prototype.add = function (value) {
    // si el stak se encuentra vacio
    if (!this.head){
        this.head = new Node(value)
        this.size++
        return this.head
    }
    let prevStack = this.head
    this.head = new Node(value)
    this.head.next = prevStack
    this.size++
}

Stack.prototype.remove = function () {
    //caso que stack se enuente vacio
    if (!this.head){
        return 'Stack vacio'
    }
    if (!this.head.next){
        let nodo = this.head
        this.head = null
        this.size--
        return nodo
    }
    let chainNode = this.head.next
    this.head.next = null
    let nodeOut = this.head
    this.head = chainNode
    this.size--
    return nodeOut
}

Stack.prototype.search = function (value) {
    if (!this.head){
        return 'Stack esta vacio'
    }
    let current = this.head
    while (current){
        if (current.data === value){
            return current.data
        }
        current = current.next
    }
    return 'No existe'
}

// Confecionar una estructura de datos Queue mediante linked list

class Queue {
    constructor(){
        this.head = null
        this.tail = null
        this.size = 0
    }

    add(value){
        if (!this.head){
            this.head = new Nodo(value)
            this.tail = this.head
            this.size++
            return this.head
        }
        let current = this.head
        while (current.next){
            current = current.next
        }
        let nodo = new Nodo(value)
        current.next = nodo
        this.tail = nodo
        this.size++
        return nodo
    }

    remove(){
        if (!this.head){
            return 'Queue vacia'
        }
        if (this.size === 1){
            let nodo = this.head
            this.head = null
            this.tail = null
            this.size--
            return nodo
        }
        let comming = this.head.next
        this.head.next = null
        let firstQueue = this.head
        this.head = comming
        this.size--
        return firstQueue
    }

    search(value){
        if (!this.head){
            return 'Queue vacia'
        }
        let current = this.head
        while (current){
            if (current.data === value){
                return current.data
            }
            current = current.next
        }
        return 'Valor no encontrado en la Queue'
    }
}
class Nodo {
    constructor(value = null){
        this.data = value
        this.next = null
    }
}

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
