const carros = [
    'Ferrari',
    'Lamborghini',
    'Alfa Romeo',
    'Maserati',
    'Pagani'
];

const carros2 = carros.concat('Abarth', 'Lancia', 'Fiat');

const motos = ['Italika', 'Choper', 'Ninja', 'Supersport'];

const tienda = [...motos, ...carros, 'rin 18'];

const tienda2 = motos.concat(carros2).concat('rin 18');

console.log(carros2);
console.log(tienda2);