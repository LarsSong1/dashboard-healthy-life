import React from 'react'
import '../css/boton.css'

function Boton({texto, icon, id}) {
    return (
        <li class="nav-item item-boton">
            <a class="nav-link boton-cita" href={id}>
                <p>{texto}</p>
                <i class={icon}></i>
            </a>
        </li>
    );
};

export default Boton;