import React from "react";
import { useGuest } from "../../Context/GuestContext";

const PhotoGallerySection = () => {
  const { eventData } = useGuest();

  return (
    <section className="galery-container bg-white animate-left d-flex justify-content-center align-items-center flex-wrap">
      {eventData.images.map(({ src, aos, duration, offset }, index) => (
        <div key={index} className="w-100 overflow-hidden bg-white col-md-5">
          <img
            src={src}
            alt={`pareja-${index + 1}`}
            className="w-100 overflow-hidden"
            data-aos={aos}
            data-aos-duration={duration}
            data-aos-offset={offset}
          />
        </div>
      ))}
    </section>
  );
};

export default PhotoGallerySection;
