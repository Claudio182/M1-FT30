// N = length el array
var max = array[0]; // 1 pasos
for( var i = 0; i <= array.lenght; i++){ //  N veces
	if( array[i] > max)	{ // 1
		max = array[i]; // 1
	}
}
console.log(max); // 1

// 1 + N * 2 + 1
// 2 + 2 N
// O(N)

// N = length el array	
for( var i = 0; i <= array.lenght; i++){ // N veces
    for( var j = 0; j <= array.lenght; j++){ // N veces
      if(array[i] === array[j]){ // 1 paso
        return true; // 1paso
      }
     }
  };

//    [1, 2 , 3, 4]
//               i
//               j

// N * N * 2
// N ** 2 * 2
// O(N**2)

function sumArray(array, n){
    for (let i = 0; i < array.length; i++) { // N veces
        for (let j = 0; j < array.length; j++) { // N veces
            if(array[i] + array[j] === n){ // 1 paso
                return true; // 1 paso
            }
        }        
    }
    return false; // 1 paso
}
  // [1,  2,  3,  4,  5,  6,  7,  8,  9,  10]
//             i
//       j
// O(N**2)
	
function sumArray(array, n) {
    var fin = array.length - 1;
    var ini = 0;
    while (ini < fin) {
      var suma = array[ini] + array[fin];
      if( suma === n) return true;
      if( suma > n) fin = fin - 1;
      if( suma < n) ini = ini + 1;
    }
    return false;
  };

  // [1,  2,  3,  4,  5,  6,  7,  8,  9,  10]
//                    i
//                    f
 // O(N)