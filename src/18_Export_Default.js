import { carroPorNombre, carros } from './data/carros';

console.log(carros);

const marcaCarros = carros.map(i => {
    return i.marca;
});

const nombreCarros = carros.map(i => {
    return i.client.name;
});

console.log(marcaCarros);
console.log(nombreCarros);

//const carroPorNombre = carros.find(i => i.client.name === 'Alexis');
console.log('Carro por nombre: ');
console.log(carroPorNombre('Alexis'));

const carroFilter = carros.filter(i => i.client.name !== 'Alexis');

console.log(carroFilter);

const carroSome = carros.some(i => i.client.name === 'Alexis');

console.log(carroSome);