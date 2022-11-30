import React from 'react'
import '../css/medicos.css'

function Medicos({medico, nombre, especialidad,ola}) {
    return (
        <div class="card">
            <img src={medico} class="card-img-top" alt="..." />
                <ul class="social-n">
                    <li><a href="#!"><i class="bi bi-facebook"></i></a></li>
                    <li><a href="#!"><i class="bi bi-twitter"></i></a></li>
                    <li><a href="#!"><i class="bi bi-whatsapp"></i></a></li>
                </ul>
                <div class="card-body text-center">
                    <h1 class="card-title">{nombre}</h1>
                    <p class="card-text">{especialidad}</p>
                </div>
                <img class="wave" src={ola} alt="ola" />
                <div class="contact">
                    <a href="#!"><i class="bi bi-telephone-plus"></i></a>
                </div>
        </div>
    );
};

export default Medicos;