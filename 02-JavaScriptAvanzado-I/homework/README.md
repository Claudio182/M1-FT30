
# Homework JavaScript Avanzado I

## Scope & Hoisting

Determiná que será impreso en la consola, sin ejecutar el código.

> Investiga cuál es la diferencia entre declarar una variable con `var` y directamente asignarle un valor.
//En el caso de asignar directamente un valor a una variable se va a producir una reasignación de las primeras. en el caso de no haber sido declarada se va asociar la clave/valor al objeto this
// En el caso de declarar sin el prefijo var, la variable se almacena como propiedad del objeto, por lo que la hace modificable y eliminable.

```javascript
x = 1;
var a = 5;
var b = 10;
var c = function(a, b, c) {
  var x = 10;
  console.log(x); // 10
  console.log(a); // 8
  var f = function(a, b, c) {
    b = a; 
    console.log(b); // 8
    b = c; // - b = 10
    var x = 5;
  }
  f(a,b,c);
  console.log(b); // 9
}
c(8,9,10);
console.log(b); // 10
console.log(x); // 1
```

```javascript
console.log(bar); // undefined
console.log(baz); // Error: baz no esta definido, se detiene la ejecucion del programa
foo(); // // No lega por que salta error antes (Hola!)
function foo() { console.log('Hola!'); }
var bar = 1;
baz = 2;  // no se eleva por hoisting ya que no se declara con var
```

```javascript
var instructor = "Tony";
if(true) {
    var instructor = "Franco";
}
console.log(instructor); // 'Franco'
// la particularidad de var es que se puede redeclarar sin dar error, instructor dentro de if redeclara la variabe global, ya que el alance (Scope) de var puede ser global o local dentro de funciones.
```

```javascript
var instructor = "Tony";
console.log(instructor); // 'Tony'
(function() {
   if(true) {
      var instructor = "Franco";
      console.log(instructor); // 'Franco'
   }
})();
console.log(instructor); // 'Tony'
//Una IEFS se crea, ejecuta y cierra de una vez.
// el codigo envuelto en () es considerado por JS como expresion (con un contexto local propio, o contexto de funcion)
```

```javascript
var instructor = "Tony";
let pm = "Franco";
if (true) {
    var instructor = "The Flash";
    let pm = "Reverse Flash";
    console.log(instructor); // "The Flash"
    console.log(pm); // "Reverse Flash"
}
console.log(instructor); // 'The Flash'
console.log(pm); // 'Franco'
// let tiene un scope mas limitado que var. Let limita su scope a cada nuevo bloque ({}) esto inluye condicionales y ciclos, mientras que var solo en un nuevo contexto de ejecucion de funcion.
```
### Coerción de Datos

¿Cuál crees que será el resultado de la ejecución de estas operaciones?:

```javascript
6 / "3"       // 2
"2" * "3"     // 6
4 + 5 + "px"  // '9px'
"$" + 4 + 5   // $45
"4" - 2       // 2
"4px" - 2     // NaN
7 / 0         // infinity
{}[0]         // [0]  ya que  {} es considerado un bloque vacio, no un objeto vacio

parseInt("09")// 9
5 && 2  // 2  // devuelve el ultimo valor
2 && 5  // 5
5 || 0  // true devuelve el primero que sea true de izq a der
0 || 5  // true
[3]+[3]-[10]  // [3,3] - [10]
3>2>1    // true > 1  false
[] == ![] // True
```

> Si te quedó alguna duda repasá con [este artículo](http://javascript.info/tutorial/object-conversion).


### Hoisting

¿Cuál es el output o salida en consola luego de ejecutar este código? Explicar por qué:

```javascript
function test() {
   console.log(a);  // undefined
   console.log(foo()); // 2

   var a = 1;
   function foo() {
      return 2;
   }
}
// undefined, 2  
//Undefined ya que si esta declarada la variable a, pero se encuentra mas abajo en el hilo de ejecucion, por lo que no esta definida.
// 2 ya que es un print en consola del retorno de la funcion foo(), la funcion escala por hoisting y emacenada antes del inicio de la ejecucion en este contexto.
test();
```

Y el de este código? :

```javascript
var snack = 'Meow Mix';

function getFood(food) {
    if (food) {
        var snack = 'Friskies';
        return snack;
    }
    return snack; // undefined
}
// Undefined ya que la var (cuyo scope no discrimina por bloque) snack, dentro del contexto de ejecución de la función getFood(), escala por hoisting y es almacenado su nombre y espacio en memoria, pero no declarada.
// como el argumento pasado a getFood es false, la asignacion de 'Friskies' no sucede por que el hilo de ejecucion no entra al bloque if
getFood(false);
```


### This

¿Cuál es el output o salida en consola luego de ejecutar esté código? Explicar por qué:

```javascript
var fullname = 'Juan Perez';
var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function() {
         return this.fullname;
      }
   }
};

console.log(obj.prop.getFullname()); // 'Aurelio De Rosa'

var test = obj.prop.getFullname;      

console.log(test());                 // 'Juan Perez'
// "Aurgelio De Rosa" ya que la funcion al ser ejecutada en el contexto del objeto prop, this alude a este objeto donde encuentra la propiedad fullName.
// "Juan Perez" ya que la funcion getFullName() es asignada a la variable test en el entorno global, por lo que this pasa a referenciar a este y toma como variable fullName de su mismo entorno.
```

### Event loop

Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? ¿Por qué?

```javascript
function printing() {
   console.log(1);                                   // 1
   setTimeout(function() { console.log(2); }, 1000); // 2
   setTimeout(function() { console.log(3); }, 0);    // 3
   console.log(4);                                   // 4
}
// por hilo de ejecución 1, luego ambas funciones setTimeout pasan al stack asincrono, se imprime 3 y luego de vaciar el stack imprime 3 y al final 2 por su demora de 1 seg.
printing();  // 1  4  3  2
```
