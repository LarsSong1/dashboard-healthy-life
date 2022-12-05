import React from 'react'
import '../css/dashboard.css'
import Dashmenu from '../componentes/dashmenu'
import Menudash from '../componentes/menudash'
import Agenda from '../componentes/dashboarda'





function Agendas() {
  return (
    <div class='container-fluid contenedor-dashboard'>
        <div class="row contenido">
            <div class="dashboard col-2 col-md-2 col-lg-2">
                <Dashmenu />
            </div>
            <div class="dashboard-content col-10 col-md-10 col-lg-10">
                  <Menudash/>
                  <Agenda/>

            </div>
        </div>
         
        
    </div>
  );
};

export default Agendas;