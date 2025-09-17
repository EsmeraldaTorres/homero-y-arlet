import React, { createContext, useContext, useState } from "react";
import iconFiesta from "../assets/img/fiesta.png";
import iconComida from "../assets/img/comida.png";
import iconCoctel from "../assets/img/cocktail.png";
import iconTorna from "../assets/img/torna.png";
import iconLazo from "../assets/img/lazo.png";
import iconVelacion from "../assets/img/velacion.png";

import iconCoin from "../assets/img/coin.png";
import anillos from "../assets/img/anillos.png";
import iconMariachi from "../assets/img/mariachi-icon.png";
import dressCode from "../assets/img/etiqueta rigurosa.png";
// import iconLazo from "../assets/img/lazo.png";
// import iconCoin from "../assets/img/coin.png";
// import anillos from "../assets/img/anillos.png";
import pareja1 from "../assets/img/foto-1.jpeg";
import pareja2 from "../assets/img/foto-2.jpeg";
import pareja3 from "../assets/img/foto-4.jpeg";
import pareja4 from "../assets/img/foto-12.jpeg";
import pareja5 from "../assets/img/foto-13.jpeg";

import hotelGamaImg from "../assets/img/image0.jpeg";
import hotelInnImg from "../assets/img/image1.jpeg";
import iglesiaUbicacion from "../assets/img/foto-playa.jpeg";
import salonUbicacion from "../assets/img/foto-recepcion.jpeg";

const GuestContext = createContext();

export const useGuest = () => useContext(GuestContext);

export const GuestProvider = ({ children }) => {
  const eventData = {
    bride: "Homero",
    groom: "Arlet",
    weekendDay: "viernes",
    day: "29",
    month: "Noviembre",
    year: "2025",
    countDown: "Nov 29, 2025 16:30",
    lastName: "Ramirez Lehovec",
    fatherShe: "Jesus Alberto Lehovec Guerrero",
    motherShe: "Norma Angélica Barragán Ávalos",
    fatherHe: "Homero Ramirez Bencomo",
    motherHe: "Elsa Isis Vergara Hernández",
    padrinos: [
      {
        icon: anillos,
        title: "Anillos",
        name1: "Isis Karina Ramírez",
        name2: "Alejandro Lozano",
      },
      {
        icon: iconCoin,
        title: "Arras",
        name1: "Héctor Echeverría",
        name2: "Yanet Guillen",
      },
      {
        icon: iconLazo,
        title: "Lazo",
        // names: ["Yazminda Loaeza", "Tonatihu Zambrano"],
        name1: "Yazminda Loaeza",
        name2: "Tonatihu Zambrano",
      },
      {
        icon: iconVelacion,
        title: "Velación",
        names: ["Carlos Angel Esteban", "Mónica Contreras Sánchez"],
      },
    ],
    // godparents: {
    //   anillos: {
    //     first: "Isis Karina Ramírez",
    //     second: "Alejandro Lozano",
    //   },
    //   arras: {
    //     first: "Héctor Echeverría",
    //     second: "Yanet Guillen",
    //   },
    //   velacion: {
    //     first: " Carlos Angel Esteban ",
    //     second: "Mónica Contreras Sánchez ",
    //   },
    //   lazo: {
    //     first: "Yazminda Loaeza",
    //     second: "Tonatihu Zambrano",
    //   },
    // },
    images: [
      {
        src: pareja1,
        aos: "zoom-out",
        duration: 2000,
        offset: 300,
      },
      {
        src: pareja2,
        aos: "zoom-out",
      },
      {
        src: pareja4,
        aos: "zoom-in",
        duration: 2000,
        offset: 300,
      },
      {
        src: pareja3,
        aos: "zoom-in",
      },
      {
        src: pareja5,
        aos: "zoom-in",
        duration: 2000,
        offset: 300,
      },
    ],

    // godparents: [
    //   {
    //     title: "Anillos",
    //     icon: anillos,
    //     names: ["Roberto Rodriguez Saenz", "Veronica Martínez Torres"],
    //   },
    //   {
    //     title: "Arras",
    //     icon: iconCoin,
    //     names: ["José Díaz Hernández", "Ilse Macías Hernández"],
    //   },
    //   {
    //     title: "Lazo",
    //     icon: iconLazo,
    //     names: ["Rogelio Martínez Loredo", "Ana Salazar Montes"],
    //   },
    // ],
    itineraryData: [
      {
        time: "4:30pm",
        icon: <i className="bi bi-bookmark-plus f-5" />,
        label: "Ceremonia Religiosa",
        animation: "fade-up",
      },
      {
        time: "6:00pm",
        icon: <img src={iconCoctel} className="icon-img" alt="Fiesta" />,
        label: "Coctel",
        animation: "fade-down",
      },
      {
        time: "7:00pm",
        icon: <i className="bi bi-ticket f-5" />,
        label: "Recepción",
        animation: "fade-down",
      },
      {
        time: "8:00pm",
        icon: <img src={iconComida} className="icon-img" alt="Fiesta" />,
        label: "Cena",
        animation: "fade-up",
      },
      {
        time: "9:00pm",
        icon: <img src={iconFiesta} className="icon-img" alt="Fiesta" />,
        label: "Baile",
        animation: "fade-down",
      },
      {
        time: "1:00am",
        icon: <img src={iconTorna} className="icon-img" alt="Mariachi" />,
        label: "Torna",
        animation: "fade-down",
      },
    ],
    locations: {
      misa: {
        id: "Misa",
        title: "Ceremonia Religiosa",
        time: "16:30hrs",
        image: iglesiaUbicacion,
        alt: "iglesia",
        name: "Pôr do Sol",
        address:
          "Avenida Fuerza Aérea Mexicana 7A, 39900 Acapulco, Guerrero, México",
        mapUrl: "https://maps.app.goo.gl/j5wc9y2Jxnt4cCRo8",
        delay: 500,
        zona: "En la playa",
      },
      recepcion: {
        id: "Recepción",
        title: "Coctel & Recepción",
        time: "18:00hrs",
        image: salonUbicacion,
        alt: "iglesia",
        name: "Pôr do Sol",
        address:
          "Avenida Fuerza Aérea Mexicana 7A, 39900 Acapulco, Guerrero, México",
        mapUrl: "https://maps.app.goo.gl/j5wc9y2Jxnt4cCRo8",
        delay: 500,
        zona: "En el jardín",
      },
    },
    transferDetails: {
      number: "4027 6653 0576 7718",
      name: "Arturo Jiménez Díaz",
      bank: "BBVA",
    },
    hotels: [
      {
        name: "Hotel baXar",
        image: hotelGamaImg,
        distance: "A 1 min de la fiesta",
        address:
          "Fuerza Aerea Mexicana 356, Pie de la Cuesta, 39000 Acapulco de Juárez, Gro.",
        mapUrl: "https://maps.app.goo.gl/KfQJXX6s6LQLGmjN8",
      },
      {
        name: "Hotel Rojo Manglar",
        image: hotelInnImg,
        distance: "A 6 min de la fiesta",
        address:
          "Fuerza Aerea Mexicana 2000, Pie de la Cuesta, 39960 Acapulco de Juárez, Gro.",
        mapUrl: "https://maps.app.goo.gl/kLBTBbFpj42eu3aW9",
      },
    ],
    code: "MXsadfa",
    dressCode: {
      img: dressCode,
      name: "Formal",
    },
    event: {
      title: "Boda Arlet & Homero",
      location: "Pôr do Sol",
      description:
        "AGRADECEMOS SU PUNTUALIDAD ❤️ |  Código de Vestimenta: Formal  | Ceremonia Religiosa 4:30PM zona de playa |  Coctel & Recepción en jardín 6:00PM",
      startDate: "20251129T223000Z", // formato UTC
      endDate: "20251130T101000Z",
    },
  };
  return (
    <GuestContext.Provider
      value={{
        eventData,
      }}
    >
      {children}
    </GuestContext.Provider>
  );
};
