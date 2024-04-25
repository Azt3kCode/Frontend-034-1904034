const carro = {
    id: 1,
    nombre: 'Aventador',
    date: new Date(),
    marca: 'Lamborghini',
    costo: 10000000
}

carro.nombre = 'Veneno';
carro.costo = 15000000;
console.log(carro.nombre, carro.costo);