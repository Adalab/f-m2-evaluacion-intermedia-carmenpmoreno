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
    const inputNumber = input.value;
    console.log(inputNumber);
    // se genera un número al azar y se muestra en la consola
    const randomNumber = getRandomNumber(100);
    console.log(randomNumber);
    // se compara ese número con el del input = feedback en función de si es más alto/bajo/igual
    if ((parseInt(inputNumber)) >= randomNumber) {
        const feedbackValue = feedback.innerHTML;
        feedbackValue = 'demasiado alto';
        console.log(funcionaaa);
    }
    // tras cada intento, se cuenta 1 en el contador

}
    
// Función de apoyo:contador de números aleatorios
function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
  }
  
  // píntame en la consola un número random hasta 100;
//   console.log('> ' + getRandomNumber(100));
