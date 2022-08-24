"use strict";

/*
    Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
    - size: retorna la cantidad total de nodos del árbol
    - insert: agrega un nodo en el lugar correspondiente
    - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
    - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
    - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)

    El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/

function BinarySearchTree(value) {
    this.data = value
    this.left = null
    this.right = null
}

BinarySearchTree.prototype.size = function () {
    if (! this.left && !this.rigth) {
        return 1
    }
    else if (this.left && this.right) {
        return 1 + this.left.size() + this.left.size()
    }
    else if (this.left) {
        return 1 + this.left.size()
    }
    else if (this.rigth) {
        return 1 + this.right.size()
    }
}

BinarySearchTree.prototype.insert = function (value) {
    let node = new BinarySearchTree(value)
    if (value > this.data) {
        if (!this.right) {
            this.right = node
        }else{
            this.right.insert(value)
        }
    }else{
        if (!this.left) {
            this.left = node
        }else{
            this.left.insert(value)
        }
    }
}

BinarySearchTree.prototype.contains = function(value) {
    let pointer = this
    let bool = false
    if (value === pointer.data) {
        return true
    }else{
        if (value < pointer.data) {
            if (pointer.left){
                pointer = this.left
                return pointer.contains(value)
            }else{
                return false
            }
        }else{
            if (pointer.right) {
                pointer = this.right
                return pointer.contains(value)
            }else{
                return false
            }
            
        }
    }
}

BinarySearchTree.prototype.depthFirstForEach = function(order = 'in-order'){}

BinarySearchTree.prototype.breadthFirstForEach = function() {}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
    BinarySearchTree,
};
