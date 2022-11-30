import React from 'react'
import '../css/footer.css'
import logo from '../img/healthy footer.svg'

function Footer() {
    return (
        <footer class="text-center text-lg-start text-muted footer">
            <section class="">
                <div class="container text-center text-md-start mt-5">
                    <div class="row mt-3">
                        <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                            <h6 class="text-uppercase fw-bold mb-4">
                                <img class="img-fluid" src={logo} alt="logo" />
                            </h6>
                            <p>
                                Milagro Guayaquil, Ecuador
                            </p>
                            <p><i class="bi bi-telephone-plus-fill"></i> +593 xxxx xxxx</p>
                            <p><i class="bi bi-envelope-fill"></i> damianalejandrofirst@gmail.com</p>
                        </div>
                        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 class="text-uppercase fw-bold mb-4">
                                Inicio
                            </h6>
                            <p>
                                <a href="#principal" class="text-reset">Principal</a>
                            </p>
                            
                        </div>
                        <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 class="text-uppercase fw-bold mb-4">
                                Sobre Nosotros
                            </h6>
                            <p>
                                <a href="#nosotros" class="text-reset">Información</a>
                            </p>
                        </div>
                        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 class="text-uppercase fw-bold mb-4">
                                Secciones
                            </h6>
                            <p>
                                <a href="#servicios" class="text-reset">Servicios</a>
                            </p>
                            <p>
                                <a href="#doctores" class="text-reset">Doctores</a>
                            </p>
                            <p>
                                <a href="#especialidades" class="text-reset">Especialidades</a>
                            </p>
                            <p>
                                <a href="#patrocinadores" class="text-reset">Patrocinadores</a>
                            </p>
                        </div>
                        <div class="col-md-2 col-lg-2 col-xl-3 mx-auto mb-md-0 mb-4">
                            <h6 class="text-uppercase fw-bold mb-4">Contacto</h6>
                            <a href="#!"><p><i class="bi bi-facebook" target="__blank"></i> Facebook</p></a>
                            <a href="https://twitter.com/GavilanezJair" target="__blank"><p><i class="bi bi-twitter"></i> Twitter</p></a>
                            <a href="https://wa.me/5930967185460?text= Hola necesito de tu ayuda" target="__blank"> <p><i class="bi bi-whatsapp"></i> Whatsapp</p></a>
                        </div>
                    </div>
                </div>
            </section>

            <div class="text-center p-4">
               <hr />
                <p> © 2022 Copyright: By DevSpot</p>
            </div>

        </footer>

  );
};

export default Footer;