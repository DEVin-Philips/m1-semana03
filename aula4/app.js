console.log('m1-s03-a4');

// mais exemplos de escopo
// let nome = 'inicializado';
// if (1) {
//   let nome = 'bloco';
// }
// function teste() {
//   let nome = 'função';
// }
// teste();
// console.log({ nome })


// Exemplo Rest
// function somaParametros(...numeros) {
//   console.log({ numeros });
//   let acumulador = 0;
//   numeros.forEach(numero => acumulador += numero);
//   return acumulador;
// }
// const resultado = somaParametros(1, 2, 3, 4, 5, 6);
// console.log({ resultado });

// Exemplo Spread
// const vetorA = [1, 2, 3];
// const vetorB = [55, ...vetorA, 66, 77];
// const vetorC = [...vetorA, ...vetorB];
// console.log(vetorA);
// console.log(vetorB);
// console.log(vetorC);

const objetoA = { a: 1, b: 2, c: 3 };
const objetoB = { b: 55, ...objetoA, c: 66, d: 77 };
//const objetoC = { ...objetoB, ...objetoA };
console.log(objetoA);
console.log(objetoB);
//console.log(objetoC);
