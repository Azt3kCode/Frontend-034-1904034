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
    inventarios: [
        {
            id: 1,
            color: 'Rojo',
            cantidad: 5,
            precio: 11000000
        },
        {
            id: 2,
            color: 'Blanco',
            cantidad: 6,
            precio: 12000000
        },
        {
            id: 3,
            color: 'Amarillo',
            cantidad: 8,
            precio: 9000000
        },
    ],
    totalInventario: function() {
        let total = 0;
        this.inventarios.forEach(inventario => {
            total = total + inventario.precio * inventario.precio;
        });
        return total;
    },
    cost: 100000000,
    saludo: function() {
        return `Hola ${this.marca.nombre} ${this.nombre}`
    }
}

// carro.nombre = 'Veneno';
carro.costo = 15000000;
console.log(carro.nombre, carro.costo);

const salu = carro.saludo();
console.log(salu);
console.log(carro.totalInventario());