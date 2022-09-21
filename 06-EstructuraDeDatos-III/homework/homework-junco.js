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
  this.value = value;
  this.left = null;
  this.right = null;
}
BinarySearchTree.prototype.size = function(){
  // caso de corte
  if(!this.left && !this.right) return 1;
  // nodos que tienen un solo hijo
  if(!this.right) return 1 + this.left.size();
  if(!this.left) return 1 + this.right.size();
  // caso default, ambos hijos
  return 1 + this.left.size() + this.right.size();
};
/*
                20
             15    25

          
 3
Global
*/
BinarySearchTree.prototype.insert = function(value){
  // comparo
  if(value > this.value){
    // derecha
    if(!this.right){
      // lo inserto
      this.right = new BinarySearchTree(value)
    }else{
      // recursion
      this.right.insert(value)
    }
  }else{
    //izquierda
    if(!this.left){
      // lo inserto
      this.left = new BinarySearchTree(value)
    }else{
      // recursion
      this.left.insert(value)
    }
  }
};

BinarySearchTree.prototype.contains = function(value){
  // caso de corte
  if(value === this.value) return true;
  if(value > this.value){
    // derecha
    if(!this.right){
      return false;
    }else{
      // recursion
      return this.right.contains(value)
    }
  }else{
    // izqierda
    if(!this.left){
      return false;
    }else{
      // recursion
      return this.left.contains(value)
    }
  }
};
BinarySearchTree.prototype.depthFirstForEach = function(cb, order){
  if(order === 'in-order' || !order){
    // izq - node - der
    this.left && this.left.depthFirstForEach(cb, order)
    cb(this.value)
    this.right && this.right.depthFirstForEach(cb, order)
  }else if(order === 'pre-order'){
    // node - izq - der
    cb(this.value)
    this.left && this.left.depthFirstForEach(cb, order)
    this.right && this.right.depthFirstForEach(cb, order)
  }else{ // post-order
    // izq - der - node
    this.left && this.left.depthFirstForEach(cb, order)
    this.right && this.right.depthFirstForEach(cb, order)
    cb(this.value)
  }
};
BinarySearchTree.prototype.breadthFirstForEach = function(cb, arr){
  if(!arr){
    var arr = [];
  }
  cb(this.value)
  // guardar hijos en el arreglo
  this.left && arr.push(this.left);
  this.right && arr.push(this.right);
  // saco el primer elemento del arr y hago recursion
  arr.length && arr.shift().breadthFirstForEach(cb, arr)
};

// arr=[  5, 17]

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};
