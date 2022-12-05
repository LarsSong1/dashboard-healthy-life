import React from 'react'

function Chats({img, nombre, oficio, boton}) {
  return (
    <div class="d-flex justify-content-around align-items-center mt-3 chat-boton flex-wrap">
        <div>
            <img src={img} alt="avatar" />
        </div>
        <h6>{nombre}</h6>
        <p>{oficio}</p>
        <button type="button" class="btn btn-success">{boton}</button>
    </div>
  )
}

export default Chats;