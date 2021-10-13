
const aBinario = (n) => {
    let res = '';
    
    while (Math.trunc(n) != 0) {
        res = (Math.trunc(n) % 2) + res;
        n = Math.trunc(n) / 2;
        console.log(res);
        console.log(n);
    }

    return res;
}

let num = prompt('Ingrese el numero a convertir a binario');

alert( aBinario(num) );