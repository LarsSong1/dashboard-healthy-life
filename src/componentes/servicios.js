import React from 'react'
import Caja from './caja';
import medicamentos from '../img/Group 21.svg'
import diagnosticos from '../img/Group 20.svg'
import consultas from '../img/Group 41.svg'
import domicilio from '../img/Group 15.svg'
import '../css/servicios.css'

function Servicios() {
  return (
    <div id="servicios" class="container-fluid contenedor-servicios d-flex justify-content-center align-items-center flex-column">
        <div class="row">
            <div class="servicios-texto d-flex justify-content-between text-center flex-wrap">
                <h1>Sirviendo a tu salud como prioridad</h1>
                <p>Ofrecemos los siguientes servicios, <br /> brindamos soporte profesional y de calidad <br /> gracias a nuestros medicos profesionales</p>
            </div>
        </div>
        <div class="row">
            <div class="contenedor-cajas d-flex flex-wrap justify-content-center align-items-center">
                
                <Caja 
                imagen={medicamentos}
                texto="Medicamentos"
               

                />

                <Caja 
                imagen={diagnosticos}
                texto="Diagnosticos"
                
                />
                <Caja 
                imagen={consultas}
                texto="Consultas"
                
                />
                <Caja 
                imagen={domicilio}
                texto="A Domicilio"
                
                />
                
            </div>
        </div>
    </div>
  );
};

export default Servicios;