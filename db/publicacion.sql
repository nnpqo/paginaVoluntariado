CREATE DATABASE database_app;

USE database_app;

CREATE TABLE publicacion (
  IDPublicacion INT AUTO_INCREMENT PRIMARY KEY,
  nombrePublicacion VARCHAR(30),
  descripcion VARCHAR(250),
  tipoPublicacion VARCHAR(50),
  cantidadVoluntarios INT
);
