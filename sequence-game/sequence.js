/*
CÓMO SE JUEGA
- un tablero de 3x3 con números aleatorios.
- tenemos que adivinar los números en orden del 1 al 9.
- si fallamos, tenemos que volver a empezar a adivinar los números desde el principio.
- si acertamos el número, se quedará visible en el tablero y tendremos que acertar el siguiente número.
*/

/*
- DONE definir un tablero con los números desordenados.
- DONE definir un tablero con lo q va a ver el usuario.
- DONE pedir coordenadas por consola
- DONE Enseñar el tablero con las soluciones al usuario durante 1 segundo.
- DONE Mostrar al usuario el tablero de la incógnitas.
- DONE Comprobar si en las coordenadas que ha introducido el usuario está el número a acertar.
- Gestionar acierto
  - Mostrar el tablero al usuario con los números acertados
  - 
*/
import { resolve } from "path";
import readline from "readline";
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = [
  [6, 2, 5],
  [1, 3, 7],
  [9, 8, 4],
];
const matrix = [
  ["?", "?", "?"],
  ["?", "?", "?"],
  ["?", "?", "?"],
];

function getCoordinatesFromConsole() {
  const promise = new Promise((resolve, reject) => {
    rl.question("Introduce el una coordenada en formato X,Y: ", (coords) => {
      rl.pause();
      const coordsArray = coords.split(",");
      resolve({
        row: parseInt(coordsArray[0]),
        column: parseInt(coordsArray[1]),
      });
    });
  });

  return promise;
}

console.table(solution);

setTimeout(async () => {
  console.clear();
  
  console.table(matrix)
  const coords = await getCoordinatesFromConsole();
  
  const x = coords.row;
  const y = coords.column;
  
  let guessNumber = 1;

  if (solution[x][y] === guessNumber) {
    // acertamos
    console.log('acierto');
    guessNumber = guessNumber + 1;
  } else {
    // fallo
    console.log('fallo');
    guessNumber = 1;
  }
}, 2500);


/*
TAREA
- el tablero de solution debe rellenarse aleatoriamente.
- validar que las coordenadas que mete el usuario están dentro de las dimensiones del tablero.
*/
