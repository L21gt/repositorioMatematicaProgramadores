// const arreglo = new Array();
// arreglo.push(1)
// const arreglo2 = [1,2,3,4]


// const emptySet = new Set(); // Set vacío
// const setFromArray = new Set([1,2,3,3])

// console.log("emptySet: ", emptySet);
// console.log("setFromArray: ", setFromArray);

// const mySet = new Set([1,2,3])
// // Metodos y propiedades de Set
// mySet.add(4)
// console.log("mySet: ", mySet);

// mySet.delete(3)

// console.log("mySet despues de delete: ", mySet);

// const contieneCuatro = mySet.has(4)

// console.log("contieneCuatro: ",contieneCuatro);

// // mySet.clear()
// // console.log("Clear set: ", mySet);

// const cantidadElementos = mySet.size
// console.log("Mi set tiene: ", cantidadElementos);

// for(let value of mySet){
//   console.log(value);
// }

// mySet.forEach(value => console.log("forEach", value))

// // Convertir un Set a un Array
// const myArray = [...mySet]
// console.log("Mi Arreglo apartir de un set: ", myArray);


const A = new Set([1,2,3])
const B = new Set([3,4,5])

// Unión
const arregloAB = [...A, ...B] // [1,2,3,3,4,5]
const union = new Set([...A,...B]) // [1,2,3,3,4,5] = [1,2,3,4,5]

console.log("arregloAB: ",arregloAB);
console.log("Union: ",union);

//Intersección
const interseccion = new Set([...A].filter(x => B.has(x)))

console.log("Interseccion: ", interseccion);

// Diferencia
const differnce = new Set([...B].filter(x => !A.has(x)))
console.log("Diferencia: ",differnce);

// Diferencia simétrica
const diffSimetrica = new Set([...A,...B].filter(x => !A.has(x) || !B.has(x)))
console.log("Diferencia Simetrica: ", diffSimetrica);

// Subconjuntos
const isSubSet = (setA,setB) => {
  return [...setA].every(x => setB.has(x))
}

console.log("isSubSet: ",isSubSet(new Set([2,4]), A));

// // Filter

// const arreglo = [1,2,3,4]
// arreglo.forEach(value=>{
//   console.log("Valor: ", value);
// })

// const arregloFiltrado = arreglo.filter(value => value <= 3)

// console.log("arregloFiltrado: ", arregloFiltrado);

// Spread operator:

// const arregloA = [1,2,3]
// const arregloB = [4,5,6]
// const arregloSubArreglos = [arregloA, arregloB] // [[1,2,3],[4,5,6]]
// const arregloNumeros = [...arregloA, ...arregloB] // [1,2,3,4,5,6]

// console.log("SubArreglo: ", arregloSubArreglos);
// console.log("ArregloNumeros: ", arregloNumeros);

// const alumno = { nombre: "Haroldo", calificacion: 40}
// const caracteristica = {materia: "Programacion"}

// const resultadoAlumno = {...alumno, ...caracteristica}

// console.log("ResultaodAlumno: ", resultadoAlumno);

// const nuevoAlumno = {...alumno, nombre: "Pedro"}
// console.log("nuevoAlumno: ", nuevoAlumno);

// function suma(a,b,c){
//   return a+b+c;
// }

// const valores = [10,20,30]
// console.log("La suma es: ",suma(...valores));