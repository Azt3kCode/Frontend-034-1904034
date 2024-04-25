const carros = [
    {
        marca: 'Seat',
        modelo: 'Fr',
        anio: 2018,
        nombre: 'Leon',
        client: {
            name: 'Alexis',
            apellido: 'Trejo'
        }
    },
    {
        marca: 'Toyota',
        modelo: 'Corolla',
        anio: 2019,
        nombre: 'Sedán',
        client: {
            name: 'Zaira',
            apellido: 'Gómez'
        }
    },
    {
        marca: 'Ford',
        modelo: 'Fiesta',
        anio: 2020,
        nombre: 'Hatchback',
        client: {
            name: 'Renato',
            apellido: 'López'
        }
    },
    {
        marca: 'Honda',
        modelo: 'Civic',
        anio: 2017,
        nombre: 'Sedán',
        client: {
            name: 'Carolina',
            apellido: 'Martínez'
        }
    },
    {
        marca: 'Volkswagen',
        modelo: 'Golf',
        anio: 2016,
        nombre: 'Hatchback',
        client: {
            name: 'Eduardo',
            apellido: 'Rodríguez'
        }
    },
    {
        marca: 'Chevrolet',
        modelo: 'Camaro',
        anio: 2021,
        nombre: 'Deportivo',
        client: {
            name: 'Brenda',
            apellido: 'Sánchez'
        }
    }
];

console.log(carros);

const marcaCarros = carros.map(i => {
    return i.marca;
});

const nombreCarros = carros.map(i => {
    return i.client.name;
});

console.log(marcaCarros);
console.log(nombreCarros);