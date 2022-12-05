import React from 'react'
import '../css/s_dashboard.css'
import himagen from '../img/historial-imagen.svg'

function Dashboardm() {
  return (
    <div class="container-fluid contenedor-historial">
      <h3>Historia Clínica</h3>
      <div class="texto-historial d-flex align-items-center">
        <h1>Sopa Velez</h1>
        <div class="boton-historial d-flex align-items-center justify-content-center position-relative">
          <div></div>
          <p>Activo</p>
        </div>
      </div>
      <div class="d-flex justify-content-between fecha">
        <p>10/2/2022 Guayaquil</p>
        <button type="button" class="btn btn-success">Actualizar</button>
      </div>
      <div className="contenedor-cita historial-contenido d-flex jsutify-content-center align-items-center mx-auto flex-wrap">
        <div className="row col-12 col-md-4 col-lg-4 historial-usuario">
          <div class="historial-imagen d-flex justify-content-center align-items-center">
            <img class="img-fluid" src={himagen} alt="imagen" />
          </div>
          <div class="historial-texto text-center">
            <h1>Sopa Vélez</h1>
            <p>Mujer, 20 años <br />+593 9 xxxx xxxx <br /> sopavélez@gmail.com</p>
            <button type="button" class="btn btn-success">Mensaje   <i class="bi bi-chat-left-fill"></i></button>
          </div>

        </div>
        <div class="row col-12 col-md-7 col-lg-7 mx-auto">
          <div class="container-fluid">
            <div class="contenedor-cita historial-texto">
              <div class="d-flex align-items-center justify-content-between">
                <h1>Enfermedad</h1>
                <div>
                  Estado:  <span class="badge text-bg-success">Curado</span>
                </div>
              </div>
              <p>Infección de oído</p>
              <div>
                <h1>Tratamiento</h1>
                <div class="d-flex justify-content-between">
                  <p>Amoxicilina por 2 semanas</p>
                  <p>17/04/2002</p>
                </div>
              </div>
            </div>
          </div>
          <div class="container-fluid">
            <div class="contenedor-cita historial-texto">
              <div class="d-flex align-items-center justify-content-between">
                <h1>Enfermedad</h1>
                <div>
                  Estado:  <span class="badge text-bg-success">Curado</span>
                </div>
              </div>
              <p>Infección de oído</p>
              <div>
                <h1>Tratamiento</h1>
                <div class="d-flex justify-content-between">
                  <p>Amoxicilina por 2 semanas</p>
                  <p>17/04/2002</p>
                </div>
              </div>
            </div>
          </div>
          <div class="container-fluid">
            <div class="contenedor-cita historial-texto">
              <div class="d-flex align-items-center justify-content-between">
                <h1>Enfermedad</h1>
                <div>
                  Estado:  <span class="badge text-bg-success">Curado</span>
                </div>
              </div>
              <p>Infección de oído</p>
              <div>
                <h1>Tratamiento</h1>
                <div class="d-flex justify-content-between">
                  <p>Amoxicilina por 2 semanas</p>
                  <p>17/04/2002</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboardm;