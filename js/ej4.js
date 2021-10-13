
const factorial = (n) => {
	let total = 1; 
	for (i = 1; i <= n; i++) {
		total = total * i; 
	}
	return total; 
}

let num = prompt('Introduzca el numero que desea conocer su factorial');

alert( factorial(num) );