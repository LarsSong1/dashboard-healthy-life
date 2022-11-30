import React from 'react'
import '../css/especialidadescaja.css'

function Especialidadescaja({img, texto}) {
  return (
    <div class="especialidades-caja d-flex flex-wrap flex-column justify-content-center align-items-center">
        <img src={img} alt="imagen" />
        <h2>{texto}</h2>
    </div>
  );
};

export default Especialidadescaja;