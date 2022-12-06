import React from 'react'
import '../css/login.css'
import {Link} from 'react-router-dom'

function Login() {
    return (
        <div class="contenedor-login d-flex flex-wrap">
            <div class="row col-12 col-md-4 col-lg-4 mx-auto">
                <form class="row g-3 needs-validation" id="form" novalidate>
                    <div class="col-md-9 d-flex flex-column justify-content-center align-items-center mx-auto">
                        <div class="w-80">
                            <h1 class="mt-5">Iniciar Sesión</h1>
                            <h6 class="mt-3">Inicia sesión para mantenerte al tanto sobre tu salud</h6>
                            <label for="validationCustom01" class="form-label">Ingresa tu Usuario</label>
                            <input type="text" class="form-control" id="usuario" placeholder="Usuario" required />
                            <div class="valid-feedback">
                                Looks good!
                            </div>
                            <label for="validationCustom02" class="form-label">Ingresa tu contraseña</label>
                            <input type="password" class="form-control" id="contraseña" placeholder="Contraseña" required />
                            <div class="valid-feedback">
                                Looks good!
                            </div>
                           <Link to ="/dashboard/"><button class="w-100 mx-auto btn btn-success w-75">Iniciar Sesion</button></Link> 
                            <button class="boton-registro btn w-50 btn-outline-success">Registrarse</button>
                        </div>
                    </div>
                </form>
            </div>
            <div class="imagen-login row col-12 col-md-8 col-lg-8">
            </div>
            <script src='../../public/validar-datos.js'></script>
        </div>
    )
}

export default Login;