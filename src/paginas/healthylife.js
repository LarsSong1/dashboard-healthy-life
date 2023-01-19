import React from 'react'
import Header from '../componentes/header';
import Main from '../componentes/main';
import Nosotros from '../componentes/nosotros';
import Servicios from '../componentes/servicios';
import Especialistas from '../componentes/especialistas';
import Especialidades from '../componentes/especialidades';
import Patrocinadores from '../componentes/patrocinadores';
import Footer from '../componentes/footer';
import '../App.css'

function Healthylife() {
  return (
    <div className="healthylife">
      <Header/>
      <Main/>
      <Nosotros/>
      <Servicios/>
      <Especialistas/>
      <Especialidades/>
      <Patrocinadores/>
      <Footer/>
    </div>
  )
}

export default Healthylife;