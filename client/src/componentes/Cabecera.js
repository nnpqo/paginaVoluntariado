import "../estilos/cabecera.css";
import logo from "../imagenes/logo.png"

export const Cabecera = (props) => {
  return (
    <div className="cabecera">
      <div>
      <img className='imagenLogo' src={logo}></img>
      </div>
      <div className="contenido">
      <div className="titulo">
        <label className="titulo1">GRUPO ESPECIAL DE OPERACIONES DE SALVAMIENTO</label>
      </div>
        <div className="botones">
            <button className="botonCabecera1">
              ANIADIR VOLUNTARIO
            </button>
            <button className="botonCabecera">
              PUBLICAR
            </button>
            <button className="botonCabecera">
              VOLUNTARIOS
            </button>
        </div>
      </div>
    </div>
  );
};
