import React from 'react'
import Boton from './boton'
import '../css/main.css'
import pacientes from '../img/pacientes.svg'



function Main() {
    return (
        <div id="main" class="container-fluid contenedor-main">
            <div class="row">
                <div class="alinear col-12 col-md-12 col-lg-6">
                    <h1>Has la diferencia dando poder a tu salud</h1>
                    <p class="main-eslogan">La medicina es la única profesión universal que en todas partes sigue los mismos métodos, actúa con los mismos objetivos y busca los mismos fines.</p>
                    <div class="main-caja d-flex justify-content-between align-items-center">
                        
                        <Boton id="#servicios"
                            texto="VER SERVICIOS"
                        />
                      
                       
                        <a href="#nosotros">Más <i class="bi bi-arrow-right"></i></a>
                    </div>
                </div>
                <div class="hero-medico col-12 col-md-12 col-lg-6">
                    <div class="pacientes">
                        <img class="img-fluid" src={pacientes} alt="pacientes" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main;