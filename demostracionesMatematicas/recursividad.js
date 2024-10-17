const funcionRecursiva = (contador) => {
  // Condición base
  if(contador == 5)
    return contador;

  // Llamda recursiva
  return funcionRecursiva(contador+1)
}

//console.log(funcionRecursiva(0));

const suma = (n) => {
  if(n <= 0){
    return 0;
  }

  console.log(n);
  return n + suma(n-1);
}

console.log(suma(5)); // Salida: (5+4+3+2+1+0 = 15)



// const funcionSinReturn = (a) => {
//   console.log("el valor de la funcion fue: ", a);
//   return a+1;
// }

// const valorFuncionSinReturn = funcionSinReturn(10)
// console.log(valorFuncionSinReturn);