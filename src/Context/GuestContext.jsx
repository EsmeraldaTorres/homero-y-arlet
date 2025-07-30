import React, { createContext, useContext, useState } from "react";
import iconFiesta from "../assets/img/dinner-icon.png";
import iconMariachi from "../assets/img/mariachi-icon.png";
import dressCode from "../assets/img/etiqueta rigurosa.png";
import iconLazo from "../assets/img/lazo.png";
import iconCoin from "../assets/img/coin.png";
import anillos from "../assets/img/anillos.png";
import pareja1 from "../assets/img/pareja-1.jpg";
import pareja2 from "../assets/img/pareja-2.jpg";
import pareja3 from "../assets/img/pareja-3.jpg";
import pareja4 from "../assets/img/pareja-4.jpg";
import hotelGamaImg from "../assets/img/gamma-xalapa-hotel.png";
import hotelInnImg from "../assets/img/holiday-inn-hotel.png";
import iglesiaUbicacion from "../assets/img/Capilla.jpg";
import salonUbicacion from "../assets/img/salon-cristina.png";

const GuestContext = createContext();

export const useGuest = () => useContext(GuestContext);

export const GuestProvider = ({ children }) => {
  const eventData = {
    bride: "Noemi",
    groom: "Arturo",
    weekendDay: "viernes",
    day: "22",
    month: "Diciembre",
    year: "2025",
    countDown: "Jul 05, 2026 00:00",
    lastName: " Andueza Collins",
    fatherShe: "Rogelio Macías Ruiz",
    motherShe: "Andrea Lerma Gonzalez",
    fatherHe: "Antonio Juárez Mota",
    motherHe: "Leticia Ortiz Villareal",
    godparents: {
      anillos: {
        first: "Roberto Rodriguez Saenz",
        second: "Veronica Martínez Torres",
      },
      arras: {
        first: "José Díaz Hernández",
        second: "Ilse Macías Hernández",
      },
      lazo: {
        first: "Rogelio Martínez Loredo",
        second: "Ana Salazar Montes",
      },
    },
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
        time: "2:00pm",
        icon: <i className="bi bi-bookmark-plus f-5" />,
        label: "Misa",
        animation: "fade-up",
      },
      {
        time: "7:00pm",
        icon: <i className="bi bi-ticket f-5" />,
        label: "Recepción",
        animation: "fade-down",
      },
      {
        time: "8:00pm",
        icon: <img src={iconFiesta} className="icon-img" alt="Fiesta" />,
        label: "Comida",
        animation: "fade-up",
      },
      {
        time: "10:00pm",
        icon: <i className="bi bi-music-note-beamed f-5" />,
        label: "Baile",
        animation: "fade-down",
      },
      {
        time: "2:00am",
        icon: <img src={iconMariachi} className="icon-img" alt="Mariachi" />,
        label: "Mariachi",
        animation: "fade-down",
      },
    ],
    // itineraryItems: [
    //   {
    //     title: "Ceremonia religiosa",
    //     time: "5:00pm",
    //     icon: iconIglesia,
    //   },
    //   {
    //     title: "Recepción",
    //     time: "6:00pm",
    //     icon: iconRecepcion,
    //   },
    //   {
    //     title: "Fiesta",
    //     time: "7:00pm",
    //     icon: iconComida,
    //   },
    //   {
    //     title: "Fiesta",
    //     time: "9:00pm",
    //     icon: iconFiesta,
    //   },
    // ],
    locations: {
      misa: {
        title: "Misa",
        time: "19:00hrs",
        image: iglesiaUbicacion,
        alt: "iglesia",
        name: "Capilla San Fernando",
        address: "Calle Isla de Elba 114, Querétaro, Querétaro.",
        mapUrl:
          "https://www.google.com/maps/place/Capilla+San+Peregrino+Laziosi/@21.9313725,-102.3243691,15z/data=!4m6!3m5!1s0x8429ef3e2b1278e7:0x7fd5303f7cc86d3f!8m2!3d21.9313725!4d-102.3243691!16s%2Fg%2F11fsmvbscp?entry=ttu",
        delay: 500,
      },
      recepcion: {
        title: "Recepción",
        time: "20:00hrs",
        image: salonUbicacion,
        alt: "salon",
        name: "Salón Lantana",
        address:
          "Calle Sin Nombre, s/n Fracc. Pirámides 76900 Corregidora (Querétaro)",
        mapUrl:
          "https://www.google.com/maps/place/Capilla+San+Peregrino+Laziosi/@21.9313725,-102.3243691,15z/data=!4m6!3m5!1s0x8429ef3e2b1278e7:0x7fd5303f7cc86d3f!8m2!3d21.9313725!4d-102.3243691!16s%2Fg%2F11fsmvbscp?entry=ttu",
        delay: 700,
      },
    },
    transferDetails: {
      number: "4027 6653 0576 7718",
      name: "Arturo Jiménez Díaz",
      bank: "BBVA",
    },
    hotels: [
      {
        name: "El Cortijo de Los Morales",
        image: hotelGamaImg,
        distance: "A 1 min de la fiesta",
        address: "Av. Miguel Hidalgo 82, Xico, 91240 Xico, Ver.",
        mapUrl:
          "https://www.google.com/maps/place/El+Cortijo+de+Los+Morales/@19.4203227,-97.0041995,17z/data=...",
      },
      {
        name: "Hotel el Pedregal",
        image: hotelInnImg,
        distance: "A 2 min de la fiesta",
        address: "Av. Miguel Hidalgo, 91240 Xico, Ver.",
        mapUrl:
          "https://www.google.com/maps/place/Hotel+El+Pedregal/@19.5359209,-97.2548998,...",
      },
    ],

    // hotels: [
    //   {
    //     name: "Gran Hotel Xalapa",
    //     img: granHotelImg,
    //     distance: "A 40 min de la fiesta",
    //     address:
    //       "Guadalupe Victoria 163, Zona Centro, Centro, 91000 Xalapa-Enríquez, Ver.",
    //     mapUrl: "https://maps.app.goo.gl/3yXfaZVray72iGWv5",
    //   },
    //   {
    //     name: "Holiday Inn Express Xalapa",
    //     img: hotelInnImg,
    //     distance: "A 40 min de la fiesta",
    //     address:
    //       "Ignacio Zaragoza 8, Zona Centro, Centro, 91000 Xalapa-Enríquez, Ver.",
    //     mapUrl: "https://maps.app.goo.gl/wBtTrNBGZQTcYWhM9",
    //   },
    //   {
    //     name: "Gamma Xalapa Nubara",
    //     img: hotelGamaImg,
    //     distance: "A 32 min de la fiesta",
    //     address:
    //       "Av. Adolfo Ruiz Cortines 912 Col, U.H. del Bosque, 91017 Xalapa-Enríquez, Ver.",
    //     mapUrl: "https://maps.app.goo.gl/weUd2wWCdZnn8dG78",
    //   },
    // ],
    code: "MXsadfa",
    dressCode: {
      img: dressCode,
      name: "formal",
    },
    event: {
      title: "Boda Arturo & Noemi",
      location: "Salón Hyde",
      description: `Código de Vestimenta: Formal, Ubicación en maps: https://maps.app.goo.gl/V7iCPBBP1oK879KX6`,
      startDate: "20241122T190000Z", // formato UTC
      endDate: "20241123T101000Z",
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
