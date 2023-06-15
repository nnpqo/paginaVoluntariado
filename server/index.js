const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "database_app"
});

app.post("/create", (req, res) => {
    const nombrePublicacion = req.body.nombrePublicacion;
    const descripcion = req.body.descripcion;
    const tipoPublicacion = req.body.tipoPublicacion;
    const cantidadVoluntarios = req.body.cantidadVoluntarios;

    db.query('INSERT INTO publicacion(nombrePublicacion, descripcion, tipoPublicacion, cantidadVoluntarios) VALUES (?,?,?,?)', [nombrePublicacion, descripcion, tipoPublicacion, cantidadVoluntarios], (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Publicación registrada con éxito");
      }
    });
  });

 app.listen(3001,()=>{
    console.log("Corriendo en el puerto 3001")
 })