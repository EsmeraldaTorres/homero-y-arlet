import React from "react";
import logoLiverpool from "../../assets/img/LIVERPOOL-logo.png";
import decoration from "../../assets/img/Untitled design (3).png";
import lineaAlReves from "../../assets/img/lineaalreves.png";

const GiftSection = () => {
  return (
    <>
        <section className="ribbon bg-white d-flex flex-column justify-content-center align-items-center text-center pt-4 pb-4">
        <p         data-aos="zoom-in"
        data-aos-duration="3000" class="m-0 display-6 font-kala pt-4 pb-4 principal-text">
        Ya tenemos preparado el viaje, las maletas y el compañero, lo único que nos falta es el dinero...

        </p>
                 <div className="d-flex justify-content-around align-items-center">
          <img
            loading="lazy"
            className="decoration"
            src={decoration}
            alt="linea"
          />
        </div> 
        <p          data-aos="zoom-in"
        data-aos-duration="3000" className="m-0 display-6 font-kala pt-4 pb-4 principal-text">
          Si quieres tener un detalle con nosotros, que mejor que nos apoyes con nuestra Luna de Miel.

        </p>
        <div className="d-flex justify-content-center w-100">
          <hr className="text-center" />
        </div> 
        <p      className="display-6 mb-1"           data-aos="flip-down"
        data-aos-duration="3500" >Para transferencia
        </p> <p className="display-number"                 data-aos="flip-down"
        data-aos-duration="3500">

          <span >4027</span>
          <span>6653</span>
          <span>0576</span>
          <span>7718</span>
        </p>
        <p       className="display-6 mb-0"            data-aos="flip-down"
        data-aos-duration="3500" >Jorge González Luna
        </p>
        <p     className="pb-4 mb-4 display-6"            data-aos="flip-down"
        data-aos-duration="3500"> Banamex</p>
      </section>
      <section className="window-regalos d-flex justify-content-center align-items-center">
        <div className="w-80 h-80 d-flex justify-content-center">
          <div
            className="card-regalos p-4"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <p className="display-4 text-center pt-4 font-paris">
              Mesa de Regalos
            </p>
            <div className="d-flex justify-content-center">
              <hr className="text-center" />
            </div>
            <div className="row d-flex justify-content-around align-items-center">
              <div className="col-md-6">
                <div className="d-flex pt-4 justify-content-center align-items-center">
                  <img
                    loading="lazy"
                    className="logo-liverpool"
                    src={logoLiverpool}
                    alt="logo"
                  />
                </div>
                <div className="d-flex justify-content-center">
                  <a
                    href="https://www.liverpool.com.mx/tienda/home"
                    className="w-80 d-flex justify-content-center"
                  >
                    <button className="btn btn-light display-6 text-center my-3 p-2">
                      Ir a mesa de regalos
                      <i className="bi bi-box-arrow-up-right"></i>
                    </button>
                  </a>
                </div>
              </div>
              <div className="col-md-6">
                <div className="pt-4 d-flex justify-content-center">
                  <i className="bi bi-envelope icon-sobre"></i>
                </div>
                <div className="d-flex justify-content-center">
                  <p className="w-80 text-center display-6 text-shadow">
                    Sobre con dinero en efectivo
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="ribbon ">
              <p  className="text-main"        
                  data-aos="flip-down"
              data-aos-duration="3500" >
                ¡Gracias por tus muestras de cariño!
              </p>
      </section>
  
    </>
  );
};

export default GiftSection;
