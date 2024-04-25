const carros = [
    'Ferrari',
    'Lamborghini',
    'Alfa Romeo',
    'Maserati',
    'Pagani'
];

carros.push('Abarth', 'Lancia', 'Fiat');

//console.log(carros);

const num = [10, 5, 6, 12, 22];

num.push(332, 532, 545);

//console.log(num);

carros.forEach(carro => console.log(carro));

for ( const car of carros ) {
    console.log(car);
}

for (let i = 0; i < carros.length; i++) {
    const elm = carros[i];
    console.log(i + carros[i]);
}
