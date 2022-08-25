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

BinarySearchTree.prototype.insert = function(value) {
    
    if (value < this.data) {
        if (!this.left) {
            this.left = new BinarySearchTree(value)
        }else{
            this.left.insert(value)
        }
    }else{
        if (!this.right) {
            this.right = new BinarySearchTree(value)
        }else{
            this.right.insert(value)
        }
    }
}

BinarySearchTree.prototype.contains = function(value) {

    if (value === this.data) {
        return true

    }else{

        if (value < this.data) {
            if (!this.left){
                return false
            }else{
                return this.contains(value)
            }
        }else{
            if (!this.right) {
                return false
            }else{
                return this.contains(value)
            }
            
        }

    }
}

BinarySearchTree.prototype.depthFirstForEach = function(CallBack, order ='in-order'){
    if (order === 'pre-order') {

        CallBack()
        
        if (this.left) {
            this.left.depthFirstForEach(CallBack, order)
        }
        else if (this.right) {
            this.right.depthFirstForEach(CallBack, order)
        }
    }
    if (order === 'post-order') {
        if (this.left) {
            this.left.depthFirstForEach(CallBack, order)
        }
        if (this. right){
            this.right.depthFirstForEach(CallBack, order)
        }

        CallBack()
    }
    if (order === 'in-order') {
        if (this.left) {
            this.left.depthFirstForEach(CallBack, order)
        }
        CallBack()

        if (this.right) {
            this.right.depthFirstForEach(CallBack, order)
        }
    }
}

BinarySearchTree.prototype.breadthFirstForEach = function() {}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
    BinarySearchTree,
};
