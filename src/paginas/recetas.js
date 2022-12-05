import React from 'react'
import '../css/dashboard.css'
import Dashmenu from '../componentes/dashmenu'
import Menudash from '../componentes/menudash'
import Receta from '../componentes/dashboardr'





function Recetas() {
  return (
    <div class='container-fluid contenedor-dashboard'>
        <div class="row contenido">
            <div class="dashboard col-2 col-md-2 col-lg-2">
                <Dashmenu />
            </div>
            <div class="dashboard-content col-10 col-md-10 col-lg-10">
                  <Menudash/>
                  <Receta/>

            </div>
        </div>
         
        
    </div>
  );
};

export default Recetas;