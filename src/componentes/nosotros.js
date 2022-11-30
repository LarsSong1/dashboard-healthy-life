import React from 'react'
import doctor from '../img/doctor.svg'
import '../css/nosotros.css'

function Nosotros() {
    return (
        <div id="nosotros" class="container-fluid contenedor-nosotros">
            <div class="row">
                <div class="nosotros-texto col-12 d-flex flex-column justify-content- align-items-center
                text-center">
                    <h1>Sobre <br />Healthy Life</h1>
                    
                    <p>En 2022, Healthy Life creó una sede en Milagro, en vista a la inminente demanda y ausencia de servicios medicos online de confianza esta empresa desarrolló un software con el que el paciente pueda  consultar acerca de su salud por medio de la web, garantizando asi que el tiempo de espera ante una cita sea corto.<br />
                        <br />

                    Gracias a esto actualmento contamos con más de 1000 clientes satisfechos y con capacidad para albergar a 6000 pacientes</p>
                </div>
            </div>
            <div class="row nosotros-imagen">
                <div class="col-12 col-md-6 col-lg-8">
                    <div class="text-center d-flex flex-column justify-content-center align-items-center">
                        <h1>1000+</h1>
                        <p>Clientes satisfechos</p>
                        <h1>6000+</h1>
                        <p>Capacidad de albergue</p>
                    </div>
                </div>
                <div class="doc-caja col-12 col-md-6 col-lg-4">
                    <img class="img-fluid" src={doctor} alt="doctor" />
                </div>
            </div>
        </div>
    );
};

export default Nosotros;