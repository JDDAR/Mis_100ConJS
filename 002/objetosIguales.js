// Escribir una funcion que determine si dos objetos son iguales : -> 

function sonIguales(obj1, obj2) {
  // validamos si los onjetos son arreglos utilizando Array.isArray
  if (Array.isArray(obj1) && Array.isArray(obj2)) {
    //si lo son lo primero es recorrer cada objeto y compararlos uno por uno 
    for (let i = 0; i <= obj1.length; i++){
      //llamamos la misma funcion, pasando los elementos de cada arreglo segun su indice --recursión
      //en caso de que no sean iguales retornamos un false 
      if (!sonIguales(obj1[i], obj2[i])) {
        return false;
      }
    }
    //en caso de que no retorne un false, retornamos un true ->
    return true;
  }
  //ahora compararemos los elementos en caso de que sean objetos 
  // utilizaremos el elemento typeof para validar que los objetos son realmente objetos

  if (typeof obj1 === 'object' && typeof obj2 === 'object') {
    //obtenemos los keys de uno de los objetos con object.keys
    const keys = Object.keys(obj1);
    // validamos si los Keys son iguales o no 
    for (const key of keys) {
      if (!sonIguales(obj1[key], obj2[key])) {
        return false;
      }
    }
    return true;
  }

  //hacemos un return de una comparacion basica - en caso de que los elementpos obj1 - obj2  no sean ni objetos ni arregles se compararan como valores primitivos 
  return obj1 === obj2;

}


//en estos casos los console log retornaran true 

console.log(sonIguales(2, 2));
console.log(sonIguales([1, 2, 3], [1, 2, 3]));
console.log(sonIguales({ a: 1, b: 2 }, { a: 1, b: 2 }));
console.log(sonIguales([{ a: 1, b: 2 }], [{ a: 1, b: 2 }]));
console.log(sonIguales([{ a: [100, 200], b: 2 }], [{ a: [100, 200], b: 2 }]));
console.log(sonIguales([{ a: [100, 200], b: { x: 'ABC' } }], [{ a: [100, 200], b: { x: 'ABD' } }]));