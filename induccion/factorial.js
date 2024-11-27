
// n! ; n=3 => 3! = 3 * 2 * 1
// 4! = 4 * 3 * 2 * 1
// n! = n * (n-1)!


// n=3 -> 3 * [(n=2)!->2*1] = 3*2*1 = 6
// n=2 -> 2 * [(n=1)!->1] = 2*1
// n=1 -> 1

const factorial = n => { // n=1
  if(n === 0 || n === 1) {
    console.log("n:"+n+" -> "+1);
    return 1;
  }
  const resFactorial = n * factorial(n-1);
  console.log("n:"+n+" -> "+resFactorial);
  return resFactorial
}

// console.log("Valor obtenido en factorial: "+factorial(3));

const funcionWraper = (n1,n2) => {
  const funcionPrivada = (p1,p2) => {
    return p1*p2*5;
  }

  const resultado = funcionPrivada(n1,n2) + 19

  return resultado;
}

funcionPrivada(3,4)


