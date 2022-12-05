import React from 'react'
import '../css/s_dashboard.css'
import Medicos from './medicos';
import medico1 from '../img/medico1.svg'
import medico2 from '../img/medico2.svg'
import medico3 from '../img/medico3.svg'
import medico4 from '../img/medico4.svg'
import ola from '../img/wave.svg'
import capsule from '../img/capsule.svg'
import lupa from '../img/lupa.svg'

function Mantenimientos() {
  return (
    <div class="container-fluid user-title">
      <h1>Sobre Healthy Life</h1>
      <p>En 2022, Healthy Life creó una sede en Milagro, en vista a la inminente demanda y ausencia de servicios medicos online de confianza esta empresa desarrolló un software con el que el paciente pueda  consultar acerca de su salud por medio de la web, garantizando asi que el tiempo de espera ante una cita sea corto.<br />
        <br />

        Gracias a esto actualmento contamos con más de 1000 clientes satisfechos y con capacidad para albergar a 6000 pacientes</p>
      <div class="contenedor-cita mantenimientos-medicos ">
        <h1>Empleados</h1>
        <div class="container-md d-flex justify-content-center flex-wrap position-relative">
          <Medicos
            medico={medico1}
            nombre="Dr. Holguin Ruiz"
            especialidad="Especialista en Traumatología"
            ola={ola}
          />

          <Medicos
            medico={medico2}
            nombre="Dra. Avilez Montalvan"
            especialidad="Especialista en Cirtugía"
            ola={ola}
          />

          <Medicos
            medico={medico3}
            nombre="Dr. Cruz Parrales"
            especialidad="Especialista en Ginecología"
            ola={ola}
          />

          <Medicos
            medico={medico4}
            nombre="Dra. Olvera Morán"
            especialidad="Espcialista en Cardiología"
            ola={ola}
          />
        </div>

      </div>

      <div class="contenedor-cita tratamiento-curso">
        <div class="d-flex justify-content-between align-items-center">
          <h1>Tratamiento en Curso</h1>
          <img class="lupa" src={lupa} alt="lupa" />
        </div>
        <div>
          <form class="d-flex justify-content-around form-cita align-items-center">
            <table class="table">
              <thead>
                <tr  class="d-flex justify-content-around">
                  <th scope="col">Tipo</th>
                  <th scope="col">Cantidad</th>
                  <th scope="col">Precio</th>
                  <th scope="col">Ver Inventario</th>
                </tr>
              </thead>
              <tbody>
                <tr  class="d-flex justify-content-between">
                  <td><img class="img-fluid" src={capsule} alt="capsule" /> Paracetamol 60mg</td>
                  <td>100</td>
                  <td>50c</td>
                  <td class="columna-i" ><button type="button" class="btn btn-success">Solicitar <i class="bi bi-cart-fill"></i></button></td>
                </tr>
                <tr  class="d-flex justify-content-between">
                  <td><img class="img-fluid" src={capsule} alt="capsule" /> Paracetamol 60mg</td>
                  <td>200</td>
                  <td>50c</td>
                  <td class="columna-i" ><button type="button" class="btn btn-success">Solicitar <i class="bi bi-cart-fill"></i></button></td>
                </tr>
                <tr class="d-flex justify-content-between">
                  <td><img class="img-fluid" src={capsule} alt="capsule" /> Paracetamol 60mg</td>
                  <td>300</td>
                  <td>50c</td>
                  <td class="columna-i"><button type="button" class="btn btn-success">Solicitar <i class="bi bi-cart-fill"></i></button></td>
                </tr>

              </tbody>
            </table>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Mantenimientos;