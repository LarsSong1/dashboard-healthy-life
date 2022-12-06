import React from 'react'
import logo from '../img/logo-gris.svg'
import '../css/header.css'
import Boton from './boton'

function Header() {
    return (
        <nav id='principal' class="navbar navbar-expand-lg p">
            <div class="contenedor-nav container-fluid">
                <a class="navbar-brand" href="#!">
                    <img src={logo} alt="logo" />
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse header-p"  id="navbarSupportedContent">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#main">Inicio</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" href="#nosotros">Sobre Nosotros</a>
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link active" href="#servicios">Servicios</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" href='#doctores'>Doctores</a>
                        </li>
                    </ul>

                </div>
                <div class="boton">
                    <ul class="navbar-nav">
                        <Boton
                        texto="AGENDAR CITA"
                        icon="bi bi-calendar-fill"
                        id="/login"
                        />
                        
                    </ul>
                </div>


            </div>
        </nav>
    )
}

export default Header;