import React from "react";
import logoLiverpool from "../../assets/img/LIVERPOOL-logo.png";
import logoSear from "../../assets/img/sears-ligi.png";

import decoration from "../../assets/img/linea1.png";
import line from "../../assets/img/linea2.png";

const GiftSection = () => {
  return (
    <>
      <section
        id="mesa"
        className="ribbon bg-white d-flex flex-column justify-content-center align-items-center text-center pt-4 pb-4"
      >
        <p
          className="m-0 display-6 font-kala pt-4 pb-4 principal-text"
          data-aos="zoom-in"
          data-aos-duration="3000"
        >
          ¡Sí! Su presencia en nuestra boda será el mejor regalo. Pero si desean
          darnos otro obsequio, les agradeceremos tomen en cuenta estas
          opciones.
        </p>

        <div className="d-flex justify-content-around align-items-center">
          <img
            loading="lazy"
            className="decoration pb-4"
            src={decoration}
            alt="Decoración"
          />
        </div>

        <div data-aos="flip-down" data-aos-duration="3500">
          <p className="display-6 mb-1">Para transferencia</p>
          <p className="display-number">5579 0701 5700 2554</p>
          <p className="display-6">Santander</p>
          <p className="display-6 mb-1">Arlet Michelle Lehovec Barragan</p>
        </div>
      </section>

      <section className="window-regalos d-flex justify-content-center align-items-center">
        <div className="w-80 h-80 pb-4 d-flex flex-column justify-content-center">
          <div>
            <h2 className="font-paris text-center font-gold display-4">
              Sugerencias de regalo
            </h2>
            {/* <div className="d-flex justify-content-around align-items-center">
              <img
                loading="lazy"
                className="decoration pb-4"
                src={line}
                alt="Decoración"
              />
            </div> */}
          </div>
          <div
            className="card-regals p-4"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <div className="row d-flex justify-content-around align-items-center">
              <div className="col-md-6 text-center d-flex flex-column align-items-center">
                <img
                  loading="lazy"
                  className="logo-liverpool"
                  src={logoLiverpool}
                  alt="Logo Liverpool"
                />
                <p className="mb-0 display-6">No. Evento: 51577944</p>
                <a
                  href="https://mesaderegalos.liverpool.com.mx/milistaderegalos/51577944"
                  className="w-80 d-block"
                >
                  <button className="btn btn-light display-6 text-dark text-center my-3 p-2">
                    Ir a mesa de regalos
                    <i className="bi bi-box-arrow-up-right ms-2"></i>
                  </button>
                </a>
              </div>
              <div className="col-md-6 text-center d-flex flex-column align-items-center">
                <img
                  loading="lazy"
                  className="logo-liverpool mt-4"
                  src={logoSear}
                  alt="Logo Sears"
                />
                <p className="mb-0 display-6">No. Evento: 177029</p>
                <a
                  href="https://www.sears.com.mx/Mesa-de-Regalos/177029/invitacion"
                  className="w-80 d-block"
                >
                  <button className="btn btn-light display-6 text-dark text-center my-3 p-2">
                    Ir a mesa de regalos
                    <i className="bi bi-box-arrow-up-right ms-2"></i>
                  </button>
                </a>
                {/* <p>
                  Si hacen compras en esta tienda, les pedimos pasar su número
                  de evento
                </p> */}
              </div>

              <div className="col-md-6 text-center d-flex flex-column align-items-center">
                <i className="bi bi-envelope icon-sobre mb-0"></i>
                <p className="w-80 display-6 text-shadow text-dark">
                  Sobre con dinero en efectivo
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="window-photo2 d-flex justify-content-center align-items-center">
        <p
          className="text-main p-4 text-white text-shadow text-center card font-paris display-5"
          data-aos="flip-down"
          data-aos-duration="3500"
        >
          ¡Gracias por tus muestras de cariño!
        </p>
      </section>
    </>
  );
};

export default GiftSection;
