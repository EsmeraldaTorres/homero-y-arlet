import React from "react";
import line2 from "../../assets/img/linea2.png";
import { useGuest } from "../../Context/GuestContext";
import Carousel from "react-bootstrap/Carousel";

// Componente reutilizable para mostrar nombres de personas
const PersonGroup = ({ names = [] }) => (
  <div className="col- mt-2">
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
// const SponsorGroup = ({ title, sponsors = [] }) => (
//   <div className="col-12 mt-4">
//     <p
//       className="text-center display-6 font-gold font-kala"
//       data-aos="flip-down"
//       data-aos-duration="1450"
//     >
//       {title}
//     </p>
//     {sponsors.map((name, index) => (
//       <p
//         key={index}
//         className={`text-center display-6 ${
//           index % 2 ? "font-kalm" : "font-kala"
//         }`}
//         data-aos="flip-down"
//         data-aos-duration="1450"
//       >
//         {name}
//       </p>
//     ))}
//     <div className="d-flex justify-content-center">
//       <hr className="text-center" />
//     </div>
//   </div>
// );

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
        <div className="d-flex justify-content-center font-gol">
          <div className="row m-0">
            <div className="text-center mb-0 mt-4 font-gold">
              Padres de la novia:
            </div>

            <PersonGroup
              names={[
                "Jesus Alberto Lehovec Guerrero",
                "Norma Angélica Barragán Ávalos",
              ]}
            />
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <div className="row m-0">
            <div className="text-center mt-4 font-gold">Padres del novio:</div>
            <PersonGroup
              names={["Homero Ramírez Bencomo", "Elsa Isis Vergara Hernández "]}
            />
          </div>
        </div>

        <div className="d-flex justify-content-around align-items-center">
          <img
            // loading="lazy"
            className="decoration mt-4 pt-4"
            src={line2}
            alt="linea"
          />
        </div>
      </section>

      <section className="parents mb-4 pb-4">
        <div className="mb-4 pb-4">
          <p
            className="text-center mt-4 f-w-700 title2 font-gold font-paris"
            data-aos="zoom-in-up"
            data-aos-duration="2000"
          >
            Y a nuestros padrinos
          </p>

          <Carousel className="mb-4" variant="dark">
            {eventData.padrinos.map(
              ({ icon, title, names, name1, name2 }, index) => (
                <Carousel.Item key={index}>
                  <div className="d-flex justify-content-center align-items-center">
                    {title === "Velación" ? (
                      <div className="text-center">
                        <img
                          loading="lazy"
                          className="icon-img mb-2"
                          src={icon}
                          alt={`Ícono de ${title}`}
                        />
                        <p className="card-text">{title}</p>
                        {names.map((name, i) => (
                          <p className="card-text display-6">{name}</p>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center">
                        <img
                          loading="lazy"
                          className="icon-img mb-2"
                          src={icon}
                          alt={`Ícono de ${title}`}
                        />
                        <p className="card-text">{title}</p>

                        <p className="card-text display-6 ">
                          {/* <span className="text-white">hola</span>  */}
                          {name1}{" "}
                          {/* <span className="text-white">hoal</span> */}
                        </p>
                        <p className="card-text display-6 ">
                          {/* <span className="text-white">hola</span>  */}
                          {name2}{" "}
                          {/* <span className="text-white">hoal</span> */}
                        </p>
                      </div>
                    )}
                  </div>
                </Carousel.Item>
              )
            )}
          </Carousel>
          {/* <div className="d-flex justify-content-center flex-column">
          <div className="row m-0 mb-4 pb-4">
            <SponsorGroup
              title="Velación"
              sponsors={[
                eventData.godparents.velacion.first,
                eventData.godparents.velacion.second,
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
        </div> */}
        </div>
      </section>
    </>
  );
};

export default ParentsSection;
