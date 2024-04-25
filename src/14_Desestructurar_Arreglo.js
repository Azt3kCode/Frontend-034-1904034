const alumnos = ['Alexis', 'Zaira', 'Renato', 'Carolina', 'Eduardo', 'Brenda'];

const [nom1, nom2, nom3, ...nombres] = alumnos;

console.log(nom1, nom2, nom3, ...nombres);