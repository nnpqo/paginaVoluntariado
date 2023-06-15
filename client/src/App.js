import './App.css';
import { useState } from 'react';
import Axios from 'axios';
import { Cabecera } from './componentes/Cabecera';

function App() {

  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [tipoPublicacion, setTipoPublicacion] = useState("");
  const [cantidadVoluntarios, setCantidadVoluntarios] = useState(0);
  
  const add = () => {
    Axios.post("http://localhost:3001/create", {
      nombrePublicacion: nombre,
      descripcion: descripcion,
      tipoPublicacion: tipoPublicacion,
      cantidadVoluntarios: cantidadVoluntarios
    }).then(() => {
      alert("Publicación publicada");
    });
  };

  return (
    <div className="App">
      <div>
        <Cabecera/>
      </div>
      <div className='titulo2'>
        <label>NUEVA PUBLICACION</label>
      </div>
      <div className='contenidoPrincipal'>
      <div className='datos'>
        <label className='argumento'>Nombre:</label>
        <label className='argumento'>Descripcion:</label>
        <label className='argumento'>Tipo de publicacion:</label>
        <label className='argumento'>Cantidad de voluntarios:</label>
      </div>
      <div className='inputs'>
      <input 
          onChange={(event)=>{
            setNombre(event.target.value);
          }}
          type='text'/>
          <input 
          onChange={(event)=>{
            setDescripcion(event.target.value);
          }}
          type='text'/>
          <input 
          onChange={(event)=>{
            setTipoPublicacion(event.target.value);
          }}
          type='text'></input>
          <input 
          onChange={(event)=>{
            setCantidadVoluntarios(event.target.value);
          }}
          type='number'/>
      </div>
      </div>
      <div className='botones3'>
      <button className="botonPublicar" onClick={add}>Publicar</button>
      </div>
    </div>
  );
}

export default App;
