const carro = {
    id: 1,
    nombre: 'Aventador',
    date: new Date(),
    marca: {
        id: 1,
        nombre: 'Lamborghini',
        ubicacion: 'Italia',
        age: 100
    },
    costo: 10000000,
    saludo: function() {
        return `Hola ${this.marca.nombre} ${this.nombre}`
    }
}

// carro.nombre = 'Veneno';
carro.costo = 15000000;
console.log(carro.nombre, carro.costo);

const salu = carro.saludo();
console.log(salu)