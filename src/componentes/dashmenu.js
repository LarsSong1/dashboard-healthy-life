import React from 'react'
import logo from '../img/logo pagina medica 2.svg'
import '../css/dashmenu.css'
import {Link} from 'react-router-dom'
import Mantenimientos from './mantenimientos'


function Dashmenu() {
    return (
        <nav class="navbar navbar-expand-lg mt-5">
            <div class="container-fluid d-flex flex-column">
                <img class="img-fluid mb-3 logo-dash" src={logo} alt="logo" />
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse d-flex flex-column" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0 d-flex flex-column">
                        <li class="nav-item">
                            <i class="bi bi-house-fill"></i>
                            <Link class="nav-link active" aria-current="page" to="/dashboard/">Dashboard</Link>
                        </li>
                        <li class="nav-item dropdown">
                            <Link to="/mantenimiento" element={Mantenimientos}>Mantenimientos</Link>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="!#">Healthy Life</a></li>
                                <li><a class="dropdown-item" href="!#">Empleados</a></li>
                                <li><hr class="dropdown-divider" /></li>
                                <li><a class="dropdown-item" href="!#">Medicamentos</a></li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <i class="bi bi-bookmark-heart-fill"></i>
                            <Link class="nav-link" to="/historia-clinica">Historia Clinica</Link>
                        </li>
                        <li class="nav-item">
                            <i class="bi bi-clock-fill"></i>
                            <Link to='/horarios' class="nav-link">Horarios</Link>
                        </li>
                        <li className="nav-item">
                            <i class="bi bi-calendar-event-fill"></i>
                            <Link to="/agendas" class="nav-link">Agendas</Link>
                        </li>
                        <li className="nav-item">
                            <i class="bi bi-file-earmark-medical-fill"></i>
                            <Link to="/recetas" class="nav-link">Recetas</Link>
                        </li>
                        <li className="nav-item">
                            <i class="bi bi-chat-left-fill"></i>
                            <Link to="/consultas" class="nav-link">Consultas</Link>
                        </li>
                        <li className="nav-item">
                            <i class="bi bi-person-fill"></i>
                            <Link to="/cuenta" class="nav-link">Cuenta</Link>
                        </li>
                        <li className="nav-item salir">
                            <Link to="/"><i class="bi bi-box-arrow-left"></i></Link>
                            <Link to="/"> Salir</Link>
                        </li>
                    </ul>
                </div>
            </div>

        </nav>
    )
}

export default Dashmenu;