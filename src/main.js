function obtenerInfo(name = 'Alexis', apellido = 'Trejo') {
    const info = `${name} ${apellido}`;

    return info;
}

const info = obtenerInfo('Alexis', 'Santos');

console.log(info);