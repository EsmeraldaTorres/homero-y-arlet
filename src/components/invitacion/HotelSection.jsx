import React from "react";
import HotelCard from "./HotelCard";
import { useGuest } from "../../Context/GuestContext";

const HotelSection = () => {
  const { eventData } = useGuest();

  return (
    <>
      <section className="window-photo-phrase d-flex justify-content-center align-items-center">
        <p
          className="text-window text-shadow font-paris p-4 display-4 f-w-700"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          La medida del amor es amar sin medida
        </p>
      </section>

      <section className="p-4 bg-white">
        <div className="w-100">
          <p
            className="text-center mt-4 title2 font-paris font-gold"
            data-aos="fade-down"
            data-aos-duration="2000"
          >
            Recomendación de hospedaje
          </p>
        </div>

        <div className="d-flex justify-content-center">
          <div className="owl-container">
            <div
              className="owl-carousel owl-theme"
              data-aos="fade-right"
              data-aos-duration="2000"
            >
              {eventData.hotels.map((hotel, index) => (
                <HotelCard key={index} {...hotel} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HotelSection;
