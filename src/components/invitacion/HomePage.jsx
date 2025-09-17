import React from "react";
import { Link } from "react-router-dom";
import line from "../../assets/img/linea2.png";
import line2 from "../../assets/img/linea3.png";

const invitations = [
  {
    url: "https://muestra-platino-portada.netlify.app/1",
    title: "URL 1",
    description:
      "Esta invitación la repartirás a aquellos invitados que van a ir solos porque solo contempla el registro para 1 persona:",
  },
  {
    url: "https://muestra-platino-portada.netlify.app/2",
    title: "URL 2",
    description:
      "Esta invitación la repartirás a aquellos invitados que van a ir en pareja o que tienen un acompañante porque esta invitación contempla el registro para 2 personas",
  },
  {
    url: "https://muestra-platino-portada.netlify.app/3",
    title: "URL 3",
    description:
      "Esta invitación la repartirás a aquellos invitados que tienen una familia o grupo de 3 personas porque contempla el registro para 3 personas",
  },
  {
    url: "https://muestra-platino-portada.netlify.app/4",
    title: "URL 4",
    description:
      "Esta invitación la repartirás a aquellos invitados que tienen una familia o grupo de 4 personas porque contempla el registro para 4 personas",
  },
  {
    url: "https://muestra-platino-portada.netlify.app/5",
    title: "URL 5",
    description:
      "Esta invitación la repartirás a aquellos invitados que tienen una familia o grupo de 5 personas porque contempla el registro para 5 personas",
  },
  {
    url: "https://muestra-platino-portada.netlify.app/6",
    title: "URL 6",
    description:
      "Esta invitación la repartirás a aquellos invitados que tienen una familia o grupo de 6 personas porque contempla el registro para 6 personas",
  },
];

const HomePage = () => {
  return (
    <div className="d-flex justify-content-center">
      <div className="container-1 p-4">
        <h2 className="text-center">DEMO 2 PAQUETE PLATINO</h2>

        <div className="d-flex w-100 mb-3 justify-content-center">
          <img src={line} className="w-75" alt="" />
        </div>

        {invitations.map((item, index) => (
          <div key={index}>
            <p className="mb-0 mt-4 display-6 font-pari">{item.title}</p>
            <p className="mb-1 lead">{item.description}</p>
            <Link className="mb-4 display-6 d-block" to={item.url}>
              Ver invitación ({item.title.toLowerCase()})
            </Link>
          </div>
        ))}

        <p className="mb-0 mt-4 display-6 font-pari">Panel de Control</p>
        <p className="mb-1 lead">
          En este panel de control que solo tendrán ustedes los novios, verán el
          registro de las personas y las respuestas de los formularios dentro de
          cada invitación. Dentro del formulario que trae cada invitación, se
          les pide a los invitados que escriban su número de teléfono al cuál
          les llegó su invitación. Esta es una manera de comprobar que es un
          invitado legítimo y no alguien más que se está registrando. Además se
          les recuerda que su registro es válido solo si recibieron la
          invitación de parte de ustedes (los novios) o de parte de su wedding
          planner.
        </p>
        <Link
          className="mb-4 display-6 d-block"
          to="https://muestra-platino-portada.netlify.app/data-page"
        >
          Ver página de registro
        </Link>

        <div className="d-flex w-100 mt-4 mb-4 pt-2 justify-content-center">
          <img src={line2} className="w-75" alt="" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
