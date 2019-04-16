'user strict';

console.log('Hola');

// Instrucciones juego:
//  - Juego en el que puedes introducir un número en un input y te lo compara con un número al azar del 1 al 100.
//  - Da un feedback: número introducido es demasiado alto, bajo o es el acertado
//  - Marca el número de intentos

// CONSTANTES NECESARIAS
// botón
const button = document.querySelector('.button');
// input
const input = document.getElementById('number');
// feedback
const feedback = document.querySelector('.feedback');
// contador
let counter = document.querySelector('.counter');

// PONER EN MARCHA EL CONTADOR DE INTENTOS: dar un valor inicial "0" al contador
counter.innerHTML = 0;

// FUNCION DE APOYO:contador de números aleatorios
function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
  }
// se genera un número al azar y se muestra en la consola
const randomNumber = getRandomNumber(100);
console.log(randomNumber);

// PARA DAR FEEDBACK Y REGISTRAR LOS INTENTOS CON EL CONTADOR
//Listener sobre el botón
button.addEventListener('click', compareInputAndCount)

// Función handler: 
function compareInputAndCount () {
    // se accede al input.value y se muestra en consola
    const inputNumber = parseInt(input.value);
    console.log(inputNumber);
    // se compara ese número con el del input = feedback en función de si es más alto/bajo/igual
    if (inputNumber > randomNumber) {
        feedback.innerHTML = 'demasiado alto';
    }
    else if (inputNumber < randomNumber) {
        feedback.innerHTML = 'demasiado bajo';
    }
    else if (inputNumber === randomNumber) {
        feedback.innerHTML = '¡LO HAS CONSEGUIDO!';
    }
    // se añaden "1" al marcador, con cada nuevo intento
        counter.innerHTML = parseInt(counter.innerHTML) + 1;
}

    

