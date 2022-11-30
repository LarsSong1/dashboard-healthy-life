import React from 'react'
import '../css/especialistas.css'
import Medicos from './medicos';
import medico1 from '../img/medico1.svg'
import medico2 from '../img/medico2.svg'
import medico3 from '../img/medico3.svg'
import medico4 from '../img/medico4.svg'
import ola from '../img/wave.svg'

function Especialistas() {
  return (
    <div id="doctores" class="container-fluid  contenedor-especialistas">
        <div class="row text-center especialistas-texto">
            <h1>Tenemos Grandes <br /> Especialistas</h1>
            <p>El arte de la medicina consiste en mantener al paciente en buen estado de ánimo mientras la naturaleza le va curando. <br /> En Healthy life te garantizamos eso y muchos mas con nuestros mejores médicos.</p>
        </div>
        <div class="row d-flex justify-content-center align-items-center">
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
  );
};

export default Especialistas;