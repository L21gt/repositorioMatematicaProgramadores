// Proposición original: Probar que ningún número impar es no divisible por 2.
// Suposición inicial: Asumimos lo contrario: existe un número impar que es divisible por 2

const esImpar = (n) => {
  return n % 2 !== 0;
}

const pruebaAbsurdo = (n) => {
  // Asumir que existe un número impar divisible por dos
  if(esImpar(n) && n % 2 === 0){
    console.log("Contradicción: El número "+n+" es impar y divisible por 2. Esto es imposible!");
  }else {
    console.log("No llevaría a una contradicción. El número es impar y no es divisible por 2 ");
  }
}

pruebaAbsurdo(3)