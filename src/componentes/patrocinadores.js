import React from 'react'
import devspot from '../img/DevSpot 1.svg'
import unemi from '../img/unemi.svg'
import '../css/patrocinadores.css'

function Patrocinadores() {
  return (
    <div id='patrocinadores' class="container-fluid contenedor-patrocinadores">
        <h1>Patrocinadores</h1>
        <div class="patrocinadores-logo d-flex justify-content-center flex-wrap align-items-center">
            <img class="img-fluid" src={devspot} alt="devspot" />
            <img class="img-fluid" src={unemi} alt="unemi" />
        </div>
    </div>
  );
};

export default Patrocinadores;