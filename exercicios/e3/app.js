console.log('m1-s03-e3');

function concatena(vetor1, vetor2) {
  return [...vetor1, ...vetor2];
}

// equivalente em arrowfunction
const concatenaArrow = (v1, v2) => [...v1, ...v2];

const novoArray = concatena([1, 2, 3], [4, 5, 6]);

console.log(novoArray);

// novo array deve ser [1, 2, 3, 4, 5, 6]
