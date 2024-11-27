const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'BancoDB'
});

const closeConnection = () => {
  connection.end((err)=>{
    if(err)
      console.log("Errror al cerrar la conexion: ", err);
    else
      console.log("Conexión Cerrada!");
  })
}


// ORM 
connection.query('SELECT * FROM clientes WHERE nombre like ?',[""],(err, results, fields)=>{
  if(err){
    console.error("Hubo un error en query: ", err);
  }else{
    console.log("resultados: ", results);
    console.log("Campos: ", fields);
  }
  closeConnection()
})

