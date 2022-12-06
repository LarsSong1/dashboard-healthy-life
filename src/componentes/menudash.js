import React from 'react'
import '../css/menudash.css'
import avatar from '../img/Sopa.svg'
import campana from '../img/campana.svg'
import {Link} from 'react-router-dom'

function Menudash() {
    return (
        <nav class="navbar navbar-expand-lg menu-dash mt-3">
            <div class="container-fluid contenedor-menu">
                <form class="d-flex position-relative" role="search">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button class="btn btn-search position-absolute" type="submit"><i class="bi bi-search"></i></button>
                </form>
                <button class="navbar-toggler mt-4" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <Link class="nav-link active" aria-current="page" to="/dashboard/">Dashboard</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link active" aria-current="page" to="/mantenimiento">Mantenimientos</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link active" aria-current="page" to="/historia-clinica">Historia Clínica</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link active" aria-current="page" to="/horarios">Horarios</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link active" aria-current="page" to="/agendas">Agendas</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link active" aria-current="page" to="/recetas">Recetas</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link active" aria-current="page" to="/consultas">Consultas</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link active" aria-current="page" to="/cuenta">Cuenta</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link active" aria-current="page" to="/">Salir</Link>
                        </li>
                    </ul>
                </div>
                <div class="usuario d-flex justify-content-around align-items-center">
                    <img class="img-fluid" src={campana} alt="campana" />
                    <img class="img-fluid ml-5" src={avatar} alt="avatar" />
                    <p>Sopa Vélez</p>
                </div>

            </div>
        </nav>
    )
}

export default Menudash