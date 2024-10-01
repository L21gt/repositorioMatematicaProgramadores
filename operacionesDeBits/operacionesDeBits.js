let a = 5; // 101 = 1*2^0+0*2^1+1*2^2 = 5
const b = 3; // 011

const resultadoAnd = a & b; // 001 -> (1*2^0+0*2^1+0*2^2) = 1
console.log("Resultado AND: "+resultadoAnd.toString(2));

const resultadoOr = a | b; // 111 = 7
console.log("Resultado OR: "+resultadoOr.toString(2));

const resultadoXor = a ^ b; // 110 = 6
console.log("Resultado XOR: "+resultadoXor.toString(2)); 

// a = 5 -> 00000000 00000000 00000000 00000101
const resultadoNota = ~a; // 11111111 11111111 11111111 11111010
console.log("Resultado NOT: "+resultadoNota);

// Complemento a 2
// 11111111 11111111 11111111 11111010 
// Invertir los bits más 1:
// 00000000 00000000 00000000 00000101 + 1 = 00000000 00000000 00000000 00000110 = 6 
//   1
//  101
//    1
//+_______
//  110


// a = 5 = 101

const resultadoCorrimientoIzq = a << 2; // 10100 = (1*2^2+1*2^4) = 20
console.log("Corrimiento izquierda: ",resultadoCorrimientoIzq.toString(2));

const resultadoCorrimientoDer = a >> 2; // 101 >> 2 = 001
console.log("Corrimiento derecha: ", resultadoCorrimientoDer);

const aSigno = -5; // 11111111 11111111 11111111 11111101
const resultadoCorrimientoDerSigno = aSigno >> 2;
console.log("resultadoCorrimientoDerSigno: ",resultadoCorrimientoDerSigno);

