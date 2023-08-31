/* ¿que es un clousure ? 
  Una clausura o closures es una funcion que guarda referencias del estado adyacente (ámbito léxico).
  -una clusura permite acceder al ámbito de una función exterior desde una función interior 
  -en javascript las clusuras se crean cada vez que una funcion es creada. 
*/

// Ejemplo 1  CLOSURES PRACTICOS->

function makeSizer(size) {
  return function () {
    document.body.style.fontSize = `${size}px`;
  };
};

const size12 = makeSizer(12);
const size14 = makeSizer(14);
const size16 = makeSizer(16);   // -> son funciones que cambiarán el tamaño del texto de body a 12, 14 ,16 

// los conectamos de la siguiente forma 

document.getElementById("size-12").onclick = size12;
document.getElementById("size-14").onclick = size14;
document.getElementById("size-16").onclick = size16;

/* *********************************************************************************************************************** */

console.log("-----------------------------------------------------------------------------------------")
console.log("EJEMPLO2 CONTADOR")

// ** EJEMPLO 2 *
// Escribir una función clousere que -> 
// aumente un contador en 21 cada vez que la funcion se llame 

function generarContador(valor) {
  return () => valor += 1;
}

const contador = generarContador(10);

console.log(contador());

console.log(contador());

console.log(contador());

console.log(contador());

console.log(contador());

/* *********************************************************************************************************************** */

console.log("-----------------------------------------------------------------------------------------")
console.log("Ejemplo 3 EMULANDO METODOS PRIVADOS")

/* EJEMPLO 3 EMULANDO MÉTODOS PRIVADOS */
/* 
  Los Métodos pproivados no son sólo útiles para restringir el acceso al código:
  también proporcionan una poderosa manera de administrar tu espacio de nombres global 
  evitando que los métodos no esenciales embrollen(enredar, confundir) la interfaz pública de tu código 

*/

const counter = (function () {

  let privateCounter = 0;

  function changeBy(val) {
    privateCounter += val;
  }

  return {
    
    increment() {
      changeBy(1);
    },

    decrement() {
      changeBy(-1);
    },

    value() {
      return privateCounter;
    },
  };
})();

console.log(counter.value()); // 0 

counter.increment();
counter.increment();
console.log(counter.value()); // 2

counter.decrement();
console.log(counter.value()); // 1