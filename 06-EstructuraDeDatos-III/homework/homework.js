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
    this.value = value
    this.left = null
    this.right = null
}

BinarySearchTree.prototype.size = function () {
    if (!this.left && !this.right) {
        return 1
    }
    else if (this.left && this.right) {
        return 1 + this.left.size() + this.right.size()
    }
    else if (this.left && !this.right) {
        return 1 + this.left.size()
    }
    else if (!this.left && this.right) {
        return 1 + this.right.size()
    }
}

BinarySearchTree.prototype.insert = function (val) {
    if (val > this.value) {
        if (!this.right) {
            this.right = new BinarySearchTree(val)
        }
        else {
            this.right.insert(val)
        }

    }
    else {
        if (!this.left) {
            this.left = new BinarySearchTree(val)
        }
        else {
            this.left.insert(val)
        }
    }
}

BinarySearchTree.prototype.contains = function (val) {
    if (val === this.value) return true
    else {
        if (val > this.value) {
            if (!this.right) {
                return false
            }
            else {
                return this.right.contains(val)
            }
        }
        else {
            if (!this.left) {
                return false
            }
            else {
                return this.left.contains(val)
            }
        }
    }
}

BinarySearchTree.prototype.depthFirstForEach = function (cb, order = 'in-order') {
    switch (order) {
        case 'pre-order':
            cb(this.value)
            this.left && this.left.depthFirstForEach(cb, order)
            this.right && this.right.depthFirstForEach(cb, order)
            break
        case 'in-order':
            this.left && this.left.depthFirstForEach(cb, order)
            cb(this.value)
            this.right && this.right.depthFirstForEach(cb, order)
            break
        case 'post-order':
            this.left && this.left.depthFirstForEach(cb, order)
            this.right && this.right.depthFirstForEach(cb, order)
            cb(this.value)
            break
    }
}

BinarySearchTree.prototype.breadthFirstForEach = function (cb, arr = []) {
    cb(this.value)
    this.left && arr.push(this.left)
    this.right && arr.push(this.right)
    arr.length && arr.shift().breadthFirstForEach(cb, arr)
    
}
// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
    BinarySearchTree,
};
