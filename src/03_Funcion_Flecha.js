const obtenerInfo = (name = 'Alexis', apellido = 'Trejo') => `${name} ${apellido}`;
const sum = (a = 0, b = 0) => a + b;

const info = obtenerInfo('Alexis', 'Santos');

console.log(info);
console.log(sum(20,10));