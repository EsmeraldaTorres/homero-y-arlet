import React from "react";
import line2 from "../../assets/img/line2.png";
import { useGuest } from "../../Context/GuestContext";

// Componente reutilizable para mostrar nombres de personas
const PersonGroup = ({ names = [] }) => (
  <div className="col-12 mt-4">
    {names.map((name, index) => (
      <p
        key={index}
        className="text-center display-6 font-kala"
        data-aos="flip-down"
        data-aos-duration="1500"
      >
        {name}
      </p>
    ))}
  </div>
);

// Componente para mostrar padrinos con título
const SponsorGroup = ({ title, sponsors = [] }) => (
  <div className="col-12 mt-4">
    <p
      className="text-center display-6 font-gold font-kala"
      data-aos="flip-down"
      data-aos-duration="1450"
    >
      {title}
    </p>
    {sponsors.map((name, index) => (
      <p
        key={index}
        className={`text-center display-6 ${
          index % 2 ? "font-kalm" : "font-kala"
        }`}
        data-aos="flip-down"
        data-aos-duration="1450"
      >
        {name}
      </p>
    ))}
    <div className="d-flex justify-content-center">
      <hr className="text-center" />
    </div>
  </div>
);

const ParentsSection = () => {
  const { eventData } = useGuest();

  return (
    <>
      <section className="parents">
        <p
          className="text-center mt-4 f-w-700 pl-1 pr-1 title2 font-gold font-paris"
          data-aos="zoom-in-up"
          data-aos-duration="2000"
        >
          Agradecemos a nuestros padres
        </p>

        <div className="d-flex justify-content-center">
          <div className="row m-0">
            <PersonGroup
              names={["Jorge Alberto Ruiz Álvarez", "María Sánchez Romero"]}
            />
          </div>
        </div>

        <div className="d-flex justify-content-center font-gold">
          <div className="row m-0">
            <PersonGroup
              names={["Alejandro López Roca", "María de Jesús Juárez Sandoval"]}
            />
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
        <p
          className="text-center mt-4 f-w-700 title2 font-gold font-paris"
          data-aos="zoom-in-up"
          data-aos-duration="2000"
        >
          Y a nuestros padrinos
        </p>

        <div className="d-flex justify-content-center flex-column">
          <div className="row m-0 mb-4 pb-4">
            <SponsorGroup
              title="Lazo"
              sponsors={[
                eventData.godparents.lazo.first,
                eventData.godparents.lazo.second,
              ]}
            />
            <SponsorGroup
              title="Anillos"
              sponsors={[
                eventData.godparents.anillos.first,
                eventData.godparents.anillos.second,
              ]}
            />
            <SponsorGroup
              title="Arras"
              sponsors={[
                eventData.godparents.arras.first,
                eventData.godparents.arras.second,
              ]}
            />
          </div>
        </div>

        {/* <div className="d-flex justify-content-around align-items-center">
          <img
            loading="lazy"
            className="decoration mt-4 pt-4"
            src={line2}
            alt="linea"
          />
        </div> */}
      </section>
    </>
  );
};

export default ParentsSection;
