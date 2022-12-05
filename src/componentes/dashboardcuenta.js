import React from 'react'
import avatar from '../img/historial-imagen.svg'
import '../css/cuenta.css'


function Account() {
  return (
    <div class="container-fluid d-flex flex-wrap contenedor-cuenta">
      <div class="row col-12 col-md-6 col-lg-6 mt-3">
        <h4>Información Personal</h4>
        <h1>Foto de Perfil</h1>
        <div>
          <img src={avatar} alt="avatar" />
        </div>
        <h1>Primer Nombre</h1>
        <div class="input-group input-group-lg">
          <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" placeholder='Primer Nombre' />
        </div>
        <h1>Segundo Nombre</h1>
        <div class="input-group input-group-lg">
          <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" placeholder='Segundo Nombre' />
        </div>
        <div class="d-flex justify-content-between">
          <div>
            <h1>Región</h1>
            <div class="input-group input-group-lg">
              <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" placeholder='Región' />
            </div>
          </div>
          <div>
            <h1>Ciudad</h1>
            <div class="input-group input-group-lg">
              <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" placeholder='Ciudad' />
            </div>
          </div>
        </div>

      </div>
      <div class="row col-12 col-md-6 col-lg-6 mx-auto mt-3">
        <h4>Información de Cuenta</h4>
        <h1>Correo electronico: sopavelez@gmail.com <br />
          <br />
          Contraseña
        </h1>
        <div class="input-group input-group-lg">
          <input type="password" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" value="contraseña"/>
        </div>
        <div class="input-group input-group-lg">
          <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" placeholder='Contraseña Nueva' />
        </div>
        <div class="input-group input-group-lg">
          <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" placeholder='Confirmar Contraseña' />
        </div>
        <div class="btns-cuenta">
          <button type="button" class="btn btn-success">Guardar Cambios</button>      
          <button type="button" class="btn btn-danger">Borrar Cuenta</button>
        </div>
        

      </div>
    </div>
  )
}

export default Account;