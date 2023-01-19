import React from 'react'
import '../css/s_dashboard.css'
import '../css/agenda_estilos.css'


function Agenda() {
  return (
    <div class="container-fluid contenedor-agendas">
      <h3>Agendas Medicas</h3>
      <div class="texto-historial d-flex align-items-center flex-wrap">
        <h1>Sopa Vélez</h1>
        <div class="boton-historial d-flex flex-wrap align-items-center justify-content-center position-relative">
          <div></div>
          <p>Agendar Cita</p>
        </div>
      </div>
      <div class="contenedor-cita agendas-contenido">
        <div class="container-fluid t-a">
          <div class="d-flex justify-content-between align-items-center flex-wrap a-c">
            <div class="input-group mb-3 mt-3
            ">
              <span class="input-group-text" id="basic-addon1">Especialidad</span>
              <div>
                <select class="form-select form-select-md mx-auto w-75" aria-label=".form-select-sm example">
                  <option selected>Elija una Especialidad</option>
                  <option value="1">Enfermería</option>
                  <option value="2">Diagnóstico</option>
                  <option value="3">Oncología</option>
                  <option value="2">Física Médica</option>
                  <option value="3">Medicina Nuclear</option>
                  <option value="2">Radioterapia</option>
                  <option value="3">Emergencias</option>
                  <option value="2">Traumatomología</option>
                </select>
              </div>
            </div>
            <div class="input-group mb-3 mt-3 ">
              <span class="input-group-text" id="basic-addon1">Médico</span>
              <div>
                <select class="form-select form-select-md mx-auto w-75" aria-label=".form-select-sm example">
                  <option selected>Elija un médico</option>
                  <option value="1">Dr. Holguin Ruiz</option>
                  <option value="2">Dra. Avilez Montalvan</option>
                  <option value="3">Dr Cruz Paredes</option>
                  <option value="2">Dra. Olvera Morán</option>
                  <option value="3">Dr Andrés Messi</option>
                  <option value="2">Dr. Cristiano Ronaldo</option>
                  <option value="3">Dr. Enner Valencia</option>
                </select>
              </div>
            </div>
          </div>
          <div class="input-group mb-3 mt-3">
            <span class="input-group-text" id="basic-addon1">Hora</span>
            <div>
              <select class="form-select form-select-md mx-auto w-75" aria-label=".form-select-sm example">
                <option selected>Elija una Hora</option>
                <option value="1">8:00-8:30</option>
                <option value="1">9:00-9:30</option>
                <option value="1">10:00-10:30</option>
              </select>
            </div>
          </div>
          <div class=" d-flex flex-wrap justify-content-between align-items-center a-c">
            <div class="input-group mb-3 mt-3">
              <span class="input-group-text" id="basic-addon1">Ciudad</span>
              <div>
                <select class="form-select form-select-md mx-auto w-75" aria-label=".form-select-sm example">
                  <option selected>Elija una Ciudad</option>
                  <option value="1">Santa Elena</option>
                  <option value="2">Guayaquil</option>
                  <option value="3">Milagro</option>
                  <option value="2">Cuenca</option>
                  <option value="3">Quito</option>
                </select>
              </div>
            </div>
            <div class="input-group mb-3 mt-3">
              <span class="input-group-text" id="basic-addon1">Médico</span>
              <div>
                <select class="form-select form-select-md mx-auto w-75" aria-label=".form-select-sm example">
                  <option selected>Elija un médico</option>
                  <option value="1">Dr. Holguin Ruiz</option>
                  <option value="2">Dra. Avilez Montalvan</option>
                  <option value="3">Dr Cruz Paredes</option>
                  <option value="2">Dra. Olvera Morán</option>
                  <option value="3">Dr Andrés Messi</option>
                  <option value="2">Dr. Cristiano Ronaldo</option>
                  <option value="3">Dr. Enner Valencia</option>
                </select>
              </div>
            </div>
          </div>
          <div class="d-flex flex-wrap a-c">
            <div class="input-group mb-3">
              <span class="input-group-text" id="basic-addon2">Número a contactar:</span>
              <input type="text" class="form-control" placeholder="+593" aria-label="Recipient's username" aria-describedby="basic-addon2" />
            </div>
            <div class="input-group mb-3">
              <span class="input-group-text" id="basic-addon2">Telefono Fijo:</span>
              <input type="text" class="form-control" placeholder="Número" aria-label="Recipient's username" aria-describedby="basic-addon2" />
            </div>
          </div>
          <div class="input-group mb-3 ">
            <span class="input-group-text" id="basic-addon2">Domicilio:</span>
            <input type="text" class="form-control" placeholder="Calle: Chimborazo-Fausto Fajardo Eje." aria-label="Recipient's username" aria-describedby="basic-addon2" />
          </div>
          <div class="input-group">
            <span class="input-group-text">Descripción del caso:</span>
            <textarea class="form-control" aria-label="With textarea"></textarea>
          </div>
          <div class="d-flex mt-3">
            <h2>Total:  </h2>
            <h2>$36,50</h2>
          </div>
          <div class="d-flex justify-content-end flex-wrap">
            <button type="button" class="btn btn-success mt-5 w-50">Enviar</button>
            <button type="button" class="btn btn-danger mt-5 w-50">Cancelar</button>
          </div>
        </div>


      </div>
    </div>
  )
}

export default Agenda;