import React from "react";

const Sobre = ({ abrir, openInvitation, hide, openModal }) => {
  return (
    <>

        <div 
        className={`bg-dark-black d-flex justify-content-center align-items-center animate__animated test-class
         ${openInvitation && "animate__slideOutUp "} ${openModal && "overflow-hide"} `}>
               <button  className="btn-open" onClick={abrir}>

        <div>

          <p
            className="display-4 text-center font-paris text-white text-shadow pl-4 pr-4 mt-13"
          >
          ¡Nos dimos el Sí!…
          </p>
            <p               id="logo"
              loading="lazy"
              className={`animate__animated animate__pulse  text-center text-white ${
                !openInvitation && "animate__infinite"
              } ${!hide && "hide"}`}
              alt="logo">
              Pulse para abrir
            </p>

        </div>
        </button>

      </div>
    

    </>
  );
};

export default Sobre;
