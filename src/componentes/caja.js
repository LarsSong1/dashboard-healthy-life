import React from 'react'
import '../css/caja.css'

function serviciosCaja({imagen, texto}) {
  return (
    <div class="s-caja">
        <img src={imagen} alt="imagen" />
        <p>{texto}</p>
    </div>
  )
}

export default serviciosCaja;