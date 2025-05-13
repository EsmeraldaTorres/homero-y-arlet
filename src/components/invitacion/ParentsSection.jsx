import React from "react";
import line2 from "../../assets/img/line2.png";

const ParentsSection = () => {
  return (
    <>

      <section className="parents">
        <div>
          <p
            className="text-center mt-4 f-w-700 pl-1 pr-1 title2 font-gold font-paris"
            data-aos="zoom-in-up"
            data-aos-duration="2000"
          >
            Agradecemos a nuestros padres
          </p>
        </div>
        <div className="d-flex justify-content-center">
          <div className="row m-0">
            <div className="col-12 mt-4">
              <p
                className="text-center display-6 font-kala"
                data-aos="flip-down"
                data-aos-duration="1500"
              >
           	
Jorge Alberto Ruiz Álvarez            </p>
              <p
                className="text-center display-6 font-kala"
                data-aos="flip-down"
                data-aos-duration="1500"
              >
           	
              María Sánchez Romero          </p>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center font-gold">
          <div className="row m-0">
            <div className="col-12 mt-4">
              <p
                className="text-center display-6 font-kala"
                data-aos="flip-down"
                data-aos-duration="1500"
              >
               Alejandro López Roca               </p>
              <p
                className="text-center display-6 font-kala"
                data-aos="flip-down"
                data-aos-duration="1500"
              >
              María de Jesús Juárez Sandoval          </p>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-around align-items-center">
          <img
            loading="lazy"
            className="decoration mt-4 pt-4"
            src={line2}
            alt="linea"
          />
        </div>
      </section>
      <section className="parents">
        <div>
          <p
            className="text-center mt-4 f-w-700 title2 font-gold font-paris"
            data-aos="zoom-in-up"
            data-aos-duration="2000"
          >
            Y a nuestros padrinos
          </p>
        </div>
        <div className="d-flex justify-content-center flex-column">
          <div className="row m-0">
            <div className="col-12 mt-4">
              <p
                className="text-center display-6 font-gold font-kala"
                data-aos="flip-down"
                data-aos-duration="1450"
              >
                Velación
              </p>
              <p
                className="text-center display-6 font-kala"
                data-aos="flip-down"
                data-aos-duration="1450"
              >
              Luis Roberto Segura Collado
            </p>
              <p
                className="text-center display-6 font-kala"
                data-aos="flip-down"
                data-aos-duration="1500"
              >
             Laura Jiménez Martínez
            </p>
            </div>
            <div className="col-12 mt-4">
              <p
                className="text-center display-6 font-gold font-kala"
                data-aos="flip-down"
                data-aos-duration="1450"
              >
                Anillos
              </p>
              <p
                className="text-center display-6 font-kala"
                data-aos="flip-down"
                data-aos-duration="1450"
              >
              Daniel Luna Méndez
            </p>
              <p
                className="text-center display-6 font-kalm"
                data-aos="flip-down"
                data-aos-duration="1500"
              >
              Adriana Caballero Ramirez
            </p>
            <div className="d-flex justify-content-center">
              <hr className="text-center" />
            </div>
            </div>
          </div>
          <div className="row m-0">
            <div className="col-12 mt-4">
              <p
                className="text-center display-6 font-gold font-kala"
                data-aos="flip-down"
                data-aos-duration="1450"
              >
                Arras
              </p>
              <p
                className="text-center display-6 font-kala"
                data-aos="flip-down"
                data-aos-duration="1450"
              >
              Héctor González Velasco
            </p>
              <p
                className="text-center display-6 font-kala"
                data-aos="flip-down"
                data-aos-duration="1500"
              >
              Guadalupe Martínez Alba

              </p>
            </div>

          </div>
        </div>
        <div className="d-flex justify-content-around align-items-center">
          <img
            loading="lazy"
            className="decoration mt-4 pt-4"
            src={line2}
            alt="linea"
          />
        </div>
      </section>
      {/* <section
        class="window-photo-family d-flex justify-content-center align-items-center"
      >
        <p
          class="text-window text-shadow font-paris p-4 font-2rem"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          El inicio de la familia González Ruiz
        </p>
      </section> */}
    </>
  );
};

export default ParentsSection;
