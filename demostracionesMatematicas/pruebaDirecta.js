const mcd = (a,b) => {
  while(b!== 0){
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

// console.log("El mcd de 48 y 18 es: "+mcd(48,18));
// console.log("El mcd de 270 y 192 es: "+mcd(270,192));

const mcdRecursiva = (a, b) => {
  let temp = b
  b = a % b;
  a = temp;
  if(b === 0){
    return a;
  }else
    return mcdRecursiva(a,b)
}

console.log("MCD Recursiva: ", mcdRecursiva(48,18));


let funcionRecursiva = (a) => {
  if(a == 2)
    return "Hola: "+a;
  else
    return funcionRecursiva(a+1)
}


console.log(funcionRecursiva(0));

// const suma = (a) => {
//   const numero = a;
//   console.log("El número es: ", a);
//   suma(a+1); // Stack Overflow (Desbordamiento de la pila de llamadas)
// }

// console.log("El numero final es: ", suma(1));