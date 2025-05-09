import React from "react";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import hotelGamaImg from "../../assets/img/gamma-xalapa-hotel.png";
import hotelInnImg from "../../assets/img/holiday-inn-hotel.png";
import granHotelImg from "../../assets/img/gran-hotel-xalpa-hotel.png";

const HotelSection = () => {
  return (
  <>
    <section
    className="window-photo-phrase d-flex  justify-content-center align-items-center"
  >
    <p
      className="text-window text-shadow font-paris p-4 display-4 f-w-700"
      data-aos="fade-up"
      data-aos-duration="3000"
    >
    La medida del amor es amar sin medida    </p>
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
          <div className="d-flex p-3 justify-content-center align-items-center">
            <div>
              <div className="d-flex justify-content-center align-items-center flex-column">
                <h2 data-aos="zoom-in-up"             data-aos-easing="linear"
                data-aos-duration="1500" className="txt-pink-dark pr-4 pl-4 mb-4 display-5 title2 text-center font-paris">
                El Cortijo de Los Morales                    </h2>
                <div className="d-flex justify-content-center align-items-center">
                  <img
                  data-aos="fade-down"
                  data-aos-easing="linear"
                  data-aos-duration="1500"
                    loading="lazy"
                    className="img-ubicaciones"
                    src={hotelGamaImg}
                    alt="iglesia"
                  />
                </div>
                
                  <p                     data-aos="fade-down"
                  data-aos-easing="linear"
                  data-aos-duration="1500" className="txt-pink-dark font-paris display-5 pl-2 pr-2
                text-center  "> <i className="bi bi-car-front-fill "></i> A 1 min de la fiesta</p>
                                    <p
                                    data-aos="zoom-in-up"             data-aos-easing="linear"
                                    data-aos-duration="1500" 
                                      className="text-infor pt-4 font-aleo  text-center mr-4 ml-4"
                                    >
                                    Av. Miguel Hidalgo 82, Xico, 91240 Xico, Ver.
                                    </p>
                                    
                                    <div
                                      className="d-flex align-items-center py-4 justify-content-center"
                                    >
                                      <Link
                                        target="_blank"
                                        className="text-white"
                                        to="https://www.google.com/maps/place/El+Cortijo+de+Los+Morales/@19.4203227,-97.0041995,17z/data=!4m23!1m12!3m11!1s0x85c4d3466382639d:0x52ce05e0a9a21fcb!2sEl+Cortijo+de+Los+Morales!5m3!1s2024-05-30!4m1!1i2!8m2!3d19.4203227!4d-97.0041995!10e5!16s%2Fg%2F11b6d6pgr0!3m9!1s0x85c4d3466382639d:0x52ce05e0a9a21fcb!5m3!1s2024-05-30!4m1!1i2!8m2!3d19.4203227!4d-97.0041995!16s%2Fg%2F11b6d6pgr0?entry=ttu"
                                        ><button
                                          className="animate__pulse animate__animated animate__infinite btn btn-ver-mapa display-6 py-3 d-flex align-items-center"
                                        >
                                          <i className="bi bi-geo-alt font-gold"></i>
                                          <span
                                            className="d-flex display-5  font-paris font-gold align-items-center justify-content-center p-0 m-0"
                                          >
                                            Ver más detalles
                                          </span>
                                        </button></Link>
              </div>
              </div>
            </div>
          </div>
          <div className="d-flex p-3 justify-content-center align-items-center">
            <div>
                <div className="d-flex justify-content-center align-items-center flex-column">
                  <h2 data-aos="zoom-in-up"             data-aos-easing="linear"
                  data-aos-duration="1500" className="txt-pink-dark pr-4 pl-4 mb-4 display-5 title2 text-center font-paris">
                    Hotel el pedregal
                  </h2>
                  <div className="d-flex justify-content-center align-items-center">
                    <img
                    data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1500"
                      loading="lazy"
                      className="img-ubicaciones"
                      src={hotelInnImg}
                      alt="iglesia"
                    />
                  </div>
                  
                    <p                     data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1500" className="txt-pink-dark font-paris display-5 pl-2 pr-2 text-center
                    "> <i className="bi bi-car-front-fill "></i> A 2 min de la fiesta</p>
                                      <p
                                      data-aos="zoom-in-up"             data-aos-easing="linear"
                                      data-aos-duration="1500" 
                                        className="text-infor pt-4 font-aleo  text-center mr-4 ml-4"
                                      >
                                      Av. Miguel Hidalgo, 91240 Xico, Ver.
                                      </p>
                                      
                                      <div
                                        className="d-flex align-items-center py-4 justify-content-center"
                                      >
                                        <Link
                                          target="_blank"
                                          className="text-white"
                                          onTouchStartCapture="https://www.google.com/maps/place/Hotel+El+Pedregal/@19.5359209,-97.2548998,11.1z/data=!4m21!1m11!3m10!1s0x85c4d325475e3945:0x72c88e2dee57f732!2sHotel+El+Pedregal!5m2!4m1!1i2!8m2!3d19.4182358!4d-96.9979888!10e5!16s%2Fg%2F11qpylqvr9!3m8!1s0x85c4d325475e3945:0x72c88e2dee57f732!5m2!4m1!1i2!8m2!3d19.4182358!4d-96.9979888!16s%2Fg%2F11qpylqvr9?entry=ttu"
                                          ><button
                                            className="animate__pulse animate__animated animate__infinite btn btn-ver-mapa display-6 py-3 d-flex align-items-center"
                                          >
                                            <i className="bi bi-geo-alt font-gold"></i>
                                            <span
                                              className="d-flex display-5  font-paris font-gold align-items-center justify-content-center p-0 m-0"
                                            >
                                              Ver más detalles
                                            </span>
                                          </button></Link >
                </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  </> 
  );
};

export default HotelSection;
