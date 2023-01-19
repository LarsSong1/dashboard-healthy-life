import React from 'react'
import '../css/boton.css'
import {Link} from 'react-router-dom'

function Boton({texto, icon, id, link, texto_alternativo, icono_alt}) {
    return (
        <li class="nav-item item-boton">
            <a class="nav-link boton-cita" href={id}>
                <p>{texto}</p>
                <i class={icon}></i>
                <Link to={link}>
                    <p>{texto_alternativo}</p>
                    <i class={icono_alt}></i>
                </Link>
            </a>
        </li>
    );
};

export default Boton;