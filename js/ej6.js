
const nCifras = (num) => {
    return num.toString().length;
}

let n = prompt('Introduzca el numero que desea saber cuantas cifras tiene:');

alert(n + ' tiene ' + nCifras(n) + ' cifras');