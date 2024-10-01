// Definición de permisos

const READ_PERMISSION = 1;    // 0001
const WRITE_PERMISSION = 2;   // 0010
const EXECUTE_PERMISSION = 4; // 0100
const DELETE_PERMISSION = 8;  // 1000

let userPermissions = READ_PERMISSION | WRITE_PERMISSION | DELETE_PERMISSION; // 0001 | 0010 = 0011

if((userPermissions & READ_PERMISSION) !== 0){ // 0011 & 0001 = 1
  console.log("El usuario puede leer");
}

if((userPermissions & DELETE_PERMISSION) !== 0) { // 0011 & 1000 = 0000 
  console.log("El usuario puede eliminar");
}else 
  console.log("El usuario no tiene permisos de eliminar");

// Eliminar permisos
userPermissions = userPermissions & ~WRITE_PERMISSION; // 1011 & 1101 = 1001

if((userPermissions & WRITE_PERMISSION) !== 0) { // 1001 & 0010 = 0000 
  console.log("El usuario puede escribir");
}else 
  console.log("El usuario no tiene permisos de escribir");

// Alternar permisos 
userPermissions = userPermissions ^ DELETE_PERMISSION; // 1001 ^ 1000 = 0001 
