import React from 'react'
import '../css/s_dashboard.css'
import whastapp from '../img/whatsapps.svg'
import cirujano from '../img/cirujano.svg'


function Horas() {
  return (
    <div class="container-fluid d-flex flex-wrap contenedor-h">
      <div class="row contenedor-horarios col-12 col-md-5 col-lg-5">
        <h1>Horarios de Atención</h1>
        <div class="d-flex flex-column justify-content-start align-items-start">
          <div>
            <button type="button" class="btn btn-success">8:00 - 8:30</button>
            <button type="button" class="btn btn-success">9:00 - 9:30</button>
          </div>
          <div class="boton-historial  d-flex align-items-center justify-content-center position-relative">
            <div></div>
            <p>Santa Elena</p>
          </div>
          <div class="boton-historial  d-flex align-items-center justify-content-center position-relative">
            <div></div>
            <p>Guayaquil</p>
          </div>
          <div class="boton-historial d-flex align-items-center justify-content-center position-relative">
            <div></div>
            <p>Milagro</p>
          </div>
          <button type="button" class="btn btn-success">10:00 - 10:30</button>
          <div class="boton-historial d-flex align-items-center justify-content-center position-relative">
            <div></div>
            <p>Cuenca</p>
          </div>
          <div class="boton-historial d-flex align-items-center justify-content-center position-relative">
            <div></div>
            <p>Quito</p>
          </div>
          <div class="d-flex align-items-center">
            <img src={whastapp} alt="whatsapp" />
            <p>593 xxx xxxx xx</p>
          </div>
        </div>
      </div>
      <img src={cirujano} alt="cirujano" class="row col-12 col-md-7 col-lg-7 contenedor-imagen"/>
      

    </div>
  )
}

export default Horas;