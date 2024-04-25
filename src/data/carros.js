const carros = [
    {
        id: 1,
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
        id: 2,
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
        id: 3,
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
        id: 4,
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
        id: 5,
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
        id: 6,
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

const carroPorNombre = (nombreCliente) => {
    return carros.find(i => i.client.name === nombreCliente);
}

const carroPorId = () => {
    return carros.filter(i => i.id !== 1); 
}

const findCarById = (id) => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            const test = carroPorId(2);
            
            if (test) {
                resolve(test);
            } else {
                reject('Error> No se encontró el carro');
            }
        }, 3000);
    });

    return promise;
}

export {
    carros,
    carroPorNombre,
    carroPorId,
    findCarById
}