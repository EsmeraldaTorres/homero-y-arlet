import React from "react";
import Carousel from "react-bootstrap/Carousel";
import iconFiesta from "../../assets/img/dinner-icon.png";
import iconComida from "../../assets/img/comida.png";
import iconIglesia from "../../assets/img/iglesia.png";
import iconMariachi from "../../assets/img/mariachi-icon.png";
import img2 from "../../assets/img/foto-5.jpg"
const Itinerary = () => {
  return (
    <>
      <section className="window-back">
        <div
          className="window-itinerary"
          data-aos="fade-right"
          data-aos-easing="linear"
          data-aos-duration="500"
          data-aos-offset="200"
        >
          <div className="d-flex justify-content-center align-items-center">
            <p className="display-3 text-center font-paris text-shadow2 pl-4 pr-4">Itinerario</p>
          </div>
        </div>
      </section>
      <section
        className="recepcion-information d-flex align-items-center justify-content-center"
      >
        <div className="timeline">
          <ul>
            <li>
              <div className="text-center" data-aos="fade-up" data-aos-duration="3000">
                <time className="time-itinerario">2:00pm</time>
                <i class="bi bi-bookmark-plus f-5"></i><span className="font-paris display-5"> Misa</span>
              </div>
            </li>
            <li>
              <div className="text-center" data-aos="fade-down" data-aos-duration="3000">

                  <time class="time-itinerario">7:00pm 
                  </time>
                  <i class="bi bi-ticket f-5"></i><span class="font-paris display-5"> Recepción </span>                  </div>
            </li>
            <li>
              <div className="text-center" data-aos="fade-up" data-aos-duration="3000">
                <time className="time-itinerario mb-4">8:00pm
                 </time>
                 <img src={iconFiesta}  className="icon-img" alt=""/> <span className="font-paris display-5"> Comida</span>
                 </div>
            </li>
            <li>
              <div className="d-flex flex-column text-center" data-aos="fade-down" data-aos-duration="3000">
              <time class="time-itinerario">10:00pm</time><i class="bi bi-music-note-beamed f-5"></i><span class="font-paris display-5">Baile</span>
              </div>
            </li>
            <li>
              <div className="d-flex flex-column d-none" data-aos="fade-down" data-aos-duration="3000">
                <time className="time-itinerario text-center">2:00am </time>
                <img src={iconMariachi}  className="icon-img" alt=""/> <span className="font-paris display-5"> Mariachi</span>
              </div>
            </li>
          </ul>
          </div>
      </section>
      <section className="window-photo">
        <div
          className="window-parents"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="500"
          data-aos-offset="800"
        ></div>
      </section>
    </>
  );
};

export default Itinerary;
