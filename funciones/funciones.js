// Funciones básica (Declara)
function f(x){ // f(x)=2x
  return 2*x;
}

const codominio = f(1)

console.log(codominio);

// Función anónima
const multiplicar = function(a,b) {
  return a*b;
}

console.log(multiplicar(2,3));

const dividir = (a,b) => a / b;

console.log(dividir(10,2));

// Función con parámetros predeterminados

function saludar(nombre="default"){
  return "Hola "+nombre+"!"; 
}

console.log("Usando funcion con parametros predeterminados");
console.log(saludar());