const numAleatorio = (min, max) => {
    return Math.floor(Math.random() * (parseInt(max) - parseInt(min) + 1) ) + parseInt(min);
  }

let min = prompt('Ingrese el minimo para el numero aleatorio');
let max = prompt('Ingrese el maximo para el numero aleatorio');

if (min > max) {
    let temp;
    temp = min;     //Por si el usuario se confunde
    min = max;
    max = temp;
}

alert('El numero es: ' + numAleatorio(min, max));

