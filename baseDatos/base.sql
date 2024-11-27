CREATE DATABASE IF NOT EXISTS BancoDB;
USE BancoDB;

CREATE TABLE IF NOT EXISTS Clientes (
  id_cliente INT PRIMARY KEY,
  nombre VARCHAR(50),
  ciudad VARCHAR(50)
);

INSERT INTO Clientes (id_cliente, nombre, ciudad) VALUES 
(1, 'Laura MArtinez', 'Guatemala'),
(2, 'Pedro Fernadez', 'Cuidad b'),
(3, 'Karla Gomez', 'Cuidad C'),
(4, 'Andrés Ramirz', 'Guatemala');

CREATE TABLE IF NOT EXISTS Cuentas (
  id_cuenta INT PRIMARY KEY,
  id_cliente INT,
  tipo_cuenta VARCHAR(20),
  saldo DECIMAL(10,2),
  FOREIGN KEY(id_cliente) REFERENCES Clientes(id_cliente)
);

INSERT INTO Cuentas (id_cuenta, id_cliente, tipo_cuenta, saldo) VALUES
(101, 1, 'Ahorro', 5000.00),
(102, 2, 'Corriente', 3000.00),
(103, 1, 'Corriente', 2000.00),
(104, 3, 'Ahorro', 10000.00);

