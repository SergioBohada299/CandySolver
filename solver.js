const cajaDulces = [
  [5, 5, 1, 1, 6],
  [1, 8, 2, 1, 9],
  [1, 7, 3, 5, 2],
  [6, 7, 3, 5, 12],
  [32, 7, 3, 55, 2],
  [12, 27, 13, 55, 12],
  [1, 7, 3, 5, 2],
];
function resolverCandy(caja) {
  const m = caja.length;
  const n = caja[0].length;

  //Caso base
  if (m === 1) {
    return caja[0].reduce((acc, val) => acc + val, 0);
  }

  // divide el areglo
  const mitad = Math.floor(m / 2);
  const superior = caja.slice(0, mitad);
  const inferior = caja.slice(mitad);

  const maxSup = resolverCandy(superior);
  const maxInf = resolverCandy(inferior);

  // Buscar suma maxima
  let maxInter = 0;
  for (let j = 0; j < n; j++) {
    let sum = caja[mitad][j];
    for (let i = mitad - 1; i >= 0 && sum > 0; i--) {
      sum += caja[i][j];
    }
    for (let i = mitad + 1; i < m && sum > 0; i++) {
      sum += caja[i][j];
    }
    maxInter = Math.max(maxInter, sum);
  }

  // retornar maximo de las tres sumas
  return Math.max(maxSup, maxInf, maxInter);
}

let res = resolverCandy(cajaDulces);
console.log(res);
