// Proposición original: Si un número es divisible por 6, entonces es divisible por 2

const esDivisiblePor2 = (n) => {
  return n % 2 === 0;
}

const esDivisiblePor6 = (n) => {
  return n % 6 === 0;
}

//  Prueba contrarecíproca: Si no es divisible por 2, entonces no puede ser divisble por 6
const pruebaContraReciproca = (n) => {
  if(!esDivisiblePor2(n)){
    console.log("El numero "+n+" no es divisible por 2.");
    if(!esDivisiblePor6(n)){
      console.log("Por lo tanto, el número "+n+" tampoco es divisible por 6. (Contrarecíproco demostrado)");
    }else {
      console.log("Esto es una contradicción: el número "+n+" no es divisible por 2 pero es divisible por 6.");
    }
  }else{
    console.log("El número "+n+" es divisible por 2, por lo que no podemos usar la contrarecíproca aquí.");
  }
}

pruebaContraReciproca(7) // No divisible por 2, no debe ser divisible por 6
pruebaContraReciproca(12)
pruebaContraReciproca(9)