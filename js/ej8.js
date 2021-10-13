
const llenarArray = (lista) => {
    for (let i = 1; i <= 10; i++) {
        lista.push(prompt('Indique el numero ' + i));
    }
}

const mostrarArray = (lista) => {
    lista.forEach(function (element, i, array) {
        console.log('indice: ' + i + ' / valor: ' + element )
    });
};

let listaN = [];

llenarArray(listaN);
mostrarArray(listaN);