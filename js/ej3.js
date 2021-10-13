
let num = prompt("Ingrese el numero a consultar:");

if (num == 2 || num == 3 || num == 5 || num == 7 || num == 11) {
    alert(num + ' es primo');

} else if (num % 2 == 0 || num % 3 == 0 || num % 5 == 0|| num % 7 == 0 || num % 11 == 0) {
    alert(num + ' no es primo');

} else {
    alert(num + ' es primo');

}

