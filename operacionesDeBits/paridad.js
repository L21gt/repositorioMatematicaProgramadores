// |2^2 | 2^1 | 2^0|
// | 1  |  1  | 1  |
// | 0  |  0  | 1  | -> 2^0
//&___________________
// | 0  |  0  | 1  |  

const esPar = num => {
  return (num & 1) === 0; // 2^0 = 1
}

const esParAlternativa = num => num % 2 === 0

console.log(esPar(4)); // true

console.log(esPar(7)); // false

