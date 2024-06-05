import React, { useEffect } from "react";
import { Carousel } from "react-bootstrap";
import "animate.css";
import "aos/dist/aos.css";
import people from "../db/people.json";

import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import ReactAudioPlayer from "react-audio-player";
import audioFile from "../assets/audio/musica-lewis-coffee-at-midnight.mp3";
import { PlayCircle, PauseCircle } from "react-bootstrap-icons";
import nameImg from "../assets/img/arturo-y-noemi.png";
import sobreArriba from "../assets/img/sobrearriba.png";
import sobreAbajo from "../assets/img/sobreabajo.png";
import logo from "../assets/img/logo.png";
import decoration from "../assets/img/Untitled design (3).png";
import lineaAlReves from "../assets/img/lineaalreves.png";
import line2 from "../assets/img/line2.png";
import logoLiverpool from "../assets/img/LIVERPOOL-logo.png";
import anillos from "../assets/img/anillos.png";
import iconFiesta from "../assets/img/fiesta.png";
import iconComida from "../assets/img/comida.png";
import iconLazo from "../assets/img/lazo.png";
import iconCoin from "../assets/img/coin.png";
import iconIglesia from "../assets/img/iglesia.png";
import iconRecepcion from "../assets/img/Recepcion (1).png";
import salonUbicacion from "../assets/img/salon-cristina.png";
import iglesiaUbicacion from "../assets/img/iglesia.jpeg";
import fotoCuadro from "../assets/img/pexels-barbara-ribeiro-8506039.jpg";
import "./invitacion.css";
import AOS from "aos";
import { useParams } from "react-router-dom";

const Intivacion = () => {
  const audioRef = useRef(null);
  const [guest, setGuest] = useState({});
  const [isPlaying, setIsPlaying] = useState(false);
  const [openInvitation, setOpenInvitation] = useState(false);
  const [hide, setHide] = useState(true);
  let { id } = useParams();

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.audioEl.current.pause();
    } else {
      audioRef.current.audioEl.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  function abrir() {
    setOpenInvitation(true);
    window.scrollTo(0, 0);
    setTimeout(function () {
      setHide(false);
      togglePlayPause();
    }, 2500);
  }

  const handleFilterInvitado = () => {
    const person = people.filter((person) => person.id == id);
    console.log(person[0], "person");
    setGuest(person[0]);
  };
  useEffect(() => {
    console.log(id, "id ");
    handleFilterInvitado();
  }, []);
  useEffect(() => {
    AOS.init();
    console.log(people, "people");
  }, []);

  return (
    <div>
      <div className={` w-100 ${!openInvitation && "avoiding-scroll"}`}>
        <div
          className={`bg-dark-black d-flex justify-content-center align-items-center  ${
            !openInvitation && "test-className"
          }`}
          id="parent-div"
        >
          <div id="hoja-principal" className={`sobre ${!hide && "hide"}`}>
            <img
              loading="lazy"
              id="sobre-arriba"
              src={sobreArriba}
              className={`animate__animated p-0 m-0 z-index-3 ${
                openInvitation && "animate__fadeOutUp"
              }`}
              alt="sobre-arriba"
            />
            <img
              id="sobre-abajo"
              loading="lazy"
              className={`p-0 m-0 z-index-2 animate__animated ${
                openInvitation && "animate__slideOutDown"
              }`}
              src={sobreAbajo}
              alt="sobre-abajo"
            />
            <button id="btn-open" className="btn-open" onClick={abrir}>
              <img
                id="logo"
                loading="lazy"
                src={logo}
                className={`animate__animated animate__pulse  text-center ${
                  !openInvitation && "animate__infinite"
                } ${!hide && "hide"}`}
                alt="logo"
              />
            </button>
          </div>
        </div>

        {/* <!-- Invitacion --> */}
        <div id="invitacion" className={`invitacion ${hide ? "hide" : ""}`}>
          <section className="home d-flex justify-content-center align-items-center">
            <div className="d-flex justify-content-center">
              <img
                loading="lazy"
                className="name"
                src={nameImg}
                alt="name"
                id="name"
              />
            </div>
            <div className="text-white text-center player-btn" id="play">
              {isPlaying ? (
                <PauseCircle
                  className={` play-btn player-icon `}
                  onClick={togglePlayPause}
                />
              ) : (
                <PlayCircle
                  className={`play-btn player-icon `}
                  onClick={togglePlayPause}
                />
              )}

              <p>audio</p>
            </div>
            <div className="player-audio">
              <ReactAudioPlayer
                ref={audioRef}
                id="audio"
                controls={false}
                loop={true}
                src={audioFile}
              />
            </div>
          </section>
          <section className="second-section">
            <div className="container d-flex justify-content-center align-items-center">
              <div className="col-10">
                {/* <!-- Primera animacion AOS --> */}
                <div data-aos="fade-down" data-aos-duration="2000">
                  <div className="pb-4 d-flex justify-content-center align-items-center">
                    <img
                      loading="lazy"
                      src={decoration}
                      alt="linae"
                      className="decoration"
                    />
                  </div>
                  <p className="text-center display-6">
                    El día más importante de nuestras vidas ha llegado
                  </p>
                  <div className="pt-2 d-flex justify-content-center align-items-center">
                    <img
                      loading="lazy"
                      src={lineaAlReves}
                      alt="linea"
                      className="decoration"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="container2">
              <div className="positon-relative">
                <div className="d-flex justify-content-center align-items-center">
                  <div data-aos="zoom-in" data-aos-duration="3000">
                    <p className="text-white cuenta-regresiva m-0 text-center">
                      Viernes
                    </p>
                    <p className="text-white text-center font-paris display-4">
                      22 <span>de</span> Noviembre <span>de</span> 2022
                    </p>
                  </div>
                </div>
                <div
                  className="d-flex justify-content-center align-items-center"
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                  data-aos-delay="1000"
                >
                  <p id="demo" className="cuenta-regresiva m-0"></p>
                </div>
              </div>
            </div>
            <div className="container3">
              <div className="d-flex justify-content-center align-items-center">
                <div className="pt-4">
                  <p
                    className="title2 pt-4 mb-0 text-center font-paris"
                    data-aos="flip-up"
                    data-aos-duration="2000"
                  >
                    Nuestra Boda
                  </p>
                  <div className="pb-2 d-flex justify-content-center align-items-center">
                    <img
                      loading="lazy"
                      src={lineaAlReves}
                      alt="linea"
                      className="decoration"
                    />
                  </div>
                  <div className="text-center p-4">
                    <p
                      className="pr-4 pl-4"
                      data-aos="fade-up"
                      data-aos-duration="3000"
                    >
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Facilis repellat adipisci, qui aliquid dolor et labore
                      amet veniam quisquam dolores sit placeat blanditiis
                      aperiam voluptatibus voluptate minima omnis similique
                      quidem! Lorem ipsum, dolor sit amet consectetur
                      adipisicing elit. Sapiente, quod facere? E
                    </p>
                    <div className="d-flex justify-content-center">
                      <hr />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="pase">
            <p className="m-0 display-6">
              <i className="bi bi-envelope font-icon"></i>El inicio de la
              familia Juárez Macías
            </p>
          </section>
          <section className="p-4">
            <p
              className="text-center title2 font-paris"
              data-aos="fade-right"
              data-aos-duration="2000"
            >
              Gracias a nuestros padres
            </p>
            <div className="d-flex justify-content-around align-items-center">
              <img
                loading="lazy"
                className="decoration"
                src={line2}
                alt="linea"
              />
            </div>
            <div className="d-flex justify-content-center">
              <div className="row">
                <div className="col-12 col-md-6 mt-4">
                  <p
                    className="text-center font-gold display-6"
                    data-aos="flip-down"
                    data-aos-duration="1500"
                  >
                    Rogelio Macías Ruiz
                  </p>
                  <p
                    className="text-center font-gold display-6"
                    data-aos="flip-down"
                    data-aos-duration="1500"
                  >
                    Andrea Lerma Gonzalez
                  </p>
                </div>
                <div className="col-12 col-md-6 mt-4">
                  <p
                    className="text-center display-6"
                    data-aos="flip-down"
                    data-aos-duration="1500"
                    data-aos-delay="500"
                  >
                    Antonio Juárez Mota
                  </p>
                  <p
                    className="text-center display-6"
                    data-aos="flip-down"
                    data-aos-duration="1500"
                    data-aos-delay="500"
                  >
                    Leticia Ortiz Villareal
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="container3 bg-gold p-4 m-0">
            <div className="d-flex justify-content-center">
              <p className="w-50 text-center text-white display-6 m-0 p-2">
                Compartir estos momentos con ustedes, los hace inolvidables.
              </p>
            </div>
          </section>
          <section className="p-4">
            <div className="w-100">
              <p
                className="text-center mt-4 title2 font-paris"
                data-aos="fade-down"
                data-aos-duration="2000"
              >
                Nuestros padrinos
              </p>
            </div>
            <Carousel>
              <Carousel.Item>
                <div className="d-flex p-3 justify-content-center align-items-center">
                  <div>
                    <div className="d-flex justify-content-center align-items-center">
                      <img
                        loading="lazy"
                        className="icon-img"
                        src="./assets/img/anillos.png"
                        alt="Card image cap"
                      />
                    </div>
                    <p className="card-text text-center">Anillos</p>
                    <p className="card-text text-center display-6">
                      Roberto Rodriguez Saenz
                    </p>
                    <p className="card-text text-center display-6">
                      Veronica Martínez Torres
                    </p>
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="d-flex p-3 justify-content-center align-items-center">
                  <div>
                    <div className="d-flex justify-content-center align-items-center">
                      <img
                        loading="lazy"
                        className="icon-img"
                        src="./assets/img/coin.png"
                        alt="Card image cap"
                      />
                    </div>
                    <p className="card-text text-center">Arras</p>
                    <p className="card-text text-center display-6">
                      José Díaz Hernández
                    </p>
                    <p className="card-text text-center display-6">
                      Ilse Macías Hernández
                    </p>
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="d-flex p-3 justify-content-center align-items-center">
                  <div>
                    <div className="d-flex justify-content-center align-items-center">
                      <img
                        loading="lazy"
                        className="icon-img"
                        src="./assets/img/lazo.png"
                        alt="Card image cap"
                      />
                    </div>
                    <p className="card-text text-center">Lazo</p>
                    <p className="card-text text-center display-6">
                      Rogelio Martínez Loredo
                    </p>
                    <p className="card-text text-center display-6">
                      Ana Salazar Montes
                    </p>
                  </div>
                </div>
              </Carousel.Item>
            </Carousel>
          </section>
          <section className="container3 bg-gold p-4 m-0">
            <div className="d-flex justify-content-center">
              <p className="w-50 text-center text-white m-0 p-2 display-6">
                ¡Nos gustaría mucho que nos acompañaras!
              </p>
            </div>
          </section>
          <section className="itinerario">
            <p className="text-center display-4 font-paris text-white m-0 pt-4">
              Itinerario
            </p>{" "}
            <div className="App">
              <Carousel>
                <Carousel.Item>
                  <div className="card d-flex justify-content-center align-items-center">
                    <div className="w-100 d-flex justify-content-center w-100 flex-column align-items-center">
                      <div className="d-flex align-items-center justify-content-center">
                        <img
                          loading="lazy"
                          className="card-img animate__animated animate__pulse animate__repeat-2 animate_slower"
                          src={iconIglesia}
                          alt="Card image cap"
                        />
                      </div>
                      <p className="card-text text-white text-center p-0 font-paris display-5">
                        Ceremonia religiosa
                      </p>
                      <p className="card-text text-shadow text-white font-weight-bold text-center display-5">
                        5:00pm
                      </p>
                    </div>
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div className="card d-flex justify-content-center align-items-center">
                    <div className="w-100 d-flex justify-content-center w-100 flex-column align-items-center">
                      <div className="d-flex align-items-center justify-content-center">
                        <img
                          loading="lazy"
                          className="card-img animate__animated animate__pulse animate__repeat-2 animate_slower"
                          src={iconIglesia}
                          alt="Card image cap"
                        />
                      </div>
                      <p className="card-text text-white text-center p-0 font-paris display-5">
                        Ceremonia religiosa
                      </p>
                      <p className="card-text text-shadow text-white font-weight-bold text-center display-5">
                        5:00pm
                      </p>
                    </div>
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div className="card d-flex justify-content-center align-items-center">
                    <div className="w-100 d-flex justify-content-center w-100 flex-column align-items-center">
                      <div className="d-flex align-items-center justify-content-center">
                        <img
                          loading="lazy"
                          className="card-img animate__animated animate__pulse animate__repeat-2 animate_slower"
                          src={iconIglesia}
                          alt="Card image cap"
                        />
                      </div>
                      <p className="card-text text-white text-center p-0 font-paris display-5">
                        Ceremonia religiosa
                      </p>
                      <p className="card-text text-shadow text-white font-weight-bold text-center display-5">
                        5:00pm
                      </p>
                    </div>
                  </div>
                </Carousel.Item>
              </Carousel>
            </div>
          </section>
          <section className="bg-gray p-3">
            <p className="text-center p-0 m-0 font-paris filtro-text">
              ¡Usa nuestro filtro en la fiesta!
            </p>
            <div className="d-flex justify-content-space-evenly">
              <a
                href="https://www.facebook.com/fbcameraeffects/testit/311356561758774/ZWRkMjFiOWU4NjhlZWMzMDNiNTZiZjgxY2UxMGI5ZjM=/"
                className="text-center p-0 m-0 linksfiltro"
              >
                <i className="bi bi-facebook"></i>Facebook
                <i className="bi bi-box-arrow-up-right"></i>
              </a>
              <a
                href="https://www.instagram.com/ar/311356561758774/?ch=ZWRkMjFiOWU4NjhlZWMzMDNiNTZiZjgxY2UxMGI5ZjM%3D"
                className="text-center p-0 m-0 linksfiltro"
              >
                <i className="bi bi-instagram"></i>Instagram
                <i className="bi bi-box-arrow-up-right"></i>
              </a>
            </div>
          </section>
          <section className="ubicacion pt-4">
            <div>
              <p
                className="text-center m-0 pt-4 display-5"
                data-aos="flip-up"
                data-aos-duration="2000"
              >
                Ubicaciones
              </p>
              <div className="d-flex justify-content-center align-items-center">
                <img className="line" src={lineaAlReves} alt="linea" />
              </div>
            </div>
            <div className="d-flex row m-0 justify-content-center align-items-center">
              <div
                className="col-md-5 container-ubicaciones"
                data-aos="fade-up"
                data-aos-duration="1500"
                data-aos-delay="500"
              >
                <div className="card-ubicaciones">
                  <p className="text-center font-paris display-4">Ceremonia</p>
                  <p className="text-center display-6">19:00hrs</p>
                  <div className="d-flex justify-content-center align-items-center">
                    <img
                      loading="lazy"
                      className="img-ubicaciones"
                      src={iglesiaUbicacion}
                      alt="iglesia"
                    />
                  </div>
                  <p className="text-center display-6 py-3">
                    Parroquia "San Isidro Labrador"
                  </p>
                  <p className="text-center">
                    Teresa Vera 102, Centro, 86300 Comalcalco, Tab.
                  </p>
                  <div className="d-flex align-items-center py-4 justify-content-center">
                    <a href="https://www.google.com/maps?q=parroquia+san+isidro+labrador+comalcalco&rlz=1C5CHFA_enMX973MX974&um=1&ie=UTF-8&sa=X&ved=2ahUKEwjNkcnum-j5AhXpC0QIHT8FAkYQ_AUoAXoECAIQAw">
                      <button className="btn display-6 py-3 d-flex align-items-center">
                        <i className="bi bi-geo-alt text-dark"></i>
                        <span className="d-flex text-dark align-items-center justify-content-center p-0 m-0">
                          Ver mapa
                        </span>
                      </button>
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="col-md-5 container-ubicaciones"
                data-aos="fade-up"
                data-aos-duration="1500"
                data-aos-delay="700"
              >
                <div className="card-ubicaciones">
                  <p className="text-center font-paris display-4">Recepción</p>
                  <p className="text-center display-6">20:00hrs</p>
                  <div className="d-flex justify-content-center align-items-center">
                    <img
                      className="img-ubicaciones"
                      src={salonUbicacion}
                      alt="salon"
                    />
                  </div>
                  <p className="text-center display-6 py-3">
                    Salón de Eventos "Cristina"
                  </p>
                  <p className="text-center">
                    Recinto 102, Centro, 86300 Comalcalco, Tab.
                  </p>
                  <div className="d-flex align-items-center py-3 justify-content-center">
                    <a href="https://www.google.com/maps/place/Sal%C3%B3n+Jard%C3%ADn+Mar%C3%ADa+Cristina/@19.289967,-99.9551998,11z/data=!4m9!1m2!2m1!1ssalon+cristina!3m5!1s0x85cd89ca4f9cc363:0xd908e41b7f9f839b!8m2!3d19.289967!4d-99.6750484!15sCg5zYWxvbiBjcmlzdGluYVoQIg5zYWxvbiBjcmlzdGluYZIBFmZ1bmN0aW9uX3Jvb21fZmFjaWxpdHmaASNDaFpEU1VoTk1HOW5TMFZKUTBGblNVUk5kM1pFWVVkbkVBReABAA">
                      <button className="btn display-6 py-3 d-flex align-items-center">
                        <i className="bi bi-geo-alt text-dark"></i>
                        <span className="d-flex text-dark align-items-center justify-content-center p-0 m-0">
                          Ver mapa
                        </span>
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="window-back">
            <div
              className="window d-flex justify-content-center align-items-center"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <p className="p-4 rounded bg-white text-center w-90 display-5 font-paris font-weight-light">
                ¡Dios ha sido fiel hasta el día de hoy!
              </p>
            </div>
          </section>
          <section className="nuestro-inicio p-4">
            <p className="text-center text-white pt-4 display-6">
              Así empezamos
            </p>
            <div className="d-flex justify-content-center align-items-center">
              <div className="w-100 d-flex justify-content-center">
                <img loading="lazy" src={fotoCuadro} alt="foto" />
              </div>
            </div>
            <div className="d-flex pt-4 justify-content-center align-items-center">
              <p className="text text-white text-center display-6">
                Y estamos listos para el siguiente paso...
              </p>
            </div>
          </section>
          <section className="p-4" data-aos="zoom-in" data-aos-duration="2000">
            <div className="py-4 d-flex justify-content-center align-items-center">
              <img
                loading="lazy"
                className="line"
                src={lineaAlReves}
                alt="linea"
              />
            </div>
            <div className="py-4 d-flex justify-content-center">
              <p className="text2 text-center display-5">
                ¡Que nos acompañes es lo más importante! Y sí está en tu
                disposición realizar una muestra de cariño estaremos muy
                agradecidos
              </p>
            </div>
            <div className="pb-4 d-flex justify-content-center align-items-center">
              <img
                loading="lazy"
                className="line"
                src={decoration}
                alt="linea"
              />
            </div>
          </section>
          <section className="window-regalos d-flex justify-content-center align-items-center">
            <div className="w-80 h-80 d-flex justify-content-center">
              <div
                className="card-regalos p-4"
                data-aos="fade-up"
                data-aos-duration="3000"
              >
                <p className="display-4 text-center pt-4 font-paris">
                  Mesa de Regalos
                </p>
                <div className="d-flex justify-content-center">
                  <hr className="text-center" />
                </div>
                <div className="row d-flex justify-content-around align-items-center">
                  <div className="col-md-6">
                    <div className="d-flex pt-4 justify-content-center align-items-center">
                      <img
                        loading="lazy"
                        className="logo-liverpool"
                        src={logoLiverpool}
                        alt="logo"
                      />
                    </div>
                    <div className="d-flex justify-content-center">
                      <a
                        href="https://www.liverpool.com.mx/tienda/home"
                        className="w-80 d-flex justify-content-center"
                      >
                        <button className="btn btn-light display-6 text-center my-3 p-2">
                          Ir a mesa de regalos
                          <i className="bi bi-box-arrow-up-right"></i>
                        </button>
                      </a>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="pt-4 d-flex justify-content-center">
                      <i className="bi bi-envelope icon-sobre"></i>
                    </div>
                    <div className="d-flex justify-content-center">
                      <p className="w-80 text-center display-6 text-shadow">
                        Sobre con dinero en efectivo
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="d-flex justify-content-center align-items-center">
            <div className="w-80 py-4 text-center">
              <p
                className="display-6"
                data-aos="flip-up"
                data-aos-duration="2000"
              >
                ¡Gracias por tus muestras de cariño!
              </p>
              <div>
                <p
                  className="display-6"
                  data-aos="flip-up"
                  data-aos-duration="2000"
                >
                  Si así lo prefieres, también puedes hacer transferencia
                </p>
                <div className="d-flex justify-content-center">
                  <hr />
                </div>
                <p className="display-number">4027665305767718</p>
                <p>Arturo Jiménez Díaz</p>
                <p>BBVA</p>
              </div>
            </div>
          </section>
          <section className="pase bg-gold p-4">
            <p className="text-white text-center display-6">
              Este día es muy especial y que vayas ¡lo hace aún más!
            </p>
          </section>
          <section className="bg-gray p-3">
            <p className="text-center p-0 m-0">
              <i className="bi bi-hearts"></i>Respetuosamente NO NIÑOS
            </p>
          </section>
          <section className="text-center p-4">
            {guest && (
              <div>
                {guest?.principalName && <p>{guest?.principalName}</p>}
                <p>
                  Hemos reservado {guest?.accompanist?.length} lugares para
                  ustedes
                </p>

                {guest.accompanist?.map((accom, index) => (
                  <>
                    <div className="d-flex justify-content-center align-items-center">
                      <p key={index} className="mb-0">
                        {index + 1}.- {accom.name}
                      </p>
                      <input type="checkbox" />
                    </div>
                  </>
                ))}
              </div>
            )}
            <p
              className="display-4"
              data-aos="zoom-in"
              data-aos-duration="2000"
            >
              ¡Confirma tu asistencia!
            </p>
            <div className="d-flex justify-content-center align-items-center">
              <p
                className="w-50 py-4"
                data-aos="fade-in"
                data-aos-duration="3000"
              >
                <i className="bi bi-ticket font-icon"></i>Por favor, danos la
                respuesta de tu asistencia al evento antes del 15 de Noviembre
              </p>
            </div>
            <div></div>
            <div>
              <a href="https://wa.me/524426147355?text=Hola%20Esmeralda!%20Me%20interesa%20contratar%20tu%20servicio">
                <button className="btn p-3 display-6 text-dark">
                  <i className="bi bi-check text-dark"></i>Confirmar
                </button>
              </a>
            </div>
            <div className="pt-2">
              <a href="https://wa.me/524426147355?text=Hola%20Esmeralda!%20Me%20interesa%20contratar%20tu%20servicio">
                <button className="btn p-1 btn-dark">
                  <i className="bi bi-x"></i>No podré asistir
                </button>
              </a>
            </div>
          </section>
          <section className="last-window-back d-flex justify-content-center align-items-center">
            <div className="font-paris display-2 text-white p-4">
              <p
                className="text-center"
                data-aos="fade-down"
                data-aos-duration="2000"
              >
                ¡Te esperamos!
              </p>
            </div>
          </section>
          <section className="last-container">
            <p className="text-center m-0 p-0">
              Digita Invite
              <a
                target="_blank"
                href="https://wa.me/524426147355?text=Hola%20Esmeralda!%20Me%20interesa%20contratar%20tu%20servicio"
                className="marca"
              >
                by Esmeralda <i className="bi bi-whatsapp"></i>
              </a>
            </p>
          </section>
        </div>

        {/* <!-- js --> */}

        <script src="./javascript.js"></script>
        <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
        {/* <!-- icons --> */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css"
        />

        {/* <!-- google fonts --> */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Parisienne&display=swap"
          rel="stylesheet"
        />
        {/* <!-- boostrp --> */}
        <script
          src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
          integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
          crossorigin="anonymous"
        ></script>
        <script
          src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js"
          integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
          crossorigin="anonymous"
        ></script>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js"
          integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
          crossorigin="anonymous"
        ></script>
        <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
      </div>
    </div>
  );
};

export default Intivacion;
