// DONE - Configuración de mínimo y máximo.
// DONE - Cálculo del número secreto.
// DONE - Pedir número al usuario.
// DONE - Comprobar si el número es el número secreto:
//   - Si lo es, tenemos ganador!
//   - Si no lo es, damos la pista


import readline from "readline";

function calculateRandomNumber(min, max) {
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomNumber;
}

// configuramos la utilidad de node para que los datos se pidan y se muestren por consola.
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// convertir el numero que se introduzca en consola en INT
function isInt(str) {
  // returns a boolean
  return /^[0-9]+$/.test(str);
}

const isInt2 = (str) => {
  const integer = parseInt(str);
  if (Number.isNaN(integer)) {
    return false;
  } else {
    return true;
  }
};

// productor
function getNumberFromConsole() {
  const promise = new Promise((resolve, reject) => {
    // nos permite hacer una pregunta por consola al usuario
    rl.question("Introduce el número: ", (num) => {
      rl.pause();
      if (isInt(num)) {
        num = Number.parseInt(num);
        resolve(num);
      } else {
        // si el usuario mete una letra, hacemos reject
        reject("Has de introducir un número");
      }
    });
  });
  return promise;
}

async function playGame() {
  const MAX_TRIES = 10;
  const secretNumber = calculateRandomNumber(0, 100);
  let numberFromConsole;
  let counter = 0;

  do {
    try {
      counter++;
      numberFromConsole = await getNumberFromConsole();
    } catch (error) {
      console.log(error);
      process.exit(0);  // termina proceso de Node        
    }

    if (numberFromConsole === secretNumber) {
      rl.close();
      console.log("Enhorabuena maquinote. Has acertado");
    } else {
      if (numberFromConsole < secretNumber) {
        console.log("El número secreto es mayor. Prueba otra vez.");
      } else {
        console.log(" El número secreto es menor. Inténtalo otra vez!");
      }
    }

    if (counter === MAX_TRIES) {
      console.log('has alcanzado el número máximo de intentos');
    } else {
      const diff = MAX_TRIES - counter;
      console.log(`Te quedan ${diff} intentos`);
    }

  } while (numberFromConsole !== secretNumber && counter < MAX_TRIES); // condiciones de continuar jugando
}

playGame();