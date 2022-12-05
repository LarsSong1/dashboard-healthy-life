import React from 'react'
import '../css/s_dashboard.css'
import glucosa from '../img/glucosa.svg'
import electrocardiograma from '../img/electrocardiograma.svg'
import heces from '../img/heces.svg'
import descarga from '../img/descarga.svg'
import corazon from '../img/corazon.svg'
import {Link} from 'react-router-dom'


function Sdashboard() {
    return (
        
        <div class="container-fluid d-flex flex-wrap position-relative c-d">
            <div class="col-lg-8 col-md-8">
                <div class="row d-flexjustify-content-between">
                    <div class="d-flex justify-content-between flex-wrap">
                        <div class="user-title">
                            <h1>Hola sopa</h1>
                            <p>Aquí puedes ver tú actividad reciente</p>
                        </div>
                        <div>
                        <Link to="/agendas "><button type="button" class="btn btn-success">Agendar Cita</button></Link>
                        </div>
                    </div>

                </div>
                <div class="row mx-auto">
                    <div class="contenedor-cita">
                        <h1>Nueva cita</h1>
                        <div>
                            <form class="d-flex justify-content-around form-cita align-items-center flex-wrap">
                                <div class="mb-3 cita-input position-relative">
                                    <label for="exampleInputEmail1" class="form-label">Especialidad</label>
                                    <input type="text" class="form-control" id="exampleInputEmail1"
                                        aria-describedby="emailHelp" value="Enfermería" />
                                </div>
                                <div class="mb-3 cita-input position-relative">
                                    <label for="exampleInputPassword1" class="form-label">Localización</label>
                                    <input value="Guayaquil" type="text" class="form-control" id="exampleInputPassword1" />
                                </div>
                                <div class="cita-input mb-3">
                                    <button type="button" class="btn btn-danger">Cancelar<i class="bi bi-x"></i></button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="contenedor-cita historial-cuadros">
                        <h1>Tratamiento en Curso</h1>
                        <div>
                            <form class="d-flex justify-content-around form-cita align-items-center">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Recetas / Medicinas</th>
                                            <th scope="col">Cantidad</th>
                                            <th scope="col">Tiempo</th>
                                            <th scope="col">Duración</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr >
                                            <td>Paracetamol 60mg</td>
                                            <td>7</td>
                                            <td>Cada 6 Horas</td>
                                            <td>1 Semana</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-4 col-lg-4 position-relative">
                <div class="contenedor-cita c-proximo-tratamiento">
                    <h1>Proximo Tratamiento</h1>
                    <div class="contenedor-cita minicontenedor-cita mx-auto">
                        <div class="d-flex justify-content-start align-items-center">
                            <img src={corazon} alt="corazon" />
                            <ul>
                                <li>Diagnóstico</li>
                                <li>Dr Andrés Messi</li>
                                <li>02/12/2019 9:00-9:30</li>
                            </ul>
                        </div>
                    </div>
                    <div class="contenedor-cita minicontenedor-cita mx-auto">
                        <div class="d-flex justify-content-start align-items-center">
                            <img src={corazon} alt="corazon" />
                            <ul>
                                <li>Diagnóstico</li>
                                <li>Dr Andrés Messi</li>
                                <li>02/12/2019 9:00-9:30</li>
                            </ul>
                        </div>
                    </div>
                    <div class="contenedor-cita minicontenedor-cita mx-auto">
                        <div class="d-flex justify-content-start align-items-center">
                            <img src={corazon} alt="corazon" />
                            <ul>
                                <li>Diagnóstico</li>
                                <li>Dr Andrés Messi</li>
                                <li>02/12/2019 9:00-9:30</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>


            <div class="col-12 col-md-12 col-lg-12">
                <div class="row mx-auto">
                    <div class="contenedor-cita c-resultados-examenes">
                        <div class="d-flex justify-content-between">
                            <h1>Resultados de Exámenes</h1>
                            <p class="ver-mas">Ver más</p>
                        </div>
                        <div>
                            <form class="d-flex justify-content-around form-cita align-items-center">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Tipo</th>
                                            <th scope="col">Resultado</th>
                                            <th scope="col">Fecha</th>
                                            <th scope="col">PDF</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr >
                                            <td><img class="img-fluid" src={glucosa} alt="capsule" /> Test de Glucosa</td>
                                            <td><span class="badge text-bg-danger">Requiere Revision</span></td>
                                            <td>22/09/2022</td>
                                            <td><a href="#!"><img src={descarga} alt="descarga" /></a></td>
                                        </tr>
                                        <tr >
                                            <td><img class="img-fluid" src={electrocardiograma} alt="capsule" />  Electrocardiograma</td>
                                            <td><span class="badge text-bg-success">Estado Normal</span></td>
                                            <td>22/09/2002</td>
                                            <td><a href="#!"><img src={descarga} alt="descarga" /></a></td>
                                        </tr>
                                        <tr >
                                            <td><img class="img-fluid" src={heces} alt="capsule" />   Análisis de Heces</td>
                                            <td><span class="badge text-bg-success">Estado Normal</span></td>
                                            <td>22/09/2022</td>
                                            <td><a href="#!"><img src={descarga} alt="descarga" /></a></td>
                                        </tr>

                                    </tbody>
                                </table>
                            </form>
                        </div>
                    </div>
                </div>







            </div>
        </div>


    );
};

export default Sdashboard;