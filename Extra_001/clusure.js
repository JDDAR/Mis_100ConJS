
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
console.log("EMULANDO METODOS PRIVADOS")
console.log("Ejemplo1")

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

/* *********************************************************************************************************************** */

console.log("-----------------------------------------------------------------------------------------")
console.log("Ejemplo 4")

const makeCounter = function () {
  let privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }
  return {
    increment() {
      changeBy(1);
    },
    decrement() {
      changeBy(-1)
    },
    value() {
      return privateCounter;
    },
  };
};

const counter1 = makeCounter();
const counter2 = makeCounter();

console.log(counter1.value()); // 0

counter1.increment();
counter1.increment();
console.log(counter1.value()); //

counter1.decrement();
console.log(counter1.value()); // 1
console.log(counter2.value()); //0

/* *********************************************************************************************************************** */

console.log("-----------------------------------------------------------------------------------------")
console.log("CADENA DE ALCANCE DEL CLOSURE")
console.log("Ejemplo1")

// EJEMPLO 1 
/*
  Un error comín es no darse cuenta de que en el caso de que la función externa sea a su vez una función anidada, 
  el acceseo al ámbito de la función externa incluye el ámbito de la función externa, creando asi una cadena de ámbitos de finciones 
  Para demostarlo así una cadena de ámbitos de funciones. para demostarlo esta el siguiente ejemplo: 
*/

// Ambito global 
const e = 10;

function sum(a) {
  return function (b) {
    return function (c) {
      // ámbito de funciones externas
      return function (d) {
        // ámbito local 
        return a + b + c + d + e;
      };
    };
  };
}

console.log(sum(1)(2)(3)(4)); // 20 -> cada uno de los parametros que se proporcionan, se asigna a cada funcion anidada en sum ***

console.log("-----------------------------------------------------------------------------------------")
console.log("Ejemplo2")

// Tambien sin funciones anonimas  

const sum2 = sum(1);
const sum3 = sum2(2);
const sum4 = sum3(3);
const result = sum4(4);

console.log(result);

// /* *********************************************************************************************************************** */
// console.log("Ejemplo 3 closures sobre modulos ");

// import { getX, setX } from "./mymodule.js";


// console.log(getX()); // 5 
// setX(6);
// console.log(getX()); //6 
