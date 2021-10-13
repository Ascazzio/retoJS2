
const convertir = (cantidad, moneda) => {
    
    switch (moneda) {
        case 'libras':
            alert(cantidad + ' Euros equivalen a ' + (cantidad * 0.86) + ' Libras');
            break;

        case 'dolares':
            alert(cantidad + ' Euros equivalen a ' + (cantidad * 1.28611) + ' Dolares');
            break;

        case 'yenes':
            alert(cantidad + ' Euros equivalen a ' + (cantidad * 129.852) + ' Yenes');
            break;
    
        default:
            break;
    }
}

let cantidad = prompt('Cuanto desea convertir? (expresados en Euros)');
let moneda = prompt('A cual moneda desea cambiar? (Libras, Dolares o Yenes)');
moneda = moneda.toLowerCase();

while (moneda != 'libras' && moneda != 'yenes' && moneda != 'dolares') {
    moneda = prompt('Moneda invalida, escriba alguna de estos opciones: ');
    moneda = moneda.toLowerCase();
}

convertir(cantidad, moneda);