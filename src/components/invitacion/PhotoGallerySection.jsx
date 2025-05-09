import React from "react";
import { CardImgOverlay } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import pareja1 from "../../assets/img/pareja-1.jpg"
import pareja2 from "../../assets/img/foto-5.jpg"
import pareja3 from "../../assets/img/foto-3.jpg"
import pareja4 from "../../assets/img/pareja-2.jpg"
import pareja5 from "../../assets/img/pareja-8.jpg"


const PhotoGallerySection = () => {
  return (
    <section
    className="galery-container bg-white animate-left d-flex justify-content-center align-items-center"
  >
    <div className="w-100 overflow-hidden bg-white col-md-5">
      <img
      src={pareja1}
      data-aos="zoom-out"
        data-aos-duration="2000"
        data-aos-offset="300"
        className="w-100  overflow-hidden"
        alt=""
      />
    </div>
    <div className="w-100 overflow-hidden bg-white col-md-5">
      <img
      src={pareja2}
      data-aos="zoom-out"
        className="w-100  overflow-hidden"
        alt=""
      />
    </div>
    <div className="overflow-hidden bg-white col-md-5">
      <img
      src={pareja5}
      data-aos="zoom-in"
        data-aos-duration="2000"
        data-aos-offset="300"
        className="w-100  overflow-hidden"
        alt=""
      />
    </div>
    <div className="w-100 overflow-hidden bg-white col-md-5">
      <img
      src={pareja3}
      data-aos="zoom-in"
        className="w-100  overflow-hidden"
        alt=""
      />
    </div>
    <div className="w-100 overflow-hidden bg-white col-md-5">
      <img
      src={pareja4}
      data-aos="zoom-out"
        data-aos-duration="2000"
        data-aos-offset="300"
        className="w-100  overflow-hidden"
        alt=""
      />
    </div>
    {/* <div className="w-100  overflow-hidden bg-white col-md-5">
      <img
      src={pareja1}
      data-aos="zoom-in"
        data-aos-duration="2000"
        data-aos-offset="300"
        className="w-100  overflow-hidden"
        alt=""
      />
    </div> */}


  </section>

  );
};

export default PhotoGallerySection;
