const esPar = (num) => {
  return (num & 1) === 0;
   // 000000000 000000000 000000000 00000001
   // 000000000 000000000 000000000 00000111
}

console.log(esPar(4));
console.log(esPar(7));
