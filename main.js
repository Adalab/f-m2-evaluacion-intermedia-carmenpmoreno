'user strict';

console.log('Hola');

// Instrucciones juego:
//  - Juego en el que puedes introducir un número en un input y te lo compara con un número al azar del 1 al 100.
//  - Da un feedback: número introducido es demasiado alto, bajo o es el acertado
//  - Marca el número de intentos

// Programación del juego:

// CONSTANTES NECESARIAS

    // botón
    const button = document.querySelector('.button');
    // input
    const input = document.getElementById('number');
    // feedback
    const feedback = document.querySelector('.feedback');
    // contador
    const counter = document.querySelector('.counter');
    
    console.log(button, input, feedback, counter);


// Todo sucede al Al pulsar el botón: Listener sobre el botón
button.addEventListener('click', getInputandCompare)

// Función handler:
function getInputandCompare () {
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
}
    // tras cada intento, se cuenta 1 en el contador
let counterCurrent = counter.innerHTML;
counterCurrent = 0;
    
// Función de apoyo:contador de números aleatorios
function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
  }
// se genera un número al azar y se muestra en la consola
const randomNumber = getRandomNumber(100);
console.log(randomNumber);

