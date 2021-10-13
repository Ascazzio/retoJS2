let base = 0;
let altura = 0;
let seleccion;


seleccion = prompt('Ingrese la figura del area que desea calcular: (cuadrado, triangulo o circulo)');
seleccion = seleccion.toLowerCase();

while (seleccion != 'circulo' && seleccion != 'cuadrado' && seleccion != 'triangulo') {
    seleccion = prompt('Operacion invalida, ingrese alguno de estos opciones: cuadrado, triangulo o circulo');
    seleccion = seleccion.toLowerCase();
}

switch (seleccion) {
    case 'triangulo':
        base = prompt('Ingrese la base del triangulo:');
        altura = prompt('Ingrese la altura del triangulo:');
        alert('Un triangulo de base ' + base + ' y altura: ' + altura + ' tiene de area: ' + (parseFloat(base) * parseFloat(altura) / 2));
        break;

    case 'circulo':
        base = prompt('Ingrese el radio del circulo:');
        alert('Un circulo de radio ' + base + ' tiene de area: ' + (parseFloat(base) ** 2 / 3.14159265359));
        break;

    case 'cuadrado':
        base = prompt('Ingrese el lado del cuadrado:');
        alert('Un cuadrdo de lado ' + base + ' tiene de area: ' + (parseFloat(base) ** 2));
        break;

    default:
        break;
}

