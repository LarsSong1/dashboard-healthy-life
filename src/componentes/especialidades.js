import React from 'react'
import Especialidadescaja from './especialidadescaja';
import enfermeria from '../img/enfermeria.svg'
import diagnostico from  '../img/diagnostico.svg'
import oncologia from '../img/oncologia.svg'
import fisicamedica from '../img/fisica medica.svg'
import medicinanuclear from '../img/medicina nuclear.svg'
import radioterapia from '../img/radioterapia.svg'
import emergencias from '../img/emergencias.svg'
import traumatologia from '../img/traumatologia.svg'
import '../css/especialidades.css'

function Especialidades() {
  return (
    <div id='especialidades' class="container-fluid contenedor-especialidades">
        <div class="row d-flex justify-content-start">
            <h1 class="title">Especialidades</h1>
        </div>
        <div class="row d-flex justify-content-center align-items-center">
            <Especialidadescaja img={enfermeria} texto="Enfermería"/>
            <Especialidadescaja img={diagnostico}texto="Diagnóstico"/>
            <Especialidadescaja img={oncologia} texto="Oncología"/>
            <Especialidadescaja img={fisicamedica} texto="Física Medica"/>
            <Especialidadescaja img={medicinanuclear} texto="Medicina Nuclear"/>
            <Especialidadescaja img={radioterapia} texto="Radioterapia"/>
            <Especialidadescaja img={emergencias} texto="Emergencias"/>
            <Especialidadescaja img={traumatologia} texto="Traumatología"/>

        </div>
    </div>
  );
};

export default Especialidades;