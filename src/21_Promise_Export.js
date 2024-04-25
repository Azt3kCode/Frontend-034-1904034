import { findCarById } from './data/carros';

findCarById(3).then((json) => {
    console.log(json);
    console.log('Realizado con exito');
}).catch((err) => {
    console.error(err);
});