import React from 'react'
import '../css/s_dashboard.css'
import avatar from '../img/historial-imagen.svg'
import Chats from './chats'
import avatar1 from '../img/avatar1.svg'
import avatar2 from '../img/avatar2.svg'
import avatar3 from '../img/avatar3.svg'
import avatar4 from '../img/avatar4.svg'
import avatar5 from '../img/avatar5.svg'
import avatar6 from '../img/avatar6.svg'
import avatar7 from '../img/avatar7.svg'
import avatar8 from '../img/avatar8.svg'
import avatar9 from '../img/avatar9.svg'
import avatar10 from '../img/avatar10.svg'
import avatar11 from '../img/avatar11.svg'



function Consulta() {
  return (
    <div class="container-fluid contenedor-consulta">
      <h3>Interactua con paciente y especialistas </h3>
      <h1>Bienvenido a nuestra comunidad Sopa</h1>
      <div class="d-flex flex-wrap">
        <div class="row col-12 col-md-8 col-lg-8">
          <div class="contenedor-cita cita-contenedor">
            <div class="text-center d-flex align-items-center justify-content-start h-100 flex-wrap c-i">
              <div class="info-estado">
                <h1>Estado</h1>
                <img src={avatar} alt="avatar" />
              </div>
              <div class="info-consultas">
                <h1>Sopa Vélez</h1>
                <p>Mujer, 22 años <br />+593 xx xxx xxx <br />sopavélez@gmail.com</p>
                <button type="button" class="btn btn-success">Chatear</button>
              </div>
            </div>

          </div>
          <div class="contenedor-cita chat-contenedor">
            <div class="container-fluid">
              <Chats
                img={avatar1}
                nombre="María"
                oficio="Paciente"
                boton="CHATEAR"
              />
              <Chats
                img={avatar2}
                nombre="Lancelot"
                oficio="Paciente"
                boton="CHATEAR"
              />
              <Chats
                img={avatar3}
                nombre="Daniel"
                oficio="Doctor"
                boton="CHATEAR"
              />
              <Chats
                img={avatar4}
                nombre="Wyatt"
                oficio="Paciente"
                boton="CHATEAR"
              />
              <Chats
                img={avatar5}
                nombre="Meylin"
                oficio="Doctora"
                boton="CHATEAR"
              />
            </div>
          </div>
        </div>
        <div class="row contenedor-cita col-12 col-md-4 col-lg-4 mx-auto contenedor-activos text-center">
         <h5 class="mt-3">Activos Recientemente</h5>
         <Chats 
         img={avatar1}
         oficio="Hace 2min"
         boton="Mensaje"
         />
         <Chats 
         img={avatar6}
         oficio="Hace 5min"
         boton="Mensaje"
         />
         <Chats 
         img={avatar7}
         oficio="Hace 8min"
         boton="Mensaje"
         />
         <Chats 
         img={avatar8}
         oficio="Hace 10min"
         boton="Mensaje"
         />
         <Chats 
         img={avatar9}
         oficio="Hace 35min"
         boton="Mensaje"
         />
         <Chats 
         img={avatar4}
         oficio="Hace 40min"
         boton="Mensaje"
         />
         <Chats 
         img={avatar10}
         oficio="Hace 1h"
        boton="Mensaje"
         />
         <Chats 
         img={avatar11}
         oficio="Hace 2h"
         boton="Mensaje"
         />
        </div>
      </div>
    </div>
  )
}

export default Consulta;