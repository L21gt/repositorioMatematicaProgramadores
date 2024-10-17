const cifrarXOR = (mensaje, clave) => {
  let resultado = []
  for (let i=0; i< mensaje.length; i++) {
    const charEncript = mensaje.charCodeAt(i) ^ clave // 72 ^ 123
    resultado.push(charEncript)
    console.log(mensaje[i]+": "+mensaje.charCodeAt(i));
  }
  console.log(resultado); // [ 51, 20, 23, 26 ] -> [52, 21, 24, 27]
  return resultado.map((c)=>{
    return String.fromCharCode(c)
  }).join('')
}

// ["a","b","c"].join(',') -> "abc"

let mensaje = "Hola"
let clave = 123;
let cifrado = cifrarXOR(mensaje,clave)

console.log("Mensaje cifrado: '"+cifrado+"'");

const descifrado = cifrarXOR(cifrado,clave)

console.log("El mensaje encontrado es: "+descifrado);


// const funcion = (accion) => {
//   console.log("Empezando a ejecutar su funcion: ");
//   console.log(accion);
//   const mensaje = accion("Micke")
//   console.log(mensaje);
// }

// function mostarMensaje(nombre) {
//   return "saludos a "+nombre
// }

// funcion(mostarMensaje)