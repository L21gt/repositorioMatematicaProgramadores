const condicion1 = false;
const condicion2 = false;

let a = 1
let b = 1

const resultadoLogico = condicion1 & condicion2;
// console.log(resultadoLogico);

a = b + 1

// if(a == 0 || condicion2 || (a=b++)){
//   console.log("Condición correcta");
// }else {
//   console.log("Condición incorrecta");
// }

// console.log("El resultado de a es: "+a);
// console.log("El resultado de b es: "+b);

let fruta = {
  tipo: "manzana",
  color: "rojo"
}

// ... mas codigo
// ... otras operaciones
// if(fruta !== undefined && fruta.tipo == "manzana")
//   console.log("La fruta tiene color: "+fruta.color);


class Usuario {
  constructor(nombreParam,emailParam){
    this.nombre = nombreParam
    this.email = emailParam
  }

  obtenerNombre() {
    return "El nombre especificado es: "+this.nombre
  }
}

// Usuario Roberto
console.log("Usuario Principal");
let usuarioIngreso = new Usuario("Roberto","rr@gmail.com")
console.log(usuarioIngreso.email);
console.log(usuarioIngreso.obtenerNombre());

usuarioIngreso = undefined;


if(usuarioIngreso !== undefined ){
  console.log("Correo encontrado");
}

console.log("Usuario Auxiliar");
const usuarioAuxiliar = new Usuario("Maria","mm@gmail.com");
console.log(usuarioAuxiliar.email);
console.log(usuarioAuxiliar.obtenerNombre());

const usuarios = [{
  nombre: "Juan",
  email: "jj@gmail.com",
  obtenerNombre: function() {
    return "El nombre especificado es: "+this.nombre
  }
},
{
  nombre: "Marcos",
  email: "mm@gmail.com",
  obtenerNombre: function() {
    return "El nombre especificado es: "+this.nombre
  }
}];



